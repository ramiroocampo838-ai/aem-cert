import { NextResponse } from "next/server"
import { readdir, stat, readFile } from "fs/promises"
import path from "path"

export interface SlideFile {
  name: string
  title: string
  url: string
  size: number
  extension: string
  slideCount: number | null
}

const SLIDE_EXTENSIONS = [".pptx", ".ppt", ".odp"]

function formatTitle(filename: string): string {
  const withoutExt = filename.replace(/\.[^/.]+$/, "")
  return withoutExt
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

// PPTX files are ZIP archives. Slides live at ppt/slides/slide1.xml, slide2.xml, etc.
// We parse the ZIP Central Directory to count them without any external dependency.
function countSlidesFromBuffer(buffer: Buffer): number | null {
  // Scan backwards for the End of Central Directory signature: PK\x05\x06
  let eocdOffset = -1
  const scanFrom = Math.max(0, buffer.length - 65558) // max EOCD comment size
  for (let i = buffer.length - 22; i >= scanFrom; i--) {
    if (
      buffer[i] === 0x50 &&
      buffer[i + 1] === 0x4b &&
      buffer[i + 2] === 0x05 &&
      buffer[i + 3] === 0x06
    ) {
      eocdOffset = i
      break
    }
  }
  if (eocdOffset === -1) return null

  const cdOffset = buffer.readUInt32LE(eocdOffset + 16)
  const cdSize = buffer.readUInt32LE(eocdOffset + 12)

  let count = 0
  let pos = cdOffset

  while (pos < cdOffset + cdSize && pos + 46 <= buffer.length) {
    // Central Directory entry signature: PK\x01\x02
    if (
      buffer[pos] !== 0x50 ||
      buffer[pos + 1] !== 0x4b ||
      buffer[pos + 2] !== 0x01 ||
      buffer[pos + 3] !== 0x02
    ) break

    const fileNameLength = buffer.readUInt16LE(pos + 28)
    const extraFieldLength = buffer.readUInt16LE(pos + 30)
    const fileCommentLength = buffer.readUInt16LE(pos + 32)
    const fileName = buffer.toString("utf8", pos + 46, pos + 46 + fileNameLength)

    // Match only actual slide files, not layouts or masters
    if (/^ppt\/slides\/slide\d+\.xml$/.test(fileName)) {
      count++
    }

    pos += 46 + fileNameLength + extraFieldLength + fileCommentLength
  }

  return count > 0 ? count : null
}

export async function GET() {
  try {
    const slidesDir = path.join(process.cwd(), "public", "slides")
    const files = await readdir(slidesDir)
    const slideFiles: SlideFile[] = []

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!SLIDE_EXTENSIONS.includes(ext)) continue

      const filePath = path.join(slidesDir, file)
      const fileStat = await stat(filePath)

      let slideCount: number | null = null
      if (ext === ".pptx") {
        try {
          const buffer = await readFile(filePath)
          slideCount = countSlidesFromBuffer(buffer)
        } catch {
          // slide count unavailable for this file
        }
      }

      slideFiles.push({
        name: file,
        title: formatTitle(file),
        url: `/slides/${encodeURIComponent(file)}`,
        size: fileStat.size,
        extension: ext.replace(".", "").toUpperCase(),
        slideCount,
      })
    }

    slideFiles.sort((a, b) => a.title.localeCompare(b.title))
    return NextResponse.json({ slides: slideFiles })
  } catch {
    return NextResponse.json({ slides: [] })
  }
}

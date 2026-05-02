import { NextResponse } from "next/server"
import { readdir, stat, access } from "fs/promises"
import path from "path"

export interface AudioFile {
  name: string
  title: string
  url: string
  size: number
  extension: string
  speechUrl?: string
}

const AUDIO_EXTENSIONS = [".mp3", ".wav", ".ogg", ".m4a", ".aac", ".flac", ".webm"]

function formatTitle(filename: string): string {
  const withoutExt = filename.replace(/\.[^/.]+$/, "")
  return withoutExt
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function GET() {
  try {
    const audiosDir = path.join(process.cwd(), "public", "audios")
    const speechesDir = path.join(process.cwd(), "public", "speeches")
    const files = await readdir(audiosDir)

    const audioFiles: AudioFile[] = []

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!AUDIO_EXTENSIONS.includes(ext)) continue

      const filePath = path.join(audiosDir, file)
      const fileStat = await stat(filePath)

      const basename = path.basename(file, ext)
      const speechPath = path.join(speechesDir, `${basename}.txt`)
      let speechUrl: string | undefined
      try {
        await access(speechPath)
        speechUrl = `/speeches/${basename}.txt`
      } catch {
        speechUrl = undefined
      }

      audioFiles.push({
        name: file,
        title: formatTitle(file),
        url: `/audios/${encodeURIComponent(file)}`,
        size: fileStat.size,
        extension: ext.replace(".", "").toUpperCase(),
        speechUrl,
      })
    }

    audioFiles.sort((a, b) => a.title.localeCompare(b.title))

    return NextResponse.json({ audios: audioFiles })
  } catch {
    return NextResponse.json({ audios: [] })
  }
}

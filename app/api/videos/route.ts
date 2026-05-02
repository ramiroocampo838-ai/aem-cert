import { NextResponse } from "next/server"
import { readdir, stat } from "fs/promises"
import path from "path"

export interface VideoFile {
  name: string
  title: string
  url: string
  size: number
  extension: string
}

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".mkv", ".avi"]

function formatTitle(filename: string): string {
  const withoutExt = filename.replace(/\.[^/.]+$/, "")
  return withoutExt
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function GET() {
  try {
    const videosDir = path.join(process.cwd(), "public", "videos")
    const files = await readdir(videosDir)

    const videoFiles: VideoFile[] = []

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!VIDEO_EXTENSIONS.includes(ext)) continue

      const filePath = path.join(videosDir, file)
      const fileStat = await stat(filePath)

      videoFiles.push({
        name: file,
        title: formatTitle(file),
        url: `/videos/${encodeURIComponent(file)}`,
        size: fileStat.size,
        extension: ext.replace(".", "").toUpperCase(),
      })
    }

    videoFiles.sort((a, b) => a.title.localeCompare(b.title))

    return NextResponse.json({ videos: videoFiles })
  } catch {
    return NextResponse.json({ videos: [] })
  }
}

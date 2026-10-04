import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export const dynamic = "force-dynamic"

export interface VideoItem {
  id: string
  part: number | null
  duration: number
  size: number
}

export interface VideoCategory {
  slug: string
  order: number
  name: string
  videos: VideoItem[]
}

export interface VideoSection {
  id: string
  label: string
  accent: string
  categories: VideoCategory[]
}

export async function GET() {
  try {
    const file = path.join(process.cwd(), "video-out", "manifest.json")
    const manifest = JSON.parse(await readFile(file, "utf8")) as { sections: VideoSection[] }
    return NextResponse.json(manifest)
  } catch {
    return NextResponse.json({ sections: [] })
  }
}

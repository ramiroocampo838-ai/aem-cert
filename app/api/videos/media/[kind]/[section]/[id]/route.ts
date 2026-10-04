import { createReadStream } from "fs"
import { stat } from "fs/promises"
import path from "path"
import { Readable } from "stream"

export const dynamic = "force-dynamic"

const SAFE = /^[a-z0-9][a-z0-9._-]*$/i

export async function GET(
  req: Request,
  { params }: { params: Promise<{ kind: string; section: string; id: string }> },
) {
  const { kind, section, id } = await params
  if (!SAFE.test(section) || !SAFE.test(id) || (kind !== "video" && kind !== "poster")) {
    return new Response("Not found", { status: 404 })
  }

  const base = path.join(process.cwd(), "video-out")
  const file =
    kind === "video" ? path.join(base, section, `${id}.mp4`) : path.join(base, ".posters", section, `${id}.jpg`)
  const contentType = kind === "video" ? "video/mp4" : "image/jpeg"

  let size: number
  try {
    size = (await stat(file)).size
  } catch {
    return new Response("Not found", { status: 404 })
  }

  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get("range") ?? "")
  let start = 0
  let end = size - 1
  if (range && (range[1] || range[2])) {
    if (range[1]) {
      start = Number(range[1])
      if (range[2]) end = Math.min(Number(range[2]), size - 1)
    } else {
      start = Math.max(size - Number(range[2]), 0)
    }
    if (start > end || start >= size) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } })
    }
  }

  const stream = Readable.toWeb(createReadStream(file, { start, end })) as ReadableStream
  const headers: Record<string, string> = {
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
    "Content-Length": String(end - start + 1),
    "Cache-Control": "public, max-age=3600",
  }
  if (range) headers["Content-Range"] = `bytes ${start}-${end}/${size}`
  return new Response(stream, { status: range ? 206 : 200, headers })
}

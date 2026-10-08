// Builds lib/videos/manifest.json from lib/concepts + lib/videos/youtube-urls.json.
// Durations come from local mp4s in video-out when present, otherwise from the previous manifest.
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { root, slug, loadCategories, loadConfig, splitCategory } from "./lib.mjs"

const cfg = loadConfig()
const outDir = path.join(root, cfg.outputDir)
const manifestPath = path.join(root, "lib", "videos", "manifest.json")
const urlsPath = path.join(root, "lib", "videos", "youtube-urls.json")

const readJson = (file, fallback) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : fallback)
const previous = readJson(manifestPath, { sections: [] })
const urls = readJson(urlsPath, {})

const previousDuration = new Map()
for (const s of previous.sections)
  for (const c of s.categories) for (const v of c.videos) previousDuration.set(`${s.id}/${v.id}`, v.duration)

const ID_RE = /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})(?:[?&#/].*)?$/

// Returns the 11-char id, null when empty (pending), undefined when the value is not a YouTube URL.
function parseYoutubeId(value) {
  const v = String(value ?? "").trim()
  if (!v) return null
  if (/^[\w-]{11}$/.test(v)) return v
  return ID_RE.exec(v)?.[1]
}

function probeDuration(file) {
  return Math.round(
    parseFloat(
      execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], {
        encoding: "utf8",
      }),
    ),
  )
}

const invalid = []
const missingDuration = []
const knownIds = new Set()
const sections = []

for (const [id, meta] of Object.entries(cfg.sections)) {
  const categories = loadCategories(id)
  const out = categories.map((category, i) => {
    const order = i + 1
    const catSlug = slug(category.name)
    const parts = splitCategory(category, cfg, id)
    const videos = parts.map((part) => {
      const base = `${String(order).padStart(2, "0")}_${catSlug}${parts.length > 1 ? `_part_${part.number}` : ""}`
      const key = `${id}/${base}`
      knownIds.add(key)

      const file = path.join(outDir, id, `${base}.mp4`)
      const duration = fs.existsSync(file) ? probeDuration(file) : (previousDuration.get(key) ?? null)
      if (duration == null) missingDuration.push(key)

      const raw = urls[id]?.[base]
      const youtubeId = parseYoutubeId(raw)
      if (youtubeId === undefined) invalid.push(`${key}: ${raw}`)

      return {
        id: base,
        part: parts.length > 1 ? part.number : null,
        duration,
        youtubeId: youtubeId ?? null,
        description: category.videoDescriptions?.[part.number - 1],
      }
    })
    return { slug: catSlug, order, name: category.name, videos }
  })
  sections.push({ id, label: meta.label, accent: meta.accent, categories: out })
}

const unknownKeys = []
for (const [sectionId, entries] of Object.entries(urls))
  for (const videoId of Object.keys(entries))
    if (!knownIds.has(`${sectionId}/${videoId}`)) unknownKeys.push(`${sectionId}/${videoId}`)

fs.mkdirSync(path.dirname(manifestPath), { recursive: true })
fs.writeFileSync(manifestPath, JSON.stringify({ sections }, null, 2) + "\n")

// Keep youtube-urls.json complete and in syllabus order: new videos get an empty entry, existing URLs are untouched.
const completeUrls = {}
for (const s of sections) {
  completeUrls[s.id] = {}
  for (const c of s.categories) for (const v of c.videos) completeUrls[s.id][v.id] = urls[s.id]?.[v.id] ?? ""
}
const completeJson = JSON.stringify(completeUrls, null, 2) + "\n"
if (completeJson !== (fs.existsSync(urlsPath) ? fs.readFileSync(urlsPath, "utf8") : "")) {
  fs.writeFileSync(urlsPath, completeJson)
  console.log("youtube-urls.json: added entries for new videos")
}

const all = sections.flatMap((s) => s.categories.flatMap((c) => c.videos))
const linked = all.filter((v) => v.youtubeId).length
console.log(`manifest.json: ${sections.length} sections, ${all.length} videos, ${linked} with YouTube URL, ${all.length - linked} pending`)
if (unknownKeys.length) console.warn(`\nKeys in youtube-urls.json that match no video:\n  - ${unknownKeys.join("\n  - ")}`)
if (missingDuration.length) console.warn(`\nNo duration (no local mp4 and not in previous manifest):\n  - ${missingDuration.join("\n  - ")}`)
if (invalid.length) {
  console.error(`\nInvalid YouTube URLs:\n  - ${invalid.join("\n  - ")}`)
  process.exit(1)
}

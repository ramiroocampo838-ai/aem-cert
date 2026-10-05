// Scans video-out and writes video-out/manifest.json plus a poster jpg per video.
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { root, slug, loadCategories, loadConfig } from "./lib.mjs"

const cfg = loadConfig()
const outDir = path.join(root, cfg.outputDir)
const postersDir = path.join(outDir, ".posters")
const FILE_RE = /^(\d+)_(.+?)(?:_part_(\d+))?\.mp4$/

const ffprobeDuration = (file) =>
  Math.round(
    parseFloat(
      execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], {
        encoding: "utf8",
      }),
    ),
  )

function makePoster(file, target) {
  if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= fs.statSync(file).mtimeMs) return
  fs.mkdirSync(path.dirname(target), { recursive: true })
  execFileSync(
    "ffmpeg",
    ["-y", "-v", "error", "-ss", "2", "-i", file, "-frames:v", "1", "-vf", "scale=480:-2", "-q:v", "4", target],
    { stdio: "inherit" },
  )
}

const sections = []
for (const [id, meta] of Object.entries(cfg.sections)) {
  const dir = path.join(outDir, id)
  if (!fs.existsSync(dir)) continue

  const categoryBySlug = new Map(loadCategories(id).map((category) => [slug(category.name), category]))
  const groups = new Map()

  for (const file of fs.readdirSync(dir).sort()) {
    const m = FILE_RE.exec(file)
    if (!m) continue
    const [, nn, catSlug, part] = m
    const base = file.replace(/\.mp4$/, "")
    const full = path.join(dir, file)
    makePoster(full, path.join(postersDir, id, `${base}.jpg`))

    if (!groups.has(catSlug)) {
      groups.set(catSlug, {
        slug: catSlug,
        order: Number(nn),
        name: categoryBySlug.get(catSlug)?.name ?? catSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        videos: [],
      })
    }
    groups.get(catSlug).videos.push({
      id: base,
      part: part ? Number(part) : null,
      duration: ffprobeDuration(full),
      size: fs.statSync(full).size,
      description: categoryBySlug.get(catSlug)?.videoDescriptions?.[(part ? Number(part) : 1) - 1],
    })
  }

  const categories = [...groups.values()].sort((a, b) => a.order - b.order)
  categories.forEach((c) => c.videos.sort((a, b) => (a.part ?? 0) - (b.part ?? 0)))
  sections.push({ id, label: meta.label, accent: meta.accent, categories })
}

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify({ sections }, null, 2))
const total = sections.reduce((n, s) => n + s.categories.reduce((k, c) => k + c.videos.length, 0), 0)
console.log(`manifest.json: ${sections.length} sections, ${total} videos`)

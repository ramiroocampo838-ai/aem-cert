/**
 * Video generator for the AEM cert hub.
 * Usage: node tools/video-kit/build.mjs <section> [category-slug] [--part=N] [--script-only] [--keep-script] [--keep-work]
 *   Builds numbered videos (NN_slug[_part_N].mp4) from lib/concepts/<section>; long categories are split in parts.
 *   Edit tools/video-kit/work/<section>/<NN_slug[_part_N]>/video-script.json and re-run with
 *   --keep-script to build from your edits instead of regenerating the script.
 */
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { root, slug, loadCategories, loadConfig, buildScript, splitCategory } from "./lib.mjs"
import { renderScenes } from "./render.mjs"

const args = process.argv.slice(2)
const flags = args.filter((a) => a.startsWith("--"))
const partFlag = Number(flags.find((f) => f.startsWith("--part="))?.split("=")[1]) || 0
const [section, categorySlug] = args.filter((a) => !a.startsWith("--"))
if (!section) {
  console.error("Usage: node tools/video-kit/build.mjs <section> [category-slug] [--script-only] [--keep-script]")
  process.exit(1)
}

const cfg = loadConfig()
const allCategories = loadCategories(section)
const run = (cmd, cmdArgs) => {
  const r = spawnSync(cmd, cmdArgs, { encoding: "utf8" })
  if (r.status !== 0) {
    console.error(r.stderr?.slice(-2000) || r.stdout?.slice(-2000))
    process.exit(r.status ?? 1)
  }
  return r.stdout
}
const duration = (file) =>
  parseFloat(run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file]))

function validate(script) {
  const problems = []
  const ids = new Set()
  for (const s of script.scenes) {
    if (ids.has(s.id)) problems.push(`duplicate scene id ${s.id}`)
    ids.add(s.id)
    if (!s.narration?.trim()) problems.push(`scene ${s.id}: empty narration`)
  }
  if (problems.length) {
    console.error("Script problems:\n  - " + problems.join("\n  - "))
    process.exit(1)
  }
}

async function buildCategory(category) {
  const catSlug = slug(category.name)
  const order = String(allCategories.indexOf(category) + 1).padStart(2, "0")
  const parts = splitCategory(category, cfg, section)
  const only = partFlag ? parts.filter((p) => p.number === partFlag) : parts
  for (const part of only) await buildPart(category, part, `${order}_${catSlug}${parts.length > 1 ? `_part_${part.number}` : ""}`)
}

async function buildPart(category, part, name) {
  const workDir = path.join(root, "tools", "video-kit", "work", section, name)
  const outDir = path.join(root, cfg.outputDir, section)
  const scriptPath = path.join(workDir, "video-script.json")
  fs.mkdirSync(workDir, { recursive: true })
  fs.mkdirSync(outDir, { recursive: true })

  let script
  if (flags.includes("--keep-script") && fs.existsSync(scriptPath)) {
    script = JSON.parse(fs.readFileSync(scriptPath, "utf8"))
  } else {
    script = buildScript(section, category, cfg, part)
    fs.writeFileSync(scriptPath, JSON.stringify(script, null, 2))
  }
  validate(script)
  console.log(`\n== ${section} / ${name} (${script.scenes.length} scenes)`)
  if (flags.includes("--script-only")) return

  const audioDir = path.join(workDir, "audio")
  const frameDir = path.join(workDir, "frames")
  const clipDir = path.join(workDir, "clips")
  fs.mkdirSync(clipDir, { recursive: true })

  run("python", [path.join(import.meta.dirname, "tts.py"), scriptPath, audioDir])
  await renderScenes(script, frameDir, cfg)

  const clips = []
  const chapters = []
  let elapsed = 0
  for (const s of script.scenes) {
    const audio = path.join(audioDir, `${s.id}.mp3`)
    const clip = path.join(clipDir, `${s.id}.mp4`)
    const pad = s.hold ?? cfg.padSeconds
    const total = duration(audio) + pad
    run("ffmpeg", [
      "-y", "-loop", "1", "-framerate", String(cfg.fps), "-i", path.join(frameDir, `${s.id}.png`),
      "-i", audio, "-af", `apad=pad_dur=${pad}`, "-t", total.toFixed(2),
      "-c:v", "libx264", "-preset", "medium", "-tune", "stillimage", "-crf", String(cfg.crf ?? 28),
      "-pix_fmt", "yuv420p", "-r", String(cfg.fps),
      "-c:a", "aac", "-ar", "44100", "-ac", "2", clip,
    ])
    clips.push(clip)
    chapters.push({ start: elapsed, title: s.type === "title" ? "Introduction" : s.type === "recap" ? "Recap" : s.heading })
    elapsed += total
    console.log(`clip ${s.id} (${total.toFixed(1)}s)`)
  }
  // A short title scene is folded into the first concept chapter so every chapter lasts 10s or more.
  if (chapters.length > 1 && chapters[1].start < 10) {
    chapters.shift()
    chapters[0].start = 0
  }

  const list = path.join(workDir, "clips.txt")
  fs.writeFileSync(list, clips.map((c) => `file '${c.replace(/\\/g, "/")}'`).join("\n"))
  const final = path.join(outDir, `${name}.mp4`)
  run("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", list, "-c", "copy", final])
  console.log(`Final video: ${final} (${duration(final).toFixed(0)}s)`)

  writeYoutubeMeta(script, category, part, name, chapters)

  if (!flags.includes("--keep-work")) {
    for (const dir of [audioDir, frameDir, clipDir]) fs.rmSync(dir, { recursive: true, force: true })
    fs.rmSync(list, { force: true })
  }
}

const stamp = (seconds) => {
  const s = Math.round(seconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = String(s % 60).padStart(2, "0")
  return h ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`
}

// YouTube needs at least 3 chapters, the first at 0:00 and each at least 10 seconds long.
function writeYoutubeMeta(script, category, part, name, chapters) {
  const label = cfg.sections[section]?.label ?? section
  const partLabel = part.count > 1 ? ` (Part ${part.number} of ${part.count})` : ""
  const title = `${label}: ${category.name}${partLabel} | AEM Developer Certification`
  const valid = chapters.length >= 3 && chapters.every((c, i) => i === chapters.length - 1 || chapters[i + 1].start - c.start >= 10)
  const description = [
    category.videoDescriptions?.[part.number - 1],
    `Key concepts for the Adobe Experience Manager (AEM) Developer certification: ${category.name}${partLabel}.`,
    valid ? chapters.map((c) => `${stamp(c.start)} ${c.title}`).join("\n") : "",
    "#AEM #AdobeExperienceManager #AEMCertification",
  ]
    .filter(Boolean)
    .join("\n\n")

  const metaDir = path.join(root, "youtube-meta", section)
  fs.mkdirSync(metaDir, { recursive: true })
  fs.writeFileSync(path.join(metaDir, `${name}.txt`), `TITLE:\n${title}\n\nDESCRIPTION:\n${description}\n`)
  if (!valid) console.warn(`chapters skipped for ${name} (need >=3 chapters of >=10s)`)
}


const categories = loadCategories(section)
const selected = categorySlug ? categories.filter((c) => slug(c.name) === categorySlug) : categories
if (!selected.length) {
  console.error(`Category '${categorySlug}' not found. Available: ${categories.map((c) => slug(c.name)).join(", ")}`)
  process.exit(1)
}
for (const c of selected) await buildCategory(c)

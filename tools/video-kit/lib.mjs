import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
export const root = path.resolve(import.meta.dirname, "..", "..")
const ts = require(path.join(root, "node_modules", "typescript"))

// Minimal loader so the repo's TypeScript concept files can be read without a build step.
const cache = new Map()
function loadTs(file) {
  if (cache.has(file)) return cache.get(file)
  const src = fs.readFileSync(file, "utf8")
  const js = ts.transpileModule(src, { compilerOptions: { module: "commonjs" } }).outputText
  const mod = { exports: {} }
  cache.set(file, mod.exports)
  const req = (spec) => {
    const base = path.resolve(path.dirname(file), spec)
    const target = [base + ".ts", path.join(base, "index.ts")].find((p) => fs.existsSync(p))
    if (!target) throw new Error(`Cannot resolve ${spec} from ${file}`)
    return loadTs(target)
  }
  new Function("module", "exports", "require", js)(mod, mod.exports, req)
  return mod.exports
}

export const slug = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

export function loadCategories(section) {
  const index = path.join(root, "lib", "concepts", section, "index.ts")
  if (!fs.existsSync(index)) throw new Error(`Unknown section '${section}'`)
  const exports = loadTs(index)
  const key = Object.keys(exports).find((k) => k.endsWith("Categories"))
  return exports[key]
}

export function loadConfig() {
  return JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "kit.config.json"), "utf8"))
}

const clean = (s) => s.replace(/\s+/g, " ").trim()

// Builds the editable scene list for one category: title, one scene per concept, recap.
// Splits a category into evenly sized parts of at most cfg.maxConceptsPerVideo concepts.
export function splitCategory(category, cfg) {
  const max = cfg.maxConceptsPerVideo ?? 8
  const count = Math.ceil(category.concepts.length / max)
  const size = Math.ceil(category.concepts.length / count)
  return Array.from({ length: count }, (_, i) => ({
    number: i + 1,
    count,
    concepts: category.concepts.slice(i * size, (i + 1) * size),
  }))
}

export function buildScript(section, category, cfg, part = { number: 1, count: 1, concepts: category.concepts }) {
  const meta = cfg.sections[section] ?? { label: section, accent: cfg.defaultAccent }
  const concepts = part.concepts
  const partLabel = part.count > 1 ? ` (Part ${part.number} of ${part.count})` : ""
  const scenes = [
    {
      id: "00-title",
      type: "title",
      heading: category.name + partLabel,
      sub: `${meta.label} · ${concepts.length} key concepts`,
      narration: `${meta.label}. ${category.name}${partLabel}. In this video we review ${concepts.length} key concepts you need to know for the certification.`,
    },
    ...concepts.map((c, i) => ({
      id: `${String(i + 1).padStart(2, "0")}-${c.id}`,
      type: "concept",
      index: i + 1,
      total: concepts.length,
      question: clean(c.reference),
      heading: clean(c.title),
      body: clean(c.explanation),
      narration: `${clean(c.reference)} ${clean(c.title)}. ${clean(c.explanation)}`,
    })),
    {
      id: `${String(concepts.length + 1).padStart(2, "0")}-recap`,
      type: "recap",
      heading: "Quick recap",
      items: concepts.map((c) => clean(c.title)),
      narration: `Quick recap of ${category.name}${partLabel}. Take a moment to review these ${concepts.length} key points.`,
      hold: Math.round(concepts.length * 2.5),
    },
  ]
  return {
    section,
    sectionLabel: meta.label,
    accent: meta.accent,
    category: category.name + partLabel,
    voice: cfg.voice,
    scenes,
  }
}

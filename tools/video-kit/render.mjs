import fs from "node:fs"
import path from "node:path"
import { chromium } from "playwright-core"

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

const bodySize = (text) => (text.length <= 220 ? 44 : text.length <= 380 ? 38 : 32)

function sceneHtml(script, scene, cfg) {
  const a = script.accent
  let content = ""
  if (scene.type === "title") {
    content = `
      <div class="center">
        <div class="eyebrow">AEM Developer Certification</div>
        <h1 class="title">${esc(scene.heading)}</h1>
        <div class="sub">${esc(scene.sub)}</div>
      </div>`
  } else if (scene.type === "concept") {
    content = `
      <div class="top"><span class="chip">${esc(script.category)}</span>
        <span class="count">Concept ${scene.index} of ${scene.total}</span></div>
      <div class="question">${esc(scene.question)}</div>
      <h2 class="answer">${esc(scene.heading)}</h2>
      <p class="body" style="font-size:${bodySize(scene.body)}px">${esc(scene.body)}</p>
      <div class="bar"><div style="width:${(scene.index / scene.total) * 100}%"></div></div>`
  } else {
    content = `
      <div class="top"><span class="chip">${esc(script.category)}</span></div>
      <h2 class="answer">${esc(scene.heading)}</h2>
      <ul class="recap">${scene.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0}
  body{width:${cfg.width}px;height:${cfg.height}px;font-family:"Segoe UI",Arial,sans-serif;color:#f1f5f9;
    background:radial-gradient(1200px 700px at 85% 0%,${a}33,transparent 60%),#0b1020;
    padding:90px 130px;display:flex;flex-direction:column;position:relative;overflow:hidden}
  body:before{content:"";position:absolute;left:0;top:0;bottom:0;width:14px;background:${a}}
  .center{margin:auto 0}
  .eyebrow{color:${a};font-size:30px;letter-spacing:6px;text-transform:uppercase;margin-bottom:28px}
  .title{font-size:120px;line-height:1.05}
  .sub{font-size:40px;color:#94a3b8;margin-top:32px}
  .top{display:flex;justify-content:space-between;align-items:center;margin-bottom:54px}
  .chip{background:${a}26;color:${a};border:2px solid ${a}66;padding:10px 26px;border-radius:999px;font-size:28px;font-weight:600}
  .count{color:#94a3b8;font-size:28px}
  .question{color:#94a3b8;font-size:34px;margin-bottom:26px;line-height:1.35}
  .answer{font-size:58px;line-height:1.2;color:#fff;margin-bottom:38px}
  .body{line-height:1.5;color:#cbd5e1}
  .bar{position:absolute;left:130px;right:130px;bottom:60px;height:8px;background:#1e293b;border-radius:4px}
  .bar div{height:100%;background:${a};border-radius:4px}
  .recap{list-style:none;padding:0;display:grid;gap:18px}
  .recap li{font-size:32px;line-height:1.3;background:#111936;border-left:6px solid ${a};padding:16px 26px;border-radius:8px}
  </style></head><body>${content}</body></html>`
}

export async function renderScenes(script, outDir, cfg) {
  fs.mkdirSync(outDir, { recursive: true })
  const browser = await chromium.launch({ executablePath: cfg.browserPath })
  const page = await browser.newPage({ viewport: { width: cfg.width, height: cfg.height } })
  for (const scene of script.scenes) {
    await page.setContent(sceneHtml(script, scene, cfg))
    await page.screenshot({ path: path.join(outDir, `${scene.id}.png`) })
    console.log(`frame ${scene.id}`)
  }
  await browser.close()
}

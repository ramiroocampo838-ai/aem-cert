# Video Kit

The Video Kit is the project's own tool for generating narrated study videos. It turns the concept lists in `lib/concepts/<section>/` into one video per concept category. The mp4 files are rendered locally and **uploaded to YouTube** by hand; the **Videos** page of the app embeds them from YouTube.

Everything lives in `tools/video-kit/`.

## How it works

```
lib/concepts/<section>   concepts (id, reference, title, explanation)
        |
        v
  buildScript()          video-script.json (editable scene list)
        |
        +--> tts.py      one narration mp3 per scene (edge-tts)
        +--> render.mjs  one 1920x1080 png per scene (HTML + Playwright)
        |
        v
  ffmpeg                 one clip per scene (png + mp3), then concatenated
        |
        v
video-out/<section>/NN_slug[_part_N].mp4     (local only, git-ignored)
youtube-meta/<section>/NN_slug[_part_N].txt  (title, description, chapters)
        |
        |  upload to YouTube, paste the URL in lib/videos/youtube-urls.json
        v
  pnpm video:index       lib/videos/manifest.json
        |
        v
  /videos page           browse by section and category, play (YouTube embed)
```

The script is built from each concept's `reference` (the question), `title` and `explanation`. Narration is in English.

### Scenes of a video

1. **Title**: category name, section label and number of concepts.
2. **One scene per concept**: question, title, explanation and a progress bar. The narration reads the question, the title and the explanation.
3. **Recap**: the concept titles are shown on screen, held about 2.5 seconds per item. They are not read aloud.

### Splitting and naming

- A category with more than `maxConceptsPerVideo` concepts (default 8) is split into evenly sized parts, so no part ends up with a single concept.
- File name: `NN_slug.mp4`, or `NN_slug_part_N.mp4` when split.
- `NN` is the two-digit position of the category in the section's `index.ts`. It follows the syllabus order, so sorting by name plays the videos in the right order. All parts of one category share the same `NN`.
- Part titles say "Part 1 of 3", and each part has its own recap.

## Requirements

| Tool | Used for |
| --- | --- |
| Node.js and pnpm | Running the scripts |
| `playwright-core` (dev dependency) | Capturing scenes. It does not download browsers. |
| Microsoft Edge (or another Chromium browser) | Rendering. The path is `browserPath` in `kit.config.json`. |
| Python and `edge-tts` (`pip install edge-tts`) | Text to speech. Needs internet access. |
| `ffmpeg` and `ffprobe` on `PATH` | Building clips, concatenating, durations and posters |

## Usage

```bash
pnpm video:build <section>                  # every category of a section
pnpm video:build <section> <category-slug>  # one category
pnpm video:index                            # rebuild lib/videos/manifest.json
```

Options for `video:build`:

| Option | Effect |
| --- | --- |
| `--part=N` | Build only part N of the selected category |
| `--script-only` | Generate `video-script.json` and stop |
| `--keep-script` | Build from the existing `video-script.json` instead of regenerating it |
| `--keep-work` | Keep the audio, frames and clips in `work/` (deleted by default after each video) |

The category slug is the lowercase name with `&` replaced by `and` and other symbols replaced by `-`. If the slug is wrong, the tool lists the valid ones.

Examples:

```bash
pnpm video:build components
pnpm video:build intro aem-overview
pnpm video:build cloud-manager ci-cd-pipelines --part=2
pnpm video:index
```

### Publishing a video

1. Build it (`pnpm video:build ...`). Open `youtube-meta/<section>/<video>.txt` for the title, description and chapter timestamps to paste into YouTube.
2. Upload the mp4 from `video-out/<section>/` as a public video.
3. Paste its URL in `lib/videos/youtube-urls.json`, under the section and video id (`"01_aem-overview": "https://youtu.be/XXXXXXXXXXX"`). Any `youtu.be`, `watch?v=`, `embed/` or `shorts/` URL works, or the bare 11-character id. An empty value means the video is still pending and shows as "Coming soon".
4. Run `pnpm video:index` and commit `lib/videos/`. The command fails if a URL is not a valid YouTube link, and warns about keys that match no video.

`pnpm video:index` does not need the mp4 files. It takes the duration from the local mp4 when it exists and keeps the previous value otherwise.

### Editing a script before building

```bash
pnpm video:build components htl-fundamentals --script-only
# edit tools/video-kit/work/components/05_htl-fundamentals/video-script.json
pnpm video:build components htl-fundamentals --keep-script
```

Each scene has an `id`, a `type` (`title`, `concept` or `recap`) and a `narration`. A scene can set `hold` to change how many seconds it stays on screen after the narration. The tool stops if a scene has an empty narration or a duplicate id.

## Configuration: `kit.config.json`

| Key | Meaning |
| --- | --- |
| `voice` | edge-tts voice (default `en-US-GuyNeural`) |
| `width`, `height`, `fps`, `crf` | Output format (1920x1080, 5 fps, CRF 28 with `-tune stillimage`; the scenes are static, so a low frame rate keeps files small) |
| `padSeconds` | Silence after each scene's narration |
| `browserPath` | Chromium or Edge executable used for rendering |
| `outputDir` | Output folder (`video-out`) |
| `defaultAccent` | Color for sections not listed below |
| `maxConceptsPerVideo` | Maximum concepts per video before splitting (8) |
| `sections.<id>` | `label` and `accent` color of each section, and optionally its own `maxConceptsPerVideo` (Intro uses 99 so its videos are not split) |

## Files

| File | Role |
| --- | --- |
| `build.mjs` | Entry point of `video:build`. Splits categories, validates scripts, runs the pipeline and writes the YouTube metadata. |
| `lib.mjs` | Loads the concept `.ts` files, config, `slug()`, `splitCategory()` and `buildScript()` |
| `render.mjs` | Renders each scene as HTML in the browser and saves a PNG |
| `tts.py` | Generates one mp3 per scene with edge-tts |
| `index.mjs` | Entry point of `video:index`. Builds `lib/videos/manifest.json` from the concepts and `youtube-urls.json`. |
| `kit.config.json` | Settings |
| `work/` | Per-video scripts (kept in git) and temporary audio, frames and clips (git-ignored, removed after each build). |

Files outside the kit:

| File | Role |
| --- | --- |
| `lib/videos/youtube-urls.json` | Hand-edited map `section -> video id -> YouTube URL`. Committed. |
| `lib/videos/manifest.json` | Generated by `video:index`. Committed. |
| `video-out/<section>/*.mp4` | Rendered videos. Git-ignored, local only. |
| `youtube-meta/<section>/*.txt` | Title, description and chapters for each video. Git-ignored. |

## The Videos page

- `GET /api/videos` returns `lib/videos/manifest.json`.
- The page embeds each video with the YouTube IFrame API (`youtube-nocookie.com`) and uses the YouTube thumbnails. Videos without a URL are shown as "Coming soon" and skipped by autoplay and the previous/next buttons.
- It shows the sections as chips, the categories in syllabus order, durations and part badges. It also has search and watched markers saved in `localStorage`. It plays the next video automatically and supports direct links such as `/videos?s=components&v=03_proxy-component-pattern`.

## Adding a new section

1. Add `lib/concepts/<section>/index.ts` exporting an array whose name ends in `Categories`.
2. Add the section to `kit.config.json` with a `label` and an `accent` color. Without it the default color is used.
3. Run `pnpm video:build <section>` and then `pnpm video:index`, which adds empty entries for the new videos to `lib/videos/youtube-urls.json`.

## Troubleshooting

- **`Unknown section`**: there is no `lib/concepts/<section>/index.ts`.
- **Browser fails to launch**: check `browserPath` in `kit.config.json`.
- **`edge_tts` not found or no audio**: run `pip install edge-tts` and check the internet connection.
- **`ffmpeg` or `ffprobe` not found**: install them and add them to `PATH`.
- **A video shows "Coming soon"**: its entry in `lib/videos/youtube-urls.json` is empty or missing; add the URL and run `pnpm video:index`.
- **`Invalid YouTube URLs`**: fix the listed values in `lib/videos/youtube-urls.json`.
- **Part numbers or names changed after editing concepts**: delete the old files in `video-out/<section>/` before rebuilding, because stale files are not removed, and update the ids in `youtube-urls.json`.

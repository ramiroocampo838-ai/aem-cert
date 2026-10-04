# Video Kit

The Video Kit is the project's own tool for generating narrated study videos. It turns the concept lists in `lib/concepts/<section>/` into one video per concept category, which the **Videos** page of the app then lets users browse and play.

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
video-out/<section>/NN_slug[_part_N].mp4
        |
        v
  pnpm video:index       video-out/manifest.json + poster jpgs
        |
        v
  /videos page           browse by section and category, play
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
pnpm video:index                            # rebuild the manifest and posters
```

Options for `video:build`:

| Option | Effect |
| --- | --- |
| `--part=N` | Build only part N of the selected category |
| `--script-only` | Generate `video-script.json` and stop |
| `--keep-script` | Build from the existing `video-script.json` instead of regenerating it |

The category slug is the lowercase name with `&` replaced by `and` and other symbols replaced by `-`. If the slug is wrong, the tool lists the valid ones.

Examples:

```bash
pnpm video:build components
pnpm video:build intro aem-overview
pnpm video:build cloud-manager ci-cd-pipelines --part=2
pnpm video:index
```

Run `pnpm video:index` after generating videos, otherwise the Videos page will not show them.

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
| `width`, `height`, `fps` | Output format (1920x1080, 30 fps) |
| `padSeconds` | Silence after each scene's narration |
| `browserPath` | Chromium or Edge executable used for rendering |
| `outputDir` | Output folder (`video-out`) |
| `defaultAccent` | Color for sections not listed below |
| `maxConceptsPerVideo` | Maximum concepts per video before splitting (8) |
| `sections.<id>` | `label` and `accent` color of each section |

## Files

| File | Role |
| --- | --- |
| `build.mjs` | Entry point of `video:build`. Splits categories, validates scripts and runs the pipeline. |
| `lib.mjs` | Loads the concept `.ts` files, config, `slug()`, `splitCategory()` and `buildScript()` |
| `render.mjs` | Renders each scene as HTML in the browser and saves a PNG |
| `tts.py` | Generates one mp3 per scene with edge-tts |
| `index.mjs` | Entry point of `video:index`. Writes the manifest and posters. |
| `kit.config.json` | Settings |
| `work/` | Per-video scripts, audio, frames and clips. Git-ignored. Safe to delete. |

Output goes to `video-out/`, which is also git-ignored:

```
video-out/
  manifest.json
  .posters/<section>/<video>.jpg
  <section>/NN_slug[_part_N].mp4
```

## The Videos page

- `GET /api/videos` returns `video-out/manifest.json`.
- `GET /api/videos/media/<video|poster>/<section>/<id>` streams the mp4 or the poster from `video-out`. It supports HTTP range requests, so seeking works, and it only accepts safe file names.
- The page shows the sections as chips, the categories in syllabus order, and the posters, durations and part badges. It also has search and watched markers saved in `localStorage`. It plays the next video automatically and supports direct links such as `/videos?s=components&v=03_proxy-component-pattern`.

Videos are served from the local `video-out` folder. They are not in git. To deploy the app, host the files somewhere else and point the media route to that location.

## Adding a new section

1. Add `lib/concepts/<section>/index.ts` exporting an array whose name ends in `Categories`.
2. Add the section to `kit.config.json` with a `label` and an `accent` color. Without it the default color is used.
3. Run `pnpm video:build <section>` and then `pnpm video:index`.

## Troubleshooting

- **`Unknown section`**: there is no `lib/concepts/<section>/index.ts`.
- **Browser fails to launch**: check `browserPath` in `kit.config.json`.
- **`edge_tts` not found or no audio**: run `pip install edge-tts` and check the internet connection.
- **`ffmpeg` or `ffprobe` not found**: install them and add them to `PATH`.
- **A video is missing from the page**: run `pnpm video:index`.
- **Part numbers or names changed after editing concepts**: delete the old files in `video-out/<section>/` before rebuilding, because stale files are not removed.
- **Intro videos are not split**: they were generated before the splitting rule existed. Rebuild the section to get the split format.

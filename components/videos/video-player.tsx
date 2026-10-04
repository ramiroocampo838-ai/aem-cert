"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, Play, SkipBack, SkipForward, Search, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { VideoCategory, VideoItem, VideoSection } from "@/app/api/videos/route"

interface Entry {
  category: VideoCategory
  video: VideoItem
  partCount: number
}

const WATCHED_KEY = "aem-cert:videos-watched"

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

function flatten(section: VideoSection): Entry[] {
  return section.categories.flatMap((category) =>
    category.videos.map((video) => ({ category, video, partCount: category.videos.length })),
  )
}

const mediaUrl = (kind: "video" | "poster", section: string, id: string) =>
  `/api/videos/media/${kind}/${section}/${id}`

export function VideoPlayer() {
  const [sections, setSections] = useState<VideoSection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sectionId, setSectionId] = useState<string | null>(null)
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [watched, setWatched] = useState<Set<string>>(new Set())
  const videoRef = useRef<HTMLVideoElement>(null)
  const autoPlayRef = useRef(false)

  useEffect(() => {
    try {
      setWatched(new Set(JSON.parse(localStorage.getItem(WATCHED_KEY) ?? "[]")))
    } catch {}

    fetch("/api/videos")
      .then((r) => r.json())
      .then((data: { sections: VideoSection[] }) => {
        setSections(data.sections)
        const params = new URLSearchParams(window.location.search)
        const s = data.sections.find((x) => x.id === params.get("s")) ?? data.sections[0]
        setSectionId(s?.id ?? null)
        const v = params.get("v")
        if (s && v && flatten(s).some((e) => e.video.id === v)) setCurrentId(v)
      })
      .catch(() => setError("Failed to load the video library."))
      .finally(() => setLoading(false))
  }, [])

  const section = sections.find((s) => s.id === sectionId) ?? null
  const entries = useMemo(() => (section ? flatten(section) : []), [section])
  const currentIndex = entries.findIndex((e) => e.video.id === currentId)
  const current = currentIndex >= 0 ? entries[currentIndex] : null

  const select = useCallback(
    (id: string, play = true) => {
      autoPlayRef.current = play
      setCurrentId(id)
      if (sectionId) {
        const url = new URL(window.location.href)
        url.searchParams.set("s", sectionId)
        url.searchParams.set("v", id)
        window.history.replaceState(null, "", url)
      }
    },
    [sectionId],
  )

  function changeSection(id: string) {
    setSectionId(id)
    setCurrentId(null)
    setQuery("")
    const url = new URL(window.location.href)
    url.searchParams.set("s", id)
    url.searchParams.delete("v")
    window.history.replaceState(null, "", url)
  }

  function markWatched(id: string) {
    setWatched((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      localStorage.setItem(WATCHED_KEY, JSON.stringify([...next]))
      return next
    })
  }

  function handleEnded() {
    if (!current) return
    markWatched(current.video.id)
    const next = entries[currentIndex + 1]
    if (next) select(next.video.id)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!section) return []
    return section.categories.filter((c) => !q || c.name.toLowerCase().includes(q))
  }, [section, query])

  const accent = section?.accent ?? "#a855f7"
  const sectionWatched = entries.filter((e) => watched.has(e.video.id)).length

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="aspect-video w-full rounded-lg" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (error || sections.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center py-16 text-center text-muted-foreground">
          <Video className="mb-4 h-10 w-10 opacity-30" />
          <p className="font-medium">{error ?? "No videos available"}</p>
          <p className="mt-1 text-sm">
            Generate them with <code className="rounded bg-muted px-1 text-xs">pnpm video:build</code> and run{" "}
            <code className="rounded bg-muted px-1 text-xs">pnpm video:index</code>.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-2" style={{ borderColor: `${accent}55` }}>
        <div className="relative aspect-video w-full bg-black">
          {current ? (
            <video
              key={current.video.id}
              ref={videoRef}
              src={mediaUrl("video", section!.id, current.video.id)}
              poster={mediaUrl("poster", section!.id, current.video.id)}
              className="h-full w-full object-contain"
              controls
              autoPlay={autoPlayRef.current}
              preload="metadata"
              onEnded={handleEnded}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <Video className="h-14 w-14 opacity-20" />
              <p className="text-sm">Select a video to play</p>
            </div>
          )}
        </div>
        <CardContent className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {current
                ? `${current.category.name}${current.video.part ? ` — Part ${current.video.part} of ${current.partCount}` : ""}`
                : "No video selected"}
            </p>
            <p className="text-xs text-muted-foreground">{section?.label}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              disabled={currentIndex <= 0}
              onClick={() => select(entries[currentIndex - 1].video.id)}
              title="Previous"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={currentIndex < 0 || currentIndex >= entries.length - 1}
              onClick={() => select(entries[currentIndex + 1].video.id)}
              title="Next"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        {sections.map((s) => {
          const total = s.categories.reduce((n, c) => n + c.videos.length, 0)
          const active = s.id === sectionId
          return (
            <button
              key={s.id}
              onClick={() => changeSection(s.id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active ? "text-white" : "hover:bg-muted"
              }`}
              style={active ? { backgroundColor: s.accent, borderColor: s.accent } : undefined}
            >
              {s.label}
              <span className={`text-xs ${active ? "opacity-80" : "text-muted-foreground"}`}>{total}</span>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative max-w-xs flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search categories..."
            className="pl-8"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {sectionWatched} / {entries.length} watched
        </p>
      </div>

      <div className="space-y-5">
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No categories match your search.</p>}
        {filtered.map((category) => (
          <div key={category.slug} className="space-y-2">
            <h3 className="text-sm font-semibold">
              <span className="mr-2 font-mono text-xs text-muted-foreground">
                {String(category.order).padStart(2, "0")}
              </span>
              {category.name}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {category.videos.map((video) => {
                const active = video.id === currentId
                const done = watched.has(video.id)
                return (
                  <Card
                    key={video.id}
                    onClick={() => select(video.id)}
                    className={`cursor-pointer transition-all hover:shadow-md ${active ? "bg-primary/5" : ""}`}
                    style={active ? { borderColor: accent } : undefined}
                  >
                    <CardContent className="flex items-center gap-3 p-2">
                      <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-sm bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mediaUrl("poster", section!.id, video.id)}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                          <Play className="h-5 w-5 text-white" />
                        </div>
                        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[10px] text-white">
                          {formatDuration(video.duration)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{category.name}</p>
                        <div className="mt-1 flex items-center gap-2">
                          {video.part && (
                            <Badge variant="secondary" className="text-xs">
                              Part {video.part}/{category.videos.length}
                            </Badge>
                          )}
                          {done && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Video, RefreshCw, Download, Maximize2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { VideoFile } from "@/app/api/videos/route"

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function VideoThumbnail({ url, title }: { url: string; title: string }) {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const handleSeeked = () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        setThumbnail(canvas.toDataURL("image/jpeg", 0.7))
      }
    }

    const handleLoadedMetadata = () => {
      // Seek to 10% of duration or 2s, whichever is smaller
      video.currentTime = video.duration > 0 ? Math.min(2, video.duration * 0.1) : 0
      video.addEventListener("seeked", handleSeeked, { once: true })
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [url])

  return (
    <div className="relative w-full h-full">
      <video ref={videoRef} src={url} className="hidden" muted preload="metadata" />
      <canvas ref={canvasRef} className="hidden" />
      {thumbnail ? (
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <Video className="h-5 w-5 opacity-30" />
        </div>
      )}
    </div>
  )
}

export function VideoPlayer() {
  const [videos, setVideos] = useState<VideoFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  async function fetchVideos() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/videos")
      const data = await res.json()
      setVideos(data.videos)
    } catch {
      setError("Failed to load video files.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  // Sync video element events
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => setCurrentTime(video.currentTime)
    const onDurationChange = () => setDuration(video.duration)
    const onEnded = () => {
      if (currentIndex !== null && currentIndex < videos.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsPlaying(false)
      }
    }

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("durationchange", onDurationChange)
    video.addEventListener("ended", onEnded)
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("durationchange", onDurationChange)
      video.removeEventListener("ended", onEnded)
    }
  }, [currentIndex, videos.length])

  // Load when currentIndex changes
  useEffect(() => {
    const video = videoRef.current
    if (!video || currentIndex === null) return
    video.src = videos[currentIndex].url
    video.load()
    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false))
    }
    setCurrentTime(0)
    setDuration(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  // Sync play/pause
  useEffect(() => {
    const video = videoRef.current
    if (!video || currentIndex === null) return
    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }, [isPlaying, currentIndex])

  // Sync volume/mute
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.volume = volume
    video.muted = muted
  }, [volume, muted])

  function handleSelectVideo(index: number) {
    if (currentIndex === index) {
      setIsPlaying((prev) => !prev)
    } else {
      setIsPlaying(true)
      setCurrentIndex(index)
    }
  }

  function handleSeek(value: number[]) {
    const video = videoRef.current
    if (!video) return
    video.currentTime = value[0]
    setCurrentTime(value[0])
  }

  function handlePrev() {
    if (currentIndex === null || currentIndex === 0) return
    setCurrentIndex(currentIndex - 1)
  }

  function handleNext() {
    if (currentIndex === null || currentIndex >= videos.length - 1) return
    setCurrentIndex(currentIndex + 1)
  }

  function handleFullscreen() {
    videoRef.current?.requestFullscreen?.()
  }

  const currentVideo = currentIndex !== null ? videos[currentIndex] : null

  return (
    <div className="space-y-6">
      {/* Now Playing */}
      <Card className="border-2 border-primary/20 overflow-hidden">
        {/* Video display area */}
        <div className="relative bg-black aspect-video w-full">
          <video
            ref={videoRef}
            className={`w-full h-full object-contain ${!currentVideo ? "hidden" : ""}`}
          />
          {!currentVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <Video className="h-14 w-14 opacity-20" />
              <p className="text-sm">Select a video to play</p>
            </div>
          )}
        </div>

        <CardHeader className="pb-2 pt-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Video className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{currentVideo ? currentVideo.title : "No video selected"}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Progress */}
          <div className="space-y-1">
            <Slider
              min={0}
              max={duration || 1}
              step={0.1}
              value={[currentTime]}
              onValueChange={handleSeek}
              disabled={!currentVideo}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === null || currentIndex === 0}
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => {
                  if (currentIndex === null && videos.length > 0) {
                    setCurrentIndex(0)
                    setIsPlaying(true)
                  } else {
                    setIsPlaying((prev) => !prev)
                  }
                }}
                disabled={videos.length === 0}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === null || currentIndex >= videos.length - 1}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setMuted((m) => !m)}>
                {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={[muted ? 0 : volume]}
                onValueChange={(v) => {
                  setVolume(v[0])
                  setMuted(v[0] === 0)
                }}
                className="w-24 cursor-pointer"
              />
              <Button variant="ghost" size="icon" onClick={handleFullscreen} disabled={!currentVideo}>
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video List header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Video Library
          {!loading && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({videos.length} {videos.length === 1 ? "file" : "files"})
            </span>
          )}
        </h2>
        <Button variant="outline" size="sm" onClick={fetchVideos} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="pt-4 text-sm text-destructive">{error}</CardContent>
        </Card>
      )}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      ) : videos.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            <Video className="mb-4 h-10 w-10 opacity-30" />
            <p className="font-medium">No video files available</p>
            <p className="mt-1 text-sm">
              Add video files to the <code className="text-xs bg-muted px-1 rounded">public/videos</code> folder
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {videos.map((video, index) => {
            const isActive = currentIndex === index
            return (
              <Card
                key={video.name}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  isActive
                    ? "border-primary/40 bg-primary/5 shadow-md"
                    : "hover:border-border/60"
                }`}
                onClick={() => handleSelectVideo(index)}
              >
                <CardContent className="flex items-center gap-4 py-3 px-4">
                  {/* Thumbnail */}
                  <div className="relative shrink-0 w-28 aspect-video overflow-hidden rounded-sm bg-muted">
                    <VideoThumbnail url={video.url} title={video.title} />
                    {isActive && isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Pause className="h-5 w-5 text-white" />
                      </div>
                    )}
                    {isActive && !isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-medium ${isActive ? "text-primary" : ""}`}>
                      {video.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{formatSize(video.size)}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary" className="text-xs">
                      {video.extension}
                    </Badge>
                    <a
                      href={video.url}
                      download={video.name}
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Download"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Music, RefreshCw, Download, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { AudioFile } from "@/app/api/audios/route"

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

export function AudioPlayer() {
  const [audios, setAudios] = useState<AudioFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)
  const [speechText, setSpeechText] = useState<string | null>(null)
  const [speechLoading, setSpeechLoading] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Fetch audio list
  async function fetchAudios() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/audios")
      const data = await res.json()
      setAudios(data.audios)
    } catch {
      setError("Failed to load audio files.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAudios()
  }, [])

  // Sync audio element
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onDurationChange = () => setDuration(audio.duration)
    const onEnded = () => {
      if (currentIndex !== null && currentIndex < audios.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsPlaying(false)
      }
    }

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("durationchange", onDurationChange)
    audio.addEventListener("ended", onEnded)
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("durationchange", onDurationChange)
      audio.removeEventListener("ended", onEnded)
    }
  }, [currentIndex, audios.length])

  // Load and play when currentIndex changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || currentIndex === null) return
    audio.src = audios[currentIndex].url
    audio.load()
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    }
    setCurrentTime(0)
    setDuration(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  // Sync play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || currentIndex === null) return
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, currentIndex])

  // Sync volume/mute
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = muted
  }, [volume, muted])

  // Fetch speech text when selection changes
  useEffect(() => {
    const speechUrl = currentIndex !== null ? audios[currentIndex]?.speechUrl : undefined
    if (!speechUrl) {
      setSpeechText(null)
      return
    }
    setSpeechLoading(true)
    fetch(speechUrl)
      .then((res) => res.text())
      .then((text) => setSpeechText(text))
      .catch(() => setSpeechText(null))
      .finally(() => setSpeechLoading(false))
  }, [currentIndex, audios])

  function handleSelectAudio(index: number) {
    if (currentIndex === index) {
      setIsPlaying((prev) => !prev)
    } else {
      setIsPlaying(true)
      setCurrentIndex(index)
    }
  }

  function handleSeek(value: number[]) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  function handlePrev() {
    if (currentIndex === null || currentIndex === 0) return
    setCurrentIndex(currentIndex - 1)
  }

  function handleNext() {
    if (currentIndex === null || currentIndex >= audios.length - 1) return
    setCurrentIndex(currentIndex + 1)
  }

  const currentAudio = currentIndex !== null ? audios[currentIndex] : null

  return (
    <div className="space-y-6">
      {/* Now Playing Bar */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Music className="h-4 w-4 text-primary" />
            {currentAudio ? currentAudio.title : "Select an audio to play"}
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
              disabled={!currentAudio}
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
                  if (currentIndex === null && audios.length > 0) {
                    setCurrentIndex(0)
                    setIsPlaying(true)
                  } else {
                    setIsPlaying((prev) => !prev)
                  }
                }}
                disabled={audios.length === 0}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === null || currentIndex >= audios.length - 1}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Volume */}
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
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Speech Transcript Panel */}
      {(speechLoading || speechText) && (
        <Card className="border border-border/50">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileText className="h-4 w-4" />
              Transcript
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            {speechLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            ) : (
              <div className="overflow-y-auto max-h-80 text-sm whitespace-pre-wrap leading-relaxed text-foreground/80">
                {speechText}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Audio List */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Audio Library
          {!loading && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({audios.length} {audios.length === 1 ? "file" : "files"})
            </span>
          )}
        </h2>
        <Button variant="outline" size="sm" onClick={fetchAudios} disabled={loading}>
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
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      ) : audios.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            <Music className="mb-4 h-10 w-10 opacity-30" />
            <p className="font-medium">No audio files available</p>
            <p className="mt-1 text-sm">
              Add audio files to the <code className="text-xs bg-muted px-1 rounded">public/audios</code> folder
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {audios.map((audio, index) => {
            const isActive = currentIndex === index
            return (
              <Card
                key={audio.name}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  isActive
                    ? "border-primary/40 bg-primary/5 shadow-md"
                    : "hover:border-border/60"
                }`}
                onClick={() => handleSelectAudio(index)}
              >
                <CardContent className="flex items-center gap-4 py-3 px-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {isActive && isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-medium ${isActive ? "text-primary" : ""}`}>
                      {audio.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{formatSize(audio.size)}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary" className="text-xs">
                      {audio.extension}
                    </Badge>
                    <a
                      href={audio.url}
                      download={audio.name}
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

      {/* Hidden audio element */}
      <audio ref={audioRef} />
    </div>
  )
}

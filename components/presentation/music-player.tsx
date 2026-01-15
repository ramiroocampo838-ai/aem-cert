/**
 * Music Player Component
 * Floating background music player with play/pause, volume, and track selection
 */

"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Music, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface Track {
  id: string
  name: string
  url: string
}

const tracks: Track[] = [
  { id: "1", name: "Ambient Focus", url: "/music/ambient-1.mp3" },
  { id: "2", name: "Calm Study", url: "/music/ambient-2.mp3" },
  { id: "3", name: "Soft Background", url: "/music/ambient-3.mp3" }
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Load preferences from localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem("presentation-music-volume")
    const savedMuted = localStorage.getItem("presentation-music-muted")
    const savedTrack = localStorage.getItem("presentation-music-track")

    if (savedVolume) setVolume(parseFloat(savedVolume))
    if (savedMuted) setIsMuted(savedMuted === "true")
    if (savedTrack) setCurrentTrackIndex(parseInt(savedTrack, 10))
  }, [])

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("presentation-music-volume", volume.toString())
    localStorage.setItem("presentation-music-muted", isMuted.toString())
    localStorage.setItem("presentation-music-track", currentTrackIndex.toString())
  }, [volume, isMuted, currentTrackIndex])

  // Update audio volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Auto-play when track changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.load()
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false)
      })
    }
  }, [currentTrackIndex])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0]
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleTrackEnd = () => {
    // Loop to next track
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
  }

  const currentTrack = tracks[currentTrackIndex]

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isExpanded ? "w-80" : "w-16"
      )}
    >
      {/* Collapsed State - Just Music Icon */}
      {!isExpanded && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(true)}
          className={cn(
            "h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600",
            "text-white shadow-lg backdrop-blur-sm hover:from-purple-500 hover:to-blue-500",
            isPlaying && "animate-pulse"
          )}
        >
          <Music className="h-6 w-6" />
        </Button>
      )}

      {/* Expanded State - Full Player */}
      {isExpanded && (
        <div
          className={cn(
            "rounded-xl border border-white/20 bg-gradient-to-br from-slate-900/95 to-slate-800/95",
            "shadow-2xl backdrop-blur-lg"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Background Music</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 text-white/60 hover:bg-white/10 hover:text-white"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Current Track */}
          <div className="border-b border-white/10 px-4 py-3">
            <div className="text-xs text-white/60">Now Playing</div>
            <div className="mt-1 font-medium text-white">{currentTrack.name}</div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 px-4 py-4">
            {/* Play/Pause */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePlayPause}
              className="h-10 w-10 shrink-0 rounded-full bg-purple-600 text-white hover:bg-purple-500"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            {/* Volume Control */}
            <div className="flex flex-1 items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="h-8 w-8 shrink-0 text-white/60 hover:bg-white/10 hover:text-white"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              
              <Slider
                value={[isMuted ? 0 : volume]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="flex-1"
              />
            </div>
          </div>

          {/* Track Selection */}
          <div className="border-t border-white/10 px-4 py-3">
            <div className="text-xs text-white/60 mb-2">Tracks</div>
            <div className="space-y-1">
              {tracks.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => setCurrentTrackIndex(idx)}
                  className={cn(
                    "w-full rounded px-3 py-2 text-left text-sm transition-colors",
                    idx === currentTrackIndex
                      ? "bg-purple-600/20 text-purple-300"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={currentTrack.url}
            loop={false}
            onEnded={handleTrackEnd}
            preload="none"
          />
        </div>
      )}
    </div>
  )
}

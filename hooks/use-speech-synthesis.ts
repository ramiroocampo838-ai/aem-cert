"use client"

import { useState, useEffect, useCallback, useRef } from "react"

type SpeechStatus = "idle" | "playing"

export function useSpeechSynthesis() {
  const [status, setStatus] = useState<SpeechStatus>("idle")
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      voiceRef.current =
        voices.find((v) => v.lang === "en-US" && v.localService) ??
        voices.find((v) => v.lang.startsWith("en")) ??
        null
    }

    pickVoice()
    window.speechSynthesis.addEventListener("voiceschanged", pickVoice)

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", pickVoice)
      window.speechSynthesis.cancel()
    }
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setStatus("idle")
  }, [])

  const speak = useCallback(
    (text: string) => {
      if (typeof window === "undefined") return

      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-US"
      utterance.rate = 0.95
      if (voiceRef.current) utterance.voice = voiceRef.current

      utterance.onstart = () => setStatus("playing")
      utterance.onend = () => setStatus("idle")
      utterance.onerror = () => setStatus("idle")

      window.speechSynthesis.speak(utterance)
    },
    []
  )

  const toggle = useCallback(
    (text: string) => {
      if (status === "playing") {
        stop()
      } else {
        speak(text)
      }
    },
    [status, speak, stop]
  )

  return { isPlaying: status === "playing", toggle, stop }
}

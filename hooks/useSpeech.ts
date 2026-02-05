import { useState, useRef, useEffect, useCallback } from "react"
import type { UseSpeechReturn } from "@/lib/translator/types"
import { filterVoicesByLanguage, SPEECH_DEFAULTS } from "@/lib/translator/utils"

/**
 * Hook personalizado para manejar la síntesis de voz usando Web Speech API
 * @returns Objeto con estado y funciones de control de voz
 */
export function useSpeech(): UseSpeechReturn {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [speechRate, setSpeechRate] = useState<number>(SPEECH_DEFAULTS.DEFAULT_RATE)
  const [selectedVoice, setSelectedVoice] = useState<string>("")
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Cargar voces disponibles
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices()
      const filteredVoices = filterVoicesByLanguage(availableVoices)
      setVoices(filteredVoices)

      // Seleccionar voz por defecto
      if (filteredVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(filteredVoices[0].name)
      }
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [selectedVoice])

  // Función para leer texto
  const speak = useCallback(
    (textToSpeak: string, lang: "en" | "es") => {
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(textToSpeak)
      utterance.rate = speechRate
      utterance.lang = lang === "en" ? "en-US" : "es-ES"

      // Buscar voz apropiada para el idioma
      const voice = voices.find(
        (v) =>
          v.name === selectedVoice ||
          (lang === "en" ? v.lang.startsWith("en") : v.lang.startsWith("es"))
      )
      if (voice) {
        utterance.voice = voice
      }

      utterance.onstart = () => {
        setIsSpeaking(true)
        setIsPaused(false)
      }

      utterance.onend = () => {
        setIsSpeaking(false)
        setIsPaused(false)
      }

      utterance.onerror = () => {
        setIsSpeaking(false)
        setIsPaused(false)
      }

      utteranceRef.current = utterance
      window.speechSynthesis.speak(utterance)
    },
    [speechRate, selectedVoice, voices]
  )

  const pauseSpeech = useCallback(() => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }, [isSpeaking, isPaused])

  const resumeSpeech = useCallback(() => {
    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    }
  }, [isPaused])

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
  }, [])

  const resetAll = useCallback(() => {
    stopSpeech()
    // Nota: reset de texto se maneja en el hook de traducción
  }, [stopSpeech])

  const handleSetSpeechRate = useCallback((rate: number) => {
    setSpeechRate(rate)
  }, [])

  const handleSetSelectedVoice = useCallback((voice: string) => {
    setSelectedVoice(voice)
  }, [])

  return {
    isSpeaking,
    isPaused,
    speechRate,
    selectedVoice,
    voices,
    speak,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    resetAll,
    setSpeechRate: handleSetSpeechRate,
    setSelectedVoice: handleSetSelectedVoice,
  }
}
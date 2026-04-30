// lib/translator/types.ts
export type TranslationDirection = "en-es" | "es-en"

export interface SpeechState {
  isSpeaking: boolean
  isPaused: boolean
  speechRate: number
  selectedVoice: string
  voices: SpeechSynthesisVoice[]
}

export interface TranslationState {
  text: string
  translatedText: string
  isTranslating: boolean
  translationDirection: TranslationDirection
}

export interface TextReaderTranslatorProps {
  initialText?: string
  placeholder?: string
}

export type ActiveTab = "original" | "translated"

export interface UseTranslationReturn {
  text: string
  setText: (text: string) => void
  translatedText: string
  isTranslating: boolean
  translationDirection: TranslationDirection
  setTranslationDirection: (direction: TranslationDirection) => void
  translateText: () => Promise<void>
}

export interface UseSpeechReturn extends SpeechState {
  speak: (text: string, lang: "en" | "es") => void
  pauseSpeech: () => void
  resumeSpeech: () => void
  stopSpeech: () => void
  resetAll: () => void
  setSpeechRate: (rate: number) => void
  setSelectedVoice: (voice: string) => void
}
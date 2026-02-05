// lib/translator/utils.ts
import type { TranslationDirection } from "./types"

/**
 * Filtra las voces disponibles por idioma (inglés o español)
 */
export function filterVoicesByLanguage(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return voices.filter(
    (voice) => voice.lang.startsWith("en") || voice.lang.startsWith("es")
  )
}

/**
 * Obtiene el par de idiomas para la API de traducción basado en la dirección
 */
export function getLangPair(direction: TranslationDirection): string {
  return direction === "en-es" ? "en|es" : "es|en"
}

/**
 * Determina el idioma del texto basado en la dirección de traducción
 */
export function getTextLanguage(direction: TranslationDirection, isTranslated: boolean): "en" | "es" {
  if (isTranslated) {
    return direction === "en-es" ? "es" : "en"
  }
  return direction === "en-es" ? "en" : "es"
}

/**
 * Constantes para la API de traducción
 */
export const TRANSLATION_API = {
  BASE_URL: "https://api.mymemory.translated.net/get",
  SUCCESS_STATUS: 200,
} as const

/**
 * Límites y valores por defecto
 */
export const SPEECH_DEFAULTS = {
  RATE_MIN: 0.5,
  RATE_MAX: 2,
  RATE_STEP: 0.1,
  DEFAULT_RATE: 1,
} as const
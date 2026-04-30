import { useState, useCallback } from "react"
import type { UseTranslationReturn, TranslationDirection } from "@/lib/translator/types"
import { getLangPair, TRANSLATION_API } from "@/lib/translator/utils"

/**
 * Hook personalizado para manejar la lógica de traducción de texto
 * @param initialText - Texto inicial para traducir
 * @returns Objeto con estado y funciones de traducción
 */
export function useTranslation(initialText: string = ""): UseTranslationReturn {
  const [text, setText] = useState(initialText)
  const [translatedText, setTranslatedText] = useState("")
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationDirection, setTranslationDirection] = useState<TranslationDirection>("en-es")

  // Función para traducir usando la API de MyMemory (gratuita)
  const translateText = useCallback(async () => {
    if (!text.trim()) return

    setIsTranslating(true)
    try {
      const langPair = getLangPair(translationDirection)
      const response = await fetch(
        `${TRANSLATION_API.BASE_URL}?q=${encodeURIComponent(text)}&langpair=${langPair}`
      )
      const data = await response.json()

      if (data.responseStatus === TRANSLATION_API.SUCCESS_STATUS) {
        setTranslatedText(data.responseData.translatedText)
      } else {
        setTranslatedText("Error al traducir. Intenta de nuevo.")
      }
    } catch (error) {
      console.error("Error de traducción:", error)
      setTranslatedText("Error de conexión. Verifica tu internet.")
    } finally {
      setIsTranslating(false)
    }
  }, [text, translationDirection])

  return {
    text,
    setText,
    translatedText,
    isTranslating,
    translationDirection,
    setTranslationDirection,
    translateText,
  }
}
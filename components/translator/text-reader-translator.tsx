"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, Loader2 } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useSpeech } from "@/hooks/useSpeech"
import { TranslationDirectionSelector } from "./TranslationDirectionSelector"
import { TextTabs } from "./TextTabs"
import { SpeechControls } from "./SpeechControls"
import { SpeechSettings } from "./SpeechSettings"
import type { ActiveTab, TextReaderTranslatorProps } from "@/lib/translator/types"
import { getTextLanguage } from "@/lib/translator/utils"

/**
 * Componente principal para traducción y lectura de texto
 * Combina funcionalidades de traducción automática y síntesis de voz
 */
export function TextReaderTranslator({
  initialText = "",
  placeholder = "Ingresa o pega tu texto aquí...",
}: TextReaderTranslatorProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("original")

  // Hooks personalizados
  const {
    text,
    setText,
    translatedText,
    isTranslating,
    translationDirection,
    setTranslationDirection,
    translateText,
  } = useTranslation(initialText)

  const {
    isSpeaking,
    isPaused,
    speechRate,
    selectedVoice,
    voices,
    speak,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    resetAll: resetSpeech,
    setSpeechRate,
    setSelectedVoice,
  } = useSpeech()

  // Función para manejar el habla
  const handleSpeak = () => {
    const textToRead = activeTab === "original" ? text : translatedText
    const lang = getTextLanguage(translationDirection, activeTab === "translated")

    if (textToRead.trim()) {
      speak(textToRead, lang)
    }
  }

  // Función para reset completo
  const handleResetAll = () => {
    resetSpeech()
    setText("")
    // translatedText se resetea automáticamente en useTranslation
    setActiveTab("original")
  }

  const currentText = activeTab === "original" ? text : translatedText

  return (
    <Card className="w-full max-w-2xl mx-auto border-border/60 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">
            Lector y Traductor de Texto
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {translationDirection === "en-es" ? "EN → ES" : "ES → EN"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Selector de dirección de traducción */}
        <TranslationDirectionSelector
          value={translationDirection}
          onChange={(value) => {
            setTranslationDirection(value)
            // Resetear traducción cuando cambia la dirección
            // Esto se maneja automáticamente en useTranslation
          }}
        />

        {/* Tabs para original y traducido */}
        <TextTabs
          text={text}
          translatedText={translatedText}
          activeTab={activeTab}
          translationDirection={translationDirection}
          placeholder={placeholder}
          onTabChange={setActiveTab}
          onTextChange={setText}
        />

        {/* Botón de traducir */}
        <Button
          onClick={translateText}
          disabled={!text.trim() || isTranslating}
          className="w-full"
          variant="secondary"
        >
          {isTranslating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Traduciendo...
            </>
          ) : (
            <>
              <Languages className="mr-2 h-4 w-4" />
              Traducir a {translationDirection === "en-es" ? "Español" : "Inglés"}
            </>
          )}
        </Button>

        {/* Controles de voz */}
        <div className="space-y-4 rounded-lg border border-border/60 p-4 bg-muted/20">
          <SpeechControls
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            currentText={currentText}
            onSpeak={handleSpeak}
            onPause={pauseSpeech}
            onResume={resumeSpeech}
            onStop={stopSpeech}
            onReset={handleResetAll}
          />

          <SpeechSettings
            speechRate={speechRate}
            selectedVoice={selectedVoice}
            voices={voices}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            onSpeechRateChange={setSpeechRate}
            onVoiceChange={setSelectedVoice}
          />
        </div>

        {/* Info */}
        <p className="text-xs text-center text-muted-foreground">
          Usa la Web Speech API para lectura • Traducción por MyMemory
        </p>
      </CardContent>
    </Card>
  )
}

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Volume2,
  VolumeX,
  Pause,
  Play,
  Square,
  RotateCcw,
} from "lucide-react"

interface SpeechControlsProps {
  isSpeaking: boolean
  isPaused: boolean
  currentText: string
  onSpeak: () => void
  onPause: () => void
  onResume: () => void
  onStop: () => void
  onReset: () => void
}

export function SpeechControls({
  isSpeaking,
  isPaused,
  currentText,
  onSpeak,
  onPause,
  onResume,
  onStop,
  onReset,
}: SpeechControlsProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">Controles de Lectura</span>
      <div className="flex items-center gap-1">
        {!isSpeaking ? (
          <Button
            size="icon"
            variant="default"
            onClick={onSpeak}
            disabled={!currentText.trim()}
            title="Reproducir"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        ) : (
          <>
            {isPaused ? (
              <Button
                size="icon"
                variant="default"
                onClick={onResume}
                title="Continuar"
              >
                <Play className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                size="icon"
                variant="outline"
                onClick={onPause}
                title="Pausar"
              >
                <Pause className="h-4 w-4" />
              </Button>
            )}
            <Button
              size="icon"
              variant="destructive"
              onClick={onStop}
              title="Detener"
            >
              <Square className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button
          size="icon"
          variant="ghost"
          onClick={onReset}
          title="Reiniciar todo"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
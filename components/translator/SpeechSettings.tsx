import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { VolumeX } from "lucide-react"

interface SpeechSettingsProps {
  speechRate: number
  selectedVoice: string
  voices: SpeechSynthesisVoice[]
  isSpeaking: boolean
  isPaused: boolean
  onSpeechRateChange: (rate: number) => void
  onVoiceChange: (voice: string) => void
}

export function SpeechSettings({
  speechRate,
  selectedVoice,
  voices,
  isSpeaking,
  isPaused,
  onSpeechRateChange,
  onVoiceChange,
}: SpeechSettingsProps) {
  return (
    <>
      {/* Velocidad de lectura */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">
            Velocidad: {speechRate.toFixed(1)}x
          </label>
          {isSpeaking && (
            <Badge variant="secondary" className="animate-pulse">
              <VolumeX className="mr-1 h-3 w-3" />
              {isPaused ? "Pausado" : "Leyendo..."}
            </Badge>
          )}
        </div>
        <Slider
          value={[speechRate]}
          onValueChange={([value]) => onSpeechRateChange(value)}
          min={0.5}
          max={2}
          step={0.1}
          className="w-full"
        />
      </div>

      {/* Selector de voz */}
      {voices.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Voz</label>
          <Select value={selectedVoice} onValueChange={onVoiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una voz" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  )
}
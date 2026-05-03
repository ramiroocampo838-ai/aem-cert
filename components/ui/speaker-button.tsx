"use client"

import { Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis"
import { cn } from "@/lib/utils"

interface SpeakerButtonProps {
  text: string
  className?: string
}

export function SpeakerButton({ text, className }: SpeakerButtonProps) {
  const { isPlaying, toggle } = useSpeechSynthesis()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn("shrink-0", className)}
          onClick={(e) => {
            e.stopPropagation()
            toggle(text)
          }}
          aria-label={isPlaying ? "Stop reading" : "Read aloud"}
        >
          <Volume2
            className={cn(
              "h-4 w-4 transition-colors",
              isPlaying ? "text-primary animate-pulse" : "text-muted-foreground"
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        {isPlaying ? "Stop reading" : "Read aloud"}
      </TooltipContent>
    </Tooltip>
  )
}

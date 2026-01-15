/**
 * Info Tooltip Component
 * Hover or click to show additional information
 */

"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoTooltipProps {
  text: string
  content: string
  className?: string
}

export function InfoTooltip({ text, content, className }: InfoTooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button
            className={cn(
              "inline-flex items-center gap-1 border-b border-dashed border-white/40",
              "text-white transition-colors hover:border-white/70 hover:text-white",
              className
            )}
          >
            {text}
            <HelpCircle className="h-3 w-3 text-white/60" />
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={cn(
              "z-50 max-w-xs rounded-lg border border-white/20 bg-slate-900/95 px-4 py-3",
              "text-sm text-white shadow-lg backdrop-blur-sm",
              "animate-in fade-in-0 zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            )}
            sideOffset={5}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-slate-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

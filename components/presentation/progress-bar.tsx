/**
 * Progress Bar Component
 * Shows current progress through the presentation
 */

"use client"

import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  currentSlide: number
  totalSlides: number
  estimatedTimeRemaining?: number
  className?: string
}

export function ProgressBar({
  currentSlide,
  totalSlides,
  estimatedTimeRemaining,
  className
}: ProgressBarProps) {
  const progress = (currentSlide / totalSlides) * 100

  return (
    <div className={cn("fixed left-0 top-0 z-50 w-full", className)}>
      {/* Progress Bar */}
      <div className="h-1 w-full bg-white/10 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="font-medium">
            Slide {currentSlide} of {totalSlides}
          </span>
          <span className="text-white/60">
            {Math.round(progress)}% Complete
          </span>
        </div>
        
        {estimatedTimeRemaining !== undefined && (
          <div className="flex items-center gap-1 text-white/60">
            <Clock className="h-3 w-3" />
            <span>~{estimatedTimeRemaining} min remaining</span>
          </div>
        )}
      </div>
    </div>
  )
}

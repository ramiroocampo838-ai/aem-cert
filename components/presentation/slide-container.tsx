/**
 * Slide Container Component
 * Full-screen container for individual presentation slides
 */

"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SlideContainerProps {
  children: ReactNode
  slideNumber: number
  totalSlides: number
  backgroundColor?: string
  className?: string
}

export function SlideContainer({
  children,
  slideNumber,
  totalSlides,
  backgroundColor = "from-slate-900 via-slate-800 to-slate-900",
  className
}: SlideContainerProps) {
  return (
    <div 
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center",
        "bg-gradient-to-br",
        backgroundColor,
        "px-8 py-12 md:px-16 lg:px-24",
        className
      )}
    >
      {/* Slide Number Indicator */}
      <div className="absolute right-8 top-8 text-sm text-white/60">
        {slideNumber} / {totalSlides}
      </div>

      {/* Main Content */}
      <div className="z-10 w-full max-w-6xl">
        {children}
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>
    </div>
  )
}

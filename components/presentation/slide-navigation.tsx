/**
 * Slide Navigation Component
 * Handles navigation between slides with keyboard, arrows, and dots
 */

"use client"

import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (slideNumber: number) => void
  onPrevious: () => void
  onNext: () => void
  slidesTitles?: string[]
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNavigate,
  onPrevious,
  onNext,
  slidesTitles = []
}: SlideNavigationProps) {
  const canGoPrevious = currentSlide > 1
  const canGoNext = currentSlide < totalSlides

  return (
    <>
      {/* Arrow Navigation - Fixed Position */}
      <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2 md:left-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={cn(
            "h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-sm",
            "hover:bg-white/20 disabled:opacity-30",
            "transition-all duration-200"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={!canGoNext}
          className={cn(
            "h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-sm",
            "hover:bg-white/20 disabled:opacity-30",
            "transition-all duration-200"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dot Navigation - Bottom Center */}
      <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onNavigate(num)}
            className={cn(
              "h-2 rounded-full transition-all duration-200",
              num === currentSlide 
                ? "w-8 bg-white" 
                : "w-2 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${num}`}
          />
        ))}
      </div>

      {/* Thumbnail Sidebar - Optional */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "fixed left-4 top-4 z-50 h-10 w-10 rounded-full",
              "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            )}
            aria-label="View all slides"
          >
            <Grid3x3 className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>All Slides ({totalSlides})</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-2">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => onNavigate(num)}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-colors",
                  num === currentSlide
                    ? "border-primary bg-primary/10"
                    : "border-border hover:bg-accent"
                )}
              >
                <div className="text-sm font-medium">Slide {num}</div>
                {slidesTitles[num - 1] && (
                  <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {slidesTitles[num - 1]}
                  </div>
                )}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

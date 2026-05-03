"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { DocDiagram } from "@/lib/docs"

interface DiagramViewerProps {
  diagrams: DocDiagram[]
  initialIndex: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DiagramViewer({ diagrams, initialIndex, open, onOpenChange }: DiagramViewerProps) {
  const [current, setCurrent] = useState(initialIndex)

  useEffect(() => {
    setCurrent(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.stopPropagation()
        setCurrent((i) => Math.max(0, i - 1))
      } else if (e.key === "ArrowRight") {
        e.stopPropagation()
        setCurrent((i) => Math.min(diagrams.length - 1, i + 1))
      }
    }
    window.addEventListener("keydown", onKey, true)
    return () => window.removeEventListener("keydown", onKey, true)
  }, [open, diagrams.length])

  const diagram = diagrams[current]
  const hasPrev = current > 0
  const hasNext = current < diagrams.length - 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full p-0 gap-0 overflow-hidden" showCloseButton={false}>
        <DialogTitle className="sr-only">{diagram.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Diagram {current + 1} of {diagrams.length}. Use arrow keys or buttons to navigate.
        </DialogDescription>

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">
              {current + 1} / {diagrams.length}
            </span>
            <span className="font-semibold text-sm">{diagram.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs" asChild>
              <a href={diagram.png} download>
                <Download className="h-3.5 w-3.5" />
                PNG
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs" asChild>
              <a href={diagram.svg} download>
                <Download className="h-3.5 w-3.5" />
                SVG
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onOpenChange(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative flex items-center justify-center bg-muted/10 min-h-[60vh]">
          {/* Prev */}
          <button
            onClick={() => setCurrent((i) => Math.max(0, i - 1))}
            disabled={!hasPrev}
            className="absolute left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous diagram"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Image */}
          <img
            key={diagram.png}
            src={diagram.png}
            alt={diagram.title}
            className="max-h-[70vh] w-auto object-contain px-16 py-6"
          />

          {/* Next */}
          <button
            onClick={() => setCurrent((i) => Math.min(diagrams.length - 1, i + 1))}
            disabled={!hasNext}
            className="absolute right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next diagram"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto px-5 py-3 border-t border-border bg-muted/20">
          {diagrams.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setCurrent(i)}
              className={`shrink-0 rounded border-2 overflow-hidden transition-all ${
                i === current
                  ? "border-primary shadow-sm"
                  : "border-transparent hover:border-border"
              }`}
              aria-label={`Go to diagram ${i + 1}: ${d.title}`}
            >
              <img
                src={d.png}
                alt={d.title}
                className="h-12 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { DiagramViewer } from "./diagram-viewer"
import type { DocDiagram } from "@/lib/docs"

interface DiagramGalleryProps {
  diagrams: DocDiagram[]
}

export function DiagramGallery({ diagrams }: DiagramGalleryProps) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openAt = (index: number) => {
    setActiveIndex(index)
    setViewerOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {diagrams.map((diagram, i) => (
          <button
            key={diagram.id}
            onClick={() => openAt(i)}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-muted/20 transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted/40">
              <img
                src={diagram.png}
                alt={diagram.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="px-2.5 py-2">
              <span className="font-mono text-[10px] text-muted-foreground/60">{diagram.id}</span>
              <p className="text-xs font-medium leading-snug mt-0.5 group-hover:text-primary transition-colors">
                {diagram.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <DiagramViewer
        diagrams={diagrams}
        initialIndex={activeIndex}
        open={viewerOpen}
        onOpenChange={setViewerOpen}
      />
    </>
  )
}

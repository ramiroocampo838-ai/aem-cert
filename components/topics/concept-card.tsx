"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Concept } from "@/lib/concepts/types"

interface ConceptCardProps {
  concept: Concept
  index: number
}

export function ConceptCard({ concept, index }: ConceptCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-sm ${expanded ? "border-primary/40 bg-primary/5" : ""}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <CardContent className="px-4 py-3">
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-xs font-mono text-muted-foreground/50 mt-0.5 w-5 text-right select-none">
            {index + 1}
          </span>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium leading-snug ${expanded ? "text-primary" : ""}`}>
              {concept.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
              Q: {concept.reference}
            </p>
          </div>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform mt-0.5 ${
              expanded ? "rotate-180 text-primary" : ""
            }`}
          />
        </div>

        {expanded && (
          <div className="ml-8 mt-3 text-sm text-foreground/80 leading-relaxed border-t border-border/60 pt-3">
            {concept.explanation}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

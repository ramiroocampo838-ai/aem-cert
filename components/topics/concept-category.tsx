"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ConceptCard } from "./concept-card"
import type { ConceptCategory } from "@/lib/concepts/types"

interface ConceptCategorySectionProps {
  category: ConceptCategory
  defaultOpen?: boolean
}

export function ConceptCategorySection({ category, defaultOpen = false }: ConceptCategorySectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">{category.name}</span>
          <Badge variant="secondary" className="text-xs">
            {category.concepts.length}
          </Badge>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="p-3 space-y-2 bg-background">
          {category.concepts.length === 0 ? (
            <p className="py-6 text-sm text-muted-foreground text-center">
              Concepts coming soon…
            </p>
          ) : (
            category.concepts.map((concept, i) => (
              <ConceptCard key={concept.id} concept={concept} index={i} />
            ))
          )}
        </div>
      )}
    </div>
  )
}

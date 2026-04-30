/**
 * Expandable Section Component
 * Click to expand/collapse detailed content
 */

"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ExpandableContent } from "@/lib/slides-content"

interface ExpandableSectionProps {
  section: ExpandableContent
  defaultExpanded?: boolean
  className?: string
}

export function ExpandableSection({
  section,
  defaultExpanded = false,
  className
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const renderContent = () => {
    if (section.type === "list" && Array.isArray(section.content)) {
      return (
        <ul className="space-y-2">
          {section.content.map((item, idx) => {
            // Check if item is an object with text and optional url
            if (typeof item === 'object' && item !== null && 'text' in item) {
              const linkItem = item as { text: string; url?: string };
              return (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {linkItem.url ? (
                    <a
                      href={linkItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors"
                    >
                      {linkItem.text}
                    </a>
                  ) : (
                    <span>{linkItem.text}</span>
                  )}
                </li>
              );
            }
            
            // Fallback for string items
            return (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      )
    }

    if (section.type === "text" && typeof section.content === "string") {
      return <p className="leading-relaxed">{section.content}</p>
    }

    // Default: render as paragraphs
    if (Array.isArray(section.content)) {
      return (
        <div className="space-y-2">
          {section.content.map((paragraph, idx) => {
            // Handle mixed content: string or {text, url?}
            if (typeof paragraph === 'object' && paragraph !== null && 'text' in paragraph) {
              const linkItem = paragraph as { text: string; url?: string };
              if (linkItem.url) {
                return (
                  <p key={idx} className="leading-relaxed">
                    <a
                      href={linkItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors"
                    >
                      {linkItem.text}
                    </a>
                  </p>
                );
              }
              return <p key={idx} className="leading-relaxed">{linkItem.text}</p>;
            }
            // Handle string content
            return <p key={idx} className="leading-relaxed">{paragraph}</p>;
          })}
        </div>
      )
    }

    return <p className="leading-relaxed">{section.content}</p>
  }

  return (
    <div className={cn("rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm", className)}>
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex w-full items-center justify-between gap-4 px-5 py-4",
          "text-left transition-colors hover:bg-white/5"
        )}
      >
        <span className="font-semibold text-white">{section.title}</span>
        <div className="shrink-0">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-white/70" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white/70" />
          )}
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-white/10 px-5 py-4 text-sm text-white/80">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

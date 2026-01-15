/**
 * Code Block Component
 * Syntax-highlighted code with expand and copy functionality
 */

"use client"

import { useState } from "react"
import { Copy, Check, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { CodeExample } from "@/lib/slides-content"

interface CodeBlockProps {
  codeExample: CodeExample
  onExpand?: () => void
  className?: string
}

export function CodeBlock({ codeExample, onExpand, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Get language-specific styling
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      java: "text-orange-400",
      javascript: "text-yellow-400",
      typescript: "text-blue-400",
      xml: "text-green-400",
      html: "text-pink-400",
      htl: "text-purple-400",
      bash: "text-gray-400"
    }
    return colors[lang] || "text-gray-400"
  }

  return (
    <div className={cn("relative rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className={cn("text-xs font-mono font-semibold uppercase", getLanguageColor(codeExample.language))}>
            {codeExample.language}
          </span>
          {codeExample.title && (
            <>
              <span className="text-white/40">•</span>
              <span className="text-sm text-white/70">{codeExample.title}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8 text-white/60 hover:bg-white/10 hover:text-white"
            title="Copy code"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          
          {onExpand && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onExpand}
              className="h-8 w-8 text-white/60 hover:bg-white/10 hover:text-white"
              title="Expand code"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-xs leading-relaxed md:text-sm">
          <code className="font-mono text-white/90">
            {codeExample.code}
          </code>
        </pre>
      </div>

      {/* Highlight Lines Indicator */}
      {codeExample.highlightLines && codeExample.highlightLines.length > 0 && (
        <div className="border-t border-white/10 bg-blue-500/10 px-4 py-2 text-xs text-blue-300">
          Highlighted lines: {codeExample.highlightLines.join(", ")}
        </div>
      )}
    </div>
  )
}

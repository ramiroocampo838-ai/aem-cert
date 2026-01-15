/**
 * Info Modal Component
 * Full-screen modal for detailed content, diagrams, or extended code
 */

"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import type { ModalContent } from "@/lib/slides-content"
import { CodeBlock } from "./code-block"

interface InfoModalProps {
  modal: ModalContent
  isOpen: boolean
  onClose: () => void
}

export function InfoModal({ modal, isOpen, onClose }: InfoModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const renderContent = () => {
    switch (modal.type) {
      case "code":
        if (modal.data && typeof modal.data === "object" && "language" in modal.data) {
          return <CodeBlock codeExample={modal.data} />
        }
        break
      
      case "image":
        if (typeof modal.data === "string") {
          return (
            <div className="flex justify-center">
              <img
                src={modal.data}
                alt={modal.title}
                className="max-h-[70vh] rounded-lg border border-white/20"
              />
            </div>
          )
        }
        break
      
      case "diagram":
        return (
          <div className="rounded-lg border border-white/20 bg-white/5 p-8">
            <p className="text-center text-white/60">
              📊 Interactive diagram placeholder
            </p>
          </div>
        )
      
      case "text":
      default:
        return <div className="prose prose-invert max-w-none text-white/90">{modal.content}</div>
    }
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center",
        "bg-black/80 backdrop-blur-md",
        "animate-in fade-in-0 duration-200"
      )}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className={cn(
          "relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto",
          "rounded-xl border border-white/20 bg-slate-900 shadow-2xl",
          "animate-in zoom-in-95 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-6 py-4 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white">{modal.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10 shrink-0 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-white/10 bg-slate-900/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex justify-end">
            <Button
              variant="secondary"
              onClick={onClose}
              className="bg-white/10 text-white hover:bg-white/20"
            >
              Close (ESC)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

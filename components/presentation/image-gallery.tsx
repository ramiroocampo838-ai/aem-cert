/**
 * Image Gallery Component
 * Displays thumbnail images that expand to full size in a modal when clicked
 */

"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { InfoModal } from "./info-modal"
import type { ModalContent } from "@/lib/slides-content"

interface ImageGalleryProps {
  images: ModalContent[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ModalContent | null>(null)

  return (
    <>
      <div className={cn("flex flex-wrap justify-center gap-4", className)}>
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(image)}
            className="group relative overflow-hidden rounded-lg border border-white/20 bg-white/5 transition-all hover:border-white/40 hover:bg-white/10"
          >
            <img
              src={typeof image.data === "string" ? image.data : ""}
              alt={image.title}
              className="h-32 w-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm text-white">Click to expand</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <InfoModal
          modal={selectedImage}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}
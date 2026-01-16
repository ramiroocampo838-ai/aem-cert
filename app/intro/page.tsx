/**
 * AEM Introduction Presentation - Main Page
 * Interactive slide-based presentation for AEM fundamentals
 */

"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Home, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SlideContainer } from "@/components/presentation/slide-container"
import { SlideNavigation } from "@/components/presentation/slide-navigation"
import { ProgressBar } from "@/components/presentation/progress-bar"
import { ExpandableSection } from "@/components/presentation/expandable-section"
import { CodeBlock } from "@/components/presentation/code-block"
import { InfoTooltip } from "@/components/presentation/info-tooltip"
import { InfoModal } from "@/components/presentation/info-modal"
import { InteractiveDiagram } from "@/components/presentation/interactive-diagram"
import { MusicPlayer } from "@/components/presentation/music-player"
import { slides, getTotalSlides } from "@/lib/slides-content"
import type { ModalContent } from "@/lib/slides-content"

function IntroContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const totalSlides = getTotalSlides()
  
  const [currentSlide, setCurrentSlide] = useState(() => {
    const slideParam = searchParams.get("slide")
    const slideNum = slideParam ? parseInt(slideParam, 10) : 1
    return slideNum >= 1 && slideNum <= totalSlides ? slideNum : 1
  })

  const [openModal, setOpenModal] = useState<ModalContent | null>(null)

  // Update URL when slide changes
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set("slide", currentSlide.toString())
    router.replace(url.pathname + url.search, { scroll: false })
  }, [currentSlide, router])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if modal is open
      if (openModal) return

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          handlePrevious()
          break
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault()
          handleNext()
          break
        case "Home":
          handleNavigate(1)
          break
        case "End":
          handleNavigate(totalSlides)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, totalSlides, openModal])

  const handleNavigate = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const currentSlideData = slides[currentSlide - 1]
  
  const timeRemaining = slides
    .slice(currentSlide)
    .reduce((total, slide) => total + slide.estimatedTime, 0)

  const slidesTitles = slides.map(s => s.title)

  // Process content to add tooltips
  const renderContent = (content: string[]) => {
    return content.map((paragraph, idx) => {
      // Check if this paragraph has tooltips
      const tooltips = currentSlideData.tooltips || []
      let processedText = paragraph

      // Replace tooltip text with InfoTooltip components
      tooltips.forEach((tooltip) => {
        if (processedText.includes(tooltip.text)) {
          const parts = processedText.split(tooltip.text)
          return (
            <p key={idx} className="text-lg text-white/90">
              {parts[0]}
              <InfoTooltip text={tooltip.text} content={tooltip.content} />
              {parts[1]}
            </p>
          )
        }
      })

      return (
        <p key={idx} className="text-lg text-white/90">
          {processedText}
        </p>
      )
    })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Home Button - Fixed top-right */}
      <Link href="/" className="fixed top-14 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all"
          title="Back to Home"
        >
          <Home className="h-5 w-5" />
        </Button>
      </Link>

      <ProgressBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        estimatedTimeRemaining={timeRemaining}
      />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={handleNavigate}
        onPrevious={handlePrevious}
        onNext={handleNext}
        slidesTitles={slidesTitles}
      />

      <SlideContainer
        slideNumber={currentSlide}
        totalSlides={totalSlides}
        backgroundColor={currentSlideData.backgroundColor}
      >
        <div className="space-y-8 text-white">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {currentSlideData.title}
            </h1>
            {currentSlideData.subtitle && (
              <p className="text-xl text-white/80 md:text-2xl">
                {currentSlideData.subtitle}
              </p>
            )}
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {renderContent(currentSlideData.content)}
          </div>

          {/* Expandable Sections */}
          {currentSlideData.expandableSections && currentSlideData.expandableSections.length > 0 && (
            <div className="space-y-3">
              {currentSlideData.expandableSections.map((section, idx) => (
                <ExpandableSection key={idx} section={section} />
              ))}
            </div>
          )}

          {/* Code Examples */}
          {currentSlideData.codeExamples && currentSlideData.codeExamples.length > 0 && (
            <div className="space-y-4">
              {currentSlideData.codeExamples.map((code, idx) => (
                <CodeBlock
                  key={idx}
                  codeExample={code}
                  onExpand={() => setOpenModal({
                    title: code.title || `${code.language.toUpperCase()} Code Example`,
                    content: code.code,
                    type: "code",
                    data: code
                  })}
                />
              ))}
            </div>
          )}

          {/* Interactive Diagrams */}
          {currentSlideData.diagrams && currentSlideData.diagrams.length > 0 && (
            <div className="space-y-4">
              {currentSlideData.diagrams.map((diagram, idx) => (
                <InteractiveDiagram key={idx} diagram={diagram} />
              ))}
            </div>
          )}

          {/* Modals Available */}
          {currentSlideData.modals && currentSlideData.modals.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {currentSlideData.modals.map((modal, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenModal(modal)}
                  className="rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition-colors hover:bg-blue-500/20"
                >
                  📖 {modal.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </SlideContainer>

      {/* Modal */}
      {openModal && (
        <InfoModal
          modal={openModal}
          isOpen={true}
          onClose={() => setOpenModal(null)}
        />
      )}

      {/* Music Player */}
      <MusicPlayer />
    </div>
  )
}

export default function IntroPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-slate-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <IntroContent />
    </Suspense>
  )
}

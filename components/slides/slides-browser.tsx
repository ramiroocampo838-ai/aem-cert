"use client"

import { useEffect, useState } from "react"
import { GalleryHorizontal, RefreshCw, Download, FileDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { SlideFile } from "@/app/api/slides/route"

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function SlidesBrowser() {
  const [slides, setSlides] = useState<SlideFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  async function fetchSlides() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/slides")
      const data = await res.json()
      setSlides(data.slides)
    } catch {
      setError("Failed to load presentation files.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSlides()
  }, [])

  const selected = selectedIndex !== null ? slides[selectedIndex] : null

  return (
    <div className="space-y-6">
      {/* Selected Presentation */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="flex flex-col items-center justify-center py-10 text-center gap-4">
          {selected ? (
            <>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                <GalleryHorizontal className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{selected.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {formatSize(selected.size)}
                  {selected.slideCount !== null && ` · ${selected.slideCount} slides`}
                  {` · ${selected.extension}`}
                </p>
              </div>
              <a href={selected.url} download={selected.name}>
                <Button size="lg" className="gap-2">
                  <FileDown className="h-5 w-5" />
                  Download Presentation
                </Button>
              </a>
            </>
          ) : (
            <>
              <GalleryHorizontal className="h-14 w-14 opacity-20" />
              <p className="text-sm text-muted-foreground">Select a presentation to download</p>
            </>
          )}
        </CardContent>
      </Card>

      {/* List header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Presentations
          {!loading && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({slides.length} {slides.length === 1 ? "file" : "files"})
            </span>
          )}
        </h2>
        <Button variant="outline" size="sm" onClick={fetchSlides} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="pt-4 text-sm text-destructive">{error}</CardContent>
        </Card>
      )}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      ) : slides.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            <GalleryHorizontal className="mb-4 h-10 w-10 opacity-30" />
            <p className="font-medium">No presentations available</p>
            <p className="mt-1 text-sm">
              Add PowerPoint files to the <code className="text-xs bg-muted px-1 rounded">public/slides</code> folder
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {slides.map((slide, index) => {
            const isSelected = selectedIndex === index
            return (
              <Card
                key={slide.name}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  isSelected
                    ? "border-primary/40 bg-primary/5 shadow-md"
                    : "hover:border-border/60"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <CardContent className="flex items-center gap-4 py-3 px-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <GalleryHorizontal className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-medium ${isSelected ? "text-primary" : ""}`}>
                      {slide.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatSize(slide.size)}
                      {slide.slideCount !== null && ` · ${slide.slideCount} slides`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary" className="text-xs">
                      {slide.extension}
                    </Badge>
                    <a
                      href={slide.url}
                      download={slide.name}
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Download"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

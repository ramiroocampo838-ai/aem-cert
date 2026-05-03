import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Cloud, FileText, Download } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getDocPackageById } from "@/lib/docs"
import { DiagramGallery } from "@/components/docs/diagram-gallery"
import { ReadmeRenderer } from "@/components/docs/readme-renderer"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = { GraduationCap, Cloud }

const colorMap: Record<string, { icon: string; bg: string }> = {
  violet:  { icon: "text-violet-500",  bg: "bg-violet-500/10" },
  emerald: { icon: "text-emerald-500", bg: "bg-emerald-500/10" },
}

export default async function DocSectionPage({
  params,
}: {
  params: Promise<{ section: string }>
}) {
  const { section } = await params
  const pkg = getDocPackageById(section)
  if (!pkg) notFound()

  const readmePath = path.join(process.cwd(), "public", "docs", section, "README.md")
  const readmeContent = fs.existsSync(readmePath)
    ? fs.readFileSync(readmePath, "utf-8")
    : null

  const Icon = iconMap[pkg.icon] ?? FileText
  const colors = colorMap[pkg.color] ?? colorMap.violet

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <Link
          href="/docs"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Docs
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">{pkg.title}</h1>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-4xl mx-auto w-full space-y-8">
        {/* Hero */}
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg}`}>
            <Icon className={`h-6 w-6 ${colors.icon}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{pkg.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Download bar */}
        <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-muted/30 px-5 py-4">
          <span className="text-sm font-medium self-center mr-1">Downloads</span>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={pkg.pdf} download>
              <Download className="h-4 w-4" />
              Study Guide (PDF)
            </a>
          </Button>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={pkg.docx} download>
              <Download className="h-4 w-4" />
              Study Guide (DOCX)
            </a>
          </Button>
        </div>

        {/* Diagram gallery */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Diagrams</h3>
            <Badge variant="secondary">{pkg.diagrams.length} visual references</Badge>
          </div>
          <DiagramGallery diagrams={pkg.diagrams} />
        </div>

        {/* README */}
        {readmeContent && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About this package</h3>
            <div className="rounded-xl border border-border p-6">
              <ReadmeRenderer content={readmeContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import Link from "next/link"
import { GraduationCap, Cloud, ChevronRight, FileText, ImageIcon } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { docPackages } from "@/lib/docs"

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Cloud,
}

const colorMap: Record<string, { icon: string; bg: string; badge: string }> = {
  violet:  { icon: "text-violet-500",  bg: "bg-violet-500/10",  badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" },
  emerald: { icon: "text-emerald-500", bg: "bg-emerald-500/10", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
}

export default function DocsPage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Docs</h1>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Study Materials</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Downloadable diagrams, study guides, and visual references for each section.
          </p>
        </div>

        <div className="space-y-4">
          {docPackages.map((pkg) => {
            const Icon = iconMap[pkg.icon] ?? FileText
            const colors = colorMap[pkg.color] ?? colorMap.violet
            return (
              <Link key={pkg.id} href={`/docs/${pkg.id}`}>
                <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
                  <CardContent className="flex items-center gap-5 py-5 px-6">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${colors.bg}`}>
                      <Icon className={`h-7 w-7 ${colors.icon}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base">{pkg.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                        {pkg.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                          <ImageIcon className="h-3 w-3 mr-1" />
                          {pkg.diagrams.length} diagrams
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <FileText className="h-3 w-3 mr-1" />
                          PDF · DOCX
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

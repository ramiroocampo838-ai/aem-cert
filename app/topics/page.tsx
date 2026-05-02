import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Cloud, ShieldCheck, ChevronRight } from "lucide-react"

const sections = [
  {
    key: "intro",
    title: "Intro",
    subtitle: "AEM Introduction",
    description: "Core AEM architecture, components, Sling, JCR, OSGi and cloud fundamentals.",
    icon: GraduationCap,
    concepts: 100,
    categories: 10,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    key: "cloud-manager",
    title: "Cloud Manager",
    subtitle: "Cloud Manager & AEMaaCS",
    description: "CI/CD pipelines, Cloud Manager operations, environments and monitoring.",
    icon: Cloud,
    concepts: 100,
    categories: 9,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    key: "code-quality",
    title: "Code Quality",
    subtitle: "Code Quality Rules",
    description: "SonarQube, OakPAL, AEM best practices, HTL, OSGi and security standards.",
    icon: ShieldCheck,
    concepts: 100,
    categories: 8,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
]

export default function TopicsPage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Topics</h1>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Study Topics</h2>
          <p className="text-muted-foreground text-sm mt-1">
            300 concepts across 3 sections. Select a section to explore its concepts by category.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.key} href={`/topics/${section.key}`}>
                <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
                  <CardContent className="flex items-center gap-5 py-5 px-6">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${section.bg}`}>
                      <Icon className={`h-7 w-7 ${section.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base">{section.subtitle}</p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                        {section.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {section.concepts} concepts
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {section.categories} categories
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

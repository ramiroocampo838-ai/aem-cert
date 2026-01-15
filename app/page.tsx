import { GraduationCap } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ExamStatsCard } from "@/components/exam-stats-card"
import { ProgressOverview } from "@/components/progress-overview"
import { FeaturedTopics } from "@/components/featured-topics"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Dashboard</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 md:p-8">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1 className="text-balance text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              AEM Developer Certification Prep Hub
            </h1>
            <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
              Focus: <span className="font-medium text-foreground">AD0-E134</span> Sites Developer Expert | AEM as a
              Cloud Service
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Master Adobe Experience Manager with comprehensive study guides, practice topics, and curated resources.
            </p>
          </div>
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </section>

        {/* Stats and Progress */}
        <div className="grid gap-6 md:grid-cols-2">
          <ExamStatsCard />
          <ProgressOverview />
        </div>

        {/* Featured Topics */}
        <FeaturedTopics />
      </div>
    </div>
  )
}

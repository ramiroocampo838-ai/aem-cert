import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { TopicCard } from "@/components/topic-card"
import { topics } from "@/lib/topics"
import { Badge } from "@/components/ui/badge"

export default function TopicsPage() {
  const coreTopics = topics.filter((t) => t.tag === "Core")
  const cloudTopics = topics.filter((t) => t.tag === "Cloud")
  const advancedTopics = topics.filter((t) => t.tag === "Advanced")

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Topics</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-8 p-4 md:p-6 lg:p-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Study Topics</h1>
          <p className="mt-1 text-muted-foreground">
            Comprehensive coverage of all AD0-E134 exam domains. Expand each topic to view key concepts.
          </p>
        </div>

        {/* Topic Counts */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-chart-1/10 text-chart-1">
            Core: {coreTopics.length}
          </Badge>
          <Badge variant="secondary" className="bg-chart-2/10 text-chart-2">
            Cloud: {cloudTopics.length}
          </Badge>
          <Badge variant="secondary" className="bg-chart-3/10 text-chart-3">
            Advanced: {advancedTopics.length}
          </Badge>
        </div>

        {/* Core Topics */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-chart-1" />
            Core Fundamentals
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {coreTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>

        {/* Cloud Topics */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-chart-2" />
            Cloud Service
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cloudTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>

        {/* Advanced Topics */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-chart-3" />
            Advanced Concepts
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {advancedTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

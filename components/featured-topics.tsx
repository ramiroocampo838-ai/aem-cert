import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { topics } from "@/lib/topics"

const tagColors: Record<string, string> = {
  Core: "bg-chart-1/10 text-chart-1 hover:bg-chart-1/20",
  Cloud: "bg-chart-2/10 text-chart-2 hover:bg-chart-2/20",
  Advanced: "bg-chart-3/10 text-chart-3 hover:bg-chart-3/20",
}

export function FeaturedTopics() {
  const featuredTopics = topics.slice(0, 6)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Featured Topics</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/topics" className="gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.id}
              href="/topics"
              className="group flex flex-col gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className={tagColors[topic.tag]}>
                  {topic.tag}
                </Badge>
              </div>
              <h3 className="font-medium leading-tight group-hover:text-primary">{topic.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{topic.description}</p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

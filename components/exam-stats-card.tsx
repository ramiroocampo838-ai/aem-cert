import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation, BookOpen, GraduationCap, Layers } from "lucide-react"

const stats = [
  { label: "Presentations", value: "2", icon: Presentation },
  { label: "Study Topics", value: "10+", icon: BookOpen },
  { label: "Total Slides", value: "32", icon: Layers },
  { label: "Level", value: "Expert", icon: GraduationCap },
]

export function ExamStatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Hub at a Glance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

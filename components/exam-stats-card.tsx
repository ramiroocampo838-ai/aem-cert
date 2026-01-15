import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileQuestion, Target, Award } from "lucide-react"

const stats = [
  { label: "Questions", value: "50", icon: FileQuestion },
  { label: "Duration", value: "100 min", icon: Clock },
  { label: "Passing Score", value: "~70%", icon: Target },
  { label: "Exam Code", value: "AD0-E134", icon: Award },
]

export function ExamStatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Exam Quick Facts</CardTitle>
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

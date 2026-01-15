"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, Clock } from "lucide-react"

// Placeholder for future localStorage progress tracking
export function ProgressOverview() {
  // TODO: Implement localStorage progress tracking
  const progress = 0

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Topics Completed</span>
            <span className="font-medium">0 / 10</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Topics</span>
            <span className="font-semibold">10</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <CheckCircle className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Completed</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Remaining</span>
            <span className="font-semibold">10</span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground pt-2">Progress tracking coming soon!</p>
      </CardContent>
    </Card>
  )
}

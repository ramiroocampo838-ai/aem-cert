"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Code, Cloud, Puzzle, Layers, FileText, GitBranch, Shield, Zap, Globe } from "lucide-react"
import type { Topic } from "@/lib/topics"

const tagColors: Record<string, string> = {
  Core: "bg-chart-1/10 text-chart-1 hover:bg-chart-1/20",
  Cloud: "bg-chart-2/10 text-chart-2 hover:bg-chart-2/20",
  Advanced: "bg-chart-3/10 text-chart-3 hover:bg-chart-3/20",
}

const iconMap = {
  Code,
  Cloud,
  Puzzle,
  Layers,
  FileText,
  GitBranch,
  Shield,
  Zap,
  Globe,
}

interface TopicCardProps {
  topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = iconMap[topic.icon as keyof typeof iconMap]
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              {Icon && <Icon className="h-5 w-5 text-primary" />}
            </div>
            <div>
              <h3 className="font-semibold leading-tight">{topic.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
            </div>
          </div>
          <Badge variant="secondary" className={tagColors[topic.tag]}>
            {topic.tag}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Accordion type="single" collapsible>
          <AccordionItem value="details" className="border-0">
            <AccordionTrigger className="py-2 text-sm hover:no-underline">
              Study Notes ({topic.details.length} concepts)
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {topic.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

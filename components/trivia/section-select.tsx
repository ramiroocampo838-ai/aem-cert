"use client"

import { BookOpen, Cloud, Brain, ShieldCheck } from "lucide-react"
import type { TriviaSection, TriviaSectionConfig } from "@/lib/trivia-types"
import { INTRO_SECTION_CONFIG } from "@/lib/trivia-intro-questions"
import { CLOUD_MANAGER_SECTION_CONFIG } from "@/lib/trivia-cloud-manager-questions"
import { CODE_QUALITY_SECTION_CONFIG } from "@/lib/trivia-code-quality-questions"

const SECTIONS: TriviaSectionConfig[] = [INTRO_SECTION_CONFIG, CLOUD_MANAGER_SECTION_CONFIG, CODE_QUALITY_SECTION_CONFIG]

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Cloud,
  ShieldCheck,
}

const COLOR_CLASSES = {
  purple: {
    card: "border-purple-200 hover:border-purple-400 hover:shadow-purple-100 dark:border-purple-800 dark:hover:border-purple-500 dark:hover:shadow-purple-900/40",
    icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    button:
      "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200 dark:bg-purple-700 dark:hover:bg-purple-600 dark:shadow-purple-900/50",
    glow: "group-hover:shadow-purple-200/60 dark:group-hover:shadow-purple-800/40",
  },
  emerald: {
    card: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100 dark:border-emerald-800 dark:hover:border-emerald-500 dark:hover:shadow-emerald-900/40",
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    button:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:shadow-emerald-900/50",
    glow: "group-hover:shadow-emerald-200/60 dark:group-hover:shadow-emerald-800/40",
  },
  orange: {
    card: "border-orange-200 hover:border-orange-400 hover:shadow-orange-100 dark:border-orange-800 dark:hover:border-orange-500 dark:hover:shadow-orange-900/40",
    icon: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    button:
      "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200 dark:bg-orange-700 dark:hover:bg-orange-600 dark:shadow-orange-900/50",
    glow: "group-hover:shadow-orange-200/60 dark:group-hover:shadow-orange-800/40",
  },
}

interface SectionSelectProps {
  onSelect: (section: TriviaSection) => void
}

export function SectionSelect({ onSelect }: SectionSelectProps) {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-3xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-9 h-9 text-violet-500" />
          <h1 className="text-4xl font-bold tracking-tight">Trivia Challenge</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-md">
          Test your AEM knowledge! 10 random questions, 3 choices each — instant feedback after every answer.
        </p>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {SECTIONS.map((section, idx) => {
          const Icon = ICON_MAP[section.icon] ?? BookOpen
          const colors = COLOR_CLASSES[section.color]
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={[
                "group relative flex flex-col gap-5 rounded-2xl border-2 bg-card p-7 text-left",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                colors.card,
                colors.glow,
                idx === 0 ? "animate-in fade-in slide-in-from-left-4 duration-500 delay-100" : "animate-in fade-in slide-in-from-right-4 duration-500 delay-200",
              ].join(" ")}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${colors.icon}`}>
                <Icon className="w-7 h-7" />
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{section.label}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                  {section.questionCount} questions in bank
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                  10 per session
                </span>
              </div>

              {/* CTA */}
              <div
                className={[
                  "mt-auto w-full py-2.5 rounded-xl font-semibold text-center text-sm shadow transition-all duration-200",
                  "group-hover:shadow-lg group-hover:-translate-y-0.5",
                  colors.button,
                ].join(" ")}
              >
                Start this section →
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer note */}
      <p className="text-xs text-muted-foreground text-center">
        Questions and answer options are randomized every session
      </p>
    </div>
  )
}

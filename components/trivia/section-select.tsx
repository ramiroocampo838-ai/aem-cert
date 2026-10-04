"use client"

import { BookOpen, Cloud, Brain, ShieldCheck, Terminal, Fingerprint, LayoutTemplate, Blocks, Package, Workflow, Server, Database } from "lucide-react"
import type { TriviaSection, TriviaSectionConfig } from "@/lib/trivia-types"
import { INTRO_SECTION_CONFIG } from "@/lib/trivia-intro-questions"
import { CLOUD_MANAGER_SECTION_CONFIG } from "@/lib/trivia-cloud-manager-questions"
import { CODE_QUALITY_SECTION_CONFIG } from "@/lib/trivia-code-quality-questions"
import { ENV_SETUP_SECTION_CONFIG } from "@/lib/trivia-env-setup-questions"
import { AUTHENTICATION_SECTION_CONFIG } from "@/lib/trivia-authentication-questions"
import { TEMPLATES_SECTION_CONFIG } from "@/lib/trivia-templates-questions"
import { COMPONENTS_SECTION_CONFIG } from "@/lib/trivia-components-questions"
import { MAVEN_SECTION_CONFIG } from "@/lib/trivia-maven-questions"
import { WORKFLOWS_SECTION_CONFIG } from "@/lib/trivia-workflows-questions"
import { DISPATCHER_SECTION_CONFIG } from "@/lib/trivia-dispatcher-questions"
import { OAKOPS_SECTION_CONFIG } from "@/lib/trivia-oakops-questions"

const SECTIONS: TriviaSectionConfig[] = [INTRO_SECTION_CONFIG, CLOUD_MANAGER_SECTION_CONFIG, CODE_QUALITY_SECTION_CONFIG, ENV_SETUP_SECTION_CONFIG, AUTHENTICATION_SECTION_CONFIG, TEMPLATES_SECTION_CONFIG, COMPONENTS_SECTION_CONFIG, MAVEN_SECTION_CONFIG, WORKFLOWS_SECTION_CONFIG, DISPATCHER_SECTION_CONFIG, OAKOPS_SECTION_CONFIG]

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Cloud,
  ShieldCheck,
  Terminal,
  Fingerprint,
  LayoutTemplate,
  Blocks,
  Package,
  Workflow,
  Server,
  Database,
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
  blue: {
    card: "border-blue-200 hover:border-blue-400 hover:shadow-blue-100 dark:border-blue-800 dark:hover:border-blue-500 dark:hover:shadow-blue-900/40",
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    button:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600 dark:shadow-blue-900/50",
    glow: "group-hover:shadow-blue-200/60 dark:group-hover:shadow-blue-800/40",
  },
  cyan: {
    card: "border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-100 dark:border-cyan-800 dark:hover:border-cyan-500 dark:hover:shadow-cyan-900/40",
    icon: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400",
    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    button:
      "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-200 dark:bg-cyan-700 dark:hover:bg-cyan-600 dark:shadow-cyan-900/50",
    glow: "group-hover:shadow-cyan-200/60 dark:group-hover:shadow-cyan-800/40",
  },
  amber: {
    card: "border-amber-200 hover:border-amber-400 hover:shadow-amber-100 dark:border-amber-800 dark:hover:border-amber-500 dark:hover:shadow-amber-900/40",
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    button:
      "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200 dark:bg-amber-700 dark:hover:bg-amber-600 dark:shadow-amber-900/50",
    glow: "group-hover:shadow-amber-200/60 dark:group-hover:shadow-amber-800/40",
  },
  rose: {
    card: "border-rose-200 hover:border-rose-400 hover:shadow-rose-100 dark:border-rose-800 dark:hover:border-rose-500 dark:hover:shadow-rose-900/40",
    icon: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    button:
      "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200 dark:bg-rose-700 dark:hover:bg-rose-600 dark:shadow-rose-900/50",
    glow: "group-hover:shadow-rose-200/60 dark:group-hover:shadow-rose-800/40",
  },
  indigo: {
    card: "border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-100 dark:border-indigo-800 dark:hover:border-indigo-500 dark:hover:shadow-indigo-900/40",
    icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    button:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:shadow-indigo-900/50",
    glow: "group-hover:shadow-indigo-200/60 dark:group-hover:shadow-indigo-800/40",
  },
  teal: {
    card: "border-teal-200 hover:border-teal-400 hover:shadow-teal-100 dark:border-teal-800 dark:hover:border-teal-500 dark:hover:shadow-teal-900/40",
    icon: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    button:
      "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200 dark:bg-teal-700 dark:hover:bg-teal-600 dark:shadow-teal-900/50",
    glow: "group-hover:shadow-teal-200/60 dark:group-hover:shadow-teal-800/40",
  },
  fuchsia: {
    card: "border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-fuchsia-100 dark:border-fuchsia-800 dark:hover:border-fuchsia-500 dark:hover:shadow-fuchsia-900/40",
    icon: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400",
    badge: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
    button:
      "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-fuchsia-200 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-fuchsia-900/50",
    glow: "group-hover:shadow-fuchsia-200/60 dark:group-hover:shadow-fuchsia-800/40",
  },
  lime: {
    card: "border-lime-200 hover:border-lime-400 hover:shadow-lime-100 dark:border-lime-800 dark:hover:border-lime-500 dark:hover:shadow-lime-900/40",
    icon: "bg-lime-100 text-lime-600 dark:bg-lime-900/40 dark:text-lime-400",
    badge: "bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300",
    button:
      "bg-lime-600 hover:bg-lime-700 text-white shadow-lime-200 dark:bg-lime-700 dark:hover:bg-lime-600 dark:shadow-lime-900/50",
    glow: "group-hover:shadow-lime-200/60 dark:group-hover:shadow-lime-800/40",
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

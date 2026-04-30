"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, ChevronRight, Lightbulb } from "lucide-react"
import type { SessionQuestion, QuestionResult, SectionColor } from "@/lib/trivia-types"

const COLOR_CLASSES = {
  purple: {
    topic: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    progress: "bg-purple-500",
    option: {
      default:
        "border-border hover:border-purple-400 hover:bg-purple-50 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 hover:scale-[1.01]",
      selected:
        "border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/30",
    },
    nextBtn:
      "bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-600",
  },
  emerald: {
    topic: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    progress: "bg-emerald-500",
    option: {
      default:
        "border-border hover:border-emerald-400 hover:bg-emerald-50 dark:hover:border-emerald-500 dark:hover:bg-emerald-900/20 hover:scale-[1.01]",
      selected:
        "border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-900/30",
    },
    nextBtn:
      "bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600",
  },
  orange: {
    topic: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    progress: "bg-orange-500",
    option: {
      default:
        "border-border hover:border-orange-400 hover:bg-orange-50 dark:hover:border-orange-500 dark:hover:bg-orange-900/20 hover:scale-[1.01]",
      selected:
        "border-orange-500 bg-orange-50 dark:border-orange-400 dark:bg-orange-900/30",
    },
    nextBtn:
      "bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600",
  },
}

interface QuestionCardProps {
  question: SessionQuestion
  questionNumber: number
  totalQuestions: number
  sectionLabel: string
  sectionColor: SectionColor
  onAnswer: (result: QuestionResult) => void
  onNext: () => void
  result: QuestionResult | null
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  sectionLabel,
  sectionColor,
  onAnswer,
  onNext,
  result,
}: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showNext, setShowNext] = useState(false)
  const colors = COLOR_CLASSES[sectionColor]

  const isAnswered = result !== null

  function handleSelect(idx: number) {
    if (isAnswered) return
    setSelectedIndex(idx)
    const isCorrect = question.options[idx].isCorrect
    onAnswer({ sessionQuestion: question, selectedIndex: idx, isCorrect })
    setTimeout(() => setShowNext(true), 500)
  }

  function getOptionClasses(idx: number): string {
    const base =
      "relative w-full flex items-start gap-4 rounded-xl border-2 px-5 py-4 text-left font-medium text-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

    if (!isAnswered) {
      return `${base} ${idx === selectedIndex ? colors.option.selected : colors.option.default}`
    }

    // After answering — reveal correct/incorrect
    const opt = question.options[idx]
    if (opt.isCorrect) {
      return `${base} border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100 dark:border-green-400`
    }
    if (idx === selectedIndex && !opt.isCorrect) {
      return `${base} border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100 dark:border-red-400 animate-shake`
    }
    return `${base} border-border opacity-50 cursor-default`
  }

  const progressPct = Math.round(((questionNumber - 1) / totalQuestions) * 100)

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-right-6 duration-400">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">{sectionLabel}</span>
          <span>
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${colors.progress}`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Topic badge */}
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${colors.topic}`}>
        {question.topic}
      </span>

      {/* Question */}
      <h2 className="text-xl font-bold leading-snug">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, idx) => (
          <button key={idx} onClick={() => handleSelect(idx)} disabled={isAnswered} className={getOptionClasses(idx)}>
            {/* Letter label */}
            <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="flex-1">{opt.text}</span>
            {/* Result icon */}
            {isAnswered && opt.isCorrect && (
              <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
            )}
            {isAnswered && idx === selectedIndex && !opt.isCorrect && (
              <XCircle className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Explanation panel — slides in after answer */}
      {isAnswered && (
        <div
          className={[
            "rounded-xl border-2 p-5 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-400",
            result?.isCorrect
              ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
              : "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
          ].join(" ")}
        >
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Lightbulb className="w-4 h-4" />
            {result?.isCorrect ? "Correct! " : "Not quite — "}
            <span className={result?.isCorrect ? "text-green-700 dark:text-green-300" : "text-orange-700 dark:text-orange-300"}>
              {result?.isCorrect ? "Well done!" : "Here's why:"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* Next button — fades in 500ms after answer */}
      {showNext && (
        <div className="flex justify-end animate-in fade-in duration-300">
          <button
            onClick={onNext}
            className={[
              "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm shadow-md",
              "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
              colors.nextBtn,
            ].join(" ")}
          >
            {questionNumber < totalQuestions ? "Next question" : "See results"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

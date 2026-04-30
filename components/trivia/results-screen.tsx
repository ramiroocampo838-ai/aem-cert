"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, XCircle, RotateCcw, LayoutGrid, Home, Trophy, Star, BookOpen, ThumbsUp, TrendingUp } from "lucide-react"
import type { QuestionResult, SectionColor } from "@/lib/trivia-types"
import { calculateScore, getScoreBadge } from "@/lib/trivia-engine"

interface ResultsScreenProps {
  results: QuestionResult[]
  sectionLabel: string
  sectionColor: SectionColor
  onRetry: () => void
  onChangeSection: () => void
  onHome: () => void
}

const COLOR_CLASSES = {
  purple: {
    accent: "text-purple-600 dark:text-purple-400",
    ring: "ring-purple-200 dark:ring-purple-800",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    retryBtn:
      "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200 dark:bg-purple-700 dark:hover:bg-purple-600",
  },
  emerald: {
    accent: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-200 dark:ring-emerald-800",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    retryBtn:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 dark:bg-emerald-700 dark:hover:bg-emerald-600",
  },
  orange: {
    accent: "text-orange-600 dark:text-orange-400",
    ring: "ring-orange-200 dark:ring-orange-800",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    retryBtn:
      "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200 dark:bg-orange-700 dark:hover:bg-orange-600",
  },
}

const BADGE_ICON_MAP: Record<string, React.ElementType> = {
  "Perfect!": Trophy,
  Expert: Star,
  Proficient: ThumbsUp,
  Learning: BookOpen,
  "Keep Going": TrendingUp,
}

// Generates random confetti pieces
function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    color: ["#a855f7", "#10b981", "#f59e0b", "#3b82f6", "#ef4444", "#8b5cf6"][Math.floor(Math.random() * 6)],
    size: `${8 + Math.random() * 8}px`,
    duration: `${2 + Math.random() * 2}s`,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50" aria-hidden>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm animate-confetti-fall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export function ResultsScreen({ results, sectionLabel, sectionColor, onRetry, onChangeSection, onHome }: ResultsScreenProps) {
  const score = calculateScore(results)
  const badge = getScoreBadge(score)
  const colors = COLOR_CLASSES[sectionColor]
  const BadgeIcon = BADGE_ICON_MAP[badge.label] ?? Trophy

  // Count-up animation for score
  const [displayScore, setDisplayScore] = useState(0)
  const isPerfect = score.correct === score.total
  const [showConfetti, setShowConfetti] = useState(isPerfect)

  useEffect(() => {
    let current = 0
    const target = score.correct
    if (target === 0) return
    const step = Math.max(1, Math.floor(target / 12))
    const interval = setInterval(() => {
      current = Math.min(current + step, target)
      setDisplayScore(current)
      if (current >= target) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [score.correct])

  useEffect(() => {
    if (!isPerfect) return
    const t = setTimeout(() => setShowConfetti(false), 4000)
    return () => clearTimeout(t)
  }, [isPerfect])

  const wrongResults = results.filter((r) => !r.isCorrect)

  return (
    <>
      {showConfetti && <Confetti />}

      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
        {/* Score card */}
        <div className={`rounded-2xl border-2 bg-card p-8 text-center space-y-4 ring-4 ${colors.ring}`}>
          {/* Badge */}
          <div className="flex justify-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ring-4 ${colors.ring} bg-background`}>
              <BadgeIcon className={`w-10 h-10 ${badge.colorClass}`} />
            </div>
          </div>
          <div>
            <p className={`text-2xl font-bold ${badge.colorClass}`}>{badge.emoji} {badge.label}</p>
            <p className="text-muted-foreground text-sm mt-1">{sectionLabel}</p>
          </div>

          {/* Score display */}
          <div className="space-y-1">
            <p className="text-7xl font-black tabular-nums tracking-tight">
              <span className={colors.accent}>{displayScore}</span>
              <span className="text-4xl text-muted-foreground font-normal">/{score.total}</span>
            </p>
            <p className="text-xl text-muted-foreground font-semibold">{score.percentage}% correct</p>
          </div>

          {/* Quick stats row */}
          <div className="flex justify-center gap-6 pt-2">
            <div className="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-4 h-4" />
              {score.correct} correct
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-red-500 dark:text-red-400">
              <XCircle className="w-4 h-4" />
              {score.total - score.correct} wrong
            </div>
          </div>
        </div>

        {/* Wrong answers review */}
        {wrongResults.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Review — Questions you missed
            </h3>
            <div className="space-y-4">
              {wrongResults.map((r, i) => {
                const correctOption = r.sessionQuestion.options.find((o) => o.isCorrect)
                const yourOption = r.sessionQuestion.options[r.selectedIndex]
                return (
                  <div
                    key={r.sessionQuestion.id}
                    className="rounded-xl border bg-card p-5 space-y-3 animate-in fade-in slide-in-from-bottom-3"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Topic badge */}
                    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}>
                      {r.sessionQuestion.topic}
                    </span>

                    {/* Question */}
                    <p className="font-semibold text-sm leading-snug">{r.sessionQuestion.question}</p>

                    {/* Your answer */}
                    <div className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                      <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><span className="font-semibold">Your answer: </span>{yourOption?.text ?? "—"}</span>
                    </div>

                    {/* Correct answer */}
                    <div className="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><span className="font-semibold">Correct: </span>{correctOption?.text ?? "—"}</span>
                    </div>

                    {/* Explanation */}
                    <p className="text-xs text-muted-foreground leading-relaxed border-t pt-3 mt-1">
                      {r.sessionQuestion.explanation}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Perfect score message */}
        {isPerfect && (
          <div className="rounded-xl border-2 border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20 p-6 text-center space-y-2">
            <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">🏆 Perfect Score!</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-400">You answered all 10 questions correctly. Excellent work!</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onRetry}
            className={[
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold shadow-md",
              "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
              colors.retryBtn,
            ].join(" ")}
          >
            <RotateCcw className="w-4 h-4" />
            Play again
          </button>
          <button
            onClick={onChangeSection}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold border-2 border-border bg-card hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
          >
            <LayoutGrid className="w-4 h-4" />
            Change section
          </button>
          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border-2 border-border bg-card hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 sm:flex-none"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </div>
    </>
  )
}

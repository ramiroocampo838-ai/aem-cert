/**
 * Trivia Section — Pure Engine Functions
 * All randomization logic lives here. No state, no side-effects.
 */

import type {
  TriviaQuestion,
  SessionQuestion,
  TriviaOption,
  QuestionResult,
} from "./trivia-types"

// ─── Utilities ───────────────────────────────────────────────────────────────

/**
 * Fisher-Yates shuffle — returns a new shuffled array, does not mutate input.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Pick exactly `n` random elements from `arr` without repetition.
 * Returns a new array; does not mutate input.
 */
export function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffleArray(arr).slice(0, n)
}

// ─── Question Builder ─────────────────────────────────────────────────────────

/**
 * Transforms a raw TriviaQuestion (from the bank) into a SessionQuestion:
 * - Picks 1 random correct answer from correctAnswers[]
 * - Picks 2 random incorrect answers from incorrectAnswers[]
 * - Builds 3 TriviaOption objects and shuffles them
 */
export function buildSessionQuestion(q: TriviaQuestion): SessionQuestion {
  const correctText = pickRandom(q.correctAnswers, 1)[0]
  const incorrectTexts = pickRandom(q.incorrectAnswers, 2)

  const options: TriviaOption[] = shuffleArray([
    { text: correctText, isCorrect: true },
    { text: incorrectTexts[0], isCorrect: false },
    { text: incorrectTexts[1], isCorrect: false },
  ])

  return {
    id: q.id,
    question: q.question,
    topic: q.topic,
    explanation: q.explanation,
    options,
  }
}

// ─── Session Builder ──────────────────────────────────────────────────────────

/**
 * Selects `count` random questions from the bank and builds each one.
 * Every call produces a different set and different answer options.
 */
export function buildSession(
  bank: TriviaQuestion[],
  count = 10
): SessionQuestion[] {
  const selected = pickRandom(bank, count)
  return selected.map(buildSessionQuestion)
}

// ─── Scoring ──────────────────────────────────────────────────────────────────

export interface TriviaScore {
  correct: number
  total: number
  percentage: number
}

export function calculateScore(results: QuestionResult[]): TriviaScore {
  const correct = results.filter((r) => r.isCorrect).length
  const total = results.length
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  return { correct, total, percentage }
}

export type ScoreBadge = {
  label: string
  emoji: string
  colorClass: string
}

export function getScoreBadge(score: TriviaScore): ScoreBadge {
  const { correct, total } = score
  if (correct === total) return { label: "Perfect!", emoji: "🏆", colorClass: "text-yellow-500" }
  if (correct >= total * 0.8) return { label: "Expert", emoji: "⭐", colorClass: "text-green-500" }
  if (correct >= total * 0.6) return { label: "Proficient", emoji: "👍", colorClass: "text-blue-500" }
  if (correct >= total * 0.4) return { label: "Learning", emoji: "📚", colorClass: "text-yellow-600" }
  return { label: "Keep Going!", emoji: "💪", colorClass: "text-orange-500" }
}

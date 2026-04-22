"use client"

import { Suspense, useState } from "react"
import { useRouter } from "next/navigation"
import { SectionSelect } from "@/components/trivia/section-select"
import { QuestionCard } from "@/components/trivia/question-card"
import { ResultsScreen } from "@/components/trivia/results-screen"
import type { TriviaSection, TriviaPhase, SessionQuestion, QuestionResult } from "@/lib/trivia-types"
import { buildSession } from "@/lib/trivia-engine"
import { introQuestions, INTRO_SECTION_CONFIG } from "@/lib/trivia-intro-questions"
import { cloudManagerQuestions, CLOUD_MANAGER_SECTION_CONFIG } from "@/lib/trivia-cloud-manager-questions"
import { codeQualityQuestions, CODE_QUALITY_SECTION_CONFIG } from "@/lib/trivia-code-quality-questions"

const SECTION_CONFIGS = {
  intro: INTRO_SECTION_CONFIG,
  "cloud-manager": CLOUD_MANAGER_SECTION_CONFIG,
  "code-quality": CODE_QUALITY_SECTION_CONFIG,
}

const QUESTION_BANKS = {
  intro: introQuestions,
  "cloud-manager": cloudManagerQuestions,
  "code-quality": codeQualityQuestions,
}

const SESSION_SIZE = 10

function TriviaContent() {
  const router = useRouter()

  const [phase, setPhase] = useState<TriviaPhase>("select")
  const [section, setSection] = useState<TriviaSection | null>(null)
  const [sessionQuestions, setSessionQuestions] = useState<SessionQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState<QuestionResult[]>([])
  const [currentResult, setCurrentResult] = useState<QuestionResult | null>(null)

  // ── Select section ──────────────────────────────────────────────────────────

  function handleSelectSection(chosen: TriviaSection) {
    const bank = QUESTION_BANKS[chosen]
    const session = buildSession(bank, SESSION_SIZE)
    setSection(chosen)
    setSessionQuestions(session)
    setCurrentIndex(0)
    setResults([])
    setCurrentResult(null)
    setPhase("playing")
  }

  // ── Answer a question ───────────────────────────────────────────────────────

  function handleAnswer(result: QuestionResult) {
    setCurrentResult(result)
    setResults((prev) => [...prev, result])
  }

  // ── Move to next question or results ────────────────────────────────────────

  function handleNext() {
    const nextIndex = currentIndex + 1
    if (nextIndex >= sessionQuestions.length) {
      setPhase("results")
    } else {
      setCurrentIndex(nextIndex)
      setCurrentResult(null)
    }
  }

  // ── Retry same section ──────────────────────────────────────────────────────

  function handleRetry() {
    if (!section) return
    handleSelectSection(section)
  }

  // ── Change section (back to select) ────────────────────────────────────────

  function handleChangeSection() {
    setPhase("select")
    setSection(null)
    setCurrentResult(null)
    setResults([])
  }

  // ── Go home ─────────────────────────────────────────────────────────────────

  function handleHome() {
    router.push("/")
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {phase === "select" && <SectionSelect onSelect={handleSelectSection} />}

      {phase === "playing" && section && sessionQuestions.length > 0 && (
        <QuestionCard
          key={`${section}-${currentIndex}`}
          question={sessionQuestions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={sessionQuestions.length}
          sectionLabel={SECTION_CONFIGS[section].label}
          sectionColor={SECTION_CONFIGS[section].color}
          onAnswer={handleAnswer}
          onNext={handleNext}
          result={currentResult}
        />
      )}

      {phase === "results" && section && (
        <ResultsScreen
          results={results}
          sectionLabel={SECTION_CONFIGS[section].label}
          sectionColor={SECTION_CONFIGS[section].color}
          onRetry={handleRetry}
          onChangeSection={handleChangeSection}
          onHome={handleHome}
        />
      )}
    </div>
  )
}

export default function TriviaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading trivia...</div>}>
      <TriviaContent />
    </Suspense>
  )
}

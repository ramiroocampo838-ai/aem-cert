/**
 * Trivia Section — Shared TypeScript Types
 * Independent from slides-content.ts (Opción A pattern)
 */

// ─── Raw question in the bank ────────────────────────────────────────────────

export interface TriviaQuestion {
  id: string
  question: string
  /** At least 4 correct phrasing variants — one picked randomly each session */
  correctAnswers: string[]
  /** At least 8 wrong options — two picked randomly each session */
  incorrectAnswers: string[]
  /** Always shown after the user answers, regardless of outcome */
  explanation: string
  /** Short thematic label, e.g. "OSGi", "CI/CD Pipeline" */
  topic: string
}

// ─── One option shown to the user (after randomization) ──────────────────────

export interface TriviaOption {
  text: string
  isCorrect: boolean
}

// ─── A question as presented in the current session ──────────────────────────

export interface SessionQuestion {
  id: string
  question: string
  topic: string
  explanation: string
  /** Always exactly 3 options, shuffled */
  options: TriviaOption[]
}

// ─── Record of a user's answer for one question ──────────────────────────────

export interface QuestionResult {
  sessionQuestion: SessionQuestion
  /** Index (0–2) of the option the user selected */
  selectedIndex: number
  isCorrect: boolean
}

// ─── Available trivia sections ────────────────────────────────────────────────

export type TriviaSection = "intro" | "cloud-manager" | "code-quality"
export type TriviaPhase = "select" | "playing" | "results"
export type SectionColor = "purple" | "emerald" | "orange"

export interface TriviaSectionConfig {
  id: TriviaSection
  label: string
  description: string
  /** Lucide icon name */
  icon: string
  color: SectionColor
  /** Total questions in the bank */
  questionCount: number
}

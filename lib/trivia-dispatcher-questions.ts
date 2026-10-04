/**
 * Trivia — AEM Dispatcher & Caching Question Bank
 * 100 questions covering dispatcher.txt topics (14 sections)
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"
import { dispatcherQuestionsPartA } from "./trivia-dispatcher-part-a"
import { dispatcherQuestionsPartB } from "./trivia-dispatcher-part-b"

export const DISPATCHER_SECTION_CONFIG: TriviaSectionConfig = {
  id: "dispatcher",
  label: "Dispatcher & Caching",
  description: "Farms, filters, cache rules and invalidation, Cloud Service Dispatcher tools, and CDN caching",
  icon: "Server",
  color: "fuchsia",
  questionCount: 100,
}

export const dispatcherQuestions: TriviaQuestion[] = [
  ...dispatcherQuestionsPartA,
  ...dispatcherQuestionsPartB,
]

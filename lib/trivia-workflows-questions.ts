/**
 * Trivia — AEM Workflows, Content Fragments & Experience Fragments Question Bank
 * 100 questions covering workflows.txt topics (14 sections)
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"
import { workflowsQuestionsPartA } from "./trivia-workflows-part-a"
import { workflowsQuestionsPartB } from "./trivia-workflows-part-b"

export const WORKFLOWS_SECTION_CONFIG: TriviaSectionConfig = {
  id: "workflows",
  label: "Workflows & Fragments",
  description: "Workflow models and steps, custom process steps, Content Fragments, and Experience Fragments",
  icon: "Workflow",
  color: "teal",
  questionCount: 100,
}

export const workflowsQuestions: TriviaQuestion[] = [
  ...workflowsQuestionsPartA,
  ...workflowsQuestionsPartB,
]

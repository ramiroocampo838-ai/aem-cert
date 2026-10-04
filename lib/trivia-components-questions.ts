/**
 * Trivia — AEM Component Development Question Bank
 * 100 questions covering components.txt topics (14 sections)
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"
import { componentsQuestionsPartA } from "./trivia-components-part-a"
import { componentsQuestionsPartB } from "./trivia-components-part-b"

export const COMPONENTS_SECTION_CONFIG: TriviaSectionConfig = {
  id: "components",
  label: "Component Development",
  description: "Proxy components, HTL, Sling Models, dialogs, OSGi services, and servlets in AEM",
  icon: "Blocks",
  color: "rose",
  questionCount: 100,
}

export const componentsQuestions: TriviaQuestion[] = [
  ...componentsQuestionsPartA,
  ...componentsQuestionsPartB,
]

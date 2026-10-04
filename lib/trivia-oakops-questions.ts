/**
 * Trivia — AEM Oak Indexes, Logs, Replication & Topologies Question Bank
 * 100 questions covering oak-ops.txt topics (14 sections)
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"
import { oakOpsQuestionsPartA } from "./trivia-oakops-part-a"
import { oakOpsQuestionsPartB } from "./trivia-oakops-part-b"

export const OAKOPS_SECTION_CONFIG: TriviaSectionConfig = {
  id: "oakops",
  label: "Oak, Logs & Replication",
  description: "Oak indexes, logging, replication agents and queues, and AEM topologies",
  icon: "Database",
  color: "lime",
  questionCount: 100,
}

export const oakOpsQuestions: TriviaQuestion[] = [
  ...oakOpsQuestionsPartA,
  ...oakOpsQuestionsPartB,
]

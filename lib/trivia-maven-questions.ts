/**
 * Trivia — AEM Maven Project Structure & Archetype Question Bank
 * 100 questions covering maven.txt topics (14 sections)
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"
import { mavenQuestionsPartA } from "./trivia-maven-part-a"
import { mavenQuestionsPartB } from "./trivia-maven-part-b"

export const MAVEN_SECTION_CONFIG: TriviaSectionConfig = {
  id: "maven",
  label: "Maven & Archetype",
  description: "Project modules, package types, the container package, and the AEM Project Archetype",
  icon: "Package",
  color: "indigo",
  questionCount: 100,
}

export const mavenQuestions: TriviaQuestion[] = [
  ...mavenQuestionsPartA,
  ...mavenQuestionsPartB,
]

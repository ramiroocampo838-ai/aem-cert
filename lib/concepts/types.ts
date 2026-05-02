export interface Concept {
  id: string
  title: string       // Concept as a statement (from correctAnswers[0])
  reference: string   // Original trivia question, shown as context hint
  explanation: string // Full explanation text
  category: string    // Sub-topic label for accordion grouping
}

export interface ConceptCategory {
  name: string
  concepts: Concept[]
}

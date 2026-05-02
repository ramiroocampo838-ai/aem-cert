import type { ConceptCategory } from "../types"
import { sonarqubeRulesConcepts } from "./sonarqube-rules"
import { aemBestPracticesConcepts } from "./aem-best-practices"
import { htlSightlyConcepts } from "./htl-sightly"
import { osgiFelixConcepts } from "./osgi-felix"
import { dispatcherConcepts } from "./dispatcher"
import { oakpalContentRulesConcepts } from "./oakpal-content-rules"
import { performanceOptimizationConcepts } from "./performance-optimization"
import { securityConcepts } from "./security"

// Category files are populated in Phase 4 (one category per step).
// Placeholders keep the UI shell functional during Phase 1.
export const codeQualityCategories: ConceptCategory[] = [
  { name: "SonarQube Rules", concepts: sonarqubeRulesConcepts },
  { name: "AEM Best Practices", concepts: aemBestPracticesConcepts },
  { name: "HTL / Sightly", concepts: htlSightlyConcepts },
  { name: "OSGi / Felix", concepts: osgiFelixConcepts },
  { name: "Dispatcher", concepts: dispatcherConcepts },
  { name: "OakPAL Content Rules", concepts: oakpalContentRulesConcepts },
  { name: "Performance Optimization", concepts: performanceOptimizationConcepts },
  { name: "Security", concepts: securityConcepts },
]

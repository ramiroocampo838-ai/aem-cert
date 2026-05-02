import type { ConceptCategory } from "../types"
import { aemacsOverviewConcepts } from "./aemaacs-overview"
import { adminConsoleConcepts } from "./admin-console"
import { cloudManagerConcepts } from "./cloud-manager"
import { pipelineVariantsConcepts } from "./pipeline-variants"
import { pipelineStepsConcepts } from "./pipeline-steps"
import { cicdPipelinesConcepts } from "./cicd-pipelines"
import { codeQualityConcepts } from "./code-quality"
import { monitoringConcepts } from "./monitoring"
import { apiCliConcepts } from "./api-cli"

// Category files are populated in Phase 3 (one category per step).
// Placeholders keep the UI shell functional during Phase 1.
export const cloudManagerCategories: ConceptCategory[] = [
  { name: "AEMaaCS Overview", concepts: aemacsOverviewConcepts },
  { name: "Admin Console", concepts: adminConsoleConcepts },
  { name: "Cloud Manager", concepts: cloudManagerConcepts },
  { name: "Pipeline Variants", concepts: pipelineVariantsConcepts },
  { name: "Pipeline Steps", concepts: pipelineStepsConcepts },
  { name: "CI/CD Pipelines", concepts: cicdPipelinesConcepts },
  { name: "Code Quality", concepts: codeQualityConcepts },
  { name: "Monitoring", concepts: monitoringConcepts },
  { name: "API & CLI", concepts: apiCliConcepts },
]

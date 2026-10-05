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
  {
    name: "AEMaaCS Overview",
    concepts: aemacsOverviewConcepts,
    videoDescriptions: [
      "Introduces AEM as a Cloud Service and its managed, continuously updated infrastructure. Covers the CDN, autoscaling, immutable code versus mutable content, asset processing, and content distribution.",
      "Continues with Rapid Development Environments, the container-based cloud architecture, automated security, developer responsibilities, Experience Cloud integrations, and migration planning with Cloud Acceleration Manager.",
    ],
  },
  {
    name: "Admin Console",
    concepts: adminConsoleConcepts,
    videoDescriptions: [
      "Explains IMS organizations, product profiles, and how the Admin Console grants access to AEM and Cloud Manager. Introduces the Business Owner role and its program-level responsibilities.",
      "Covers Deployment Manager and Developer permissions, sandbox programs and environment hibernation, and the separate product-profile assignment required for AEM Author access.",
    ],
  },
  {
    name: "Cloud Manager",
    concepts: cloudManagerConcepts,
    videoDescriptions: [
      "Introduces Cloud Manager as the operational and CI/CD hub for AEMaaCS, then compares Business Owner, Deployment Manager, and Developer responsibilities and where their roles are assigned.",
      "Covers the Program Manager role, how programs group environments and pipelines, sandbox versus production programs, and the Git repositories available to a program.",
    ],
  },
  {
    name: "Pipeline Variants",
    concepts: pipelineVariantsConcepts,
    videoDescriptions: [
      "Compares Front End, Full Stack, Config, and Code Quality pipelines, explaining which assets and configurations each pipeline builds or deploys.",
      "Covers external Git repository connections and validation, pull-request quality checks, Edge Delivery Services pipelines, and the production-pipeline limit per program.",
    ],
  },
  {
    name: "Pipeline Steps",
    concepts: pipelineStepsConcepts,
    videoDescriptions: [
      "Walks through the production pipeline from Build and Code Quality through Stage deployment and testing. Covers functional, custom, UI, and performance tests, including customer-provided test containers.",
      "Explains what happens when a step fails, scheduled production deployment, configuration pipelines, overridable quality gates, and the execution details shown in pipeline reports.",
    ],
  },
  {
    name: "CI/CD Pipelines",
    concepts: cicdPipelinesConcepts,
    videoDescriptions: [
      "Introduces production and non-production pipelines, their triggers and quality gates, deployment to Stage, production approval, and pipelines for configuration-only changes.",
      "Covers SonarQube, environment variables, Maven builds, quality-gate metrics and severity, and how pipeline execution can be triggered manually or automatically.",
      "Explains production approval, blue-green deployment, Dispatcher cache clearing, Git repository sources, Dev pipelines, and dedicated Dispatcher/CDN configuration pipelines.",
    ],
  },
  {
    name: "Code Quality",
    concepts: codeQualityConcepts,
    videoDescriptions: [
      "Reviews Cloud Manager code-quality checks, including AEM-specific rules, coverage thresholds, SonarQube configuration and ratings, Dispatcher validation, and Maven analysis for AEM compatibility.",
    ],
  },
  {
    name: "Monitoring",
    concepts: monitoringConcepts,
    videoDescriptions: [
      "Surveys Cloud Manager monitoring tools: environment metrics and health, Developer Console, log access and forwarding, alerts, Lighthouse reports, and New Relic application monitoring.",
    ],
  },
  {
    name: "API & CLI",
    concepts: apiCliConcepts,
    videoDescriptions: [
      "Introduces the Cloud Manager REST API and CLI, Adobe IMS service credentials, and automation for pipelines, environments, logs, environment variables, and paused-step approvals.",
    ],
  },
]

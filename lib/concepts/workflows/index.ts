import type { ConceptCategory } from "../types"
import { introductionConcepts } from "./introduction"
import { workflowModelConceptsConcepts } from "./workflow-model-concepts"
import { runtimeModelsAndSyncConcepts } from "./runtime-models-and-sync"
import { workflowStepTypesConcepts } from "./workflow-step-types"
import { transientMultiResourceAndStagesConcepts } from "./transient-multi-resource-and-stages"
import { customProcessStepsInJavaConcepts } from "./custom-process-steps-in-java"
import { workflowsInCloudServiceConcepts } from "./workflows-in-cloud-service"
import { metadatamapsAndPersistingDataConcepts } from "./metadatamaps-and-persisting-data"
import { customStepComponentsConcepts } from "./custom-step-components"
import { programmaticInteractionConcepts } from "./programmatic-interaction"
import { contentFragmentsConceptsConcepts } from "./content-fragments-concepts"
import { contentFragmentsDeliveryAndBestPracticesConcepts } from "./content-fragments-delivery-and-best-practices"
import { experienceFragmentsConceptsConcepts } from "./experience-fragments-concepts"
import { experienceFragmentsDevelopmentAndTipsConcepts } from "./experience-fragments-development-and-tips"

export const workflowsCategories: ConceptCategory[] = [
  {
    name: "Introduction",
    concepts: introductionConcepts,
    videoDescriptions: [
      "Introduces the exam topics in this section: AEM workflows, Content Fragments, and Experience Fragments, with a focus on choosing workflow steps and fragment delivery approaches.",
    ],
  },
  {
    name: "Workflow Model Concepts",
    concepts: workflowModelConceptsConcepts,
    videoDescriptions: [
      "Explains workflow models, transitions, start and end nodes, payloads, work items and inbox assignments, plus the actions available on workflow instances.",
    ],
  },
  {
    name: "Runtime Models and Sync",
    concepts: runtimeModelsAndSyncConcepts,
    videoDescriptions: [
      "Shows how workflow model versions and runtime synchronization affect new and running instances, including changes to scripts and legacy models.",
    ],
  },
  {
    name: "Workflow Step Types",
    concepts: workflowStepTypesConcepts,
    videoDescriptions: [
      "Compares participant, process, container, OR split and AND split steps, and covers shared timeout behavior and dynamic participant selection.",
    ],
  },
  {
    name: "Transient, Multi Resource and Stages",
    concepts: transientMultiResourceAndStagesConcepts,
    videoDescriptions: [
      "Explains transient workflows, their performance tradeoffs and persistence exceptions, behavior around human steps and AND splits, and how multi-resource workflows package selected resources.",
    ],
  },
  {
    name: "Custom Process Steps in Java",
    concepts: customProcessStepsInJavaConcepts,
    videoDescriptions: [
      "Shows how to implement and register a Java workflow process using WorkflowProcess, access the work item and payload, use WorkflowSession and repositories, and read process arguments.",
    ],
  },
  {
    name: "Workflows in Cloud Service",
    concepts: workflowsInCloudServiceConcepts,
    videoDescriptions: [
      "Covers where workflow models and launchers are configured in AEM as a Cloud Service, how to deploy them through Cloud Manager, runtime model generation, and launcher events.",
    ],
  },
  {
    name: "MetaDataMaps and Persisting Data",
    concepts: metadatamapsAndPersistingDataConcepts,
    videoDescriptions: [
      "Explains workflow-level versus work-item metadata, how to persist shared values across steps, and how Java and ECMA process arguments map to MetaDataMaps.",
    ],
  },
  {
    name: "Custom Step Components",
    concepts: customStepComponentsConcepts,
    videoDescriptions: [
      "Explains workflow step components and their authoring dialogs, process and dynamic participant resource types, safe overlays under /apps, and PROCESS, FORM_PATH, and DIALOG_PATH parameters.",
    ],
  },
  {
    name: "Programmatic Interaction",
    concepts: programmaticInteractionConcepts,
    videoDescriptions: [
      "Covers adapting a ResourceResolver to WorkflowSession, using the Workflow REST API and JSON endpoints, checking instance states, listing models, and reading step metadata.",
    ],
  },
  {
    name: "Content Fragments Concepts",
    concepts: contentFragmentsConceptsConcepts,
    videoDescriptions: [
      "Introduces structured, channel-neutral Content Fragments and their models, elements, variations, and content references, including how model definitions govern authoring.",
    ],
  },
  {
    name: "Content Fragments Delivery and Best Practices",
    concepts: contentFragmentsDeliveryAndBestPracticesConcepts,
    videoDescriptions: [
      "Shows how pages reference Content Fragments and how they are delivered through GraphQL as JSON, then covers model governance, reference depth, and variation-count considerations.",
    ],
  },
  {
    name: "Experience Fragments Concepts",
    concepts: experienceFragmentsConceptsConcepts,
    videoDescriptions: [
      "Explains Experience Fragments as reusable component groups, their editable-template foundation, folder policies, nested fragments, and the permissions needed to author them.",
    ],
  },
  {
    name: "Experience Fragments Development and Tips",
    concepts: experienceFragmentsDevelopmentAndTipsConcepts,
    videoDescriptions: [
      "Covers Experience Fragment resource types, plain HTML output and link rewriting, template eligibility, content policies, and exporting fragments to Adobe Target.",
    ],
  },
]

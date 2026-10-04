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
  { name: "Introduction", concepts: introductionConcepts },
  { name: "Workflow Model Concepts", concepts: workflowModelConceptsConcepts },
  { name: "Runtime Models and Sync", concepts: runtimeModelsAndSyncConcepts },
  { name: "Workflow Step Types", concepts: workflowStepTypesConcepts },
  { name: "Transient, Multi Resource and Stages", concepts: transientMultiResourceAndStagesConcepts },
  { name: "Custom Process Steps in Java", concepts: customProcessStepsInJavaConcepts },
  { name: "Workflows in Cloud Service", concepts: workflowsInCloudServiceConcepts },
  { name: "MetaDataMaps and Persisting Data", concepts: metadatamapsAndPersistingDataConcepts },
  { name: "Custom Step Components", concepts: customStepComponentsConcepts },
  { name: "Programmatic Interaction", concepts: programmaticInteractionConcepts },
  { name: "Content Fragments Concepts", concepts: contentFragmentsConceptsConcepts },
  { name: "Content Fragments Delivery and Best Practices", concepts: contentFragmentsDeliveryAndBestPracticesConcepts },
  { name: "Experience Fragments Concepts", concepts: experienceFragmentsConceptsConcepts },
  { name: "Experience Fragments Development and Tips", concepts: experienceFragmentsDevelopmentAndTipsConcepts },
]

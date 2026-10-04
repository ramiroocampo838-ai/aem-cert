import type { Concept } from "../types"

export const workflowsInCloudServiceConcepts: Concept[] = [
  {
    id: "wf-038",
    category: "Workflows in Cloud Service",
    title: "Workflow models and launchers are configuration, and that configuration lives under /conf",
    reference: "In AEM as a Cloud Service, how are workflow models and launchers classified and where does that configuration live?",
    explanation:
      "Section 6 says that in AEM as a Cloud Service, models and launchers are configuration, and configuration lives under /conf.",
  },
  {
    id: "wf-039",
    category: "Workflows in Cloud Service",
    title: "Custom workflow models are stored under /conf/global/settings/workflow/models",
    reference: "Where are custom workflow models stored in AEM as a Cloud Service?",
    explanation:
      "The speech gives the exact Cloud Service location for custom workflow models as /conf/global/settings/workflow/models.",
  },
  {
    id: "wf-040",
    category: "Workflows in Cloud Service",
    title: "Workflow launchers are stored under /conf/global/settings/workflow/launcher",
    reference: "Where are workflow launchers stored in AEM as a Cloud Service?",
    explanation:
      "Section 6 says workflow launchers are stored under /conf/global/settings/workflow/launcher.",
  },
  {
    id: "wf-041",
    category: "Workflows in Cloud Service",
    title: "Never place custom workflow models in /libs because /apps and /libs are immutable",
    reference: "Where should custom workflow models never be placed in Cloud Service, and why?",
    explanation:
      "The speech explicitly warns never to place custom models in /libs because /apps and /libs are immutable in Cloud Service.",
  },
  {
    id: "wf-042",
    category: "Workflows in Cloud Service",
    title: "They are deployed as code through the Cloud Manager pipeline as part of the project packages",
    reference: "How are workflow models and launchers deployed in AEM as a Cloud Service?",
    explanation:
      "Section 6 states that models and launchers are deployed as code through the Cloud Manager pipeline, as part of the project packages.",
  },
  {
    id: "wf-043",
    category: "Workflows in Cloud Service",
    title: "The runtime model is generated under /var/workflow/models when the model is synced",
    reference: "Where is the runtime model generated for running instances when the model is synced in Cloud Service?",
    explanation:
      "The speech says that the runtime model used by running instances is generated under /var/workflow/models when the model is synced.",
  },
  {
    id: "wf-044",
    category: "Workflows in Cloud Service",
    title: "A launcher starts a workflow automatically on matching repository events and defines the event type, node type, path, and model",
    reference: "What does a workflow launcher do, and which conditions does it define?",
    explanation:
      "Section 6 says a workflow launcher starts a workflow automatically when a repository event occurs on a matching path and defines the event type, node type, path, and model to start.",
  },
]

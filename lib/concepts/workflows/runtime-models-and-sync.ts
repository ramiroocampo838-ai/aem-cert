import type { Concept } from "../types"

export const runtimeModelsAndSyncConcepts: Concept[] = [
  {
    id: "wf-015",
    category: "Runtime Models and Sync",
    title: "Workflow models are versioned",
    reference: "How are workflow models described with respect to versioning?",
    explanation:
      "Section 3 opens by stating that workflow models are versioned.",
  },
  {
    id: "wf-016",
    category: "Runtime Models and Sync",
    title: "A running instance uses the runtime model that existed when the instance started",
    reference: "Which runtime model does a running workflow instance use?",
    explanation:
      "The speech says that when a workflow instance runs, it uses the runtime model that was available when that instance started.",
  },
  {
    id: "wf-017",
    category: "Runtime Models and Sync",
    title: "Triggering Sync generates the runtime model",
    reference: "What action generates a runtime model in the workflow model editor?",
    explanation:
      "Section 3 explicitly says that a runtime model is generated when you trigger Sync in the workflow model editor.",
  },
  {
    id: "wf-018",
    category: "Runtime Models and Sync",
    title: "Neither running instances nor new instances reflect the change until a new runtime model is synced",
    reference: "A developer edits a workflow model but does not trigger Sync. What is the result?",
    explanation:
      "The speech says that if you edit a model but do not Sync, running instances and new instances do not reflect the change.",
  },
  {
    id: "wf-019",
    category: "Runtime Models and Sync",
    title: "That later runtime model is not applied to the instance that already started",
    reference: "What happens if a runtime model is generated after a workflow instance has already started?",
    explanation:
      "Section 3 says edits made, or runtime models generated, after an instance has started are not applied to that instance.",
  },
  {
    id: "wf-020",
    category: "Runtime Models and Sync",
    title: "Changes to the underlying ECMA scripts are picked up",
    reference: "What is the exception to the rule that started instances do not pick up later changes?",
    explanation:
      "The speech gives one exception: the underlying ECMA scripts are held only once, so changes to them are picked up.",
  },
  {
    id: "wf-021",
    category: "Runtime Models and Sync",
    title: "Legacy workflows were created in a prior version of AEM",
    reference: "What does the Legacy workflow type indicate in the console?",
    explanation:
      "Section 3 says the console types are Default, Custom, and Legacy, and that Legacy workflows were created in a prior version of AEM.",
  },
]

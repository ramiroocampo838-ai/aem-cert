import type { Concept } from "../types"

export const transientMultiResourceAndStagesConcepts: Concept[] = [
  {
    id: "wf-029",
    category: "Transient, Multi Resource and Stages",
    title: "A transient workflow does not persist runtime history while it runs",
    reference: "What is the key difference between a standard workflow and a transient workflow?",
    explanation:
      "Section 5 says standard workflows save runtime history while they run, while transient workflows are flagged so that the history is not persisted.",
  },
  {
    id: "wf-030",
    category: "Transient, Multi Resource and Stages",
    title: "A transient workflow is a performance tuning option that saves time and resources",
    reference: "Why would a developer choose a transient workflow?",
    explanation:
      "The speech calls transient workflows a performance tuning option that saves time and resources and says they fit workflows that run often and do not need history.",
  },
  {
    id: "wf-031",
    category: "Transient, Multi Resource and Stages",
    title: "Transient workflows were introduced for loading many assets",
    reference: "For what kind of use case were transient workflows introduced?",
    explanation:
      "Section 5 explicitly says transient workflows were introduced for loading many assets.",
  },
  {
    id: "wf-032",
    category: "Transient, Multi Resource and Stages",
    title: "It must still be persisted when the payload type needs external processing steps, such as video",
    reference: "When must runtime information still be persisted even if the model is marked transient because of payload processing needs?",
    explanation:
      "The speech lists payload types such as video that need external processing steps as one case where runtime information must still be persisted even for transient workflows.",
  },
  {
    id: "wf-033",
    category: "Transient, Multi Resource and Stages",
    title: "Runtime information must still be persisted when a transient workflow enters an AND Split",
    reference: "What happens to persistence behavior when a transient workflow enters an AND Split?",
    explanation:
      "Section 5 names entering an AND Split as a case where runtime information must still be persisted even when the model is transient.",
  },
  {
    id: "wf-034",
    category: "Transient, Multi Resource and Stages",
    title: "It changes at runtime to non-transient because a person is involved",
    reference: "What happens when a transient workflow reaches a participant step?",
    explanation:
      "The speech says that when a transient workflow reaches a participant step, it changes at runtime to non-transient because a person is involved.",
  },
  {
    id: "wf-035",
    category: "Transient, Multi Resource and Stages",
    title: "Do not use Goto Step in a transient workflow; use an OR Split instead",
    reference: "Why should a Goto Step not be used in a transient workflow, and what should be used instead?",
    explanation:
      "Section 5 says Goto Step creates a Sling job to continue at the target step, which defeats the purpose of being transient and generates an error in the log. It recommends using an OR Split instead.",
  },
  {
    id: "wf-036",
    category: "Transient, Multi Resource and Stages",
    title: "Multi Resource Support starts one workflow instance and attaches each selected resource as a package",
    reference: "What does Multi Resource Support do when several resources are selected?",
    explanation:
      "The speech says Multi Resource Support starts a single workflow instance when several resources are selected and attaches each resource as a package.",
  },
]

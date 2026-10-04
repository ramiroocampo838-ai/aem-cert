import type { Concept } from "../types"

export const customStepComponentsConcepts: Concept[] = [
  {
    id: "wf-058",
    category: "Custom Step Components",
    title: "A workflow step component defines the step's authoring behavior, appearance, dialog, and runtime implementation",
    reference: "What does a workflow step component define for model authors?",
    explanation:
      "The speech says a workflow step component defines how a step looks and behaves when building models, including its category and name, appearance, edit dialog, and the service or script that runs at runtime.",
  },
  {
    id: "wf-059",
    category: "Custom Step Components",
    title: "cq/workflow/components/model/process",
    reference: "Which base step resource super type should a custom automatic process step inherit from?",
    explanation:
      "The speech lists the three base paths and says process steps inherit from cq/workflow/components/model/process.",
  },
  {
    id: "wf-060",
    category: "Custom Step Components",
    title: "cq/workflow/components/model/dynamic_participant",
    reference: "If a custom step should choose the assignee at runtime, which base step should it extend?",
    explanation:
      "The speech says the dynamic participant base path is cq/workflow/components/model/dynamic_participant.",
  },
  {
    id: "wf-061",
    category: "Custom Step Components",
    title: "Never change /libs; recreate the item under /apps and change it there",
    reference: "Why should custom workflow step components never be modified under /libs?",
    explanation:
      "The speech is explicit: never change anything in /libs; recreate the item under /apps and make the changes there.",
  },
  {
    id: "wf-062",
    category: "Custom Step Components",
    title: "In cq:editConfig with child cq:formParameters",
    reference: "Where do design-time defaults for a workflow step component belong?",
    explanation:
      "The speech says design-time defaults go in a cq:editConfig node of type cq:EditConfig, with a child node named cq:formParameters of type nt:unstructured.",
  },
  {
    id: "wf-063",
    category: "Custom Step Components",
    title: "PROCESS fixes the process implementation",
    reference: "Which cq:formParameters property fixes the implementation of a process step so model authors cannot change it?",
    explanation:
      "The speech says properties on cq:formParameters include PROCESS, PARTICIPANT, and DYNAMIC_PARTICIPANT, and that setting them removes the model author's ability to change the value.",
  },
  {
    id: "wf-064",
    category: "Custom Step Components",
    title: "FORM_PATH shows a form when the user opens the work item",
    reference: "For a participant step, which cq:formParameters property should be used to show a form when the user opens the work item?",
    explanation:
      "The speech says FORM_PATH is used to present a form when the user opens a work item, and that it applies to participant steps.",
  },
  {
    id: "wf-065",
    category: "Custom Step Components",
    title: "DIALOG_PATH presents the completion dialog",
    reference: "For a participant step, which cq:formParameters property presents a custom dialog when the user completes the work item?",
    explanation:
      "The speech says DIALOG_PATH is used to present a custom dialog when the user completes a participant step.",
  },
]

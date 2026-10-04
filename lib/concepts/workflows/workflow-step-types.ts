import type { Concept } from "../types"

export const workflowStepTypesConcepts: Concept[] = [
  {
    id: "wf-022",
    category: "Workflow Step Types",
    title: "A Participant step generates a work item for a user or group and waits for a person",
    reference: "Which step type should be used when a person must complete assigned work before the workflow can continue?",
    explanation:
      "Participant steps generate a work item, assign it to a user or group, and require a person to complete that item before the workflow advances.",
  },
  {
    id: "wf-023",
    category: "Workflow Step Types",
    title: "A Process step runs automatically and is implemented by an ECMA script or a Java class",
    reference: "Which step type runs automatically by the system and can be implemented in Java or ECMA script?",
    explanation:
      "Section 4 says Process steps are executed automatically by the system and are implemented either by an ECMA script or a Java class.",
  },
  {
    id: "wf-024",
    category: "Workflow Step Types",
    title: "A Container step starts another workflow model as a sub-workflow",
    reference: "What does a Container step do?",
    explanation:
      "The lesson says Container steps start another workflow model as a sub-workflow.",
  },
  {
    id: "wf-025",
    category: "Workflow Step Types",
    title: "An OR Split and Join uses logic to decide which step to execute next",
    reference: "A scenario requires logic to choose which step should execute next. Which step type fits best?",
    explanation:
      "Section 4 says OR Split and Join use logic to decide which step to execute next.",
  },
  {
    id: "wf-026",
    category: "Workflow Step Types",
    title: "AND Split and Join allow multiple steps to run simultaneously",
    reference: "Which step type allows multiple steps to run simultaneously?",
    explanation:
      "The speech states that AND Split and Join allow multiple steps to run simultaneously.",
  },
  {
    id: "wf-027",
    category: "Workflow Step Types",
    title: "All steps share Autoadvance and Timeout alerts, and the timeouts are scriptable",
    reference: "Which properties are shared by all workflow steps?",
    explanation:
      "Section 4 says all steps share the common properties Autoadvance and Timeout alerts, and that timeouts are scriptable.",
  },
  {
    id: "wf-028",
    category: "Workflow Step Types",
    title: "It uses a service or script to choose the user at runtime instead of a fixed user",
    reference: "How does the Dynamic Participant step determine the assignee?",
    explanation:
      "The Dynamic Participant step uses a service or script to choose the user who receives the work item at runtime instead of using a fixed user.",
  },
]

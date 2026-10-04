import type { Concept } from "../types"

export const workflowModelConceptsConcepts: Concept[] = [
  {
    id: "wf-008",
    category: "Workflow Model Concepts",
    title: "A WorkflowModel is the definition of a workflow",
    reference: "What is a WorkflowModel in AEM?",
    explanation:
      "Section 2 says a WorkflowModel is the definition of a workflow, made of nodes and transitions.",
  },
  {
    id: "wf-009",
    category: "Workflow Model Concepts",
    title: "A transition is the link between two consecutive steps",
    reference: "What is a workflow transition?",
    explanation:
      "The speech defines a transition as the link between two consecutive steps, and says rules can be applied to it.",
  },
  {
    id: "wf-010",
    category: "Workflow Model Concepts",
    title: "A model always has a start node and an end node",
    reference: "What nodes must every workflow model have?",
    explanation:
      "Section 2 explicitly says a model always has a start node and an end node.",
  },
  {
    id: "wf-011",
    category: "Workflow Model Concepts",
    title: "The payload can reference a repository resource by path, UUID, or URL, or be a serialized Java object",
    reference: "Which payload forms are explicitly mentioned in the speech?",
    explanation:
      "Section 2 says the payload is the resource advanced through the workflow and can be referenced by path, UUID, or URL, or be a serialized Java object.",
  },
  {
    id: "wf-012",
    category: "Workflow Model Concepts",
    title: "A WorkItem contains the WorkflowData and a reference to the current WorkflowNode",
    reference: "What does a WorkItem contain?",
    explanation:
      "The speech defines a WorkItem as the unit passed through a workflow instance, containing the WorkflowData and a reference to the WorkflowNode for the current step.",
  },
  {
    id: "wf-013",
    category: "Workflow Model Concepts",
    title: "Each user has a workflow inbox, and work items are assigned directly or through a group",
    reference: "How are workflow inbox assignments described?",
    explanation:
      "Section 2 says each user account has its own workflow inbox, and work items are assigned either directly to a user or to a group the user belongs to.",
  },
  {
    id: "wf-014",
    category: "Workflow Model Concepts",
    title: "Terminate, suspend, resume, and restart are the available instance actions",
    reference: "Which actions are available on a workflow instance during its lifecycle?",
    explanation:
      "The speech says an instance is created when you choose a model and define the payload, ends when the end node is processed, and offers terminate, suspend, resume, and restart.",
  },
]

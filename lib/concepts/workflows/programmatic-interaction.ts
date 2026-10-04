import type { Concept } from "../types"

export const programmaticInteractionConcepts: Concept[] = [
  {
    id: "wf-066",
    category: "Programmatic Interaction",
    title: "Adapt a ResourceResolver to WorkflowSession",
    reference: "In Java or an OSGi service, how do you obtain a WorkflowSession?",
    explanation:
      "The speech says that to start or manage workflows from code, you obtain a WorkflowSession by adapting a ResourceResolver to WorkflowSession.",
  },
  {
    id: "wf-067",
    category: "Programmatic Interaction",
    title: "Use sling's resource resolver and adapt it to WorkflowSession",
    reference: "In an ECMA script, how do you reach a WorkflowSession?",
    explanation:
      "The speech says that in ECMA scripts, sling is a ScriptHelper that gives access to the request and its resource resolver, which can be adapted to WorkflowSession.",
  },
  {
    id: "wf-068",
    category: "Programmatic Interaction",
    title: "The Workflow REST API",
    reference: "Which API does the Workflow console itself use to manage workflows over HTTP?",
    explanation:
      "The speech says workflows can also be managed through the Workflow REST API and that the Workflow console itself uses it.",
  },
  {
    id: "wf-069",
    category: "Programmatic Interaction",
    title: "Add the .json extension to the URL",
    reference: "How do GET requests return JSON from the Workflow REST API?",
    explanation:
      "The speech states that GET requests return JSON when the Workflow REST API URL has the .json extension.",
  },
  {
    id: "wf-070",
    category: "Programmatic Interaction",
    title: "Workflow instance states are RUNNING, SUSPENDED, ABORTED, and COMPLETED",
    reference: "Which states are used when listing workflow instances by state through the Workflow REST API?",
    explanation:
      "The speech says workflow instances are listed by state and names the states as RUNNING, SUSPENDED, ABORTED, and COMPLETED.",
  },
  {
    id: "wf-071",
    category: "Programmatic Interaction",
    title: "Workflow models are listed under the models URL",
    reference: "Where are workflow models listed in the Workflow REST API?",
    explanation:
      "The speech says models are listed under the models URL, and that a specific model returns its id, title, version, description, nodes, and transitions.",
  },
  {
    id: "wf-072",
    category: "Programmatic Interaction",
    title: "A node's metaData can contain properties such as PARTICIPANT, PROCESS, and PROCESS_AUTO_ADVANCE",
    reference: "When you inspect a model through the REST API, what kind of values appear in a node's metaData?",
    explanation:
      "The speech says that in a model, each node has a type and its metaData holds properties like PARTICIPANT, PROCESS, and PROCESS_AUTO_ADVANCE.",
  },
]

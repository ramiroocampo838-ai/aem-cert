import type { Concept } from "../types"

export const customProcessStepsInJavaConcepts: Concept[] = [
  {
    id: "wf-037",
    category: "Custom Process Steps in Java",
    title: "WorkflowSession gives access to workflow operations",
    reference: "What does WorkflowSession provide to a custom Java process step?",
    explanation:
      "Section 7 says the WorkflowSession gives access to workflow operations in a custom Java process step.",
  },
  {
    id: "wf-045",
    category: "Custom Process Steps in Java",
    title: "A custom process step is implemented as an OSGi service that implements WorkflowProcess",
    reference: "How is a custom process step implemented in Java?",
    explanation:
      "Section 7 says a custom process step is implemented as an OSGi service that implements the WorkflowProcess interface.",
  },
  {
    id: "wf-046",
    category: "Custom Process Steps in Java",
    title: "The execute method receives a WorkItem, a WorkflowSession, and a MetaDataMap, and may throw a WorkflowException",
    reference: "What is the execute method signature conceptually required by WorkflowProcess?",
    explanation:
      "The speech says WorkflowProcess has a single execute method that receives a WorkItem, a WorkflowSession, and a MetaDataMap, and may throw a WorkflowException.",
  },
  {
    id: "wf-047",
    category: "Custom Process Steps in Java",
    title: "Register it as an OSGi Declarative Services component and set process.label for the display name",
    reference: "How is the Java service registered so authors see a friendly step name in the Process Step dialog?",
    explanation:
      "Section 7 says the service is registered with the OSGi Declarative Services annotation as a component with service WorkflowProcess, and process.label gives the step a display name.",
  },
  {
    id: "wf-048",
    category: "Custom Process Steps in Java",
    title: "The WorkItem gives access to the workflow instance and its WorkflowData, which holds the payload",
    reference: "What information does the WorkItem give a custom Java process step?",
    explanation:
      "The speech says the WorkItem gives you the workflow instance and its WorkflowData, and that the WorkflowData holds the payload.",
  },
  {
    id: "wf-049",
    category: "Custom Process Steps in Java",
    title: "Use the WorkflowSession and adapt the session to a ResourceResolver or JCR Session",
    reference: "How do you work with repository content from a custom Java process step?",
    explanation:
      "Section 7 says the WorkflowSession gives access to workflow operations, and for repository content the session can be adapted to a ResourceResolver or JCR Session.",
  },
  {
    id: "wf-050",
    category: "Custom Process Steps in Java",
    title: "Process Step arguments are carried in the MetaDataMap under PROCESS_ARGS, and ECMA scripts use graniteWorkItem and args",
    reference: "Where do Process Step arguments go, and what are the ECMA script variables for the current work item and arguments?",
    explanation:
      "Section 7 says the MetaDataMap passed to execute carries the step arguments, that Process Step Arguments are stored under the PROCESS_ARGS key, and that ECMA scripts use graniteWorkItem and args.",
  },
]

import type { Concept } from "../types"

export const metadatamapsAndPersistingDataConcepts: Concept[] = [
  {
    id: "wf-051",
    category: "MetaDataMaps and Persisting Data",
    title: "Workflow metadata persists information needed during the workflow and between steps",
    reference: "What is workflow metadata used for in AEM workflows?",
    explanation:
      "The speech says workflow metadata persists information needed during the life of the workflow and between steps, and that it is stored in MetaDataMap objects.",
  },
  {
    id: "wf-052",
    category: "MetaDataMaps and Persisting Data",
    title: "Use the WorkflowData MetaDataMap for shared workflow data",
    reference: "Which MetaDataMap is recommended when you need data shared over the entire workflow?",
    explanation:
      "The speech lists MetaDataMaps for Workflow, WorkflowData, and WorkItem, then recommends using only the WorkflowData map for shared workflow data.",
  },
  {
    id: "wf-053",
    category: "MetaDataMaps and Persisting Data",
    title: "Write it to workItem.getWorkflow().getWorkflowData().getMetaDataMap()",
    reference: "In Java, where should a process step write a value if a later step must read it?",
    explanation:
      "The speech says that to persist data for later steps in Java, you call getWorkflow().getWorkflowData().getMetaDataMap() on the WorkItem and put a key and value there.",
  },
  {
    id: "wf-054",
    category: "MetaDataMaps and Persisting Data",
    title: "The WorkItem MetaDataMap only lasts while that work item is running",
    reference: "Which MetaDataMap is limited to the lifetime of the current step's work item?",
    explanation:
      "The speech says a WorkItem map can only be used while that work item, meaning that step, is running.",
  },
  {
    id: "wf-055",
    category: "MetaDataMaps and Persisting Data",
    title: "They are added to the workflow MetaDataMap",
    reference: "Values entered below a step component's \"./metaData\" node end up where at runtime?",
    explanation:
      "The speech states that dialog values stored below the \"./metaData\" node of a step component are added to the workflow MetaDataMap.",
  },
  {
    id: "wf-056",
    category: "MetaDataMaps and Persisting Data",
    title: "PROCESS_ARGS is available as args in ECMA and through the MetaDataMap argument in Java",
    reference: "When the metadata key is PROCESS_ARGS, how are those arguments exposed to implementations?",
    explanation:
      "The speech says that when the key is PROCESS_ARGS, the value is available directly as args in ECMA scripts and as the MetaDataMap argument in Java.",
  },
  {
    id: "wf-057",
    category: "MetaDataMaps and Persisting Data",
    title: "In ECMA, metaData refers to the step metadata, not the workflow metadata",
    reference: "In an ECMA workflow script, why should you not confuse \"metaData\" with workflow metadata?",
    explanation:
      "The speech explicitly says that in ECMA scripts, the variable metaData is the metadata of the step, which is different from the workflow metadata.",
  },
]

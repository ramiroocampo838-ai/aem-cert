import type { Concept } from "../types"

export const replicationInCloudServiceConcepts: Concept[] = [
  {
    id: "oak-072",
    category: "Replication in Cloud Service",
    title: "Sling Content Distribution to a pipeline service outside the AEM runtime",
    reference: "What mechanism does AEM as a Cloud Service use to move content for replication?",
    explanation:
      "Section 11 says AEM as a Cloud Service uses Sling Content Distribution to move content to a pipeline service outside the AEM runtime.",
  },
  {
    id: "oak-073",
    category: "Replication in Cloud Service",
    title: "The publish agent is enabled by default, and the preview agent exists but is not enabled by default",
    reference: "What are the two predefined Cloud Service distribution agents and their default state?",
    explanation:
      "Section 11 says there are two predefined agents: publish, which is enabled by default, and preview, which is not enabled by default.",
  },
  {
    id: "oak-074",
    category: "Replication in Cloud Service",
    title: "Tools, Deployment, Distribution",
    reference: "Where are Cloud Service distribution agents monitored?",
    explanation:
      "The source says the publish and preview agents are monitored from Tools, Deployment, Distribution.",
  },
  {
    id: "oak-075",
    category: "Replication in Cloud Service",
    title: "Use a workflow with the Tree Activation step",
    reference: "What is the recommended way to handle bulk publishing in Cloud Service?",
    explanation:
      "Section 11 says that for bulk publishing you should use a workflow with the Tree Activation step and that building your own bulk code is not recommended.",
  },
  {
    id: "oak-076",
    category: "Replication in Cloud Service",
    title: "It uses only the agents enabled by default, which means publish",
    reference: "What happens when the Replication API is used without an agent filter?",
    explanation:
      "The source states that replicating without a filter uses only the agents enabled by default, which means the publish agent.",
  },
  {
    id: "oak-077",
    category: "Replication in Cloud Service",
    title: "Pass ReplicationOptions with an AgentFilter",
    reference: "How do you target the preview tier with the Replication API?",
    explanation:
      "Section 11 explains that to target preview you pass ReplicationOptions with an AgentFilter.",
  },
  {
    id: "oak-078",
    category: "Replication in Cloud Service",
    title: "Persisted means the change is durably stored on the publish tier, and Fully published means it is live on all publish pods and Dispatcher cache has been cleared",
    reference: "What do the two Cloud Service agent queues mean?",
    explanation:
      "The source says each Cloud Service agent shows two queues: Persisted for durable storage on the publish tier, and Fully published for content live on all publish pods with Dispatcher cache cleared for the paths.",
  },
]

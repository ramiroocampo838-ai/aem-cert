import type { Concept } from "../types"

export const contentDistributionConcepts: Concept[] = [
  {
    id: "env-053",
    category: "Content Distribution",
    title: "Through the Adobe Pipeline — a cloud-only microservice",
    reference: "How does content move from Author to Publish in a production AEMaaCS environment?",
    explanation:
      "In production AEMaaCS, content moves from Author to Publish through the Adobe Pipeline — a cloud-only microservice. This mechanism is not available for local development, so Replication Agents are used instead.",
  },
  {
    id: "env-054",
    category: "Content Distribution",
    title: "Using legacy Replication Agents configured on the local Author service",
    reference: "How do you simulate content distribution from Author to Publish in a local AEM environment?",
    explanation:
      "Locally, you simulate the Adobe Pipeline by enabling legacy Replication Agents on the Author instance. These agents push content to the local Publish instance when you activate pages or assets.",
  },
  {
    id: "env-055",
    category: "Content Distribution",
    title: "/etc/replication/agents.author.html",
    reference: "Where in AEM do you go to enable the local Replication Agent for content distribution?",
    explanation:
      "To configure Replication Agents, navigate to `/etc/replication/agents.author.html` on the local Author instance. From there you can open the Default Agent, enable it, and set the transport URI.",
  },
  {
    id: "env-056",
    category: "Content Distribution",
    title: "The Default Agent",
    reference: "Which Replication Agent do you enable for local content distribution?",
    explanation:
      "The Default Agent is the standard Replication Agent for pushing content from Author to Publish. For local development, you enable the Default Agent and point its transport URI to the local Publish instance.",
  },
  {
    id: "env-057",
    category: "Content Distribution",
    title: "localhost:4503",
    reference: "What transport URI should the Default Replication Agent use to point to the local Publish instance?",
    explanation:
      "The Default Replication Agent's transport URI should point to the local Publish instance at `localhost:4503`. The full URI is typically `http://localhost:4503/bin/receive?sling:authRequestLogin=1`.",
  },
  {
    id: "env-058",
    category: "Content Distribution",
    title: "Because the Adobe Pipeline is a cloud-only microservice not available locally",
    reference: "Why can't the Adobe Pipeline be used for local AEM development?",
    explanation:
      "The Adobe Pipeline is a cloud-only microservice. It exists only in AEMaaCS cloud environments and has no local equivalent. Developers use legacy Replication Agents to simulate the same Author-to-Publish flow locally.",
  },
  {
    id: "env-059",
    category: "Content Distribution",
    title: "Content published on Author will replicate to the local Publish instance",
    reference: "What happens after you enable the Default Replication Agent and point it to localhost:4503?",
    explanation:
      "Once the Default Replication Agent is enabled and pointed to `localhost:4503`, any page or asset you activate (publish) on the local Author instance will be replicated to the local Publish instance — simulating the cloud content distribution behavior.",
  },
  {
    id: "env-060",
    category: "Content Distribution",
    title: "Because AEMaaCS uses the Adobe Pipeline for content distribution, making Replication Agents a legacy approach",
    reference: "Why are Replication Agents described as 'legacy' in the context of AEMaaCS?",
    explanation:
      "In AEMaaCS, content distribution between Author and Publish is handled by the Adobe Pipeline (a cloud microservice). Replication Agents are considered 'legacy' because they were the original mechanism from older AEM versions. They are still available locally but are not the primary cloud mechanism.",
  },
]

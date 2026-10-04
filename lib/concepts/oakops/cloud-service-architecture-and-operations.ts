import type { Concept } from "../types"

export const cloudServiceArchitectureAndOperationsConcepts: Concept[] = [
  {
    id: "oak-086",
    category: "Cloud Service Architecture and Operations",
    title: "It moves from instance-centric to service-based, using n-x AEM containers driven by Cloud Manager CI/CD pipelines",
    reference: "What architectural shift does AEM as a Cloud Service make?",
    explanation:
      "Section 13 says AEM as a Cloud Service moves from an instance-centric model to a service-based one with n-x AEM containers driven by Cloud Manager CI/CD pipelines.",
  },
  {
    id: "oak-087",
    category: "Cloud Service Architecture and Operations",
    title: "Customers do not choose TarMK or MongoMK, do not manage Author clusters or Publish farms themselves, and the publish tier scales automatically",
    reference: "What platform choices are no longer managed directly by customers in Cloud Service?",
    explanation:
      "Section 13 says customers do not choose TarMK or MongoMK and do not manage Author clusters or Publish farms themselves; the publish tier scales automatically.",
  },
  {
    id: "oak-088",
    category: "Cloud Service Architecture and Operations",
    title: "Code, OSGi configurations, Dispatcher configuration, log configuration, and index definitions",
    reference: "Which kinds of changes must be deployed through Cloud Manager in AEM as a Cloud Service?",
    explanation:
      "The source says code, OSGi configurations, Dispatcher configuration, log configuration, and index definitions are all deployed through Cloud Manager.",
  },
  {
    id: "oak-089",
    category: "Cloud Service Architecture and Operations",
    title: "Because configuration changes in production that bypass the pipeline break the CI/CD policy",
    reference: "Why are production configuration changes outside the pipeline a problem in Cloud Service?",
    explanation:
      "Section 13 explicitly says that configuration changes in production that bypass the pipeline break the CI/CD policy.",
  },
  {
    id: "oak-090",
    category: "Cloud Service Architecture and Operations",
    title: "Old and new versions run side by side for a time, so two sets of indexes exist, and the new version is built and reindexed before the traffic switch",
    reference: "What is true about indexes during a rolling deployment in Cloud Service?",
    explanation:
      "The source says rolling deployments run the old and new version side by side, so two index sets exist, and the new version's indexes are built and repositories reindexed before the traffic switch.",
  },
  {
    id: "oak-091",
    category: "Cloud Service Architecture and Operations",
    title: "Because traffic flows from the CDN to Apache and Dispatcher on Publish and then to AEM, and a request may be answered earlier in that chain",
    reference: "Why can checking only AEM logs miss a request in Cloud Service?",
    explanation:
      "Section 13 says traffic flows CDN to Apache and Dispatcher to AEM, and each layer has its own log, so AEM logs alone can miss a request answered earlier in the chain.",
  },
  {
    id: "oak-092",
    category: "Cloud Service Architecture and Operations",
    title: "SREs monitor system health around the clock, and customers can set up alerts and see metrics including search performance",
    reference: "What runtime operational support does the speech mention for Cloud Service customers?",
    explanation:
      "The source says SREs monitor system health around the clock, and customers can set up alerts and see runtime metrics, including search performance.",
  },
]

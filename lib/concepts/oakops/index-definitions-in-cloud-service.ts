import type { Concept } from "../types"

export const indexDefinitionsInCloudServiceConcepts: Concept[] = [
  {
    id: "oak-022",
    category: "Index Definitions in Cloud Service",
    title: "In Cloud Service, index configuration is specified before deployment and not changed on a running instance",
    reference: "How does the Cloud Service model change index configuration compared with single-instance thinking?",
    explanation:
      "Section 4 says index configuration in Cloud Service is specified before a deployment, not changed on a running instance.",
  },
  {
    id: "oak-023",
    category: "Index Definitions in Cloud Service",
    title: "Users do not have access to the Index Manager of a single instance in the cloud",
    reference: "What does the speech say about user access to the Index Manager in Cloud Service?",
    explanation:
      "Section 4 says users do not have access to the Index Manager of a single instance in Cloud Service.",
  },
  {
    id: "oak-024",
    category: "Index Definitions in Cloud Service",
    title: "Two sets of indexes exist, one for the old version and one for the new version, and the Cloud Manager build page shows whether indexing is complete",
    reference: "What happens to indexes during a rolling deployment, and where can you see job completion?",
    explanation:
      "Section 4 says that rolling deployments use two index sets and that the Cloud Manager build page shows whether the indexing job is complete.",
  },
  {
    id: "oak-025",
    category: "Index Definitions in Cloud Service",
    title: "Only indexes of type lucene are supported for customization",
    reference: "Which index type is supported for customer customization in Cloud Service?",
    explanation:
      "Section 4 states that only indexes of type lucene are supported for customization in Cloud Service.",
  },
  {
    id: "oak-026",
    category: "Index Definitions in Cloud Service",
    title: "The async property can be async, async and nrt, or fulltext-async",
    reference: "Which async values are allowed for customized Cloud Service indexes?",
    explanation:
      "Section 4 names the allowed async values: async, async and nrt, or fulltext-async.",
  },
  {
    id: "oak-027",
    category: "Index Definitions in Cloud Service",
    title: "Only standard product analyzers are supported, so custom analyzers are not, and useInSimilarity is not supported",
    reference: "Which two customization limitations does the speech call out about analyzers and similarity?",
    explanation:
      "Section 4 says only standard shipped analyzers are supported, not custom analyzers, and useInSimilarity is not supported.",
  },
  {
    id: "oak-028",
    category: "Index Definitions in Cloud Service",
    title: "Use filevault-package-maven-plugin 1.3.2 or later, add oak:index to immutableRootNodeNames, enable allowIndexDefinitions and noIntermediateSaves in ui.apps and ui.apps.structure, and add a filter for /oak:index in ui.apps.structure",
    reference: "Which project setup steps does the speech require for Cloud Service index definitions?",
    explanation:
      "Section 4 lists these setup requirements directly, including filevault-package-maven-plugin 1.3.2+, immutableRootNodeNames, allowIndexDefinitions, noIntermediateSaves, and the /oak:index filter.",
  },
]

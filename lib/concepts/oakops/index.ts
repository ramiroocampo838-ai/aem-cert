import type { ConceptCategory } from "../types"
import { introductionConcepts } from "./introduction"
import { oakQueryEngineAndIndexersConcepts } from "./oak-query-engine-and-indexers"
import { propertyAndLuceneIndexesConcepts } from "./property-and-lucene-indexes"
import { indexDefinitionsInCloudServiceConcepts } from "./index-definitions-in-cloud-service"
import { indexNamesAndSimplifiedIndexManagementConcepts } from "./index-names-and-simplified-index-management"
import { loggingBasicsAndOsgiConfigurationConcepts } from "./logging-basics-and-osgi-configuration"
import { cloudServiceLogsConcepts } from "./cloud-service-logs"
import { apacheDispatcherAndCdnLogsConcepts } from "./apache-dispatcher-and-cdn-logs"
import { replicationFundamentalsConcepts } from "./replication-fundamentals"
import { replicationAgentsAndQueuesIn65Concepts } from "./replication-agents-and-queues-in-6-5"
import { replicationInCloudServiceConcepts } from "./replication-in-cloud-service"
import { persistenceAndTopologiesIn65Concepts } from "./persistence-and-topologies-in-6-5"
import { cloudServiceArchitectureAndOperationsConcepts } from "./cloud-service-architecture-and-operations"
import { troubleshootingAndExamTipsConcepts } from "./troubleshooting-and-exam-tips"

export const oakopsCategories: ConceptCategory[] = [
  { name: "Introduction", concepts: introductionConcepts },
  { name: "Oak Query Engine and Indexers", concepts: oakQueryEngineAndIndexersConcepts },
  { name: "Property and Lucene Indexes", concepts: propertyAndLuceneIndexesConcepts },
  { name: "Index Definitions in Cloud Service", concepts: indexDefinitionsInCloudServiceConcepts },
  { name: "Index Names and Simplified Index Management", concepts: indexNamesAndSimplifiedIndexManagementConcepts },
  { name: "Logging Basics and OSGi Configuration", concepts: loggingBasicsAndOsgiConfigurationConcepts },
  { name: "Cloud Service Logs", concepts: cloudServiceLogsConcepts },
  { name: "Apache, Dispatcher and CDN Logs", concepts: apacheDispatcherAndCdnLogsConcepts },
  { name: "Replication Fundamentals", concepts: replicationFundamentalsConcepts },
  { name: "Replication Agents and Queues in 6.5", concepts: replicationAgentsAndQueuesIn65Concepts },
  { name: "Replication in Cloud Service", concepts: replicationInCloudServiceConcepts },
  { name: "Persistence and Topologies in 6.5", concepts: persistenceAndTopologiesIn65Concepts },
  { name: "Cloud Service Architecture and Operations", concepts: cloudServiceArchitectureAndOperationsConcepts },
  { name: "Troubleshooting and Exam Tips", concepts: troubleshootingAndExamTipsConcepts },
]

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
  {
    name: "Introduction",
    concepts: introductionConcepts,
    videoDescriptions: [
      "Introduces Oak indexing, AEM logging, Author-to-Publish replication, and deployment topologies, with scenarios focused on diagnosing slow queries and operational issues.",
    ],
  },
  {
    name: "Oak Query Engine and Indexers",
    concepts: oakQueryEngineAndIndexersConcepts,
    videoDescriptions: [
      "Explains how Oak evaluates repository queries, why unindexed traversal can be slow, how traversal warnings help identify issues, and how indexers estimate query cost.",
    ],
  },
  {
    name: "Property and Lucene Indexes",
    concepts: propertyAndLuceneIndexesConcepts,
    videoDescriptions: [
      "Compares Oak property and Lucene indexes, covering index definitions, uniqueness and node-type constraints, asynchronous indexing, and full-text query behavior.",
    ],
  },
  {
    name: "Index Definitions in Cloud Service",
    concepts: indexDefinitionsInCloudServiceConcepts,
    videoDescriptions: [
      "Covers how to define and deploy Oak indexes in AEM as a Cloud Service, supported Lucene options, reindexing during releases, and required FileVault and package configuration.",
    ],
  },
  {
    name: "Index Names and Simplified Index Management",
    concepts: indexNamesAndSimplifiedIndexManagementConcepts,
    videoDescriptions: [
      "Explains naming conventions for custom and customized Oak indexes, how to base changes on current product definitions, and how diff.index simplifies index management.",
    ],
  },
  {
    name: "Logging Basics and OSGi Configuration",
    concepts: loggingBasicsAndOsgiConfigurationConcepts,
    videoDescriptions: [
      "Introduces Sling logging and its OSGi configuration, including logger and writer relationships, log levels, rotation, file destinations, and common AEM log files.",
    ],
  },
  {
    name: "Cloud Service Logs",
    concepts: cloudServiceLogsConcepts,
    videoDescriptions: [
      "Surveys AEM Cloud Service Java, request, access, and CDN logs, where log settings are deployed, how to read their formats, and which requests they capture.",
    ],
  },
  {
    name: "Apache, Dispatcher and CDN Logs",
    concepts: apacheDispatcherAndCdnLogsConcepts,
    videoDescriptions: [
      "Explains Publish-side Apache, Dispatcher, and CDN logs, how to set supported log levels, interpret cache actions such as HIT and MISS, and retrieve logs with Cloud Manager or the CLI.",
    ],
  },
  {
    name: "Replication Fundamentals",
    concepts: replicationFundamentalsConcepts,
    videoDescriptions: [
      "Introduces AEM replication for publishing, cache flushing, and reverse user-data flows, including queues, transport endpoints, and data that uses a shared store instead.",
    ],
  },
  {
    name: "Replication Agents and Queues in 6.5",
    concepts: replicationAgentsAndQueuesIn65Concepts,
    videoDescriptions: [
      "Covers AEM 6.5 replication agent types and queue states, agent permissions and logging, receive endpoints, and selecting a Dispatcher farm for cache flushes.",
    ],
  },
  {
    name: "Replication in Cloud Service",
    concepts: replicationInCloudServiceConcepts,
    videoDescriptions: [
      "Explains Sling Content Distribution in AEM Cloud Service, default publish and preview agents, distribution tools, workflow-based tree activation, and publication status meanings.",
    ],
  },
  {
    name: "Persistence and Topologies in 6.5",
    concepts: persistenceAndTopologiesIn65Concepts,
    videoDescriptions: [
      "Compares TarMK and MongoMK deployment topologies, including standalone and standby setups, TarMK farms, Author clusters, scaling considerations, and MongoDB replica-set requirements.",
    ],
  },
  {
    name: "Cloud Service Architecture and Operations",
    concepts: cloudServiceArchitectureAndOperationsConcepts,
    videoDescriptions: [
      "Explains AEM Cloud Service's container-based, service-oriented architecture, pipeline-managed configuration and indexes, rolling releases, request routing, and operational monitoring.",
    ],
  },
  {
    name: "Troubleshooting and Exam Tips",
    concepts: troubleshootingAndExamTipsConcepts,
    videoDescriptions: [
      "Provides diagnostic steps for slow Oak queries, index deployment, AEM and Dispatcher logs, replication failures, and topology questions, with practical limits and exam reminders.",
    ],
  },
]

import type { Concept } from "../types"

export const persistenceAndTopologiesIn65Concepts: Concept[] = [
  {
    id: "oak-079",
    category: "Persistence and Topologies in 6.5",
    title: "Use TarMK as the default in all deployments except specific cases",
    reference: "What is Adobe's default persistence recommendation starting with AEM 6.2?",
    explanation:
      "Section 12 says that starting with AEM 6.2, Adobe recommends TarMK as the default in all deployments for both Author and Publish, except for specific cases.",
  },
  {
    id: "oak-080",
    category: "Persistence and Topologies in 6.5",
    title: "It is one instance on one server, simple and fast, but not scalable beyond that server and without failover",
    reference: "Which statement best describes a single TarMK instance?",
    explanation:
      "The source says a single TarMK instance is one instance on a single server, is the default for Author, and is simple and fast but has no failover and cannot scale beyond that server.",
  },
  {
    id: "oak-081",
    category: "Persistence and Topologies in 6.5",
    title: "A primary replicates its repository to a standby, failover is not automatic, and both instances need a license",
    reference: "What is true about TarMK Cold Standby?",
    explanation:
      "Section 12 says TarMK Cold Standby replicates the primary repository to a standby, the standby runs only the HTTP receiver, failover is not automatic, and both instances need a license.",
  },
  {
    id: "oak-082",
    category: "Persistence and Topologies in 6.5",
    title: "It uses several independent TarMK Oak instances, scales reads, and provides failover",
    reference: "Why is a TarMK Farm the default for Publish?",
    explanation:
      "The source says a TarMK Farm consists of several independent Oak instances with TarMK, kept in sync because Author publishes the same content to each member, and that it scales reads and gives failover.",
  },
  {
    id: "oak-083",
    category: "Persistence and Topologies in 6.5",
    title: "Several Author instances access a MongoDB replica set in an active-active topology that scales Author horizontally and provides high availability",
    reference: "How is an Oak cluster with MongoMK characterized?",
    explanation:
      "Section 12 says an Oak cluster with MongoMK has several Author instances accessing a MongoDB replica set, works active-active, scales Author horizontally, and provides high availability.",
  },
  {
    id: "oak-084",
    category: "Persistence and Topologies in 6.5",
    title: "When Author load is very high, such as thousands of named users a day, hundreds of concurrent users, or very large daily asset ingestion, edits, or searches",
    reference: "When does the speech say MongoMK on Author should be considered?",
    explanation:
      "The source gives MongoMK selection criteria as large-scale Author demands, including thousands of named users a day, hundreds of concurrent users, hundreds of thousands of ingestions or edits a day, and tens of thousands of searches a day.",
  },
  {
    id: "oak-085",
    category: "Persistence and Topologies in 6.5",
    title: "A replica set with one primary and two secondaries under 15 ms latency, plus an Author cluster with two active nodes",
    reference: "What minimal MongoDB topology is recommended for a MongoMK Author setup?",
    explanation:
      "Section 12 says the minimal MongoDB topology is a replica set with one primary and two secondaries with latency under 15 milliseconds, along with an Author cluster of two active nodes.",
  },
]

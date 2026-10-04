import type { Concept } from "../types"

export const replicationFundamentalsConcepts: Concept[] = [
  {
    id: "oak-058",
    category: "Replication Fundamentals",
    title: "They publish content from Author to Publish, flush Dispatcher cache, and return user input from Publish to Author",
    reference: "What are replication agents used for according to the speech?",
    explanation:
      "Section 9 defines replication agents as the mechanism for publishing content from Author to Publish, flushing Dispatcher cache, and returning user input from Publish to Author.",
  },
  {
    id: "oak-059",
    category: "Replication Fundamentals",
    title: "It packages the content and places it in the replication queue",
    reference: "In Author-to-Publish replication, what does the default replication agent do before content reaches Publish?",
    explanation:
      "The speech says a publish request is passed to the default replication agent, which packages the content and places it in the replication queue.",
  },
  {
    id: "oak-060",
    category: "Replication Fundamentals",
    title: "bin/receive",
    reference: "Which servlet receives replicated content on Publish by default?",
    explanation:
      "Section 9 states that a servlet on Publish receives the content and that the default servlet is bin/receive.",
  },
  {
    id: "oak-061",
    category: "Replication Fundamentals",
    title: "User data such as users, groups, and profiles",
    reference: "Which data is explicitly not replicated between Author and Publish?",
    explanation:
      "The source explicitly says that user data such as users, groups, and profiles is not replicated between Author and Publish.",
  },
  {
    id: "oak-062",
    category: "Replication Fundamentals",
    title: "The Publish agent puts data in an outbox, and Author listeners poll the outboxes",
    reference: "How does reverse replication return data from Publish to Author?",
    explanation:
      "Section 9 says reverse replication works by having the agent on Publish place data in an outbox, while replication listeners on Author poll the outboxes.",
  },
  {
    id: "oak-063",
    category: "Replication Fundamentals",
    title: "It is effectively disabled by default",
    reference: "What is the default state of reverse replication since AEM 6.1?",
    explanation:
      "The speech says reverse replication is effectively disabled by default since AEM 6.1.",
  },
  {
    id: "oak-064",
    category: "Replication Fundamentals",
    title: "It is never replicated; a common store is used instead",
    reference: "How is AEM Communities user-generated content handled?",
    explanation:
      "Section 9 explicitly says that for AEM Communities, user-generated content is never replicated and a common store is used instead.",
  },
]

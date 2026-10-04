import type { Concept } from "../types"

export const replicationAgentsAndQueuesIn65Concepts: Concept[] = [
  {
    id: "oak-065",
    category: "Replication Agents and Queues in 6.5",
    title: "The Default Agent, Dispatcher Flush, Reverse Replication, and the Static Agent",
    reference: "Which agents are part of a standard AEM 6.5 installation?",
    explanation:
      "Section 10 says a standard 6.5 installation has the Default Agent for Author to Publish, Dispatcher Flush, Reverse Replication, and the Static Agent.",
  },
  {
    id: "oak-066",
    category: "Replication Agents and Queues in 6.5",
    title: "Active means items are being processed, Idle means the queue is empty, and Blocked means items are queued but cannot be processed",
    reference: "What do the queue states Active, Idle, and Blocked mean?",
    explanation:
      "The source defines Active, Idle, and Blocked exactly in terms of processing items, emptiness, and queued items that cannot be processed.",
  },
  {
    id: "oak-067",
    category: "Replication Agents and Queues in 6.5",
    title: "60000 milliseconds",
    reference: "What is the default Retry Delay for a replication agent in AEM 6.5?",
    explanation:
      "Section 10 says agent settings include Retry Delay with a default of 60000 milliseconds.",
  },
  {
    id: "oak-068",
    category: "Replication Agents and Queues in 6.5",
    title: "It needs read access to all replicated paths on Author and create/write access on Publish; if empty, the system user is used",
    reference: "What access must the Agent User Id have, and what happens if it is left empty?",
    explanation:
      "The source specifies that the Agent User Id must have read access to all replicated paths on Author and create/write access on Publish, and if it is empty the system user is used.",
  },
  {
    id: "oak-069",
    category: "Replication Agents and Queues in 6.5",
    title: "Error, Info, and Debug, with Info as the default",
    reference: "Which log levels are available for a replication agent, and what is the default?",
    explanation:
      "Section 10 states that the agent Log Level options are Error, Info, and Debug, and that Info is the default.",
  },
  {
    id: "oak-070",
    category: "Replication Agents and Queues in 6.5",
    title: "bin/receive",
    reference: "What endpoint does the Default Agent's URI point to?",
    explanation:
      "The speech says the Transport tab holds the URI, and for a Default Agent that URI points to bin/receive.",
  },
  {
    id: "oak-071",
    category: "Replication Agents and Queues in 6.5",
    title: "With path-based virtual hosts, the URI chooses which farm is invalidated",
    reference: "When do path-based virtual hosts affect the Dispatcher Flush agent URI?",
    explanation:
      "Section 10 says that with path-based virtual hosts, the Dispatcher Flush agent URI chooses which farm is invalidated.",
  },
]

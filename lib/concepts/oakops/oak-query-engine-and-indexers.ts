import type { Concept } from "../types"

export const oakQueryEngineAndIndexersConcepts: Concept[] = [
  {
    id: "oak-008",
    category: "Oak Query Engine and Indexers",
    title: "Unlike Jackrabbit 2, Oak does not index content by default",
    reference: "Compared with Jackrabbit 2, what does the speech say about Oak indexing by default?",
    explanation:
      "Section 2 explicitly says Oak does not index content by default, unlike Jackrabbit 2.",
  },
  {
    id: "oak-009",
    category: "Oak Query Engine and Indexers",
    title: "Custom indexes must be created when necessary",
    reference: "When should custom indexes be created according to the speech?",
    explanation:
      "Section 2 says custom indexes must be created when necessary, much like in a relational database.",
  },
  {
    id: "oak-010",
    category: "Oak Query Engine and Indexers",
    title: "Many nodes may be traversed, and the query still works but is likely slow",
    reference: "What happens if a query has no index?",
    explanation:
      "Section 2 says a query without an index still works, but many nodes may be traversed so it is likely slow.",
  },
  {
    id: "oak-011",
    category: "Oak Query Engine and Indexers",
    title: "It logs a WARN saying it traversed a number of nodes and suggests creating an index or changing the query",
    reference: "What WARN message behavior does Oak show when it runs a query without an index?",
    explanation:
      "Section 2 says Oak prints a WARN about traversed nodes and suggests creating an index or changing the query.",
  },
  {
    id: "oak-012",
    category: "Oak Query Engine and Indexers",
    title: "It supports XPath, SQL-2, the deprecated SQL, and JQOM, and XPath is recommended",
    reference: "Which query languages does the speech say the query engine supports, and which one is recommended?",
    explanation:
      "Section 2 says the query engine supports XPath, SQL-2, deprecated SQL, and JQOM, and that XPath is recommended.",
  },
  {
    id: "oak-013",
    category: "Oak Query Engine and Indexers",
    title: "They are transformed into SQL-2",
    reference: "Into what native language are queries ultimately transformed in Oak?",
    explanation:
      "Section 2 says a query is parsed into an abstract syntax tree and then transformed into SQL-2, the native language of Oak.",
  },
  {
    id: "oak-014",
    category: "Oak Query Engine and Indexers",
    title: "Each indexer estimates cost, Oak picks the lowest-cost one, retrieves results, and then filters them for read access and full-query match",
    reference: "How does Oak choose among several indexers that can answer a query?",
    explanation:
      "Section 2 says each applicable indexer estimates cost, Oak picks the lowest estimated cost, and then filters results for read access and complete query matching.",
  },
]

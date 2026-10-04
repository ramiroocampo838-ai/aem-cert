import type { Concept } from "../types"

export const propertyAndLuceneIndexesConcepts: Concept[] = [
  {
    id: "oak-015",
    category: "Property and Lucene Indexes",
    title: "Indexes are configured as nodes under oak:index, and the node type must be oak:QueryIndexDefinition",
    reference: "Where are indexes configured, and what node type must an index definition use?",
    explanation:
      "Section 3 says indexes are configured as nodes under oak:index, using node type oak:QueryIndexDefinition.",
  },
  {
    id: "oak-016",
    category: "Property and Lucene Indexes",
    title: "It suits property constraints that are not full-text, and it uses type set to property with propertyNames listing the properties",
    reference: "What kind of queries does the Property Index suit, and which two properties define it?",
    explanation:
      "Section 3 says the Property Index suits property constraints that are not full-text and uses type property with propertyNames.",
  },
  {
    id: "oak-017",
    category: "Property and Lucene Indexes",
    title: "The unique flag adds a uniqueness constraint, declaringNodeTypes restricts the index to a node type, and reindex=true triggers a full reindex",
    reference: "What do the unique flag, declaringNodeTypes, and reindex=true do on a Property Index?",
    explanation:
      "Section 3 defines these directly: unique adds a uniqueness constraint, declaringNodeTypes restricts the node type, and reindex=true triggers a full reindex.",
  },
  {
    id: "oak-018",
    category: "Property and Lucene Indexes",
    title: "The Ordered index is deprecated and should be replaced with a Lucene Property Index",
    reference: "What does the speech say about the Ordered index?",
    explanation:
      "Section 3 says the Ordered index is deprecated and should be replaced with a Lucene Property Index.",
  },
  {
    id: "oak-019",
    category: "Property and Lucene Indexes",
    title: "It uses type lucene and async set to async, so some full-text results can be unavailable briefly after a change",
    reference: "Which two main settings does the Lucene full-text index use, and what delay tradeoff does the speech mention?",
    explanation:
      "Section 3 says the Lucene full-text index uses type lucene and async set to async, so some results can be briefly unavailable after changes.",
  },
  {
    id: "oak-020",
    category: "Property and Lucene Indexes",
    title: "If a full-text index is configured, all queries with a full-text condition use it; if none is configured, full-text conditions do not work as expected",
    reference: "What does the speech say happens when a full-text index is configured, and what if none is configured?",
    explanation:
      "Section 3 says a configured full-text index is used for all queries with a full-text condition, and without one those conditions do not work as expected.",
  },
  {
    id: "oak-021",
    category: "Property and Lucene Indexes",
    title: "Set fulltextEnabled to false and list the properties in includePropertyNames; a Lucene Property Index is always async, so results may lag behind the latest state",
    reference: "How do you configure Lucene to index non-full-text property constraints, and what consistency note comes with it?",
    explanation:
      "Section 3 says Lucene can index non-full-text property constraints with fulltextEnabled=false and includePropertyNames, but it remains async.",
  },
]

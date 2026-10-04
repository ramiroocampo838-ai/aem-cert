import type { Concept } from "../types"

export const contentFragmentsDeliveryAndBestPracticesConcepts: Concept[] = [
  {
    id: "wf-080",
    category: "Content Fragments Delivery and Best Practices",
    title: "The Content Fragment Component references the fragment on the page",
    reference: "For page authoring, which component references a Content Fragment on a page?",
    explanation:
      "The speech says that for page authoring, a fragment is referenced on a page with the Content Fragment Component, which is a core component.",
  },
  {
    id: "wf-081",
    category: "Content Fragments Delivery and Best Practices",
    title: "Content Fragments are delivered as JSON for headless use",
    reference: "For headless delivery, in what format are Content Fragments delivered?",
    explanation:
      "The speech says that for headless delivery, fragments are delivered as JSON.",
  },
  {
    id: "wf-082",
    category: "Content Fragments Delivery and Best Practices",
    title: "GraphQL is the query mechanism for headless delivery of Content Fragments",
    reference: "Which query mechanism is used for headless delivery of Content Fragments?",
    explanation:
      "The speech says GraphQL is the query mechanism for headless delivery of fragments.",
  },
  {
    id: "wf-083",
    category: "Content Fragments Delivery and Best Practices",
    title: "The Content Fragments console is optimized for headless use and exists only in AEM as a Cloud Service",
    reference: "What is true about the Content Fragments console mentioned in the speech?",
    explanation:
      "The speech says the Content Fragments console is optimized for headless use and is available only in AEM as a Cloud Service.",
  },
  {
    id: "wf-084",
    category: "Content Fragments Delivery and Best Practices",
    title: "Too many models slow GraphQL queries and complicate governance",
    reference: "Why does Adobe recommend keeping the number of Content Fragment models to a small set, usually at most low tens?",
    explanation:
      "The speech says to create as many models as needed but no more, and that too many slows GraphQL queries and complicates governance.",
  },
  {
    id: "wf-085",
    category: "Content Fragments Delivery and Best Practices",
    title: "Keep Content Fragment Reference nesting to no more than ten levels",
    reference: "What is the recommended limit for deep nesting of Content Fragment References?",
    explanation:
      "The speech says to avoid deep nesting of Content Fragment References and to keep nesting to no more than ten levels.",
  },
  {
    id: "wf-086",
    category: "Content Fragments Delivery and Best Practices",
    title: "More than ten variations add processing time on author and on delivery",
    reference: "Why should a Content Fragment avoid having more than ten variations?",
    explanation:
      "The speech says not to exceed ten variations per fragment because variations add processing time on author and on delivery.",
  },
]

import type { Concept } from "../types"

export const slingModelsFundamentalsConcepts: Concept[] = [
  {
    id: "comp-051",
    category: "Sling Models Fundamentals",
    title: "Annotation-driven Java POJOs mapped automatically from Sling objects",
    reference: "What are Sling Models in AEM?",
    explanation:
      "The speech defines Sling Models as annotation-driven Java POJOs mapped automatically from Sling objects such as resources and requests, and notes that they can also receive OSGi services.",
  },
  {
    id: "comp-052",
    category: "Sling Models Fundamentals",
    title: "Use Sling Models to implement component logic",
    reference: "According to the speech, what is the recommended way to implement component logic in AEM?",
    explanation:
      "The speech explicitly says Sling Models are the recommended way to implement component logic.",
  },
  {
    id: "comp-053",
    category: "Sling Models Fundamentals",
    title: "Resource",
    reference: "Given a scenario where a model only needs resource data and no request-specific bindings, which adaptable does Adobe advise using where possible?",
    explanation:
      "The speech says the common adaptables are Resource and SlingHttpServletRequest, and Adobe advises using Resource where possible because the model can then be used inside and outside a request context.",
  },
  {
    id: "comp-054",
    category: "Sling Models Fundamentals",
    title: "When the model uses injectors that need the request, such as request attributes or script bindings",
    reference: "When must the adaptable be SlingHttpServletRequest instead of Resource?",
    explanation:
      "The speech states that if you use injectors needing the request, such as request attributes or script bindings, the adaptable must be SlingHttpServletRequest.",
  },
  {
    id: "comp-055",
    category: "Sling Models Fundamentals",
    title: "Through the Sling-Model-Packages or Sling-Model-Classes manifest headers",
    reference: "How are Sling Models registered so AEM can discover them?",
    explanation:
      "The speech says models are registered through the Sling-Model-Packages header or the Sling-Model-Classes header, and that the Sling Models bnd plugin generates those headers at build time.",
  },
  {
    id: "comp-056",
    category: "Sling Models Fundamentals",
    title: "adaptTo returns null on failure, while ModelFactory.createModel throws an explanatory exception",
    reference: "What is the difference between using adaptTo and using the ModelFactory service to obtain a model?",
    explanation:
      "The speech explains that client code commonly uses adaptTo, which returns null if adaptation cannot be made, while the ModelFactory OSGi service offers createModel, which throws an exception explaining the failure.",
  },
  {
    id: "comp-057",
    category: "Sling Models Fundamentals",
    title: "The model cannot be instantiated and adaptTo returns null",
    reference: "Given a model with required injection by default, what happens if one required injection fails and the field was not marked optional?",
    explanation:
      "The speech says the default injection strategy is required, so if an injection fails the model cannot be instantiated and adaptTo returns null. Marking a field optional allows creation with a null or default value.",
  },
]

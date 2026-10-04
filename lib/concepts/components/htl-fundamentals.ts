import type { Concept } from "../types"

export const htlFundamentalsConcepts: Concept[] = [
  {
    id: "comp-029",
    category: "HTL Fundamentals",
    title: "The server-side template language for AEM that replaces JSP",
    reference: "What is HTL in AEM?",
    explanation:
      "The HTL fundamentals section says HTL, the HTML Template Language, is the server-side template language for AEM and that it replaces JSP.",
  },
  {
    id: "comp-030",
    category: "HTL Fundamentals",
    title: "It was designed to be secure and simple, with automatic context-aware XSS protection",
    reference: "How does the speech describe the design goal of HTL regarding security?",
    explanation:
      "The speech says HTL was designed to be secure and simple and that it automatically applies context-aware XSS protection.",
  },
  {
    id: "comp-031",
    category: "HTL Fundamentals",
    title: "A dollar sign and braces, like ${properties.jcr:title}",
    reference: "What is the expression syntax used in HTL?",
    explanation:
      "The speech states that HTL expressions use a dollar sign and braces, like ${properties.jcr:title}.",
  },
  {
    id: "comp-032",
    category: "HTL Fundamentals",
    title: "They follow an at sign, as in ${text @ context='html'}",
    reference: "How are options added to an HTL expression?",
    explanation:
      "The speech says HTL options follow an at sign, and the example given is ${text @ context='html'}.",
  },
  {
    id: "comp-033",
    category: "HTL Fundamentals",
    title: "It can provide defaults by falling back through values",
    reference: "What does the or operator do in an expression such as ${properties.pageTitle || properties.jcr:title || resource.name}?",
    explanation:
      "The HTL fundamentals section says the or operator can provide defaults, and gives a fallback example using pageTitle, jcr:title, and resource.name.",
  },
  {
    id: "comp-034",
    category: "HTL Fundamentals",
    title: "They are strict, like triple equals in JavaScript, with no type conversion",
    reference: "How do equality comparisons behave in HTL?",
    explanation:
      "The speech says comparison operators are strict and that the equality operators work like triple equals in JavaScript, with no type conversion.",
  },
  {
    id: "comp-035",
    category: "HTL Fundamentals",
    title: "properties, pageProperties, inheritedPageProperties, currentPage, resource, request, and wcmmode",
    reference: "Which global objects are named as available in HTL?",
    explanation:
      "The HTL fundamentals section explicitly names properties, pageProperties, inheritedPageProperties, currentPage, resource, request, and wcmmode as global objects available in HTL.",
  },
  {
    id: "comp-036",
    category: "HTL Fundamentals",
    title: "Set a context explicitly, otherwise nothing is output",
    reference: "What must you do for script and style contexts in HTL?",
    explanation:
      "The speech says that for script and style contexts you must set a context explicitly; otherwise nothing is output.",
  },
]

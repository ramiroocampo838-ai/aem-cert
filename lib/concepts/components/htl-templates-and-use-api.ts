import type { Concept } from "../types"

export const htlTemplatesAndUseApiConcepts: Concept[] = [
  {
    id: "comp-044",
    category: "HTL Templates & Use-API",
    title: "data-sly-template defines a reusable template with parameters, and data-sly-call invokes it",
    reference: "What do data-sly-template and data-sly-call do?",
    explanation:
      "The speech says data-sly-template defines a reusable template with parameters in a file, and data-sly-call invokes it.",
  },
  {
    id: "comp-045",
    category: "HTL Templates & Use-API",
    title: "Load the file with data-sly-use and then call the template with data-sly-call",
    reference: "How do you use templates from another file in HTL?",
    explanation:
      "The speech says that to use templates from another file, you first load the file with data-sly-use.templates=\"template.html\" and then call it with data-sly-call.",
  },
  {
    id: "comp-046",
    category: "HTL Templates & Use-API",
    title: "data-sly-include includes the output of another script as markup, while data-sly-resource includes a resource rendered through its own component",
    reference: "What is the difference between data-sly-include and data-sly-resource?",
    explanation:
      "The speech says data-sly-include includes the output of another script as markup and does not change the processing context, while data-sly-resource includes a resource rendered through its own component.",
  },
  {
    id: "comp-047",
    category: "HTL Templates & Use-API",
    title: "resourceType, selectors, wcmmode, prependPath, and appendPath",
    reference: "Which options does the speech say you can pass to data-sly-resource?",
    explanation:
      "The speech says data-sly-resource can take options such as resourceType to force a component, selectors, wcmmode, prependPath, and appendPath.",
  },
  {
    id: "comp-048",
    category: "HTL Templates & Use-API",
    title: "A Java class, which can be a Sling Model, or a JavaScript Use-API file",
    reference: "What can data-sly-use load through the Use-API?",
    explanation:
      "The speech says the Use-API is how HTL reaches logic and that data-sly-use can load a Java class, which may be a Sling Model, or a JavaScript Use-API file.",
  },
  {
    id: "comp-049",
    category: "HTL Templates & Use-API",
    title: "Use Sling Models",
    reference: "What is the recommended modern approach for HTL logic according to the speech?",
    explanation:
      "The speech says that while data-sly-use can load Java or JavaScript helpers, the recommended approach today is Sling Models.",
  },
  {
    id: "comp-050",
    category: "HTL Templates & Use-API",
    title: "The request, and otherwise the resource",
    reference: "When a Sling Model is loaded through the Sling Models Use Provider, what adaptable does it receive first if supported?",
    explanation:
      "The speech says that when loaded through the Sling Models Use Provider, the model gets the request as adaptable if it supports it, and the resource otherwise.",
  },
]

import type { Concept } from "../types"

export const resourceTypeResolutionAndVersioningConcepts: Concept[] = [
  {
    id: "comp-022",
    category: "Resource Type Resolution & Versioning",
    title: "It checks the resource's sling:resourceType first, then walks up sling:resourceSuperType until it finds a script",
    reference: "How does Sling resolve the script for a request?",
    explanation:
      "The speech says Sling resolves a request by looking at the resource's sling:resourceType, and if the script is not found there, it walks up the sling:resourceSuperType chain until it finds one.",
  },
  {
    id: "comp-023",
    category: "Resource Type Resolution & Versioning",
    title: "HTL files, dialogs, and clientlibs",
    reference: "Through resourceSuperType inheritance, what can a proxy inherit from its parent according to the speech?",
    explanation:
      "The resource type resolution section explicitly says this inheritance is how a proxy inherits HTL files, dialogs, and clientlibs from its parent.",
  },
  {
    id: "comp-024",
    category: "Resource Type Resolution & Versioning",
    title: "Sling searches /apps first and then /libs",
    reference: "What is the Sling search path order described in the speech?",
    explanation:
      "The speech says search paths matter and that Sling searches /apps first and then /libs.",
  },
  {
    id: "comp-025",
    category: "Resource Type Resolution & Versioning",
    title: "Because it is overlaid on every update in AEM as a Cloud Service and is immutable at runtime",
    reference: "Why must /libs never be modified?",
    explanation:
      "The speech says /libs must never be modified because it is overlaid on every update in AEM as a Cloud Service and is immutable at runtime.",
  },
  {
    id: "comp-026",
    category: "Resource Type Resolution & Versioning",
    title: "A major version under semantic versioning for backward-incompatible changes",
    reference: "What does the version number in a component path such as core/wcm/components/image/v3/image represent?",
    explanation:
      "The speech says component versioning adds a number to the resource type path and that the version represents a major version under semantic versioning, increasing only for non-backward-compatible changes.",
  },
  {
    id: "comp-027",
    category: "Resource Type Resolution & Versioning",
    title: "Changes to Sling Models, HTL scripts, HTML markup and CSS selectors, JSON representation, and dialogs",
    reference: "Which kind of changes are named as backward-incompatible examples for component versioning?",
    explanation:
      "The speech explicitly lists incompatible changes as including Sling Models, HTL scripts, HTML markup and CSS selectors, JSON representation, and dialogs.",
  },
  {
    id: "comp-028",
    category: "Resource Type Resolution & Versioning",
    title: "Content must never point to a versioned component",
    reference: "Given a scenario where content points directly to a versioned component path, what rule from the speech is being violated?",
    explanation:
      "The speech states the rule clearly: content must never point to a versioned component. Instead, content points to the proxy, and the proxy points to the versioned parent.",
  },
]

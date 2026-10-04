import type { Concept } from "../types"

export const proxyComponentPatternConcepts: Concept[] = [
  {
    id: "comp-015",
    category: "Proxy Component Pattern",
    title: "A site-specific component, not a component shared by multiple sites",
    reference: "According to best practice, what should a content resource's sling:resourceType point to?",
    explanation:
      "The proxy pattern section says best practice is for sling:resourceType on content to point to a site-specific component, not one shared directly by multiple sites.",
  },
  {
    id: "comp-016",
    category: "Proxy Component Pattern",
    title: "It lets one site customize behavior without affecting other sites",
    reference: "Why is it better for content to point to a site-specific component instead of a shared one?",
    explanation:
      "The speech explains that site-specific components give flexibility: if one site needs different behavior, the customization happens on its own component without affecting other sites.",
  },
  {
    id: "comp-017",
    category: "Proxy Component Pattern",
    title: "It points to the shared parent with sling:resourceSuperType",
    reference: "How does a project component avoid duplicating shared component code?",
    explanation:
      "The speech says the project component refers to the shared parent with sling:resourceSuperType so code does not have to be duplicated.",
  },
  {
    id: "comp-018",
    category: "Proxy Component Pattern",
    title: "A project component that mostly refers to a parent through sling:resourceSuperType",
    reference: "What is a proxy component?",
    explanation:
      "The proxy component pattern section says a project component that mostly just refers to a parent through sling:resourceSuperType is called a proxy component.",
  },
  {
    id: "comp-019",
    category: "Proxy Component Pattern",
    title: "Yes. It can be only a cq:Component node with a resourceSuperType when it fully inherits everything",
    reference: "Can a proxy component be completely empty?",
    explanation:
      "The speech explicitly says a proxy can be entirely empty, only a cq:Component node with a resourceSuperType, if it fully inherits the functionality.",
  },
  {
    id: "comp-020",
    category: "Proxy Component Pattern",
    title: "core/wcm/components/title/v3/title",
    reference: "In the example from the speech, where does the Core Component parent for Title live?",
    explanation:
      "The proxy example in the speech uses the Core Component parent path core/wcm/components/title/v3/title.",
  },
  {
    id: "comp-021",
    category: "Proxy Component Pattern",
    title: "Because it makes them unsupported and breaks upgrades",
    reference: "Why should you never modify Core Components code directly?",
    explanation:
      "The speech says never modify Core Components code directly because doing so makes them unsupported and breaks upgrades.",
  },
]

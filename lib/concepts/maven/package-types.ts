import type { Concept } from "../types"

export const packageTypesConcepts: Concept[] = [
  {
    id: "mvn-022",
    category: "Package Types",
    title: "In the packageType configuration of the filevault-package-maven-plugin",
    reference: "Where is the package type configured for an AEM package?",
    explanation:
      "Section 4 says every package must declare a package type, and that the type is set with the packageType configuration of the filevault-package-maven-plugin.",
  },
  {
    id: "mvn-023",
    category: "Package Types",
    title: "application",
    reference: "What packageType do code, immutable packages use?",
    explanation:
      "The speech says code, immutable packages set packageType to application, with ui.apps and ui.config given as examples.",
  },
  {
    id: "mvn-024",
    category: "Package Types",
    title: "content",
    reference: "What packageType should ui.content use?",
    explanation:
      "Section 4 states that content, mutable packages set packageType to content, and ui.content is the example given.",
  },
  {
    id: "mvn-025",
    category: "Package Types",
    title: "container",
    reference: "What packageType do container packages use?",
    explanation:
      "The lesson says container packages set packageType to container, and that the all package is a container.",
  },
  {
    id: "mvn-026",
    category: "Package Types",
    title: "The all package is a container package",
    reference: "Which statement about the all package is correct?",
    explanation:
      "Section 4 directly states that the all package is a container.",
  },
  {
    id: "mvn-027",
    category: "Package Types",
    title: "Only OSGi bundles, configurations, and sub packages",
    reference: "Given a scenario with a container package, what may it hold according to the speech?",
    explanation:
      "The speech says a container may hold only OSGi bundles, configurations, and sub packages, and must not contain regular nodes.",
  },
  {
    id: "mvn-028",
    category: "Package Types",
    title: "merge",
    reference: "What is the usual value mentioned for accessControlHandling when packages are installed?",
    explanation:
      "Section 4 says another setting is accessControlHandling, usually set to merge, which keeps existing ACLs when the package is installed.",
  },
]

import type { Concept } from "../types"

export const dependenciesAndRepositoryStructureConcepts: Concept[] = [
  {
    id: "mvn-043",
    category: "Dependencies & Repository Structure",
    title: "ui.content depends on ui.apps",
    reference: "What is the general dependency rule between ui.content and ui.apps?",
    explanation:
      "Section 7 gives the general rule that packages with mutable content, ui.content, depend on the immutable code, ui.apps, that supports them.",
  },
  {
    id: "mvn-044",
    category: "Dependencies & Repository Structure",
    title: "ui.apps has no dependencies",
    reference: "In the simple case described by the speech, which package has no dependencies?",
    explanation:
      "The simple example in Section 7 says all has no dependencies, ui.apps has no dependencies, and ui.content depends on ui.apps.",
  },
  {
    id: "mvn-045",
    category: "Dependencies & Repository Structure",
    title: "No AEM package should declare a dependency on it",
    reference: "What is the exception involving a code package that contains only OSGi bundles?",
    explanation:
      "Section 7 says that if a code package contains only OSGi bundles, no AEM package should declare a dependency on it.",
  },
  {
    id: "mvn-046",
    category: "Dependencies & Repository Structure",
    title: "Because it is not registered with Package Manager, so the dependency is unsatisfied and installation fails",
    reference: "Why is depending on a package that contains only OSGi bundles a problem?",
    explanation:
      "The lesson explains that such a package is not registered with Package Manager, so any AEM package that depends on it has an unsatisfied dependency and fails to install.",
  },
  {
    id: "mvn-047",
    category: "Dependencies & Repository Structure",
    title: "site-a.ui.apps depends on common.ui.apps, and site-a.ui.content depends on site-a.ui.apps",
    reference: "In a complex deployment with several sites, what dependency chain does the speech give for site-specific packages?",
    explanation:
      "Section 7 gives a multi-site example where site-a.ui.apps depends on common.ui.apps, and site-a.ui.content depends on site-a.ui.apps.",
  },
  {
    id: "mvn-048",
    category: "Dependencies & Repository Structure",
    title: "They need a repository structure package",
    reference: "What additional requirement applies to code packages with packageType application?",
    explanation:
      "Section 7 says code packages, those with packageType application, also need a repository structure package.",
  },
  {
    id: "mvn-049",
    category: "Dependencies & Repository Structure",
    title: "repositoryStructurePackage",
    reference: "Which FileVault plugin element configures the repository structure package?",
    explanation:
      "The speech says the repository structure package is configured with the repositoryStructurePackage element in the FileVault package Maven plugin.",
  },
  {
    id: "mvn-050",
    category: "Dependencies & Repository Structure",
    title: "It enforces structural dependency correctness so one code package does not install over another's folders, and the archetype generates ui.apps.structure",
    reference: "What does the repository structure package enforce, and which module does the archetype generate for it?",
    explanation:
      "Section 7 says the repository structure package enforces correctness of structural dependencies so one code package does not install over another's folders, and that the archetype generates a ui.apps.structure module for this.",
  },
]

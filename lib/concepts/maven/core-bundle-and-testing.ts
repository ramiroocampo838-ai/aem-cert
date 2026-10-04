import type { Concept } from "../types"

export const coreBundleAndTestingConcepts: Concept[] = [
  {
    id: "mvn-072",
    category: "Core Bundle & Testing",
    title: "An OSGi bundle",
    reference: "What does the core module build?",
    explanation:
      "The speech says the core module builds an OSGi bundle.",
  },
  {
    id: "mvn-073",
    category: "Core Bundle & Testing",
    title: "The bnd-maven-plugin",
    reference: "What generates the bundle manifest, including the Sling-Model-Packages header?",
    explanation:
      "The speech says the bnd-maven-plugin generates the bundle manifest, including the Sling-Model-Packages header.",
  },
  {
    id: "mvn-074",
    category: "Core Bundle & Testing",
    title: "You do not maintain it manually",
    reference: "According to the speech, what is the advantage of the generated Sling-Model-Packages header?",
    explanation:
      "The speech specifically notes that the bnd-maven-plugin generates the Sling-Model-Packages header so you do not maintain it manually.",
  },
  {
    id: "mvn-075",
    category: "Core Bundle & Testing",
    title: "The parameters flag",
    reference: "Given a scenario with constructor injection, which Maven compiler option does the speech call out when needed?",
    explanation:
      "The speech says the Maven compiler options include the parameters flag when needed for constructor injection.",
  },
  {
    id: "mvn-076",
    category: "Core Bundle & Testing",
    title: "What Cloud Manager supports for the target AEM release",
    reference: "What must the Java version of the build match?",
    explanation:
      "The speech says the Java version of the build must match what Cloud Manager supports for the target AEM release.",
  },
  {
    id: "mvn-077",
    category: "Core Bundle & Testing",
    title: "In the all package",
    reference: "Where is the bundle embedded?",
    explanation:
      "The speech states that the bundle is embedded in the all package.",
  },
  {
    id: "mvn-078",
    category: "Core Bundle & Testing",
    title: "Unit tests in core, integration tests in it.tests, and UI tests in ui.tests",
    reference: "What are the three testing levels described in the speech?",
    explanation:
      "The speech lists three levels: unit tests in core, integration tests in it.tests running on the AEM server, and UI tests in ui.tests using Selenium in the browser.",
  },
]

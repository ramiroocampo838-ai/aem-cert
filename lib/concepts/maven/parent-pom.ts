import type { Concept } from "../types"

export const parentPomConcepts: Concept[] = [
  {
    id: "mvn-065",
    category: "Parent POM",
    title: "The parent POM",
    reference: "What is the pom.xml at the root of the project?",
    explanation:
      "The speech says the pom.xml at the root of the project is the parent POM.",
  },
  {
    id: "mvn-066",
    category: "Parent POM",
    title: "dependencyManagement",
    reference: "Which section of the parent POM manages dependency versions?",
    explanation:
      "The speech says the parent POM manages dependency versions in dependencyManagement.",
  },
  {
    id: "mvn-067",
    category: "Parent POM",
    title: "They must not include version information",
    reference: "What should submodules do about versions for managed dependencies?",
    explanation:
      "The speech explicitly says submodules must not include version information for managed dependencies because versions are managed in the parent.",
  },
  {
    id: "mvn-068",
    category: "Parent POM",
    title: "localhost, 4502 for author, 4503 for publish, and the admin user",
    reference: "Which defaults are used for local deployment in the global properties?",
    explanation:
      "The speech lists the defaults as localhost, 4502 for author, 4503 for publish, and the admin user.",
  },
  {
    id: "mvn-069",
    category: "Parent POM",
    title: "Override the properties from the command line",
    reference: "Given a scenario where you need to deploy to a different host without editing the POM files, what does the speech recommend?",
    explanation:
      "The speech gives the example mvn -PautoInstallPackage clean install -Daem.host=production.hostname and says the POM files do not have to change.",
  },
  {
    id: "mvn-070",
    category: "Parent POM",
    title: "aem-sdk-api",
    reference: "For AEM as a Cloud Service, which dependency is the key AEM Java API entry?",
    explanation:
      "The speech says that for AEM as a Cloud Service, the AEM Java API dependency is aem-sdk-api, while for AEM 6.5 it is the uber-jar.",
  },
  {
    id: "mvn-071",
    category: "Parent POM",
    title: "Remove it",
    reference: "What should happen to core.wcm.components.examples for production deployments?",
    explanation:
      "The speech describes core.wcm.components.examples as a set of sample pages and says to remove it for production deployments.",
  },
]

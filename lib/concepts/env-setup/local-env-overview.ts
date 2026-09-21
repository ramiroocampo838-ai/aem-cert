import type { Concept } from "../types"

export const localEnvOverviewConcepts: Concept[] = [
  {
    id: "env-001",
    category: "Local Environment Overview",
    title: "Three logical parts",
    reference: "How many logical parts make up a local AEM development environment?",
    explanation:
      "A local AEM environment has three logical parts: the AEM Project (your custom code and content), the Local AEM Runtime (local Author and Publish services), and the Local Dispatcher Runtime (local Apache HTTP Server with Dispatcher module).",
  },
  {
    id: "env-002",
    category: "Local Environment Overview",
    title: "A local database service is NOT one of the three logical parts",
    reference: "Which of the following is NOT one of the three logical parts of a local AEM environment?",
    explanation:
      "The three logical parts are: the AEM Project (custom code/config/content), the Local AEM Runtime (local Author and Publish), and the Local Dispatcher Runtime. AEM does not require a separate relational database — it uses the JCR (Oak repository).",
  },
  {
    id: "env-003",
    category: "Local Environment Overview",
    title: "To develop, build, and test AEM code on your own machine before sending it to the cloud",
    reference: "What is the primary goal of setting up a local AEM development environment?",
    explanation:
      "The goal of local AEM setup is to develop, build, and test AEM code on your own machine before sending anything to the cloud. It allows you to validate everything locally before it goes through Cloud Manager.",
  },
  {
    id: "env-004",
    category: "Local Environment Overview",
    title: "A local version of the Author and Publish services",
    reference: "What does the 'Local AEM Runtime' component represent in a local development environment?",
    explanation:
      "The Local AEM Runtime is a local version of the Author and Publish services, typically provided by the QuickStart Jar from the AEMaaCS SDK.",
  },
  {
    id: "env-005",
    category: "Local Environment Overview",
    title: "Your custom code, configuration, and content",
    reference: "What does the 'AEM Project' component represent in the three-part local environment?",
    explanation:
      "The AEM Project is your custom code, configuration, and content — the Maven project you develop, which contains OSGi bundles, HTL components, content packages, and OSGi configurations.",
  },
  {
    id: "env-006",
    category: "Local Environment Overview",
    title: "A miniature version of what runs in the cloud, all on your laptop",
    reference: "How is a local AEM environment best described in relation to the cloud environment?",
    explanation:
      "A local AEM environment is best described as a miniature version of what runs in the cloud, all on your laptop. It includes local Author, Publish, and Dispatcher — the same three tiers present in the cloud environment.",
  },
  {
    id: "env-007",
    category: "Local Environment Overview",
    title: "A local version of Apache HTTP Server with the Dispatcher module",
    reference: "What is the Local Dispatcher Runtime in a local AEM development environment?",
    explanation:
      "The Local Dispatcher Runtime is a local version of Apache HTTP Server with the Dispatcher module. It runs inside a Docker container using the Dispatcher Tools from the AEMaaCS SDK.",
  },
  {
    id: "env-008",
    category: "Local Environment Overview",
    title: "To catch issues early before they go through the CI/CD pipeline",
    reference: "Why is it important to validate AEM code locally before sending it through Cloud Manager?",
    explanation:
      "Validating locally first catches bugs, build errors, and configuration issues before they consume a Cloud Manager pipeline run. It is faster and cheaper to fix problems locally than to wait for a full pipeline cycle.",
  },
]

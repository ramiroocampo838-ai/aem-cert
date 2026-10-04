import type { Concept } from "../types"

export const cloudManagerTargetConcepts: Concept[] = [
  {
    id: "mvn-029",
    category: "Cloud Manager Target",
    title: "Every package produced by the Maven build",
    reference: "By default, what does Cloud Manager harvest from the Maven build?",
    explanation:
      "Section 5 says that by default, Cloud Manager harvests every package produced by the Maven build.",
  },
  {
    id: "mvn-030",
    category: "Cloud Manager Target",
    title: "Because they would be installed twice",
    reference: "Why must ui.apps or ui.content not be deployed individually by Cloud Manager when all already embeds them?",
    explanation:
      "The speech explains that the all package already embeds the other packages, so if ui.apps or ui.content were also deployed individually, they would be installed twice.",
  },
  {
    id: "mvn-031",
    category: "Cloud Manager Target",
    title: "cloudManagerTarget set to none",
    reference: "What property value should package-producing projects except all set in the filevault-package-maven-plugin?",
    explanation:
      "Section 5 says that every package-producing project except all adds properties with cloudManagerTarget set to none in the FileVault plugin configuration.",
  },
  {
    id: "mvn-032",
    category: "Cloud Manager Target",
    title: "all",
    reference: "Which package is the only one Cloud Manager should deploy?",
    explanation:
      "The rule in the speech is explicit: all is the only package that Cloud Manager deploys.",
  },
  {
    id: "mvn-033",
    category: "Cloud Manager Target",
    title: "A single AEM package",
    reference: "Given an application deployment in Cloud Manager, how many AEM packages should compose that deployment artifact?",
    explanation:
      "Section 5 says an application deployment must be composed of a single AEM package.",
  },
  {
    id: "mvn-034",
    category: "Cloud Manager Target",
    title: "Sub packages for code, configuration, and any baseline content the application needs",
    reference: "What should that single deployment package contain?",
    explanation:
      "The speech says the single deployment package contains sub packages for everything the application needs: code, configuration, and any baseline content.",
  },
  {
    id: "mvn-035",
    category: "Cloud Manager Target",
    title: "Every package except all should set cloudManagerTarget to none",
    reference: "A deployment installed ui.apps once through all and then again directly. Which rule from the speech was violated?",
    explanation:
      "The lesson's rule is to deploy only all, while every other package-producing project sets cloudManagerTarget to none to avoid duplicate installation.",
  },
]

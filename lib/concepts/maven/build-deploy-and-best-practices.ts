import type { Concept } from "../types"

export const buildDeployAndBestPracticesConcepts: Concept[] = [
  {
    id: "mvn-093",
    category: "Build, Deploy & Best Practices",
    title: "It builds all modules and produces the packages and the bundle",
    reference: "What does mvn clean install do in this project?",
    explanation:
      "The speech says mvn clean install builds all modules and produces the packages and the bundle.",
  },
  {
    id: "mvn-094",
    category: "Build, Deploy & Best Practices",
    title: "autoInstallSinglePackage",
    reference: "Which Maven profile installs the all package on the author instance from the project root?",
    explanation:
      "The speech says autoInstallSinglePackage, at the project root, installs the all package on the author instance.",
  },
  {
    id: "mvn-095",
    category: "Build, Deploy & Best Practices",
    title: "autoInstallSinglePackagePublish",
    reference: "Which profile installs the all package on the publish instance?",
    explanation:
      "The speech says autoInstallSinglePackagePublish installs the all package on the publish instance.",
  },
  {
    id: "mvn-096",
    category: "Build, Deploy & Best Practices",
    title: "autoInstallBundle in the core module",
    reference: "Given a scenario where you are actively developing Java code and want the fastest deployment option, which profile should you use?",
    explanation:
      "The speech says autoInstallBundle in the core module installs only the OSGi bundle and is the fast option while developing Java code.",
  },
  {
    id: "mvn-097",
    category: "Build, Deploy & Best Practices",
    title: "Only the all package",
    reference: "What does Cloud Manager deploy, according to the speech?",
    explanation:
      "The speech says Cloud Manager builds the project from Git with Maven and deploys only the all package.",
  },
  {
    id: "mvn-098",
    category: "Build, Deploy & Best Practices",
    title: "As code in ui.apps",
    reference: "According to the best practices list, where should Oak indexes be deployed?",
    explanation:
      "The best practices section explicitly says to deploy Oak indexes as code in ui.apps.",
  },
  {
    id: "mvn-099",
    category: "Build, Deploy & Best Practices",
    title: "none",
    reference: "What should cloudManagerTarget be set to on every package except all?",
    explanation:
      "The best practices list says to set cloudManagerTarget to none on every package except all.",
  },
  {
    id: "mvn-100",
    category: "Build, Deploy & Best Practices",
    title: "Put environment-specific values in run-mode folders and Cloud Manager variables, never in code",
    reference: "Given a scenario where a team wants to store environment-specific values directly in Java code, what does the speech say instead?",
    explanation:
      "The best practices section says to put environment-specific values in run-mode folders and Cloud Manager variables, never in code.",
  },
]

import type { ConceptCategory } from "../types"
import { localEnvOverviewConcepts } from "./local-env-overview"
import { developmentToolsConcepts } from "./development-tools"
import { adobeIoCliConcepts } from "./adobe-io-cli"
import { fileSystemConcepts } from "./file-system"
import { quickstartJarConcepts } from "./quickstart-jar"
import { quickstartNamingConcepts } from "./quickstart-naming"
import { contentDistributionConcepts } from "./content-distribution"
import { localDispatcherConcepts } from "./local-dispatcher"
import { mavenStructureConcepts } from "./maven-structure"
import { mavenModulesConcepts } from "./maven-modules"
import { repoInitConcepts } from "./repo-init"
import { troubleshootingConcepts } from "./troubleshooting"

export const envSetupCategories: ConceptCategory[] = [
  {
    name: "Local Environment Overview",
    concepts: localEnvOverviewConcepts,
    videoDescriptions: [
      "Introduces a local AEM development setup, its Author and Publish services, project code, and Dispatcher, and explains how local testing catches issues before CI/CD.",
    ],
  },
  {
    name: "Development Tools",
    concepts: developmentToolsConcepts,
    videoDescriptions: [
      "Reviews the core tools for local AEM development: Java JDK, Maven, Node.js, and Git, including commands to check each installation.",
    ],
  },
  {
    name: "Adobe I/O CLI",
    concepts: adobeIoCliConcepts,
    videoDescriptions: [
      "Introduces the Adobe I/O CLI and its Cloud Manager plugin, covering installation, authentication options, Developer Console setup, and deploying to an RDE.",
    ],
  },
  {
    name: "File System Organization",
    concepts: fileSystemConcepts,
    videoDescriptions: [
      "Shows a practical local folder layout for AEM SDK versions, Author and Dispatcher runtimes, and project source code, keeping runtime files separate from custom code.",
    ],
  },
  {
    name: "QuickStart Jar",
    concepts: quickstartJarConcepts,
    videoDescriptions: [
      "Explains what the AEM QuickStart JAR does, where to obtain it, how to launch it safely from the command line, and the default Author port.",
      "Covers the default Publish port, the crx-quickstart runtime directory and reset process, running separate instances, and what the AEMaaCS SDK contains.",
    ],
  },
  {
    name: "QuickStart Jar Naming Convention",
    concepts: quickstartNamingConcepts,
    videoDescriptions: [
      "Breaks down the QuickStart JAR filename pattern and uses examples to identify Author or Publish tier, Dev or Production mode, and port.",
      "Explains how the port and run mode affect startup, why the instance tier is locked in crx-quickstart, and what happens when a JAR is renamed.",
    ],
  },
  {
    name: "Content Distribution",
    concepts: contentDistributionConcepts,
    videoDescriptions: [
      "Compares local replication agents with the Adobe Pipeline used in AEM as a Cloud Service, including the local Author-to-Publish setup and its configuration.",
    ],
  },
  {
    name: "Local Dispatcher",
    concepts: localDispatcherConcepts,
    videoDescriptions: [
      "Shows how to run and validate the local Dispatcher in Docker, use hot reload, configure it to proxy to AEM Publish, and access it on its local port.",
    ],
  },
  {
    name: "Maven Project Structure",
    concepts: mavenStructureConcepts,
    videoDescriptions: [
      "Explains immutable and mutable AEM paths, distinguishing application code in /apps from content in /content and Adobe's platform code in /libs.",
      "Introduces the ui.apps and ui.content modules, where configuration content belongs, and how code and content map to immutable and mutable repository paths.",
    ],
  },
  {
    name: "Maven Modules & Package Types",
    concepts: mavenModulesConcepts,
    videoDescriptions: [
      "Introduces the core, application, content, and container modules in a Maven AEM project and explains the container package's role as the deployment artifact.",
      "Covers Cloud Manager package targets, ui.config, the five key project modules, and how application packages assemble the project's deployable modules.",
    ],
  },
  {
    name: "Repo Init & AEM Archetype",
    concepts: repoInitConcepts,
    videoDescriptions: [
      "Covers Repo Init scripts for declaring repository structure, users, groups, and ACLs, when they run, and how run modes scope their execution; also introduces the AEM Maven Archetype and its generated modules.",
    ],
  },
  {
    name: "Troubleshooting",
    concepts: troubleshootingConcepts,
    videoDescriptions: [
      "Walks through common local AEM checks in Package Manager, CRXDE Lite, the Bundle Console, error logs, and client-library diagnostics, including Java-version and startup issues.",
    ],
  },
]

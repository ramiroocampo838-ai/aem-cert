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
  { name: "Local Environment Overview", concepts: localEnvOverviewConcepts },
  { name: "Development Tools", concepts: developmentToolsConcepts },
  { name: "Adobe I/O CLI", concepts: adobeIoCliConcepts },
  { name: "File System Organization", concepts: fileSystemConcepts },
  { name: "QuickStart Jar", concepts: quickstartJarConcepts },
  { name: "QuickStart Jar Naming Convention", concepts: quickstartNamingConcepts },
  { name: "Content Distribution", concepts: contentDistributionConcepts },
  { name: "Local Dispatcher", concepts: localDispatcherConcepts },
  { name: "Maven Project Structure", concepts: mavenStructureConcepts },
  { name: "Maven Modules & Package Types", concepts: mavenModulesConcepts },
  { name: "Repo Init & AEM Archetype", concepts: repoInitConcepts },
  { name: "Troubleshooting", concepts: troubleshootingConcepts },
]

import type { ConceptCategory } from "../types"
import { introductionConcepts } from "./introduction"
import { mutableVsImmutableAreasConcepts } from "./mutable-vs-immutable-areas"
import { projectModulesConcepts } from "./project-modules"
import { packageTypesConcepts } from "./package-types"
import { cloudManagerTargetConcepts } from "./cloud-manager-target"
import { containerPackageAndEmbedsConcepts } from "./container-package-and-embeds"
import { dependenciesAndRepositoryStructureConcepts } from "./dependencies-and-repository-structure"
import { filtersAndPackageContentsConcepts } from "./filters-and-package-contents"
import { uiConfigRunModesAndRepoInitConcepts } from "./ui-config-run-modes-and-repo-init"
import { parentPomConcepts } from "./parent-pom"
import { coreBundleAndTestingConcepts } from "./core-bundle-and-testing"
import { generatingWithTheArchetypeConcepts } from "./generating-with-the-archetype"
import { archetypeOptionsConcepts } from "./archetype-options"
import { buildDeployAndBestPracticesConcepts } from "./build-deploy-and-best-practices"

export const mavenCategories: ConceptCategory[] = [
  {
    name: "Introduction",
    concepts: introductionConcepts,
    videoDescriptions: [
      "Introduces the Maven topics in the AEM Sites Developer exam, including project modules, package types, container packages, the AEM Project Archetype, and deployment scenarios.",
    ],
  },
  {
    name: "Mutable vs Immutable Areas",
    concepts: mutableVsImmutableAreasConcepts,
    videoDescriptions: [
      "Explains AEM's mutable and immutable repository paths, where code and content packages belong, why /libs is not modified, and how Cloud Manager handles index changes during deployment.",
    ],
  },
  {
    name: "Project Modules",
    concepts: projectModulesConcepts,
    videoDescriptions: [
      "Surveys the AEM Maven project modules, including core, ui.apps, ui.config, ui.content, ui.frontend, and the modules used for integration, UI, and unit testing.",
    ],
  },
  {
    name: "Package Types",
    concepts: packageTypesConcepts,
    videoDescriptions: [
      "Explains application, content, and container package types, where to configure them in the FileVault Maven plugin, and how package filters and merge behavior affect installation.",
    ],
  },
  {
    name: "Cloud Manager Target",
    concepts: cloudManagerTargetConcepts,
    videoDescriptions: [
      "Covers the cloudManagerTarget setting for Maven packages, why subpackages should not deploy independently, and how the all container package bundles code, configuration, and baseline content.",
    ],
  },
  {
    name: "Container Package & Embeds",
    concepts: containerPackageAndEmbedsConcepts,
    videoDescriptions: [
      "Explains the role and contents of the AEM container package, how embeddeds and subPackages are declared, where they are installed, and how to avoid deploying into application package folders.",
    ],
  },
  {
    name: "Dependencies & Repository Structure",
    concepts: dependenciesAndRepositoryStructureConcepts,
    videoDescriptions: [
      "Shows how Maven package dependencies should flow between AEM modules, why bundles are not Package Manager dependencies, and how repository-structure packages prevent folder ownership conflicts.",
    ],
  },
  {
    name: "Filters & Package Contents",
    concepts: filtersAndPackageContentsConcepts,
    videoDescriptions: [
      "Explains FileVault filter roots and import modes, Cloud Service package restrictions, and where configuration and legacy content such as /etc should be placed or migrated.",
    ],
  },
  {
    name: "ui.config, Run Modes & Repo Init",
    concepts: uiConfigRunModesAndRepoInitConcepts,
    videoDescriptions: [
      "Covers OSGi configuration files in ui.config, run-mode folder naming and formats, and Repo Init scripts for setting up repository content and users.",
    ],
  },
  {
    name: "Parent POM",
    concepts: parentPomConcepts,
    videoDescriptions: [
      "Reviews the parent POM's dependency management and shared build properties, local AEM connection defaults, command-line property overrides, and SDK API dependency cleanup.",
    ],
  },
  {
    name: "Core Bundle & Testing",
    concepts: coreBundleAndTestingConcepts,
    videoDescriptions: [
      "Explains how the core module builds an OSGi bundle with the bnd Maven plugin, how Maven parameters and target API versions affect it, and where integration, UI, and unit tests run.",
    ],
  },
  {
    name: "Generating with the Archetype",
    concepts: generatingWithTheArchetypeConcepts,
    videoDescriptions: [
      "Shows how the AEM Maven Archetype generates a project, which plugin and archetype versions to use, and how project identifiers, titles, component groups, and defaults are selected.",
    ],
  },
  {
    name: "Archetype Options",
    concepts: archetypeOptionsConcepts,
    videoDescriptions: [
      "Explains archetype options for targeting AEM Cloud, enabling Dispatcher configuration, choosing project and content structure, and configuring single- or multi-country sites.",
    ],
  },
  {
    name: "Build, Deploy & Best Practices",
    concepts: buildDeployAndBestPracticesConcepts,
    videoDescriptions: [
      "Covers building and installing AEM packages and bundles, Maven auto-install profiles, deploying only the all package, and keeping environment-specific values in run modes or Cloud Manager variables.",
    ],
  },
]

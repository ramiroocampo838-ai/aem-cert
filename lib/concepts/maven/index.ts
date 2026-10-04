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
  { name: "Introduction", concepts: introductionConcepts },
  { name: "Mutable vs Immutable Areas", concepts: mutableVsImmutableAreasConcepts },
  { name: "Project Modules", concepts: projectModulesConcepts },
  { name: "Package Types", concepts: packageTypesConcepts },
  { name: "Cloud Manager Target", concepts: cloudManagerTargetConcepts },
  { name: "Container Package & Embeds", concepts: containerPackageAndEmbedsConcepts },
  { name: "Dependencies & Repository Structure", concepts: dependenciesAndRepositoryStructureConcepts },
  { name: "Filters & Package Contents", concepts: filtersAndPackageContentsConcepts },
  { name: "ui.config, Run Modes & Repo Init", concepts: uiConfigRunModesAndRepoInitConcepts },
  { name: "Parent POM", concepts: parentPomConcepts },
  { name: "Core Bundle & Testing", concepts: coreBundleAndTestingConcepts },
  { name: "Generating with the Archetype", concepts: generatingWithTheArchetypeConcepts },
  { name: "Archetype Options", concepts: archetypeOptionsConcepts },
  { name: "Build, Deploy & Best Practices", concepts: buildDeployAndBestPracticesConcepts },
]

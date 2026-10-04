import type { Concept } from "../types"

export const containerPackageAndEmbedsConcepts: Concept[] = [
  {
    id: "mvn-036",
    category: "Container Package & Embeds",
    title: "Only deployable artifacts such as the core bundle JAR and the ui.apps, ui.config, and ui.content packages",
    reference: "What should the all package include as embeds?",
    explanation:
      "Section 6 says the all package is a container and includes only deployable artifacts as embeds: the core bundle JAR and the ui.apps, ui.config, and ui.content packages.",
  },
  {
    id: "mvn-037",
    category: "Container Package & Embeds",
    title: "Any content or code of its own",
    reference: "What must the all package not contain?",
    explanation:
      "The speech explicitly says the all package must not contain any content or code of its own.",
  },
  {
    id: "mvn-038",
    category: "Container Package & Embeds",
    title: "embeddeds",
    reference: "Which FileVault plugin configuration should be used to include packages in the container?",
    explanation:
      "Section 6 says packages are included with the embeddeds configuration of the FileVault package Maven plugin, and that the older subPackages configuration is not used.",
  },
  {
    id: "mvn-039",
    category: "Container Package & Embeds",
    title: "subPackages",
    reference: "Which older configuration does the speech say is not used for embedding packages?",
    explanation:
      "The lesson contrasts embeddeds with the older subPackages configuration and says subPackages is not used.",
  },
  {
    id: "mvn-040",
    category: "Container Package & Embeds",
    title: "/apps/<app-name>-packages/(content|application|container)/install(.author|.publish)?",
    reference: "Where are embedded packages placed inside the container package?",
    explanation:
      "Section 6 gives the exact target-path pattern for embedded packages: /apps/<app-name>-packages/(content|application|container)/install(.author|.publish)?.",
  },
  {
    id: "mvn-041",
    category: "Container Package & Embeds",
    title: "To prevent embedded packages from being deployed into the application's own target folders under /apps/<app-name>",
    reference: "Why does the second-level folder use the suffix -packages?",
    explanation:
      "The speech says the -packages suffix is a convention that prevents embedded packages from being deployed into the target folders of the application under /apps/<app-name>, which would cause destructive or cyclic installation.",
  },
  {
    id: "mvn-042",
    category: "Container Package & Embeds",
    title: "install.author and install.publish only",
    reference: "Which run-mode-specific embedded package folders are supported?",
    explanation:
      "Section 6 says only install.author and install.publish are supported; other run modes are not.",
  },
]

import type { Concept } from "../types"

export const quickstartNamingConcepts: Concept[] = [
  {
    id: "env-043",
    category: "QuickStart Jar Naming Convention",
    title: "aem-<tier>_<environment>-p<port>.jar",
    reference: "What is the format of the QuickStart Jar filename?",
    explanation:
      "The QuickStart Jar filename follows the format `aem-<tier>_<environment>-p<port>.jar`. The tier (author/publish) and optional environment segment control how AEM starts up. The port after `-p` determines the listening port.",
  },
  {
    id: "env-044",
    category: "QuickStart Jar Naming Convention",
    title: "Start as an Author instance in Dev mode on port 4502",
    reference: "What does the filename aem-author-p4502.jar tell AEM when it starts?",
    explanation:
      "`aem-author-p4502.jar` tells AEM to start as an Author instance in the default Dev mode, listening on port 4502. No environment segment means the default dev run mode is used.",
  },
  {
    id: "env-045",
    category: "QuickStart Jar Naming Convention",
    title: "Start as a Publish instance in Dev mode on port 4503",
    reference: "What does the filename aem-publish-p4503.jar tell AEM when it starts?",
    explanation:
      "`aem-publish-p4503.jar` tells AEM to start as a Publish instance in the default Dev mode, listening on port 4503.",
  },
  {
    id: "env-046",
    category: "QuickStart Jar Naming Convention",
    title: "Start as Author in Production mode on port 4502",
    reference: "What does the filename aem-author_prod-p4502.jar tell AEM when it starts?",
    explanation:
      "`aem-author_prod-p4502.jar` starts AEM as an Author instance in Production mode on port 4502. The `_prod` segment sets the environment run mode, which activates production-specific OSGi configurations.",
  },
  {
    id: "env-047",
    category: "QuickStart Jar Naming Convention",
    title: "The segment after aem- and before the port (author or publish)",
    reference: "Which part of the QuickStart Jar filename controls the AEM tier?",
    explanation:
      "In the filename `aem-<tier>_<environment>-p<port>.jar`, the tier is the segment immediately after `aem-`. It must be either `author` or `publish`, and it is locked on first startup.",
  },
  {
    id: "env-048",
    category: "QuickStart Jar Naming Convention",
    title: "The number after -p in the filename",
    reference: "Which part of the QuickStart Jar filename controls the listening port?",
    explanation:
      "The port is specified by the `-p<port>` segment in the filename. For example, `-p4502` means AEM will listen on port 4502. The port can be customized by changing this number in the filename.",
  },
  {
    id: "env-049",
    category: "QuickStart Jar Naming Convention",
    title: "It sets the environment run mode, activating environment-specific OSGi configurations",
    reference: "What is the purpose of the environment segment (e.g., _prod, _stage) in the QuickStart Jar filename?",
    explanation:
      "The environment segment (e.g., `_prod`, `_stage`, `_dev`) sets the AEM run mode for that environment. This allows environment-specific OSGi configurations to be loaded — for example, production configs that use different endpoints than dev configs.",
  },
  {
    id: "env-050",
    category: "QuickStart Jar Naming Convention",
    title: "The tier is locked and cannot be changed without deleting crx-quickstart",
    reference: "What happens to the tier when the QuickStart Jar is started for the first time?",
    explanation:
      "The tier (author or publish) is locked on first startup and stored in the `crx-quickstart` folder. If you rename the JAR file to change the tier and restart, AEM will use the stored tier — not the new filename. You must delete `crx-quickstart` to reset it.",
  },
  {
    id: "env-051",
    category: "QuickStart Jar Naming Convention",
    title: "author and publish",
    reference: "What are the two valid values for the tier segment of the QuickStart Jar filename?",
    explanation:
      "The tier segment in the QuickStart Jar filename accepts exactly two values: `author` (for the Author service on port 4502) and `publish` (for the Publish service on port 4503).",
  },
  {
    id: "env-052",
    category: "QuickStart Jar Naming Convention",
    title: "AEM still starts as Author because the tier is locked in crx-quickstart",
    reference: "If you rename the QuickStart Jar from aem-author-p4502.jar to aem-publish-p4503.jar after the first startup, what happens?",
    explanation:
      "After the first startup, the tier is locked in the `crx-quickstart` folder. Renaming the JAR does not change the tier — AEM reads the stored tier from `crx-quickstart`. To change the tier, you must delete `crx-quickstart` and start fresh.",
  },
]

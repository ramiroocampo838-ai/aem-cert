import type { Concept } from "../types"

export const mavenModulesConcepts: Concept[] = [
  {
    id: "env-079",
    category: "Maven Modules & Package Types",
    title: "core",
    reference: "Which Maven module contains the Java OSGi bundle (services, models, servlets)?",
    explanation:
      "The `core` module is the Java Maven module that compiles into an OSGi bundle (`.jar`). It contains Java code: OSGi services, Sling Models, servlets, workflow steps, and scheduled jobs.",
  },
  {
    id: "env-080",
    category: "Maven Modules & Package Types",
    title: "application",
    reference: "What is the package type of the ui.apps module?",
    explanation:
      "The `ui.apps` module has the package type `application`. This designates it as a code package that targets immutable repository paths (`/apps`). AEMaaCS uses the package type to enforce deployment rules.",
  },
  {
    id: "env-081",
    category: "Maven Modules & Package Types",
    title: "content",
    reference: "What is the package type of the ui.content module?",
    explanation:
      "The `ui.content` module has the package type `content`. This designates it as a content package that targets mutable repository paths (`/content`, `/conf`). It can be modified at runtime by authors.",
  },
  {
    id: "env-082",
    category: "Maven Modules & Package Types",
    title: "container",
    reference: "What is the package type of the 'all' module?",
    explanation:
      "The `all` module has the package type `container`. As a container package, it embeds all other modules (core bundle, ui.apps, ui.content, ui.config) and is the single artifact deployed by Cloud Manager.",
  },
  {
    id: "env-083",
    category: "Maven Modules & Package Types",
    title: "It is the container package and the single deployment artifact used by Cloud Manager",
    reference: "What is the role of the 'all' module in an AEM Maven project?",
    explanation:
      "The `all` module is the container package that embeds every other module (core OSGi bundle, ui.apps, ui.content, ui.config). Cloud Manager deploys only the `all` package — all other packages must have `cloudManagerTarget` set to `none`.",
  },
  {
    id: "env-084",
    category: "Maven Modules & Package Types",
    title: "cloudManagerTarget set to none",
    reference: "What configuration must all packages except 'all' have so Cloud Manager ignores them?",
    explanation:
      "All packages except the `all` container package must have `<cloudManagerTarget>none</cloudManagerTarget>` in their package configuration. This tells Cloud Manager to ignore them — only the `all` package is deployed.",
  },
  {
    id: "env-085",
    category: "Maven Modules & Package Types",
    title: "ui.config",
    reference: "Which Maven module holds OSGi configurations and Repo Init scripts?",
    explanation:
      "`ui.config` contains OSGi run mode configurations (`.cfg.json` files) and Repo Init scripts. OSGi configs in `ui.config` are scoped by run mode — they activate only for the matching environment (e.g., author, publish, dev, prod).",
  },
  {
    id: "env-086",
    category: "Maven Modules & Package Types",
    title: "Five key modules",
    reference: "How many key Maven modules does a standard AEM project have?",
    explanation:
      "A standard AEM project has five key Maven modules: `core` (Java OSGi bundle), `ui.apps` (code package → /apps), `ui.content` (content package → /content, /conf), `ui.config` (OSGi configs + Repo Init), and `all` (container package deployed by Cloud Manager).",
  },
  {
    id: "env-087",
    category: "Maven Modules & Package Types",
    title: "All other Maven modules: core bundle, ui.apps, ui.content, ui.config",
    reference: "What does the 'all' package embed?",
    explanation:
      "The `all` package embeds all other modules: the `core` OSGi bundle, the `ui.apps` code package, the `ui.content` content package, and the `ui.config` configuration package. When Cloud Manager deploys `all`, it installs everything.",
  },
  {
    id: "env-088",
    category: "Maven Modules & Package Types",
    title: "application",
    reference: "Which package type is used for code packages like ui.apps that deploy to immutable paths?",
    explanation:
      "The `application` package type is assigned to code packages like `ui.apps` that deploy to immutable repository paths (`/apps`). AEMaaCS uses the package type to enforce immutability — `application` packages cannot write to mutable paths at runtime.",
  },
]

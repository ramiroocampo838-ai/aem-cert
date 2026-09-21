import type { Concept } from "../types"

export const repoInitConcepts: Concept[] = [
  {
    id: "env-089",
    category: "Repo Init & AEM Archetype",
    title: "A mechanism that defines JCR structures (folders, users, groups, ACLs) as part of the application",
    reference: "What is Repo Init in AEM?",
    explanation:
      "Repo Init is a mechanism in AEM that lets you define JCR structures — folder hierarchies, service users, groups, and ACL permissions — as part of the application. These definitions are scripts that run early in the deployment lifecycle.",
  },
  {
    id: "env-090",
    category: "Repo Init & AEM Archetype",
    title: "Folder structures, service users, groups, and ACL permissions",
    reference: "What types of JCR structures can Repo Init create?",
    explanation:
      "Repo Init scripts can create: folder structures (JCR node hierarchies), service users (system accounts for OSGi services), user groups, and ACL permissions (access control entries). This eliminates manual repository setup steps.",
  },
  {
    id: "env-091",
    category: "Repo Init & AEM Archetype",
    title: "ui.config",
    reference: "In which Maven module do Repo Init scripts live?",
    explanation:
      "Repo Init scripts live in `ui.config`, the module that holds OSGi run mode configurations. Repo Init scripts are themselves delivered as OSGi configurations and are scoped by run mode.",
  },
  {
    id: "env-092",
    category: "Repo Init & AEM Archetype",
    title: "Early in the deployment lifecycle, before any application code runs",
    reference: "When do Repo Init scripts run during the AEM deployment lifecycle?",
    explanation:
      "Repo Init scripts run early in the deployment lifecycle, before application code (OSGi bundles and services) starts. This ensures the required JCR structures (service user accounts, folder hierarchies, ACLs) exist before the application needs them.",
  },
  {
    id: "env-093",
    category: "Repo Init & AEM Archetype",
    title: "A Maven archetype that generates a standard AEM project structure with best practices",
    reference: "What is the AEM Project Archetype?",
    explanation:
      "The AEM Project Archetype is a Maven archetype provided by Adobe. Running it generates a complete, correctly-structured AEM Maven project with all standard modules (`core`, `ui.apps`, `ui.content`, `ui.config`, `all`, `ui.frontend`, `dispatcher`, and test modules) pre-configured with best practices.",
  },
  {
    id: "env-094",
    category: "Repo Init & AEM Archetype",
    title: "Version 56",
    reference: "What is the current version of the AEM Project Archetype mentioned in the certification content?",
    explanation:
      "The AEM Project Archetype version referenced in the certification content is version 56. Adobe regularly updates the archetype — always use the latest version for new projects to get current best practices.",
  },
  {
    id: "env-095",
    category: "Repo Init & AEM Archetype",
    title: "all, core, ui.apps, ui.content, ui.config, ui.frontend, tests, and dispatcher configuration",
    reference: "What modules does the AEM Archetype generate when you scaffold a new project?",
    explanation:
      "The AEM Archetype generates a complete project including: `all` (container), `core` (Java OSGi), `ui.apps` (code package), `ui.content` (content package), `ui.config` (OSGi configs + Repo Init), `ui.frontend` (front-end build), test modules, and Dispatcher configuration.",
  },
  {
    id: "env-096",
    category: "Repo Init & AEM Archetype",
    title: "Repo Init scripts can be scoped to specific run modes so they only activate in the matching environment",
    reference: "What does 'run mode scoping' mean for Repo Init scripts?",
    explanation:
      "Repo Init scripts in `ui.config` can be placed in run mode-specific directories (e.g., `config.author/`, `config.publish/`, `config.prod/`). AEM activates only the scripts matching the current run mode — e.g., a script in `config.author/` only runs on Author instances.",
  },
]

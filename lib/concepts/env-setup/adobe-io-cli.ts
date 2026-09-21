import type { Concept } from "../types"

export const adobeIoCliConcepts: Concept[] = [
  {
    id: "env-017",
    category: "Adobe I/O CLI",
    title: "A command-line tool for interacting with Adobe services, known as aio",
    reference: "What is the Adobe I/O CLI and how is it commonly referred to?",
    explanation:
      "The Adobe I/O CLI, known as `aio`, is a command-line tool that lets you interact with Adobe services from the terminal. It is installed globally via npm and extended with plugins.",
  },
  {
    id: "env-018",
    category: "Adobe I/O CLI",
    title: "npm install -g @adobe/aio-cli",
    reference: "What command installs the Adobe I/O CLI?",
    explanation:
      "The Adobe I/O CLI is installed as a global npm package with `npm install -g @adobe/aio-cli`. The `-g` flag installs it globally so the `aio` command is available in any terminal session.",
  },
  {
    id: "env-019",
    category: "Adobe I/O CLI",
    title: "Cloud Manager plugin",
    reference: "Which of the following is a plugin you can add to the Adobe I/O CLI for AEM development?",
    explanation:
      "Three key plugins for AEM development are: the Cloud Manager plugin, the AEM Rapid Development Environment (RDE) plugin, and the Asset Compute plugin. These extend the `aio` CLI with Adobe service capabilities.",
  },
  {
    id: "env-020",
    category: "Adobe I/O CLI",
    title: "JWT authentication",
    reference: "Which authentication method was removed from the Adobe I/O CLI in January 2025?",
    explanation:
      "JWT (JSON Web Token) authentication was removed from the Adobe I/O CLI in January 2025. It has been replaced by OAuth Server-to-Server authentication configured through the Adobe Developer Console.",
  },
  {
    id: "env-021",
    category: "Adobe I/O CLI",
    title: "OAuth Server-to-Server authentication",
    reference: "What is the only supported authentication method for the Adobe I/O CLI after January 2025?",
    explanation:
      "After January 2025, OAuth Server-to-Server is the only supported authentication method. It is configured through the Adobe Developer Console, replacing the deprecated JWT Service Account approach.",
  },
  {
    id: "env-022",
    category: "Adobe I/O CLI",
    title: "In the Adobe Developer Console",
    reference: "Where is OAuth Server-to-Server authentication for the Adobe I/O CLI configured?",
    explanation:
      "OAuth Server-to-Server credentials are configured in the Adobe Developer Console. You create a project there, add the required APIs and services, and generate the credentials used by the `aio` CLI.",
  },
  {
    id: "env-023",
    category: "Adobe I/O CLI",
    title: "To deploy code directly to an AEM RDE instance without a full pipeline run",
    reference: "What is the purpose of the AEM Rapid Development Environment (RDE) plugin for the Adobe I/O CLI?",
    explanation:
      "The AEM RDE plugin lets developers deploy code (bundles, content packages) directly to an AEM Rapid Development Environment without triggering a Cloud Manager pipeline, enabling fast feedback loops during development.",
  },
  {
    id: "env-024",
    category: "Adobe I/O CLI",
    title: "Three plugins",
    reference: "How many key plugins are commonly added to the Adobe I/O CLI for AEM development?",
    explanation:
      "Three key plugins are commonly added to the Adobe I/O CLI for AEM development: the Cloud Manager plugin, the AEM Rapid Development Environment (RDE) plugin, and the Asset Compute plugin.",
  },
]

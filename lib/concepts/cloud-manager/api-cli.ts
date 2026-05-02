import type { Concept } from "../types"

export const apiCliConcepts: Concept[] = [
  {
    id: "cm-086",
    title: "A RESTful API for programmatically managing Cloud Manager resources: pipelines, environments, deployments, and program settings",
    reference: "What is the Cloud Manager API?",
    explanation:
      "The Cloud Manager API is a REST API (available at cloudmanager.adobe.io) that exposes all Cloud Manager operations programmatically. Using Adobe IMS authentication (service credentials/OAuth), external systems can: trigger pipeline runs, poll execution status, download logs, manage environment variables, create/delete environments, and more. This enables integration with external CI/CD systems, custom dashboards, and automation scripts.",
    category: "API & CLI",
  },
  {
    id: "cm-087",
    title: "Using Adobe IMS (Identity Management Service) service credentials — a Service Account integration in the Adobe Developer Console",
    reference: "How do you authenticate to the Cloud Manager API?",
    explanation:
      "The Cloud Manager API uses Adobe IMS (Identity Management Service) for authentication. Access is granted via a Service Account (Technical Account) integration created in the Adobe Developer Console. The service account generates client credentials used to obtain a JWT token (or OAuth 2.0 server-to-server credentials) which is then exchanged for an IMS access token. This token is passed as a Bearer token in Cloud Manager API calls.",
    category: "API & CLI",
  },
  {
    id: "cm-088",
    title: "A command-line tool for interacting with Adobe APIs, including a Cloud Manager plugin for managing pipelines and environments from the terminal",
    reference: "What is the Adobe I/O CLI and how does it help with Cloud Manager?",
    explanation:
      "The Adobe I/O CLI (aio) is a developer command-line tool for interacting with Adobe's various APIs. The Cloud Manager plugin (aio-cli-plugin-cloudmanager) extends it with commands for: listing programs/pipelines/environments, triggering pipeline runs, tailing execution logs in real time, managing environment variables, and more. It is widely used for scripting, integrating Cloud Manager into custom CI/CD flows, and local developer automation.",
    category: "API & CLI",
  },
  {
    id: "cm-089",
    title: "A non-human identity created in the Adobe Developer Console that provides machine-to-machine credentials for calling the Cloud Manager API",
    reference: "What is a 'Service Account' (Technical Account) in Adobe Developer Console for Cloud Manager API?",
    explanation:
      "A Service Account (Technical Account) is a non-human identity created in Adobe Developer Console. For Cloud Manager API access, you create a project, add the Cloud Manager API product, and generate a key pair or OAuth server-to-server credentials. These credentials are used by automated systems (Jenkins, GitHub Actions, scripts) to authenticate to the Cloud Manager API without requiring a human user to be logged in.",
    category: "API & CLI",
  },
  {
    id: "cm-090",
    title: "Triggering pipeline runs, checking execution status, downloading logs, managing environment variables, creating/deleting environments",
    reference: "What Cloud Manager operations can be automated via the Cloud Manager API?",
    explanation:
      "The Cloud Manager API provides full programmatic access to most Cloud Manager operations: listing programs/environments/pipelines, triggering pipeline runs, advancing impasse steps (overriding quality gates), cancelling executions, polling execution status, downloading execution logs, managing pipeline environment variables (including secrets), creating/deleting/hibernating environments, and more. This enables complete CI/CD automation from external tools.",
    category: "API & CLI",
  },
  {
    id: "cm-091",
    title: "Setting and updating environment-specific variables (plain text and secrets) for pipelines and environments via API instead of the UI",
    reference: "What is 'Pipeline Variables' management via the Cloud Manager API?",
    explanation:
      "Cloud Manager's Pipeline Variables API allows programmatic management of environment variables and secrets for both environments and pipelines. These variables can be used in OSGi configurations via the $[env:VARIABLE_NAME] or $[secret:SECRET_NAME] syntax. The API supports CRUD operations on variables, enabling automation of secrets rotation, environment-specific configuration, and integration with secrets management systems like HashiCorp Vault.",
    category: "API & CLI",
  },
  {
    id: "cm-092",
    title: "To programmatically approve/override a paused pipeline step (Go Live Approval or Important quality gate) and continue execution",
    reference: "What is the Cloud Manager 'Advance' API endpoint used for?",
    explanation:
      "The Cloud Manager 'Advance' API endpoint (PATCH /api/program/{programId}/pipeline/{pipelineId}/execution/{executionId}/phase/{phaseId}/step/{stepId}/advance) is used to programmatically resume a pipeline that is paused at a gate — specifically the Go Live Approval gate or an Important quality gate override. This enables fully automated deployment flows where pipeline approvals are handled by external systems rather than manual UI interaction.",
    category: "API & CLI",
  },
]

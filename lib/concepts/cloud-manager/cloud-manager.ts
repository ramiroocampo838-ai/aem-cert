import type { Concept } from "../types"

export const cloudManagerConcepts: Concept[] = [
  {
    id: "cm-015",
    title: "Adobe's CI/CD platform for deploying code, managing environments, and operating AEMaaCS",
    reference: "What is Cloud Manager in AEMaaCS?",
    explanation:
      "Cloud Manager is Adobe's operational platform for AEM as a Cloud Service. It provides CI/CD pipelines for deploying code, environment provisioning and management, code quality gates, monitoring dashboards, API access, and governance controls — it is the single operational hub for running AEMaaCS.",
    category: "Cloud Manager",
  },
  {
    id: "cm-016",
    title: "Responsible for defining programs and managing organizational access in Cloud Manager",
    reference: "What is the 'Business Owner' role in Cloud Manager?",
    explanation:
      "The Business Owner role in Cloud Manager is the highest governance role — responsible for creating and managing programs, defining program types (Sites, Assets, Commerce), and being accountable for overall program value. Must be assigned in Adobe Admin Console.",
    category: "Cloud Manager",
  },
  {
    id: "cm-017",
    title: "Create and manage CI/CD pipelines and trigger deployments",
    reference: "What can a 'Deployment Manager' do in Cloud Manager?",
    explanation:
      "A Deployment Manager in Cloud Manager can create and configure CI/CD pipelines (production and non-production), trigger deployments, manage environment variables, and control the deployment lifecycle — but cannot create programs or manage user roles.",
    category: "Cloud Manager",
  },
  {
    id: "cm-018",
    title: "Access developer tools: log files, developer console, and environment details",
    reference: "What is the 'Developer' role allowed to do in Cloud Manager?",
    explanation:
      "The Developer role in Cloud Manager provides read access to developer tooling: viewing pipeline execution history, downloading log files, accessing the AEM Developer Console for debugging OSGi services, and viewing environment configurations. They cannot trigger or configure pipelines.",
    category: "Cloud Manager",
  },
  {
    id: "cm-019",
    title: "In Adobe Admin Console — where Cloud Manager user roles are assigned",
    reference: "Where are Cloud Manager user roles assigned?",
    explanation:
      "Cloud Manager user roles (Business Owner, Program Manager, Deployment Manager, Developer) are managed in the Adobe Admin Console. An Organization Administrator assigns users to Cloud Manager product profiles, which map to these roles.",
    category: "Cloud Manager",
  },
  {
    id: "cm-020",
    title: "Managing program features, timelines, and coordinating with other roles",
    reference: "What is the 'Program Manager' role responsible for in Cloud Manager?",
    explanation:
      "The Program Manager role in Cloud Manager is a coordination and planning role — managing program delivery timelines, coordinating between teams, tracking SLA adherence, and having visibility across all aspects of the program including environments and pipelines.",
    category: "Cloud Manager",
  },
  {
    id: "cm-021",
    title: "A logical container in Cloud Manager that groups related AEM environments and pipelines",
    reference: "What is a 'program' in Cloud Manager?",
    explanation:
      "In Cloud Manager, a Program is a logical organizational container that groups together AEM environments (dev, stage, production), CI/CD pipelines, a Git repository, SLA targets, and user access. A company typically has one or more programs (e.g., one per brand or major site).",
    category: "Cloud Manager",
  },
  {
    id: "cm-022",
    title: "Sandbox programs and production programs — the two program types in Cloud Manager",
    reference: "What types of programs exist in Cloud Manager?",
    explanation:
      "Cloud Manager has two program types: Sandbox Programs (free, limited capacity, used for learning, demos, and exploration — no SLA guarantees) and Production Programs (full capacity, Adobe SLA-backed, used for real business workloads).",
    category: "Cloud Manager",
  },
  {
    id: "cm-023",
    title: "Exploration, learning, demos, and POCs — not subject to production SLAs",
    reference: "What is the purpose of a Sandbox program in Cloud Manager?",
    explanation:
      "Sandbox programs in Cloud Manager are provided for learning, exploration, demos, and proof-of-concept work. They have limited capacity and no Adobe SLA guarantees. They are free (included with AEMaaCS licensing) and ideal for training developers on the platform.",
    category: "Cloud Manager",
  },
  {
    id: "cm-024",
    title: "Adobe-managed Git repositories provided per Cloud Manager program",
    reference: "What Git repository does Cloud Manager use for code management?",
    explanation:
      "Cloud Manager provides an Adobe-managed Git repository for each program. Teams push their code to this repository, and Cloud Manager's pipelines build and deploy from it. Private repositories (GitHub, Bitbucket, GitLab) can also be connected as external repositories.",
    category: "Cloud Manager",
  },
]

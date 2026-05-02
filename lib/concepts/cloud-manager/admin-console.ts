import type { Concept } from "../types"

export const adminConsoleConcepts: Concept[] = [
  {
    id: "cm-035",
    title: "Managing users, groups, product profiles, and IMS organization settings for AEMaaCS",
    reference: "What is the Adobe Admin Console used for in AEM as a Cloud Service?",
    explanation:
      "The Adobe Admin Console (adminconsole.adobe.com) is the central identity and access management portal for all Adobe products. For AEMaaCS, it is where IMS Org admins add users, create product profiles, and assign roles. It governs access to both Cloud Manager and the AEM environments.",
    category: "Admin Console",
  },
  {
    id: "cm-036",
    title: "A top-level administrative unit representing a company's entitlement to Adobe products including AEMaaCS",
    reference: "What is an IMS Organization in the context of AEM as a Cloud Service?",
    explanation:
      "An IMS Organization (IMS Org) is the top-level entity in Adobe's Identity Management System representing a company that has licensed Adobe products. All AEMaaCS programs belong to an IMS Org, and all user identities are managed within it. The IMS Org Admin has the highest level of access in the Admin Console.",
    category: "Admin Console",
  },
  {
    id: "cm-037",
    title: "AEM Users and AEM Administrators — one set per environment tier (Author/Publish)",
    reference: "Which product profiles exist by default for AEM as a Cloud Service in the Admin Console?",
    explanation:
      "AEMaaCS automatically creates AEM Users and AEM Administrators product profiles in the Admin Console for each Author and Publish environment tier. Users in AEM Administrators receive administrative access in AEM, while AEM Users get standard author/publish access. Cloud Manager roles are managed by separate Cloud Manager-specific product profiles.",
    category: "Admin Console",
  },
  {
    id: "cm-038",
    title: "By adding users to specific Cloud Manager product profiles in the Admin Console",
    reference: "How are Cloud Manager roles assigned to users?",
    explanation:
      "Cloud Manager roles are managed through the Adobe Admin Console. An IMS Org Admin adds users to Cloud Manager product profiles (e.g., 'Cloud Manager - Business Owner', 'Cloud Manager - Deployment Manager') which grant specific permissions within Cloud Manager. These profiles are separate from AEM environment profiles.",
    category: "Admin Console",
  },
  {
    id: "cm-039",
    title: "The user responsible for a program who can create programs, configure pipelines, and manage business-level settings",
    reference: "What is the Business Owner role in Cloud Manager?",
    explanation:
      "The Business Owner is the most privileged Cloud Manager role. They can create programs, define production KPI targets (error rate, page views/min), approve production deployments, and manage all program settings. There must be at least one Business Owner per program.",
    category: "Admin Console",
  },
  {
    id: "cm-040",
    title: "A role that can configure and execute pipelines, manage environments, and trigger deployments including production",
    reference: "What is the Deployment Manager role in Cloud Manager?",
    explanation:
      "The Deployment Manager role in Cloud Manager can configure pipelines, manage environments, set environment variables, and trigger all types of pipeline runs including production deployments. They can also override quality gate failures marked as 'Important'. This role works alongside the Business Owner for the full deployment lifecycle.",
    category: "Admin Console",
  },
  {
    id: "cm-041",
    title: "Access to developer tokens, pipeline execution logs, environment variables, and AEM Developer Console",
    reference: "What permissions does the Developer role in Cloud Manager provide?",
    explanation:
      "Developers in Cloud Manager can access the AEM Developer Console per environment, download execution logs, retrieve git credentials, manage environment variables, and trigger non-production pipelines. They cannot trigger production pipelines or manage program-level settings — those require Deployment Manager or Business Owner roles.",
    category: "Admin Console",
  },
  {
    id: "cm-042",
    title: "A low-cost Cloud Manager program type for learning and demos with no production environment and limited SLA",
    reference: "What is a 'Sandbox Program' in Cloud Manager?",
    explanation:
      "Sandbox Programs are a lightweight Cloud Manager program type intended for learning, demos, and PoCs. They don't include a Production environment, have limited resources, and environments auto-hibernate after periods of inactivity (~8 hours without traffic). They are not subject to 24x7 SLA guarantees that Production programs have.",
    category: "Admin Console",
  },
  {
    id: "cm-043",
    title: "Automatic suspension of sandbox environment resources after prolonged inactivity, resumable via a manual 'resume' action",
    reference: "What is 'Environment Hibernation' in Cloud Manager Sandbox Programs?",
    explanation:
      "Environment Hibernation automatically shuts down sandbox environments after approximately 8 hours of inactivity (no HTTP traffic). This saves resources since sandbox programs have no SLA guarantees. Users can resume environments manually via the Cloud Manager UI, an API call, or by simply sending an HTTP request — which triggers an automatic wake-up.",
    category: "Admin Console",
  },
  {
    id: "cm-044",
    title: "By being assigned to the AEM Users or AEM Administrators product profile in the Admin Console for that Author environment",
    reference: "How does a user gain access to the AEM Author service in AEMaaCS?",
    explanation:
      "Access to the AEM Author service in AEMaaCS is managed through the Adobe Admin Console. An IMS Org admin must add users to either the 'AEM Administrators' or 'AEM Users' product profile associated with the Author service tier. Cloud Manager roles do NOT automatically grant AEM Author access — they are separate access controls.",
    category: "Admin Console",
  },
]

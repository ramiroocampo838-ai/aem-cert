import type { Concept } from "../types"

export const imsFundamentalsConcepts: Concept[] = [
  {
    id: "auth-008",
    category: "Adobe IMS Fundamentals",
    title: "Adobe's Identity Management System, used to log in administrators and regular users to AEM Author",
    reference: "What is Adobe IMS?",
    explanation:
      "Adobe IMS (Identity Management System) is the identity platform AEMaaCS uses to authenticate both administrators and regular users into the Author service. Because AEMaaCS is cloud-native, it relies on IMS rather than local AEM-only credentials.",
  },
  {
    id: "auth-009",
    category: "Adobe IMS Fundamentals",
    title: "Individuals who require access to the AEM Author service, managed centrally in Adobe Admin Console",
    reference: "What are Adobe IMS users?",
    explanation:
      "Adobe IMS users are individuals who need access to the AEM Author service. They are created, updated, and deleted centrally within Adobe's Admin Console, which serves as the hub for user administration across Experience Cloud products.",
  },
  {
    id: "auth-010",
    category: "Adobe IMS Fundamentals",
    title: "A way to organize users accessing the AEM Author service into logical groups",
    reference: "What are Adobe IMS user groups?",
    explanation:
      "Adobe IMS user groups organize users into logical groupings in Admin Console. On their own, they don't grant permissions or access — they exist purely to make user management easier, and are typically mapped to AEM groups and permissions.",
  },
  {
    id: "auth-011",
    category: "Adobe IMS Fundamentals",
    title: "No — IMS user groups do not grant permissions by themselves; they are organizational only",
    reference: "Do Adobe IMS user groups directly grant AEM permissions?",
    explanation:
      "IMS user groups by themselves grant no permissions or access to AEM. They are an organizational construct. Actual access is granted by assigning users (not groups) to IMS Product Profiles.",
  },
  {
    id: "auth-012",
    category: "Adobe IMS Fundamentals",
    title: "The mechanism that grants Adobe IMS users access to log in to the AEM Author service",
    reference: "What is an Adobe IMS product profile?",
    explanation:
      "IMS product profiles are the mechanism that actually grants login access to AEM Author. They define a base level of access, and by assigning the right profile administrators control what a user can do once authenticated.",
  },
  {
    id: "auth-013",
    category: "Adobe IMS Fundamentals",
    title: "Read-only access to AEM — users must be members of the Contributors group",
    reference: "What access does the AEM Users product profile grant?",
    explanation:
      "The AEM Users product profile grants read-only access to AEM. Users assigned this profile can view content and perform read operations, and they need to be members of AEM's Contributors group to have that access.",
  },
  {
    id: "auth-014",
    category: "Adobe IMS Fundamentals",
    title: "Full administrative access to AEM, including configuration and content management",
    reference: "What access does the AEM Administrators product profile grant?",
    explanation:
      "The AEM Administrators product profile provides full administrative access. Users with this profile can perform administrative tasks, configure settings, manage content, and have overall control over the AEM environment.",
  },
  {
    id: "auth-015",
    category: "Adobe IMS Fundamentals",
    title: "No — AEM does not support assigning IMS user groups to product profiles; individual users must be added instead",
    reference: "Can you assign an entire IMS user group directly to a product profile?",
    explanation:
      "AEM currently does not support assigning IMS user groups directly to product profiles. Individual users must be added to profiles one by one, even though groups exist for organizational purposes.",
  },
  {
    id: "auth-016",
    category: "Adobe IMS Fundamentals",
    title: "AEM groups and permissions provide fine-grained control layered on top of the base access IMS product profiles grant",
    reference: "How do AEM groups and permissions relate to IMS product profiles?",
    explanation:
      "IMS product profiles grant the base level of access to log in. AEM groups and permissions complement this by providing fine-grained control over specific resources and functionality once the user is inside AEM, working in harmony with the IMS abstractions.",
  },
  {
    id: "auth-017",
    category: "Adobe IMS Fundamentals",
    title: "IMS Authentication uses the OAuth protocol to establish a secure connection between AEM and the Adobe IMS endpoint",
    reference: "What protocol does IMS Authentication use under the hood?",
    explanation:
      "IMS Authentication in AEM utilizes the OAuth protocol to establish a secure connection between AEM and the Adobe IMS endpoint. Once a user has an Adobe Identity and is added to IMS, they can authenticate into AEM Author using their IMS credentials.",
  },
]

import type { Concept } from "../types"

export const authenticationOverviewConcepts: Concept[] = [
  {
    id: "auth-001",
    category: "Authentication Overview",
    title: "Verifying a user's identity before granting access to resources and functionality",
    reference: "What does authentication mean in the context of AEM?",
    explanation:
      "Authentication in AEM refers to the process of verifying the identity of users before granting them access to resources and functionalities. It validates credentials, manages sessions, and enforces access controls to protect content from unauthorized access.",
  },
  {
    id: "auth-002",
    category: "Authentication Overview",
    title: "Adobe IMS, SAML 2.0 via Adobe IMS, SAML 2.0, Single Sign-On, OAuth, OpenID Connect, and Token authentication",
    reference: "What authentication mechanisms does AEM as a Cloud Service support?",
    explanation:
      "AEMaaCS supports multiple authentication options that vary by service type: Adobe IMS, SAML 2.0 via Adobe IMS, standalone SAML 2.0, Single Sign-On (SSO), OAuth, OpenID Connect (OIDC), and Token authentication. Basic authentication is not supported on either tier.",
  },
  {
    id: "auth-003",
    category: "Authentication Overview",
    title: "Yes — Adobe IMS is supported on AEM Author, but not on Publish",
    reference: "Is Adobe IMS authentication supported on AEM Author?",
    explanation:
      "Adobe IMS is supported on AEM Author but not on Publish. Author access is managed almost exclusively through Adobe IMS and the Adobe Admin Console.",
  },
  {
    id: "auth-004",
    category: "Authentication Overview",
    title: "No — SAML 2.0 (standalone) is only supported on AEM Publish, not Author",
    reference: "Is standalone SAML 2.0 authentication supported on AEM Author?",
    explanation:
      "Standalone SAML 2.0 is only supported on AEM Publish (or Preview), never on Author. To manage Author authentication with an external IDP, you integrate that IDP with Adobe IMS instead — that's SAML 2.0 via Adobe IMS.",
  },
  {
    id: "auth-005",
    category: "Authentication Overview",
    title: "Token authentication — it works identically on both Author and Publish",
    reference: "Which authentication method works the same way on both AEM Author and Publish?",
    explanation:
      "Token authentication is the only method that works identically on both tiers. This is why it's the standard choice for headless and programmatic access, such as GraphQL, Content Services, and the Assets HTTP API.",
  },
  {
    id: "auth-006",
    category: "Authentication Overview",
    title: "It is not supported on either Author or Publish in AEM as a Cloud Service",
    reference: "Is Basic authentication (plain username/password over HTTP) supported in AEMaaCS?",
    explanation:
      "Basic authentication is not supported on either Author or Publish in AEM as a Cloud Service. Every authentication path relies on Adobe IMS, a federated identity provider, or a token — never raw credentials sent directly to AEM.",
  },
  {
    id: "auth-007",
    category: "Authentication Overview",
    title: "OpenID Connect (OIDC), supported on Publish only",
    reference: "Which newer authentication method, in addition to SAML/SSO/OAuth, is available on AEM Publish for federated identity management?",
    explanation:
      "OpenID Connect (OIDC) is available on AEM Publish for federated identity management, alongside SAML 2.0, SSO, and OAuth. Like the rest of that group, it is not available on Author.",
  },
]

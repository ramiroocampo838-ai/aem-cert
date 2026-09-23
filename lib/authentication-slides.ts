/**
 * Authentication in AEM Presentation - Slide Content
 * 14 slides covering Adobe IMS, SAML 2.0, and token-based authentication
 * for AEM as a Cloud Service (AD0-E123 exam objective 1.5).
 *
 * Source: public/speeches/authentication.txt
 * Theme: cyan/sky — from-cyan-900 via-sky-900 to-blue-900
 */

// ============================================================================
// INTERFACES (same shape as env-setup-slides / cloud-manager-slides pattern)
// ============================================================================

export interface CodeExample {
  language: "java" | "javascript" | "typescript" | "xml" | "html" | "htl" | "bash"
  code: string
  title?: string
  highlightLines?: number[]
}

export interface ExpandableContent {
  title: string
  content: string | string[] | { text: string; url?: string }[]
  type?: "list" | "text" | "table"
}

export interface DiagramData {
  type: "architecture" | "flow" | "tree" | "comparison" | "ascii"
  description: string
  elements?: {
    id: string
    label: string
    tooltip?: string
  }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface AuthenticationSlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: {
    text: string
    content: string
  }[]
  backgroundColor?: string
  estimatedTime: number // in minutes
}

const THEME = "from-cyan-900 via-sky-900 to-blue-900"

// ============================================================================
// SLIDE CONTENT — 14 SLIDES
// ============================================================================

export const authenticationSlides: AuthenticationSlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — Introduction
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Authentication in AEM",
    subtitle: "Who Gets In, and How",
    content: [
      "We've covered the platform, Cloud Manager, code quality, and how to set up a local environment. Now it's time to talk about who gets in, and how.",
      "Authentication is the process of verifying a user's identity before granting access to resources and functionality — the exam objective for Section 1.5: determining the correct steps to configure OOTB SAML or IMS integration.",
      "We'll walk through the four ways AEMaaCS handles authentication: Adobe IMS, SAML 2.0, Single Sign-On, and token-based authentication for programmatic access.",
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — Authentication Overview
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Authentication Overview",
    subtitle: "The Author/Publish Support Matrix",
    content: [
      "AEMaaCS supports several authentication mechanisms, and not all of them are available on both tiers. This matrix is worth memorizing.",
      "The pattern: Author is managed almost exclusively through Adobe IMS. Publish is where external identity providers live — SAML, SSO, OAuth, OIDC. Token authentication is the only method that works identically on both tiers.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Authentication method support — AEM Author vs AEM Publish",
        elements: [
          { id: "ims", label: "Adobe IMS — Author: Yes / Publish: No", tooltip: "Manages Author access via the Adobe Admin Console" },
          { id: "saml-ims", label: "SAML 2.0 via Adobe IMS — Author: Yes / Publish: Yes", tooltip: "SAML integrated through IMS, works on both tiers" },
          { id: "saml", label: "SAML 2.0 — Author: No / Publish: Yes", tooltip: "Standalone SAML only authenticates end users on Publish" },
          { id: "sso", label: "Single Sign-On — Author: No / Publish: Yes", tooltip: "Federated IDP login for Publish end users" },
          { id: "oauth", label: "OAuth — Author: No / Publish: Yes", tooltip: "Identity provider integration on Publish" },
          { id: "oidc", label: "OpenID Connect (OIDC) — Author: No / Publish: Yes", tooltip: "Newer federated identity option, Publish only" },
          { id: "token", label: "Token Authentication — Author: Yes / Publish: Yes", tooltip: "Works identically on both tiers — the headless/API standard" },
          { id: "basic", label: "Basic Authentication — Author: No / Publish: No", tooltip: "Not supported anywhere in AEMaaCS" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — Adobe IMS Fundamentals
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Adobe IMS Fundamentals",
    subtitle: "Users, Groups, and Product Profiles",
    content: [
      "AEMaaCS is cloud-native, so it leans on Adobe's Identity Management System, IMS, to log in both administrators and regular users to the Author service.",
      "Three building blocks make this work — and the chain matters: a user gets assigned a Product Profile, and that profile is what lets them authenticate into AEM Author.",
    ],
    expandableSections: [
      {
        title: "IMS Users",
        content: "Individuals who need access, managed centrally in Adobe Admin Console.",
        type: "text",
      },
      {
        title: "IMS User Groups",
        content: "Logical groupings of users. They don't grant permissions by themselves — they're just organizational buckets.",
        type: "text",
      },
      {
        title: "IMS Product Profiles",
        content: [
          "AEM Users — read-only access, maps to the Contributors group",
          "AEM Administrators — full admin access",
        ],
        type: "list",
      },
      {
        title: "⚠️ Important Caveat",
        content: "AEM does not support assigning IMS user groups directly to profiles. You add individual users to profiles instead.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — Admin Console and Organization Onboarding
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Admin Console & Org Onboarding",
    subtitle: "The Prerequisite for Everything Else",
    content: [
      "Before any of this works, your organization needs to exist as an IMS Organization in Adobe Admin Console.",
      "Once the org is provisioned, setup follows a clear sequence, then the AEM Administrator takes over inside AEM itself.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Organization onboarding sequence",
        elements: [
          { id: "invite", label: "System Admin logs into Cloud Manager", tooltip: "Receives the initial invite" },
          { id: "domain", label: "Claims the domain", tooltip: "Proves ownership, e.g. acme.com" },
          { id: "directories", label: "Sets up user directories", tooltip: "Prepares Admin Console for user onboarding" },
          { id: "idp", label: "Configures the IDP for SSO", tooltip: "Enables federated Single Sign-On" },
          { id: "aem-admin", label: "AEM Administrator manages local groups/permissions", tooltip: "Takes over inside AEM once IMS setup is complete" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Product Context Instances",
        content: "Admin Console represents your Author and Publish instances as Product Context Instances. Product Profiles determine which instances a given user can reach.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — Onboarding Users
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Onboarding Users",
    subtitle: "Three Ways to Bring Users Into Admin Console",
    content: [
      "The right onboarding method depends on scale — from a handful of manual additions to a fully automated enterprise directory sync.",
    ],
    expandableSections: [
      {
        title: "Manual Creation",
        content: "Fine for small numbers, roughly under 50 users, through the Admin Console UI.",
        type: "text",
      },
      {
        title: "CSV Upload",
        content: "Bulk add, edit, or remove users via file upload — useful for mid-size batches.",
        type: "text",
      },
      {
        title: "User Sync Tool (UST)",
        content: [
          "Syncs from an enterprise Active Directory or OpenLDAP source",
          "One-way only: directory changes flow into Admin Console, never the reverse",
          "Maps directory groups to AEM product profiles automatically",
          "Runs through the Adobe User Management API",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — Login Flows
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Login Flows",
    subtitle: "Local Admin vs IMS-Based, With Optional SSO",
    content: [
      "There are two distinct ways to log into AEM Author, and the exam likes to test the difference.",
      "Local administrator login uses a dedicated 'sign in locally' option, separate from IMS, meant strictly for admin tasks. IMS-based login is the standard path for everyone else.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "IMS-based login with federated SSO",
        elements: [
          { id: "aem", label: "AEM", tooltip: "User requests access to AEM Author" },
          { id: "ims", label: "Adobe IMS", tooltip: "User clicks 'Sign in with Adobe', redirected here" },
          { id: "idp", label: "Customer IDP", tooltip: "If federated IDP is configured, redirected here for SSO" },
          { id: "back-ims", label: "Back to IMS", tooltip: "After IDP authentication succeeds" },
          { id: "back-aem", label: "Back to AEM", tooltip: "User is now logged in" },
        ],
      },
    ],
    tooltips: [
      {
        text: "Local administrator login",
        content: "Bypasses IMS entirely — dedicated option for admin-only tasks using local credentials.",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — SAML 2.0 — The Flow
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "SAML 2.0 — The Flow",
    subtitle: "Certificate-Based Trust for Publish End Users",
    content: [
      "SAML 2.0 is different from IMS: it authenticates end users of a public-facing site directly against a non-Adobe Identity Provider, and it only works on AEM Publish — never Author.",
      "The trust is entirely certificate-based: the IDP signs with its private key, AEM verifies with the IDP's public key.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "SAML 2.0 authentication flow",
        elements: [
          { id: "request", label: "User requests protected resource", tooltip: "On AEM Publish" },
          { id: "authn", label: "AEM sends AuthnRequest", tooltip: "Via /system/sling/login" },
          { id: "idp-auth", label: "User authenticates with IDP", tooltip: "Or reuses an existing session" },
          { id: "assertion", label: "IDP signs SAML assertion", tooltip: "Signed with the IDP's private certificate" },
          { id: "post", label: "Assertion POSTed to AEM Publish", tooltip: "Via the user's browser, to saml_login" },
          { id: "validate", label: "AEM validates signature", tooltip: "Using the IDP's public certificate" },
          { id: "cookie", label: "AEM sets login-token cookie", tooltip: "Authenticates subsequent requests" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8 — SAML 2.0 — Configuration in Practice
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "SAML 2.0 — Configuration in Practice",
    subtitle: "Trust Store, Keystore, OSGi, Referrer Filter, CORS",
    content: [
      "Setting this up has a handful of concrete steps worth remembering for the exam.",
      "The SAML Authentication Handler is defined as an OSGi factory configuration, so different site trees can run different SAML setups.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "SAML Authentication Handler OSGi config (excerpt)",
        code: `{
  "path": [ "/content/wknd", "/content/dam/wknd" ],
  "idpCertAlias": "$[env:SAML_IDP_CERT_ALIAS;default=certalias___1]",
  "idpIdentifier": "$[env:SAML_IDP_ID;default=http://okta.com/exk4z]",
  "idpUrl": "$[env:SAML_IDP_URL;default=https://dev.okta.com/sso/saml]",
  "serviceProviderEntityId": "$[env:SAML_AEM_ID;default=https://publish-p123-e456.adobeaemcloud.com]",
  "createUser": true,
  "userIntermediatePath": "wknd/idp",
  "synchronizeAttributes": [ "firstName=profile/givenName" ],
  "addGroupMemberships": true,
  "defaultGroups": [ "wknd-users" ]
}`,
      },
    ],
    expandableSections: [
      {
        title: "Global Trust Store",
        content: "Install the IDP's public certificate on Author (Tools > Security > Trust Store), then replicate it to Publish, since SAML only runs there.",
        type: "text",
      },
      {
        title: "authentication-service Keystore",
        content: "Needed only if you require logout handling or assertion encryption — created under the authentication-service system user.",
        type: "text",
      },
      {
        title: "Referrer Filter & CORS",
        content: [
          "Referrer Filter: allow POST requests from the IDP's origin if it differs from AEM Publish",
          "CORS: allow the saml_login endpoint to accept cross-origin POSTs",
          "Local testing note: localhost can send a null Origin header — allow \"null\" explicitly",
        ],
        type: "list",
      },
      {
        title: "Deployment",
        content: "Everything is deployed through Git and a Full Stack Cloud Manager pipeline — OSGi config changes are code, not console clicks, in AEMaaCS.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9 — Token-Based Authentication — Overview
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Token-Based Authentication",
    subtitle: "Built for Machines, Not People",
    content: [
      "The third mechanism is built for machines: token-based authentication lets external applications, scripts, and services call AEM's HTTP APIs — GraphQL, Content Services, Assets HTTP API — without a browser login.",
      "There are two ways to get a token, aimed at two different situations: local development, and production integrations.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Every token-authenticated request",
        code: `Authorization: Bearer ACCESS_TOKEN`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10 — Local Development Access Token
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Local Development Access Token",
    subtitle: "The Quick Option While You're Coding",
    content: [
      "From the AEM Developer Console in Cloud Manager, under Integrations > Local Token, you generate a short-lived token tied to your own IMS identity and your own permissions.",
    ],
    expandableSections: [
      {
        title: "Requirements",
        content: [
          "Membership in the Cloud Manager - Developer product profile, to reach the Developer Console",
          "Membership in AEM Users or AEM Administrators for the target environment",
          "Sandbox environments only require the AEM Users/Administrators membership",
        ],
        type: "list",
      },
      {
        title: "⚠️ Handle With Care",
        content: "It expires daily, authenticates as you personally, and should never be committed to source control.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11 — Service Credentials and OAuth Server-to-Server
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Service Credentials & OAuth Server-to-Server",
    subtitle: "The Production-Grade Option — Now Simplified",
    content: [
      "Older Adobe documentation describes Service Credentials generating a signed JWT exchanged for an access token. That flow is retired: Adobe stopped issuing new JWT credentials in mid-2024, and every existing JWT credential stopped working by mid-2025.",
      "The current, and only, supported method is OAuth Server-to-Server (S2S) — a straightforward client-credentials exchange, with no signing step required.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "OAuth Server-to-Server token exchange",
        code: `POST https://ims-na1.adobelogin.com/ims/token/v3
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
client_id=YOUR_CLIENT_ID
client_secret=YOUR_CLIENT_SECRET
scope=YOUR_SCOPES`,
      },
    ],
    expandableSections: [
      {
        title: "How It's Set Up",
        content: [
          "An Adobe IMS Org Administrator creates the credential, tied to a Technical Account",
          "The credential JSON has a client ID, client secret, and scopes — no private key, no JWT to build",
          "The response access token is used as a Bearer token, just like the local dev token",
        ],
        type: "list",
      },
      {
        title: "Scale & Lifespan",
        content: "An AEMaaCS environment can host up to ten technical accounts, each with its own Service Credentials. Certificates are valid for up to a year before rotation.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 12 — Configuring AEM Permissions for Technical Accounts
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Configuring Technical Account Permissions",
    subtitle: "A Token Grants Identity, Not Access",
    content: [
      "Getting a token doesn't automatically grant access to anything in AEM — the technical account still needs permissions, same as any other user.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "From credential to permitted technical account",
        elements: [
          { id: "email", label: "Read integration.email from credential JSON", tooltip: "The technical account's AEM login name" },
          { id: "first-call", label: "First API call auto-creates the AEM user", tooltip: "The technical account now exists in AEM" },
          { id: "assign", label: "Admin assigns the user to a group", tooltip: "e.g. DAM Users for write access to assets" },
          { id: "access", label: "Technical account now behaves like any AEM user", tooltip: "Permissions come entirely from group membership" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Exam Detail Worth Remembering",
        content: "The access token alone doesn't equal access — it equals identity. Permissions are still governed by AEM's normal group-and-ACL model underneath.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 13 — Choosing the Right Method
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Choosing the Right Method",
    subtitle: "A Decision Table for the Exam",
    content: [
      "Exam objective 1.5 is phrased as a decision-making skill — 'determine the correct steps' — so it helps to think in terms of scenarios rather than pure recall.",
    ],
    expandableSections: [
      {
        title: "Logging an admin or content author into Author",
        content: "Adobe IMS",
        type: "text",
      },
      {
        title: "Authenticating public site visitors on Publish against a corporate IDP",
        content: "SAML 2.0 (or SAML 2.0 via IMS to unify with Author's IMS setup)",
        type: "text",
      },
      {
        title: "Giving employees a seamless login across Adobe products and your own IDP",
        content: "SSO through Admin Console",
        type: "text",
      },
      {
        title: "Letting a script or backend service call AEM APIs",
        content: "Token authentication — Local Development Access Token while coding, OAuth Server-to-Server in production",
        type: "text",
      },
      {
        title: "Trying to use plain username/password Basic auth",
        content: "Not supported anywhere in AEMaaCS",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 14 — Closing
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Identity, Tier, System, Permissions",
    subtitle: "The Four Questions of AEM Authentication",
    content: [
      "Authentication in AEM comes down to four questions: who is logging in, onto which tier, through which identity system, and with what permissions once they're in.",
    ],
    expandableSections: [
      {
        title: "What You Now Have",
        content: [
          "Adobe IMS governs Author access, built from users, groups, and product profiles",
          "SAML 2.0 governs Publish-side end-user authentication against external IDPs",
          "Token authentication, via OAuth Server-to-Server, governs machine-to-machine access",
        ],
        type: "list",
      },
      {
        title: "Key Concepts to Remember for the Exam",
        content: [
          "The Author/Publish support matrix — know exactly which method works where",
          "IMS product profiles grant access; IMS groups are just organizational",
          "The full SAML assertion flow, and that it's certificate-based trust",
          "The Global Trust Store must be replicated from Author to Publish for SAML to work",
          "OAuth Server-to-Server is the current standard for programmatic access — JWT-based Service Credentials are deprecated",
          "A valid access token grants identity, not permissions — group membership still controls what a technical account can do",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },
]

// ============================================================================
// HELPERS
// ============================================================================

export function getTotalAuthenticationSlides(): number {
  return authenticationSlides.length
}

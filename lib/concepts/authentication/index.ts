import type { ConceptCategory } from "../types"
import { authenticationOverviewConcepts } from "./authentication-overview"
import { imsFundamentalsConcepts } from "./ims-fundamentals"
import { adminConsoleOnboardingConcepts } from "./admin-console-onboarding"
import { userOnboardingMethodsConcepts } from "./user-onboarding-methods"
import { loginFlowsConcepts } from "./login-flows"
import { samlFlowConcepts } from "./saml-flow"
import { samlConfigurationConcepts } from "./saml-configuration"
import { tokenAuthOverviewConcepts } from "./token-auth-overview"
import { localDevTokenConcepts } from "./local-dev-token"
import { serviceCredentialsOauthConcepts } from "./service-credentials-oauth"
import { technicalAccountPermissionsConcepts } from "./technical-account-permissions"

export const authenticationCategories: ConceptCategory[] = [
  {
    name: "Authentication Overview",
    concepts: authenticationOverviewConcepts,
    videoDescriptions: [
      "Introduces authentication methods in AEM and compares where Adobe IMS, SAML, OAuth, OpenID Connect, and token authentication are supported across Author and Publish.",
    ],
  },
  {
    name: "Adobe IMS Fundamentals",
    concepts: imsFundamentalsConcepts,
    videoDescriptions: [
      "Explains Adobe IMS users, groups, and product profiles, and how they provide the initial access to AEM Author.",
      "Covers the permissions granted by AEM product profiles, the roles of AEM groups, and how IMS uses OAuth to connect AEM with Adobe identity services.",
    ],
  },
  {
    name: "Admin Console & Org Onboarding",
    concepts: adminConsoleOnboardingConcepts,
    videoDescriptions: [
      "Walks through onboarding an organization to IMS, claiming its domain, configuring identity providers, and understanding product context instances and supported user identities.",
    ],
  },
  {
    name: "User Onboarding Methods",
    concepts: userOnboardingMethodsConcepts,
    videoDescriptions: [
      "Compares manual user creation, CSV imports, and directory synchronization with the User Sync Tool, including one-way sync and mapping enterprise groups to Adobe product access.",
    ],
  },
  {
    name: "Login Flows",
    concepts: loginFlowsConcepts,
    videoDescriptions: [
      "Traces local administrator and Adobe IMS login flows, including redirects through a customer identity provider for SSO and reuse of an existing IMS session.",
    ],
  },
  {
    name: "SAML 2.0 — The Flow",
    concepts: samlFlowConcepts,
    videoDescriptions: [
      "Introduces SAML authentication for AEM Publish and follows the login request from the protected resource to the Identity Provider and its signed assertion.",
      "Explains how Publish validates the assertion, creates or updates the user, issues a login cookie, redirects to the requested page, and verifies signatures with certificates.",
    ],
  },
  {
    name: "SAML 2.0 — Configuration",
    concepts: samlConfigurationConcepts,
    videoDescriptions: [
      "Covers prerequisites for SAML setup, certificate management in the Global Trust Store, moving trust configuration to Publish, keystore requirements, and the OSGi authentication handler.",
      "Explains the SAML handler's OSGi properties, site-specific configuration paths, CORS requirements for Identity Provider POSTs, and deployment through Cloud Manager.",
    ],
  },
  {
    name: "Token Authentication Overview",
    concepts: tokenAuthOverviewConcepts,
    videoDescriptions: [
      "Introduces bearer-token authentication for external clients using AEM APIs, and compares local development access tokens with production OAuth Server-to-Server credentials.",
    ],
  },
  {
    name: "Local Development Access Token",
    concepts: localDevTokenConcepts,
    videoDescriptions: [
      "Shows how to obtain and use a short-lived local development token for AEMaaCS, including required access profiles, its user identity and permissions, expiration, and secure handling.",
    ],
  },
  {
    name: "Service Credentials & OAuth Server-to-Server",
    concepts: serviceCredentialsOauthConcepts,
    videoDescriptions: [
      "Introduces OAuth Server-to-Server as the production authentication method, covering the move from JWT, technical accounts, client credentials, scopes, and bearer tokens.",
      "Explains how service credentials differ from access tokens, credential rotation and technical-account limits, security considerations, and migration of API integrations to OAuth.",
    ],
  },
  {
    name: "Configuring Technical Account Permissions",
    concepts: technicalAccountPermissionsConcepts,
    videoDescriptions: [
      "Shows how to find the AEM user created for a technical account and grant permissions through AEM groups, then verify access against an asset operation.",
    ],
  },
]

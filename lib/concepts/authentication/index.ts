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
  { name: "Authentication Overview", concepts: authenticationOverviewConcepts },
  { name: "Adobe IMS Fundamentals", concepts: imsFundamentalsConcepts },
  { name: "Admin Console & Org Onboarding", concepts: adminConsoleOnboardingConcepts },
  { name: "User Onboarding Methods", concepts: userOnboardingMethodsConcepts },
  { name: "Login Flows", concepts: loginFlowsConcepts },
  { name: "SAML 2.0 — The Flow", concepts: samlFlowConcepts },
  { name: "SAML 2.0 — Configuration", concepts: samlConfigurationConcepts },
  { name: "Token Authentication Overview", concepts: tokenAuthOverviewConcepts },
  { name: "Local Development Access Token", concepts: localDevTokenConcepts },
  { name: "Service Credentials & OAuth Server-to-Server", concepts: serviceCredentialsOauthConcepts },
  { name: "Configuring Technical Account Permissions", concepts: technicalAccountPermissionsConcepts },
]

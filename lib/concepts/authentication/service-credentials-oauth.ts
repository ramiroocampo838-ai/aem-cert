import type { Concept } from "../types"

export const serviceCredentialsOauthConcepts: Concept[] = [
  {
    id: "auth-080",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "OAuth Server-to-Server (S2S) — the current, and only, supported method for production programmatic access",
    reference: "What is the current standard mechanism for obtaining production access tokens to AEMaaCS?",
    explanation:
      "OAuth Server-to-Server (S2S) is the current standard for production-grade programmatic access to AEMaaCS. It replaced the older JWT-based Service Credentials flow, which Adobe fully deprecated.",
  },
  {
    id: "auth-081",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "New JWT credentials could not be created after June 3, 2024, and all existing JWT credentials stopped working by June 30, 2025",
    reference: "What is the exact deprecation timeline for JWT-based Service Credentials in Adobe Developer Console?",
    explanation:
      "Adobe stopped allowing new JWT (Service Account) credentials to be created on or after June 3, 2024. Every existing JWT credential stopped functioning on or after June 30, 2025 — so any integration still built on JWT is broken today.",
  },
  {
    id: "auth-082",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "An Adobe IMS Org Administrator, tied to a Technical Account",
    reference: "Who creates an OAuth Server-to-Server credential, and what is it tied to?",
    explanation:
      "An Adobe IMS Org Administrator creates the OAuth Server-to-Server credential — via the AEM Developer Console or Adobe Developer Console — tied to a Technical Account, the identity the credential will authenticate as.",
  },
  {
    id: "auth-083",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "A client ID, a client secret, and a set of scopes — no private key and no JWT to build or sign",
    reference: "What does an OAuth Server-to-Server credential JSON payload contain?",
    explanation:
      "An OAuth Server-to-Server credential is a JSON payload containing a client ID, a client secret, and the scopes it's allowed to request. Unlike the old JWT flow, there's no private key to manage and no JWT to construct or sign.",
  },
  {
    id: "auth-084",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "A single POST request with grant_type=client_credentials, client_id, client_secret, and scope — no signing step",
    reference: "How do you exchange OAuth Server-to-Server credentials for an access token?",
    explanation:
      "You make one POST request to https://ims-na1.adobelogin.com/ims/token/v3 with form-encoded parameters grant_type=client_credentials, client_id, client_secret, and scope. The response is an access token — no JWT construction or signing is involved, which is the main simplification over the old flow.",
  },
  {
    id: "auth-085",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "As a Bearer token in the Authorization header, the same way a Local Development Access Token is used",
    reference: "How is the OAuth Server-to-Server access token used once obtained?",
    explanation:
      "The access token returned by the OAuth Server-to-Server exchange is used exactly like a Local Development Access Token: as a Bearer token in the Authorization header of requests made to AEM's APIs.",
  },
  {
    id: "auth-086",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Tied to a Technical Account; multiple Service Credentials can be active for one Technical Account",
    reference: "How do Service Credentials relate to a Technical Account?",
    explanation:
      "Service Credentials are tied to Technical Accounts, and a single Technical Account can have multiple active Service Credentials at once — each one a separate set of client ID/secret pairs authenticating as that same account.",
  },
  {
    id: "auth-087",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Service Credentials serve as credentials to obtain access tokens; the token itself is the short-lived artifact used for requests",
    reference: "What's the distinction between Service Credentials and an access token?",
    explanation:
      "Service Credentials (client ID, client secret) are long-lived and serve as the means to obtain access tokens — they are not access tokens themselves. The access token is the short-lived artifact actually presented on each API request.",
  },
  {
    id: "auth-088",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Certificates are valid for up to a year before requiring rotation, unlike the daily-expiring Local Development Access Token",
    reference: "How does the lifespan of Service Credentials compare to a Local Development Access Token?",
    explanation:
      "Service Credentials have a much longer lifespan than a Local Development Access Token: their certificates are valid for up to a year before rotation, and they remain unchanged unless explicitly revoked — versus the daily expiry of a local dev token.",
  },
  {
    id: "auth-089",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Up to ten technical accounts, each with its own Service Credentials, each mapping to a discrete technical account AEM user",
    reference: "How many Technical Accounts can a single AEMaaCS environment have?",
    explanation:
      "An AEMaaCS environment can host up to ten Technical Accounts. Each has its own Service Credentials, and each Service Credential maps to a discrete technical account AEM user with its own identity and permissions.",
  },
  {
    id: "auth-090",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Because both can grant access to the AEMaaCS environment, and unauthorized access to either poses a real security risk",
    reference: "Why must Service Credentials and the access tokens they produce be treated as sensitive information?",
    explanation:
      "Both Service Credentials and the access tokens generated from them (as well as Local Development Access Tokens) grant access to the AEMaaCS environment. Anyone who obtains them without authorization can access the environment, so they must be kept confidential and protected accordingly.",
  },
  {
    id: "auth-091",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "It's a straightforward client-credentials exchange instead of constructing and signing a token yourself",
    reference: "How does OAuth Server-to-Server simplify programmatic authentication compared to the old JWT flow?",
    explanation:
      "Where the old JWT flow required generating a JWT from Service Credentials and signing it before exchanging it for an access token, OAuth Server-to-Server reduces this to a single client-credentials POST request — no signing step, no JWT library needed on the client side.",
  },
  {
    id: "auth-092",
    category: "Service Credentials & OAuth Server-to-Server",
    title: "Migrate Cloud Manager API integrations to OAuth credentials; auto-generated projects are migrated by Adobe starting from development environments",
    reference: "What migration paths exist for customers still using JWT-based Cloud Manager API access?",
    explanation:
      "Customers using JWT credentials for Cloud Manager API access needed to migrate to OAuth credentials, which Cloud Manager supports. For auto-generated Developer Console projects, Adobe handled the migration automatically starting with development environments, with no customer action required.",
  },
]

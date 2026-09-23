import type { Concept } from "../types"

export const loginFlowsConcepts: Concept[] = [
  {
    id: "auth-034",
    category: "Login Flows",
    title: "Local administrator login and IMS-based login",
    reference: "What are the two distinct ways to log into AEM Author?",
    explanation:
      "There are two distinct login paths into AEM Author: a local administrator login that bypasses IMS entirely, and IMS-based login, the standard path used by everyone else via Adobe IMS.",
  },
  {
    id: "auth-035",
    category: "Login Flows",
    title: "A dedicated sign-in option on the login screen meant strictly for admin tasks, bypassing IMS entirely",
    reference: "What is local administrator login in AEM?",
    explanation:
      "Local administrator login lets an Admin user authenticate directly within AEM using local credentials, through a dedicated option on the login screen separate from any external authentication mechanism. It's meant strictly for admin tasks.",
  },
  {
    id: "auth-036",
    category: "Login Flows",
    title: "They click 'Sign in with Adobe' and are redirected to the IMS login screen to enter their credentials",
    reference: "How does a non-administrator user log into AEM Author via IMS?",
    explanation:
      "For IMS-based login, the user clicks the 'Sign in with Adobe' button, is redirected to the IMS login screen to authenticate, and is then redirected back to AEM once authentication succeeds.",
  },
  {
    id: "auth-037",
    category: "Login Flows",
    title: "The user is redirected one step further, from IMS to that customer IDP, for SSO authentication",
    reference: "What happens during IMS-based login if a federated Identity Provider (IDP) is configured?",
    explanation:
      "If a federated IDP is configured in Admin Console, selecting IMS-based login redirects the user further, from IMS to the customer's IDP, for Single Sign-On. After authenticating with the IDP, the user is redirected back to AEM automatically logged in.",
  },
  {
    id: "auth-038",
    category: "Login Flows",
    title: "AEM to IMS to the customer IDP, then back to IMS, then back to AEM",
    reference: "What is the full redirect chain for a federated (SSO) user logging into AEM Author?",
    explanation:
      "The full chain for a federated user is: AEM redirects to IMS, IMS redirects to the customer IDP, the IDP authenticates the user and redirects back to IMS, and IMS redirects back to AEM — two redirects for one seamless login.",
  },
  {
    id: "auth-039",
    category: "Login Flows",
    title: "Redirecting the user to IMS for authentication and, optionally, to the customer IDP for SSO, then back to AEM",
    reference: "What does the general IMS Authentication user login flow involve?",
    explanation:
      "The user login flow involves redirecting the user to IMS for authentication, and optionally further to the customer IDP for Single Sign-On, before redirecting the user back to AEM with access granted to the Author service.",
  },
  {
    id: "auth-040",
    category: "Login Flows",
    title: "No credentials are required again — the existing IMS session is reused",
    reference: "What happens if a user is already authenticated with IMS when they try to log into AEM Author?",
    explanation:
      "If the user is already authenticated with IMS, they are not prompted for credentials again — the existing authenticated session is reused, and they are redirected straight back into AEM.",
  },
  {
    id: "auth-041",
    category: "Login Flows",
    title: "It ensures a seamless and secure authentication experience while keeping identity centralized in IMS",
    reference: "Why does AEM redirect users to IMS instead of validating credentials itself?",
    explanation:
      "Delegating authentication to IMS (and optionally a federated IDP) ensures a seamless and secure experience for users while keeping identity centrally managed outside of AEM, consistent with how the rest of Adobe's Experience Cloud handles authentication.",
  },
]

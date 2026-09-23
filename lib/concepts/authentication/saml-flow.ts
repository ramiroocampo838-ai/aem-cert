import type { Concept } from "../types"

export const samlFlowConcepts: Concept[] = [
  {
    id: "auth-042",
    category: "SAML 2.0 — The Flow",
    title: "It lets end users of a public-facing AEM site authenticate against a non-Adobe Identity Provider, working only on Publish",
    reference: "What does SAML 2.0 integration allow in AEM, and where does it work?",
    explanation:
      "SAML 2.0 integration with AEM Publish (or Preview) allows end users of an AEM-based web experience to authenticate to a non-Adobe IDP and access AEM as a named, authorized user. It never works on Author — only Publish or Preview.",
  },
  {
    id: "auth-043",
    category: "SAML 2.0 — The Flow",
    title: "/system/sling/login",
    reference: "What is AEM's login endpoint that explicitly requests the login action in a SAML flow?",
    explanation:
      "The user follows a link to AEM's login endpoint, /system/sling/login, which explicitly requests the login action and kicks off the SAML authentication flow.",
  },
  {
    id: "auth-044",
    category: "SAML 2.0 — The Flow",
    title: "An AuthnRequest — AEM asks the IDP to start the authentication process",
    reference: "What does AEM Publish send to the IDP to begin SAML authentication?",
    explanation:
      "After the user hits the login endpoint, AEM makes an AuthnRequest to the IDP, requesting that the IDP start the authentication process for that user.",
  },
  {
    id: "auth-045",
    category: "SAML 2.0 — The Flow",
    title: "A SAML assertion containing the user's data, signed with the IDP's private certificate",
    reference: "What does the IDP generate once the user has authenticated?",
    explanation:
      "Once the user authenticates with the IDP, the IDP generates a SAML assertion containing the user's data and signs it using the IDP's private certificate, establishing a verifiable, tamper-evident credential.",
  },
  {
    id: "auth-046",
    category: "SAML 2.0 — The Flow",
    title: "Via an HTTP POST, sent through the user's web browser, to AEM Publish's SAML endpoint",
    reference: "How does the signed SAML assertion get from the IDP to AEM Publish?",
    explanation:
      "The IDP sends the SAML assertion via an HTTP POST, relayed through the user's web browser, to AEM Publish's SAML login endpoint (…/saml_login).",
  },
  {
    id: "auth-047",
    category: "SAML 2.0 — The Flow",
    title: "By validating the assertion's signature using the IDP's public certificate",
    reference: "How does AEM Publish validate the integrity and authenticity of an incoming SAML assertion?",
    explanation:
      "AEM Publish receives the SAML assertion and validates its integrity and authenticity using the IDP's public certificate — the counterpart to the private key the IDP used to sign it.",
  },
  {
    id: "auth-048",
    category: "SAML 2.0 — The Flow",
    title: "Creates the user if needed, synchronizes user attributes, and updates AEM group membership",
    reference: "What does AEM Publish do with the AEM user record once a SAML assertion is validated?",
    explanation:
      "Based on the SAML 2.0 OSGi configuration and the assertion's contents, AEM Publish manages the AEM user record: it creates the user if they don't exist, synchronizes user attributes, and updates AEM user group membership.",
  },
  {
    id: "auth-049",
    category: "SAML 2.0 — The Flow",
    title: "A login-token cookie, used to authenticate subsequent requests to AEM Publish",
    reference: "What does AEM Publish set on the HTTP response after a successful SAML login?",
    explanation:
      "AEM Publish sets a login-token cookie on the HTTP response after successful SAML authentication. That cookie authenticates the user's subsequent requests without repeating the full SAML flow each time.",
  },
  {
    id: "auth-050",
    category: "SAML 2.0 — The Flow",
    title: "The URL stored in the saml_request_path cookie — the originally requested page",
    reference: "Where does AEM Publish redirect the user after completing SAML login?",
    explanation:
      "AEM Publish redirects the user to the URL specified by the saml_request_path cookie, which is the page they originally requested before being sent through the authentication flow.",
  },
  {
    id: "auth-051",
    category: "SAML 2.0 — The Flow",
    title: "Certificate-based — the IDP signs with its private key, and AEM verifies with the IDP's public key",
    reference: "What is the trust model underlying the SAML assertion signing flow?",
    explanation:
      "The trust between the IDP and AEM is entirely certificate-based: the IDP digitally signs the SAML assertion with its private key, and the Service Provider (AEM Publish) verifies that signature using the IDP's public key, ensuring the assertion wasn't tampered with and genuinely came from the trusted IDP.",
  },
]

import type { Concept } from "../types"

export const localDevTokenConcepts: Concept[] = [
  {
    id: "auth-072",
    category: "Local Development Access Token",
    title: "A temporary token that grants access to AEM Author and Publish services, with the user's own permissions, in a specific AEMaaCS environment",
    reference: "What is a Local Development Access Token?",
    explanation:
      "A Local Development Access Token is a temporary authentication token that lets a developer access AEM Author and Publish services in a specific AEMaaCS environment, carrying the same permissions and privileges the developer already has.",
  },
  {
    id: "auth-073",
    category: "Local Development Access Token",
    title: "Through the AEM Developer Console, under Integrations > Local Token",
    reference: "Where do you generate a Local Development Access Token?",
    explanation:
      "Local Development Access Tokens are generated through the AEM Developer Console, reached from Cloud Manager: open the environment's Developer Console, go to the Integrations tab, then the Local Token tab.",
  },
  {
    id: "auth-074",
    category: "Local Development Access Token",
    title: "Membership in the Cloud Manager - Developer product profile, plus AEM Users or AEM Administrators for the target environment",
    reference: "What Admin Console memberships does a developer need to generate a Local Development Access Token?",
    explanation:
      "A developer needs to be a member of the Cloud Manager - Developer IMS Product Profile to access the Developer Console, plus membership in either the AEM Administrators or AEM Users Product Profile for the specific environment's service the token will integrate with.",
  },
  {
    id: "auth-075",
    category: "Local Development Access Token",
    title: "Only membership in either the AEM Administrators or AEM Users Product Profile is required",
    reference: "What's the reduced requirement for generating a Local Development Access Token against a Sandbox AEMaaCS environment?",
    explanation:
      "For a Sandbox AEMaaCS environment specifically, only membership in either the AEM Administrators or AEM Users Product Profile is required to generate a Local Development Access Token — the Cloud Manager - Developer profile requirement is relaxed for sandboxes.",
  },
  {
    id: "auth-076",
    category: "Local Development Access Token",
    title: "It expires daily",
    reference: "How long is a Local Development Access Token valid for before it expires?",
    explanation:
      "A Local Development Access Token expires daily. It's meant purely for quick local testing, not for any kind of persistent or production integration.",
  },
  {
    id: "auth-077",
    category: "Local Development Access Token",
    title: "As the individual user who generated it, with that user's own permissions",
    reference: "As whom does a Local Development Access Token authenticate when used?",
    explanation:
      "A Local Development Access Token authenticates as the specific developer who generated it, carrying that individual's own permissions — unlike Service Credentials, which authenticate as a dedicated Technical Account.",
  },
  {
    id: "auth-078",
    category: "Local Development Access Token",
    title: "It should never be committed to source control or shared, since it grants access to the environment",
    reference: "What's the key security rule for handling a downloaded Local Development Access Token JSON file?",
    explanation:
      "The downloaded token JSON file must never be committed to Git or shared with others — anyone holding it can access the AEMaaCS environment as that developer until the token expires.",
  },
  {
    id: "auth-079",
    category: "Local Development Access Token",
    title: "As the value of the Authorization header, using the Bearer scheme",
    reference: "How is a Local Development Access Token included in an HTTP request to AEM?",
    explanation:
      "Once obtained, the Local Development Access Token is included in the Authorization header of each HTTP request to AEM, using the Bearer scheme: Authorization: Bearer <access_token>.",
  },
]

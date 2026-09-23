import type { Concept } from "../types"

export const technicalAccountPermissionsConcepts: Concept[] = [
  {
    id: "auth-093",
    category: "Configuring Technical Account Permissions",
    title: "No — a valid access token grants identity, not permissions; the technical account still needs AEM group membership",
    reference: "Does obtaining a valid access token automatically grant access to content or actions in AEM?",
    explanation:
      "A valid access token alone does not equal access — it equals identity. The technical account behind that token still needs explicit permissions in AEM, governed by AEM's normal group-and-ACL model, same as any other user.",
  },
  {
    id: "auth-094",
    category: "Configuring Technical Account Permissions",
    title: "After the first API call made with the token, which auto-creates the matching AEM user",
    reference: "When does the technical account's corresponding AEM user actually get created?",
    explanation:
      "The technical account AEM user doesn't exist until the first HTTP request is made using its access token. That first call auto-creates the matching AEM user, after which its permissions can be managed like any other AEM user.",
  },
  {
    id: "auth-095",
    category: "Configuring Technical Account Permissions",
    title: "The integration.email value in the credential JSON — a login name like a UUID at techacct.adobe.com",
    reference: "How do you identify the AEM login name of a technical account?",
    explanation:
      "The Service Credentials JSON includes an integration.email value, which represents the technical account's AEM login name — typically a long UUID-style identifier at the techacct.adobe.com domain.",
  },
  {
    id: "auth-096",
    category: "Configuring Technical Account Permissions",
    title: "Tools > Security > Users, then finding the user by its technical account login name",
    reference: "Where in AEM does an Administrator assign group membership to a technical account user?",
    explanation:
      "An AEM Administrator navigates to Tools > Security > Users, locates the technical account user by its login name (the integration.email value), and adds it to the appropriate group from its Properties.",
  },
  {
    id: "auth-097",
    category: "Configuring Technical Account Permissions",
    title: "The DAM Users group",
    reference: "Which AEM group would you add a technical account to for write access to digital assets?",
    explanation:
      "To grant write access to assets — for example, updating metadata via the Assets HTTP API — the technical account user is added to the DAM Users group, the same as it would be for a human user needing that same access.",
  },
  {
    id: "auth-098",
    category: "Configuring Technical Account Permissions",
    title: "The Contributors group, by default, for the technical account behind the local development token",
    reference: "What group is a Service Credentials-derived access token's technical account typically assigned to by default?",
    explanation:
      "The Service Credentials-derived access token is associated with a technical account AEM user, typically assigned membership in the Contributors AEM user group by default, granting the baseline permissions needed to interact with AEM.",
  },
  {
    id: "auth-099",
    category: "Configuring Technical Account Permissions",
    title: "Yes — its permissions are governed entirely by its group memberships, exactly like a human user's",
    reference: "Once created, does a technical account AEM user follow the same permission model as a human user?",
    explanation:
      "Once the technical account AEM user exists, its permissions can be managed exactly like any other AEM user's — through group membership and ACLs. There's no separate, special permission model for machine identities.",
  },
  {
    id: "auth-100",
    category: "Configuring Technical Account Permissions",
    title: "Reviewing the Advanced tab of an asset's Properties and checking the updated metadata value against what the request set",
    reference: "How do you verify that a technical account's API request actually applied a permission-dependent change, like a metadata update?",
    explanation:
      "To verify a change made via a technical account's access token — for example an updated dc:rights metadata property — log into the AEM environment, navigate to the asset, open its Properties, go to the Advanced tab, and confirm the value matches what the request specified.",
  },
]

import type { Concept } from "../types"

export const adminConsoleOnboardingConcepts: Concept[] = [
  {
    id: "auth-018",
    category: "Admin Console & Org Onboarding",
    title: "Having an organization provisioned as an IMS Organization in Adobe Admin Console",
    reference: "What is the prerequisite before an AEMaaCS customer can use Adobe IMS for authentication?",
    explanation:
      "Before IMS authentication can work, the customer's organization must exist as an IMS Organization in Adobe Admin Console — the portal Adobe customers use to manage product entitlements for their users and groups.",
  },
  {
    id: "auth-019",
    category: "Admin Console & Org Onboarding",
    title: "The System Administrator logs into Cloud Manager, then claims the domain, sets up user directories, and configures the IDP",
    reference: "What is the sequence of steps a System Administrator follows to set up AEMaaCS authentication?",
    explanation:
      "The System Administrator receives an invite, logs into Cloud Manager, claims the organization's domain to confirm ownership (e.g. acme.com), sets up user directories, and configures the Identity Provider in Admin Console for Single Sign-On.",
  },
  {
    id: "auth-020",
    category: "Admin Console & Org Onboarding",
    title: "Confirming ownership of the organization's domain, for example acme.com",
    reference: "What does 'claiming a domain' mean during AEMaaCS onboarding?",
    explanation:
      "Claiming a domain is a verification step where the System Administrator proves ownership of the organization's domain (for example acme.com) as part of setting up Admin Console for the organization.",
  },
  {
    id: "auth-021",
    category: "Admin Console & Org Onboarding",
    title: "The AEM Administrator, working inside AEM itself after the IMS setup is complete",
    reference: "Who manages local groups, permissions, and privileges once IMS onboarding is done?",
    explanation:
      "Once the System Administrator has finished the IMS-level setup (domain, directories, IDP), the AEM Administrator takes over managing local groups, permissions, and privileges inside AEM, the same way they always have.",
  },
  {
    id: "auth-022",
    category: "Admin Console & Org Onboarding",
    title: "As Product Context Instances",
    reference: "How does Admin Console represent an organization's Author and Publish instances?",
    explanation:
      "Admin Console represents customers' Author and Publish instances as Product Context Instances. This lets System and Product Administrators manage access to each instance individually.",
  },
  {
    id: "auth-023",
    category: "Admin Console & Org Onboarding",
    title: "Which instances a given user can access",
    reference: "What do Product Profiles determine within a Product Context Instance in Admin Console?",
    explanation:
      "Product Profiles in Admin Console determine which instances a user can access. Administrators assign users to the appropriate profile for each Author or Publish instance they should be able to reach.",
  },
  {
    id: "auth-024",
    category: "Admin Console & Org Onboarding",
    title: "A SAML 2.0 compliant Identity Provider — but only Enterprise or Federated IDs are supported for customer SSO, not personal Adobe IDs",
    reference: "What kind of identity provider can a customer use for their own Single Sign-On, and what account types does it support?",
    explanation:
      "Customers can use their own SAML 2 compliant IDP for Single Sign-On. Only Enterprise or Federated IDs are supported for this — personal Adobe IDs are not permitted for customer SSO.",
  },
  {
    id: "auth-025",
    category: "Admin Console & Org Onboarding",
    title: "Author, Admin, and Dev users — not external end users of customer sites like site visitors",
    reference: "Which user types does AEMaaCS IMS authentication support?",
    explanation:
      "AEMaaCS offers IMS authentication support only for Author, Admin, and Dev users — the people who work inside AEM. It does not support external end users of customer-facing sites, such as public site visitors; those are handled through SAML on Publish instead.",
  },
]

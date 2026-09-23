import type { Concept } from "../types"

export const userOnboardingMethodsConcepts: Concept[] = [
  {
    id: "auth-026",
    category: "User Onboarding Methods",
    title: "Manual creation, CSV file upload, and the User Sync Tool (UST) syncing from an enterprise directory",
    reference: "What are the three ways to onboard users into Adobe Admin Console?",
    explanation:
      "There are three ways to onboard users, chosen based on customer size and preference: manually creating users through the Admin Console UI, uploading a CSV file for bulk operations, or syncing from an enterprise Active Directory (or OpenLDAP) using the User Sync Tool.",
  },
  {
    id: "auth-027",
    category: "User Onboarding Methods",
    title: "For small numbers of users — generally under roughly 50 — or when already managing other Adobe products this way",
    reference: "When is manual user creation through the Admin Console UI the right choice?",
    explanation:
      "Manual addition through the Admin Console UI works well when you don't have a large number of users to manage, for example fewer than 50 AEM users, or if you're already using this method for other Adobe products like Analytics, Target, or Creative Cloud.",
  },
  {
    id: "auth-028",
    category: "User Onboarding Methods",
    title: "Add, edit, remove, and export users in bulk via CSV file upload",
    reference: "What bulk operations does CSV file upload support in Admin Console?",
    explanation:
      "CSV upload in Admin Console supports adding users by CSV, editing user details by CSV, removing users by CSV, exporting the user list to CSV, and exporting a migration report — making it well suited to mid-size batches of users.",
  },
  {
    id: "auth-029",
    category: "User Onboarding Methods",
    title: "A tool that enables enterprise customers to create and manage Adobe users utilizing Active Directory (or OpenLDAP)",
    reference: "What is the User Sync Tool (UST)?",
    explanation:
      "The User Sync Tool (UST) enables enterprise customers to create and manage Adobe users using their Active Directory, and it's also tested to work with other OpenLDAP directory services. It's targeted at IT Identity Administrators who install and configure it.",
  },
  {
    id: "auth-030",
    category: "User Onboarding Methods",
    title: "One-way — from the directory into Admin Console; edits made in Admin Console are never pushed back to the directory",
    reference: "In which direction does the User Sync Tool synchronize data?",
    explanation:
      "User Sync is entirely one-way: it fetches users from the organization's Active Directory and pushes changes into Admin Console via the Adobe User Management API. Edits made directly in Admin Console never flow back out to the directory.",
  },
  {
    id: "auth-031",
    category: "User Onboarding Methods",
    title: "The Adobe User Management API",
    reference: "What API does the User Sync Tool call to keep Admin Console synchronized with the organization's directory?",
    explanation:
      "When the User Sync Tool runs, it compares the directory's user list against Admin Console and calls the Adobe User Management API to bring Admin Console in line with the organization's Active Directory.",
  },
  {
    id: "auth-032",
    category: "User Onboarding Methods",
    title: "Mapping user groups in the customer's directory to product configurations and user groups in Admin Console",
    reference: "What mapping capability does the User Sync Tool give a system administrator?",
    explanation:
      "The User Sync Tool lets the system admin map user groups in the customer's directory to product configurations and user groups in Admin Console, so directory-side group membership translates into the right AEM access.",
  },
  {
    id: "auth-033",
    category: "User Onboarding Methods",
    title: "Dynamic mapping of new LDAP groups, and dynamic user group creation based on specified criteria",
    reference: "What two features improve the scalability of LDAP-based user management in Admin Console?",
    explanation:
      "Two features improve scalability: dynamic mapping of new LDAP groups for user membership as they change on the directory side, and dynamic user group creation, which automatically creates user groups based on specified criteria.",
  },
]

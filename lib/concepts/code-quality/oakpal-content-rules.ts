import type { Concept } from "../types"

export const oakpalContentRulesConcepts: Concept[] = [
  {
    id: "cq-019",
    title: "Disallow Direct Writes to /apps Without Proper Filtering",
    reference:
      "Which OakPAL rule (Key: OAKPAL-001, Severity: Critical) requires that content package filter roots be scoped to specific subtrees rather than using a broad parent path like /apps/myproject?",
    explanation:
      "OAKPAL-001 (Severity: Critical) requires scoped filter roots. A filter of <filter root='/apps/myproject'/> deletes everything currently under that path on install and replaces it with the package contents — silently overwriting components, templates, or clientlibs from other packages. The fix is to use specific child paths: /apps/myproject/components, /apps/myproject/templates, /apps/myproject/clientlibs.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-020",
    title: "Everything currently under /apps/myproject is deleted and replaced with the package contents",
    reference:
      "What happens at install time when a content package uses the broad filter root '/apps/myproject' instead of scoped child paths?",
    explanation:
      "Content package installation is destructive for covered filter paths: when the filter root is /apps/myproject, the Package Manager first removes all existing JCR nodes under that path and then imports the package content. This means any component, template, or configuration committed by another team that is not in the current package will be permanently deleted on install.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-021",
    title: "Enforce Immutable Content Structure",
    reference:
      "Which OakPAL rule (Key: OAKPAL-002, Severity: Blocker) absolutely prohibits content packages from including any filter targeting paths under /libs?",
    explanation:
      "OAKPAL-002 (Severity: Blocker) protects the /libs area. In AEM, /libs is the immutable layer that contains all out-of-the-box components, templates, and configurations. Any modification to /libs will be overwritten by the next AEM upgrade or AEMaaCS continuous update. The correct approach is the overlay pattern: copy the resource to the same relative path under /apps, where it takes precedence over /libs via the Sling Resource Merger.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-022",
    title: "The overlay pattern — copy the resource to the same relative path under /apps",
    reference:
      "What is the correct AEM pattern for customizing an out-of-the-box component that lives under /libs, without modifying /libs directly?",
    explanation:
      "The overlay pattern is the standard AEM mechanism for customizing /libs without modifying it. You copy the file or node from /libs to the exact same relative path under /apps (e.g., /libs/wcm/foundation/components/text → /apps/wcm/foundation/components/text). The Sling Resource Merger resolves /apps before /libs, so the overlay takes precedence. AEM upgrades update /libs but never touch /apps, preserving your customizations.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-023",
    title: "oakpal:RequiredPrimaryType",
    reference:
      "Which OakPAL rule requires that every JCR node in a content package explicitly declares its jcr:primaryType property?",
    explanation:
      "oakpal:RequiredPrimaryType (Severity: Error) requires that every JCR node explicitly declares jcr:primaryType. Nodes without a primary type may default to nt:base or cause import failures. Common correct types include: cq:Page for page nodes, cq:Component for component definitions, nt:unstructured for generic content nodes, sling:Folder for folder structures, and cq:ClientLibraryFolder for client libraries.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-024",
    title: "No Mutable Properties in /apps",
    reference:
      "Which OakPAL rule (oakpal:ImmutableApps) is violated when a content package stores page title data or runtime content values under /apps instead of /content?",
    explanation:
      "oakpal:ImmutableApps (Severity: Warning) enforces the separation between /apps (code and structural definitions) and /content (mutable content). Under /apps, only component definitions (cq:Component), template structures, clientlibs (cq:ClientLibraryFolder), and OSGi configurations are appropriate. Content pages, user-generated data, and runtime values belong in /content. Mixing them makes deployments unpredictable and breaks the content/code separation.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-025",
    title: "The filters overlap — on install, the merge order is undefined and one filter may delete what the other deployed",
    reference:
      "What problem occurs when a content package has two filter roots where one is an ancestor of the other, violating OAKPAL-005?",
    explanation:
      "OAKPAL-005 (Severity: Major) flags overlapping filter roots. If filter A covers /apps/myproject and filter B covers /apps/myproject/components, B is fully contained within A's scope. On install, the order of application is undefined — one filter may completely delete what the other deployed. Fix: use non-overlapping sibling paths: /apps/myproject/components, /apps/myproject/templates, /apps/myproject/clientlibs.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-026",
    title: "Accidentally packaging rep:policy nodes overwrites production security settings (ACLs) on every install",
    reference:
      "Why must rep:policy nodes (JCR ACL definitions) be explicitly excluded from content packages that are not specifically designed for security management, per OAKPAL-006?",
    explanation:
      "OAKPAL-006 (Severity: Critical) protects production access control configurations. rep:policy nodes define JCR ACLs (who can read/write/delete which nodes). If a development content package accidentally includes these nodes and is deployed to production, the carefully configured production security settings are overwritten with development values. Fix: explicitly exclude rep:policy from all non-security-specific packages using <exclude pattern='.*rep:policy.*'/> in the filter.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-027",
    title: "No /var Nodes in Content Packages",
    reference:
      "Which OakPAL rule (OAKPAL-007) prohibits content packages from including filter roots targeting /var/eventing, /var/audit, or /var/workflow?",
    explanation:
      "OAKPAL-007 (Severity: Major) protects the /var area. In AEM, /var holds runtime-managed data including: /var/eventing (OSGi event queue), /var/audit (audit log), /var/workflow (workflow payloads and history), and /var/oak:index (Lucene search indexes). Packaging this content freezes dynamic runtime data into a static snapshot, breaking AEM's ability to manage these areas. Deploying a package with /var content to production can corrupt all of these systems.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-028",
    title: "Generic category names conflict with AEM core libraries or third-party integrations that use the same name",
    reference:
      "What is the naming convention violation that OAKPAL-008 prevents when defining a client library category as 'utils' or 'common'?",
    explanation:
      "OAKPAL-008 (Severity: Minor) enforces clientlib category namespacing. Client library categories are strings referenced by HTL (data-sly-call='${clientlib.all @ categories=\"myname\"}') and must be globally unique within the AEM instance. Generic names like 'utils', 'common', or 'styles' are likely already used by AEM Core Components, third-party integrations, or other project packages. The fix: namespace with the project name: 'myproject.components.header', 'myproject.base'.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-029",
    title: "/libs (AEM core) and /var (runtime area) — direct /libs writes are Blocker violations; /var packaging is Major",
    reference:
      "Which two repository areas in AEM are considered 'immutable' and must never be modified by content packages?",
    explanation:
      "Two areas have strict OakPAL protections: (1) /libs — OAKPAL-002 (Blocker) makes it completely off-limits for content packages; any customization must use the /apps overlay pattern. (2) /var — OAKPAL-007 (Major) prohibits packaging runtime data areas like eventing, audit logs, and workflow payloads. Both are managed by AEM itself and must never be overwritten by deployments.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-030",
    title: "<filter root='/apps/myproject/components'/> and <filter root='/apps/myproject/templates'/> as separate non-overlapping entries",
    reference:
      "In a compliant AEM content package filter.xml, which of the following filter configurations is correct for deploying components and templates?",
    explanation:
      "Compliant filter configurations use scoped, non-overlapping filter roots for each distinct content area. Instead of <filter root='/apps/myproject'/> (which destructively overwrites the entire project on install), you use separate, focused filters: <filter root='/apps/myproject/components'/>, <filter root='/apps/myproject/templates'/>, <filter root='/apps/myproject/clientlibs'/>. Each filter covers only its specific area and does not overlap with the others.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-031",
    title: "Blocker — the highest severity level; the build fails and deployment is blocked",
    reference:
      "What is the Severity level of OAKPAL-002 (Enforce Immutable Content Structure — /libs must not be modified)?",
    explanation:
      "OAKPAL-002 carries Blocker severity — the most severe level in both SonarQube and OakPAL. A Blocker means the build absolutely cannot proceed; Cloud Manager stops the pipeline and requires the issue to be fixed before any deployment can happen. Modifying /libs is categorized as Blocker because it is guaranteed to break on the next AEM upgrade.",
    category: "OakPAL Content Rules",
  },
  {
    id: "cq-032",
    title: "oakpal:RequiredPrimaryType — Error severity",
    reference:
      "Which OakPAL check validates that jcr:primaryType is explicitly set on every JCR node in a content package, and what severity does it carry?",
    explanation:
      "oakpal:RequiredPrimaryType carries Error severity and requires that every JCR node explicitly declares its jcr:primaryType property. The most common valid types are: cq:Page (for page nodes), cq:Component (for component definitions), nt:unstructured (for generic content), sling:Folder (for folder structures), and cq:ClientLibraryFolder (for clientlibs). Missing primary types can cause Sling resource resolution failures and repository import errors.",
    category: "OakPAL Content Rules",
  },
]

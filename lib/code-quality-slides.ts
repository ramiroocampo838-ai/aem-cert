/**
 * AEM Code Quality Rules Presentation - Slide Content
 * 16 slides (~43 min) covering SonarQube, OakPAL, AEM Best Practices,
 * HTL/Sightly, OSGi/Felix, Dispatcher, Performance, and Security rules.
 *
 * Source: codeQArules.txt — AEM Code Quality Rules Compendium v2.0
 */

// ============================================================================
// INTERFACES
// ============================================================================

export interface CodeExample {
  language: "java" | "javascript" | "typescript" | "xml" | "html" | "htl" | "bash"
  code: string
  title?: string
  highlightLines?: number[]
}

export interface ExpandableContent {
  title: string
  content: string | string[] | { text: string; url?: string }[]
  type?: "list" | "text" | "table"
}

export interface DiagramData {
  type: "architecture" | "flow" | "tree" | "comparison" | "ascii"
  description: string
  elements?: {
    id: string
    label: string
    tooltip?: string
  }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface CodeQualitySlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: {
    text: string
    content: string
  }[]
  backgroundColor?: string
  estimatedTime: number
}

// ============================================================================
// HELPER
// ============================================================================

export function getTotalCodeQualitySlides(): number {
  return codeQualitySlides.length
}

// ============================================================================
// SLIDE CONTENT — 16 SLIDES
// ============================================================================

export const codeQualitySlides: CodeQualitySlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — PORTADA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "AEM Code Quality Rules",
    subtitle: "SonarQube · OakPAL · Best Practices · HTL · OSGi · Dispatcher · Performance · Security",
    content: [
      "Welcome to the AEM Code Quality Rules module",
      "This module covers 58 rules across 8 quality categories used in real AEM projects",
      "Each rule includes a key, severity, and compliant / non-compliant code examples",
      "Covers AEM Developer Certification exam objectives: Section 3 (Code Quality & CI/CD)"
    ],
    expandableSections: [
      {
        title: "Module Overview — 8 Sections, 58 Rules",
        content: [
          "Section 1 · SonarQube Rules — 12 rules (java:S2095, S2068, S1541, S00108, S106, S2259, S1192, S1874, S2972, S1166, S109, S2885)",
          "Section 2 · OakPAL Content Rules — 8 rules (OAKPAL-001 through OAKPAL-008)",
          "Section 3 · AEM Best Practices — 8 rules (AEM-BP-001 through AEM-BP-008)",
          "Section 4 · HTL / Sightly Rules — 6 rules (HTL-001 through HTL-006)",
          "Section 5 · OSGi / Felix Rules — 6 rules (OSGI-001 through OSGI-006)",
          "Section 6 · Dispatcher Rules — 6 rules (DISP-001 through DISP-006)",
          "Section 7 · Performance Best Practices — 6 rules (PERF-001 through PERF-006)",
          "Section 8 · Security Rules — 6 rules (SEC-001 through SEC-006)"
        ],
        type: "list"
      },
      {
        title: "Severity Levels Used in This Module",
        content: [
          "🔴 Blocker — Deployment blocker; must be fixed before go-live",
          "🟠 Critical — Security or data-loss risk; fix immediately",
          "🟡 Major — Significant quality or performance impact; fix this sprint",
          "🔵 Minor — Code smell or style issue; fix when convenient",
          "⚪ Info — Informational best practice recommendation"
        ],
        type: "list"
      }
    ],
    backgroundColor: "from-red-700 via-orange-700 to-amber-700",
    estimatedTime: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — WHY CODE QUALITY MATTERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Why Code Quality Matters in AEM",
    subtitle: "The cost of technical debt at enterprise scale",
    content: [
      "AEM powers enterprise-scale websites with millions of daily visitors — quality failures have direct business impact",
      "Poor code quality in AEM leads to: memory leaks, JCR session exhaustion, security breaches, and production outages",
      "Cloud Manager enforces quality gates that block deployments when SonarQube or OakPAL thresholds are not met",
      "The AEM Developer Certification exam directly tests your knowledge of these rules and their correct application"
    ],
    expandableSections: [
      {
        title: "Common AEM Quality Issues Found in Production",
        content: [
          "ResourceResolver leaks — sessions accumulate until the JCR repository becomes unresponsive",
          "Unbounded JCR queries — full repository traversals that freeze AEM under load",
          "Hardcoded admin credentials — critical security vulnerability in VCS",
          "Business logic in JSPs — untestable, violates MVC separation",
          "Missing /libs protection — accidental overlay of AEM core components",
          "Path-based servlet registration — bypasses authentication pipeline",
          "Synchronous replication from request threads — causes HTTP timeouts for authors",
          "Missing CSRF protection — state-changing endpoints vulnerable to cross-site attacks"
        ],
        type: "list"
      },
      {
        title: "How Quality Rules Are Enforced in AEM Projects",
        content: [
          "Cloud Manager Code Quality Pipeline — runs SonarQube analysis on every non-production pipeline execution",
          "Cloud Manager Quality Gate — blocks promotion to stage/production when Critical/Blocker issues exist",
          "OakPAL checks — run during the Maven build (content-package-maven-plugin) validating JCR package structure",
          "SonarQube server — provides dashboards, trend analysis, and rule customization per project",
          "IDE integration — SonarLint plugin provides real-time feedback in VS Code and IntelliJ IDEA",
          "PR quality checks — many teams enforce no-new-issues policy on every pull request"
        ],
        type: "list"
      },
      {
        title: "Cloud Manager Quality Gate Thresholds",
        content: [
          "Reliability Rating: A (0 Blocker bugs)",
          "Security Rating: A (0 Critical vulnerabilities)",
          "Maintainability Rating: A (Technical debt ratio < 5%)",
          "Coverage: configurable per project (typically ≥ 50%)",
          "Duplication: configurable (typically < 3%)",
          "Any Blocker or Critical issue blocks the pipeline by default"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "SonarQube",
        content: "Static code analysis platform that detects bugs, vulnerabilities, and code smells. Cloud Manager uses a managed SonarQube instance for AEMaaCS projects."
      },
      {
        text: "OakPAL",
        content: "Oak Package Acceptance Library — a Maven plugin that validates JCR content package structure and policies before deployment."
      },
      {
        text: "Cloud Manager",
        content: "Adobe's CI/CD platform for AEMaaCS. Enforces code quality gates before any code reaches production."
      }
    ],
    backgroundColor: "from-slate-800 via-slate-700 to-slate-800",
    estimatedTime: 2
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — SONARQUBE PART 1
  // Rules: java:S2095 · java:S2068 · java:S2259
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "SonarQube Rules — Part 1",
    subtitle: "Resource leaks · Hardcoded credentials · Null pointer dereferences",
    content: [
      "Three Critical-severity rules that cause the most production incidents in AEM projects",
      "• java:S2095 — Resources must be closed (ResourceResolver leaks crash JCR)",
      "• java:S2068 — No hardcoded credentials (passwords in VCS = critical breach)",
      "• java:S2259 — Null pointers must be checked (AEM APIs return null frequently)"
    ],
    expandableSections: [
      {
        title: "java:S2095 — Resources Should Be Closed | Severity: Critical",
        content: [
          "Key: java:S2095 | Type: Bug | Since: SonarJava 4.0",
          "Streams, ResourceResolvers, and Sessions must always be closed.",
          "If a ResourceResolver is never closed, the underlying JCR Session remains open.",
          "Under load, unclosed sessions accumulate and eventually exhaust the repository connection pool.",
          "Fix: Always use try-with-resources for ResourceResolver and InputStream objects."
        ],
        type: "list"
      },
      {
        title: "java:S2068 — No Hardcoded Credentials | Severity: Critical",
        content: [
          "Key: java:S2068 | Type: Vulnerability | Since: SonarQube 4.x",
          "Passwords, API keys, and tokens must never appear as string literals in source code.",
          "Source code is committed to Git — hardcoded secrets are visible to everyone with repo access.",
          "AEM solution: use OSGi configuration with AEM Crypto Support encryption (cipher prefix).",
          "Alternative: use Cloud Manager environment variables for pipeline-injected secrets."
        ],
        type: "list"
      },
      {
        title: "java:S2259 — Null Pointers Should Not Be Dereferenced | Severity: Critical",
        content: [
          "Key: java:S2259 | Type: Bug | Since: SonarJava 3.2",
          "AEM APIs commonly return null: adaptTo(), getChild(), getContentResource(), getResource().",
          "Calling any method on a null reference causes NullPointerException at runtime.",
          "Every call to an AEM API that may return null must be null-checked before use.",
          "Use Optional, Objects.requireNonNullElse(), or explicit if-null guards."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "S2095 — Non-compliant: ResourceResolver never closed",
        code: "// ResourceResolver obtained but never closed — session leak!\nResourceResolver resolver = resolverFactory.getServiceResourceResolver(params);\nSession session = resolver.adaptTo(Session.class);\nNode node = session.getNode(\"/content/site\"); // resolver leaks after method returns"
      },
      {
        language: "java",
        title: "S2095 — Compliant: try-with-resources guarantees closure",
        code: "// try-with-resources closes resolver even on exception\ntry (ResourceResolver resolver = resolverFactory.getServiceResourceResolver(params)) {\n    Session session = resolver.adaptTo(Session.class);\n    Node node = session.getNode(\"/content/site\");\n} // auto-closed here"
      },
      {
        language: "java",
        title: "S2259 — Non-compliant: NPE if resource not found",
        code: "Resource resource = resolver.getResource(path);\n// getResource() returns null if path doesn't exist!\nString title = resource.getValueMap().get(\"jcr:title\", String.class); // NPE risk"
      },
      {
        language: "java",
        title: "S2259 — Compliant: null check before use",
        code: "Resource resource = resolver.getResource(path);\nif (resource != null) {\n    String title = resource.getValueMap().get(\"jcr:title\", \"\");\n}"
      }
    ],
    tooltips: [
      {
        text: "try-with-resources",
        content: "Java 7+ syntax that automatically calls close() on objects implementing AutoCloseable when the try block exits, even on exceptions."
      },
      {
        text: "adaptTo()",
        content: "Sling API method for type adaptation. Returns null if the adaptation is not supported — always null-check the result."
      }
    ],
    backgroundColor: "from-blue-800 via-blue-700 to-indigo-800",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — SONARQUBE PART 2
  // Rules: java:S1541 · java:S00108 · java:S106 · java:S1192
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "SonarQube Rules — Part 2",
    subtitle: "Complexity · Empty catch blocks · System.out · String duplicates",
    content: [
      "Four Major/Minor rules that drive maintainability and operational visibility",
      "• java:S1541 — Methods too complex (cyclomatic complexity > threshold)",
      "• java:S00108 — Empty catch blocks silently swallow exceptions",
      "• java:S106 — System.out bypasses AEM's Sling Log Service",
      "• java:S1192 — Duplicated string literals (JCR property names) create drift"
    ],
    expandableSections: [
      {
        title: "java:S1541 — Cyclomatic Complexity | Severity: Major",
        content: [
          "Key: java:S1541 | Type: Code Smell | Since: SonarJava 3.10",
          "A method's cyclomatic complexity is the number of independent paths through it.",
          "High complexity (default threshold: 10) makes code hard to test and understand.",
          "In AEM: Sling Models and OSGi services with deep conditionals are common offenders.",
          "Fix: Extract private methods for each responsibility, use early returns, delegate to services."
        ],
        type: "list"
      },
      {
        title: "java:S00108 — Empty Catch Blocks | Severity: Major",
        content: [
          "Key: java:S00108 | Type: Code Smell | Since: SonarQube 3.x",
          "An empty catch block means the exception is lost — no log, no rethrow, no recovery.",
          "In AEM this hides failures in JCR saves, workflow completions, and replication events.",
          "Fix: At minimum log the exception with its message and stack trace using SLF4J."
        ],
        type: "list"
      },
      {
        title: "java:S106 — Use Logger Instead of System.out | Severity: Minor",
        content: [
          "Key: java:S106 | Type: Code Smell | Since: SonarQube 2.x",
          "System.out.println writes directly to standard output — not managed by AEM.",
          "AEM uses the Sling Log Service (backed by Logback) to route, throttle, and persist logs.",
          "Log levels (DEBUG/INFO/WARN/ERROR) cannot be controlled on System.out output.",
          "Fix: Declare a private static final Logger using LoggerFactory.getLogger(MyClass.class)."
        ],
        type: "list"
      },
      {
        title: "java:S1192 — String Literal Duplication | Severity: Minor",
        content: [
          "Key: java:S1192 | Type: Code Smell | Since: SonarJava 1.0 | Threshold: 3+ occurrences",
          "Repeated JCR property names like jcr:title or jcr:content hardcoded across methods.",
          "A typo in one occurrence causes silent data loss that is hard to debug.",
          "Fix: Extract as private static final String constants with descriptive names."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "S1541 — Compliant: complexity delegated to small methods",
        code: "public void process(Page page) {\n    if (isValidPage(page)) { processLocalizedPage(page); }\n}\nprivate boolean isValidPage(Page page) {\n    return page != null && page.getContentResource() != null;\n}"
      },
      {
        language: "java",
        title: "S00108 — Non-compliant vs Compliant",
        code: "// NON-COMPLIANT — exception swallowed\ncatch (RepositoryException e) { /* Do nothing */ }\n\n// COMPLIANT — logged with context\ncatch (RepositoryException e) {\n    log.error(\"JCR save failed at {}: {}\", path, e.getMessage(), e);\n}"
      },
      {
        language: "java",
        title: "S1192 — Compliant: constants prevent drift",
        code: "private static final String PN_TITLE = \"jcr:title\";\nprivate static final String PN_DESC  = \"jcr:description\";\n\nString title = vm.get(PN_TITLE, \"\");\nString desc  = vm.get(PN_DESC, \"\");"
      }
    ],
    backgroundColor: "from-blue-800 via-blue-700 to-indigo-800",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — SONARQUBE PART 3
  // Rules: java:S1874 · java:S109 · java:S1166 · java:S2972 · java:S2885
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "SonarQube Rules — Part 3",
    subtitle: "Deprecated APIs · Magic numbers · Exception handling · Thread safety",
    content: [
      "Advanced rules covering upgrade compatibility, readability, and concurrency safety",
      "• java:S1874 — Deprecated API usage accumulates upgrade risk",
      "• java:S109 — Magic numbers reduce code readability and maintainability",
      "• java:S1166 — Exceptions must not be silently discarded",
      "• java:S2885 — OSGi singletons with mutable state cause race conditions"
    ],
    expandableSections: [
      {
        title: "java:S1874 — Deprecated API Usage | Severity: Major",
        content: [
          "Key: java:S1874 | Type: Code Smell | Since: SonarJava 2.1",
          "getAdministrativeResourceResolver() is deprecated since AEM 6.1 and removed in AEMaaCS.",
          "WCMUsePojo is deprecated since AEM 6.3 — Sling Models are the replacement.",
          "Using deprecated APIs causes compilation failures on AEM version upgrades.",
          "Fix: Replace getAdministrativeResourceResolver() with getServiceResourceResolver() + service user mapping."
        ],
        type: "list"
      },
      {
        title: "java:S109 — Magic Numbers | Severity: Minor",
        content: [
          "Key: java:S109 | Type: Code Smell | Since: SonarJava 1.0",
          "A magic number is a numeric literal with no semantic name (100, 50, 3600).",
          "In AEM: query limits, cache TTLs, retry counts, and timeouts are common magic numbers.",
          "Fix: Extract as private static final int/long constants with business-meaningful names."
        ],
        type: "list"
      },
      {
        title: "java:S2885 — Thread Safety in OSGi Services | Severity: Critical",
        content: [
          "Key: java:S2885 | Type: Bug | Since: SonarJava 4.x",
          "OSGi services are singletons shared across ALL concurrent HTTP request threads.",
          "Instance fields holding mutable state (ArrayList, HashMap) cause race conditions.",
          "Symptoms: intermittent NPEs, data corruption, cache inconsistency under load.",
          "Fix: Use ConcurrentHashMap, CopyOnWriteArrayList, AtomicReference, or synchronized blocks.",
          "Better fix: keep OSGi services stateless and store state in request/resource scope."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "S1874 — Deprecated vs Compliant ResourceResolver",
        code: "// DEPRECATED — admin access, no audit trail, removed in AEMaaCS\nresourceResolverFactory.getAdministrativeResourceResolver(null);\n\n// COMPLIANT — service user with least-privilege access\nMap<String, Object> p = Collections.singletonMap(\n    ResourceResolverFactory.SUBSERVICE, \"my-service\");\nresourceResolverFactory.getServiceResourceResolver(p);"
      },
      {
        language: "java",
        title: "S2885 — Non-compliant: mutable singleton field",
        code: "@Component(service = MyService.class)\npublic class MyServiceImpl implements MyService {\n    // NOT thread-safe — race condition under concurrent requests!\n    private List<String> cache = new ArrayList<>();\n}"
      },
      {
        language: "java",
        title: "S2885 — Compliant: thread-safe concurrent collection",
        code: "@Component(service = MyService.class)\npublic class MyServiceImpl implements MyService {\n    // Thread-safe — safe for concurrent access\n    private final List<String> cache =\n        Collections.synchronizedList(new ArrayList<>());\n}"
      }
    ],
    tooltips: [
      {
        text: "OSGi singletons",
        content: "OSGi @Component services are instantiated once and shared across all requests. Any mutable instance field is shared between all concurrent callers."
      }
    ],
    backgroundColor: "from-blue-800 via-blue-700 to-indigo-800",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — OAKPAL PART 1
  // Rules: OAKPAL-001 · OAKPAL-002 · oakpal:RequiredPrimaryType
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "OakPAL Content Rules — Part 1",
    subtitle: "/apps write scope · /libs immutability · Required primary types",
    content: [
      "OakPAL validates JCR content package structure before deployment — failures block the build",
      "• OAKPAL-001 — /apps filters must be scoped; broad filters overwrite other teams' work",
      "• OAKPAL-002 — /libs must NEVER be modified; overlay via /apps instead",
      "• oakpal:RequiredPrimaryType — every JCR node must declare jcr:primaryType"
    ],
    expandableSections: [
      {
        title: "OAKPAL-001 — Disallow Direct Writes to /apps | Severity: Critical",
        content: [
          "Key: OAKPAL-001 | Type: Violation | Since: OakPAL 1.0",
          "A filter root of /apps/myproject matches everything under that path.",
          "On install, it deletes everything currently under that path and replaces with the package contents.",
          "This overwrites components, templates, and clientlibs from other packages or other teams.",
          "Fix: Use specific filter roots: /apps/myproject/components, /apps/myproject/templates — never the parent."
        ],
        type: "list"
      },
      {
        title: "OAKPAL-002 — /libs Must Not Be Modified | Severity: Blocker",
        content: [
          "Key: OAKPAL-002 | Type: Violation | Since: OakPAL 1.0",
          "/libs is AEM's read-only layer containing all out-of-the-box components and configurations.",
          "Modifying /libs directly means AEM upgrades will overwrite your changes.",
          "The Sling Resource Merger uses /apps as an overlay layer: same path under /apps takes precedence.",
          "Rule: NEVER include a filter for any path under /libs in a deployable content package."
        ],
        type: "list"
      },
      {
        title: "oakpal:RequiredPrimaryType — Node Type Required | Severity: Error",
        content: [
          "Key: oakpal:RequiredPrimaryType | Type: Content Rule | Since: OakPAL 1.0",
          "Every JCR node must have an explicit jcr:primaryType property.",
          "Nodes without a primary type default to nt:base which may break Sling resolution.",
          "Common types: cq:Page, cq:Component, nt:unstructured, sling:Folder, cq:ClientLibraryFolder.",
          "Fix: Always declare jcr:primaryType in every .content.xml node definition."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "xml",
        title: "OAKPAL-001 — Non-compliant: overly broad filter",
        code: "<!-- Overwrites EVERYTHING under /apps/myproject on install -->\n<filter root=\"/apps/myproject\"/>"
      },
      {
        language: "xml",
        title: "OAKPAL-001 — Compliant: scoped filters",
        code: "<!-- Scoped to specific subtrees only -->\n<filter root=\"/apps/myproject/components\"/>\n<filter root=\"/apps/myproject/templates\"/>\n<filter root=\"/apps/myproject/clientlibs\"/>"
      },
      {
        language: "xml",
        title: "oakpal:RequiredPrimaryType — Compliant: explicit types",
        code: "<jcr:root xmlns:jcr=\"http://www.jcp.org/jcr/1.0\"\n          jcr:primaryType=\"nt:unstructured\">\n    <content jcr:primaryType=\"sling:Folder\">\n        <site jcr:primaryType=\"cq:Page\"/>\n    </content>\n</jcr:root>"
      }
    ],
    diagrams: [
      {
        type: "tree",
        description: "JCR Repository — Mutable vs Immutable Areas",
        asciiContent: "/\n├── libs/          🔒 IMMUTABLE — AEM core (never modify)\n│   ├── sling/\n│   └── cq/\n├── apps/          ✏️  CODE — overlays, components, configs\n│   └── myproject/\n│       ├── components/   ← filter root here (scoped)\n│       └── templates/    ← filter root here (scoped)\n├── content/       📄 CONTENT — pages, assets\n└── var/           ⚙️  RUNTIME — AEM managed (never package)"
      }
    ],
    backgroundColor: "from-amber-700 via-yellow-700 to-orange-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — OAKPAL PART 2
  // Rules: oakpal:ImmutableApps · OAKPAL-005 · OAKPAL-006 · OAKPAL-007 · OAKPAL-008
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "OakPAL Content Rules — Part 2",
    subtitle: "Immutable /apps · Overlapping filters · ACL policies · /var · Clientlib naming",
    content: [
      "Five additional OakPAL rules covering package content integrity and naming conventions",
      "• oakpal:ImmutableApps — no mutable content data under /apps",
      "• OAKPAL-005 — overlapping filter roots cause unpredictable merges",
      "• OAKPAL-006 — rep:policy (ACL) nodes must not be included accidentally",
      "• OAKPAL-007 — /var is a runtime area managed by AEM; never package it",
      "• OAKPAL-008 — clientlib categories must be namespaced to avoid conflicts"
    ],
    expandableSections: [
      {
        title: "oakpal:ImmutableApps — No Mutable Content in /apps | Severity: Warning",
        content: [
          "Key: oakpal:ImmutableApps | Type: Content Rule | Since: OakPAL 2.1",
          "/apps is a structural area for component definitions, templates, and OSGi configs.",
          "Content pages, user data, and runtime values belong in /content, not /apps.",
          "Properties like pageTitle or live content data stored in /apps are incorrect."
        ],
        type: "list"
      },
      {
        title: "OAKPAL-005 — Overlapping Filter Roots | Severity: Major",
        content: [
          "Key: OAKPAL-005 | Type: Violation | Since: OakPAL 1.3",
          "If filter A covers /apps/myproject and filter B covers /apps/myproject/components, they overlap.",
          "On install, the merge order is undefined — one filter may delete what the other deployed.",
          "Fix: Ensure all filter roots are non-overlapping sibling paths."
        ],
        type: "list"
      },
      {
        title: "OAKPAL-006 — rep:policy (ACL) Nodes | Severity: Critical",
        content: [
          "Key: OAKPAL-006 | Type: Violation | Since: OakPAL 1.1",
          "rep:policy nodes hold JCR access control lists (ACLs).",
          "Accidentally packaging them overwrites production security settings on install.",
          "Fix: Explicitly exclude rep:policy from all non-security packages using <exclude> patterns."
        ],
        type: "list"
      },
      {
        title: "OAKPAL-007 — No /var in Packages | Severity: Major",
        content: [
          "Key: OAKPAL-007 | Type: Violation | Since: OakPAL 1.0",
          "/var holds AEM runtime data: event queues, audit logs, workflow payloads, Lucene indexes.",
          "Packaging /var content makes it static, breaking AEM's runtime management.",
          "Never include /var/eventing, /var/audit, /var/workflow, or /var/oak:index in content packages."
        ],
        type: "list"
      },
      {
        title: "OAKPAL-008 — Clientlib Category Naming | Severity: Minor",
        content: [
          "Key: OAKPAL-008 | Type: Best Practice | Since: OakPAL 2.0",
          "Client library category names must be unique across the entire AEM instance.",
          "Generic names like utils, common, or styles conflict with AEM core or third-party libraries.",
          "Fix: Namespace categories with the project name: myproject.components.header, myproject.base."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "xml",
        title: "OAKPAL-006 — Compliant: ACLs explicitly excluded from package",
        code: "<filter root=\"/apps/myproject\">\n    <include pattern=\"/apps/myproject/.*\"/>\n    <!-- Explicitly exclude ACL nodes -->\n    <exclude pattern=\"/apps/myproject/.*rep:policy.*\"/>\n</filter>"
      },
      {
        language: "xml",
        title: "OAKPAL-008 — Compliant: namespaced clientlib category",
        code: "<jcr:root jcr:primaryType=\"cq:ClientLibraryFolder\"\n          categories=\"[myproject.components.header]\"\n          dependencies=\"[granite.jquery]\"/>"
      }
    ],
    backgroundColor: "from-amber-700 via-yellow-700 to-orange-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8 — AEM BEST PRACTICES PART 1
  // Rules: AEM-BP-001 · AEM-BP-002 · AEM-BP-004 · AEM-BP-005
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "AEM Best Practices — Part 1",
    subtitle: "Sling Models · JSP logic · @PostConstruct · ValueMap",
    content: [
      "Four foundational best practices for AEM component development",
      "• AEM-BP-001 — Use Sling Models instead of legacy WCMUsePojo",
      "• AEM-BP-002 — Keep all business logic OUT of JSP and HTL scripts",
      "• AEM-BP-004 — Use @PostConstruct for Sling Model initialization",
      "• AEM-BP-005 — Use ValueMap for type-safe property access"
    ],
    expandableSections: [
      {
        title: "AEM-BP-001 — Sling Models vs WCMUsePojo | Severity: Major",
        content: [
          "Key: AEM-BP-001 | Type: Best Practice | Since: AEM 6.3",
          "WCMUsePojo requires a running AEM instance to test — no unit testing possible.",
          "Sling Models use annotations (@Model, @Inject, @ValueMapValue) and can be tested with AEM Mocks.",
          "Sling Models support defaultInjectionStrategy = OPTIONAL for null-safe injection.",
          "The @Model annotation registers the class with Sling's ModelFactory automatically.",
          "Migration: replace extends WCMUsePojo with @Model(adaptables = Resource.class)."
        ],
        type: "list"
      },
      {
        title: "AEM-BP-002 — No Business Logic in JSP/HTL | Severity: Major",
        content: [
          "Key: AEM-BP-002 | Type: Code Smell | Since: AEM 6.x",
          "JSP scriptlets (<%...%>) in template files are impossible to unit test.",
          "HTL is intentionally restricted to prevent logic — expressions only, no scriptlets.",
          "All data retrieval, computation, and transformation belongs in Sling Models.",
          "Models are testable with WCMTesting framework and AEM Mocks (io.wcm or Apache Sling)."
        ],
        type: "list"
      },
      {
        title: "AEM-BP-004 — Use @PostConstruct | Severity: Major",
        content: [
          "Key: AEM-BP-004 | Type: Bug | Since: AEM 6.0",
          "A Sling Model's constructor runs BEFORE Sling injection completes.",
          "Any injected fields (@Inject, @ValueMapValue) are null inside the constructor.",
          "@PostConstruct is called AFTER all injection, making it safe for initialization.",
          "Use @PostConstruct for expensive computation, child resource iteration, or query execution."
        ],
        type: "list"
      },
      {
        title: "AEM-BP-005 — ValueMap for Property Access | Severity: Major",
        content: [
          "Key: AEM-BP-005 | Type: Best Practice | Since: AEM 6.x",
          "JCR Node API: requires null check, throws RepositoryException (checked), verbose syntax.",
          "ValueMap: type-safe get(key, defaultValue), no checked exceptions, concise.",
          "ValueMap.get(key, type) returns the correct Java type without manual casting.",
          "Always prefer resource.getValueMap() over resource.adaptTo(Node.class)."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "AEM-BP-001 — Compliant: Sling Model with annotation injection",
        code: "@Model(\n    adaptables = Resource.class,\n    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL\n)\npublic class ArticleModel {\n    @ValueMapValue(name = \"jcr:title\")  private String title;\n    @ChildResource                      private Resource image;\n    public String getTitle()            { return title; }\n}"
      },
      {
        language: "java",
        title: "AEM-BP-004 — @PostConstruct: safe initialization",
        code: "@Model(adaptables = Resource.class)\npublic class MyModel {\n    @Inject private Resource resource;\n    private String computed;\n\n    @PostConstruct\n    protected void init() {\n        // injection is complete here — safe to use injected fields\n        this.computed = resource.getValueMap().get(\"data\", \"\");\n    }\n}"
      },
      {
        language: "java",
        title: "AEM-BP-005 — ValueMap vs JCR Node API",
        code: "// NON-COMPLIANT: JCR API — verbose + checked exceptions\nNode node = resource.adaptTo(Node.class);\nif (node != null && node.hasProperty(\"jcr:title\")) {\n    title = node.getProperty(\"jcr:title\").getString();\n}\n\n// COMPLIANT: ValueMap — concise, type-safe, null-safe\nString title = resource.getValueMap().get(\"jcr:title\", \"\");"
      }
    ],
    backgroundColor: "from-emerald-700 via-teal-700 to-cyan-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9 — AEM BEST PRACTICES PART 2
  // Rules: AEM-BP-003 · AEM-BP-006 · AEM-BP-007 · AEM-BP-008
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "AEM Best Practices — Part 2",
    subtitle: "Service users · QueryBuilder · Async replication · Clean injection",
    content: [
      "Four advanced best practices for secure and performant AEM backend development",
      "• AEM-BP-003 — Always use Service Users instead of Administrative ResourceResolver",
      "• AEM-BP-006 — Use QueryBuilder API instead of raw SQL2 queries",
      "• AEM-BP-007 — Never call replicator synchronously from a request thread",
      "• AEM-BP-008 — Use @ValueMapValue and @ChildResource for clean injection"
    ],
    expandableSections: [
      {
        title: "AEM-BP-003 — Service Users (Not Admin Resolver) | Severity: Critical",
        content: [
          "Key: AEM-BP-003 | Type: Vulnerability | Since: AEM 6.1",
          "getAdministrativeResourceResolver() grants full admin privileges with no audit trail.",
          "Service users follow the principle of least privilege — only access what they need.",
          "Setup: create system user in /system/useradmin, grant specific ACLs, map in Sling Service User Mapper.",
          "Declare the subservice name in getServiceResourceResolver(params) calls."
        ],
        type: "list"
      },
      {
        title: "AEM-BP-006 — QueryBuilder API | Severity: Major",
        content: [
          "Key: AEM-BP-006 | Type: Best Practice | Since: AEM 6.x",
          "Raw SQL2 queries with string concatenation create SQL injection risks.",
          "QueryBuilder uses predicate maps — no string concatenation, injection-safe by design.",
          "Built-in support for p.limit (result cap), p.offset (pagination), and orderby.",
          "Integrates with AEM's Query Debugger (/libs/cq/search/content/querydebug.html) for tuning."
        ],
        type: "list"
      },
      {
        title: "AEM-BP-007 — Async Replication | Severity: Major",
        content: [
          "Key: AEM-BP-007 | Type: Performance | Since: AEM 6.x",
          "replicator.replicate() is a synchronous blocking call — it waits for replication to complete.",
          "Called from a Sling request thread, it blocks the HTTP response until replication finishes.",
          "Under load this causes HTTP 504 Gateway Timeouts for content authors.",
          "Fix: Offload replication to a Sling Job (JobManager.addJob) for async processing."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "AEM-BP-006 — Compliant: QueryBuilder with predicates",
        code: "Map<String, String> map = new HashMap<>();\nmap.put(\"type\",    \"cq:Page\");\nmap.put(\"path\",    \"/content/mysite\");  // bounded by path\nmap.put(\"p.limit\", \"50\");              // always limit results\n\nSearchResult result = queryBuilder\n    .createQuery(PredicateGroup.create(map), session)\n    .getResult();"
      },
      {
        language: "java",
        title: "AEM-BP-007 — Compliant: async job instead of sync replication",
        code: "// NON-COMPLIANT: blocks HTTP response thread\nreplicator.replicate(session, ReplicationActionType.ACTIVATE, path);\n\n// COMPLIANT: offloaded to Sling Jobs\nMap<String, Object> props = new HashMap<>();\nprops.put(\"path\", path);\njobManager.addJob(\"com/myproject/replication\", props);"
      }
    ],
    backgroundColor: "from-emerald-700 via-teal-700 to-cyan-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10 — HTL / SIGHTLY RULES
  // Rules: HTL-001 through HTL-006
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "HTL / Sightly Rules",
    subtitle: "XSS escaping · Conditionals · Model instantiation · Loops",
    content: [
      "HTL (HTML Template Language) is AEM's server-side templating engine since AEM 6.0",
      "• HTL-001 — Never use context='unsafe' — it disables ALL XSS protection",
      "• HTL-002 — Use data-sly-test, not data-sly-unwrap, for conditional rendering",
      "• HTL-003 — Instantiate data-sly-use models once and reuse the variable",
      "• HTL-004 — Keep expressions simple; push logic to Sling Models",
      "• HTL-005 — Use itemList for loop metadata (index, first, last, count)",
      "• HTL-006 — Include sub-components via data-sly-resource for full Sling resolution"
    ],
    expandableSections: [
      {
        title: "HTL-001 — Never Use context='unsafe' | Severity: Critical",
        content: [
          "Key: HTL-001 | Type: Vulnerability | Since: HTL 1.0",
          "HTL automatically applies context-aware XSS escaping based on where the expression appears.",
          "context='unsafe' disables ALL escaping — any user-controlled value becomes an XSS vector.",
          "Available safe contexts: html (sanitized), uri (URL-encoded), scriptString (JS-safe), styleToken.",
          "Default escaped context: attribute values use attribute escaping, text nodes use HTML encoding."
        ],
        type: "list"
      },
      {
        title: "HTL-002 — data-sly-test vs data-sly-unwrap | Severity: Minor",
        content: [
          "Key: HTL-002 | Type: Code Smell | Since: HTL 1.0",
          "data-sly-unwrap removes the wrapper element but STILL renders all child content.",
          "data-sly-test with a falsy value suppresses the element AND all its children.",
          "Use data-sly-test to conditionally show/hide entire sections."
        ],
        type: "list"
      },
      {
        title: "HTL-005 — itemList Loop Metadata | Severity: Minor",
        content: [
          "Key: HTL-005 | Type: Best Practice | Since: HTL 1.0",
          "When iterating with data-sly-list.item, HTL creates a companion itemList variable automatically.",
          "itemList.index (0-based), itemList.count (total), itemList.first, itemList.last, itemList.odd, itemList.even.",
          "No extra Sling Model code needed for loop position information."
        ],
        type: "list"
      },
      {
        title: "HTL-006 — data-sly-resource for Sub-Components | Severity: Major",
        content: [
          "Key: HTL-006 | Type: Best Practice | Since: HTL 1.0",
          "data-sly-include includes file content without Sling resolution — overlays do not apply.",
          "data-sly-resource triggers full Sling request processing: resource type resolution, overlays, error handling.",
          "Always use data-sly-resource for including child AEM components."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "htl",
        title: "HTL-001 — Safe context usage (never 'unsafe')",
        code: "<!-- Text node: auto HTML-encoded -->\n<p>${model.description}</p>\n\n<!-- URI context: URL-encoded -->\n<a href=\"${model.linkUrl @ context='uri'}\">Link</a>\n\n<!-- HTML context: sanitized rich text -->\n<div>${model.richText @ context='html'}</div>\n\n<!-- NEVER use this: disables all protection -->\n<!-- <div>${model.content @ context='unsafe'}</div> -->"
      },
      {
        language: "htl",
        title: "HTL-003 — Single instantiation, variable reused",
        code: "<!-- Instantiate once, use everywhere -->\n<div data-sly-use.model=\"com.example.MyModel\">\n    <h1>${model.title}</h1>\n    <p>${model.description}</p>\n    <span>${model.author}</span>\n</div>"
      },
      {
        language: "htl",
        title: "HTL-005 — itemList loop metadata",
        code: "<ul>\n    <li data-sly-list.item=\"${model.items}\"\n        class=\"${itemList.first ? 'first' : ''} ${itemList.odd ? 'odd' : 'even'}\">\n        ${itemList.index + 1}. ${item.title} (of ${itemList.count})\n    </li>\n</ul>"
      }
    ],
    tooltips: [
      {
        text: "HTL",
        content: "HTML Template Language — AEM's built-in templating engine. Replaces JSP for component rendering. Provides automatic XSS escaping and restricts logic to prevent abuse."
      },
      {
        text: "context-aware XSS escaping",
        content: "HTL automatically detects whether an expression is in an HTML text node, attribute value, script, or style context and applies the appropriate escaping strategy."
      }
    ],
    backgroundColor: "from-violet-700 via-purple-700 to-fuchsia-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11 — OSGi / FELIX RULES
  // Rules: OSGI-001 through OSGI-006
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "OSGi / Felix Rules",
    subtitle: "@Component · Lifecycle · Config metatype · Servlet registration",
    content: [
      "OSGi Declarative Services (DS) is the component model underlying all AEM Java services",
      "• OSGI-001 — All services must have @Component annotation to register in the container",
      "• OSGI-002 — Use @Activate, @Deactivate, @Modified for proper lifecycle management",
      "• OSGI-003 — @ObjectClassDefinition enables OSGi config UI and type-safe configuration",
      "• OSGI-004 — Use DYNAMIC cardinality for optional/volatile service references",
      "• OSGI-005 — Register servlets with resourceTypes, never with URL paths",
      "• OSGI-006 — Never put business logic in BundleActivator"
    ],
    expandableSections: [
      {
        title: "OSGI-001 — @Component Annotation Required | Severity: Critical",
        content: [
          "Key: OSGI-001 | Type: Bug | Since: AEM 6.x / DS 1.3",
          "Without @Component, the class is never registered in the OSGi service registry.",
          "Other services that @Reference it will never receive an injection — they stay deactivated.",
          "The service will not appear in the Felix Web Console under /system/console/components."
        ],
        type: "list"
      },
      {
        title: "OSGI-005 — Servlet Registration: resourceTypes vs Paths | Severity: Critical",
        content: [
          "Key: OSGI-005 | Type: Security | Since: AEM 6.x",
          "Path-based registration (/bin/myservlet) bypasses the Sling authentication handler.",
          "Any anonymous user can call /bin/myservlet without credentials if Dispatcher filters miss it.",
          "resourceType + selector registration goes through the full Sling security pipeline.",
          "The correct annotations: @SlingServletResourceTypes(resourceTypes, selectors, extensions, methods)."
        ],
        type: "list"
      },
      {
        title: "OSGI-003 — @ObjectClassDefinition for Configs | Severity: Major",
        content: [
          "Key: OSGI-003 | Type: Best Practice | Since: AEM 6.3 / DS 1.3",
          "@ObjectClassDefinition generates OSGi metatype XML — enables the AEM config UI.",
          "@AttributeDefinition provides field name, description, type, and default value.",
          "Without metatype, config values cannot be set via the Felix Web Console or Cloud Manager."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "OSGI-002 — Compliant: proper lifecycle annotations",
        code: "@Component(service = MyService.class)\npublic class MyServiceImpl implements MyService {\n    @Activate\n    protected void activate(ComponentContext ctx) { /* init resources */ }\n\n    @Deactivate\n    protected void deactivate() { /* release resources */ }\n\n    @Modified\n    protected void modified(ComponentContext ctx) { /* config updated */ }\n}"
      },
      {
        language: "java",
        title: "OSGI-003 — Compliant: metatype configuration",
        code: "@ObjectClassDefinition(name = \"External API Config\")\npublic @interface MyServiceConfig {\n    @AttributeDefinition(name = \"API Endpoint\")\n    String apiEndpoint() default \"https://api.example.com\";\n\n    @AttributeDefinition(name = \"Timeout (ms)\")\n    int timeout() default 5000;\n}"
      },
      {
        language: "java",
        title: "OSGI-005 — Compliant: resourceType-based servlet",
        code: "// Requires authentication — safe\n@SlingServletResourceTypes(\n    resourceTypes = \"myproject/components/search\",\n    selectors     = \"results\",\n    extensions    = \"json\",\n    methods       = HttpConstants.METHOD_GET\n)\npublic class SearchServlet extends SlingSafeMethodsServlet { }"
      }
    ],
    tooltips: [
      {
        text: "Declarative Services",
        content: "OSGi DS (DS 1.3+) is the standard for @Component, @Reference, @Activate annotations in AEM. Used by all AEM OSGi services since AEM 6.3."
      }
    ],
    backgroundColor: "from-sky-700 via-cyan-700 to-teal-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 12 — DISPATCHER RULES PART 1
  // Rules: DISP-001 · DISP-002 · DISP-003
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Dispatcher Rules — Part 1",
    subtitle: "Caching strategy · Security filters · Dangerous selectors",
    content: [
      "The AEM Dispatcher is a reverse proxy and caching layer sitting in front of AEM Publisher",
      "• DISP-001 — Enable selective caching for GET requests (HTML, JSON, clientlibs)",
      "• DISP-002 — Restrict ALL access by default; explicitly allow only required URLs",
      "• DISP-003 — Block selectors that expose raw JCR internals (.infinity, .query, .childrenlist)"
    ],
    expandableSections: [
      {
        title: "DISP-001 — Dispatcher Caching Rules | Severity: Major",
        content: [
          "Key: DISP-001 | Type: Performance | Since: Dispatcher 4.x",
          "Without caching, every HTTP request hits the AEM Publisher — cannot scale under load.",
          "Cache HTML pages, JSON model responses, and versioned clientlib assets.",
          "Never cache POST requests, personalized responses, or authentication-required content.",
          "Caching strategy: /rules { deny *, then allow specific patterns }."
        ],
        type: "list"
      },
      {
        title: "DISP-002 — Default Deny Filter Policy | Severity: Critical",
        content: [
          "Key: DISP-002 | Type: Security | Since: Dispatcher 4.x",
          "A /filter starting with /0001 { allow * } exposes ALL AEM paths to the internet.",
          "This includes /crx/de, /system/console, /bin/wcm, /admin — all critical admin tools.",
          "Correct approach: deny everything by default, then explicitly allow only needed paths.",
          "Block: /crx/*, /system/*, /admin*, /bin/wcm/*, *.infinity.json, *.query.json."
        ],
        type: "list"
      },
      {
        title: "DISP-003 — Block Dangerous JCR Selectors | Severity: Critical",
        content: [
          "Key: DISP-003 | Type: Security | Since: Dispatcher 4.x",
          ".infinity.json — dumps entire JCR subtree as JSON (all properties, all children).",
          ".query.json — executes arbitrary JCR queries from URL parameters.",
          ".childrenlist.json — lists all child nodes of any resource.",
          ".assets.json — exposes DAM asset metadata.",
          "These selectors were designed for development tools, not public internet exposure."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "bash",
        title: "DISP-001 — Compliant: selective caching rules",
        code: "/cache {\n    /docroot \"/var/www/html\"\n    /rules {\n        /0001 { /type \"deny\"  /glob \"*\"                 }\n        /0002 { /type \"allow\" /glob \"*.html\"            }\n        /0003 { /type \"allow\" /glob \"*.json\"            }\n        /0004 { /type \"allow\" /glob \"/etc.clientlibs/*\" }\n    }\n}"
      },
      {
        language: "bash",
        title: "DISP-002 — Compliant: default deny security filter",
        code: "/filter {\n    /0001 { /type \"deny\"  /glob \"*\"                        }\n    /0002 { /type \"allow\" /method \"GET\" /url \"/content/*\" }\n    /0003 { /type \"allow\" /method \"GET\" /url \"/etc.clientlibs/*\" }\n    /0004 { /type \"deny\"  /url \"/crx/*\"                  }\n    /0005 { /type \"deny\"  /url \"/system/*\"               }\n    /0006 { /type \"deny\"  /url \"/admin*\"                 }\n    /0007 { /type \"deny\"  /url \"*.infinity.json\"         }\n}"
      },
      {
        language: "bash",
        title: "DISP-003 — Block dangerous selectors",
        code: "/filter {\n    /0020 { /type \"deny\" /selectors \"infinity\"      }\n    /0021 { /type \"deny\" /selectors \"tidy\"          }\n    /0022 { /type \"deny\" /selectors \"childrenlist\"  }\n    /0023 { /type \"deny\" /selectors \"query\"         }\n    /0024 { /type \"deny\" /selectors \"assets\"        }\n}"
      }
    ],
    tooltips: [
      {
        text: "Dispatcher",
        content: "AEM's reverse proxy and caching server (Apache httpd + mod_dispatcher). Sits in front of all AEM Publisher instances, serving cached content and enforcing security filters."
      }
    ],
    backgroundColor: "from-stone-700 via-zinc-700 to-slate-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 13 — DISPATCHER RULES PART 2
  // Rules: DISP-004 · DISP-005 · DISP-006
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Dispatcher Rules — Part 2",
    subtitle: "Cache invalidation · HTTPS enforcement · Static asset caching",
    content: [
      "Three Dispatcher rules covering cache lifecycle and transport security",
      "• DISP-004 — Scope cache invalidation to only the changed content tree",
      "• DISP-005 — All traffic must use HTTPS; HTTP must permanently redirect to HTTPS",
      "• DISP-006 — Versioned static assets (clientlibs) must be served with immutable cache headers"
    ],
    expandableSections: [
      {
        title: "DISP-004 — Scoped Cache Invalidation | Severity: Major",
        content: [
          "Key: DISP-004 | Type: Performance | Since: Dispatcher 4.x",
          "When an author activates a page, the replication agent sends a cache invalidation to Dispatcher.",
          "A broad /invalidate { allow * } flushes the ENTIRE cache on every single activation.",
          "Full cache flush means 100% cache miss rate immediately after any content change.",
          "Fix: scope /invalidate rules to only content paths (/content/*, /etc/designs/*) and HTML files."
        ],
        type: "list"
      },
      {
        title: "DISP-005 — Enforce HTTPS | Severity: Critical",
        content: [
          "Key: DISP-005 | Type: Security | Since: Dispatcher 4.x",
          "HTTP traffic transmits cookies, session tokens, and form data in plaintext.",
          "Permanent redirect (301) from HTTP to HTTPS ensures browsers and crawlers use TLS.",
          "HSTS (Strict-Transport-Security) header prevents protocol downgrade attacks.",
          "Minimum TLS version: TLS 1.2. Disable SSLv3, TLSv1, TLSv1.1 explicitly."
        ],
        type: "list"
      },
      {
        title: "DISP-006 — Immutable Cache Headers for clientlibs | Severity: Major",
        content: [
          "Key: DISP-006 | Type: Performance | Since: Dispatcher 4.x",
          "AEM generates fingerprinted (versioned) URLs for all client library assets.",
          "Example: /etc.clientlibs/myproject/clientlibs/base.lc-abc123.min.js",
          "The URL changes when content changes — so the old URL can be cached forever.",
          "Cache-Control: max-age=31536000, immutable tells browsers never to re-request it."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "bash",
        title: "DISP-004 — Compliant: scoped cache invalidation",
        code: "/invalidate {\n    /0001 { /type \"deny\"  /glob \"*\"              }\n    /0002 { /type \"allow\" /glob \"/content/*\"     }\n    /0003 { /type \"allow\" /glob \"/etc/designs/*\" }\n    /0004 { /type \"allow\" /glob \"*.html\"         }\n}"
      },
      {
        language: "bash",
        title: "DISP-005 — HTTP to HTTPS redirect",
        code: "<VirtualHost *:80>\n    ServerName www.example.com\n    Redirect permanent / https://www.example.com/\n</VirtualHost>\n\n<VirtualHost *:443>\n    SSLEngine on\n    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1\n    Header always set Strict-Transport-Security \"max-age=31536000\"\n</VirtualHost>"
      },
      {
        language: "bash",
        title: "DISP-006 — Immutable headers for versioned clientlibs",
        code: "<Directory \"/var/www/html/etc.clientlibs\">\n    Header set Cache-Control \"max-age=31536000, public, immutable\"\n    Header set Vary \"Accept-Encoding\"\n</Directory>"
      }
    ],
    backgroundColor: "from-stone-700 via-zinc-700 to-slate-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 14 — PERFORMANCE BEST PRACTICES
  // Rules: PERF-001 through PERF-006
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Performance Best Practices",
    subtitle: "Queries · Schedulers · Images · Caching · Clientlibs · Compression",
    content: [
      "Performance rules prevent the most common AEM production incidents",
      "• PERF-001 — Never run unbounded JCR queries (the #1 cause of AEM outages)",
      "• PERF-002 — Use Sling Scheduler for background tasks — never create raw threads",
      "• PERF-003 — Serve images via AEM Adaptive Image Servlet — not original DAM renditions",
      "• PERF-004 — Cache expensive computations in @PostConstruct, not in getters",
      "• PERF-005 — Scope clientlib loading — never load one global bundle for all pages",
      "• PERF-006 — Enable Gzip/Brotli compression for all text-based content types"
    ],
    expandableSections: [
      {
        title: "PERF-001 — Unbounded JCR Queries | Severity: Critical",
        content: [
          "Key: PERF-001 | Type: Performance | Since: AEM 6.x",
          "A query without ISDESCENDANTNODE path restriction scans the ENTIRE repository.",
          "A query without p.limit or setLimit() loads ALL matching nodes — potentially millions.",
          "Under production load these queries freeze the JCR query engine for all other threads.",
          "Always: add path restriction + result limit + ensure a Lucene index covers the query.",
          "Use AEM Query Debugger (/libs/cq/search/content/querydebug.html) to verify index usage."
        ],
        type: "list"
      },
      {
        title: "PERF-002 — Sling Scheduler vs Raw Threads | Severity: Critical",
        content: [
          "Key: PERF-002 | Type: Bug | Since: AEM 6.x",
          "Raw Java Thread objects created in OSGi components are unmanaged by the container.",
          "On bundle stop/restart, running threads are not interrupted — they keep running and leak memory.",
          "Sling Scheduler: managed lifecycle, cron expressions, concurrent execution control.",
          "Sling Jobs API: persistent, retryable, distributed across cluster nodes."
        ],
        type: "list"
      },
      {
        title: "PERF-004 — Cache in @PostConstruct | Severity: Major",
        content: [
          "Key: PERF-004 | Type: Performance | Since: AEM 6.x",
          "Sling Models are instantiated per HTTP request.",
          "If a getter method executes a query, it runs every time HTL evaluates that expression.",
          "A single HTL template may call the same getter 3-5 times per render.",
          "Fix: compute once in @PostConstruct, store in a field, return the field from the getter."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "PERF-001 — Compliant: bounded path + limited results",
        code: "String sql = \"SELECT * FROM [cq:Page] AS p\" +\n             \" WHERE ISDESCENDANTNODE(p, '/content/mysite')\" +\n             \" AND [jcr:title] = 'Home'\";\nQuery q = session.getWorkspace().getQueryManager()\n    .createQuery(sql, Query.JCR_SQL2);\nq.setLimit(50); // always limit\nQueryResult result = q.execute();"
      },
      {
        language: "java",
        title: "PERF-002 — Compliant: Sling Scheduler via @Component",
        code: "@Component(service = Runnable.class, immediate = true,\n    property = {\n        \"scheduler.expression=0 0/5 * * * ?\",  // every 5 min\n        \"scheduler.concurrent:Boolean=false\"\n    })\npublic class MyTask implements Runnable {\n    public void run() { doWork(); }\n}"
      },
      {
        language: "java",
        title: "PERF-004 — Compliant: computed once in @PostConstruct",
        code: "@Model(adaptables = Resource.class)\npublic class ArticleModel {\n    private List<Page> relatedPages;\n\n    @PostConstruct\n    protected void init() {\n        // Runs once per request\n        this.relatedPages = queryService.findRelated(resource);\n    }\n\n    public List<Page> getRelatedPages() {\n        return relatedPages; // no re-query\n    }\n}"
      }
    ],
    tooltips: [
      {
        text: "Sling Scheduler",
        content: "OSGi service that manages scheduled Runnable components with cron expressions. Cleans up jobs when the bundle stops — unlike raw threads."
      },
      {
        text: "Adaptive Image Servlet",
        content: "AEM's built-in servlet that serves width-appropriate image renditions. Avoids serving 20MB originals to mobile devices."
      }
    ],
    backgroundColor: "from-orange-700 via-red-700 to-rose-700",
    estimatedTime: 3
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 15 — SECURITY RULES
  // Rules: SEC-001 through SEC-006
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 15,
    title: "Security Rules",
    subtitle: "Input validation · CSRF · CSP · Encrypted configs · Security headers",
    content: [
      "Six critical security controls required before any AEM project goes live",
      "• SEC-001 — Validate and whitelist all user inputs before JCR operations",
      "• SEC-002 — Validate CSRF tokens on all state-changing servlet endpoints",
      "• SEC-003 — Remove all sample/demo content (We.Retail, WKND dev) from production",
      "• SEC-004 — Enforce Content Security Policy (CSP) HTTP headers",
      "• SEC-005 — Encrypt all secrets in OSGi configs using AEM Crypto Support",
      "• SEC-006 — Set X-Frame-Options, X-Content-Type-Options, and HSTS headers"
    ],
    expandableSections: [
      {
        title: "SEC-001 — Input Validation | Severity: Critical",
        content: [
          "Key: SEC-001 | Type: Security | Since: AEM 6.x",
          "Request parameters must be validated against a whitelist before use in JCR queries.",
          "String concatenation in SQL2 queries with user input = SQL/JCR injection.",
          "Also applies to: content paths, node type names, property names from user input.",
          "Fix: validate against Set.of(allowedValues) and return 400 Bad Request on violation."
        ],
        type: "list"
      },
      {
        title: "SEC-002 — CSRF Token Validation | Severity: Critical",
        content: [
          "Key: SEC-002 | Type: Security | Since: AEM 6.1",
          "CSRF: a malicious page tricks an already-authenticated user into executing actions on AEM.",
          "Without CSRF validation, any website can trigger POST/PUT/DELETE on your AEM servlets.",
          "AEM provides the Granite CSRF framework: TokenManager for server-side validation.",
          "Every state-changing endpoint (POST/PUT/DELETE) must validate the CSRF token."
        ],
        type: "list"
      },
      {
        title: "SEC-005 — Encrypted OSGi Configurations | Severity: Critical",
        content: [
          "Key: SEC-005 | Type: Vulnerability | Since: AEM 6.x",
          "OSGi .cfg.json and .xml config files are committed to Git — visible to all developers.",
          "Plaintext secrets in these files (API keys, DB passwords) are exposed immediately.",
          "AEM Crypto Support encrypts values with {cipher} prefix — safe to commit.",
          "Cloud Manager also supports environment variable injection for pipeline-level secrets."
        ],
        type: "list"
      },
      {
        title: "SEC-006 — Security Response Headers | Severity: Major",
        content: [
          "X-Frame-Options: SAMEORIGIN — prevents clickjacking via iframe embedding.",
          "X-Content-Type-Options: nosniff — prevents MIME confusion attacks.",
          "X-XSS-Protection: 1; mode=block — legacy XSS filter for older browsers.",
          "Referrer-Policy: strict-origin-when-cross-origin — limits Referer header leakage.",
          "Strict-Transport-Security — forces HTTPS for all subsequent requests.",
          "Permissions-Policy — restricts access to browser APIs (camera, mic, geolocation)."
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "SEC-001 — Compliant: input whitelist validation",
        code: "Set<String> ALLOWED_TYPES = Set.of(\"cq:Page\", \"dam:Asset\", \"cq:Tag\");\nString userType = request.getParameter(\"type\");\n\nif (!ALLOWED_TYPES.contains(userType)) {\n    response.sendError(SC_BAD_REQUEST, \"Invalid resource type\");\n    return;\n}\n// Now safe to use userType in query"
      },
      {
        language: "bash",
        title: "SEC-006 — Compliant: security headers in Apache",
        code: "<VirtualHost *:443>\n    Header always set X-Frame-Options           \"SAMEORIGIN\"\n    Header always set X-Content-Type-Options    \"nosniff\"\n    Header always set X-XSS-Protection         \"1; mode=block\"\n    Header always set Referrer-Policy          \"strict-origin-when-cross-origin\"\n    Header always set Strict-Transport-Security \"max-age=31536000; includeSubDomains\"\n    Header always set Permissions-Policy       \"camera=(), microphone=()\"\n</VirtualHost>"
      }
    ],
    modals: [
      {
        title: "Security Go-Live Checklist",
        content: "Pre-production security checklist for AEM deployments:",
        type: "text",
        data: "SECURITY GO-LIVE CHECKLIST\n\n✅ AUTHENTICATION & ACCESS\n   [ ] Default admin password changed\n   [ ] All anonymous users removed from /content author ACLs\n   [ ] Service users configured with least-privilege ACLs\n   [ ] replication agents use dedicated service accounts\n\n✅ DISPATCHER / WEB SERVER\n   [ ] Default-deny filter policy in place\n   [ ] Dangerous selectors blocked (infinity, query, childrenlist)\n   [ ] /crx, /system, /admin paths blocked\n   [ ] HTTPS enforced with valid TLS certificate\n   [ ] Security headers set (X-Frame, X-Content-Type, HSTS, CSP)\n\n✅ CODE QUALITY\n   [ ] No hardcoded credentials in source code\n   [ ] All OSGi secrets encrypted with {cipher} prefix\n   [ ] CSRF validation on all POST/PUT/DELETE servlets\n   [ ] All user inputs validated against whitelists\n\n✅ CONTENT\n   [ ] Sample/demo content removed (We.Retail, WKND demo)\n   [ ] /crx/de, CRXDE Lite disabled on Publish\n   [ ] OSGi Web Console disabled or access-restricted on Publish"
      }
    ],
    backgroundColor: "from-red-800 via-rose-800 to-pink-800",
    estimatedTime: 4
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 16 — SUMMARY & QUICK REFERENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Code Quality — Quick Reference",
    subtitle: "58 rules · 8 sections · Your AEM certification checklist",
    content: [
      "You have covered all 58 AEM code quality rules across 8 categories",
      "These rules represent the most common issues found in AEM certification exams and real-world production projects",
      "Bookmark this reference — Cloud Manager will enforce several of these as hard deployment gates",
      "Next steps: practice applying these rules in the AEM Trivia section!"
    ],
    expandableSections: [
      {
        title: "Severity Reference",
        content: [
          "🔴 Blocker — Deployment blocker; pipeline fails; must fix before any promotion",
          "🟠 Critical — Security or data-loss risk; Cloud Manager quality gate blocks promotion",
          "🟡 Major — Significant quality/performance impact; counted toward maintainability rating",
          "🔵 Minor — Code smell; tracked in technical debt ratio",
          "⚪ Info — Best practice; not counted in quality gate thresholds"
        ],
        type: "list"
      },
      {
        title: "Rule Type Reference",
        content: [
          "Bug — Incorrect behavior that produces failures at runtime",
          "Vulnerability — Security weakness that can be exploited by an attacker",
          "Code Smell — Maintainability issue that increases technical debt",
          "Best Practice — Recommended pattern per Adobe or Sling community standard",
          "Performance — Pattern that degrades response time or resource consumption",
          "Security — Defense-in-depth control that reduces the attack surface"
        ],
        type: "list"
      },
      {
        title: "Complete Rule Index — All 58 Rules",
        content: [
          "── SONARQUBE (12) ──",
          "java:S2095 · Resources Should Be Closed · Critical",
          "java:S2068 · No Hardcoded Credentials · Critical",
          "java:S2259 · Null Pointers Should Not Be Dereferenced · Critical",
          "java:S1541 · Methods Should Not Be Too Complex · Major",
          "java:S00108 · Avoid Empty Catch Blocks · Major",
          "java:S106 · Use Logger Instead of System.out · Minor",
          "java:S1192 · String Literals Should Not Be Duplicated · Minor",
          "java:S1874 · Deprecated API Usage Should Be Avoided · Major",
          "java:S2972 · Classes Should Not Be Too Long · Major",
          "java:S1166 · Exceptions Should Not Be Ignored · Major",
          "java:S109 · Avoid Magic Numbers · Minor",
          "java:S2885 · Thread Safety in OSGi Services · Critical",
          "── OAKPAL (8) ──",
          "OAKPAL-001 · Disallow Direct Writes to /apps · Critical",
          "OAKPAL-002 · Enforce Immutable /libs · Blocker",
          "oakpal:RequiredPrimaryType · Required Primary Type · Error",
          "oakpal:ImmutableApps · No Mutable Properties in /apps · Warning",
          "OAKPAL-005 · Avoid Overlapping Filter Roots · Major",
          "OAKPAL-006 · Validate rep:policy in Packages · Critical",
          "OAKPAL-007 · No /var Nodes in Packages · Major",
          "OAKPAL-008 · Clientlib Category Naming · Minor",
          "── AEM BEST PRACTICES (8) ──",
          "AEM-BP-001 · Use Sling Models Instead of WCMUsePojo · Major",
          "AEM-BP-002 · Avoid Business Logic in JSP/HTL · Major",
          "AEM-BP-003 · Use Service Users (Not Admin Resolver) · Critical",
          "AEM-BP-004 · Use @PostConstruct for Initialization · Major",
          "AEM-BP-005 · Prefer ValueMap Over JCR Node API · Major",
          "AEM-BP-006 · Use QueryBuilder API for Searches · Major",
          "AEM-BP-007 · Avoid Sync Replication from Request Thread · Major",
          "AEM-BP-008 · Use @ValueMapValue and @ChildResource · Minor",
          "── HTL / SIGHTLY (6) ──",
          "HTL-001 · Never Use context='unsafe' · Critical",
          "HTL-002 · Use data-sly-test for Conditionals · Minor",
          "HTL-003 · Instantiate data-sly-use Models Once · Major",
          "HTL-004 · Keep HTL Expressions Simple · Major",
          "HTL-005 · Use itemList for Loop Metadata · Minor",
          "HTL-006 · Include Sub-Components via data-sly-resource · Major",
          "── OSGi / FELIX (6) ──",
          "OSGI-001 · Annotate Services with @Component · Critical",
          "OSGI-002 · Use Proper Lifecycle Annotations · Major",
          "OSGI-003 · @ObjectClassDefinition for Config · Major",
          "OSGI-004 · DYNAMIC Policy for Volatile References · Major",
          "OSGI-005 · Register Servlets with resourceTypes · Critical",
          "OSGI-006 · No Business Logic in BundleActivator · Major",
          "── DISPATCHER (6) ──",
          "DISP-001 · Enable Selective GET Caching · Major",
          "DISP-002 · Default Deny Filter Policy · Critical",
          "DISP-003 · Block Dangerous Selectors · Critical",
          "DISP-004 · Scope Cache Invalidation · Major",
          "DISP-005 · Enforce HTTPS · Critical",
          "DISP-006 · Immutable Headers for Clientlibs · Major",
          "── PERFORMANCE (6) ──",
          "PERF-001 · No Unbounded JCR Queries · Critical",
          "PERF-002 · Use Sling Scheduler for Background Tasks · Critical",
          "PERF-003 · Serve Images via Adaptive Image Servlet · Major",
          "PERF-004 · Cache Computations in @PostConstruct · Major",
          "PERF-005 · Scope Clientlib Loading · Major",
          "PERF-006 · Enable Gzip for Text Responses · Major",
          "── SECURITY (6) ──",
          "SEC-001 · Validate and Whitelist User Inputs · Critical",
          "SEC-002 · Validate CSRF Tokens · Critical",
          "SEC-003 · Remove Sample Content from Production · Critical",
          "SEC-004 · Enforce Content Security Policy · Major",
          "SEC-005 · Encrypt Sensitive OSGi Config Values · Critical",
          "SEC-006 · Set Security Response Headers · Major"
        ],
        type: "list"
      }
    ],
    backgroundColor: "from-indigo-700 via-purple-700 to-slate-800",
    estimatedTime: 2
  }
]

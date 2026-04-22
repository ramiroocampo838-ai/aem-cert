/**
 * Trivia — AEM Code Quality Rules Question Bank
 * 100 questions covering: SonarQube, OakPAL, AEM Best Practices,
 * HTL/Sightly, OSGi/Felix, Dispatcher, Performance, and Security rules.
 *
 * Source: codeQArules.txt — AEM Code Quality Rules Compendium v2.0
 * Each question: ≥4 correct answer variants, ≥8 incorrect distractors
 */

import type { TriviaQuestion, TriviaSectionConfig } from "./trivia-types"

export const CODE_QUALITY_SECTION_CONFIG: TriviaSectionConfig = {
  id: "code-quality",
  label: "Code Quality Rules",
  description: "SonarQube, OakPAL, AEM Best Practices, HTL, OSGi, Dispatcher, Performance & Security",
  icon: "ShieldCheck",
  color: "orange",
  questionCount: 100,
}

export const codeQualityQuestions: TriviaQuestion[] = [

  // ── SONARQUBE RULES (18) ──────────────────────────────────────────────────

  {
    id: "cq-001",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule requires that ResourceResolvers, streams, and other closeable resources must always be closed in AEM Java code?",
    correctAnswers: [
      "java:S2095 — Resources Should Be Closed",
      "java:S2095, which flags any AutoCloseable resource that is not closed",
      "SonarQube rule java:S2095 enforces that all closeable resources are closed after use",
      "Rule java:S2095 — it detects ResourceResolver and InputStream instances that are never closed",
    ],
    incorrectAnswers: [
      "java:S2068 — Avoid Hardcoded Credentials",
      "java:S1541 — Methods Should Not Be Too Complex",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "java:S00108 — Avoid Empty Catch Blocks",
      "java:S106 — Use Logger Instead of System.out",
      "java:S1192 — String Literals Should Not Be Duplicated",
      "java:S1874 — Deprecated API Usage Should Be Avoided",
      "java:S2885 — Thread Safety in OSGi Services",
    ],
    explanation:
      "java:S2095 (Severity: Critical, Type: Bug) requires that all resources implementing AutoCloseable — including ResourceResolver, InputStream, and JCR Session — are closed after use. The recommended fix is try-with-resources, which guarantees closure even when exceptions occur. Unclosed ResourceResolvers exhaust the JCR connection pool and cause production outages.",
  },

  {
    id: "cq-002",
    topic: "SonarQube Rules",
    question: "What is the recommended Java pattern for ensuring a ResourceResolver is always closed, even when an exception is thrown?",
    correctAnswers: [
      "try-with-resources (try (ResourceResolver resolver = ...))",
      "Using a try-with-resources statement so the resolver is auto-closed on exit",
      "Declare the ResourceResolver in a try-with-resources block to guarantee closure",
      "try (ResourceResolver resolver = factory.getServiceResourceResolver(params)) { ... }",
    ],
    incorrectAnswers: [
      "Call resolver.close() only in the happy path after the operation completes",
      "Use a finally block but only if an exception was thrown",
      "Wrap the resolver in a WeakReference so the GC can close it",
      "Let the OSGi container close all resolvers automatically at bundle stop",
      "Use a static field so the resolver is shared and never garbage collected",
      "Call session.logout() instead of resolver.close()",
      "Rely on the Sling request lifecycle to close all resolvers after the request",
      "Use resolver.revert() to safely release the connection",
    ],
    explanation:
      "The Java try-with-resources statement (introduced in Java 7) automatically calls close() on any AutoCloseable object when the try block exits — whether normally or via exception. This is the correct fix for java:S2095 and prevents ResourceResolver leaks that exhaust the JCR repository connection pool.",
  },

  {
    id: "cq-003",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule has Key java:S2068 and is classified as a Critical Vulnerability?",
    correctAnswers: [
      "Avoid Hardcoded Credentials",
      "java:S2068 — credentials, API keys, and passwords must not be hardcoded in source code",
      "The rule that prevents passwords and API keys from being stored as string literals in code",
      "Hardcoded Credentials — flags any string literal that looks like a password or secret",
    ],
    incorrectAnswers: [
      "Resources Should Be Closed",
      "Null Pointers Should Not Be Dereferenced",
      "Methods Should Not Be Too Complex",
      "Avoid Empty Catch Blocks",
      "Deprecated API Usage Should Be Avoided",
      "Thread Safety in OSGi Services",
      "String Literals Should Not Be Duplicated",
      "Classes Should Not Be Too Long",
    ],
    explanation:
      "java:S2068 (Severity: Critical, Type: Vulnerability) detects hardcoded credentials — passwords, API keys, and tokens stored as string literals in source code. Source code is committed to Git and visible to anyone with repository access. The AEM solution is to use OSGi configuration with AEM Crypto Support encryption ({cipher} prefix) or Cloud Manager environment variables.",
  },

  {
    id: "cq-004",
    topic: "SonarQube Rules",
    question: "In AEM, what is the correct alternative to storing a password as a hardcoded string literal in Java source code?",
    correctAnswers: [
      "Use OSGi configuration with AEM Crypto Support encryption (cipher prefix)",
      "Retrieve the value from an OSGi config property encrypted with AEM Crypto Support",
      "Store secrets in Cloud Manager environment variables or encrypt them with AEM Crypto",
      "Use System.getenv() for environment variables or OSGi encrypted config properties",
    ],
    incorrectAnswers: [
      "Store the password in a JCR node under /content with restricted ACLs",
      "Encode the password in Base64 before hardcoding it",
      "Store the password in a .properties file committed to the repository",
      "Hash the password with MD5 and store the hash as a constant",
      "Place the password in a JSP comment so SonarQube won't detect it",
      "Use a private static final field so only the class can access it",
      "Store credentials in a Sling Model @Inject field",
      "Keep the password in an OSGi config XML file without encryption",
    ],
    explanation:
      "The AEM-recommended solutions for java:S2068 are: (1) OSGi configuration with AEM Crypto Support — values prefixed with {cipher} are encrypted at rest and safe to commit to Git, and (2) Cloud Manager environment variables — injected at pipeline execution time. Both prevent secrets from appearing as plaintext in VCS.",
  },

  {
    id: "cq-005",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule (Key: java:S2259, Severity: Critical) addresses a very common runtime crash in AEM caused by not checking return values from Sling APIs like adaptTo() or getChild()?",
    correctAnswers: [
      "Null Pointers Should Not Be Dereferenced",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "The rule that requires null checks before calling methods on values returned by AEM APIs",
      "java:S2259, which detects when adaptTo() or getResource() results are used without a null check",
    ],
    incorrectAnswers: [
      "java:S2095 — Resources Should Be Closed",
      "java:S2068 — Avoid Hardcoded Credentials",
      "java:S1541 — Methods Should Not Be Too Complex",
      "java:S00108 — Avoid Empty Catch Blocks",
      "java:S1874 — Deprecated API Usage Should Be Avoided",
      "java:S2885 — Thread Safety in OSGi Services",
      "java:S1166 — Exceptions Should Not Be Ignored",
      "java:S109 — Avoid Magic Numbers",
    ],
    explanation:
      "java:S2259 (Severity: Critical, Type: Bug) detects null pointer dereferences. AEM APIs such as adaptTo(), getChild(), getContentResource(), and getResource() frequently return null when the resource or adaptation target does not exist. Calling any method on a null reference throws NullPointerException at runtime. Every result from these APIs must be null-checked before use.",
  },

  {
    id: "cq-006",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule (Key: java:S1541) is triggered when an AEM service method has too many conditional branches and independent execution paths?",
    correctAnswers: [
      "Methods Should Not Be Too Complex",
      "java:S1541 — Methods Should Not Be Too Complex (cyclomatic complexity)",
      "The rule that limits cyclomatic complexity to prevent hard-to-test methods",
      "java:S1541, which flags methods exceeding the cyclomatic complexity threshold (default: 10)",
    ],
    incorrectAnswers: [
      "java:S2972 — Classes Should Not Be Too Long",
      "java:S00108 — Avoid Empty Catch Blocks",
      "java:S1192 — String Literals Should Not Be Duplicated",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "java:S1166 — Exceptions Should Not Be Ignored",
      "java:S106 — Use Logger Instead of System.out",
      "java:S109 — Avoid Magic Numbers",
      "java:S2068 — Avoid Hardcoded Credentials",
    ],
    explanation:
      "java:S1541 (Severity: Major, Type: Code Smell) measures cyclomatic complexity — the number of independent execution paths through a method. The default threshold is 10. In AEM, Sling Models and OSGi services with deeply nested conditionals are common offenders. The fix is to extract private methods for each responsibility, use early returns, and delegate sub-tasks to separate services.",
  },

  {
    id: "cq-007",
    topic: "SonarQube Rules",
    question: "What does cyclomatic complexity measure in a Java method, as flagged by java:S1541?",
    correctAnswers: [
      "The number of independent execution paths (branches) through the method",
      "The count of linearly independent paths — each if, for, while, case adds one",
      "A measure of branching complexity: every conditional branch increases the count",
      "The number of distinct paths a test suite would need to cover the entire method",
    ],
    incorrectAnswers: [
      "The number of lines of code in the method",
      "The number of parameters the method accepts",
      "The nesting depth of the innermost block in the method",
      "The total number of method calls made inside the method",
      "The ratio of comments to code lines",
      "The number of checked exceptions declared in the throws clause",
      "The number of return statements in the method",
      "The number of dependencies injected into the enclosing class",
    ],
    explanation:
      "Cyclomatic complexity counts the number of linearly independent paths through a method. Each if, else if, for, while, case, catch, and ternary operator adds 1 to the count. A method with complexity > 10 (SonarQube default) has too many branches, is hard to test comprehensively, and should be refactored into smaller, focused methods.",
  },

  {
    id: "cq-008",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule (Key: java:S00108) prevents AEM developers from silently swallowing RepositoryException, WorkflowException, and other critical errors?",
    correctAnswers: [
      "Avoid Empty Catch Blocks",
      "java:S00108 — catch blocks must not be empty; exceptions must be logged or rethrown",
      "The rule that requires every catch block to at minimum log the exception",
      "java:S00108, which flags catch blocks that contain no code at all",
    ],
    incorrectAnswers: [
      "java:S1166 — Exceptions Should Not Be Ignored",
      "java:S2095 — Resources Should Be Closed",
      "java:S1541 — Methods Should Not Be Too Complex",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "java:S2068 — Avoid Hardcoded Credentials",
      "java:S106 — Use Logger Instead of System.out",
      "java:S2885 — Thread Safety in OSGi Services",
      "java:S1874 — Deprecated API Usage Should Be Avoided",
    ],
    explanation:
      "java:S00108 (Severity: Major, Type: Code Smell) flags completely empty catch blocks. An empty catch block swallows the exception silently — there is no log, no rethrow, and no recovery. In AEM this hides failures in JCR saves, workflow completions, and replication events, making production issues extremely difficult to diagnose. The minimum fix is: log.error('message', e).",
  },

  {
    id: "cq-009",
    topic: "SonarQube Rules",
    question: "What SonarQube rule key covers the requirement to use SLF4J loggers instead of System.out.println in AEM production Java code?",
    correctAnswers: [
      "java:S106",
      "java:S106 — Use Logger Instead of System.out",
      "Rule java:S106 which flags any use of System.out or System.err in production code",
      "java:S106 (Minor, Code Smell) — requires SLF4J logger instead of standard output",
    ],
    incorrectAnswers: [
      "java:S00108",
      "java:S1192",
      "java:S2095",
      "java:S1541",
      "java:S1166",
      "java:S109",
      "java:S2068",
      "java:S2259",
    ],
    explanation:
      "java:S106 (Severity: Minor, Type: Code Smell) flags all use of System.out and System.err. In AEM, log output must go through the Sling Log Service (backed by Logback) so it can be routed, throttled, and persisted correctly. Using SLF4J with parameterized messages (log.info('Processing: {}', path)) also avoids string concatenation overhead when the log level is disabled.",
  },

  {
    id: "cq-010",
    topic: "SonarQube Rules",
    question: "Why should JCR property name constants like 'jcr:title' be extracted to private static final String fields rather than repeated inline, according to java:S1192?",
    correctAnswers: [
      "To prevent drift — a typo in one occurrence causes silent data loss; a constant is changed in one place",
      "Using named constants avoids string duplication and ensures consistency across all usages",
      "A single constant definition means a rename only requires one change instead of many",
      "java:S1192 flags 3+ occurrences of the same literal — constants eliminate the duplication",
    ],
    incorrectAnswers: [
      "Because SonarQube cannot parse inline string literals in AEM projects",
      "To enable runtime reflection on the property names",
      "Because Sling injection requires constants, not inline strings",
      "To improve JSON serialization of the property names",
      "HTL can only access property names defined as Java constants",
      "OSGi requires all string values to be declared as constants",
      "To allow the JIT compiler to intern the strings more efficiently",
      "Because the JCR ValueMap API only accepts static fields as keys",
    ],
    explanation:
      "java:S1192 (Severity: Minor, Type: Code Smell) flags string literals that are duplicated 3 or more times. In AEM code, JCR property names like 'jcr:title' or 'jcr:description' are used across multiple methods. Extracting them as private static final String constants (e.g., PN_TITLE = 'jcr:title') means any rename or fix only needs to happen in one place, preventing inconsistency bugs.",
  },

  {
    id: "cq-011",
    topic: "SonarQube Rules",
    question: "Which AEM API method is flagged by java:S1874 (Deprecated API Usage) because it grants unrestricted admin access with no audit trail and was removed in AEMaaCS?",
    correctAnswers: [
      "getAdministrativeResourceResolver(null)",
      "ResourceResolverFactory.getAdministrativeResourceResolver() — deprecated since AEM 6.1",
      "The getAdministrativeResourceResolver method on ResourceResolverFactory",
      "factory.getAdministrativeResourceResolver(null) — replaced by getServiceResourceResolver()",
    ],
    incorrectAnswers: [
      "getServiceResourceResolver(params)",
      "resolver.adaptTo(Session.class)",
      "resourceResolver.getResource(path)",
      "session.getNode(path)",
      "request.getResourceResolver()",
      "resource.getValueMap()",
      "resource.getChild(name)",
      "resolver.resolve(request, path)",
    ],
    explanation:
      "getAdministrativeResourceResolver(null) was deprecated in AEM 6.1 and completely removed in AEMaaCS. It granted full admin privileges with no audit trail — a security vulnerability. The replacement is getServiceResourceResolver(params) where params contains the SUBSERVICE key mapped to a system user with only the permissions the service actually needs (least-privilege principle).",
  },

  {
    id: "cq-012",
    topic: "SonarQube Rules",
    question: "According to java:S1874, what is the modern AEM replacement for WCMUsePojo when creating component backing logic?",
    correctAnswers: [
      "Sling Models annotated with @Model",
      "Sling Models — use @Model(adaptables = Resource.class) instead of extending WCMUsePojo",
      "A Sling Model class with @Model annotation, replacing the legacy WCMUsePojo base class",
      "@Model(adaptables = Resource.class) with annotation-driven injection replaces WCMUsePojo",
    ],
    incorrectAnswers: [
      "JSP scriptlets with use-bean tags",
      "WCMUse interface implementation",
      "Direct extension of SlingAllMethodsServlet",
      "OSGi @Component service with @Reference injection",
      "Generic Java POJO with manual resource adaptation",
      "HTL Use-API JavaScript object",
      "AEM Form Objects via FormField annotation",
      "CQ5 GenericComponent base class",
    ],
    explanation:
      "WCMUsePojo is a legacy base class that requires a running AEM instance to test. Its modern replacement is a Sling Model: a class annotated with @Model(adaptables = Resource.class) that uses annotation-driven injection (@ValueMapValue, @ChildResource, @OSGiService). Sling Models can be unit-tested with AEM Mocks without a running AEM instance.",
  },

  {
    id: "cq-013",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule (Key: java:S2972) is violated when an AEM OSGi service or Sling Model grows to hundreds of methods, mixing rendering, business logic, and data access?",
    correctAnswers: [
      "Classes Should Not Be Too Long",
      "java:S2972 — Classes Should Not Be Too Long",
      "The rule that flags overly large classes that violate Single Responsibility Principle",
      "java:S2972, which detects classes exceeding the configured maximum line/method threshold",
    ],
    incorrectAnswers: [
      "java:S1541 — Methods Should Not Be Too Complex",
      "java:S00108 — Avoid Empty Catch Blocks",
      "java:S2095 — Resources Should Be Closed",
      "java:S1192 — String Literals Should Not Be Duplicated",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "java:S1166 — Exceptions Should Not Be Ignored",
      "java:S2068 — Avoid Hardcoded Credentials",
      "java:S106 — Use Logger Instead of System.out",
    ],
    explanation:
      "java:S2972 (Severity: Major, Type: Code Smell) flags classes that are too large. A class mixing rendering, business logic, and data access violates the Single Responsibility Principle and becomes difficult to comprehend, test, and maintain. The fix is to split responsibilities: the Sling Model handles view concerns, dedicated OSGi services handle business logic, and repositories handle data access.",
  },

  {
    id: "cq-014",
    topic: "SonarQube Rules",
    question: "What does java:S1166 (Exceptions Should Not Be Ignored) require when a WorkflowException or ReplicationException is caught in AEM code?",
    correctAnswers: [
      "The exception must be logged, rethrown, or handled — never silently discarded",
      "At minimum log the exception; preferably also rethrow or take a recovery action",
      "The catch block must contain handling code: logging, rethrowing, or a fallback action",
      "Exceptions caught must be logged with their message and stack trace using SLF4J",
    ],
    incorrectAnswers: [
      "The exception should be suppressed and the method should return null",
      "The exception must be converted to a RuntimeException and stored in a field",
      "An empty catch block is acceptable if a comment explains why it is ignored",
      "Only checked exceptions need to be handled; unchecked can be silently dropped",
      "The exception must be printed to System.err before being ignored",
      "Rethrowing as the same type satisfies the rule only if done within 3 lines",
      "The variable name 'ignored' in catch (Exception ignored) satisfies the rule",
      "Catch blocks without code are fine as long as the method is private",
    ],
    explanation:
      "java:S1166 (Severity: Major, Type: Code Smell) requires that caught exceptions are not silently discarded. Unlike java:S00108 which flags completely empty catch blocks, S1166 also flags cases where the exception variable is declared but never used. The correct approach: log.error('Operation failed: {}', e.getMessage(), e) and either rethrow, return a failure indicator, or take a documented recovery action.",
  },

  {
    id: "cq-015",
    topic: "SonarQube Rules",
    question: "Which SonarQube rule (Key: java:S109) is violated when an AEM developer writes 'if (results.size() > 100)' without extracting the number 100 as a named constant?",
    correctAnswers: [
      "Avoid Magic Numbers",
      "java:S109 — Avoid Magic Numbers",
      "The rule that requires numeric literals to be extracted as named constants",
      "java:S109 (Minor, Code Smell) — numeric literals must have a named symbol describing their meaning",
    ],
    incorrectAnswers: [
      "java:S1192 — String Literals Should Not Be Duplicated",
      "java:S1541 — Methods Should Not Be Too Complex",
      "java:S2972 — Classes Should Not Be Too Long",
      "java:S00108 — Avoid Empty Catch Blocks",
      "java:S1166 — Exceptions Should Not Be Ignored",
      "java:S2259 — Null Pointers Should Not Be Dereferenced",
      "java:S2095 — Resources Should Be Closed",
      "java:S106 — Use Logger Instead of System.out",
    ],
    explanation:
      "java:S109 (Severity: Minor, Type: Code Smell) flags numeric literals embedded directly in code ('magic numbers'). A number like 100 in 'results.size() > 100' has no self-documenting name. Extracting it as 'private static final int MAX_SEARCH_RESULTS = 100' makes the intent clear and centralizes the value for easy maintenance.",
  },

  {
    id: "cq-016",
    topic: "SonarQube Rules",
    question: "Why do OSGi services in AEM require thread-safe data structures for any mutable instance fields, as flagged by java:S2885?",
    correctAnswers: [
      "OSGi services are singletons shared across ALL concurrent HTTP request threads simultaneously",
      "Because AEM OSGi components are instantiated once and reused by all concurrent requests — shared mutable state causes race conditions",
      "OSGi @Component services are singletons; any mutable field is accessed concurrently by all threads",
      "A single OSGi service instance handles all requests — mutable instance fields are shared across threads",
    ],
    incorrectAnswers: [
      "Each HTTP request creates its own OSGi service instance, so fields are thread-local",
      "OSGi services run in a dedicated single thread so synchronization is never needed",
      "Sling injects new field values for each request, resetting mutable state automatically",
      "OSGi container wraps all field access with synchronized monitors by default",
      "Instance fields in OSGi services are stored in the JCR session, not in memory",
      "Thread safety is only needed in @Activate methods, not in service methods",
      "OSGi services are garbage collected after each request, so state cannot accumulate",
      "JVM handles OSGi thread safety through the happens-before guarantee on @Reference injection",
    ],
    explanation:
      "OSGi @Component services are singletons — a single instance is created and shared across all concurrent HTTP request threads. Any mutable instance field (like an ArrayList or HashMap) is therefore accessed by multiple threads simultaneously, creating race conditions. The fix: use ConcurrentHashMap, CopyOnWriteArrayList, AtomicReference, or keep the service stateless by storing state in request scope instead.",
  },

  {
    id: "cq-017",
    topic: "SonarQube Rules",
    question: "Which is a correct thread-safe alternative to 'private List<String> cache = new ArrayList<>()' in an OSGi service, according to java:S2885?",
    correctAnswers: [
      "Collections.synchronizedList(new ArrayList<>())",
      "private final List<String> cache = Collections.synchronizedList(new ArrayList<>())",
      "CopyOnWriteArrayList — a thread-safe List variant from java.util.concurrent",
      "private final CopyOnWriteArrayList<String> cache = new CopyOnWriteArrayList<>()",
    ],
    incorrectAnswers: [
      "private volatile List<String> cache = new ArrayList<>()",
      "private final List<String> cache = new LinkedList<>()",
      "private static List<String> cache = new ArrayList<>()",
      "@Reference private List<String> cache",
      "private final List<String> cache = Arrays.asList()",
      "private transient List<String> cache = new ArrayList<>()",
      "private synchronized List<String> cache = new ArrayList<>()",
      "private final List<String> cache = new Stack<>()",
    ],
    explanation:
      "java:S2885 requires thread-safe data structures for mutable fields in OSGi singletons. Correct options include: Collections.synchronizedList(new ArrayList<>()), CopyOnWriteArrayList (safe for read-heavy scenarios), ConcurrentHashMap for maps, and AtomicReference for single object references. Simply adding 'volatile' to an ArrayList does NOT make it thread-safe — it only ensures visibility of the reference, not of the list contents.",
  },

  {
    id: "cq-018",
    topic: "SonarQube Rules",
    question: "What is the severity level of java:S2095 (Resources Should Be Closed) and java:S2885 (Thread Safety in OSGi Services) in SonarQube?",
    correctAnswers: [
      "Critical — both rules are classified as Critical severity",
      "Both are Critical severity: S2095 is a Critical Bug and S2885 is a Critical Bug",
      "Critical (the highest actionable severity) — both are Critical type Bug rules",
      "Critical for both: resource leaks and thread safety issues can cause production outages",
    ],
    incorrectAnswers: [
      "Blocker for both rules",
      "Major for both rules",
      "S2095 is Blocker and S2885 is Critical",
      "S2095 is Critical and S2885 is Major",
      "S2095 is Major and S2885 is Critical",
      "Minor for both as they are Code Smells",
      "S2095 is Critical and S2885 is Blocker",
      "Both are Minor as they rarely cause issues in practice",
    ],
    explanation:
      "Both java:S2095 and java:S2885 are classified as Critical severity Bug rules. java:S2095 is Critical because unclosed ResourceResolvers exhaust the JCR connection pool and crash the repository under load. java:S2885 is Critical because race conditions in OSGi singletons cause intermittent data corruption and NullPointerExceptions that are extremely difficult to debug in production.",
  },


  // ── OAKPAL CONTENT RULES (14) ─────────────────────────────────────────────

  {
    id: "cq-019",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL rule (Key: OAKPAL-001, Severity: Critical) requires that content package filter roots be scoped to specific subtrees rather than using a broad parent path like /apps/myproject?",
    correctAnswers: [
      "Disallow Direct Writes to /apps Without Proper Filtering",
      "OAKPAL-001 — filter roots must target specific subtrees, not broad parent paths",
      "The rule that prevents using /apps/myproject as a filter root because it overwrites everything below it",
      "OAKPAL-001, which flags overly broad filter roots that risk overwriting other teams' components",
    ],
    incorrectAnswers: [
      "OAKPAL-002 — Enforce Immutable Content Structure",
      "oakpal:RequiredPrimaryType — Required Primary Type on All JCR Nodes",
      "OAKPAL-005 — Avoid Overlapping Filter Roots",
      "OAKPAL-006 — Validate rep:policy Nodes in Packages",
      "OAKPAL-007 — No /var Nodes in Content Packages",
      "oakpal:ImmutableApps — No Mutable Properties in /apps",
      "OAKPAL-008 — Clientlib Category Naming Convention",
      "OAKPAL-003 — Ensure Proper Node Types",
    ],
    explanation:
      "OAKPAL-001 (Severity: Critical) requires scoped filter roots. A filter of <filter root='/apps/myproject'/> deletes everything currently under that path on install and replaces it with the package contents — silently overwriting components, templates, or clientlibs from other packages. The fix is to use specific child paths: /apps/myproject/components, /apps/myproject/templates, /apps/myproject/clientlibs.",
  },

  {
    id: "cq-020",
    topic: "OakPAL Content Rules",
    question: "What happens at install time when a content package uses the broad filter root '/apps/myproject' instead of scoped child paths?",
    correctAnswers: [
      "Everything currently under /apps/myproject is deleted and replaced with the package contents",
      "The install overwrites the entire /apps/myproject subtree, removing all existing content below it",
      "All existing nodes under /apps/myproject are removed first, then the package content is written",
      "It performs a destructive full-subtree replace — any nodes not in the package are permanently deleted",
    ],
    incorrectAnswers: [
      "It merges the package content with existing nodes, preserving anything not in the package",
      "It adds only new nodes and skips any existing ones to avoid overwriting",
      "It creates a backup of the existing content before replacing it",
      "It triggers a validation error and refuses to install until the filter is scoped",
      "It performs a dry-run and asks the administrator to confirm before proceeding",
      "It only overwrites nodes that have the same jcr:primaryType as the package content",
      "It moves the existing content to /tmp/backup before installing the new content",
      "It appends the new content alongside the existing content without deleting anything",
    ],
    explanation:
      "Content package installation is destructive for covered filter paths: when the filter root is /apps/myproject, the Package Manager first removes all existing JCR nodes under that path and then imports the package content. This means any component, template, or configuration committed by another team that is not in the current package will be permanently deleted on install.",
  },

  {
    id: "cq-021",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL rule (Key: OAKPAL-002, Severity: Blocker) absolutely prohibits content packages from including any filter targeting paths under /libs?",
    correctAnswers: [
      "Enforce Immutable Content Structure",
      "OAKPAL-002 — /libs is immutable and must never be modified by content packages",
      "The Blocker rule that prevents any filter with root under /libs in deployable packages",
      "OAKPAL-002, which designates /libs as AEM's read-only layer that must never be overwritten",
    ],
    incorrectAnswers: [
      "OAKPAL-001 — Disallow Direct Writes to /apps",
      "oakpal:ImmutableApps — No Mutable Properties in /apps",
      "OAKPAL-005 — Avoid Overlapping Filter Roots",
      "OAKPAL-006 — Validate rep:policy Nodes",
      "oakpal:RequiredPrimaryType — Required Primary Type",
      "OAKPAL-007 — No /var Nodes in Content Packages",
      "OAKPAL-008 — Clientlib Category Naming Convention",
      "OAKPAL-003 — Ensure Proper Node Types",
    ],
    explanation:
      "OAKPAL-002 (Severity: Blocker) protects the /libs area. In AEM, /libs is the immutable layer that contains all out-of-the-box components, templates, and configurations. Any modification to /libs will be overwritten by the next AEM upgrade or AEMaaCS continuous update. The correct approach is the overlay pattern: copy the resource to the same relative path under /apps, where it takes precedence over /libs via the Sling Resource Merger.",
  },

  {
    id: "cq-022",
    topic: "OakPAL Content Rules",
    question: "What is the correct AEM pattern for customizing an out-of-the-box component that lives under /libs, without modifying /libs directly?",
    correctAnswers: [
      "The overlay pattern — copy the resource to the same relative path under /apps",
      "Create the customized version at the same path under /apps instead of modifying /libs",
      "Overlay: place the modified file at /apps/<same-relative-path> — Sling Resource Merger gives /apps precedence",
      "Copy the /libs resource to /apps at the identical sub-path, then modify the /apps copy",
    ],
    incorrectAnswers: [
      "Use a content package filter to remove the /libs node and create a replacement",
      "Modify the /libs component directly using CRXDE Lite on each environment",
      "Use sling:resourceSuperType to extend the component from /libs",
      "Create a proxy component under /apps that delegates all rendering to /libs",
      "Override the /libs file using an OSGi configuration fragment",
      "Deploy a content package with a filter root of /libs/path/to/component",
      "Use a Sling Rewriter pipeline to intercept and replace the /libs response",
      "Set a JCR mixin on the /libs node to mark it as overlayable",
    ],
    explanation:
      "The overlay pattern is the standard AEM mechanism for customizing /libs without modifying it. You copy the file or node from /libs to the exact same relative path under /apps (e.g., /libs/wcm/foundation/components/text → /apps/wcm/foundation/components/text). The Sling Resource Merger resolves /apps before /libs, so the overlay takes precedence. AEM upgrades update /libs but never touch /apps, preserving your customizations.",
  },

  {
    id: "cq-023",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL rule requires that every JCR node in a content package explicitly declares its jcr:primaryType property?",
    correctAnswers: [
      "oakpal:RequiredPrimaryType",
      "oakpal:RequiredPrimaryType — all nodes must have an explicit jcr:primaryType",
      "The rule that flags any JCR node missing a jcr:primaryType declaration in .content.xml files",
      "oakpal:RequiredPrimaryType (Severity: Error) — ensures repository consistency by requiring explicit node types",
    ],
    incorrectAnswers: [
      "OAKPAL-001 — Disallow Direct Writes to /apps",
      "OAKPAL-002 — Enforce Immutable Content Structure",
      "oakpal:ImmutableApps — No Mutable Properties in /apps",
      "OAKPAL-005 — Avoid Overlapping Filter Roots",
      "OAKPAL-006 — Validate rep:policy Nodes",
      "OAKPAL-007 — No /var Nodes in Content Packages",
      "OAKPAL-008 — Clientlib Category Naming Convention",
      "OAKPAL-003 — Ensure Proper Node Naming",
    ],
    explanation:
      "oakpal:RequiredPrimaryType (Severity: Error) requires that every JCR node explicitly declares jcr:primaryType. Nodes without a primary type may default to nt:base or cause import failures. Common correct types include: cq:Page for page nodes, cq:Component for component definitions, nt:unstructured for generic content nodes, sling:Folder for folder structures, and cq:ClientLibraryFolder for client libraries.",
  },

  {
    id: "cq-024",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL rule (oakpal:ImmutableApps) is violated when a content package stores page title data or runtime content values under /apps instead of /content?",
    correctAnswers: [
      "No Mutable Properties in /apps",
      "oakpal:ImmutableApps — /apps is for structural definitions only, not mutable content data",
      "The Warning rule that prohibits storing content or runtime data values as properties under /apps",
      "oakpal:ImmutableApps, which separates /apps (code) from /content (content)",
    ],
    incorrectAnswers: [
      "OAKPAL-001 — Disallow Direct Writes to /apps Without Proper Filtering",
      "OAKPAL-002 — Enforce Immutable Content Structure",
      "oakpal:RequiredPrimaryType — Required Primary Type",
      "OAKPAL-005 — Avoid Overlapping Filter Roots",
      "OAKPAL-006 — Validate rep:policy Nodes",
      "OAKPAL-007 — No /var Nodes in Content Packages",
      "OAKPAL-008 — Clientlib Category Naming Convention",
      "OAKPAL-003 — Ensure Proper Node Types",
    ],
    explanation:
      "oakpal:ImmutableApps (Severity: Warning) enforces the separation between /apps (code and structural definitions) and /content (mutable content). Under /apps, only component definitions (cq:Component), template structures, clientlibs (cq:ClientLibraryFolder), and OSGi configurations are appropriate. Content pages, user-generated data, and runtime values belong in /content. Mixing them makes deployments unpredictable and breaks the content/code separation.",
  },

  {
    id: "cq-025",
    topic: "OakPAL Content Rules",
    question: "What problem occurs when a content package has two filter roots where one is an ancestor of the other, violating OAKPAL-005?",
    correctAnswers: [
      "The filters overlap — on install, the merge order is undefined and one filter may delete what the other deployed",
      "Overlapping filters create undefined merge behavior where one filter's content may overwrite or delete the other's",
      "The child filter path is fully contained within the parent filter, causing unpredictable content deletion on install",
      "Overlapping roots mean the same JCR nodes are covered by multiple filters with undefined resolution order",
    ],
    incorrectAnswers: [
      "The package manager refuses to install and returns a validation error",
      "The overlapping filter merges both sets of content without any data loss",
      "Only the most specific filter (deepest path) is applied and the parent is ignored",
      "The parent filter is applied first, then the child filter adds its content incrementally",
      "Both filters are unioned and applied together, resulting in the full set from both",
      "The package installs successfully but logs a warning that can be safely ignored",
      "The overlapping filter triggers an AEM workflow to review the conflict",
      "Only the first declared filter is used; the second overlapping filter is silently dropped",
    ],
    explanation:
      "OAKPAL-005 (Severity: Major) flags overlapping filter roots. If filter A covers /apps/myproject and filter B covers /apps/myproject/components, B is fully contained within A's scope. On install, the order of application is undefined — one filter may completely delete what the other deployed. Fix: use non-overlapping sibling paths: /apps/myproject/components, /apps/myproject/templates, /apps/myproject/clientlibs.",
  },

  {
    id: "cq-026",
    topic: "OakPAL Content Rules",
    question: "Why must rep:policy nodes (JCR ACL definitions) be explicitly excluded from content packages that are not specifically designed for security management, per OAKPAL-006?",
    correctAnswers: [
      "Accidentally packaging rep:policy nodes overwrites production security settings (ACLs) on every install",
      "Including rep:policy in a regular content package resets production ACLs to the packaged values during deployment",
      "rep:policy nodes contain JCR Access Control Lists — their accidental inclusion overwrites the live security configuration",
      "If a package contains rep:policy, deploying it to production replaces the carefully configured production ACLs",
    ],
    incorrectAnswers: [
      "rep:policy nodes are too large and slow down package installation significantly",
      "JCR ACL nodes cannot be serialized to XML and will corrupt the package file",
      "Adobe's license requires that ACLs never be stored in content packages",
      "rep:policy nodes are volatile and get regenerated by AEM automatically after each install",
      "Including rep:policy causes a circular dependency in the JCR node hierarchy",
      "OSGi service user mappings conflict with any packaged rep:policy definitions",
      "The Dispatcher cache becomes stale when rep:policy nodes are deployed via packages",
      "rep:policy nodes are only valid under /home and cause errors if packaged elsewhere",
    ],
    explanation:
      "OAKPAL-006 (Severity: Critical) protects production access control configurations. rep:policy nodes define JCR ACLs (who can read/write/delete which nodes). If a development content package accidentally includes these nodes and is deployed to production, the carefully configured production security settings are overwritten with development values. Fix: explicitly exclude rep:policy from all non-security-specific packages using <exclude pattern='.*rep:policy.*'/> in the filter.",
  },

  {
    id: "cq-027",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL rule (OAKPAL-007) prohibits content packages from including filter roots targeting /var/eventing, /var/audit, or /var/workflow?",
    correctAnswers: [
      "No /var Nodes in Content Packages",
      "OAKPAL-007 — /var is a runtime area managed by AEM that must never be packaged",
      "The rule that prohibits filter roots under /var because that area is managed entirely by AEM at runtime",
      "OAKPAL-007, which prevents packaging runtime data areas like eventing queues and audit logs",
    ],
    incorrectAnswers: [
      "OAKPAL-001 — Disallow Direct Writes to /apps",
      "OAKPAL-002 — Enforce Immutable Content Structure",
      "OAKPAL-005 — Avoid Overlapping Filter Roots",
      "OAKPAL-006 — Validate rep:policy Nodes",
      "oakpal:ImmutableApps — No Mutable Properties in /apps",
      "oakpal:RequiredPrimaryType — Required Primary Type",
      "OAKPAL-008 — Clientlib Category Naming Convention",
      "oakpal:NoVarContent — Protect Runtime Data",
    ],
    explanation:
      "OAKPAL-007 (Severity: Major) protects the /var area. In AEM, /var holds runtime-managed data including: /var/eventing (OSGi event queue), /var/audit (audit log), /var/workflow (workflow payloads and history), and /var/oak:index (Lucene search indexes). Packaging this content freezes dynamic runtime data into a static snapshot, breaking AEM's ability to manage these areas. Deploying a package with /var content to production can corrupt all of these systems.",
  },

  {
    id: "cq-028",
    topic: "OakPAL Content Rules",
    question: "What is the naming convention violation that OAKPAL-008 prevents when defining a client library category as 'utils' or 'common'?",
    correctAnswers: [
      "Generic category names conflict with AEM core libraries or third-party integrations that use the same name",
      "Un-namespaced categories like 'utils' collide with existing clientlib categories from AEM Core Components or other projects",
      "Non-namespaced clientlib categories risk name collision since category names are global across the entire AEM instance",
      "Generic names are not unique — multiple packages can define clientlibs with the same category, causing unpredictable loading",
    ],
    incorrectAnswers: [
      "Generic names are blocked by the OSGi container because they are reserved keywords",
      "JCR requires category names to start with a project prefix for security reasons",
      "AEM will silently ignore any clientlib with an un-namespaced category name",
      "Un-namespaced categories fail to compile during the Maven build phase",
      "The Dispatcher cannot cache responses that include un-namespaced clientlibs",
      "Adobe's certification exam requires namespaced categories as a formality",
      "Generic category names cause the client library merge to fail at runtime",
      "HTL data-sly-call requires fully qualified namespace paths for all categories",
    ],
    explanation:
      "OAKPAL-008 (Severity: Minor) enforces clientlib category namespacing. Client library categories are strings referenced by HTL (data-sly-call='${clientlib.all @ categories=\"myname\"}') and must be globally unique within the AEM instance. Generic names like 'utils', 'common', or 'styles' are likely already used by AEM Core Components, third-party integrations, or other project packages. The fix: namespace with the project name: 'myproject.components.header', 'myproject.base'.",
  },

  {
    id: "cq-029",
    topic: "OakPAL Content Rules",
    question: "Which two repository areas in AEM are considered 'immutable' and must never be modified by content packages?",
    correctAnswers: [
      "/libs (AEM core) and /apps is code-only — direct /libs writes are Blocker violations",
      "/libs — completely immutable AEM core; and /var — managed at runtime by AEM itself",
      "/libs (read-only AEM layer) must never be written; /var (runtime area) must never be packaged",
      "According to OakPAL rules, /libs is a Blocker violation and /var is a Major violation to include in packages",
    ],
    incorrectAnswers: [
      "/content and /conf",
      "/apps and /content",
      "/home and /etc",
      "/conf and /libs",
      "/etc and /var",
      "/oak:index and /system",
      "/content and /libs",
      "/apps and /var",
    ],
    explanation:
      "Two areas have strict OakPAL protections: (1) /libs — OAKPAL-002 (Blocker) makes it completely off-limits for content packages; any customization must use the /apps overlay pattern. (2) /var — OAKPAL-007 (Major) prohibits packaging runtime data areas like eventing, audit logs, and workflow payloads. Both are managed by AEM itself and must never be overwritten by deployments.",
  },

  {
    id: "cq-030",
    topic: "OakPAL Content Rules",
    question: "In a compliant AEM content package filter.xml, which of the following filter configurations is correct for deploying components and templates?",
    correctAnswers: [
      "<filter root='/apps/myproject/components'/> and <filter root='/apps/myproject/templates'/> as separate non-overlapping entries",
      "Two separate scoped filters: one for /apps/myproject/components and one for /apps/myproject/templates",
      "Individual filters per subtree: components, templates, and clientlibs as separate <filter root='...'> entries",
      "Separate non-overlapping filter roots for each distinct content area: /apps/myproject/components and /apps/myproject/templates",
    ],
    incorrectAnswers: [
      "<filter root='/apps/myproject'/> — a single entry covering the entire project",
      "<filter root='/apps'/> — to cover all apps in the repository",
      "<filter root='/apps/myproject/components'/> nested inside <filter root='/apps/myproject'/>",
      "<filter root='/libs/myproject'/> — since /libs is where components are defined",
      "<filter root='/content/myproject'/> — since content pages contain component definitions",
      "<filter root='/var/myproject'/> — for runtime component registration",
      "A single <filter root='/apps/myproject' mode='replace'/> with mode set to replace",
      "<filter root='/apps'/> with include patterns for each subfolder",
    ],
    explanation:
      "Compliant filter configurations use scoped, non-overlapping filter roots for each distinct content area. Instead of <filter root='/apps/myproject'/> (which destructively overwrites the entire project on install), you use separate, focused filters: <filter root='/apps/myproject/components'/>, <filter root='/apps/myproject/templates'/>, <filter root='/apps/myproject/clientlibs'/>. Each filter covers only its specific area and does not overlap with the others.",
  },

  {
    id: "cq-031",
    topic: "OakPAL Content Rules",
    question: "What is the Severity level of OAKPAL-002 (Enforce Immutable Content Structure — /libs must not be modified)?",
    correctAnswers: [
      "Blocker — the highest severity level; the build fails and deployment is blocked",
      "Blocker severity — modifying /libs is a deployment blocker that prevents any package from being installed",
      "Blocker (highest severity): any filter targeting /libs blocks the Maven build and Cloud Manager pipeline",
      "Blocker — Cloud Manager stops the pipeline and requires the issue to be resolved before proceeding",
    ],
    incorrectAnswers: [
      "Critical",
      "Major",
      "Minor",
      "Error",
      "Warning",
      "Info",
      "Severe",
      "Fatal",
    ],
    explanation:
      "OAKPAL-002 carries Blocker severity — the most severe level in both SonarQube and OakPAL. A Blocker means the build absolutely cannot proceed; Cloud Manager stops the pipeline and requires the issue to be fixed before any deployment can happen. Modifying /libs is categorized as Blocker because it is guaranteed to break on the next AEM upgrade.",
  },

  {
    id: "cq-032",
    topic: "OakPAL Content Rules",
    question: "Which OakPAL check validates that jcr:primaryType is explicitly set on every JCR node in a content package, and what severity does it carry?",
    correctAnswers: [
      "oakpal:RequiredPrimaryType — Error severity",
      "The oakpal:RequiredPrimaryType rule with Error severity requires explicit jcr:primaryType on all nodes",
      "oakpal:RequiredPrimaryType (Error) — any node missing jcr:primaryType fails the OakPAL check",
      "Rule oakpal:RequiredPrimaryType at Error level — nodes without explicit primary types are rejected",
    ],
    incorrectAnswers: [
      "OAKPAL-003 — Blocker severity",
      "oakpal:RequiredPrimaryType — Warning severity",
      "OAKPAL-001 — Critical severity",
      "oakpal:ImmutableApps — Error severity",
      "OAKPAL-002 — Major severity",
      "oakpal:NodeType — Minor severity",
      "OAKPAL-005 — Error severity",
      "oakpal:PrimaryTypeCheck — Critical severity",
    ],
    explanation:
      "oakpal:RequiredPrimaryType carries Error severity and requires that every JCR node explicitly declares its jcr:primaryType property. The most common valid types are: cq:Page (for page nodes), cq:Component (for component definitions), nt:unstructured (for generic content), sling:Folder (for folder structures), and cq:ClientLibraryFolder (for clientlibs). Missing primary types can cause Sling resource resolution failures and repository import errors.",
  },


  // ── AEM BEST PRACTICES (14) ───────────────────────────────────────────────

  {
    id: "cq-033",
    topic: "AEM Best Practices",
    question: "AEM-BP-001 (Severity: Critical) requires that every ResourceResolver obtained from a ResourceResolverFactory must be explicitly closed. What Java pattern guarantees the resolver is closed even if an exception occurs?",
    correctAnswers: [
      "try-with-resources — ResourceResolver implements Closeable so it is automatically closed at the end of the try block",
      "Wrap the ResourceResolver in try-with-resources: try (ResourceResolver rr = factory.getServiceResourceResolver(params))",
      "Use try-with-resources since ResourceResolver implements AutoCloseable, ensuring close() is called on normal exit and exceptions",
      "try (ResourceResolver resolver = resolverFactory.getServiceResourceResolver(authMap)) { ... } — automatic cleanup guaranteed",
    ],
    incorrectAnswers: [
      "Use a finally block without try-with-resources to call resolver.close() manually",
      "Register a shutdown hook with Runtime.getRuntime().addShutdownHook() to close all resolvers on JVM exit",
      "The OSGi container automatically closes all ResourceResolvers when the bundle is deactivated",
      "Call resolver.revert() at the end of the method, which also closes the resolver",
      "Use a WeakReference so the garbage collector closes the resolver when memory is low",
      "AEM's built-in leak detection closes any unclosed resolvers after 60 seconds automatically",
      "Mark the method @PreDestroy so the resolver is closed when the OSGi component stops",
      "ResourceResolvers close themselves automatically when the JCR session becomes idle",
    ],
    explanation:
      "AEM-BP-001 (Critical): ResourceResolver implements java.io.Closeable/AutoCloseable. The try-with-resources pattern guarantees resolver.close() is called regardless of whether the block exits normally or via an exception. An unclosed ResourceResolver leaks an active JCR Session, consuming memory and file handles. Over time, leaked resolvers exhaust the session pool and crash the system. Each resolver obtained must be closed in the same method that obtained it.",
  },

  {
    id: "cq-034",
    topic: "AEM Best Practices",
    question: "Which specific Sling annotations are required to declare an OSGi service user mapping so a Sling Service can obtain a ResourceResolver without admin credentials, per AEM-BP-002?",
    correctAnswers: [
      "@ServiceUserMapped with @Reference to get the ServiceUserMapped service, then use resolverFactory.getServiceResourceResolver(Map.of(ResourceResolverFactory.SUBSERVICE, subServiceName))",
      "Annotate the component with @Component and specify the subservice name in resolverFactory.getServiceResourceResolver(authInfo) where authInfo contains SUBSERVICE key",
      "Use resolverFactory.getServiceResourceResolver(Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, 'myproject-read')) after declaring the mapping in an OSGi configuration",
      "Declare a service user mapping via org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl.amended config, then call factory.getServiceResourceResolver(Map.of(SUBSERVICE, name))",
    ],
    incorrectAnswers: [
      "Call resolverFactory.getAdministrativeResourceResolver(null) which is the modern replacement for admin sessions",
      "Inject @SlingObject ResourceResolver in a Sling Servlet handler to reuse the request resolver",
      "Use @Inject @OSGiService ResourceResolverFactory and call getResourceResolver() with empty map",
      "Call Session session = repository.loginAdministrative(null) and adapt it to ResourceResolver",
      "Annotate the class with @ServiceUser and pass the resolver to all methods that need JCR access",
      "Use resolverFactory.getResourceResolver(null) which defaults to the system user automatically",
      "Call JcrUtils.getSession(repository, Credentials.EMPTY) as the security-compliant alternative",
      "Use @UserRepository injection and call userRepository.getAdminResolver() for background services",
    ],
    explanation:
      "AEM-BP-002 (Major): The deprecated ResourceResolverFactory.getAdministrativeResourceResolver() was removed in AEM 6.5+. The replacement is the Service User pattern: (1) Create a system user in the repository (e.g., myproject-service), (2) Grant it the minimum required JCR permissions, (3) Declare the mapping in an OSGi factory config (ServiceUserMapperImpl.amended), (4) Call factory.getServiceResourceResolver(Map.of(ResourceResolverFactory.SUBSERVICE, 'myproject-read')). This follows the principle of least privilege.",
  },

  {
    id: "cq-035",
    topic: "AEM Best Practices",
    question: "AEM-BP-003 warns against calling resourceResolver.getResource() repeatedly inside a loop for the same path. What is the recommended solution?",
    correctAnswers: [
      "Cache the returned Resource object in a local variable before the loop and reuse it",
      "Resolve the resource once before the loop: Resource r = resolver.getResource(path); then use r inside the loop",
      "Pre-resolve all resources before iterating: call getResource() once per unique path and store results in a map",
      "Resolve each unique path exactly once outside the loop and reuse the cached Resource reference inside",
    ],
    incorrectAnswers: [
      "Use resolver.findChildren(path) inside the loop to avoid repeated getResource() calls",
      "Replace the loop with parallel streams to execute getResource() concurrently",
      "Call session.getRootNode().getNode(path.substring(1)) as a faster JCR alternative to getResource()",
      "Use resolver.findResources() with a JCR-SQL2 query instead of looping over paths",
      "Mark the ResourceResolver with @Cacheable so the JCR layer caches all lookups automatically",
      "Call resolver.refresh() before each getResource() call to ensure fresh results",
      "Use sling:resourceType lookup from the CQ5 API instead of JCR path-based getResource()",
      "Apply the @Inject annotation to let Sling Models cache the resolution automatically",
    ],
    explanation:
      "AEM-BP-003 (Warning): Each resourceResolver.getResource() call traverses the Sling Resource tree and may involve JCR reads. Calling it in a tight loop for the same path or repeatedly for the same set of items wastes CPU and causes unnecessary JCR session interaction. The fix is to resolve resources once, store them in local variables or a Map<String,Resource>, and reuse those references throughout the loop — especially important for loops processing hundreds of items.",
  },

  {
    id: "cq-036",
    topic: "AEM Best Practices",
    question: "Which AEM Best Practice rule (AEM-BP-004) recommends that business logic should be encapsulated in Sling Models rather than placed directly in HTL scripts or in Java Servlets?",
    correctAnswers: [
      "Use Sling Models for Business Logic",
      "AEM-BP-004 — Sling Models are the recommended place for component business logic, not HTL or servlets",
      "The Best Practice that moves computation and data-preparation code out of HTL files and into @Model-annotated Java classes",
      "AEM-BP-004: annotate POJOs with @Model and inject dependencies via @ValueMapValue/@ChildResource to keep HTL purely presentational",
    ],
    incorrectAnswers: [
      "AEM-BP-001 — Avoid ResourceResolver Leaks",
      "AEM-BP-002 — Use Service Users Instead of Admin Sessions",
      "AEM-BP-003 — Cache ResourceResolver Calls",
      "AEM-BP-005 — Avoid Thread-Unsafe Operations in OSGi Services",
      "AEM-BP-006 — Use AEM APIs Over Raw JCR",
      "AEM-BP-007 — Configure OSGi Components Properly",
      "AEM-BP-008 — Avoid Hardcoded Paths in Code and Config",
      "AEM-BP-009 — Prefer Sling Adaptables Over Direct API Calls",
    ],
    explanation:
      "AEM-BP-004 (Major): The correct layering is: Sling Model (business logic and data transformation) → HTL template (pure presentation, no logic). HTL's design-by-contract intentionally makes it hard to write logic — no imperative code, only data access via expressions. Placing business logic in HTL (e.g., complex data.sly-use.helper calls with heavy computation) or in Servlets that duplicate component data preparation violates this separation and makes code untestable.",
  },

  {
    id: "cq-037",
    topic: "AEM Best Practices",
    question: "An OSGi service annotated with @Component is a singleton shared across all threads. What does AEM-BP-005 require regarding instance field usage?",
    correctAnswers: [
      "Instance fields must be stateless or thread-safe — use method-local variables or AtomicReference/volatile for shared state",
      "Store no mutable state in instance fields; use local variables inside each method for per-request data",
      "Never use non-final, non-thread-safe instance fields in @Component classes — all request state must be in local variables",
      "Instance fields must be immutable (final) or explicitly synchronized — per-thread data belongs in method-local variables",
    ],
    incorrectAnswers: [
      "OSGi services are instantiated once per request, so instance fields are safe to use for request-scoped data",
      "Use synchronized on all methods to make mutable instance fields safe in OSGi components",
      "Annotate instance fields with @ThreadLocal to make them automatically thread-safe",
      "The OSGi container creates a pool of service instances so instance fields are never shared",
      "Mark instance fields with volatile; this makes them fully thread-safe for any data type",
      "Use @RequestScoped instead of @Component to get a per-request OSGi service instance",
      "Instance fields are safe as long as you always write before read within the same method",
      "OSGi's circular reference mechanism prevents concurrent access to instance fields",
    ],
    explanation:
      "AEM-BP-005 (Critical): An OSGi @Component is a singleton — one instance serves all concurrent requests and background tasks. Using instance fields to store request-specific data creates race conditions. For example, setting this.currentPage = request.getResource().adaptTo(Page.class) in one thread can be overwritten by another thread before the first thread reads it. Fix: always use method-local variables for per-request state, and use AtomicReference/volatile/synchronized only for truly shared state that needs to persist between calls.",
  },

  {
    id: "cq-038",
    topic: "AEM Best Practices",
    question: "AEM-BP-006 recommends using AEM's high-level APIs (PageManager, TagManager, AssetManager) instead of interacting directly with the JCR API. Why?",
    correctAnswers: [
      "High-level APIs abstract JCR details, handle AEM business rules (version control, tagging, workflow), and are more stable across upgrades",
      "AEM APIs encapsulate domain-specific behavior, ensure compliance with AEM content models, and hide JCR complexity",
      "Using PageManager/TagManager ensures AEM's content integrity rules (versioning, replication triggers) are applied — raw JCR bypasses these",
      "High-level AEM APIs apply the correct node types, fire the right events, and handle AEM-specific logic that raw JCR calls would miss",
    ],
    incorrectAnswers: [
      "The JCR API is slower than the AEM API because it requires an extra translation layer",
      "Raw JCR calls are blocked by OSGi security policies in AEM as a Cloud Service",
      "AEM APIs are statically typed while JCR API uses generic Property objects, causing runtime errors",
      "The JCR API doesn't support multi-tenancy, so AEM APIs are required for tenant isolation",
      "High-level APIs auto-commit sessions so you don't have to call session.save() manually",
      "AEM APIs are faster because they use an in-memory cache that the raw JCR API lacks",
      "Using raw JCR violates AEM's license agreement and triggers audit log warnings",
      "The JCR API is deprecated in Oak 1.42+ and all calls will throw UnsupportedOperationExceptions",
    ],
    explanation:
      "AEM-BP-006 (Major): Raw JCR API calls bypass AEM's higher-level business rules. PageManager.create() applies the correct cq:Page node structure, triggers page creation events, and handles template inheritance. AssetManager.createAsset() runs DAM workflows and sets the correct asset metadata. TagManager.resolve() handles tag namespacing and fallback resolution. Raw node creation via session.getNode().addNode() can create malformed content that violates AEM's assumptions.",
  },

  {
    id: "cq-039",
    topic: "AEM Best Practices",
    question: "What is the primary purpose of the @Activate and @Modified lifecycle methods in an OSGi @Component class, as required by AEM-BP-007?",
    correctAnswers: [
      "They read the OSGi configuration annotation interface and initialize the component's state when the bundle activates or config changes",
      "@Activate initializes component state from the OSGi configuration on bundle startup; @Modified re-initializes when config changes without restarting",
      "They bind the OSGi configuration descriptor (@interface) to the component's runtime state, called by the container on activation and reconfiguration",
      "Both read the typed configuration interface injected by OSGi and set up the component; @Activate on first start, @Modified on config update",
    ],
    incorrectAnswers: [
      "@Activate starts the OSGi bundle; @Modified triggers a Maven build to update the configuration",
      "They are used to register and unregister the component with the OSGi Service Registry",
      "@Activate opens the JCR session; @Modified commits any pending JCR changes",
      "They are equivalent — using either one is fine; OSGi treats them identically",
      "@Activate creates the componentContext; @Modified destroys and recreates the entire bundle",
      "They define the OSGi configuration schema and generate the Felix Web Console forms",
      "@Activate logs the component startup; @Modified sends a JMX notification to monitoring tools",
      "They control bundle ordering — @Activate fires when all dependencies are satisfied; @Modified when one is replaced",
    ],
    explanation:
      "AEM-BP-007 (Major): OSGi DS (Declarative Services) manages the @Component lifecycle. @Activate is called when all @Reference dependencies are bound and the component becomes active — typically on bundle installation or server startup. @Modified is called when the component's OSGi configuration changes in the Felix console or via a deployed config without requiring a full restart. Both receive the typed @interface configuration object, allowing the component to read and cache configuration values for use during service method calls.",
  },

  {
    id: "cq-040",
    topic: "AEM Best Practices",
    question: "AEM-BP-008 forbids hardcoded paths like '/content/mysite/en' directly in Java code. What is the recommended alternative?",
    correctAnswers: [
      "Externalize paths to OSGi configuration properties, Sling mappings, or Context-Aware Configurations (CAConfig)",
      "Use OSGi @AttributeDefinition configuration or Context-Aware Configurations to make paths configurable per environment",
      "Store environment-specific paths in OSGi factory configurations or Sling CA Configs rather than hardcoding them in Java",
      "Read paths from OSGi configuration (run-mode-specific .cfg.json files) or Context-Aware Config to support multiple environments",
    ],
    incorrectAnswers: [
      "Store hardcoded paths in static final constants so they are at least centralized and easy to find",
      "Use a Java properties file bundled inside the OSGi bundle to hold all path constants",
      "Put paths in a JCR node under /apps/myproject/config/paths and read them with ResourceResolver",
      "Hardcode the paths but add a TODO comment asking future developers to make them configurable",
      "Use System.getProperty() to read paths from Java system properties set in start.sh",
      "Create an AEM Replication Agent that rewrites hardcoded paths during content activation",
      "Add paths as query string parameters in HTL templates so content authors can change them",
      "Store paths in a JavaScript configuration object loaded by the clientlib at runtime",
    ],
    explanation:
      "AEM-BP-008 (Major): Hardcoded paths like '/content/mysite/en' break across environments (different content trees) and tenant configurations. The recommended alternatives are: (1) OSGi @Component configuration with @AttributeDefinition for service-level paths, deployed as run-mode-specific .cfg.json files in the repository. (2) Context-Aware Configurations (CAConfig) for component-level paths that vary by site or locale. (3) Sling URL Mappings for runtime URL transformation. All three allow the same code to run correctly in dev, staging, and production.",
  },

  {
    id: "cq-041",
    topic: "AEM Best Practices",
    question: "What is the critical difference between calling resourceResolverFactory.getAdministrativeResourceResolver() and getServiceResourceResolver() in modern AEM?",
    correctAnswers: [
      "getAdministrativeResourceResolver() is deprecated/removed in AEM 6.5+ and uses super-admin credentials; getServiceResourceResolver() uses a least-privilege service user",
      "getAdministrativeResourceResolver() is a security hole giving full repository access; getServiceResourceResolver() limits access to only what the service user has been granted",
      "The admin resolver was removed in AEM as a Cloud Service; only getServiceResourceResolver() with a named service user and mapping is supported",
      "Admin resolver bundles are blocked by OSGi security; service resolver requires a system user with explicit ACL grants, which is the compliant approach",
    ],
    incorrectAnswers: [
      "They are functionally identical — getServiceResourceResolver() is just the non-deprecated name for the same admin session",
      "getAdministrativeResourceResolver() returns a read-only resolver; getServiceResourceResolver() returns a writable one",
      "getServiceResourceResolver() requires a username and password parameter; getAdministrativeResourceResolver() uses the system keystore",
      "getAdministrativeResourceResolver() is faster because it bypasses all ACL checks",
      "getServiceResourceResolver() is for frontend services; getAdministrativeResourceResolver() is for backend OSGi components",
      "Both work in AEM 6.5+ — the choice depends only on whether the caller is in the same bundle as the factory",
      "getAdministrativeResourceResolver() uses the JCR admin account; getServiceResourceResolver() uses the CRX admin account",
      "getServiceResourceResolver() requires an LDAP server configuration; getAdministrativeResourceResolver() uses local accounts only",
    ],
    explanation:
      "AEM-BP-002 and security best practices: getAdministrativeResourceResolver(null) was deprecated in AEM 6.2, blocked in AEM 6.4+, and removed in AEM as a Cloud Service. It gave the caller full super-administrator access to the entire JCR — a severe security risk. getServiceResourceResolver(Map.of(SUBSERVICE, 'name')) uses a system user with only the specific permissions it needs (principle of least privilege). The OSGi bundle's service user mapping controls exactly which JCR paths the service can access.",
  },

  {
    id: "cq-042",
    topic: "AEM Best Practices",
    question: "Which Java code properly adapts an AEM Resource to a Sling Model in a component's Use-Provider, following AEM-BP-004?",
    correctAnswers: [
      "resource.adaptTo(MyModel.class) — Sling's adaptable mechanism binds to the @Model annotated class",
      "resource.adaptTo(MyModel.class) where MyModel is annotated with @Model(adaptables=Resource.class)",
      "SlingBindings.getResource().adaptTo(MyModel.class) where MyModel carries @Model(adaptables={Resource.class,SlingHttpServletRequest.class})",
      "@Model(adaptables=Resource.class) on the POJO, then resource.adaptTo(MyModel.class) in the Use-Provider — returns null if adaptation fails",
    ],
    incorrectAnswers: [
      "new MyModel(resource) — instantiate the Sling Model directly using the resource constructor",
      "MyModel model = (MyModel) resource.getValueMap().get('sling:model', Object.class)",
      "ModelFactory.getModelFromWrappedRequest(request, resource, MyModel.class)",
      "SlingModels.from(resource, MyModel.class).get()",
      "request.getAttribute(MyModel.class.getName()) after Sling injects the model at request time",
      "@Inject @Named('model') MyModel myModel — field injection works the same way as adaptTo",
      "ComponentHelper.getModel(slingScriptHelper, MyModel.class)",
      "resource.getValueMap().get('jcr:primaryType', MyModel.class)",
    ],
    explanation:
      "AEM-BP-004: Sling Models are adapters. The @Model(adaptables=Resource.class) annotation registers the class with Sling's AdapterManager. When adaptTo(MyModel.class) is called on a Resource, Sling finds the registered adapter, instantiates the model, and injects all @ValueMapValue, @ChildResource, @OSGiService, and other annotated fields. The method returns null if the adaptation fails (e.g., requiredInterfaces not met) or ModelAdaptionException if validation fails.",
  },

  {
    id: "cq-043",
    topic: "AEM Best Practices",
    question: "Why must you never use an instance field 'private String currentPath;' in an OSGi @Component Servlet, per AEM-BP-005?",
    correctAnswers: [
      "The Servlet is a singleton — concurrent requests from different users share the same instance, so writing to currentPath in one thread corrupts it for another",
      "OSGi Servlets are singletons: thousands of concurrent requests use the same object instance, making instance fields a race condition",
      "There is only one instance of the Servlet; two simultaneous requests can read and write currentPath at the same time, producing data corruption",
      "Storing per-request data in an instance field causes race conditions because the single servlet instance is shared across all threads",
    ],
    incorrectAnswers: [
      "The Servlet is re-created for each request, so instance fields waste memory but are functionally safe",
      "OSGi creates a separate instance per user session, so instance fields are scoped to one user at a time",
      "Instance fields in Servlets are stored in ThreadLocal automatically by the Sling engine",
      "HTTP Servlets extend ThreadSafeServlet in AEM, making instance fields always thread-safe",
      "Sling's dispatcher locks the Servlet while a request is processing, preventing concurrent access",
      "Instance fields are garbage collected after each request, so they cannot accumulate incorrect state",
      "The OSGi security manager prevents two threads from accessing the same field simultaneously",
      "Sling Servlets are @ServiceScoped so the container provides thread isolation for instance fields",
    ],
    explanation:
      "AEM-BP-005 (Critical): An OSGi component annotated with @Component(service=Servlet.class) is a singleton — exactly one Java object instance is created and shared across all concurrent HTTP requests. If Thread A writes this.currentPath = '/content/page-A' and Thread B writes this.currentPath = '/content/page-B' at the same time, Thread A may read '/content/page-B' when it next accesses currentPath. The fix: always use method-local variables (String currentPath = request.getPathInfo()) so each stack frame has its own copy.",
  },

  {
    id: "cq-044",
    topic: "AEM Best Practices",
    question: "What is Context-Aware Configuration (CAConfig) in AEM and why is it preferred over hardcoded paths for site-specific settings?",
    correctAnswers: [
      "CAConfig stores settings in the JCR at configurable paths (e.g., /conf/mysite) and resolves them automatically for the current content resource using Sling's lookup chain",
      "Context-Aware Config provides per-site OSGi-like configuration stored in /conf that Sling resolves by walking up the content tree from the current resource",
      "CAConfig is Sling's mechanism to store settings in /conf/<site> and resolve them based on the rendering context, supporting site-specific overrides without code changes",
      "It is a Sling API that reads configuration from /conf hierarchy relative to the current page, allowing different sites to have different service URLs and paths",
    ],
    incorrectAnswers: [
      "CAConfig is an OSGi factory configuration that creates one service instance per run mode",
      "Context-Aware Config stores settings in the AEM user profile and returns values specific to the logged-in author",
      "CAConfig reads Java system properties prefixed with 'com.adobe.aem.context-aware' at startup",
      "It is a CloudManager variable injection mechanism that sets environment variables per program",
      "CAConfig stores config in /etc/cloudservices and applies them to pages that reference the cloud service",
      "Context-Aware Configuration is the Felix Web Console UI for viewing component configurations",
      "CAConfig is AEM's way of caching OSGI config reads so getConfiguration() is only called once",
      "It is an Adobe Analytics-specific feature that configures tracking per content page",
    ],
    explanation:
      "AEM-BP-008 and CAConfig: Context-Aware Configuration (org.apache.sling.caconfig) stores site-specific settings in /conf/<site-name> as JCR content nodes. When a component calls ConfigurationBuilder.as(MyConfig.class), Sling walks up the content tree from the current resource (e.g., /content/mysite/en/page → /content/mysite/en → /content/mysite) looking for a sling:configRef pointing to /conf. This allows the same code to return different API keys, paths, or settings for different sites without code changes.",
  },

  {
    id: "cq-045",
    topic: "AEM Best Practices",
    question: "What is the minimum required information that must be declared in a Sling Service User Mapping configuration for getServiceResourceResolver() to work?",
    correctAnswers: [
      "Bundle symbolic name (or bundle:subservice) mapped to a repository system user name in ServiceUserMapperImpl.amended",
      "The OSGi Bundle-SymbolicName and the subservice name (optional) mapped to a system user in the ServiceUserMapper factory config",
      "In org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl.amended: bundleId and subservice mapped to the system user account name",
      "At minimum: bundle symbolic name = system user name in a ServiceUserMapperImpl.amended-<pid>.cfg.json file in /apps/.../config",
    ],
    incorrectAnswers: [
      "Username and password of an existing AEM author account in the Users admin panel",
      "The bundle symbolic name and the full JCR path of the user node under /home/users",
      "An LDAP group name and the service's Maven artifactId in the Felix system console",
      "The OSGi PID of the component and the system user's encrypted password from the CRX login page",
      "A cloud environment variable containing the service user token issued by Adobe IMS",
      "Bundle symbolic name and the SHA-256 hash of the service user's default password",
      "The service component name (@Component name property) and the user's full Distinguished Name",
      "Only the subservice name is needed — bundle-to-user mapping is inferred from the @Component class name",
    ],
    explanation:
      "AEM-BP-002: The ServiceUserMapperImpl.amended OSGi factory configuration maps a bundle/subservice pair to a repository system user. A minimal entry looks like: user.mapping=['com.myproject.bundle:mysubservice=myproject-service-user']. This tells Sling: 'when bundle com.myproject.bundle calls getServiceResourceResolver with SUBSERVICE=mysubservice, return a resolver backed by the system user myproject-service-user'. The system user must be created in /home/users/system and granted appropriate JCR ACL permissions.",
  },

  {
    id: "cq-046",
    topic: "AEM Best Practices",
    question: "When should you use TagManager.resolve(String tagId) instead of directly accessing the tag node via resourceResolver.getResource()?",
    correctAnswers: [
      "Always — TagManager handles AEM's tag namespacing convention, fallback resolution, and cross-namespace lookups automatically",
      "When working with AEM tags, always use TagManager since it resolves namespaced tag IDs like 'properties:orientation/landscape' to their JCR nodes correctly",
      "Use TagManager because it translates AEM tag identifiers (namespace:path) to JCR paths and handles the /content/cq:tags root automatically",
      "TagManager.resolve() is the correct API because it applies AEM's tag resolution rules including namespace expansion and fallback hierarchy",
    ],
    incorrectAnswers: [
      "Use TagManager only when the tag has a custom namespace; for default tags under /etc/tags use resourceResolver directly",
      "Use resourceResolver.getResource('/content/cq:tags/' + tagId) which is faster since it avoids the TagManager lookup",
      "TagManager is only required when the tag has localized titles; otherwise direct resource lookup is equivalent",
      "Use TagManager only in servlets; in Sling Models, always use resourceResolver for consistency",
      "TagManager is deprecated — use the Granite Tag API from com.adobe.granite.tagging instead",
      "Direct resource lookup is preferred because TagManager makes an extra JCR query for each call",
      "Use TagManager only for creating new tags; for reading existing tags, resourceResolver is sufficient",
      "TagManager is only available in the context of a CQ Page; in OSGi services use resourceResolver directly",
    ],
    explanation:
      "AEM-BP-006: AEM's tag system uses a namespaced identifier format (e.g., 'properties:orientation/landscape') that maps to JCR nodes under /content/cq:tags. TagManager.resolve(tagId) handles the namespace-to-path translation, fallback to default namespace, and tag hierarchy traversal. Using resourceResolver.getResource('/content/cq:tags/' + tagId) fails for tags with namespace separators, localized tag paths, or tags migrated from /etc/tags in older AEM versions.",
  },


  // ── HTL / SIGHTLY TEMPLATE LANGUAGE (12) ─────────────────────────────────

  {
    id: "cq-047",
    topic: "HTL / Sightly",
    question: "HTL-001 (Severity: Major) flags the use of context='unsafe' in HTL expressions. What does this context option do and why is it prohibited?",
    correctAnswers: [
      "context='unsafe' disables all HTL XSS escaping — output is inserted into the DOM raw and unescaped, enabling XSS attacks",
      "It bypasses HTL's automatic output escaping entirely, allowing any string (including attacker-controlled input) to be injected as raw HTML",
      "context='unsafe' turns off all escaping for the expression value — it is the only way to inject arbitrary HTML/JS and is a direct XSS vector",
      "The unsafe context tells HTL to perform zero escaping on the expression, outputting the raw string directly — a critical XSS vulnerability",
    ],
    incorrectAnswers: [
      "context='unsafe' renders the expression server-side instead of client-side, which is slower but not a security issue",
      "It allows HTL to access private Java fields that are normally restricted by the HTL EL resolver",
      "context='unsafe' encrypts the expression output to prevent tampering in transit",
      "It causes the expression to be evaluated in a separate isolated thread for safety",
      "context='unsafe' is a development-only flag that enables verbose error messages in the browser",
      "It allows HTL expressions to call Java methods with void return type",
      "context='unsafe' disables caching of the rendered output for this particular expression",
      "It changes the expression output from UTF-8 to ISO-8859-1 encoding for legacy browser compatibility",
    ],
    explanation:
      "HTL-001 (Major): HTL's primary security feature is automatic output escaping. Every '${expression}' is HTML-escaped by default — turning < into &lt;, > into &gt;, and ' into &#39;. Using context='unsafe' removes this protection completely: '${userInput @ context='unsafe'}' writes the raw value directly into the HTML output. If userInput contains '<script>alert(1)</script>', this executes as JavaScript in the victim's browser — a stored or reflected XSS vulnerability.",
  },

  {
    id: "cq-048",
    topic: "HTL / Sightly",
    question: "When is context='html' the correct HTL output context to use, and what security mechanism does HTL still apply?",
    correctAnswers: [
      "Use context='html' only for trusted, pre-validated rich text from the CMS RTE — HTL applies Anti-Samy sanitization to remove dangerous tags/attributes",
      "context='html' should be used for RTE-authored rich text already stored as HTML; HTL runs it through a whitelist HTML sanitizer (Anti-Samy) before output",
      "For pre-sanitized HTML from the AEM Rich Text Editor — HTL applies Anti-Samy HTML filtering that strips script tags, event handlers, and dangerous attributes",
      "context='html' is for HTML content stored by AEM's RTE; HTL still runs Anti-Samy sanitization to block XSS even within trusted-source HTML values",
    ],
    incorrectAnswers: [
      "context='html' should be used for all user-provided text inputs to enable HTML formatting",
      "Use context='html' for any dynamic data that might contain HTML — it is safer than context='unsafe'",
      "context='html' disables sanitization to preserve the full HTML content as authored",
      "context='html' encodes all HTML special characters, performing the same escaping as the default context",
      "context='html' is for inline SVG content that needs to be embedded without encoding",
      "Use context='html' when outputting JSON data within an HTML data attribute",
      "context='html' compresses the HTML output for faster page load times",
      "context='html' converts block elements to inline elements for proper HTL rendering",
    ],
    explanation:
      "HTL-001 and security: context='html' is the correct context for HTML-formatted rich text that comes from the CMS RTE (Rich Text Editor). Unlike context='unsafe' (no protection), context='html' runs the value through Adobe's Anti-Samy HTML whitelist sanitizer, which strips dangerous elements (script, object, embed) and event handler attributes (onclick, onerror) while preserving safe formatting tags (p, strong, em, ul, li, a with safe href). Never use context='html' for user-submitted form data.",
  },

  {
    id: "cq-049",
    topic: "HTL / Sightly",
    question: "HTL-002 (Severity: Major) requires using data-sly-use to bind Java Sling Models or WCMUsePojo for business logic. Why does data-sly-use enforce this separation?",
    correctAnswers: [
      "data-sly-use delegates business logic to Java/JS Use-API objects while keeping HTL purely declarative — no JSP-style scriptlets",
      "It separates concerns: data-sly-use binds a Java class for logic; HTL template (only HTML + attributes) avoids mixing computation and markup",
      "HTL's design prohibits scriptlets by design — data-sly-use.model='${SlingModel}' is the only approved mechanism for non-trivial Java interaction",
      "data-sly-use binds computation to a type-safe Java or JavaScript provider, keeping HTL as a pure template for maintainability and testability",
    ],
    incorrectAnswers: [
      "data-sly-use is only required when the logic involves database calls — simple property reads can be done inline",
      "data-sly-use is optional; complex logic can alternatively be written directly in HTL attribute expressions",
      "data-sly-use imports JavaScript libraries for client-side computation to reduce server load",
      "It is a performance optimization that pre-compiles Java code into binary bytecode before rendering",
      "data-sly-use auto-generates REST endpoints for the bound class, enabling client-side data fetching",
      "It allows HTL to extend other HTL templates using Java inheritance patterns",
      "data-sly-use encrypts the class name to prevent reverse engineering of the component's logic",
      "It registers the component with the AEM Component Registry for use in the Template Editor",
    ],
    explanation:
      "HTL-002 (Major): HTL was designed as a template language with intentionally limited expressiveness — it cannot execute arbitrary Java or perform complex computations inline. data-sly-use.model='com.myproject.MyModel' (or data-sly-use.model='${model}' with Sling Models) injects a Java Use-API object into the template, providing access to pre-computed properties. This enforces MVC separation: the @Model handles all data preparation and business logic; the HTL file handles only presentation.",
  },

  {
    id: "cq-050",
    topic: "HTL / Sightly",
    question: "Which HTL attribute causes its element and all its children to be removed from the DOM output if the condition expression evaluates to false?",
    correctAnswers: [
      "data-sly-test",
      "data-sly-test='${condition}' — removes the element and all its children when condition is falsy",
      "The data-sly-test attribute: the element is entirely omitted from the rendered HTML output if the test evaluates to false",
      "data-sly-test (HTL's conditional rendering attribute) — omits the entire subtree when its expression returns falsy",
    ],
    incorrectAnswers: [
      "data-sly-attribute",
      "data-sly-call",
      "data-sly-use",
      "data-sly-include",
      "data-sly-resource",
      "data-sly-list",
      "data-sly-template",
      "data-sly-unwrap",
    ],
    explanation:
      "HTL conditional rendering uses data-sly-test. When '${myModel.showSection}' is false/null/empty, the element with data-sly-test and its entire subtree are suppressed from the output. Falsy values are: false, null, 0, empty string, empty array/collection. The truthy check is the opposite of these. This is roughly equivalent to JSP's '<c:if test='...'>' but more readable and type-safe.",
  },

  {
    id: "cq-051",
    topic: "HTL / Sightly",
    question: "What does the 'data-sly-unwrap' HTL attribute do to the element it is placed on?",
    correctAnswers: [
      "It renders the element's children while removing the element's own start and end tags from the output",
      "data-sly-unwrap removes the wrapper element itself but keeps all its child content — useful for logical grouping without extra DOM nodes",
      "The attribute strips the host element's tags from the HTML while preserving and outputting all children",
      "data-sly-unwrap is HTL's 'no-op wrapper' — the element's tag is not rendered but all its children are",
    ],
    incorrectAnswers: [
      "It removes the element and all its children from the DOM output (same as data-sly-test=false)",
      "It converts block elements like div to inline elements like span for CSS flexibility",
      "data-sly-unwrap escapes the element's content for use inside a CSS string",
      "It moves the element's children to a new position in the DOM specified by a selector expression",
      "data-sly-unwrap renders the element with no HTML attributes but keeps the element tags",
      "It collapses nested elements by merging parent and child into a single element",
      "data-sly-unwrap disables the element so it cannot receive user interactions",
      "It removes the element's CSS classes and inline styles while keeping the tag and content",
    ],
    explanation:
      "HTL data-sly-unwrap allows grouping of logic without adding extra HTML elements. '<div data-sly-unwrap><p>content</p></div>' renders only '<p>content</p>' — the <div> wrapper is not output. This is useful for wrapping multiple sibling elements under a single data-sly-test or data-sly-list condition without polluting the HTML structure. Equivalent to React's Fragment or Vue's template tag.",
  },

  {
    id: "cq-052",
    topic: "HTL / Sightly",
    question: "HTL-004 requires the correct output context for expressions placed inside a JavaScript event handler attribute (e.g., onclick). Which context should be used?",
    correctAnswers: [
      "context='scriptToken' for safe identifier values, or context='scriptString' for string values — never 'unsafe' for inline JS",
      "Use context='scriptString' when the value is a string argument in JS, ensuring it is properly escaped for JavaScript string embedding",
      "For JavaScript attribute contexts, use HTL's script-aware contexts: scriptToken for identifiers, scriptString for string literals",
      "context='scriptToken' (for safe JS identifiers) or context='scriptString' (for JS string values) — both apply JavaScript-aware escaping",
    ],
    incorrectAnswers: [
      "context='html' — because onclick is an attribute and HTML encoding is sufficient",
      "context='attribute' — the default attribute context works for all attribute values including JS",
      "context='unsafe' combined with manual escaping using String.replace()",
      "context='uri' — because JavaScript URIs must be percent-encoded",
      "context='text' — the same escaping used for HTML text nodes works in JS",
      "No context annotation is needed — HTL detects onclick as a JavaScript context automatically",
      "context='script' — this is a valid HTL context value for all inline JavaScript",
      "context='json' — because JavaScript uses JSON syntax for all values",
    ],
    explanation:
      "HTL-004 (Major): Expression output context must match the syntactic context it appears in. For inline JavaScript, incorrect escaping can create XSS vulnerabilities. HTL provides: context='scriptToken' for values used as JS identifiers or numbers (allows only safe characters), and context='scriptString' for values embedded inside JS string literals (applies JS string escaping with \\u encoding). The default HTML attribute escaping (context='attribute') does not protect against JavaScript injection within event handlers.",
  },

  {
    id: "cq-053",
    topic: "HTL / Sightly",
    question: "Which HTL attribute and syntax is used to include another HTL component template by calling a defined template from the same or a different HTL file?",
    correctAnswers: [
      "data-sly-call='${templates.myTemplate @ param1=value1}' after importing the template file with data-sly-use",
      "data-sly-template defines the template in another file; data-sly-call=\"${file.templateName @ param=val}\" invokes it",
      "data-sly-use.templates='path/to/file.html' to import, then data-sly-call='${templates.myBlock @ title=model.title}'",
      "Import with data-sly-use.t='/apps/project/components/base/base.html', then call with data-sly-call='${t.header @ navItems=items}'",
    ],
    incorrectAnswers: [
      "data-sly-include='path/to/component.html' — this is how you call named templates",
      "data-sly-resource='path/to/component' with resourceType attribute pointing to another template",
      "data-sly-replace='${templates.myTemplate}' swaps the current element with the template output",
      "data-sly-delegate='${componentPath}' forwards rendering to the referenced component",
      "data-sly-extends='${parentTemplate}' invokes the parent template passing child data",
      "data-sly-invoke.result='${templateName}' stores the rendered output in a variable",
      "data-sly-mixin='${mixinPath}' applies the mixin template to the current element",
      "data-sly-bind='${templates.myTemplate}' renders the template at the current position",
    ],
    explanation:
      "HTL Template Calling: To call a template, first import the file containing it: '<div data-sly-use.t='/apps/project/components/base/base.html'></div>', then call the specific template: '<sly data-sly-call='${t.myBlock @ title=model.title, items=model.navItems}'/>'. data-sly-template defines a reusable HTML block with parameters; data-sly-call invokes it. Note: data-sly-include includes a full HTL script (passing the current context); data-sly-call invokes just the named template block.",
  },

  {
    id: "cq-054",
    topic: "HTL / Sightly",
    question: "In HTL, what is the difference between data-sly-include and data-sly-resource?",
    correctAnswers: [
      "data-sly-include includes another HTL script in the same component context; data-sly-resource includes a JCR resource resolved by path, running its full Sling rendering pipeline",
      "data-sly-include is a server-side include of another script file; data-sly-resource renders a JCR node using its sling:resourceType component",
      "data-sly-include includes an HTL/JSP file directly; data-sly-resource dispatches a full Sling request for the resource at the given path",
      "Include processes another script in the current rendering context; resource creates a new Sling forward request to render a JCR node through its component",
    ],
    incorrectAnswers: [
      "They are identical — both include external HTL files at the current position",
      "data-sly-include is asynchronous; data-sly-resource is synchronous for blocking content loading",
      "data-sly-include works for HTML files only; data-sly-resource works for JSON and HTML files",
      "data-sly-include is cache-aware; data-sly-resource bypasses the Dispatcher cache",
      "data-sly-resource is deprecated — use data-sly-include with the resourceType attribute instead",
      "data-sly-include applies to files in the /apps folder only; data-sly-resource works in /content",
      "data-sly-include runs component scripts synchronously; data-sly-resource runs them in background threads",
      "data-sly-resource renders the resource without any HTL processing; it outputs raw JCR content",
    ],
    explanation:
      "HTL includes: data-sly-include='/apps/project/scripts/header.html' evaluates the referenced HTL (or JSP) script in the current Sling rendering context — same request, same resource, same resolver. data-sly-resource='${myResource}' (or a path) dispatches a new Sling include request for that JCR resource, which causes Sling to look up its sling:resourceType and render it through the full component rendering pipeline, including any associated Use-API objects and child scripts.",
  },

  {
    id: "cq-055",
    topic: "HTL / Sightly",
    question: "HTL-003 requires always specifying an explicit output context for URI expressions. Which context prevents open redirect and XSS attacks for href attribute values?",
    correctAnswers: [
      "context='uri' — validates the URI structure and strips dangerous javascript: and data: scheme prefixes",
      "Use context='uri' for href and src attributes; it validates the URI scheme and blocks protocol-relative and JavaScript-scheme URIs",
      "context='uri' is required for all URI attribute outputs — it rejects javascript:, data:, and vbscript: schemes that could execute scripts",
      "For href values, context='uri' strips dangerous URI schemes while allowing safe http, https, mailto, and relative paths",
    ],
    incorrectAnswers: [
      "context='attribute' — the default attribute context is sufficient for all attribute values including URIs",
      "context='html' — HTML encoding converts & to &amp; which is all that's needed for URIs",
      "context='text' — text encoding handles angle brackets and quotes in URIs",
      "context='scriptString' — because URIs can appear in JavaScript onclick handlers",
      "context='unsafe' with manual URL encoding via encodeURIComponent()",
      "No special context is needed — Sling URL mapping automatically validates all URIs",
      "context='styleToken' — CSS url() values require the style token context for HREF attributes",
      "context='json' — because URIs are typically transferred as JSON strings between components",
    ],
    explanation:
      "HTL-003 (Major): Without context='uri', an attacker can inject javascript:alert(1) as an href value. The default attribute context encodes HTML special characters but does NOT validate URI schemes. context='uri' applies URI scheme validation, blocking javascript:, data:, vbscript:, and other dangerous schemes. Safe schemes (http, https, relative paths, mailto, #anchors) pass through; unsafe ones are replaced with an empty string or '#', preventing protocol injection.",
  },

  {
    id: "cq-056",
    topic: "HTL / Sightly",
    question: "How does HTL's data-sly-list attribute iterate over a collection, and what implicit loop variables does it provide?",
    correctAnswers: [
      "data-sly-list.item='${model.items}' iterates the collection; provides itemList.index (0-based), itemList.count (1-based), itemList.first, itemList.last, itemList.odd, itemList.even",
      "data-sly-list.varName='${collection}' — loop variable is varName; status is varNameList with .index, .count, .first, .last, .odd, .even properties",
      "Syntax: data-sly-list.item='${items}'; loop metadata available as itemList.index (0-based position), itemList.first (boolean), itemList.last (boolean)",
      "data-sly-list.el='${myModel.children}' loops the element for each item; elList.count gives total size; elList.index is zero-based; elList.first/last are booleans",
    ],
    incorrectAnswers: [
      "data-sly-list provides $forloop.index with 1-based counting and $forloop.last boolean",
      "data-sly-repeat='${items}' is the correct HTL iteration attribute; data-sly-list is for key-value maps",
      "The loop provides ${item.index}, ${item.first}, ${item.last} as direct properties on the item object",
      "data-sly-list.item gives index as ${loop.index} and total count as ${loop.size}",
      "data-sly-list provides varStatus.index (0-based) and varStatus.count, matching JSTL's c:forEach syntax",
      "data-sly-list uses $forEachCount and $forEachFirst as implicit variable names",
      "Loop status is only available via data-sly-list.item.status.index; no shorthand exists",
      "data-sly-list provides the loop variable directly from the collection's iterator with no extra metadata",
    ],
    explanation:
      "HTL data-sly-list: The syntax 'data-sly-list.item=\"${model.items}\"' binds each element to 'item'. HTL automatically creates a companion variable 'itemList' (the loop variable name + 'List') with helper properties: .index (0-based integer), .count (1-based integer), .first (boolean, true on first iteration), .last (boolean, true on last iteration), .odd/.even (alternating booleans). These allow CSS class conditionals and element separators without Java logic.",
  },

  {
    id: "cq-057",
    topic: "HTL / Sightly",
    question: "HTL-005 (Severity: Minor) discourages inline CSS or JavaScript within HTL templates. What is the recommended approach for component styling and behavior?",
    correctAnswers: [
      "Use AEM Client Libraries (cq:ClientLibraryFolder) to deliver CSS and JS as versioned, cacheable assets linked via data-sly-call='${clientlib.all @ categories=...}'",
      "Place all styles in a clientlib under /apps/project/clientlibs and load them via the clientlib HTL template; keep HTL files pure HTML structure",
      "Move all JavaScript and CSS to cq:ClientLibraryFolder nodes; reference them in the page's head/body via clientlib data-sly-call patterns",
      "Externalize CSS and JS to AEM Client Library folders (cq:ClientLibraryFolder), loaded via the Granite clientlib include mechanism — not inline in HTL",
    ],
    incorrectAnswers: [
      "Inline CSS and JS are fine as long as they are enclosed in data-sly-test blocks for conditional loading",
      "Use data-sly-include to include external .css and .js files directly into the HTL template at render time",
      "Place CSS in a <style data-sly-use> block and JS in a <script data-sly-use> block within the HTL component",
      "Use HTL data-sly-resource to include CSS/JS files stored as nt:file nodes in the JCR",
      "Store CSS and JS as properties in the component's cq:Component node and output them as expressions",
      "Inline critical CSS in HTL for above-the-fold content is required by Google PageSpeed standards",
      "Use a webpack externals configuration to move HTL inline scripts to separate bundle files",
      "AEM's HTML Library Manager automatically extracts inline CSS/JS from HTL and creates clientlibs",
    ],
    explanation:
      "HTL-005 (Minor): AEM Client Libraries (cq:ClientLibraryFolder) are the correct way to deliver CSS and JavaScript. They are: versioned (via md5 fingerprinting in AEM CS), cached by the Dispatcher as long-lived static assets, combinable via categories to reduce HTTP requests, and tree-shaken in modern AEM setups. Inline CSS/JS in HTL is not cached, cannot be combined with other component styles, and pollutes the HTML response with non-presentational content.",
  },

  {
    id: "cq-058",
    topic: "HTL / Sightly",
    question: "What is the purpose of HTL's context='numberLiteral' and context='styleToken' output contexts?",
    correctAnswers: [
      "numberLiteral allows only numeric characters (no quotes) for JS numeric values; styleToken allows only safe CSS identifiers (no special chars) for CSS values",
      "context='numberLiteral' strips non-numeric chars for safe inline JS numbers; context='styleToken' whitelists CSS-safe characters for inline style attribute values",
      "They are type-restrictive contexts: numberLiteral emits only digits/decimals for JS, styleToken emits only CSS-safe identifier characters",
      "Both are restrictive allowlist contexts: numberLiteral allows 0-9 and decimal points only; styleToken allows alphanumerics, hyphens, and underscores for CSS class names",
    ],
    incorrectAnswers: [
      "numberLiteral formats numbers with locale-specific decimal separators; styleToken applies CSS minification",
      "They are deprecated HTL context values superseded by context='attribute' in HTL 1.4",
      "context='numberLiteral' converts strings to Numbers in Java before output; context='styleToken' validate CSS property names against a built-in stylesheet",
      "Both disable sanitization for performance: numberLiteral is for numeric data, styleToken for CSS values that are already safe",
      "context='styleToken' is used for full CSS property:value declarations; context='numberLiteral' is for formatted phone numbers",
      "numberLiteral produces locale-aware number formatting; styleToken produces vendor-prefixed CSS output",
      "They are only valid inside data-sly-attribute and cannot be used in text node expressions",
      "context='styleToken' interpolates CSS variables (--custom-property) from the component model",
    ],
    explanation:
      "HTL strict contexts: context='numberLiteral' restricts output to numeric characters only (digits, plus/minus signs, decimal point, exponent notation) — safe for embedding in JavaScript number literals without quotes. context='styleToken' restricts output to CSS-safe identifier characters (alphanumerics, hyphens, underscores) — safe for dynamic CSS class names or property values in style attributes. Both use allowlist (whitelist) filtering: any character not in the allowed set is stripped from the output.",
  },


  // ── OSGI / FELIX (12) ─────────────────────────────────────────────────────

  {
    id: "cq-059",
    topic: "OSGi / Felix",
    question: "OSGI-001 (Severity: Critical) requires all OSGi bundles to have explicit Export-Package and Import-Package declarations. Why is using 'Import-Package: *' dangerous?",
    correctAnswers: [
      "Wildcard imports resolve at runtime, causing ClassNotFoundException if a package is missing — explicit imports fail fast at install time",
      "'Import-Package: *' defers resolution to runtime, so missing dependencies crash the system during actual method calls instead of at bundle install",
      "Wildcard import does not validate that required packages exist at install time — explicit imports get verified by OSGi before the bundle activates",
      "Using * means OSGi cannot resolve dependencies at install; missing packages only cause NoClassDefFoundError at runtime during execution",
    ],
    incorrectAnswers: [
      "Wildcard imports create circular dependencies that cause OSGi bundle storms when the container starts",
      "'Import-Package: *' imports all packages from all bundles, causing package namespace collisions",
      "Wildcard imports are slower because OSGi must scan the entire classpath for each class load",
      "Using * bypasses OSGi's versioning system and always loads the oldest version of each package",
      "'Import-Package: *' causes the bundle to export all its packages, violating encapsulation",
      "Wildcard imports are not supported by the Apache Felix container and cause OutOfMemoryError",
      "OSGi requires specific version ranges on all imports — wildcard syntax is a syntax error",
      "Using * makes the bundle incompatible with AEM as a Cloud Service's dependency scanner",
    ],
    explanation:
      "OSGI-001 (Critical): OSGi's module layer provides fail-fast dependency validation. With explicit 'Import-Package: com.mypackage;version=\"[1.2,2.0)\"' declarations, OSGi verifies that all required packages are available at bundle install time — the bundle won't even activate if a dependency is missing. With wildcard import, packages are resolved lazily at first class load. If a package is missing, the bundle activates successfully but crashes at runtime with ClassNotFoundException or NoClassDefFoundError exactly when the code path is first executed.",
  },

  {
    id: "cq-060",
    topic: "OSGi / Felix",
    question: "OSGI-002 (Severity: Blocker) prohibits declaring servlet-api, jsp-api, or other container-provided dependencies with Maven scope 'compile'. What scope must they use?",
    correctAnswers: [
      "provided — the container supplies these JARs at runtime and they must not be bundled inside the OSGi bundle",
      "Maven scope 'provided' — tells Maven the dependency exists in the runtime environment and must be excluded from the bundle JAR",
      "Scope 'provided' means Maven uses the JAR for compilation but does not include it in the output artifact — the container provides it at runtime",
      "All container-supplied APIs (servlet-api, jsp-api, osgi-core) must use Maven scope 'provided' so they are not duplicated inside the OSGi bundle",
    ],
    incorrectAnswers: [
      "test — because servlet-api and jsp-api are only used in unit tests",
      "runtime — to delay class loading until the servlet is first called",
      "import — a special OSGi-specific Maven scope that excludes JARs from the bundle",
      "optional — to mark the dependency as optional and avoid bundle activation failures",
      "system — which references a system-wide JAR outside of the Maven repository",
      "static — for dependencies that never change at runtime",
      "compile — this is the correct scope; the OSGi container will override the bundled version automatically",
      "bundle — a Felix-specific scope that delegates JAR provision to the OSGi container",
    ],
    explanation:
      "OSGI-002 (Blocker): Container-provided APIs (servlet-api, jsp-api, osgi.core, org.osgi.compendium) must use Maven scope 'provided'. Using scope 'compile' (the default) includes the JAR inside the OSGi bundle, which causes: (1) ClassCastException when the bundled class and the container class are loaded by different class loaders, (2) ClassLoader conflicts and LinkageError, (3) Unnecessary bundle size bloat. The 'provided' scope tells Maven 'this JAR exists in the classpath at compile time but must not be packaged'.",
  },

  {
    id: "cq-061",
    topic: "OSGi / Felix",
    question: "What does an OSGi @Reference annotation with cardinality = ReferenceCardinality.OPTIONAL do when the referenced service is not available?",
    correctAnswers: [
      "The component still activates even if the referenced service is absent; the injected field is null and must be null-checked before use",
      "OPTIONAL cardinality allows the component to start without the service — the @Reference field is null when the service is unavailable",
      "The component activates successfully; the reference is null if unbound — code must handle the null case to avoid NullPointerException",
      "With OPTIONAL, OSGi activates the component regardless of service availability; the injected service reference is null when absent",
    ],
    incorrectAnswers: [
      "The component waits indefinitely until the service registers, blocking all other bundle activations",
      "OSGi creates a null-object proxy implementing the service interface, so null checks are not needed",
      "OPTIONAL makes the reference a List<ServiceType> that is empty when no service is bound",
      "The component activates with a warning log but throws IllegalStateException when the null service is first called",
      "OSGi throws ServiceUnavailableException at bundle activation time if the OPTIONAL service is missing",
      "OPTIONAL cardinality is the default — it has no runtime difference from MANDATORY",
      "The component creates its own simple no-op implementation of the service interface automatically",
      "OPTIONAL means the reference is loaded lazily on first use; OSGi blocks the call until the service registers",
    ],
    explanation:
      "OSGi Reference Cardinality: MANDATORY (default) means the component won't activate if the service is absent. OPTIONAL means the component activates even without the service — but the injected field will be null. Code that uses an OPTIONAL reference must perform a null check: 'if (myOptionalService != null) { myOptionalService.doWork(); }'. This is useful for integration points where the feature should degrade gracefully if the optional service (e.g., a third-party analytics service) is not installed.",
  },

  {
    id: "cq-062",
    topic: "OSGi / Felix",
    question: "OSGI-003 warns against calling OSGi ServiceReference directly in application code. What is the preferred injection pattern in DS (Declarative Services)?",
    correctAnswers: [
      "@Reference — inject the service interface directly into a field; OSGi DS handles bind/unbind lifecycle automatically",
      "Annotate a field with @Reference and declare the service type — DS injects the service instance and manages binding lifecycle",
      "Use @Reference field injection: @Reference private MyService myService; — DS binds/unbinds automatically as services register/unregister",
      "Declare @Reference on a field or setter method — OSGi DS automatically binds the service and calls the setter when the service activates",
    ],
    incorrectAnswers: [
      "Use BundleContext.getService(ServiceReference) in the @Activate method — this is the modern DS pattern",
      "Call ServiceTracker.open() and poll getService() for the current best matching service",
      "Inject ServiceReference<MyService> instead of the service itself and call context.getService(ref) when needed",
      "Use @Inject from javax.inject — OSGi DS maps @Inject to @Reference automatically",
      "Call osgiFramework.getServiceRegistry().lookup(MyService.class) in each method",
      "@OSGiService annotation from Sling is preferred over @Reference for all service types",
      "Use ServiceLoader.load(MyService.class) from the Java standard library — OSGi implements the ServiceLoader SPI",
      "Declare the service in the component.xml descriptor file without any annotation; OSGI reads XML at runtime",
    ],
    explanation:
      "OSGI-003 (Major): OSGi Declarative Services (DS) annotation @Reference provides the cleanest, safest service injection. The runtime manages the full service lifecycle: when the referenced service registers, DS calls the bind method (or injects the field) before the component activates. When the service unregisters, DS either waits for a replacement or deactivates this component. Directly using BundleContext.getService() or ServiceTracker bypasses DS lifecycle management and creates manual reference counting bugs.",
  },

  {
    id: "cq-063",
    topic: "OSGi / Felix",
    question: "In an OSGi @Component, what is the recommended way to read a configuration value that may change at runtime without restarting the bundle?",
    correctAnswers: [
      "Declare an @interface configuration annotation, read it in @Activate and @Modified, and cache the value in an instance field",
      "Use @Activate(MyConfig config) to read initial values and @Modified(MyConfig config) to update cached fields when config changes — no restart needed",
      "Define a @interface with @AttributeDefinition properties, read in @Activate and re-read in @Modified — OSGi calls @Modified without restarting",
      "Annotate a @interface configuration class; OSGi injects it into @Activate and @Modified methods — store values in fields and re-read on @Modified",
    ],
    incorrectAnswers: [
      "Read configurations directly from System.getProperties() which updates automatically when Felix config changes",
      "Use @ConfigurationAdmin to subscribe to configuration change events and update values in a separate thread",
      "Annotate configuration fields with @volatile — OSGi automatically updates volatile fields when the config changes",
      "Use Preferences API (java.util.prefs.Preferences) — it listens for changes from the OSGi configuration store",
      "ConfigurationAdmin.getConfiguration(pid).getProperties() must be called in every method to get fresh values",
      "OSGi restarts the bundle for any configuration change — there is no way to avoid a restart",
      "Use @ThreadLocal to store configuration values so each request thread reads exclusively its own copy",
      "Read configuration from a JCR node in /apps/config using ResourceResolver in each service call",
    ],
    explanation:
      "OSGi DS Configuration: DS supports dynamic reconfiguration through the @Modified lifecycle method. When an administrator changes a configuration in the Felix Web Console (or a run-mode .cfg.json is deployed), OSGi calls @Modified with the new @interface configuration object — without deactivating and reactivating the component. The pattern: cache config values as instance fields in @Activate, update them in @Modified. The service continues running throughout the update with zero downtime.",
  },

  {
    id: "cq-064",
    topic: "OSGi / Felix",
    question: "OSGI-004 (Severity: Major) flags any OSGi bundle that declares Bundle-SymbolicName with dots used inconsistently with the Java package convention. What is the correct BSN format?",
    correctAnswers: [
      "Reverse domain notation matching the project's main Java package: com.mycompany.myproject.core",
      "The Bundle-SymbolicName must follow Java package naming: reversed domain + project + module, e.g., com.myorg.myproject.core",
      "Use the Maven groupId plus artifactId as dots: com.company.aem-project → com.company.aemproject.core",
      "BSN must be globally unique and typically matches the root Java package of the bundle: com.myorg.project.module",
    ],
    incorrectAnswers: [
      "The BSN can be any string — it only needs to be unique within the current AEM instance",
      "BSN must start with 'com.adobe.' to indicate compatibility with AEM",
      "Use the artifactId directly from pom.xml without any dots: myproject-core",
      "BSN must match the OSGi category declared in the component descriptor",
      "The BSN is auto-generated by the Maven Bundle Plugin and should never be customized",
      "BSN must start with the AEM version number: 6.5.myproject.core",
      "Use the full Maven coordinates: com.mycompany:myproject-core:1.0.0",
      "BSN is case-sensitive but otherwise any format is acceptable per the OSGi specification",
    ],
    explanation:
      "OSGI-004 (Major): The OSGi Bundle-SymbolicName (BSN) must be a unique identifier for the bundle. The convention is to use Java reverse-domain package notation matching the bundle's root package: if the Java classes are in package 'com.mycompany.myproject', the BSN should be 'com.mycompany.myproject.core' (or .api, .ui.apps etc.). This ensures global uniqueness and makes it easy to identify the bundle's origin. The Maven Bundle Plugin (bnd) typically sets this from the project's groupId and artifactId.",
  },

  {
    id: "cq-065",
    topic: "OSGi / Felix",
    question: "What happens to an OSGi component's state when the @Deactivate lifecycle method is called?",
    correctAnswers: [
      "The component is being shut down — @Deactivate should release all resources (close streams, unregister listeners, stop threads) before the component is destroyed",
      "@Deactivate is called when the bundle stops or all MANDATORY references are unbound — use it to close ResourceResolvers, ScheduledExecutorServices, and registered listeners",
      "The container calls @Deactivate before destroying the component instance — release all held resources to prevent memory and connection leaks",
      "@Deactivate signals component shutdown; close all held resources (thread pools, JCR sessions, HTTP connections) before returning to avoid resource leaks",
    ],
    incorrectAnswers: [
      "@Deactivate pauses the component temporarily — it will be reactivated automatically after 30 seconds",
      "The component's fields are cleared by the garbage collector; @Deactivate only logs the shutdown for audit purposes",
      "@Deactivate is called between HTTP requests to allow the component to reset its state for the next request",
      "OSGi calls @Deactivate when the component's configuration changes before calling @Activate with new config",
      "@Deactivate rolls back any pending JCR changes made by the component's last service call",
      "It transitions the component to RESOLVED state where it can receive @Modified calls but not service calls",
      "@Deactivate unregisters the component from the OSGi registry so it no longer receives @Reference bindings",
      "The method is optional — OSGi manages all resource cleanup automatically when a bundle is stopped",
    ],
    explanation:
      "OSGi Lifecycle @Deactivate: This method is called when: (1) the bundle is stopped, (2) the component is disabled, (3) a MANDATORY @Reference service is no longer available. It is the correct place to release all resources: close ResourceResolvers to release JCR sessions, shutdown ScheduledExecutorService to stop background threads, remove registered event listeners, close database connections. Failure to release resources in @Deactivate leads to memory leaks and JCR session exhaustion that persist until the JVM is restarted.",
  },

  {
    id: "cq-066",
    topic: "OSGi / Felix",
    question: "OSGI-005 (Severity: Major) requires all OSGi bundle packages to declare explicit version ranges in their Import-Package statements. What is the correct version range syntax for requiring version 3.x but not 4.x?",
    correctAnswers: [
      "version=\"[3.0,4.0)\" — square bracket means inclusive lower bound, parenthesis means exclusive upper bound",
      "[3.0,4.0) — includes 3.0, includes all 3.x versions, excludes 4.0 and above",
      "The OSGi semantic version range [3.0.0,4.0.0) means >= 3.0.0 AND < 4.0.0",
      "Import-Package: com.example;version=\"[3.0,4.0)\" — the bracket notation [min,max) follows OSGi SemVer conventions",
    ],
    incorrectAnswers: [
      "version=\"3.0+\" — the plus sign means 3.0 and any higher version",
      "version=\">=3.0,<4.0\" — standard comparison operators for version ranges",
      "version=\"3.*\" — wildcard notation for any 3.x patch version",
      "version=\"(3.0,4.0)\" — open parentheses on both sides means exclusive range",
      "version=\"[3.0.0]\" — square brackets on a single version mean exactly that version",
      "version=\"3.0.0 - 4.0.0\" — dash notation as used in npm/semver conventions",
      "version=\"^3.0\" — caret notation compatible with any 3.x version",
      "version=\"~3.0\" — tilde notation compatible with patch-level changes only",
    ],
    explanation:
      "OSGI-005: OSGi uses mathematical interval notation for version ranges. Square brackets [] indicate inclusive bounds; parentheses () indicate exclusive bounds. [3.0,4.0) means: lower bound 3.0 inclusive (>= 3.0) AND upper bound 4.0 exclusive (< 4.0). This precisely captures OSGi semantic versioning: major version changes are breaking; minor versions are backward-compatible additions; patch versions are bug fixes. Declaring a range prevents accidentally binding to a major version upgrade with breaking API changes.",
  },

  {
    id: "cq-067",
    topic: "OSGi / Felix",
    question: "In an OSGi @Component, what is the difference between declaring a @Reference with policy=ReferencePolicy.DYNAMIC versus the default STATIC policy?",
    correctAnswers: [
      "DYNAMIC allows the component to continue running while its references change without deactivation; STATIC requires the component to be deactivated if a reference service registers or unregisters",
      "STATIC (default): component deactivates and reactivates when the service changes; DYNAMIC: bind/unbind methods are called at runtime without component restart",
      "With DYNAMIC policy, OSGi calls the bind method when a new service registers and unbind when it leaves — the component never stops; STATIC triggers a full component lifecycle restart",
      "DYNAMIC references update the component's service binding at runtime without a stop/restart cycle; STATIC references make the component restart on any service availability change",
    ],
    incorrectAnswers: [
      "DYNAMIC and STATIC policies are identical for field injection — the difference only applies to method injection",
      "STATIC means the service is loaded once and cached permanently; DYNAMIC re-resolves on every method call",
      "DYNAMIC is only for OPTIONAL cardinality references; STATIC is for MANDATORY references",
      "STATIC policy prevents service garbage collection; DYNAMIC allows the JVM to unload unused services",
      "DYNAMIC policy creates a new component instance for each service binding; STATIC shares one instance",
      "STATIC policy binds to the first matching service and never changes; DYNAMIC randomly selects among all matching services",
      "DYNAMIC references require a @Modified method; STATIC references use @Activate exclusively",
      "The choice between DYNAMIC and STATIC only affects compile-time annotation processing — runtime is identical",
    ],
    explanation:
      "OSGi Reference Policy: STATIC (default) — when the bound service registers or unregisters, the OSGi container deactivates the component and reactivates it with the new binding. Component state is reset. DYNAMIC — the container calls the declared bind method (or uses field update) at runtime without stopping the component; bind/unbind can happen at any time. DYNAMIC is more complex (requires thread-safe bind/unbind methods) but avoids service interruptions in high-availability scenarios.",
  },

  {
    id: "cq-068",
    topic: "OSGi / Felix",
    question: "OSGI-006 (Severity: Critical) prohibits using Thread.currentThread().getContextClassLoader() in OSGi components. Why?",
    correctAnswers: [
      "In OSGi, each bundle has its own classloader — the context classloader is the caller's classloader, which may not have access to the current bundle's classes, causing ClassNotFoundException",
      "The context classloader in OSGi is unpredictable — it could be the web container's classloader or any parent, not the bundle's own classloader",
      "OSGi's classloader isolation means the context classloader is often wrong for the executing bundle; use the bundle's own classloader: MyClass.class.getClassLoader()",
      "Thread.currentThread().getContextClassLoader() returns the classloader of the calling thread, which crosses bundle boundaries in OSGi — causing class loading failures",
    ],
    incorrectAnswers: [
      "Thread.currentThread() is deprecated in OSGi environments — use OsgiThread.getCurrent() instead",
      "The context classloader holds a strong reference to the bundle, causing it to never be garbage collected",
      "Using context classloader disables OSGi's hot-redeployment because the classloader is cached indefinitely",
      "Thread context classloaders are not thread-safe in OSGi — concurrent setContextClassLoader calls corrupt all threads",
      "getContextClassLoader() requires SecurityManager permission that AEM revokes for all non-admin bundles",
      "OSGi components run in a threadpool where context classloaders are set to null by the Felix framework",
      "The context classloader bypasses OSGi's Import-Package checks and loads any class without validation",
      "Thread.currentThread() requires JNDI context initialization that fails in AEM's OSGi environment",
    ],
    explanation:
      "OSGI-006 (Critical): OSGi enforces strict classloader isolation — each bundle has its own classloader that knows only about its own classes and explicitly imported packages. When code in Bundle A calls code in Bundle B (e.g., through a Sling Servlet calling a service), the executing thread's context classloader is Bundle A's loader — which cannot see Bundle B's internal classes. The correct approach is to use the bundle's own classloader: SomeClass.class.getClassLoader() or BundleContext.getBundle().adapt(BundleWiring.class).getClassLoader().",
  },

  {
    id: "cq-069",
    topic: "OSGi / Felix",
    question: "What is the OSGi @ObjectClassDefinition annotation used for in DS component configuration?",
    correctAnswers: [
      "It marks an @interface as an OSGi configuration annotation, defining the schema for the component's Felix Web Console configuration form",
      "@ObjectClassDefinition annotates a Java @interface to declare it as the OSGi configuration type for a @Designate-annotated component",
      "It turns an @interface annotation into an OSGi Metatype descriptor, generating the Felix Web Console UI for the component's configurable properties",
      "OSGi DS metatype annotation that generates a typed configuration interface — its properties appear as form fields in the Felix Web Console",
    ],
    incorrectAnswers: [
      "@ObjectClassDefinition declares the OSGi service interface that the @Component exposes to other bundles",
      "It generates the MANIFEST.MF entries for Provide-Capability and Require-Capability",
      "@ObjectClassDefinition is a JPA-like annotation for persisting component state to the JCR",
      "It registers a new JCR node type in the Oak repository when the bundle activates",
      "@ObjectClassDefinition marks an interface for dynamic proxy generation by the DS runtime",
      "It generates REST API documentation for the component's configuration endpoint in AEM's API explorer",
      "@ObjectClassDefinition is only valid on classes, not interfaces — it generates the component descriptor XML",
      "It specifies the OSGi event topic that the @Component listens to when annotated with @EventHandler",
    ],
    explanation:
      "OSGi Metatype: @ObjectClassDefinition (OCD) annotates a Java @interface to define the configuration schema. Each method on the @interface becomes a configurable property — @AttributeDefinition provides the label, description, type, and default value that appear in the Felix Web Console as form fields. The @Designate(ocd=MyConfig.class) annotation on the @Component links the component to its OCD. The DS runtime reads the deployed metatype XML and injects the typed config into @Activate and @Modified methods.",
  },

  {
    id: "cq-070",
    topic: "OSGi / Felix",
    question: "In an AEM OSGi component, what is the safe way to schedule a recurring background task that runs every 5 minutes?",
    correctAnswers: [
      "Implement the Runnable interface and register with the Sling Scheduler via @Component(service=Runnable.class) with @Designate configuration defining the cron expression",
      "Use the Sling Scheduler service: inject @Reference private Scheduler scheduler; and call scheduler.addJob(jobName, this, config, expression, canRunConcurrently)",
      "Implement org.apache.sling.commons.scheduler.ScheduledPeriodicJob and register the @Component with the Sling Scheduler using a cron expression like '0 0/5 * * * ?'",
      "Register a Sling Scheduler job using @Component(property='scheduler.expression=0 0/5 * * * ?') or programmatically via the Sling Scheduler service",
    ],
    incorrectAnswers: [
      "Create a java.util.Timer in @Activate and cancel it in @Deactivate — this is the OSGi-approved lightweight scheduler",
      "Use ScheduledExecutorService from java.util.concurrent.Executors.newScheduledThreadPool(1) in @Activate",
      "Implement javax.ejb.ScheduledEJB and annotate with @Schedule(minute='*/5') for OSGi scheduling",
      "Use Thread.sleep(300000) in a while(running) loop started in a new Thread in @Activate",
      "Annotate the method with @Scheduled(fixedRate=300000) from Spring Framework's scheduling support",
      "Deploy a CRON OSGi service configuration targeting the component's PID in /apps/config.author",
      "Implement QuartzJob and register the trigger via QuartzSchedulerService.scheduleJob()",
      "Use JCR observation listeners with a time-based event filter to trigger execution every 5 minutes",
    ],
    explanation:
      "OSGi Scheduling in AEM: The Sling Scheduler (org.apache.sling.commons.scheduler.Scheduler) is the OSGi-integrated scheduling mechanism. A clean modern approach: implement Runnable, annotate with @Component(service=Runnable.class), and set properties: @Designate with a config @interface containing @AttributeDefinition for the cron expression. Alternatively, inject @Reference Scheduler scheduler and call scheduler.addJob(). Never use raw Thread or ScheduledExecutorService — they don't integrate with OSGi lifecycle, causing threads to survive bundle restarts.",
  },


  // ── DISPATCHER (12) ───────────────────────────────────────────────────────

  {
    id: "cq-071",
    topic: "Dispatcher",
    question: "DISP-001 (Severity: Critical) states that the Dispatcher must always validate incoming HTTP requests before forwarding them to AEM Publishers. Which two validations are most critical?",
    correctAnswers: [
      "Validate URL path characters (no ../ traversal sequences) and enforce HTTP method allowlisting (only GET/POST for content)",
      "URL path traversal prevention (block /../ sequences) and HTTP method whitelist enforcement (deny DELETE, TRACE, OPTIONS, PUT unless explicitly needed)",
      "Block path traversal attacks in request URLs and restrict HTTP verbs to only the methods required — deny TRACE and unrestricted DELETE",
      "Input validation: reject URLs containing directory traversal patterns; method filtering: only allow GET/HEAD/POST — deny all others at Dispatcher level",
    ],
    incorrectAnswers: [
      "Validate the browser's User-Agent header and block requests with unknown HTTP Accept-Language values",
      "Check that the request's Content-Type is application/json and reject all XML payloads",
      "Validate that the request comes from an IP in the corporate VPN range and block HEAD requests",
      "Verify the request has a valid JSESSIONID cookie and reject unauthenticated requests",
      "Check the request's Referer header to prevent CSRF and block all requests from unknown domains",
      "Validate that XML payloads include a valid DTD declaration and block requests without Content-Length",
      "Verify that the client's TLS version is 1.3 and reject all requests using TLS 1.1 or older",
      "Validate the X-Forwarded-For header and block requests where the original IP is in a blocklist",
    ],
    explanation:
      "DISP-001 (Critical): The Dispatcher is AEM's first security boundary. Two critical validations: (1) Path traversal prevention — reject requests where the URL contains /../, /./, or percent-encoded equivalents (%2F, %2E) that could reach the AEM configuration or system files outside the webroot. (2) Method allowlisting — the Dispatcher's allowlist section should only permit GET and POST for public traffic; any other verb (DELETE, PUT, TRACE, CONNECT) should return 405 Method Not Allowed unless specifically required.",
  },

  {
    id: "cq-072",
    topic: "Dispatcher",
    question: "DISP-002 requires configuring Dispatcher cache invalidation to use only the /invalidate request from AEM Publisher, not direct cache file deletion. Why?",
    correctAnswers: [
      "The /invalidate request uses stat file touch-based invalidation that is atomic and handles cluster sync — direct file deletion is not cluster-aware",
      "AEM's /invalidate flush agent updates the .stat file hierarchy which atomically marks cached responses as stale — direct deletion can cause race conditions and partial cache states",
      "The /invalidate mechanism uses AEM's configured flush agents and stat path hierarchy — manual file deletion bypasses this and breaks multi-Dispatcher setups",
      "/invalidate uses Dispatcher's stat file mechanism to atomically invalidate all cached files under a tree — direct deletion has no synchronization with AEM's replication queue",
    ],
    incorrectAnswers: [
      "Direct file deletion is faster but /invalidate is required because it fires a JCR event that AEM listens to",
      "/invalidate is required by Adobe's licensing agreement; direct file deletion violates the AEM Terms of Service",
      "Direct deletion permanently removes cache files; /invalidate copies fresh content from the Publisher immediately",
      "The /invalidate endpoint is the only Dispatcher URL that does not require authentication headers",
      "Direct deletion bypasses CDN edge invalidation; /invalidate notifies the CDN automatically",
      "Direct deletion triggers a security scan; /invalidate uses a pre-signed URL that bypasses the scan",
      "/invalidate compresses the cache response; direct deletion leaves uncompressed files that are slower to serve",
      "AEM's workflow engine listens on /invalidate and automatically refreshes DAM renditions when triggered",
    ],
    explanation:
      "DISP-002: Dispatcher uses a stat file (.stat) based invalidation model. When AEM Publisher sends a flush request to /dispatcher/invalidate.cache, the Dispatcher touches the .stat file in the invalidation path hierarchy. On the next request for any cached file under that path, the Dispatcher compares the file's modification time against the .stat file — if .stat is newer, the cache entry is stale and the Dispatcher fetches fresh content from the Publisher. This is atomic and cluster-safe. Direct file deletion bypasses the stat mechanism and doesn't propagate to other Dispatcher instances.",
  },

  {
    id: "cq-073",
    topic: "Dispatcher",
    question: "DISP-003 (Severity: Critical) requires that the AEM Author instance never be accessible through the Dispatcher to end users. Why?",
    correctAnswers: [
      "Author exposes CRXDE Lite, Felix Web Console, and unrestricted JCR traversal — routing it through Dispatcher for public access is a severe security breach",
      "The AEM Author instance has administrative tools (CRXDE, DAM, Package Manager) that must never be publicly accessible — Dispatcher caching also corrupts Author workflows",
      "Author environments are not designed for anonymous public access — they allow arbitrary JCR queries and have privileged servlets that should never face the internet",
      "Exposing Author through Dispatcher gives public users access to CRXDE Lite, sling.get.json traversal, and all admin servlets — a critical security vulnerability",
    ],
    incorrectAnswers: [
      "Author cannot be accessed through Dispatcher because they use different JCR port numbers",
      "The Author instance uses a self-signed TLS certificate that Dispatcher cannot validate",
      "Dispatcher caching makes the Author's real-time editing experience appear stale to content authors",
      "Author runs on port 4502 which is not in Dispatcher's allowed port configuration",
      "AEM Author requires a special X-AEM-Author header that only the CMS editor sends",
      "The Author instance does not support Dispatcher module authentication headers",
      "Author uses WebSocket connections for real-time collaboration that Dispatcher cannot proxy",
      "Adobe's CDN blocks all traffic to port 4502 by default in AEM as a Cloud Service",
    ],
    explanation:
      "DISP-003 (Critical): AEM Author (typically port 4502) contains privileged tools that must never be publicly accessible: CRXDE Lite (full JCR read/write), Package Manager (arbitrary code deployment), Felix Web Console (OSGi bundle management), QueryBuilder/SQL2 endpoints (arbitrary repository traversal), and all administrative Sling servlets. Author should only be reachable from trusted network ranges (VPN, office IP). Publisher instances (4503) serve public traffic through the Dispatcher.",
  },

  {
    id: "cq-074",
    topic: "Dispatcher",
    question: "Which Dispatcher configuration controls which client IP addresses or hostnames are allowed to send invalidation flush requests to /dispatcher/invalidate.cache?",
    correctAnswers: [
      "/allowedClients in /cache — restricts which IPs can send cache invalidation requests to the Dispatcher",
      "The /allowedClients section within the /cache block defines the IP addresses (usually AEM Publisher) permitted to call /invalidate",
      "/filter allowedClients configuration — only AEM Publisher's IP should be whitelisted to send flush requests",
      "The /allowedClients rule in dispatcher.any /cache configuration — list only the Publisher's IP to prevent unauthorized cache invalidation",
    ],
    incorrectAnswers: [
      "/allowedHosts in /virtualHosts — controls which Publisher server names can connect",
      "/filter rules in the /cache block use /allow to whitelist flush request origins",
      "/invalidateAllowedHosts configuration in the dispatcher.any main block",
      "/acl rules in the /cache section define allowed flush client certificates",
      "/auth_checker configuration specifies which clients can bypass authentication for flush calls",
      "/enableTTL configuration in /cache controls invalidation frequency rather than allowed origins",
      "/flushClients section in the /renders block defines the allowed invalidation originators",
      "The X-Forwarded-For header in /virtualHosts configuration is used to authenticate flush requests",
    ],
    explanation:
      "Dispatcher Security: /allowedClients in the /cache block restricts which IP addresses can send cache flush/invalidation requests to /dispatcher/invalidate.cache. Configuration example: '/allowedClients { /0001 { /type \"allow\" /glob \"10.0.1.*\" } /0002 { /type \"deny\" /glob \"*\" } }'. Only AEM Publisher IPs should be whitelisted. Without this, any server that can reach the Dispatcher can flush the entire cache — a significant availability attack vector.",
  },

  {
    id: "cq-075",
    topic: "Dispatcher",
    question: "DISP-004 requires that the Dispatcher's /filter rules block access to AEM's sling.get.json traversal endpoint. What path pattern should be denied?",
    correctAnswers: [
      "Deny all requests matching /*.json or /*.infinity.json — these expose the entire JCR tree as JSON",
      "Block /*.infinity.json and all .selector.json patterns that allow traversal and dumping of JCR node hierarchies",
      "/filter deny rules must block /.+\\.infinity\\.json and /.+\\.tidy\\.json to prevent JCR content disclosure",
      "Deny patterns matching *.4.2.1.json, *.infinity.json, and *.tidy.json selectors — these are sling.get.json traversal paths",
    ],
    incorrectAnswers: [
      "Block /system/console/* because CRXDE Lite is served from that path",
      "Deny /bin/wcm/* because the workflow manager's REST endpoints are located there",
      "Block /*.htm requests because HTL templates expose JCR node structures",
      "Deny /jcr:root traversal by blocking all paths starting with /jcr:",
      "Block /content/*.jsp because JSP scripts expose Java stack traces to end users",
      "Deny /etc/designs/* because CSS files contain embedded JCR query results",
      "Block all POST requests to /bin/ because Sling POST servlets write to the JCR directly",
      "Deny /content/dam/* to prevent unauthorized access to digital assets",
    ],
    explanation:
      "DISP-004 (Critical): AEM's Sling GET servlet exposes any JCR node as JSON by appending .json (or .infinity.json for the full subtree, .tidy.json for formatted output). The URL '/content/mysite.infinity.json' returns the entire content tree as JSON, exposing user data, configuration, and potentially credentials. The Dispatcher must block these patterns: deny URLs matching '/*.infinity.json', '/*.4.2.1.json', '/*.tidy.json', and '/*.json' unless specifically required for API endpoints.",
  },

  {
    id: "cq-076",
    topic: "Dispatcher",
    question: "What does DISP-005 require regarding Dispatcher security headers, and specifically which header prevents browsers from loading the cached page in an iframe on an untrusted origin?",
    correctAnswers: [
      "X-Frame-Options header — set to SAMEORIGIN or DENY to prevent clickjacking attacks",
      "The Dispatcher must inject X-Frame-Options: SAMEORIGIN (or Content-Security-Policy: frame-ancestors 'self') to block clickjacking via iframe embedding",
      "X-Frame-Options: DENY or SAMEORIGIN must be set in Dispatcher response headers to prevent the page from being framed by malicious sites",
      "X-Frame-Options (SAMEORIGIN) or CSP frame-ancestors directive — Dispatcher adds these response headers to block iframe-based clickjacking",
    ],
    incorrectAnswers: [
      "X-Content-Type-Options: nosniff — prevents MIME-type sniffing attacks",
      "Strict-Transport-Security — forces browsers to use only HTTPS connections",
      "X-XSS-Protection: 1; mode=block — activates the browser's XSS filter",
      "Content-Security-Policy: default-src 'self' — restricts resource loading domains",
      "Referrer-Policy: no-referrer — prevents the Referer header from leaking to external sites",
      "Cache-Control: no-store — prevents browsers from caching the response locally",
      "Access-Control-Allow-Origin: * — allows cross-origin requests to cached resources",
      "X-Permitted-Cross-Domain-Policies: none — blocks Flash cross-domain policy requests",
    ],
    explanation:
      "DISP-005 (Major): DISP-005 covers security response headers that must be injected by the Dispatcher (not AEM) to be included in all cached responses. X-Frame-Options prevents clickjacking — the attack where a malicious page embeds a target site in an invisible iframe and tricks users into clicking on its elements. SAMEORIGIN allows framing by pages on the same origin; DENY blocks all framing. Modern alternative: Content-Security-Policy: frame-ancestors 'self' which allows more granular control.",
  },

  {
    id: "cq-077",
    topic: "Dispatcher",
    question: "In Dispatcher configuration, what is the purpose of the /renders section in dispatcher.any?",
    correctAnswers: [
      "Defines the AEM Publisher backends — their hostname, port, and connection timeouts that the Dispatcher proxies requests to",
      "/renders defines the backend render farm: AEM Publisher instances (hostname/port) to which the Dispatcher forwards requests",
      "Configures the AEM Publisher endpoints (IP/hostname and port) that the Dispatcher contacts for non-cached or invalidated content",
      "Specifies the backend AEM servers (Publisher or Preview) including host, port, timeout, and connection settings",
    ],
    incorrectAnswers: [
      "/renders defines which Sling renderers (HTL, JSP, JSON) are allowed to produce output",
      "It specifies the CDN edge locations that the Dispatcher synchronizes its cache with",
      "/renders lists the AEM Author farm instances that content editors connect to through the Dispatcher",
      "It configures the HTML rendering quality settings: minification, GZIP compression level, and image optimization",
      "/renders specifies which URL paths trigger server-side rendering vs. client-side rendering",
      "It defines the set of allowed MIME types for rendered responses that the Dispatcher will cache",
      "/renders configures the Sling content rendering pipelines and their execution order",
      "It specifies the HTTP status codes that the Dispatcher treats as successful renders for caching",
    ],
    explanation:
      "Dispatcher Configuration: /renders defines the backend AEM render farm — the Publisher (or Preview) instances that the Dispatcher forwards requests to when content is not in the cache or is stale. Each render entry specifies: /hostname (AEM server IP or hostname), /port (typically 4503 for Publisher), /timeout (connection timeout in milliseconds), /receiveTimeout (response timeout). Multiple /renders entries allow load balancing across Publisher cluster nodes.",
  },

  {
    id: "cq-078",
    topic: "Dispatcher",
    question: "DISP-006 (Severity: Major) requires that query string parameters be explicitly allowlisted for caching. Why is caching all query string variations dangerous?",
    correctAnswers: [
      "An attacker can flood the cache disk with unique query strings (cache busting attack), exhausting the Dispatcher's storage",
      "Caching every unique query string is a cache busting DoS vector — attackers generate unique query params to prevent any caching and flood disk storage",
      "Without query string control, attackers append random parameters to bypass the cache and force every request to hit the Publisher directly",
      "Unrestricted query string caching allows cache flooding: each unique ?id=random creates a new cache file, eventually filling the disk and crashing the Dispatcher",
    ],
    incorrectAnswers: [
      "Caching query string variations exposes search index data to users who did not submit the query",
      "Query string caching causes the Dispatcher to forward incorrect parameters to the Publisher's session",
      "Caching all query strings violates GDPR because URL parameters often contain personal identifiable information",
      "The Dispatcher can only cache 10,000 unique URLs — query string variance causes cache eviction of important pages",
      "Query strings containing JavaScript code can be executed if cached and served to other users",
      "Caching query strings breaks AEM's CQ5 content finder which relies on non-cached URL patterns",
      "Query string parameters exceed the maximum URL length that the Dispatcher's file system can handle",
      "The Dispatcher uses query strings as cache keys only on POST requests — GET requests are never cached with params",
    ],
    explanation:
      "DISP-006 (Major): By default, Dispatcher includes the query string in the cache key. If query string caching is unrestricted, an attacker sends requests with unique random parameters (?cb=1234567890, ?cb=9876543210, etc.) causing the Dispatcher to create a new cache file for each. This 'cache busting' attack can fill the disk (DoS by storage exhaustion) and force all requests to hit the AEM Publisher. Fix: configure /ignoreUrlParams to explicitly whitelist known query parameters; all others are ignored (stripped) for caching purposes.",
  },

  {
    id: "cq-079",
    topic: "Dispatcher",
    question: "What Dispatcher configuration rule prevents AEM's query builder endpoint (/bin/querybuilder.json) and QueryDebug endpoint from being publicly accessible?",
    correctAnswers: [
      "A /filter deny rule blocking /bin/querybuilder.json and all /bin/* endpoints not explicitly required",
      "Add a /filter deny for /bin/querybuilder.* — these endpoints allow arbitrary JCR queries that can traverse the entire repository",
      "Deny /bin/querybuilder.json in /filter — the QueryBuilder executes JCR queries that can expose all content including unpublished pages",
      "A deny filter rule for the path /bin/querybuilder.json prevents public JCR querying through AEM's REST search API",
    ],
    incorrectAnswers: [
      "Use /ignoreUrlParams to strip the query parameter from the QueryBuilder URL so it cannot receive parameters",
      "Configure /allowedClients to only allow authenticated requests to /bin/querybuilder.json",
      "QueryBuilder is disabled by default — no Dispatcher configuration is needed to block it",
      "Set Content-Security-Policy to block access to /bin/ paths from the browser origin",
      "Use the /enableTTL 0 rule to mark QueryBuilder responses as uncacheable",
      "Configure AEM's Sling Resource Access Security (SRAS) to require admin credentials for all /bin/ paths",
      "Block access using an Apache RewriteRule that rewrites /bin/querybuilder to /404.html",
      "QueryBuilder responses never contain sensitive data because AEM authors only publish approved content",
    ],
    explanation:
      "Dispatcher Security – /bin/ endpoints: AEM's /bin/ path serves many powerful servlets that must never be publicly accessible. The QueryBuilder endpoint (/bin/querybuilder.json) executes arbitrary JCR-SQL2 queries — a public user could query 'path=/content&type=nt:unstructured' to retrieve all structured content nodes including drafts and unpublished pages. Block /bin/querybuilder.json in /filter, and as a general rule, deny all /bin/* paths with explicit allows only for the specific endpoints needed (e.g., /bin/receive for replication if applicable).",
  },

  {
    id: "cq-080",
    topic: "Dispatcher",
    question: "Why should authentication-based pages (pages behind AEM's login) not be cached by the Dispatcher?",
    correctAnswers: [
      "The Dispatcher cannot differentiate between users — it would serve User A's personalized authenticated response to User B",
      "Caching authenticated content means the Dispatcher returns the same cached response to all users regardless of who is logged in",
      "User-specific authenticated responses cached by the Dispatcher would be served to all subsequent users of that URL — a privacy and security breach",
      "The Dispatcher serves cached content anonymously — an authenticated user's personalized page response would be served to unauthenticated visitors",
    ],
    incorrectAnswers: [
      "Authenticated pages use HTTPS which the Dispatcher cannot cache because it cannot read encrypted content",
      "AEM's session token changes on every request, so cached pages always have an expired token error",
      "The login mechanism requires a POST request which the Dispatcher always passes through without caching",
      "Authentication headers are stripped by the Dispatcher, causing 401 errors on cached pages",
      "Authenticated pages include CSRF tokens that become invalid when served from cache",
      "The Dispatcher cannot store cookies, so session-based authenticated pages cannot be identified for caching",
      "AEM's author replication does not flush authenticated page cache entries, causing stale content",
      "Authenticated pages use Server-Sent Events that cannot be serialized to a Dispatcher cache file",
    ],
    explanation:
      "Dispatcher Caching and Authentication: The Dispatcher caches responses by URL (ignoring cookies and auth headers by default). If an authenticated user visits /content/mysite/dashboard and the Dispatcher caches the personalized response, the next visitor to /content/mysite/dashboard (even unauthenticated) receives that cached personalized content. Fix: configure /auth_checker in the Dispatcher to validate authentication before serving cached content, or configure /cache /rules to exclude all authenticated paths from caching.",
  },

  {
    id: "cq-081",
    topic: "Dispatcher",
    question: "What does the Dispatcher's 'grace period' (graceOnStaleContent) configuration do?",
    correctAnswers: [
      "Allows the Dispatcher to serve stale cached content for a defined number of seconds while fetching fresh content from the Publisher — reduces latency on invalidation",
      "During a grace period, the Dispatcher serves the expired/invalidated cache entry while asynchronously refreshing it from the AEM Publisher",
      "graceOnStaleContent lets the Dispatcher continue serving old cache files for N seconds after invalidation, preventing request spikes from reaching the Publisher simultaneously",
      "Configures a time window during which the Dispatcher reuses stale cache entries while AEM fetches the updated content — a thundering-herd prevention mechanism",
    ],
    incorrectAnswers: [
      "graceOnStaleContent is the number of retry attempts the Dispatcher makes when the Publisher returns a 503 error",
      "It defines how long the Dispatcher waits before sending a second invalidation request if the first was not acknowledged",
      "The grace period is the time allowed for an AEM flush agent to complete the cache invalidation before timing out",
      "graceOnStaleContent configures the cooldown period after a failed Publisher connection before retrying",
      "It specifies how many seconds of response latency the Dispatcher tolerates before returning a 504 to the client",
      "The grace period is the maximum time AEM Author has to replicate content before the Dispatcher marks it as stale",
      "graceOnStaleContent delays cache invalidation so multiple replication events are batched into one flush",
      "It sets the minimum cache TTL — pages are guaranteed to stay in cache for at least this many seconds",
    ],
    explanation:
      "Dispatcher Grace Period: When a page is invalidated (stat file updated), the next request for that URL would normally hit the AEM Publisher directly. If many users request the page simultaneously (e.g., after a news article is published), this causes a 'thundering herd' — all requests bypass the cache and hammer the Publisher at once. graceOnStaleContent allows the Dispatcher to continue serving the old (stale) cache entry for a defined number of seconds, refreshing it asynchronously. Only one request goes to the Publisher; all others are served from stale cache.",
  },

  {
    id: "cq-082",
    topic: "Dispatcher",
    question: "DISP-004 and OWASP requirements mandate blocking access to AEM's default servlet selectors. Which selector pattern expresses the most dangerous information disclosure risk?",
    correctAnswers: [
      ".infinity.json — returns the complete JCR subtree including all child nodes and properties as a JSON document",
      "The .infinity.json selector dumps the entire node hierarchy below a path — exposing all child pages, user data, and configuration",
      "infinity.json is the highest risk: '/content.infinity.json' returns every JCR node, property, and value under /content as one JSON response",
      ".infinity.json exposes all content below the requested path including unpublished pages, author notes, and metadata — a severe information disclosure",
    ],
    incorrectAnswers: [
      ".model.json — the Sling Model exporter selector used for Content Fragment REST APIs",
      ".html — the default HTL rendering selector for all AEM pages",
      ".form.html — the form component renderer selector",
      ".selector.feed.xml — the RSS feed selector for news components",
      ".pages.listing.json — the Sites admin listing API selector",
      ".clientlibs.js — the client library aggregator selector",
      ".cq5dam.thumbnail.319.319.png — the DAM rendition selector for image thumbnails",
      ".svg — the vector graphics format selector for DAM asset rendering",
    ],
    explanation:
      "Dispatcher URL Filtering: The .infinity.json selector is one of the most dangerous AEM default features to leave publicly accessible. A request to '/content/mysite.infinity.json' returns the complete JCR tree under /content/mysite — every page, every property (including metadata, tags, and component data), every unpublished draft page, and any content stored by components. This can expose thousands of records in a single request. Block it in Dispatcher /filter with: /deny { /url '/*.infinity.json' }.",
  },


  // ── PERFORMANCE OPTIMIZATION (10) ────────────────────────────────────────

  {
    id: "cq-083",
    topic: "Performance Optimization",
    question: "PERF-001 (Severity: Critical) flags JCR queries executed on every page render without caching. What tool should you use to analyze query performance in AEM?",
    correctAnswers: [
      "The AEM Query Performance Analyzer (/libs/granite/operations/content/diagnosistools/queryPerformance.html) and QueryDebug logs",
      "Use the Query Performance tool in AEM's Operations Dashboard and the com.day.cq.search logger to profile slow queries",
      "AEM's Query Performance report at /libs/granite/operations/content/systemoverview.html and Oak's query explain functionality",
      "The Operations Dashboard Query Performance analyzer and enabling TRACE logging on org.apache.jackrabbit.oak.query for slow query analysis",
    ],
    incorrectAnswers: [
      "Use Chrome DevTools Network tab to measure the query response time from the browser",
      "Install JProfiler on the AEM server and attach it to the Java process during load testing",
      "Use the AEM Replication Dashboard to identify pages whose content is being re-fetched on every request",
      "Check the AEM error log for WARN-level messages about slow content delivery",
      "Run 'explain analyze' in PostgreSQL since AEM uses it as its default repository backend",
      "Use the Eclipse Memory Analyzer Tool (MAT) to identify query objects that are not garbage collected",
      "Check Dispatcher access logs for URLs with response times exceeding 200ms",
      "Use Apache JMeter to record and replay typical author browsing patterns to identify slow queries",
    ],
    explanation:
      "PERF-001 (Critical): JCR queries on every page render are a top AEM performance problem. The AEM Query Performance tool (/libs/granite/operations/.../queryPerformance.html) shows the slowest queries. The Oak QueryExplain feature (.../explain.html) shows the execution plan — revealing whether the query uses an index or performs a full node scan. Queries without proper Oak indexes cause full-repository traversals, which scale linearly with repository size and cause request timeouts under load.",
  },

  {
    id: "cq-084",
    topic: "Performance Optimization",
    question: "PERF-002 requires providing explicit Oak index definitions for all application JCR queries. What happens when a query runs without a matching Oak index?",
    correctAnswers: [
      "Oak performs a full repository traversal — it scans every JCR node to find matches, which scales O(n) with repository size",
      "Without an index, Oak traverses every node in the repository (or the queried subtree), causing exponentially slow queries as content grows",
      "The query executes a full JCR scan: Oak reads all nodes in the repository to find matches — this causes 'Query traversal warnings' in the log and severe slowdowns",
      "Oak falls back to traversal-based search, scanning potentially millions of nodes — this appears in the error.log as WARNING: Traversal query and degrades performance severely",
    ],
    incorrectAnswers: [
      "Oak rejects the query with a QueryTimeoutException and returns an empty result set",
      "The query is automatically routed to a full-text Lucene search which is fast regardless of index",
      "Oak queues the query until a suitable index is built, then executes it asynchronously",
      "Without an index, Oak uses the JVM's built-in B-tree implementation for query execution",
      "AEM returns a 404 response for queries that cannot be satisfied by an existing index",
      "Oak distributes the query across multiple worker threads to speed up the traversal",
      "The query is executed against an in-memory copy of the repository which is always fast",
      "Without an index, AEM automatically creates a temporary index and drops it after the query",
    ],
    explanation:
      "PERF-002 (Critical): Oak (AEM's JCR implementation) uses indexes for efficient queries. Without a matching index (Lucene, property index, or ordered index), Oak performs a full repository traversal — effectively a table scan. For a repository with 10 million nodes, this can take minutes. AEM logs a WARNING: 'Traversal query: ...' in the error.log when traversal occurs. Index definitions (oak:QueryIndexDefinition) must be created in the code repository under /oak:index and deployed via content packages.",
  },

  {
    id: "cq-085",
    topic: "Performance Optimization",
    question: "PERF-003 (Severity: Major) warns against calling session.save() inside a loop when processing bulk content operations. What is the recommended approach?",
    correctAnswers: [
      "Batch multiple changes together and call session.save() once after the loop, or every N items (e.g., every 500 nodes) to control memory usage",
      "Accumulate changes in the JCR session across multiple loop iterations, then call a single session.save() after N iterations or after the loop ends",
      "Call session.save() only after completing a full batch of changes — one save for the entire loop or periodically (every 500 items) to prevent session overflow",
      "Batch saves: do not call session.save() on each iteration; instead commit every 500–1000 nodes to balance memory vs. transaction size",
    ],
    incorrectAnswers: [
      "Use session.refresh(false) instead of session.save() inside loops — refresh discards pending changes and is cluster-safe",
      "Replace session.save() calls with resourceResolver.revert() to use Sling's lightweight persistence mechanism",
      "Call session.commit() instead of session.save() — the commit method is optimized for loop contexts",
      "Use an asynchronous save: session.saveAsync() puts the write in a background queue without blocking the loop",
      "Delete and recreate the session object on every loop iteration to avoid accumulating large in-memory changes",
      "Use a separate transactional session from JTA to batch all saves into a single distributed transaction",
      "Call PageManager.commit() after each loop iteration — it is more efficient than raw JCR session.save()",
      "Use session.lock(path, false, true) before each save to prevent concurrent modification during bulk writes",
    ],
    explanation:
      "PERF-003 (Major): session.save() in JCR flushes all pending changes in the session to the repository and creates a transaction boundary. Calling it inside a loop (one save per node) creates one transaction per node — this is extremely slow because each save involves disk I/O, Lucene index update, and event dispatch. The fix: accumulate changes across multiple iterations and save periodically (every 500–1000 nodes): 'if (++count % 500 == 0) { session.save(); }'. Then do a final save after the loop ends.",
  },

  {
    id: "cq-086",
    topic: "Performance Optimization",
    question: "PERF-004 specifies that AEM Sling Models should use @ValueMapValue injection for simple properties instead of adapting Resource to ValueMap every time. Why?",
    correctAnswers: [
      "@ValueMapValue is resolved once by Sling Models at injection time; resourceResolver.getValueMap() creates a new ValueMap wrapper on every call",
      "Sling Models handle the ValueMap lookup once during model creation with @ValueMapValue — manually calling resource.adaptTo(ValueMap.class) in each method creates redundant object wrappers",
      "@ValueMapValue injects properties directly into fields at model construction time; calling resource.adaptTo(ValueMap.class) is fine but redundant when @ValueMapValue provides the same with less code",
      "The @ValueMapValue annotation caches the property value at injection time, while calling adaptTo(ValueMap.class) in multiple methods creates multiple ValueMap wrapper objects unnecessarily",
    ],
    incorrectAnswers: [
      "@ValueMapValue uses JMX to bypass the JCR layer entirely, making property reads 10x faster",
      "resource.adaptTo(ValueMap.class) triggers a full JCR node reload from disk on every call",
      "@ValueMapValue reads properties from an in-memory buffer; ValueMap reads from the JCR transaction log",
      "Sling Models cache @ValueMapValue across all requests; ValueMap reads are always live from the JCR",
      "@ValueMapValue skips the Sling security checks and reads properties 3x faster than the ValueMap API",
      "The ValueMap from adaptTo includes child node properties; @ValueMapValue includes only direct properties",
      "@ValueMapValue supports reactive streams for async property reads; ValueMap is synchronous only",
      "Using adaptTo(ValueMap.class) in Sling Models is unsupported and throws IllegalStateException",
    ],
    explanation:
      "PERF-004 (Warning): Sling Models with @ValueMapValue are injected once when the model is first adapted from the resource — the framework resolves all annotated fields in one pass. Manually calling resource.adaptTo(ValueMap.class) multiple times in different methods creates multiple wrapper objects but doesn't cause additional JCR reads (the underlying ValueMap wraps the existing node's property map). The main benefit of @ValueMapValue is cleaner code and testability, not a dramatic performance improvement, though avoiding redundant object creation is still a good practice.",
  },

  {
    id: "cq-087",
    topic: "Performance Optimization",
    question: "PERF-005 (Severity: Major) requires using Oak property indexes for equality queries instead of Lucene full-text indexes. When is a property index more efficient than a Lucene full-text index?",
    correctAnswers: [
      "For exact match queries on a specific property (e.g., @sling:resourceType = 'myproject/components/text') — property indexes are faster and smaller than Lucene for equality lookups",
      "Property indexes handle exact-value lookups like 'SELECT * FROM [nt:base] WHERE [jcr:primaryType] = \"cq:Page\"' more efficiently than Lucene full-text indexes",
      "When querying for specific property values (not full-text search), a property index provides O(log n) lookup vs. Lucene's linear scoring overhead",
      "Property indexes are optimal for equality and range conditions (= < > LIKE) on known property names; Lucene is for full-text search across multiple properties",
    ],
    incorrectAnswers: [
      "Property indexes are ONLY useful for the jcr:primaryType property — for all others, use Lucene",
      "Property indexes are deprecated in Oak 1.22+ — all queries should use the new Lucene Universal index",
      "Lucene full-text indexes are always faster because they pre-compute relevance scores at index time",
      "Property indexes are best for multi-valued properties; Lucene is better for single-value exact matches",
      "Property indexes only work on properties with fewer than 1,000 unique values — use Lucene for high-cardinality data",
      "Property indexes cannot be used with WHERE clauses — they only work with ORDER BY",
      "Oak automatically chooses between property and Lucene indexes; developers need not specify the index type",
      "Lucene indexes use less disk space than property indexes for repositories larger than 100,000 nodes",
    ],
    explanation:
      "PERF-005 (Major): Oak supports multiple index types. Property indexes (oak:QueryIndexDefinition, type='property') are B-tree structures for exact-value and range queries — they are small, fast to build, and efficient for queries like 'WHERE [jcr:primaryType] = \"cq:Page\"'. Lucene indexes (type='lucene') are full-text search engines that index all text for keyword search — they are large, build slowly, and have overhead from relevance scoring. For equality conditions on known properties, always use a property index. Lucene is justified only for full-text search (e.g., 'CONTAINS(title, \"hello\")').",
  },

  {
    id: "cq-088",
    topic: "Performance Optimization",
    question: "What is AEM's Lazy Loading pattern for large lists, and which PERF-006 (Severity: Minor) compliant API supports it for content tree traversal?",
    correctAnswers: [
      "Use resource.listChildren() or Page.listChildren() which return lazy iterators — items are loaded from JCR only as the iterator advances",
      "listChildren() returns a lazy Iterator<Resource> that reads from the JCR on demand; getChildren() returns a pre-loaded Iterable that may eagerly evaluate",
      "The Iterator<Resource> from resource.listChildren() is lazy — use it with iteration rather than converting to a List which would force eager loading of all children",
      "resource.listChildren() provides lazy JCR loading; convert to List only when size() is needed — iterating an unbounded list eagerly loaded into memory is a common performance mistake",
    ],
    incorrectAnswers: [
      "Use resource.getChildren() which is optimized for lazy loading — listChildren() is the eager version",
      "Call session.getNode(path).getNodes() with a large fetch size filter to batch-load children lazily",
      "AEM does not support lazy loading — all child resources must be loaded into memory before processing",
      "Use queryBuilder.createQuery() with a PageSize parameter to implement lazy paging on child resources",
      "PageManager.getLiveCopy() returns a lazy proxy that defers content tree loading until accessed",
      "Call resolver.findResources() and use its cursor-based iterator to navigate results page-by-page",
      "Use InheritanceValueMap.getInherited() which lazy-loads properties from ancestor pages only on demand",
      "resource.adaptTo(Node.class).getNodes() provides lazy loading via JCR's built-in streaming API",
    ],
    explanation:
      "PERF-006 (Minor): resource.listChildren() returns a lazy Iterator<Resource> backed by the JCR NodeIterator. Items are fetched from the repository only as the iterator calls next() — never loading more than the current item. Converting the result to new ArrayList<>(resource.listChildren()) forces eager evaluation of all children into memory. For a page with 10,000 child resources, this creates a 10,000-element ArrayList. The pattern: 'Iterator<Resource> it = resource.listChildren(); while (it.hasNext()) { process(it.next()); }' is memory-efficient for any list size.",
  },

  {
    id: "cq-089",
    topic: "Performance Optimization",
    question: "How does configuring the Dispatcher to cache HTML responses with long TTL values improve AEM performance, and what is the mechanism?",
    correctAnswers: [
      "Long TTL responses are served directly from the Dispatcher's disk cache — AEM Publisher never receives the request, eliminating all rendering, JCR reads, and network overhead",
      "Cached HTML responses at the Dispatcher bypass the entire AEM stack (Java servlet, Sling, JCR, database) — O(1) disk reads vs. O(n) rendering pipeline processing",
      "Long-lived Dispatcher cache entries mean repeat requests are served from the local filesystem cache without touching AEM Publisher, reducing Publisher load by orders of magnitude",
      "Dispatcher HTML caching eliminates the AEM rendering pipeline for cached URLs — the server serves static files from disk at network speed instead of executing server-side rendering",
    ],
    incorrectAnswers: [
      "Long TTL caching enables AEM Publisher to pre-render responses during low-traffic periods for instantaneous future delivery",
      "Dispatcher cache TTLs are irrelevant — AEM's in-memory servlet cache already handles all repeat requests",
      "Long TTL reduces network bandwidth by compressing cached responses; the Publisher still processes every request",
      "Dispatcher caching improves performance by batching multiple requests into a single AEM rendering event",
      "Configuring TTL enables AEM Author replication to push pre-built HTML files to the Dispatcher proactively",
      "Long TTL values tell browsers not to request the page at all, eliminating server load from cache hits",
      "Dispatcher TTL caching enables HTTP/2 Server Push, sending cached resources to browsers proactively",
      "Longer cache TTL reduces JCR write contention because fewer cache invalidation events are triggered",
    ],
    explanation:
      "PERF Dispatcher Caching: When the Dispatcher caches an HTML response, subsequent requests for that URL are served directly from the Apache httpd/IIS file system cache. The AEM rendering pipeline — Sling resolver, component scripts, JCR session, HTL evaluation, ResourceResolver — is bypassed entirely. A cache hit typically takes <5ms (disk read). An uncached AEM request may take 50–500ms. For high-traffic sites, this difference means the difference between serving 100 req/s vs. 10,000 req/s from the same hardware.",
  },

  {
    id: "cq-090",
    topic: "Performance Optimization",
    question: "PERF-003 combined with JCR best practices: when bulk-importing 100,000 DAM assets into AEM, what is the recommended approach to avoid memory and performance issues?",
    correctAnswers: [
      "Process in batches of 500–1000 assets; call session.save() after each batch, and call session.refresh(false) periodically to release stale session state",
      "Import in small batches with periodic session.save() — each batch flushes JCR changes to disk and resets the session's pending change map to reclaim memory",
      "Use batch processing with intermediate session.save() calls every N assets, then session.refresh(false) to release the JCR session's change log between batches",
      "Batch import: save every 500–1000 assets, then clear the session with session.refresh(false) — this prevents the session's pending changes from growing to GBs in memory",
    ],
    incorrectAnswers: [
      "Stream all assets to the JCR in a single transaction and call session.save() only once at the end to maximize write throughput",
      "Use one ResourceResolver per asset to ensure complete isolation and avoid cross-asset session contamination",
      "Process assets in parallel using 32 threads, one session per thread, saving after each asset independently",
      "Use session.move() to batch-move assets from a staging area to the final location after all imports complete",
      "Import assets via the DAM API's batch endpoint /bin/dam/import which handles all session management automatically",
      "Save after every single asset — keeping transactions small is always better for repository consistency",
      "Create a new JCR session for every 10 assets using ResourceResolverFactory.getServiceResourceResolver()",
      "Use HTTP PUT requests to the DAM API instead of direct JCR sessions — HTTP manages persistence automatically",
    ],
    explanation:
      "PERF-003 and Bulk Import: The JCR session accumulates all pending changes in memory until session.save() is called. For a 100,000 asset import, calling save() only at the end would accumulate all 100,000 asset nodes (potentially GBs of pending change data) in memory. The pattern: process in batches of 500–1000, call session.save() after each batch (commits and clears the pending map), then optionally session.refresh(false) (releases stale session state). This keeps memory usage constant regardless of total import size.",
  },

  {
    id: "cq-091",
    topic: "Performance Optimization",
    question: "What is the purpose of declaring 'includedPaths' in an Oak Lucene index definition?",
    correctAnswers: [
      "Restricts the Lucene index to only index nodes under the specified paths, reducing index size and build time",
      "includedPaths limits which JCR subtrees are included in the Lucene index — smaller scope = faster indexing and smaller index files",
      "It scopes the index to specific content areas (e.g., ['/content/mysite']) instead of indexing the entire repository, improving both build performance and query speed",
      "includedPaths prevents the Lucene indexer from scanning /lib, /system, and other non-content areas — focus the index on the paths that your queries actually target",
    ],
    incorrectAnswers: [
      "includedPaths defines which query result paths the index returns — results from other paths are filtered out post-query",
      "It specifies the file system directories where Lucene stores its index segment files",
      "includedPaths lists the Java packages that are allowed to execute queries against this index",
      "It defines which Oak compaction runs include this index in their optimization pass",
      "includedPaths restricts which AEM services are permitted to trigger index rebuild operations",
      "It specifies which JCR property names are stored in the index (equivalent to includePropertyNames)",
      "includedPaths controls which Lucene analyzer language configurations are applied during indexing",
      "It defines the replication agents that push index updates from Author to Publisher instances",
    ],
    explanation:
      "Oak Lucene Index Optimization: By default, a Lucene index scans and indexes every node in the JCR repository. For AEM repositories with millions of nodes (/apps, /libs, /content, /home, /var combined), this creates enormous indexes that take hours to rebuild. The 'includedPaths' property (e.g., [['/content/mysite']]) scopes the index to only the relevant content subtrees your queries target. A site-specific search index needs only /content/mysite — not the entire /libs or /home tree.",
  },

  {
    id: "cq-092",
    topic: "Performance Optimization",
    question: "AEM's Sling Request Processing pipeline executes multiple filters and resolvers. Which PERF-006 technique avoids re-resolving the sling:resourceType on every request for the same component?",
    correctAnswers: [
      "The Sling Resource Resolver caches resource type lookups internally; developers should avoid creating new ResourceResolver instances per-request to benefit from this cache",
      "Sling's resource type resolution caches results within the request scope — reusing the same SlingHttpServletRequest avoids redundant resolver calls within one request cycle",
      "Enable Sling's script resolution caching (org.apache.sling.scripting.core) configuration to cache script lookups across requests",
      "OSGi service caching: inject @Reference ScriptEngineManager and reuse the resolved script reference across requests rather than resolving the sling:resourceType each time in a long running service",
    ],
    incorrectAnswers: [
      "Use a static HashMap on the Sling Servlet class to cache resource type lookup results globally",
      "Override SlingHttpServletRequest.getResourceType() with a custom CachingRequest wrapper that stores results in Redis",
      "Enable AEM's HTML Page Cache (HPC) which pre-computes sling:resourceType lookups at Author activation time",
      "Use Nginx as a reverse proxy in front of the Dispatcher to cache script resolution HTTP headers",
      "Deploy a custom SCR component that pre-warms the Sling resolver cache on bundle activation by resolving all known resource types",
      "Set sling.resourcetype.cache=true in the Sling Engine OSGi configuration to enable global cross-request caching",
      "Use the AEM Prefetcher service that walks the content tree and pre-resolves all resourceTypes into a JVM static cache",
      "Call request.setAttribute('resolvedScript', resolvedCompiledScript) to share the resolved script across include chains",
    ],
    explanation:
      "PERF-006 and Sling Resource Resolution: Sling's script resolver maintains a per-request cache of resolved scripts. Within one HTTP request, the same component included multiple times (e.g., a list of product cards all using myproject/components/product) resolves the script (finding the most specific HTL file) only once. Sling also maintains a longer-lived cache of compiled scripts across requests. The key performance practice: avoid creating unnecessary new ResourceResolver instances per-request (each has its own overhead) and rely on Sling's built-in resolution caching rather than manual workarounds.",
  },


  // ── SECURITY (8) ─────────────────────────────────────────────────────────

  {
    id: "cq-093",
    topic: "Security",
    question: "SEC-001 (Severity: Critical) requires AEM developers to use parameterized JCR-SQL2 queries to prevent query injection attacks. What is the risk of building queries via string concatenation?",
    correctAnswers: [
      "An attacker can inject JCR-SQL2 syntax into user-supplied values to access content beyond the intended scope",
      "String-concatenated queries allow injection of JCR-SQL2 operators that traverse the entire repository, exposing unauthorized nodes",
      "Query injection via string concatenation enables attackers to retrieve any JCR node including /home/users by manipulating WHERE conditions",
      "Building queries with user input via string concatenation creates JCR injection vulnerabilities similar to SQL injection",
    ],
    incorrectAnswers: [
      "String-concatenated queries are safe because AEM's content access control (ACL) still applies to all query results",
      "JCR-SQL2 has no concept of injection because all query results are filtered by Sling's security layer",
      "Query injection in JCR is impossible because the query engine runs in an isolated OSGi sandbox",
      "String concatenation only affects performance — query results are always ACL-filtered before being returned",
      "JCR-SQL2 injection can only expose node paths but not property values or credentials stored in nodes",
      "AEM's QueryBuilder automatically sanitizes all string inputs before executing the underlying query",
      "JCR queries run as the admin user internally, so injected clauses cannot expose more than all content",
      "String concatenated queries are only dangerous if the query runs without a ResourceResolver",
    ],
    explanation:
      "SEC-001 (Critical): JCR-SQL2 supports user-defined WHERE clauses. If you build a query like 'SELECT * FROM [nt:base] WHERE [title] = \"' + userInput + '\"', an attacker can inject: 'x\" OR [jcr:primaryType] = \"rep:User' — revealing all user nodes from /home/users. Use parameterized queries via QueryManager.createQuery(sql, Query.JCR_SQL2) with values set as query variables, which prevents injection by treating user input as literal values, not query syntax.",
  },

  {
    id: "cq-094",
    topic: "Security",
    question: "SEC-002 (Severity: Blocker) states that the AEM admin password must never be the default ('admin'). What Cloud Manager mechanism enforces this?",
    correctAnswers: [
      "Cloud Manager Health Checks include a Default Password check that blocks promotion if the admin password is still default",
      "AEM as a Cloud Service enforces non-default admin credentials at environment provisioning time; environments with default passwords fail Cloud Manager deployment gates",
      "Cloud Manager's security health check validates that the AEM admin account does not use the default password before promoting to any stage",
      "The Security Checklist in Cloud Manager's pre-deployment verification blocks any environment where admin:admin credentials still work",
    ],
    incorrectAnswers: [
      "Cloud Manager enforces password policy via an LDAP integration that rejects common passwords",
      "The Adobe Managed Services (AMS) team manually rotates admin passwords during each deployment window",
      "AEM automatically changes the admin password to a random value on each startup if the default is detected",
      "Cloud Manager's OSGi health check (Felix Web Console) validates password strength at bundle activation time",
      "Adobe Launcher API verifies the admin password via an IMS token exchange before any deployment proceeds",
      "System users created during AEM installation always use UUID-based passwords, making default password issues impossible",
      "The CQ Security Manager OSGi service enforces password complexity for the admin account automatically",
      "AEM's Sling Authentication Handler blocks all login attempts with the default credentials after 3 failed tries",
    ],
    explanation:
      "SEC-002 (Blocker): The default AEM admin password ('admin') is a well-known credential that automated scanners check within seconds of finding an AEM instance. AEM as a Cloud Service provisions environments with randomized admin passwords and does not use admin:admin. For on-premise and AMS deployments, the Cloud Manager Security Health Check (accessible from the Operations Dashboard) verifies that the admin password is not the default, blocking release train promotion until it passes.",
  },

  {
    id: "cq-095",
    topic: "Security",
    question: "Which security vulnerability does enabling the 'Allow' filter rule for all paths (/) in the Dispatcher /filter section create?",
    correctAnswers: [
      "It bypasses the Dispatcher's URL filtering layer entirely — attackers can reach all AEM servlets including CRXDE, Package Manager, and admin endpoints",
      "A catch-all allow rule exposes every AEM endpoint to the internet including /system/console, /crx/de, and /bin/querybuilder.json",
      "Allowing all paths removes the Dispatcher's access control, giving public users access to AEM's administrative interfaces and JCR traversal endpoints",
      "A broad /allow rule for / (root) means every URL pattern reaches AEM, defeating the Dispatcher's security filter purpose",
    ],
    incorrectAnswers: [
      "An allow-all rule only affects performance — it doesn't bypass any security controls because AEM has its own authentication",
      "The filter rule only applies to cached content; uncached paths are always blocked regardless of the allow rule",
      "Allowing all paths is safe if AEM's built-in user authentication (login.html) is enabled on the publish instance",
      "The /allow filter rule only applies to GET requests — all other HTTP methods are blocked by default",
      "A root allow rule only affects pages under /content — /system and /bin paths have separate security controls",
      "AEM's OSGi Security Framework automatically blocks admin servlet access even if Dispatcher allows the path",
      "The Dispatcher allow rule only grants access to published content — unpublished content remains protected",
      "A broad allow rule in /filter only applies to external traffic — internal replication traffic is handled separately",
    ],
    explanation:
      "Dispatcher Security: The /filter section is the Dispatcher's URL allowlist. The correct approach is deny-by-default: deny everything first, then explicitly allow only required paths. A rule that allows all paths (/) or all paths matching /content/* and /apps/* without tighter restrictions exposes sensitive endpoints. Once traffic reaches AEM, the secondary authentication check (AEM login) is the only protection — but many AEM administrative URLs do not require authentication by default on Publisher instances.",
  },

  {
    id: "cq-096",
    topic: "Security",
    question: "SEC-003 (Severity: Critical) requires implementing CSRF protection for all AEM POST requests that modify content. Which AEM mechanism provides this protection?",
    correctAnswers: [
      "AEM's Granite CSRF Filter (com.adobe.granite.csrf) — injects a CSRF token in HTML forms and validates it on POST requests",
      "The Granite Anti-CSRF Filter validates the 'CSRF-Token' header or ':cq_csrf_token' form field on all state-changing POST requests",
      "Configure the Granite CQ CSRF protection via OSGi: com.adobe.granite.csrf.impl.CSRFRequestFilter validates tokens on modifying requests",
      "AEM's built-in CSRF protection requires all POST forms to include the :cq_csrf_token parameter from /libs/granite/csrf/token.json",
    ],
    incorrectAnswers: [
      "AEM relies exclusively on the browser's SameSite cookie attribute for CSRF protection without any server-side token validation",
      "Use the Referer header validation Dispatcher filter to block all requests from unknown origins as CSRF protection",
      "AEM's Sling Authentication Handler automatically generates and validates CSRF tokens for all requests",
      "CSRF protection is handled by the AEM Replication Agent which validates the digital signature on all content operations",
      "The CSRF filter is only needed on Author — Publisher instances don't need CSRF protection because users are anonymous",
      "Implement CSRF protection by setting 'Access-Control-Allow-Origin: *' in all response headers",
      "AEM's JCR Access Control system automatically prevents cross-site request forgery through ACL validation",
      "Use the AEM Dispatcher's /filter section with Referer-based rules instead of the Granite CSRF filter",
    ],
    explanation:
      "SEC-003 (Critical): Cross-Site Request Forgery (CSRF) forces logged-in AEM users to unknowingly submit state-changing requests from malicious websites. AEM's Granite CSRF protection provides: (1) A token endpoint at /libs/granite/csrf/token.json that client-side code can fetch, (2) The Granite CSRFRequestFilter OSGi component that validates the token on all POST/DELETE/PUT requests, (3) Integration with Touch UI forms that auto-injects the :cq_csrf_token parameter. Custom API endpoints must manually include the token in the request header.",
  },

  {
    id: "cq-097",
    topic: "Security",
    question: "SEC-004 (Severity: Critical) requires that all Sling Servlets use explicit resource type or path binding rather than registering to catch all resource types. Why?",
    correctAnswers: [
      "A servlet registered without resource type constraints can be reached by manipulating sling:resourceType on any writable JCR node — privilege escalation",
      "Overly broad servlet registration allows attackers to trigger sensitive operations by creating JCR nodes with a matching sling:resourceType",
      "Without resource type constraints, an authenticated user can point any page's sling:resourceType to the servlet's bound resource type and invoke it on arbitrary content",
      "Broad servlet registration enables attackers to route any Sling request through the servlet by manipulating the request's resource type — bypassing intended access checks",
    ],
    incorrectAnswers: [
      "Broad servlet registration is only a performance issue — Sling's security layer still validates all resource type bindings",
      "A servlet with no resource type binding can only be reached via the direct servlet path — JCR resources cannot trigger it",
      "Sling's OAuth integration prevents unauthorized resource type manipulation regardless of servlet binding scope",
      "Without explicit resource type binding, the servlet receives all requests which simplifies routing — security is handled by ACLs",
      "Broad binding is only a concern for POST servlets — GET servlets with wide registration are always safe",
      "Sling automatically validates that the requesting user's role matches the servlet's declared binding constraints",
      "AEM's dispatcher blocks all requests to servlets that don't have explicit paths in the /filter section",
      "Resource type binding is only relevant for the Sling POST Servlet — custom servlets are always safe with broad registration",
    ],
    explanation:
      "SEC-004 (Critical): Sling Servlets can be registered by resource type (sling:resourceType), path (/bin/myservlet), or extension. Without explicit resource type binding, a servlet registered to handle all requests matching a broad selector (e.g., selector='.myapp') can be triggered on any content node in the repository by appending the selector. With explicit binding (e.g., resourceTypes='myproject/components/product'), the servlet only fires on resources whose sling:resourceType is set to 'myproject/components/product'.",
  },

  {
    id: "cq-098",
    topic: "Security",
    question: "SEC-005 (Severity: Blocker) mandates that all AEM environments use TLS/HTTPS. Beyond encryption, what additional security benefit does TLS provide?",
    correctAnswers: [
      "TLS provides server authentication via the certificate chain — clients verify they are talking to the legitimate AEM server and not a man-in-the-middle",
      "TLS mutual authentication validates the server's identity via its certificate, preventing traffic interception and MITM attacks that could capture session tokens",
      "The TLS certificate chain allows browsers to verify the server's identity, protecting against DNS hijacking and traffic redirection to malicious servers",
      "TLS provides authentication (certificate validation), encryption (content confidentiality), and integrity (MAC prevents tampering) — not just encryption",
    ],
    incorrectAnswers: [
      "TLS primarily provides performance benefits through HTTP/2 multiplexing; security is a secondary benefit",
      "TLS prevents all SQL injection attacks by encrypting query parameters in transit",
      "The main additional benefit of TLS is that it enables browser cookie SameSite=None attribute support for cross-site requests",
      "TLS provides immunity from XSS attacks because script injection payloads cannot be transmitted over encrypted channels",
      "TLS automatically validates all content packages deployed to AEM using certificate pinning",
      "The primary additional benefit is that TLS enables Dispatcher cache compression for cached HTML responses",
      "TLS prevents CSRF attacks because the browser's preflight OPTIONS check only works on HTTPS origins",
      "TLS enforces that all JCR property values are stored encrypted at rest in the Oak data store",
    ],
    explanation:
      "SEC-005 (Blocker): HTTPS/TLS provides three security properties: (1) Confidentiality — encrypted traffic cannot be read by network observers, protecting session tokens, form data, and authored content during transmission. (2) Integrity — the MAC (Message Authentication Code) detects any tampering with packets in transit. (3) Authentication — the server's TLS certificate (validated against the CA chain) proves the server's identity, preventing man-in-the-middle attacks where an attacker intercepts traffic between the browser and AEM.",
  },

  {
    id: "cq-099",
    topic: "Security",
    question: "SEC-006 (Severity: Critical) requires regular security audit of AEM's active user accounts. Which AEM path provides a list of all active user accounts that should be reviewed?",
    correctAnswers: [
      "/home/users in CRXDE — all AEM repository users (system, service, author, and anonymous) are stored under this path",
      "The AEM User Admin at /libs/granite/security/content/useradmin.html lists all active user accounts for audit",
      "The Security console at /security.html or CRXDE /home/users — review all accounts including system users and service users",
      "User accounts are stored as JCR nodes under /home/users — audit them via CRXDE, the Security console, or User API",
    ],
    incorrectAnswers: [
      "/etc/users — the legacy CQ5 path for user accounts, still valid in AEM 6.5+",
      "/content/admin/users — the AEM Sites page tree location for user profile pages",
      "/conf/global/settings/authentication — where OSGi authentication handler definitions are stored",
      "/apps/security/users — the location where custom security configurations are stored",
      "/var/granite/users — the runtime user session store managed by the AEM login mechanism",
      "/libs/cq/security/users — the read-only library path containing user node type definitions",
      "/bin/users/list.json — the Sling servlet endpoint that lists all repository users as JSON",
      "/system/sling/users — the Sling internal path where dynamic user accounts are created at runtime",
    ],
    explanation:
      "SEC-006 (Critical): AEM stores all users (authors, administrators, system users, service users, and replication agents) as JCR nodes under /home/users. A security audit should review: (1) Default out-of-the-box accounts (admin, anonymous) — verify passwords are changed and anonymous has minimal permissions. (2) Service users under /home/users/system — verify each has a corresponding bundle mapping and minimal required permissions. (3) Author accounts — verify inactive accounts are disabled and no accounts have admin rights unnecessarily.",
  },

  {
    id: "cq-100",
    topic: "Security",
    question: "What is AEM's Sling Resource Access Security (SRAS/Granite Resource Access Control) and how does it complement JCR ACLs for securing AEM endpoints?",
    correctAnswers: [
      "Sling resource-level access control adds requirement checks at the Sling layer on top of JCR ACLs — it allows restricting access by Sling resource type, not just JCR path",
      "SRAS (Sling Resource Access Security) evaluates access permissions at the Sling resource resolution level, complementing JCR ACLs with resource-type-based access control",
      "Granite Resource Access Control checks permissions when Sling resolves a resource by type, providing an additional layer above JCR read permission ACLs for component-level security",
      "It is a Sling-level resource access layer that can deny access based on sling:resourceType, supplementing JCR ACLs which work on node paths — together they provide defense-in-depth",
    ],
    incorrectAnswers: [
      "SRAS replaces JCR ACLs entirely — it is the modern security mechanism and JCR ACLs are deprecated in AEM 6.5+",
      "Sling Resource Access Security is the dispatcher /filter configuration file — it complements Oak's repository-level security",
      "SRAS is the OSGi security framework that enforces bundle-level permissions on all service method calls",
      "It is AEM's implementation of the Java EE security container that maps JEE roles to AEM user groups",
      "SRAS is the Apache Shiro integration in AEM that provides JWT-based resource authorization",
      "Granite Resource Access Control is the same as JCR ACLs — just the Adobe branded name for Oak's security model",
      "It is AEM's URL-based blacklist that prevents access to paths listed in the security configuration file",
      "SRAS is only active on the Author instance — Publisher security relies exclusively on JCR ACLs and Dispatcher filtering",
    ],
    explanation:
      "SEC-006 and Defense-in-Depth: AEM's security is layered. JCR ACLs (rep:policy nodes, jcr:read/write permissions) control access at the repository node level — who can read or modify specific JCR paths. Sling Resource Access Security (SRAS) adds access control at the Sling resource layer — it can restrict which resource types a given user or group can access, regardless of the JCR path. This is particularly useful for securing component endpoints where the JCR path alone doesn't express the semantic access boundary. Together they provide defense-in-depth: an attacker must bypass both layers.",
  },

]
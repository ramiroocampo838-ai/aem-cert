import type { Concept } from "../types"

export const sonarqubeRulesConcepts: Concept[] = [
  {
    id: "cq-001",
    title: "java:S2095 — Resources Should Be Closed",
    reference: "Which SonarQube rule requires that ResourceResolvers, streams, and other closeable resources must always be closed in AEM Java code?",
    explanation:
      "java:S2095 (Severity: Critical, Type: Bug) requires that all resources implementing AutoCloseable — including ResourceResolver, InputStream, and JCR Session — are closed after use. The recommended fix is try-with-resources, which guarantees closure even when exceptions occur. Unclosed ResourceResolvers exhaust the JCR connection pool and cause production outages.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-002",
    title: "try-with-resources (try (ResourceResolver resolver = ...))",
    reference: "What is the recommended Java pattern for ensuring a ResourceResolver is always closed, even when an exception is thrown?",
    explanation:
      "The Java try-with-resources statement (introduced in Java 7) automatically calls close() on any AutoCloseable object when the try block exits — whether normally or via exception. This is the correct fix for java:S2095 and prevents ResourceResolver leaks that exhaust the JCR repository connection pool.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-003",
    title: "Avoid Hardcoded Credentials",
    reference: "Which SonarQube rule has Key java:S2068 and is classified as a Critical Vulnerability?",
    explanation:
      "java:S2068 (Severity: Critical, Type: Vulnerability) detects hardcoded credentials — passwords, API keys, and tokens stored as string literals in source code. Source code is committed to Git and visible to anyone with repository access. The AEM solution is to use OSGi configuration with AEM Crypto Support encryption ({cipher} prefix) or Cloud Manager environment variables.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-004",
    title: "Use OSGi configuration with AEM Crypto Support encryption (cipher prefix)",
    reference: "In AEM, what is the correct alternative to storing a password as a hardcoded string literal in Java source code?",
    explanation:
      "The AEM-recommended solutions for java:S2068 are: (1) OSGi configuration with AEM Crypto Support — values prefixed with {cipher} are encrypted at rest and safe to commit to Git, and (2) Cloud Manager environment variables — injected at pipeline execution time. Both prevent secrets from appearing as plaintext in VCS.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-005",
    title: "Null Pointers Should Not Be Dereferenced",
    reference: "Which SonarQube rule (Key: java:S2259, Severity: Critical) addresses a very common runtime crash in AEM caused by not checking return values from Sling APIs like adaptTo() or getChild()?",
    explanation:
      "java:S2259 (Severity: Critical, Type: Bug) detects null pointer dereferences. AEM APIs such as adaptTo(), getChild(), getContentResource(), and getResource() frequently return null when the resource or adaptation target does not exist. Calling any method on a null reference throws NullPointerException at runtime. Every result from these APIs must be null-checked before use.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-006",
    title: "Methods Should Not Be Too Complex",
    reference: "Which SonarQube rule (Key: java:S1541) is triggered when an AEM service method has too many conditional branches and independent execution paths?",
    explanation:
      "java:S1541 (Severity: Major, Type: Code Smell) measures cyclomatic complexity — the number of independent execution paths through a method. The default threshold is 10. In AEM, Sling Models and OSGi services with deeply nested conditionals are common offenders. The fix is to extract private methods for each responsibility, use early returns, and delegate sub-tasks to separate services.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-007",
    title: "The number of independent execution paths (branches) through the method",
    reference: "What does cyclomatic complexity measure in a Java method, as flagged by java:S1541?",
    explanation:
      "Cyclomatic complexity counts the number of linearly independent paths through a method. Each if, else if, for, while, case, catch, and ternary operator adds 1 to the count. A method with complexity > 10 (SonarQube default) has too many branches, is hard to test comprehensively, and should be refactored into smaller, focused methods.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-008",
    title: "Avoid Empty Catch Blocks",
    reference: "Which SonarQube rule (Key: java:S00108) prevents AEM developers from silently swallowing RepositoryException, WorkflowException, and other critical errors?",
    explanation:
      "java:S00108 (Severity: Major, Type: Code Smell) flags completely empty catch blocks. An empty catch block swallows the exception silently — there is no log, no rethrow, and no recovery. In AEM this hides failures in JCR saves, workflow completions, and replication events, making production issues extremely difficult to diagnose. The minimum fix is: log.error('message', e).",
    category: "SonarQube Rules",
  },
  {
    id: "cq-009",
    title: "java:S106",
    reference: "What SonarQube rule key covers the requirement to use SLF4J loggers instead of System.out.println in AEM production Java code?",
    explanation:
      "java:S106 (Severity: Minor, Type: Code Smell) flags all use of System.out and System.err. In AEM, log output must go through the Sling Log Service (backed by Logback) so it can be routed, throttled, and persisted correctly. Using SLF4J with parameterized messages (log.info('Processing: {}', path)) also avoids string concatenation overhead when the log level is disabled.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-010",
    title: "To prevent drift — a typo in one occurrence causes silent data loss; a constant is changed in one place",
    reference: "Why should JCR property name constants like 'jcr:title' be extracted to private static final String fields rather than repeated inline, according to java:S1192?",
    explanation:
      "java:S1192 (Severity: Minor, Type: Code Smell) flags string literals that are duplicated 3 or more times. In AEM code, JCR property names like 'jcr:title' or 'jcr:description' are used across multiple methods. Extracting them as private static final String constants (e.g., PN_TITLE = 'jcr:title') means any rename or fix only needs to happen in one place, preventing inconsistency bugs.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-011",
    title: "getAdministrativeResourceResolver(null)",
    reference: "Which AEM API method is flagged by java:S1874 (Deprecated API Usage) because it grants unrestricted admin access with no audit trail and was removed in AEMaaCS?",
    explanation:
      "getAdministrativeResourceResolver(null) was deprecated in AEM 6.1 and completely removed in AEMaaCS. It granted full admin privileges with no audit trail — a security vulnerability. The replacement is getServiceResourceResolver(params) where params contains the SUBSERVICE key mapped to a system user with only the permissions the service actually needs (least-privilege principle).",
    category: "SonarQube Rules",
  },
  {
    id: "cq-012",
    title: "Sling Models annotated with @Model",
    reference: "According to java:S1874, what is the modern AEM replacement for WCMUsePojo when creating component backing logic?",
    explanation:
      "WCMUsePojo is a legacy base class that requires a running AEM instance to test. Its modern replacement is a Sling Model: a class annotated with @Model(adaptables = Resource.class) that uses annotation-driven injection (@ValueMapValue, @ChildResource, @OSGiService). Sling Models can be unit-tested with AEM Mocks without a running AEM instance.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-013",
    title: "Classes Should Not Be Too Long",
    reference: "Which SonarQube rule (Key: java:S2972) is violated when an AEM OSGi service or Sling Model grows to hundreds of methods, mixing rendering, business logic, and data access?",
    explanation:
      "java:S2972 (Severity: Major, Type: Code Smell) flags classes that are too large. A class mixing rendering, business logic, and data access violates the Single Responsibility Principle and becomes difficult to comprehend, test, and maintain. The fix is to split responsibilities: the Sling Model handles view concerns, dedicated OSGi services handle business logic, and repositories handle data access.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-014",
    title: "The exception must be logged, rethrown, or handled — never silently discarded",
    reference: "What does java:S1166 (Exceptions Should Not Be Ignored) require when a WorkflowException or ReplicationException is caught in AEM code?",
    explanation:
      "java:S1166 (Severity: Major, Type: Code Smell) requires that caught exceptions are not silently discarded. Unlike java:S00108 which flags completely empty catch blocks, S1166 also flags cases where the exception variable is declared but never used. The correct approach: log.error('Operation failed: {}', e.getMessage(), e) and either rethrow, return a failure indicator, or take a documented recovery action.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-015",
    title: "Avoid Magic Numbers",
    reference: "Which SonarQube rule (Key: java:S109) is violated when an AEM developer writes 'if (results.size() > 100)' without extracting the number 100 as a named constant?",
    explanation:
      "java:S109 (Severity: Minor, Type: Code Smell) flags numeric literals embedded directly in code ('magic numbers'). A number like 100 in 'results.size() > 100' has no self-documenting name. Extracting it as 'private static final int MAX_SEARCH_RESULTS = 100' makes the intent clear and centralizes the value for easy maintenance.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-016",
    title: "OSGi services are singletons shared across ALL concurrent HTTP request threads simultaneously",
    reference: "Why do OSGi services in AEM require thread-safe data structures for any mutable instance fields, as flagged by java:S2885?",
    explanation:
      "OSGi @Component services are singletons — a single instance is created and shared across all concurrent HTTP request threads. Any mutable instance field (like an ArrayList or HashMap) is therefore accessed by multiple threads simultaneously, creating race conditions. The fix: use ConcurrentHashMap, CopyOnWriteArrayList, AtomicReference, or keep the service stateless by storing state in request scope instead.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-017",
    title: "Collections.synchronizedList(new ArrayList<>())",
    reference: "Which is a correct thread-safe alternative to 'private List<String> cache = new ArrayList<>()' in an OSGi service, according to java:S2885?",
    explanation:
      "java:S2885 requires thread-safe data structures for mutable fields in OSGi singletons. Correct options include: Collections.synchronizedList(new ArrayList<>()), CopyOnWriteArrayList (safe for read-heavy scenarios), ConcurrentHashMap for maps, and AtomicReference for single object references. Simply adding 'volatile' to an ArrayList does NOT make it thread-safe — it only ensures visibility of the reference, not of the list contents.",
    category: "SonarQube Rules",
  },
  {
    id: "cq-018",
    title: "Critical — both rules are classified as Critical severity",
    reference: "What is the severity level of java:S2095 (Resources Should Be Closed) and java:S2885 (Thread Safety in OSGi Services) in SonarQube?",
    explanation:
      "Both java:S2095 and java:S2885 are classified as Critical severity Bug rules. java:S2095 is Critical because unclosed ResourceResolvers exhaust the JCR connection pool and crash the repository under load. java:S2885 is Critical because race conditions in OSGi singletons cause intermittent data corruption and NullPointerExceptions that are extremely difficult to debug in production.",
    category: "SonarQube Rules",
  },
]

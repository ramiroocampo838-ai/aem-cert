import type { Concept } from "../types"

export const aemBestPracticesConcepts: Concept[] = [
  {
    id: "cq-033",
    title: "try-with-resources — ResourceResolver implements Closeable so it is automatically closed at the end of the try block",
    reference: "AEM-BP-001 (Severity: Critical) requires that every ResourceResolver obtained from a ResourceResolverFactory must be explicitly closed. What Java pattern guarantees the resolver is closed even if an exception occurs?",
    explanation:
      "AEM-BP-001 (Critical): ResourceResolver implements java.io.Closeable/AutoCloseable. The try-with-resources pattern guarantees resolver.close() is called regardless of whether the block exits normally or via an exception. An unclosed ResourceResolver leaks an active JCR Session, consuming memory and file handles. Over time, leaked resolvers exhaust the session pool and crash the system. Each resolver obtained must be closed in the same method that obtained it.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-034",
    title: "@ServiceUserMapped with @Reference to get the ServiceUserMapped service, then use resolverFactory.getServiceResourceResolver(Map.of(ResourceResolverFactory.SUBSERVICE, subServiceName))",
    reference: "Which specific Sling annotations are required to declare an OSGi service user mapping so a Sling Service can obtain a ResourceResolver without admin credentials, per AEM-BP-002?",
    explanation:
      "AEM-BP-002 (Major): The deprecated ResourceResolverFactory.getAdministrativeResourceResolver() was removed in AEM 6.5+. The replacement is the Service User pattern: (1) Create a system user in the repository, (2) Grant it the minimum required JCR permissions, (3) Declare the mapping in an OSGi factory config (ServiceUserMapperImpl.amended), (4) Call factory.getServiceResourceResolver(Map.of(ResourceResolverFactory.SUBSERVICE, 'myproject-read')). This follows the principle of least privilege.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-035",
    title: "Cache the returned Resource object in a local variable before the loop and reuse it",
    reference: "AEM-BP-003 warns against calling resourceResolver.getResource() repeatedly inside a loop for the same path. What is the recommended solution?",
    explanation:
      "AEM-BP-003 (Warning): Each resourceResolver.getResource() call traverses the Sling Resource tree and may involve JCR reads. Calling it in a tight loop for the same path or repeatedly for the same set of items wastes CPU and causes unnecessary JCR session interaction. The fix is to resolve resources once, store them in local variables or a Map<String,Resource>, and reuse those references throughout the loop — especially important for loops processing hundreds of items.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-036",
    title: "Use Sling Models for Business Logic",
    reference: "Which AEM Best Practice rule (AEM-BP-004) recommends that business logic should be encapsulated in Sling Models rather than placed directly in HTL scripts or in Java Servlets?",
    explanation:
      "AEM-BP-004 (Major): The correct layering is: Sling Model (business logic and data transformation) → HTL template (pure presentation, no logic). HTL's design-by-contract intentionally makes it hard to write logic — no imperative code, only data access via expressions. Placing business logic in HTL or in Servlets that duplicate component data preparation violates this separation and makes code untestable.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-037",
    title: "Instance fields must be stateless or thread-safe — use method-local variables or AtomicReference/volatile for shared state",
    reference: "An OSGi service annotated with @Component is a singleton shared across all threads. What does AEM-BP-005 require regarding instance field usage?",
    explanation:
      "AEM-BP-005 (Critical): An OSGi @Component is a singleton — one instance serves all concurrent requests and background tasks. Using instance fields to store request-specific data creates race conditions. Fix: always use method-local variables for per-request state, and use AtomicReference/volatile/synchronized only for truly shared state that needs to persist between calls.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-038",
    title: "High-level APIs abstract JCR details, handle AEM business rules (version control, tagging, workflow), and are more stable across upgrades",
    reference: "AEM-BP-006 recommends using AEM's high-level APIs (PageManager, TagManager, AssetManager) instead of interacting directly with the JCR API. Why?",
    explanation:
      "AEM-BP-006 (Major): Raw JCR API calls bypass AEM's higher-level business rules. PageManager.create() applies the correct cq:Page node structure, triggers page creation events, and handles template inheritance. AssetManager.createAsset() runs DAM workflows and sets the correct asset metadata. TagManager.resolve() handles tag namespacing and fallback resolution. Raw node creation via session.getNode().addNode() can create malformed content that violates AEM's assumptions.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-039",
    title: "They read the OSGi configuration annotation interface and initialize the component's state when the bundle activates or config changes",
    reference: "What is the primary purpose of the @Activate and @Modified lifecycle methods in an OSGi @Component class, as required by AEM-BP-007?",
    explanation:
      "AEM-BP-007 (Major): OSGi DS (Declarative Services) manages the @Component lifecycle. @Activate is called when all @Reference dependencies are bound and the component becomes active — typically on bundle installation or server startup. @Modified is called when the component's OSGi configuration changes without requiring a full restart. Both receive the typed @interface configuration object, allowing the component to read and cache configuration values.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-040",
    title: "Externalize paths to OSGi configuration properties, Sling mappings, or Context-Aware Configurations (CAConfig)",
    reference: "AEM-BP-008 forbids hardcoded paths like '/content/mysite/en' directly in Java code. What is the recommended alternative?",
    explanation:
      "AEM-BP-008 (Major): Hardcoded paths like '/content/mysite/en' break across environments (different content trees) and tenant configurations. The recommended alternatives are: (1) OSGi @Component configuration with @AttributeDefinition for service-level paths, deployed as run-mode-specific .cfg.json files. (2) Context-Aware Configurations (CAConfig) for component-level paths that vary by site or locale. (3) Sling URL Mappings for runtime URL transformation.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-041",
    title: "getAdministrativeResourceResolver() is deprecated/removed in AEM 6.5+ and uses super-admin credentials; getServiceResourceResolver() uses a least-privilege service user",
    reference: "What is the critical difference between calling resourceResolverFactory.getAdministrativeResourceResolver() and getServiceResourceResolver() in modern AEM?",
    explanation:
      "AEM-BP-002 and security best practices: getAdministrativeResourceResolver(null) was deprecated in AEM 6.2, blocked in AEM 6.4+, and removed in AEM as a Cloud Service. It gave the caller full super-administrator access to the entire JCR — a severe security risk. getServiceResourceResolver(Map.of(SUBSERVICE, 'name')) uses a system user with only the specific permissions it needs (principle of least privilege).",
    category: "AEM Best Practices",
  },
  {
    id: "cq-042",
    title: "resource.adaptTo(MyModel.class) — Sling's adaptable mechanism binds to the @Model annotated class",
    reference: "Which Java code properly adapts an AEM Resource to a Sling Model in a component's Use-Provider, following AEM-BP-004?",
    explanation:
      "AEM-BP-004: Sling Models are adapters. The @Model(adaptables=Resource.class) annotation registers the class with Sling's AdapterManager. When adaptTo(MyModel.class) is called on a Resource, Sling finds the registered adapter, instantiates the model, and injects all @ValueMapValue, @ChildResource, @OSGiService, and other annotated fields. The method returns null if the adaptation fails.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-043",
    title: "The Servlet is a singleton — concurrent requests from different users share the same instance, so writing to currentPath in one thread corrupts it for another",
    reference: "Why must you never use an instance field 'private String currentPath;' in an OSGi @Component Servlet, per AEM-BP-005?",
    explanation:
      "AEM-BP-005 (Critical): An OSGi component annotated with @Component(service=Servlet.class) is a singleton — exactly one Java object instance is created and shared across all concurrent HTTP requests. If Thread A writes this.currentPath = '/content/page-A' and Thread B writes this.currentPath = '/content/page-B' at the same time, Thread A may read '/content/page-B'. Fix: always use method-local variables so each stack frame has its own copy.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-044",
    title: "CAConfig stores settings in the JCR at configurable paths (e.g., /conf/mysite) and resolves them automatically for the current content resource using Sling's lookup chain",
    reference: "What is Context-Aware Configuration (CAConfig) in AEM and why is it preferred over hardcoded paths for site-specific settings?",
    explanation:
      "AEM-BP-008 and CAConfig: Context-Aware Configuration (org.apache.sling.caconfig) stores site-specific settings in /conf/<site-name> as JCR content nodes. When a component calls ConfigurationBuilder.as(MyConfig.class), Sling walks up the content tree from the current resource looking for a sling:configRef pointing to /conf. This allows the same code to return different API keys, paths, or settings for different sites without code changes.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-045",
    title: "Bundle symbolic name (or bundle:subservice) mapped to a repository system user name in ServiceUserMapperImpl.amended",
    reference: "What is the minimum required information that must be declared in a Sling Service User Mapping configuration for getServiceResourceResolver() to work?",
    explanation:
      "AEM-BP-002: The ServiceUserMapperImpl.amended OSGi factory configuration maps a bundle/subservice pair to a repository system user. A minimal entry looks like: user.mapping=['com.myproject.bundle:mysubservice=myproject-service-user']. This tells Sling: 'when bundle com.myproject.bundle calls getServiceResourceResolver with SUBSERVICE=mysubservice, return a resolver backed by the system user myproject-service-user'. The system user must be created in /home/users/system and granted appropriate JCR ACL permissions.",
    category: "AEM Best Practices",
  },
  {
    id: "cq-046",
    title: "Always — TagManager handles AEM's tag namespacing convention, fallback resolution, and cross-namespace lookups automatically",
    reference: "When should you use TagManager.resolve(String tagId) instead of directly accessing the tag node via resourceResolver.getResource()?",
    explanation:
      "AEM-BP-006: AEM's tag system uses a namespaced identifier format (e.g., 'properties:orientation/landscape') that maps to JCR nodes under /content/cq:tags. TagManager.resolve(tagId) handles the namespace-to-path translation, fallback to default namespace, and tag hierarchy traversal. Using resourceResolver.getResource('/content/cq:tags/' + tagId) fails for tags with namespace separators, localized tag paths, or tags migrated from /etc/tags in older AEM versions.",
    category: "AEM Best Practices",
  },
]

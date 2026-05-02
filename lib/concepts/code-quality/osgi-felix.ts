import type { Concept } from "../types"

export const osgiFelixConcepts: Concept[] = [
  {
    id: "cq-059",
    title: "Wildcard imports resolve at runtime, causing ClassNotFoundException if a package is missing — explicit imports fail fast at install time",
    reference: "OSGI-001 (Severity: Critical) requires all OSGi bundles to have explicit Export-Package and Import-Package declarations. Why is using 'Import-Package: *' dangerous?",
    explanation:
      "OSGI-001 (Critical): OSGi's module layer provides fail-fast dependency validation. With explicit 'Import-Package: com.mypackage;version=\"[1.2,2.0)\"' declarations, OSGi verifies all required packages are available at bundle install time — the bundle won't even activate if a dependency is missing. With wildcard import, packages are resolved lazily at first class load. If a package is missing, the bundle activates successfully but crashes at runtime with ClassNotFoundException exactly when the code path is first executed.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-060",
    title: "provided — the container supplies these JARs at runtime and they must not be bundled inside the OSGi bundle",
    reference: "OSGI-002 (Severity: Blocker) prohibits declaring servlet-api, jsp-api, or other container-provided dependencies with Maven scope 'compile'. What scope must they use?",
    explanation:
      "OSGI-002 (Blocker): Container-provided APIs (servlet-api, jsp-api, osgi.core, org.osgi.compendium) must use Maven scope 'provided'. Using scope 'compile' (the default) includes the JAR inside the OSGi bundle, causing: (1) ClassCastException when the bundled class and the container class are loaded by different class loaders, (2) ClassLoader conflicts and LinkageError, (3) Unnecessary bundle size bloat. The 'provided' scope tells Maven 'this JAR exists in the classpath at compile time but must not be packaged'.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-061",
    title: "The component still activates even if the referenced service is absent; the injected field is null and must be null-checked before use",
    reference: "What does an OSGi @Reference annotation with cardinality = ReferenceCardinality.OPTIONAL do when the referenced service is not available?",
    explanation:
      "OSGi Reference Cardinality: MANDATORY (default) means the component won't activate if the service is absent. OPTIONAL means the component activates even without the service — but the injected field will be null. Code that uses an OPTIONAL reference must perform a null check: 'if (myOptionalService != null) { myOptionalService.doWork(); }'. This is useful for integration points where the feature should degrade gracefully if the optional service is not installed.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-062",
    title: "@Reference — inject the service interface directly into a field; OSGi DS handles bind/unbind lifecycle automatically",
    reference: "OSGI-003 warns against calling OSGi ServiceReference directly in application code. What is the preferred injection pattern in DS (Declarative Services)?",
    explanation:
      "OSGI-003 (Major): OSGi Declarative Services (DS) annotation @Reference provides the cleanest, safest service injection. The runtime manages the full service lifecycle: when the referenced service registers, DS injects the field before the component activates. When the service unregisters, DS either waits for a replacement or deactivates this component. Directly using BundleContext.getService() or ServiceTracker bypasses DS lifecycle management and creates manual reference counting bugs.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-063",
    title: "Declare an @interface configuration annotation, read it in @Activate and @Modified, and cache the value in an instance field",
    reference: "In an OSGi @Component, what is the recommended way to read a configuration value that may change at runtime without restarting the bundle?",
    explanation:
      "OSGi DS Configuration: DS supports dynamic reconfiguration through the @Modified lifecycle method. When an administrator changes a configuration in the Felix Web Console or a run-mode .cfg.json is deployed, OSGi calls @Modified with the new @interface configuration object — without deactivating and reactivating the component. The pattern: cache config values as instance fields in @Activate, update them in @Modified. The service continues running throughout the update with zero downtime.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-064",
    title: "Reverse domain notation matching the project's main Java package: com.mycompany.myproject.core",
    reference: "OSGI-004 (Severity: Major) flags any OSGi bundle that declares Bundle-SymbolicName with dots used inconsistently with the Java package convention. What is the correct BSN format?",
    explanation:
      "OSGI-004 (Major): The OSGi Bundle-SymbolicName (BSN) must be a unique identifier for the bundle. The convention is to use Java reverse-domain package notation matching the bundle's root package: if the Java classes are in package 'com.mycompany.myproject', the BSN should be 'com.mycompany.myproject.core' (or .api, .ui.apps etc.). This ensures global uniqueness and makes it easy to identify the bundle's origin.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-065",
    title: "The component is being shut down — @Deactivate should release all resources (close streams, unregister listeners, stop threads) before the component is destroyed",
    reference: "What happens to an OSGi component's state when the @Deactivate lifecycle method is called?",
    explanation:
      "OSGi Lifecycle @Deactivate: This method is called when: (1) the bundle is stopped, (2) the component is disabled, (3) a MANDATORY @Reference service is no longer available. It is the correct place to release all resources: close ResourceResolvers to release JCR sessions, shutdown ScheduledExecutorService to stop background threads, remove registered event listeners, close database connections. Failure to release resources in @Deactivate leads to memory leaks and JCR session exhaustion.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-066",
    title: "version=\"[3.0,4.0)\" — square bracket means inclusive lower bound, parenthesis means exclusive upper bound",
    reference: "OSGI-005 (Severity: Major) requires all OSGi bundle packages to declare explicit version ranges in their Import-Package statements. What is the correct version range syntax for requiring version 3.x but not 4.x?",
    explanation:
      "OSGI-005: OSGi uses mathematical interval notation for version ranges. Square brackets [] indicate inclusive bounds; parentheses () indicate exclusive bounds. [3.0,4.0) means: lower bound 3.0 inclusive (>= 3.0) AND upper bound 4.0 exclusive (< 4.0). This precisely captures OSGi semantic versioning: major version changes are breaking; minor versions are backward-compatible additions. Declaring a range prevents accidentally binding to a major version upgrade with breaking API changes.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-067",
    title: "DYNAMIC allows the component to continue running while its references change without deactivation; STATIC requires the component to be deactivated if a reference service registers or unregisters",
    reference: "In an OSGi @Component, what is the difference between declaring a @Reference with policy=ReferencePolicy.DYNAMIC versus the default STATIC policy?",
    explanation:
      "OSGi Reference Policy: STATIC (default) — when the bound service registers or unregisters, the OSGi container deactivates the component and reactivates it with the new binding. Component state is reset. DYNAMIC — the container calls the declared bind/unbind methods at runtime without stopping the component. DYNAMIC is more complex (requires thread-safe bind/unbind methods) but avoids service interruptions in high-availability scenarios.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-068",
    title: "In OSGi, each bundle has its own classloader — the context classloader is the caller's classloader, which may not have access to the current bundle's classes, causing ClassNotFoundException",
    reference: "OSGI-006 (Severity: Critical) prohibits using Thread.currentThread().getContextClassLoader() in OSGi components. Why?",
    explanation:
      "OSGI-006 (Critical): OSGi enforces strict classloader isolation — each bundle has its own classloader that knows only about its own classes and explicitly imported packages. When code in Bundle A calls code in Bundle B, the executing thread's context classloader is Bundle A's loader — which cannot see Bundle B's internal classes. The correct approach is to use the bundle's own classloader: SomeClass.class.getClassLoader() or BundleContext.getBundle().adapt(BundleWiring.class).getClassLoader().",
    category: "OSGi / Felix",
  },
  {
    id: "cq-069",
    title: "It marks an @interface as an OSGi configuration annotation, defining the schema for the component's Felix Web Console configuration form",
    reference: "What is the OSGi @ObjectClassDefinition annotation used for in DS component configuration?",
    explanation:
      "OSGi Metatype: @ObjectClassDefinition (OCD) annotates a Java @interface to define the configuration schema. Each method on the @interface becomes a configurable property — @AttributeDefinition provides the label, description, type, and default value that appear in the Felix Web Console as form fields. The @Designate(ocd=MyConfig.class) annotation on the @Component links the component to its OCD. The DS runtime reads the deployed metatype XML and injects the typed config into @Activate and @Modified methods.",
    category: "OSGi / Felix",
  },
  {
    id: "cq-070",
    title: "Implement the Runnable interface and register with the Sling Scheduler via @Component(service=Runnable.class) with @Designate configuration defining the cron expression",
    reference: "In an AEM OSGi component, what is the safe way to schedule a recurring background task that runs every 5 minutes?",
    explanation:
      "OSGi Scheduling in AEM: The Sling Scheduler (org.apache.sling.commons.scheduler.Scheduler) is the OSGi-integrated scheduling mechanism. A clean modern approach: implement Runnable, annotate with @Component(service=Runnable.class), and set properties via @Designate with a config @interface containing the cron expression. Never use raw Thread or ScheduledExecutorService — they don't integrate with OSGi lifecycle, causing threads to survive bundle restarts.",
    category: "OSGi / Felix",
  },
]

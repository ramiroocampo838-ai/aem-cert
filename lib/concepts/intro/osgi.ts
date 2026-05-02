import type { Concept } from "../types"

export const osgiConcepts: Concept[] = [
  {
    id: "intro-041",
    category: "OSGi",
    title: "A modular Java framework that manages bundles, services, and their lifecycle in AEM",
    reference: "What is OSGi in the context of AEM?",
    explanation:
      "OSGi (Open Services Gateway initiative) is AEM's modular application framework. It allows Java bundles (JARs) to be deployed, updated, and removed dynamically without restarting the server. AEM uses Apache Felix as its OSGi container.",
  },
  {
    id: "intro-042",
    category: "OSGi",
    title: "A JAR file with additional OSGi metadata that defines the bundle's dependencies and exports",
    reference: "What is an OSGi bundle in AEM?",
    explanation:
      "An OSGi bundle is a standard JAR file with additional metadata in its MANIFEST.MF file, including Bundle-SymbolicName, Bundle-Version, Import-Package (dependencies), and Export-Package (public APIs). AEM uses bundles to package and deploy Java applications.",
  },
  {
    id: "intro-043",
    category: "OSGi",
    title: "INSTALLED → RESOLVED → STARTING → ACTIVE → STOPPING → UNINSTALLED",
    reference: "What is the correct order of the OSGi bundle lifecycle states?",
    explanation:
      "The OSGi bundle lifecycle: INSTALLED (JAR loaded), RESOLVED (all dependencies satisfied), STARTING (activate() method running), ACTIVE (bundle running, services registered), STOPPING (deactivate() running), UNINSTALLED (bundle removed).",
  },
  {
    id: "intro-044",
    category: "OSGi",
    title: "@Component",
    reference: "What annotation is used to declare an OSGi Declarative Services component?",
    explanation:
      "@Component (from org.osgi.service.component.annotations) is used to declare a Java class as an OSGi Declarative Services (DS) component. When combined with 'service = MyInterface.class', it registers the class as an OSGi service.",
  },
  {
    id: "intro-045",
    category: "OSGi",
    title: "Marks the method called when the OSGi component is activated (started)",
    reference: "What does the @Activate annotation do in an OSGi component?",
    explanation:
      "@Activate marks the initialization method in an OSGi component. This method is called by the OSGi container when the component is activated — typically used to read configuration values and set up resources.",
  },
  {
    id: "intro-046",
    category: "OSGi",
    title: "@Designate",
    reference: "What annotation links an OSGi configuration object to a component?",
    explanation:
      "@Designate links an OSGi component to its configuration interface (annotated with @ObjectClassDefinition). This enables the OSGi Configuration Admin to manage the component's configurations through the Felix console or config files.",
  },
  {
    id: "intro-047",
    category: "OSGi",
    title: "In /apps/<project>/config.<runmode>/ folders, e.g. config.author/ or config.publish/",
    reference: "How are OSGi configurations stored in the AEM JCR for different run modes?",
    explanation:
      "OSGi configurations in AEM are stored as .cfg.json or .xml files under /apps/<project>/osgiconfig/config/ (all run modes) or /config.author/, /config.publish/, /config.dev/ for run-mode-specific configurations. They are applied by the Sling OSGi Installer.",
  },
  {
    id: "intro-048",
    category: "OSGi",
    title: "A Java interface implementation registered in the OSGi service registry for use by other components",
    reference: "What is an OSGi service in AEM?",
    explanation:
      "An OSGi service is a Java object registered in the OSGi service registry under one or more interface types. Other OSGi components can consume services by declaring a @Reference field, which causes the OSGi container to inject the registered implementation.",
  },
  {
    id: "intro-049",
    category: "OSGi",
    title: "@Reference",
    reference: "What annotation is used to inject a reference to another OSGi service in a component?",
    explanation:
      "@Reference (from org.osgi.service.component.annotations) is used in OSGi Declarative Services components to declare a dependency on another OSGi service. The container automatically injects the service at activation time.",
  },
  {
    id: "intro-050",
    category: "OSGi",
    title: "A web-based admin UI for managing OSGi bundles, configurations, and services at runtime",
    reference: "What is the Apache Felix OSGi console used for?",
    explanation:
      "The Apache Felix Web Console (/system/console) is a browser-based tool for runtime management of OSGi bundles, services, and configurations in AEM. Available only on author/dev instances — used for debugging and development, not recommended for production configuration.",
  },
  {
    id: "intro-051",
    category: "OSGi",
    title: "Forces the component to activate immediately when its bundle starts, without waiting for a service consumer",
    reference: "What does 'immediate = true' in @Component do?",
    explanation:
      "When immediate = true in @Component, the OSGi container activates the component as soon as the bundle is started, without waiting for another component to reference it. This is typically used for components that register event listeners, schedulers, or perform startup tasks.",
  },
  {
    id: "intro-052",
    category: "OSGi",
    title: "Defines the configuration interface (schema) for an OSGi component",
    reference: "What is the @ObjectClassDefinition annotation used for?",
    explanation:
      "@ObjectClassDefinition marks an inner annotation @interface in an OSGi component as the configuration schema. Fields annotated with @AttributeDefinition define the configuration properties, their types, default values, and UI labels shown in Felix console.",
  },
]

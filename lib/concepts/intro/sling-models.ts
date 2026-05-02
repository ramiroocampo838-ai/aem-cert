import type { Concept } from "../types"

export const slingModelsConcepts: Concept[] = [
  {
    id: "intro-085",
    category: "Sling Models",
    title: "A POJO class annotated with @Model that provides backend business logic for AEM components",
    reference: "What is a Sling Model in AEM?",
    explanation:
      "A Sling Model is a POJO (Plain Old Java Object) annotated with @Model that AEM instantiates by adapting a JCR Resource or SlingHttpServletRequest. It uses annotations like @ValueMapValue, @ChildResource, and @OSGiService to inject dependencies automatically — and is exposed to HTL via data-sly-use.",
  },
  {
    id: "intro-086",
    category: "Sling Models",
    title: "Injects the value of a JCR property from the current resource's ValueMap into the field",
    reference: "What does the @ValueMapValue annotation do in a Sling Model?",
    explanation:
      "@ValueMapValue reads a property from the current resource's ValueMap (the map of JCR node properties) and injects it into the annotated field. For example, @ValueMapValue private String title; reads the 'title' property from the content node.",
  },
  {
    id: "intro-087",
    category: "Sling Models",
    title: "Injects a child resource (JCR child node) of the current resource",
    reference: "What does the @ChildResource annotation inject in a Sling Model?",
    explanation:
      "@ChildResource in a Sling Model injects a child Resource node. For example, @ChildResource private Resource items; injects the /jcr:content/items child node of the current resource, useful for accessing sub-nodes like multi-field entries or nested structures.",
  },
  {
    id: "intro-088",
    category: "Sling Models",
    title: "Injects the adaptable itself — the Resource or SlingHttpServletRequest the model was adapted from",
    reference: "What does @Self inject in a Sling Model?",
    explanation:
      "@Self in a Sling Model injects the adaptable that was used to create the model. If the model adapts from Resource.class, @Self gives you the Resource. If it adapts from SlingHttpServletRequest.class, you get the Request. Useful for accessing the source object directly.",
  },
  {
    id: "intro-089",
    category: "Sling Models",
    title: "Injects an OSGi service from the service registry into the Sling Model field",
    reference: "What does the @OSGiService annotation do in a Sling Model?",
    explanation:
      "@OSGiService in a Sling Model injects an OSGi service registered in the service registry. This enables Sling Models to use services like QueryBuilder, ResourceResolverFactory, or custom services — bridging the Sling rendering layer with the OSGi service layer.",
  },
  {
    id: "intro-090",
    category: "Sling Models",
    title: "Marks the initialization method called after all injections are complete",
    reference: "What is @PostConstruct used for in a Sling Model?",
    explanation:
      "@PostConstruct marks the initialization method in a Sling Model, called after ALL injections (@ValueMapValue, @ChildResource, @OSGiService, etc.) have been completed. It is the right place to perform initialization logic that depends on multiple injected values.",
  },
  {
    id: "intro-091",
    category: "Sling Models",
    title: "Resource.class is lighter and repository-focused; SlingHttpServletRequest.class includes request awareness (params, sessions)",
    reference: "What is the difference in adaptables between Resource.class and SlingHttpServletRequest.class in Sling Models?",
    explanation:
      "A Sling Model adapted from Resource.class works only with JCR content — lighter and cacheable. A model adapted from SlingHttpServletRequest.class has access to the HTTP context (query parameters, request attributes, session). Best practice: use Resource when possible, use Request only when you genuinely need request-scope data.",
  },
  {
    id: "intro-092",
    category: "Sling Models",
    title: "Provides a default value for a @ValueMapValue field when the JCR property is not present",
    reference: "What is the @Default annotation used for in Sling Models?",
    explanation:
      "@Default provides a fallback value when the JCR property doesn't exist on the resource. Example: @ValueMapValue @Default(values='Untitled Article') private String title; — if no 'title' property is found in the JCR node, 'Untitled Article' is used instead.",
  },
  {
    id: "intro-093",
    category: "Sling Models",
    title: "All business logic should be in Sling Models — none in HTL templates",
    reference: "What is the best practice regarding business logic placement in AEM components?",
    explanation:
      "Best practice: all business logic stays in Sling Models (Java). HTL should be pure presentation — display data from the model, apply conditionals, iterate over collections. No Java scriplets, no complex logic in templates. This ensures testability, maintainability, and the separation of concerns that AEM's architecture promotes.",
  },
  {
    id: "intro-094",
    category: "Sling Models",
    title: "AEM Mocks — using AemContext from io.wcm.testing.mock.aem provides a mock JCR environment",
    reference: "Which annotation enables unit testing of Sling Models by providing a test resource?",
    explanation:
      "AEM Mocks (from io.wcm.testing.mock.aem) provides AemContext, which creates a mock JCR + Sling environment for unit testing Sling Models without a running AEM instance. With AemContext you can define resources, set properties, adapt to Sling Models, and assert on the model's output.",
  },
]

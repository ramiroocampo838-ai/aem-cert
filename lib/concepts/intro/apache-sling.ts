import type { Concept } from "../types"

export const apacheSlingConcepts: Concept[] = [
  {
    id: "intro-029",
    category: "Apache Sling",
    title: "Mapping HTTP request URLs to JCR content resources and rendering them",
    reference: "What is Apache Sling's primary role in AEM?",
    explanation:
      "Apache Sling is AEM's RESTful web framework whose primary role is URL-to-resource resolution — it maps incoming HTTP request URLs to JCR resources and then selects the appropriate script or servlet to render the response based on the resource's sling:resourceType.",
  },
  {
    id: "intro-030",
    category: "Apache Sling",
    title: "sling:resourceType",
    reference: "What property on a JCR node tells Sling which component (script) to use for rendering?",
    explanation:
      "The sling:resourceType property on a JCR node tells Sling which component in /apps (or /libs) should be used to render it. For example, sling:resourceType='mysite/components/text' means Sling will look for rendering scripts at /apps/mysite/components/text/.",
  },
  {
    id: "intro-031",
    category: "Apache Sling",
    title: "An optional URL part between the resource name and extension, e.g. .mobile.html",
    reference: "What is a 'selector' in a Sling URL?",
    explanation:
      "A Sling selector is an optional URL segment between the resource name and extension, separated by dots. For example in /page.mobile.html, 'mobile' is the selector. Selectors allow Sling to use different rendering scripts for different representations of the same resource.",
  },
  {
    id: "intro-032",
    category: "Apache Sling",
    title: "Using the @SlingServletResourceTypes annotation with the resourceType parameter",
    reference: "How does Sling implement servlet registration by resource type?",
    explanation:
      "Sling servlets can be registered by resource type using the @SlingServletResourceTypes annotation. This is the recommended approach — Sling dispatches requests for resources with a matching sling:resourceType to the registered servlet.",
  },
  {
    id: "intro-033",
    category: "Apache Sling",
    title: "Registers a servlet at an absolute path like /bin/myservlet",
    reference: "What does @SlingServletPaths do?",
    explanation:
      "The @SlingServletPaths annotation registers a Sling servlet at absolute URL paths (e.g., '/bin/myservlet'). Note: path-based registration is generally less secure than resource-type-based — @SlingServletResourceTypes is recommended for most use cases.",
  },
  {
    id: "intro-034",
    category: "Apache Sling",
    title: "GET, POST, PUT, DELETE",
    reference: "What HTTP methods does Sling natively support for resource operations?",
    explanation:
      "Apache Sling natively supports the standard HTTP methods GET, POST, PUT, and DELETE for resource operations. GET retrieves content, POST creates or processes, PUT updates, and DELETE removes resources — all mapped to JCR operations.",
  },
  {
    id: "intro-035",
    category: "Apache Sling",
    title: "Resolving URLs to JCR resources and accessing the content tree programmatically",
    reference: "What is the Resource Resolver API used for in Sling?",
    explanation:
      "The Sling ResourceResolver API is used to resolve paths to JCR resources, traverse the content tree, and perform CRUD operations. IMPORTANT: ResourceResolvers must always be closed after use (typically in a try-with-resources or finally block) to prevent resource leaks.",
  },
  {
    id: "intro-036",
    category: "Apache Sling",
    title: "Resource path: /content/mysite/en, selector: mobile, extension: html",
    reference: "What happens in Sling's URL decomposition for the URL '/content/mysite/en.mobile.html'?",
    explanation:
      "Sling decomposes /content/mysite/en.mobile.html as: resource path = /content/mysite/en, selector = 'mobile', extension = 'html'. Sling then looks for a rendering script like mobile.html in the component folder linked by the resource's sling:resourceType.",
  },
  {
    id: "intro-037",
    category: "Apache Sling",
    title: "Converting a Resource object to a different type such as a Sling Model or ValueMap",
    reference: "What is 'resource adaptation' in Sling?",
    explanation:
      "Resource adaptation in Sling means converting a Resource (or SlingHttpServletRequest) to another type using the adaptTo() method — e.g., resource.adaptTo(ValueMap.class) to read properties, or resource.adaptTo(MyModel.class) to get a Sling Model instance.",
  },
  {
    id: "intro-038",
    category: "Apache Sling",
    title: "Rendering JSON or XML representations of content nodes when no specific servlet or script is found",
    reference: "What is the 'Sling Default GET Servlet' used for?",
    explanation:
      "The Sling Default GET Servlet is a built-in fallback that renders JSON or XML representations of JCR nodes when no specific script or servlet is found. For example, requesting /content/mysite/en.json returns the node's properties as JSON.",
  },
  {
    id: "intro-039",
    category: "Apache Sling",
    title: "An additional path appended after the extension, e.g. /page.html/path/to/data",
    reference: "In Sling, what is a 'suffix' in a URL?",
    explanation:
      "A Sling URL suffix is the path segment that appears after the file extension. For example, in /content/search.html/keyword/aem, the suffix is '/keyword/aem'. Suffixes are used to pass additional structured information to servlets without query strings.",
  },
  {
    id: "intro-040",
    category: "Apache Sling",
    title: "By resource type using @SlingServletResourceTypes — more secure than path-based",
    reference: "What is the recommended way to register a Sling servlet?",
    explanation:
      "The recommended way to register a Sling servlet is by resource type using @SlingServletResourceTypes. Path-based registration (@SlingServletPaths) is discouraged because it can allow unauthorized access — any user can invoke a path-registered servlet directly.",
  },
]

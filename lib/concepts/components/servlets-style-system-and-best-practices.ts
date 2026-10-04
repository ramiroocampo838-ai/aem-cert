import type { Concept } from "../types"

export const servletsStyleSystemAndBestPracticesConcepts: Concept[] = [
  {
    id: "comp-094",
    category: "Servlets, Style System & Best Practices",
    title: "SlingSafeMethodsServlet",
    reference: "Which servlet base class should you use for a read-only GET endpoint?",
    explanation:
      "The speech says servlets are OSGi components that extend SlingSafeMethodsServlet for read-only GET, or SlingAllMethodsServlet for GET and POST.",
  },
  {
    id: "comp-095",
    category: "Servlets, Style System & Best Practices",
    title: "Use @Component(service = Servlet.class) together with @SlingServletResourceTypes specifying resourceTypes, methods, and extensions",
    reference: "How does the speech say to register a servlet by resource type?",
    explanation:
      "The speech provides the exact pattern: @Component(service = Servlet.class) and @SlingServletResourceTypes(resourceTypes = \"wknd/components/search\", methods = \"GET\", extensions = \"json\").",
  },
  {
    id: "comp-096",
    category: "Servlets, Style System & Best Practices",
    title: "Bind servlets to resource types, not to paths",
    reference: "What is the recommended binding approach for Sling servlets in AEM?",
    explanation:
      "The speech says the best practice is to bind servlets to resource types and not to paths.",
  },
  {
    id: "comp-097",
    category: "Servlets, Style System & Best Practices",
    title: "Because they cannot be access-controlled through the repository and are harder to secure",
    reference: "Why are path-bound servlets discouraged according to the speech?",
    explanation:
      "The speech says path-bound servlets with @SlingServletPaths are discouraged because they cannot be access-controlled through the repository and are harder to secure.",
  },
  {
    id: "comp-098",
    category: "Servlets, Style System & Best Practices",
    title: "Define CSS classes in a policy that content authors can apply to a component without code changes",
    reference: "What does the Style System let template authors do?",
    explanation:
      "The speech says the Style System lets template authors define CSS classes in a policy that content authors then apply to a component, without any code change.",
  },
  {
    id: "comp-099",
    category: "Servlets, Style System & Best Practices",
    title: "Prefer the Style System and configurable components over copies of nearly identical components",
    reference: "Given a scenario where authors need multiple visual variants of the same component, what does the speech recommend instead of creating many near-duplicate components?",
    explanation:
      "The speech says the Style System is a preferred way to offer visual variants rather than creating additional components, and summarizes that configurable components are preferred over copies of nearly identical ones.",
  },
  {
    id: "comp-100",
    category: "Servlets, Style System & Best Practices",
    title: "Put logic in Sling Models and markup in HTL; use proxy components; never modify /libs; prefer specific injectors, Resource adaptables where possible, delegation, compatible dialogs, resource-type servlets, code-based config, and the Style System",
    reference: "Which best-practice summary matches the speech?",
    explanation:
      "The speech closes with a summary of best practices: keep logic in Sling Models and markup in HTL; use proxy components; never modify /libs; use specific injector annotations; use Resource as adaptable when possible; use model interfaces and delegation; keep dialogs structurally compatible; bind servlets to resource types; do not hard-code configuration; and prefer the Style System and configurable components over near-duplicate copies.",
  },
]

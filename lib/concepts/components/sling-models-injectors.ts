import type { Concept } from "../types"

export const slingModelsInjectorsConcepts: Concept[] = [
  {
    id: "comp-058",
    category: "Sling Models Injectors",
    title: "@ValueMapValue",
    reference: "Which annotation injects a property from the resource's ValueMap?",
    explanation:
      "The speech explicitly says @ValueMapValue injects a property from the resource's ValueMap.",
  },
  {
    id: "comp-059",
    category: "Sling Models Injectors",
    title: "@ChildResource",
    reference: "Which annotation injects a child resource or a list of child resources?",
    explanation:
      "The speech states that @ChildResource injects a child resource or a list of child resources.",
  },
  {
    id: "comp-060",
    category: "Sling Models Injectors",
    title: "@ScriptVariable, and the adaptable must be the request",
    reference: "Given a scenario where a model needs currentPage or properties from HTL bindings, which annotation is used and what adaptable is required?",
    explanation:
      "The speech says @ScriptVariable injects an HTL and scripting binding such as currentPage, resource, or properties, and that it needs the request as adaptable.",
  },
  {
    id: "comp-061",
    category: "Sling Models Injectors",
    title: "@SlingObject",
    reference: "Which annotation injects Sling objects such as the ResourceResolver, Resource, request, or response?",
    explanation:
      "The speech lists @SlingObject as the injector for Sling objects like the ResourceResolver, the Resource, or the request and response.",
  },
  {
    id: "comp-062",
    category: "Sling Models Injectors",
    title: "@OSGiService",
    reference: "Which annotation injects an OSGi service into a Sling Model?",
    explanation:
      "The speech explicitly says @OSGiService injects an OSGi service.",
  },
  {
    id: "comp-063",
    category: "Sling Models Injectors",
    title: "It changes the object from which the value is read",
    reference: "What does the @Via annotation do in Sling Models?",
    explanation:
      "The speech says @Via changes the object from which the value is read, for example @Via(\"resource\") or @Via(type = ResourceSuperType.class).",
  },
  {
    id: "comp-064",
    category: "Sling Models Injectors",
    title: "Because specific annotations are faster, clearer, and fix which injector is used",
    reference: "Why does the speech discourage using the generic @Inject annotation when a specific injector annotation exists?",
    explanation:
      "The speech says @Inject is the generic annotation and is discouraged because the specific annotations are faster and clearer, and they fix which injector is used.",
  },
  {
    id: "comp-065",
    category: "Sling Models Injectors",
    title: "Sling Models creates interface-only models with dynamic proxies, and default interface methods are not executed",
    reference: "In an interface-only model, what is true according to the speech?",
    explanation:
      "The speech says interface-only models use methods for injection, Sling Models creates them with dynamic proxies, and default interface methods are not executed.",
  },
]

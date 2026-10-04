import type { Concept } from "../types"

export const osgiServicesAndConfigurationsConcepts: Concept[] = [
  {
    id: "comp-087",
    category: "OSGi Services & Configurations",
    title: "They provide reusable logic, such as search or integrations with external systems",
    reference: "What role do OSGi services play in AEM according to the speech?",
    explanation:
      "The speech says AEM is built on OSGi and that services provide reusable logic, such as search or integration with external systems.",
  },
  {
    id: "comp-088",
    category: "OSGi Services & Configurations",
    title: "As a class annotated with @Component(service = MyService.class) that implements an interface",
    reference: "How is a basic OSGi service class declared in the speech's example?",
    explanation:
      "The speech says a service is a class annotated with @Component(service = MyService.class), using Declarative Services annotations, and that it implements an interface.",
  },
  {
    id: "comp-089",
    category: "OSGi Services & Configurations",
    title: "@Reference",
    reference: "Which annotation is used to inject one OSGi service into another service?",
    explanation:
      "The speech says services are injected with @Reference. It separately notes that Sling Models get services with @OSGiService.",
  },
  {
    id: "comp-090",
    category: "OSGi Services & Configurations",
    title: "Define @ObjectClassDefinition with @AttributeDefinition entries, add @Designate on the service, and receive the config in the @Activate method",
    reference: "Given a configurable service, which annotations and method does the speech say to use for its OSGi configuration?",
    explanation:
      "The speech says configurable services use OSGi Metatype annotations: define an @ObjectClassDefinition on an annotation type with @AttributeDefinition for each property, then add @Designate(ocd = Config.class) on the service and receive the config in @Activate.",
  },
  {
    id: "comp-091",
    category: "OSGi Services & Configurations",
    title: "As .cfg.json files in config folders of the ui.config module",
    reference: "Where are OSGi configurations stored in an AEM project?",
    explanation:
      "The speech says configurations are stored as .cfg.json files in the repository in a config folder of ui.config.",
  },
  {
    id: "comp-092",
    category: "OSGi Services & Configurations",
    title: "Use Cloud Manager environment variables with $[env:VARIABLE_NAME] and secrets with $[secret:SECRET_NAME], and never commit secrets to Git",
    reference: "How should environment-specific values and secrets be referenced in AEM as a Cloud Service configurations?",
    explanation:
      "The speech says secrets and environment-specific values should not be hard-coded. In AEM as a Cloud Service, use Cloud Manager environment variables referenced as $[env:VARIABLE_NAME] and secrets as $[secret:SECRET_NAME], and never commit secrets to Git.",
  },
  {
    id: "comp-093",
    category: "OSGi Services & Configurations",
    title: "Because AEM as a Cloud Service has an immutable /apps, so deployed environments cannot rely on web console config changes",
    reference: "Why do configurations belong in code rather than being changed through the web console in a deployed AEM as a Cloud Service environment?",
    explanation:
      "The speech says that because AEM as a Cloud Service has an immutable /apps, you cannot change configuration through the web console in a deployed environment. Configurations belong in code.",
  },
]

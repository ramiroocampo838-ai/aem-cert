import type { Concept } from "../types"

export const projectModulesConcepts: Concept[] = [
  {
    id: "mvn-015",
    category: "Project Modules",
    title: "core",
    reference: "Which module is the Java OSGi bundle with Sling Models, servlets, listeners, schedulers, services, and request filters?",
    explanation:
      "Section 3 says core is the Java OSGi bundle and lists OSGi services, listeners, schedulers, Sling Models, servlets, and request filters there.",
  },
  {
    id: "mvn-016",
    category: "Project Modules",
    title: "ui.apps",
    reference: "Which module contains the /apps part of the project, including components, clientlibs, templates code, and Oak index definitions?",
    explanation:
      "The speech says ui.apps contains the /apps part of the project: components, clientlibs, templates code, and Oak index definitions.",
  },
  {
    id: "mvn-017",
    category: "Project Modules",
    title: "ui.config",
    reference: "Given a scenario with OSGi configurations in run-mode folders and Repo Init scripts, which module should hold them?",
    explanation:
      "Section 3 defines ui.config as the module containing OSGi configurations in run-mode specific folders plus the Repo Init scripts.",
  },
  {
    id: "mvn-018",
    category: "Project Modules",
    title: "ui.content",
    reference: "Which module contains mutable content and configuration such as /content, /conf, /content/dam, context-aware configurations, and governed tag taxonomies?",
    explanation:
      "The speech says ui.content contains mutable content and configuration such as /content, /conf, /content/dam, context-aware configurations, and governed tag taxonomies.",
  },
  {
    id: "mvn-019",
    category: "Project Modules",
    title: "It is the container package that embeds everything into one deployable artifact",
    reference: "What is the role of the all module?",
    explanation:
      "Section 3 explicitly says all is the container package that embeds everything into one deployable artifact.",
  },
  {
    id: "mvn-020",
    category: "Project Modules",
    title: "ui.frontend",
    reference: "Which module is optional and contains the webpack-based front-end build that generates clientlibs?",
    explanation:
      "The speech says ui.frontend is optional and contains the webpack-based front-end build that generates the clientlibs.",
  },
  {
    id: "mvn-021",
    category: "Project Modules",
    title: "it.tests contains Java-based integration tests on the AEM server, ui.tests contains Selenium UI tests, and unit tests live in core",
    reference: "Which statement about testing modules is correct?",
    explanation:
      "Section 3 says it.tests contains Java-based integration tests that run on the AEM server, ui.tests contains Selenium-based UI tests, and unit tests live in core.",
  },
]

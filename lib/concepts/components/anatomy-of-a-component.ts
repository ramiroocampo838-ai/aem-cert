import type { Concept } from "../types"

export const anatomyOfAComponentConcepts: Concept[] = [
  {
    id: "comp-008",
    category: "Anatomy of a Component",
    title: "A node of type cq:Component stored under /apps",
    reference: "What is an AEM component in repository terms?",
    explanation:
      "The anatomy section defines a component as a node of type cq:Component stored in the repository under /apps.",
  },
  {
    id: "comp-009",
    category: "Anatomy of a Component",
    title: "They live under /apps/<project>/components and are packaged in the ui.apps module",
    reference: "Where do a project's components typically live, and in which Maven module are they packaged?",
    explanation:
      "The speech says a project's components live in /apps/<project>/components, and in the Maven project they are packaged in the ui.apps module.",
  },
  {
    id: "comp-010",
    category: "Anatomy of a Component",
    title: "The .content.xml file in the component folder",
    reference: "What file typically defines the cq:Component node and properties such as jcr:title, componentGroup, and sling:resourceSuperType?",
    explanation:
      "The anatomy section lists .content.xml as the file that defines the cq:Component node and properties such as jcr:title, componentGroup, and sling:resourceSuperType.",
  },
  {
    id: "comp-011",
    category: "Anatomy of a Component",
    title: "It is named after the component, for example title.html",
    reference: "How is the main HTL script typically named in a component folder?",
    explanation:
      "The speech says a component folder typically contains an HTL script named after the component, for example title.html.",
  },
  {
    id: "comp-012",
    category: "Anatomy of a Component",
    title: "The name shown to authors",
    reference: "What does the jcr:title property represent on a component?",
    explanation:
      "The anatomy section says jcr:title is the name shown to authors.",
  },
  {
    id: "comp-013",
    category: "Anatomy of a Component",
    title: "The component group is hidden",
    reference: "What happens if a componentGroup value starts with a dot?",
    explanation:
      "The speech explicitly says componentGroup controls grouping in the components browser, and a group starting with a dot is hidden.",
  },
  {
    id: "comp-014",
    category: "Anatomy of a Component",
    title: "cq:isContainer",
    reference: "Given a scenario where authors need to place other components inside a component, which property marks it as a container?",
    explanation:
      "The anatomy section identifies cq:isContainer as the property that marks a component as a container for other components.",
  },
]

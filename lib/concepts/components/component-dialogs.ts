import type { Concept } from "../types"

export const componentDialogsConcepts: Concept[] = [
  {
    id: "comp-080",
    category: "Component Dialogs",
    title: "cq:dialog is the edit dialog for page authors, while cq:design_dialog is the design dialog for template authors to set policies",
    reference: "What is the difference between cq:dialog and cq:design_dialog?",
    explanation:
      "The speech says AEM components have two kinds of dialogs: the edit dialog named cq:dialog for page authors to set content, and the design dialog named cq:design_dialog for template authors to set policies.",
  },
  {
    id: "comp-081",
    category: "Component Dialogs",
    title: "They are built with Granite UI, the Coral 3 based Touch UI framework, and stored as nt:unstructured nodes",
    reference: "What UI framework and node type are used for these component dialogs?",
    explanation:
      "The speech states that both dialogs are built with Granite UI, the Coral 3 based Touch UI framework, and both are stored as nodes of type nt:unstructured.",
  },
  {
    id: "comp-082",
    category: "Component Dialogs",
    title: "The JCR property where the field value is saved",
    reference: "In a Granite UI dialog field, what does the name property represent?",
    explanation:
      "The speech says the name property of a field is the JCR property where the value is saved, for example ./jcr:title.",
  },
  {
    id: "comp-083",
    category: "Component Dialogs",
    title: "It means the property is relative to the component's content resource",
    reference: "What does the ./ prefix mean in a dialog field name like ./jcr:title?",
    explanation:
      "The speech explicitly says the path prefix ./ means relative to the component's content resource.",
  },
  {
    id: "comp-084",
    category: "Component Dialogs",
    title: "They are inherited through sling:resourceSuperType and merged with Sling Resource Merger",
    reference: "How are dialogs inherited and customized in proxy components?",
    explanation:
      "The speech says dialogs are inherited through sling:resourceSuperType and that the Sling Resource Merger lets a proxy merge its dialog with the parent's dialog.",
  },
  {
    id: "comp-085",
    category: "Component Dialogs",
    title: "Create a node with the same name and set sling:hideResource to true",
    reference: "Given a scenario where you need to remove an inherited tab from a dialog, what should you do?",
    explanation:
      "The speech says to remove an inherited tab, create a node with the same name and set the property sling:hideResource to true.",
  },
  {
    id: "comp-086",
    category: "Component Dialogs",
    title: "Replicate the parent structure only up to the tab item level and never touch structures below a tab item; hide the whole tab and add your own instead",
    reference: "What customization guideline does Adobe give for dialog inheritance below the tab item level?",
    explanation:
      "The speech says to replicate the parent dialog structure up to the tab item level and never touch structures below a tab item. Instead, hide the whole tab and add your own tab to stay compatible with Core Component updates.",
  },
]

import type { Concept } from "../types"

export const structureModeConcepts: Concept[] = [
  {
    id: "tmpl-040",
    category: "Editing Templates — Structure Mode",
    title: "Structure, Initial Content, and Layout",
    reference: "What are the three modes available in the Template Editor's mode selector?",
    explanation:
      "The Template Editor's toolbar mode selector offers three modes: Structure, Initial Content, and Layout — each used to define a different aspect of the template.",
  },
  {
    id: "tmpl-041",
    category: "Editing Templates — Structure Mode",
    title: "Components defined in the template's structure — they remain fixed as defined in the template",
    reference: "What content cannot be moved or deleted on resulting pages when editing a template in Structure mode?",
    explanation:
      "Components defined in the template structure cannot be moved or deleted on resulting pages. They remain fixed as defined in the template, unless a paragraph system is included.",
  },
  {
    id: "tmpl-042",
    category: "Editing Templates — Structure Mode",
    title: "Include a paragraph system in the template",
    reference: "What must you include in a template if you want page authors to be able to add and remove components on resulting pages?",
    explanation:
      "If you want page authors to have the ability to add and remove components on resulting pages, you need to include a paragraph system in the template, allowing authors to customize the layout within that system.",
  },
  {
    id: "tmpl-043",
    category: "Editing Templates — Structure Mode",
    title: "The Components browser, the Insert Component toolbar option, or dragging an asset from the Assets browser",
    reference: "What are the three ways to add a component to a template in Structure mode?",
    explanation:
      "You can add components using the Components browser in the side panel, the Insert Component option in the toolbar of components already present, or by dragging an asset directly from the Assets browser onto the template.",
  },
  {
    id: "tmpl-044",
    category: "Editing Templates — Structure Mode",
    title: "A border, a marker indicating its type, and a marker indicating whether it has been unlocked",
    reference: "What visual indicators mark a component once it's added to a template in Structure mode?",
    explanation:
      "Each added component is marked with a border to distinguish it, a marker indicating the type of component, and a marker indicating whether the component has been unlocked, allowing content modification.",
  },
  {
    id: "tmpl-045",
    category: "Editing Templates — Structure Mode",
    title: "To define design properties of a component, such as allowed sub-components or minimum/maximum dimensions",
    reference: "What is the purpose of a content (design) policy on a component in the template editor?",
    explanation:
      "Content or design policies define the design properties of a component — for example the components available, or minimum/maximum dimensions — applicable to the template and to pages created with it.",
  },
  {
    id: "tmpl-046",
    category: "Editing Templates — Structure Mode",
    title: "Main and Features",
    reference: "What are the two tabs under the Properties heading when configuring a component's policy?",
    explanation:
      "The Properties heading has two tabs: Main, where the most important settings of the component are defined (e.g. allowed widths, lazy loading for images), and Features, which enables or disables additional features (e.g. cropping proportions, allowed orientations).",
  },
  {
    id: "tmpl-047",
    category: "Editing Templates — Structure Mode",
    title: "Height/width — the reverse of the conventional width/height ordering, kept for legacy compatibility",
    reference: "How are crop ratios defined in AEM, and why does the ordering differ from convention?",
    explanation:
      "In AEM, crop ratios are defined as height/width, differing from the conventional width/height definition, done for legacy compatibility reasons. As long as the Name is defined clearly, page authors won't notice the difference.",
  },
]

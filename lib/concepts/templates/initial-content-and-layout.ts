import type { Concept } from "../types"

export const initialContentAndLayoutConcepts: Concept[] = [
  {
    id: "tmpl-048",
    category: "Editing Templates — Initial Content & Layout",
    title: "A mode used to define content that will appear when a page is first created based on the template",
    reference: "What is Initial Content mode used for?",
    explanation:
      "Initial Content mode is used to define content that will appear when a page is first created based on the template. It can be thought of as edit mode for pages created with that template, and can then be edited by page authors.",
  },
  {
    id: "tmpl-049",
    category: "Editing Templates — Initial Content & Layout",
    title: "Only components that have been unlocked can be selected and edited",
    reference: "In Initial Content mode, which components can be selected and edited even though all Structure-mode content is visible?",
    explanation:
      "Although all content created in Structure mode is visible in Initial Content mode, only components that have been unlocked can be selected and edited there.",
  },
  {
    id: "tmpl-050",
    category: "Editing Templates — Initial Content & Layout",
    title: "In Structure mode — policies are not defined in Initial Content mode",
    reference: "In which mode are policies defined for a template, Structure or Initial Content?",
    explanation:
      "Policies are not defined in Initial Content mode but rather in Structure mode. Initial Content mode is used purely to set up the starting content page authors will see.",
  },
  {
    id: "tmpl-051",
    category: "Editing Templates — Initial Content & Layout",
    title: "A blue border",
    reference: "What visual indicator shows an unlocked, editable component when selected in Initial Content mode?",
    explanation:
      "Unlocked components that are available for editing are marked, and when selected they display a blue border, distinguishing them from locked structural components.",
  },
  {
    id: "tmpl-052",
    category: "Editing Templates — Initial Content & Layout",
    title: "You can add new components to it, using the Drag components here area or the Insert New Component toolbar option",
    reference: "What becomes possible in Initial Content mode if a container component was unlocked in Structure mode?",
    explanation:
      "If a container component has been unlocked in Structure mode, you can add new components to the container in Initial Content mode, using either the Drag components here area or the Insert New Component option from the container's toolbar.",
  },
  {
    id: "tmpl-053",
    category: "Editing Templates — Initial Content & Layout",
    title: "They can be moved or deleted on resulting pages",
    reference: "What can page authors do with components added inside an unlocked container in Initial Content mode?",
    explanation:
      "Components added in Initial Content mode (inside an unlocked container) can be moved on or deleted from resulting pages, unlike components fixed in Structure mode.",
  },
  {
    id: "tmpl-054",
    category: "Editing Templates — Initial Content & Layout",
    title: "No — only pages created after the change will reflect the updated initial content",
    reference: "If you update a template's initial content after pages already exist, are those existing pages affected?",
    explanation:
      "If the initial content of the template is updated after pages are created based on the template, those existing pages will not be affected by changes to the initial content — only pages created afterward pick it up.",
  },
  {
    id: "tmpl-055",
    category: "Editing Templates — Initial Content & Layout",
    title: "Defining the template's layout for different device formats, similar to how layout works in page authoring",
    reference: "What does Layout mode let a template author configure?",
    explanation:
      "In Layout mode, a template author can design the layout of a template for different devices, ensuring a responsive design that adapts to various screen sizes, similar to how page authoring works for responsiveness.",
  },
]

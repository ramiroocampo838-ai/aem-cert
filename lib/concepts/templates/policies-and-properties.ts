import type { Concept } from "../types"

export const policiesAndPropertiesConcepts: Concept[] = [
  {
    id: "tmpl-056",
    category: "Policies & Properties",
    title: "It's mandatory, because it's what determines which components can be added to the container",
    reference: "Why is configuring a policy mandatory for a layout container?",
    explanation:
      "Configuring a policy is mandatory for a layout container as it defines the allowed components that can be placed within it, establishing the range of components available for use within the container.",
  },
  {
    id: "tmpl-057",
    category: "Policies & Properties",
    title: "Customizing its specific attributes and behavior, such as spacing, alignment, or responsiveness",
    reference: "What does the Properties setting configure for a layout container?",
    explanation:
      "The Properties setting for a layout container is used to customize its specific attributes and behavior, which may include options such as spacing, alignment, responsiveness, or other relevant settings.",
  },
  {
    id: "tmpl-058",
    category: "Policies & Properties",
    title: "Policy settings on the left side, properties settings on the right side",
    reference: "How is the configuration window for a layout container divided?",
    explanation:
      "The configuration window for a layout container is divided into two sections: the left side contains the policy settings (which components are allowed), and the right side is dedicated to the properties settings (customizing attributes and behavior).",
  },
  {
    id: "tmpl-059",
    category: "Policies & Properties",
    title: "Allowed Components, Default Components, and Responsive Settings",
    reference: "What are the three tabs under the Properties heading for a layout container?",
    explanation:
      "The Properties heading for a layout container has three tabs: Allowed Components (which components are accessible), Default Components (media-type-to-component mapping), and Responsive Settings (grid column count).",
  },
  {
    id: "tmpl-060",
    category: "Policies & Properties",
    title: "You define which components are available for the layout container, organized into expandable/collapsible groups",
    reference: "What does the Allowed Components tab let you configure?",
    explanation:
      "On the Allowed Components tab you define which components are available for the layout container. Components are organized into groups that can be expanded or collapsed, with search functionality to filter by name.",
  },
  {
    id: "tmpl-061",
    category: "Policies & Properties",
    title: "A minus symbol (-) next to a group name",
    reference: "What indicator shows that only some, not all, items in a component group are selected in Allowed Components?",
    explanation:
      "When a minus symbol (-) appears next to a group in the Allowed Components tab, it indicates that at least one but not all items in that group are selected, providing flexibility to choose specific components within a group.",
  },
  {
    id: "tmpl-062",
    category: "Policies & Properties",
    title: "Which components are automatically associated with specific media types when an author drags an asset from the browser",
    reference: "What does the Default Components tab configure?",
    explanation:
      "The Default Components tab allows you to specify which components are automatically associated with specific media types — when an author drags an asset from the asset browser, AEM uses this configuration to determine which component to create.",
  },
  {
    id: "tmpl-063",
    category: "Policies & Properties",
    title: "Only components with drop zones — specific areas within a component where assets can be dropped",
    reference: "Which components are eligible for configuration on the Default Components tab?",
    explanation:
      "Only components with drop zones are available for configuration in the Default Components tab. Drop zones are specific areas within a component where assets can be dropped or associated.",
  },
  {
    id: "tmpl-064",
    category: "Policies & Properties",
    title: "The number of columns in the grid layout of the container, for different screen sizes/devices",
    reference: "What does the Responsive Settings tab of a layout container let you specify?",
    explanation:
      "In the Responsive Settings tab, you can specify the number of columns in the grid layout of the container, customizing the responsive behavior and layout of the container based on different screen sizes and devices.",
  },
  {
    id: "tmpl-065",
    category: "Policies & Properties",
    title: "An open padlock symbol on the component's border",
    reference: "What visual indicator shows that a component has been unlocked in the template editor?",
    explanation:
      "When a component is unlocked, an open padlock symbol is displayed on the component's border, indicating it is unlocked and editable, and its toolbar adjusts to include editing and configuration options.",
  },
  {
    id: "tmpl-066",
    category: "Policies & Properties",
    title: "They can no longer be moved, cut, or deleted, ensuring the integrity and structure of the layout",
    reference: "What restriction applies to the parent components of an unlocked component?",
    explanation:
      "The parent components of an unlocked component cannot be moved, cut, or deleted, ensuring the integrity and structure of the layout is preserved even as the unlocked child becomes editable.",
  },
  {
    id: "tmpl-067",
    category: "Policies & Properties",
    title: "It becomes a scrollable list rather than growing to accommodate the full list of allowed components",
    reference: "How does a layout container display its list of allowed components, to save space?",
    explanation:
      "To save space, the layout container does not grow to accommodate the list of allowed components. Rather, the container becomes a scrollable list, with configurable components shown with a Policy icon.",
  },
  {
    id: "tmpl-068",
    category: "Policies & Properties",
    title: "They automatically reflect the changes, with a warning displayed as a reminder of the potential impact",
    reference: "What happens to existing pages when you update the structure of a template they were created from?",
    explanation:
      "If you make updates to the structure of a template after creating pages based on it, those pages automatically reflect the changes made to the template's structure — a warning is displayed as a reminder, with confirmation dialogs for potential impact.",
  },
  {
    id: "tmpl-069",
    category: "Policies & Properties",
    title: "Take special caution — unlocking a previously-locked component can cause it to be missing on existing pages, and locking a previously-editable one hides its content",
    reference: "What caution should you take when locking or unlocking components on an already-enabled template?",
    explanation:
      "Special caution is needed when locking or unlocking components on enabled templates, since existing pages may already use the component. Unlocking a locked component typically causes it to be missing on existing pages; locking an editable one hides its content from display.",
  },
]

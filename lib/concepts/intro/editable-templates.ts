import type { Concept } from "../types"

export const editableTemplatesConcepts: Concept[] = [
  {
    id: "intro-065",
    category: "Editable Templates",
    title: "Under /conf/<site>/settings/wcm/templates/",
    reference: "Where are editable templates stored in the AEM JCR?",
    explanation:
      "Editable templates are stored in the JCR under /conf/<sitename>/settings/wcm/templates/. This is different from static (legacy) templates which were stored under /apps. Templates in /conf can be managed through the Template Editor UI without code deployment.",
  },
  {
    id: "intro-066",
    category: "Editable Templates",
    title: "Structure defines locked layout and components; Initial Content defines editable defaults for new pages",
    reference: "What is the difference between 'Structure' and 'Initial Content' modes in the Template Editor?",
    explanation:
      "In the Template Editor: Structure mode allows template admins to place locked components (headers, footers, layout containers) that authors cannot remove or move. Initial Content mode lets template admins pre-populate default content in the editable areas — authors can change or remove this initial content on new pages.",
  },
  {
    id: "intro-067",
    category: "Editable Templates",
    title: "A feature allowing template admins to define CSS style options that authors can apply to components",
    reference: "What is the Style System in AEM editable templates?",
    explanation:
      "The AEM Style System allows template admins to define CSS style classes as 'styles' in component policies. Authors can then select from these predefined styles in Page Editor, applying different visual variations (e.g., 'featured', 'dark background') without needing a developer to change the template.",
  },
  {
    id: "intro-068",
    category: "Editable Templates",
    title: "A policy setting that controls which components authors can add to a layout container",
    reference: "What is 'Allowed Components' configuration in an editable template?",
    explanation:
      "Allowed Components is configured in container component policies (in the Template Editor under Structure mode). It defines the whitelist of components that authors can add to that specific container. Only listed components appear in the author's component picker (+ button) for that container.",
  },
  {
    id: "intro-069",
    category: "Editable Templates",
    title: "They can be created and modified through the UI without code deployment or developer involvement",
    reference: "What advantage do editable templates have over static (classic) templates?",
    explanation:
      "The key advantage of editable templates is that template admins can create and modify templates through the Template Editor UI without writing code, building packages, or deploying to the server. Static templates required developer involvement for every structural change.",
  },
  {
    id: "intro-070",
    category: "Editable Templates",
    title: "A reusable set of component configuration settings that can be applied to multiple components across templates",
    reference: "What is a 'Template Policy' in AEM editable templates?",
    explanation:
      "A Template Policy is a named, reusable configuration object stored in /conf/<site>/settings/wcm/policies/. Policies define allowed components, Style System options, and behavior for a component type. The same policy can be shared across multiple templates, making updates efficient.",
  },
  {
    id: "intro-071",
    category: "Editable Templates",
    title: "A container component that provides a responsive grid for placing components with breakpoint-based layouts",
    reference: "What is the Layout Container component in editable templates?",
    explanation:
      "The Layout Container (or Responsive Grid Container) is the key component in editable templates that provides an author-editable area with responsive grid support (typically 12 columns). Authors can add components, define breakpoints, and set column widths for desktop, tablet, and mobile within a Layout Container.",
  },
  {
    id: "intro-072",
    category: "Editable Templates",
    title: "Under /conf/<site>/settings/wcm/policies/",
    reference: "Where are template policies stored in the JCR?",
    explanation:
      "Template policies are stored under /conf/<site>/settings/wcm/policies/ in the JCR, right alongside the template definitions in /conf/<site>/settings/wcm/templates/. Policies are referenced from template structure nodes and can be shared across multiple templates.",
  },
  {
    id: "intro-073",
    category: "Editable Templates",
    title: "Yes — policies are reusable objects that can be referenced from multiple templates",
    reference: "Can a single editable template policy be used across multiple templates?",
    explanation:
      "Yes, template policies are designed to be reusable. A single policy can be referenced by multiple templates. This is a key advantage — if you want to update the allowed components for a text container across all templates, you update the shared policy once.",
  },
  {
    id: "intro-074",
    category: "Editable Templates",
    title: "The structural changes are reflected on all existing pages created from that template",
    reference: "What happens to pages created from a template when the template's Structure is modified?",
    explanation:
      "Because locked structural components in editable templates are inherited by pages (not copied), changes to locked structure regions in the Template Editor are immediately reflected on all pages that use that template. This is a powerful feature for global layout consistency.",
  },
]

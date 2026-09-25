import type { Concept } from "../types"

export const templateTypesConcepts: Concept[] = [
  {
    id: "tmpl-024",
    category: "Template Types",
    title: "A blueprint for the template, determining its structure, initial content, resource type, and root node policy",
    reference: "What is a template type?",
    explanation:
      "A template type is necessary as it provides a blueprint for the template, determining its structure and initial content. Template types define the resource type of the page component and the policy of the root node, which controls the components allowed in the template editor.",
  },
  {
    id: "tmpl-025",
    category: "Template Types",
    title: "It's advisable to define breakpoints for the responsive grid and configure the mobile emulator within the template type",
    reference: "What responsiveness-related configuration is recommended within a template type?",
    explanation:
      "It is advisable to define breakpoints for the responsive grid and configure the mobile emulator within the template type for optimal responsiveness across the templates built from it.",
  },
  {
    id: "tmpl-026",
    category: "Template Types",
    title: "/libs/settings/wcm/template-types",
    reference: "Where are out-of-the-box template types stored?",
    explanation:
      "Out-of-the-box template types provided by AEM are stored under /libs/settings/wcm/template-types.",
  },
  {
    id: "tmpl-027",
    category: "Template Types",
    title: "/apps/settings/wcm/template-types",
    reference: "Where should site-specific template types be stored?",
    explanation:
      "Site-specific template types should be stored in the comparable location of /apps/settings/wcm/template-types.",
  },
  {
    id: "tmpl-028",
    category: "Template Types",
    title: "In a user-defined folder such as /conf/<my-folder>/settings/wcm/template-types (recommended), or in /conf/global",
    reference: "Where should custom template types be stored?",
    explanation:
      "Custom template types should be stored in user-defined folders (recommended), or alternatively in global, for example /conf/<my-folder-01>/<my-folder-02>/settings/wcm/template-types or /conf/global/settings/wcm/template-types.",
  },
  {
    id: "tmpl-029",
    category: "Template Types",
    title: "Build a regular template, copy it to the template-types node via CRXDE Lite, delete the original, then strip cq:template/cq:templateType properties",
    reference: "What are the steps to create a custom template type from an existing template?",
    explanation:
      "Create a template as you would any Page Template, use CRXDE Lite to copy it from the templates node to the template-types node under the template folder, delete the original from the templates node, then delete all cq:template and cq:templateType properties from all jcr:content nodes in the copy.",
  },
  {
    id: "tmpl-030",
    category: "Template Types",
    title: "Developing your own template type using an example editable template available on GitHub as a basis",
    reference: "Besides manually copying and stripping a template, what other approach can you use to build a template type?",
    explanation:
      "You can also develop your own template type using an example editable template as a basis, available on GitHub, rather than manually building one from scratch through the copy-and-strip process.",
  },
]

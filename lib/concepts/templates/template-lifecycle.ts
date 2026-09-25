import type { Concept } from "../types"

export const templateLifecycleConcepts: Concept[] = [
  {
    id: "tmpl-031",
    category: "Template Lifecycle & Properties",
    title: "Create, configure, enable, allow, and publish",
    reference: "What is the general lifecycle a template goes through before it's usable to create pages?",
    explanation:
      "A template goes through a clear lifecycle: create it, configure its structure/content/policies, enable it so it's selectable, allow it for specific content branches, and publish it so it's available on the publish environment.",
  },
  {
    id: "tmpl-032",
    category: "Template Lifecycle & Properties",
    title: "It makes the template accessible for selection in the Create Page wizard",
    reference: "What does enabling a template do?",
    explanation:
      "Enabling a template makes it accessible for use during the page creation process — this step ensures the template appears as an option when selecting a template for a new page.",
  },
  {
    id: "tmpl-033",
    category: "Template Lifecycle & Properties",
    title: "It specifies the content branches or areas where the template can be used, via Page Properties > Advanced > Template Settings",
    reference: "What does allowing a template do, and where do you configure it?",
    explanation:
      "Allowing a template specifies the content branches or areas where the template can be utilized, configured in the root page's Page Properties dialog, Advanced tab, Template Settings section — you can add explicit paths or patterns, e.g. /conf/<folder>/settings/wcm/templates/.*",
  },
  {
    id: "tmpl-034",
    category: "Template Lifecycle & Properties",
    title: "The tree is ascended until a value or list is found, so templates allowed at higher levels of the hierarchy are also considered",
    reference: "What happens if the Allowed Templates list is left empty on a page branch?",
    explanation:
      "If the Allowed Templates list is left empty, the tree will be ascended until a value or list is found, meaning templates allowed at higher levels of the hierarchy will also be considered for that branch.",
  },
  {
    id: "tmpl-035",
    category: "Template Lifecycle & Properties",
    title: "It makes the fully configured template, and optionally its content policies, available on the publish environment",
    reference: "What does publishing a template accomplish?",
    explanation:
      "Publishing a template is necessary to make the fully configured template available on the publish environment when a page is rendered — you can also select content policies to publish alongside it.",
  },
  {
    id: "tmpl-036",
    category: "Template Lifecycle & Properties",
    title: "Image (thumbnail), Title, and Description",
    reference: "What are the three main properties a template can have?",
    explanation:
      "A template can have an Image property (thumbnail shown in the Templates Console and Create Page wizard), a Title (used to identify the template), and an optional Description providing more information about the template's use.",
  },
  {
    id: "tmpl-037",
    category: "Template Lifecycle & Properties",
    title: "Draft, enabled, or disabled",
    reference: "What are the possible statuses shown for a template in the Templates Console?",
    explanation:
      "The status of a template — draft, enabled, or disabled — is indicated in the console, giving template authors a quick view of whether a template is ready to be used.",
  },
  {
    id: "tmpl-038",
    category: "Template Lifecycle & Properties",
    title: "Uploading a custom image, or generating one automatically from the template's content",
    reference: "What are the two ways to set a template's thumbnail image?",
    explanation:
      "You can define a template's thumbnail image either by uploading a custom image file, or by having it generated automatically from the template's content using the Generate Preview option.",
  },
  {
    id: "tmpl-039",
    category: "Template Lifecycle & Properties",
    title: "A warning is displayed, reminding the author that changes may impact pages already referencing the template",
    reference: "What happens when you modify an already-enabled template?",
    explanation:
      "When an enabled template is modified further, a warning message is displayed as a reminder that any changes made to the template may impact the pages already referencing it.",
  },
]

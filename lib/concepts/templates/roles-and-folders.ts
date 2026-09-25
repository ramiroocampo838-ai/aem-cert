import type { Concept } from "../types"

export const rolesAndFoldersConcepts: Concept[] = [
  {
    id: "tmpl-015",
    category: "Roles & Template Folders",
    title: "Admin, Developer, and Template Author",
    reference: "What three roles collaborate to create a new template using the Templates Console and Template Editor?",
    explanation:
      "Building a template is a three-role collaboration: Admin, Developer, and Template Author. By working together, they create a template that meets the needs of the organization.",
  },
  {
    id: "tmpl-016",
    category: "Roles & Template Folders",
    title: "Creating a new folder for templates, which requires admin rights (though a developer can often also do it)",
    reference: "What is the Admin role responsible for when creating a new template?",
    explanation:
      "The Admin is responsible for creating a new folder for templates. This requires admin rights, but it can often also be done by a developer.",
  },
  {
    id: "tmpl-017",
    category: "Roles & Template Folders",
    title: "The technical/internal details — creating template files and configuring template settings",
    reference: "What is the Developer role responsible for when creating a new template?",
    explanation:
      "The Developer is responsible for the technical/internal details of the template, including creating the template files and configuring template settings, and needs experience with the development environment.",
  },
  {
    id: "tmpl-018",
    category: "Roles & Template Folders",
    title: "Configuring the use of components and other high-level details of the template",
    reference: "What is the Template Author role responsible for when creating a new template?",
    explanation:
      "The Template Author is responsible for configuring the use of components and other high-level details of the template, requiring some technical knowledge such as using patterns when defining paths, gathered from the developer.",
  },
  {
    id: "tmpl-019",
    category: "Roles & Template Folders",
    title: "An administrator must configure a template folder in the Configuration Browser and apply proper permissions first",
    reference: "What must happen before a template author can create a template in a given folder?",
    explanation:
      "An administrator must configure a template folder in the Configurations Browser and apply proper permissions before a template author can create a template in that folder.",
  },
  {
    id: "tmpl-020",
    category: "Roles & Template Folders",
    title: "The template-authors group",
    reference: "What is the default group that must be assigned so authors can create templates in a new folder?",
    explanation:
      "In addition to standard authoring permissions, you need to assign group(s) and define required ACLs for authors to create templates in a new folder — the template-authors group is the default group that needs to be assigned.",
  },
  {
    id: "tmpl-021",
    category: "Roles & Template Folders",
    title: "The default folder for templates; it also acts as a fallback if no policies or template types are found in the current folder",
    reference: "What is the global folder in the Templates console?",
    explanation:
      "The global folder is the default folder for templates in a standard AEM instance, holding default templates and acting as a fallback if no policies and/or template types are found in the current folder.",
  },
  {
    id: "tmpl-022",
    category: "Roles & Template Folders",
    title: "Create a new folder rather than use the global folder, since folders must be created by a user with admin rights",
    reference: "What is the recommended best practice for organizing customized templates?",
    explanation:
      "It is best practice to create a new folder to hold your customized templates and not use the global folder. Folders must be created by a user with admin rights.",
  },
  {
    id: "tmpl-023",
    category: "Roles & Template Folders",
    title: "The current folder, then its parent(s), then /conf/global, then /apps, then /libs",
    reference: "What is the order of precedence for template types and policies across folders?",
    explanation:
      "Template types and policies are inherited across all folders in this order of precedence: the current folder, parent(s) of the current folder, /conf/global, /apps, /libs. If configurations overlap, only the instance closest to the current folder is presented to the user.",
  },
]

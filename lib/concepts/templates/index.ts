import type { ConceptCategory } from "../types"
import { componentsOverviewConcepts } from "./components-overview"
import { editableTemplatesFundamentalsConcepts } from "./editable-templates-fundamentals"
import { rolesAndFoldersConcepts } from "./roles-and-folders"
import { templateTypesConcepts } from "./template-types"
import { templateLifecycleConcepts } from "./template-lifecycle"
import { structureModeConcepts } from "./structure-mode"
import { initialContentAndLayoutConcepts } from "./initial-content-and-layout"
import { policiesAndPropertiesConcepts } from "./policies-and-properties"
import { experienceFragmentsConcepts } from "./experience-fragments"
import { clientlibsFundamentalsConcepts } from "./clientlibs-fundamentals"
import { clientlibsAdvancedConcepts } from "./clientlibs-advanced"

export const templatesCategories: ConceptCategory[] = [
  {
    name: "Components & Core Components",
    concepts: componentsOverviewConcepts,
    videoDescriptions: [
      "Introduces AEM components as reusable website building blocks, explains the role of Core Components, and points to WKND and AEM tools for exploring component definitions.",
    ],
  },
  {
    name: "Editable Templates Fundamentals",
    concepts: editableTemplatesFundamentalsConcepts,
    videoDescriptions: [
      "Explains editable templates, their structure and author-editable regions, template policies and responsive settings, and where to manage templates in AEM.",
    ],
  },
  {
    name: "Roles & Template Folders",
    concepts: rolesAndFoldersConcepts,
    videoDescriptions: [
      "Compares Admin, Developer, and Template Author responsibilities, including who can create template folders and who manages their technical versus authoring details.",
      "Covers template-author permissions, the role of /conf/global, why site-specific folders are preferred, and the order AEM uses to resolve template configuration.",
    ],
  },
  {
    name: "Template Types",
    concepts: templateTypesConcepts,
    videoDescriptions: [
      "Explains template types as blueprints for editable templates, where they are stored, how to configure responsive breakpoints, and ways to create a custom type.",
    ],
  },
  {
    name: "Template Lifecycle & Properties",
    concepts: templateLifecycleConcepts,
    videoDescriptions: [
      "Walks through creating, configuring, enabling, allowing, and publishing a template, including how allowed paths determine where authors can use it.",
      "Covers template title, description, thumbnail, status changes, thumbnail generation, and warnings when edits may affect pages that use the template.",
    ],
  },
  {
    name: "Editing Templates — Structure Mode",
    concepts: structureModeConcepts,
    videoDescriptions: [
      "Shows how Structure mode defines locked template components and editable areas, how authors add components, and how policies and layout settings affect the template.",
    ],
  },
  {
    name: "Editing Templates — Initial Content & Layout",
    concepts: initialContentAndLayoutConcepts,
    videoDescriptions: [
      "Explains how Initial Content sets the starting content for new pages, which components can be edited or added, how later template changes affect pages, and how to configure responsive layouts.",
    ],
  },
  {
    name: "Policies & Properties",
    concepts: policiesAndPropertiesConcepts,
    videoDescriptions: [
      "Introduces component policies and their settings for containers, including allowed and default components, responsive behavior, and asset-to-component mapping.",
      "Covers responsive grid columns, locked and unlocked components, large allowed-component lists, policy updates, and the effects of changing component lock states.",
    ],
  },
  {
    name: "Experience Fragments",
    concepts: experienceFragmentsConcepts,
    videoDescriptions: [
      "Shows how to create an Experience Fragment from grouped components and add a fragment reference to a page to reuse its content and properties.",
      "Explains reuse across websites, apps, and external channels, adapting fragment variations, synchronization with Live Copy, and social media integration.",
    ],
  },
  {
    name: "Client Libraries — Fundamentals",
    concepts: clientlibsFundamentalsConcepts,
    videoDescriptions: [
      "Introduces AEM client libraries for delivering CSS and JavaScript, their folder structure and properties, and how categories organize front-end resources.",
      "Explains js.txt and css.txt aggregation, the ui.frontend build integration, and exposing client libraries through /etc.clientlibs with a proxy.",
    ],
  },
  {
    name: "Client Libraries — Advanced Features",
    concepts: clientlibsAdvancedConcepts,
    videoDescriptions: [
      "Covers including client libraries from HTL, declaring dependencies, and how embedded libraries contribute their generated CSS and JavaScript to a page.",
      "Explains embedding libraries across repository paths, merged output and debug mode, available minifiers, and the AEM client-library diagnostics page.",
    ],
  },
]

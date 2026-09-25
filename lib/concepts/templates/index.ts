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
  { name: "Components & Core Components", concepts: componentsOverviewConcepts },
  { name: "Editable Templates Fundamentals", concepts: editableTemplatesFundamentalsConcepts },
  { name: "Roles & Template Folders", concepts: rolesAndFoldersConcepts },
  { name: "Template Types", concepts: templateTypesConcepts },
  { name: "Template Lifecycle & Properties", concepts: templateLifecycleConcepts },
  { name: "Editing Templates — Structure Mode", concepts: structureModeConcepts },
  { name: "Editing Templates — Initial Content & Layout", concepts: initialContentAndLayoutConcepts },
  { name: "Policies & Properties", concepts: policiesAndPropertiesConcepts },
  { name: "Experience Fragments", concepts: experienceFragmentsConcepts },
  { name: "Client Libraries — Fundamentals", concepts: clientlibsFundamentalsConcepts },
  { name: "Client Libraries — Advanced Features", concepts: clientlibsAdvancedConcepts },
]

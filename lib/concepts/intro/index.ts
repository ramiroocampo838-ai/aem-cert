import type { ConceptCategory } from "../types"
import { aemOverviewConcepts } from "./aem-overview"
import { apacheSlingConcepts } from "./apache-sling"
import { jcrRepositoryConcepts } from "./jcr-repository"
import { osgiConcepts } from "./osgi"
import { slingModelsConcepts } from "./sling-models"
import { componentsConcepts } from "./components"
import { editableTemplatesConcepts } from "./editable-templates"
import { contentFragmentsConcepts } from "./content-fragments"
import { aemCloudServiceConcepts } from "./aem-cloud-service"
import { certificationConcepts } from "./certification"

export const introCategories: ConceptCategory[] = [
  { name: "AEM Overview", concepts: aemOverviewConcepts },
  { name: "Apache Sling", concepts: apacheSlingConcepts },
  { name: "JCR Repository", concepts: jcrRepositoryConcepts },
  { name: "OSGi", concepts: osgiConcepts },
  { name: "Sling Models", concepts: slingModelsConcepts },
  { name: "Components", concepts: componentsConcepts },
  { name: "Editable Templates", concepts: editableTemplatesConcepts },
  { name: "Content Fragments", concepts: contentFragmentsConcepts },
  { name: "AEM Cloud Service", concepts: aemCloudServiceConcepts },
  { name: "Certification", concepts: certificationConcepts },
]

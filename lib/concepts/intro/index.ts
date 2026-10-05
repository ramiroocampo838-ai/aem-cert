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
  {
    name: "AEM Overview",
    concepts: aemOverviewConcepts,
    videoDescriptions: [
      "Introduces Adobe Experience Manager as a content platform, including its place in Adobe Experience Cloud, digital asset management, omnichannel delivery, and managing multiple sites.",
    ],
  },
  {
    name: "Apache Sling",
    concepts: apacheSlingConcepts,
    videoDescriptions: [
      "Explains how Sling maps URLs to JCR resources and selects rendering scripts, with examples of selectors, suffixes, resource types, servlets, and resource resolution.",
    ],
  },
  {
    name: "JCR Repository",
    concepts: jcrRepositoryConcepts,
    videoDescriptions: [
      "Covers JCR and Oak, where AEM stores pages, code, configurations, assets, and users, plus page nodes, node types, and JCR-SQL2 queries.",
    ],
  },
  {
    name: "OSGi",
    concepts: osgiConcepts,
    videoDescriptions: [
      "Introduces OSGi bundles, services, component lifecycles, annotations, and run-mode configuration, and shows the Felix console for runtime management.",
    ],
  },
  {
    name: "Sling Models",
    concepts: slingModelsConcepts,
    videoDescriptions: [
      "Shows how Sling Models adapt resources and requests, inject JCR values and services, connect backend logic to HTL, and support unit testing.",
    ],
  },
  {
    name: "Components",
    concepts: componentsConcepts,
    videoDescriptions: [
      "Covers component definitions and author dialogs, HTL rendering, client libraries, component inheritance, Core Components, and proxy components.",
    ],
  },
  {
    name: "Editable Templates",
    concepts: editableTemplatesConcepts,
    videoDescriptions: [
      "Explains editable template structure and initial content, template policies, allowed components, style options, and responsive layout containers.",
    ],
  },
  {
    name: "Content Fragments",
    concepts: contentFragmentsConcepts,
    videoDescriptions: [
      "Compares structured Content Fragments with visual Experience Fragments, covering models, references, variations, GraphQL delivery, and reusable building blocks.",
    ],
  },
  {
    name: "AEM Cloud Service",
    concepts: aemCloudServiceConcepts,
    videoDescriptions: [
      "Explains AEM as a Cloud Service, including immutable code, Rapid Development Environments, content distribution, environment variables, and asset processing.",
    ],
  },
  {
    name: "Certification",
    concepts: certificationConcepts,
    videoDescriptions: [
      "Summarizes the AEM Sites Developer Expert exam format and domain weights, with study recommendations and Adobe's WKND tutorial as a learning resource.",
    ],
  },
]

import type { ConceptCategory } from "../types"
import { introductionConcepts } from "./introduction"
import { anatomyOfAComponentConcepts } from "./anatomy-of-a-component"
import { proxyComponentPatternConcepts } from "./proxy-component-pattern"
import { resourceTypeResolutionAndVersioningConcepts } from "./resource-type-resolution-and-versioning"
import { htlFundamentalsConcepts } from "./htl-fundamentals"
import { htlBlockStatementsConcepts } from "./htl-block-statements"
import { htlTemplatesAndUseApiConcepts } from "./htl-templates-and-use-api"
import { slingModelsFundamentalsConcepts } from "./sling-models-fundamentals"
import { slingModelsInjectorsConcepts } from "./sling-models-injectors"
import { delegationAndModelInterfacesConcepts } from "./delegation-and-model-interfaces"
import { exportingModelsAsJsonConcepts } from "./exporting-models-as-json"
import { componentDialogsConcepts } from "./component-dialogs"
import { osgiServicesAndConfigurationsConcepts } from "./osgi-services-and-configurations"
import { servletsStyleSystemAndBestPracticesConcepts } from "./servlets-style-system-and-best-practices"

export const componentsCategories: ConceptCategory[] = [
  { name: "Introduction", concepts: introductionConcepts },
  { name: "Anatomy of a Component", concepts: anatomyOfAComponentConcepts },
  { name: "Proxy Component Pattern", concepts: proxyComponentPatternConcepts },
  { name: "Resource Type Resolution & Versioning", concepts: resourceTypeResolutionAndVersioningConcepts },
  { name: "HTL Fundamentals", concepts: htlFundamentalsConcepts },
  { name: "HTL Block Statements", concepts: htlBlockStatementsConcepts },
  { name: "HTL Templates & Use-API", concepts: htlTemplatesAndUseApiConcepts },
  { name: "Sling Models Fundamentals", concepts: slingModelsFundamentalsConcepts },
  { name: "Sling Models Injectors", concepts: slingModelsInjectorsConcepts },
  { name: "Delegation & Model Interfaces", concepts: delegationAndModelInterfacesConcepts },
  { name: "Exporting Models as JSON", concepts: exportingModelsAsJsonConcepts },
  { name: "Component Dialogs", concepts: componentDialogsConcepts },
  { name: "OSGi Services & Configurations", concepts: osgiServicesAndConfigurationsConcepts },
  { name: "Servlets, Style System & Best Practices", concepts: servletsStyleSystemAndBestPracticesConcepts },
]

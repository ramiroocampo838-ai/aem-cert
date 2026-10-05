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
  {
    name: "Introduction",
    concepts: introductionConcepts,
    videoDescriptions: [
      "Introduces the component-development topics in the AEM Sites Developer exam, from component placement and structure to proxy patterns, HTL, models, and services.",
    ],
  },
  {
    name: "Anatomy of a Component",
    concepts: anatomyOfAComponentConcepts,
    videoDescriptions: [
      "Explains the AEM component node and folder under /apps, its .content.xml metadata, rendering script, author-facing title, component group, and container setting.",
    ],
  },
  {
    name: "Proxy Component Pattern",
    concepts: proxyComponentPatternConcepts,
    videoDescriptions: [
      "Shows how site-specific proxy components extend shared Core Components through sling:resourceSuperType, including minimal proxy definitions and why /libs should not be modified.",
    ],
  },
  {
    name: "Resource Type Resolution & Versioning",
    concepts: resourceTypeResolutionAndVersioningConcepts,
    videoDescriptions: [
      "Traces Sling resource-type and supertype lookup across /apps and /libs, and explains component versioning, compatibility changes, and why content should not reference versioned components directly.",
    ],
  },
  {
    name: "HTL Fundamentals",
    concepts: htlFundamentalsConcepts,
    videoDescriptions: [
      "Introduces HTL expressions, context-aware XSS protection, output contexts, default values, strict comparisons, global objects, and explicit context handling.",
    ],
  },
  {
    name: "HTL Block Statements",
    concepts: htlBlockStatementsConcepts,
    videoDescriptions: [
      "Explains HTL data-sly attributes for helper objects, conditions, loops, and repeated elements, including loop metadata, variable scope, and evaluation behavior.",
    ],
  },
  {
    name: "HTL Templates & Use-API",
    concepts: htlTemplatesAndUseApiConcepts,
    videoDescriptions: [
      "Covers reusable HTL templates and calls, the difference between including scripts and rendering resources, supported resource options, and using Sling Models through the Use-API.",
    ],
  },
  {
    name: "Sling Models Fundamentals",
    concepts: slingModelsFundamentalsConcepts,
    videoDescriptions: [
      "Introduces Sling Models as annotation-driven Java POJOs, choosing Resource or request adaptables, registering models, and handling adaptation failures with adaptTo or ModelFactory.",
    ],
  },
  {
    name: "Sling Models Injectors",
    concepts: slingModelsInjectorsConcepts,
    videoDescriptions: [
      "Reviews common Sling Model injectors for properties, child resources, script variables, Sling objects, and OSGi services, including adaptable requirements and why specific annotations are preferred.",
    ],
  },
  {
    name: "Delegation & Model Interfaces",
    concepts: delegationAndModelInterfacesConcepts,
    videoDescriptions: [
      "Explains how proxy components extend Core Component model interfaces using delegation, @Model registration, resource-type binding, and ResourceSuperType adaptation.",
    ],
  },
  {
    name: "Exporting Models as JSON",
    concepts: exportingModelsAsJsonConcepts,
    videoDescriptions: [
      "Shows how to expose Sling Models as JSON with the Jackson exporter and .model.json, configure exported properties, and support page JSON for SPA Editor and headless consumers.",
    ],
  },
  {
    name: "Component Dialogs",
    concepts: componentDialogsConcepts,
    videoDescriptions: [
      "Compares author and design dialogs, explains Granite UI field storage and relative property names, and covers inherited dialogs and safe Sling Resource Merger overrides.",
    ],
  },
  {
    name: "OSGi Services & Configurations",
    concepts: osgiServicesAndConfigurationsConcepts,
    videoDescriptions: [
      "Covers reusable OSGi services and dependency injection, typed configuration annotations, ui.config files, and secure environment-variable and secret handling in AEM Cloud Service.",
    ],
  },
  {
    name: "Servlets, Style System & Best Practices",
    concepts: servletsStyleSystemAndBestPracticesConcepts,
    videoDescriptions: [
      "Reviews safe resource-type servlet registration, why path-bound servlets are discouraged, author-selectable Style System policies, and maintainable AEM component practices.",
    ],
  },
]

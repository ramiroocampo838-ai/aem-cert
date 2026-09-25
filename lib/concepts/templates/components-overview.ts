import type { Concept } from "../types"

export const componentsOverviewConcepts: Concept[] = [
  {
    id: "tmpl-001",
    category: "Components & Core Components",
    title: "Modular units that realize specific functionality to present content on a website",
    reference: "What are components in AEM?",
    explanation:
      "Components in AEM are modular units that realize specific functionality to present your content on your website. They are reusable, self-contained within one folder of the repository, and can be developed to extend default functionality.",
  },
  {
    id: "tmpl-002",
    category: "Components & Core Components",
    title: "Reusable, self-contained in one repository folder, no hidden config files, can nest other components, built with HTL",
    reference: "What are the defining characteristics of an AEM component?",
    explanation:
      "Components are reusable, developed as self-contained units within one folder of the repository, have no hidden configuration files, can contain other components, have a standardized UI, use dialogs built from Granite UI sub-elements, and are developed using HTL.",
  },
  {
    id: "tmpl-003",
    category: "Components & Core Components",
    title: "Develop locally, deploy to test, deploy to live authoring, deploy to live publish",
    reference: "What is the typical deployment path for a newly developed AEM component?",
    explanation:
      "Because components are modular, you develop a new component locally, deploy it to a test environment, then to your live authoring environment where authors configure content, and finally to your publish environment(s) where it renders content for visitors.",
  },
  {
    id: "tmpl-004",
    category: "Components & Core Components",
    title: "Standardized Web Content Management components for AEM, aimed at accelerating development and reducing maintenance",
    reference: "What are the AEM Core Components?",
    explanation:
      "The Core Components are standardized WCM components for AEM, integrated into AEMaaCS, aimed at accelerating development and reducing maintenance efforts. They include commonly used elements like carousels, menus, and content lists, and offer flexibility to cater to specific requirements.",
  },
  {
    id: "tmpl-005",
    category: "Components & Core Components",
    title: "The WKND Tutorial",
    reference: "What resource does Adobe provide to guide developers on implementing and using the Core Components?",
    explanation:
      "Adobe provides the WKND Tutorial, offering practical guidance on implementing and utilizing the Core Components within AEM, emphasizing best practices and techniques.",
  },
  {
    id: "tmpl-006",
    category: "Components & Core Components",
    title: "The AEM Console, a cq:dialog referencing components.dialog, or a CRXDE Lite XPath query",
    reference: "What are the three ways to view the components available in an AEMaaCS instance?",
    explanation:
      "You can view available components using the AEM Console's Components page, by adding a cq:dialog with componentPath=\"/libs/wcm/core/components/dialog/components.dialog\", or by running the XPath query //element(*, cq:Component) in CRXDE Lite's Query tab.",
  },
  {
    id: "tmpl-007",
    category: "Components & Core Components",
    title: "//element(*, cq:Component)",
    reference: "What XPath query lists all components when run in CRXDE Lite's Query tab?",
    explanation:
      "In CRXDE Lite, selecting Tools > Query, choosing XPath as the type, and entering //element(*, cq:Component), then clicking Execute, lists every component in the repository.",
  },
]

/**
 * AEM Templates & Client Libraries Presentation - Slide Content
 * 14 slides covering Components, Editable Templates, Experience Fragments,
 * and Client Libraries for AEM as a Cloud Service (AD0-E123 objectives 2.1, 2.2, 2.4).
 *
 * Source: public/speeches/templates.txt
 * Theme: amber/orange — from-amber-900 via-orange-900 to-yellow-900
 */

// ============================================================================
// INTERFACES (same shape as authentication-slides / env-setup-slides pattern)
// ============================================================================

export interface CodeExample {
  language: "java" | "javascript" | "typescript" | "xml" | "html" | "htl" | "bash"
  code: string
  title?: string
  highlightLines?: number[]
}

export interface ExpandableContent {
  title: string
  content: string | string[] | { text: string; url?: string }[]
  type?: "list" | "text" | "table"
}

export interface DiagramData {
  type: "architecture" | "flow" | "tree" | "comparison" | "ascii"
  description: string
  elements?: {
    id: string
    label: string
    tooltip?: string
  }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface TemplatesSlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: {
    text: string
    content: string
  }[]
  backgroundColor?: string
  estimatedTime: number // in minutes
}

const THEME = "from-amber-900 via-orange-900 to-yellow-900"

// ============================================================================
// SLIDE CONTENT — 14 SLIDES
// ============================================================================

export const templatesSlides: TemplatesSlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — Introduction
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "AEM Templates & Client Libraries",
    subtitle: "How Pages Actually Get Built",
    content: [
      "We've covered the platform, the cloud tooling, and how to authenticate into it. Now it's time to talk about how pages actually get built: templates, the components that go inside them, and the client libraries that deliver their CSS and JavaScript.",
      "This maps to Section 2 of the exam: AEM Development — 2.1 core-based components, 2.2 HTL/models/services, and 2.4 content and experience fragments.",
      "An AEM template is a pre-defined structure and initial content used to quickly create a new site — it saves you from starting from scratch and keeps every page consistent with your branding.",
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — Components and Core Components
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Components and Core Components",
    subtitle: "The Modular Building Blocks",
    content: [
      "Components are the modular units that render your content. They're self-contained, live in one folder of the repository, have no hidden configuration files, can be nested inside each other, and are built with HTL.",
      "Adobe ships a set of standardized components for this — the Core Components — covering common building blocks: carousels, menus, content lists, and more. They're designed to be extended, not rebuilt from scratch.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Component deployment path",
        elements: [
          { id: "local", label: "Develop locally", tooltip: "Build and test on your own machine" },
          { id: "test", label: "Deploy to test", tooltip: "Validate in a test environment" },
          { id: "author", label: "Deploy to live Author", tooltip: "Authors add and configure content" },
          { id: "publish", label: "Deploy to live Publish", tooltip: "Renders content for visitors" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Three Ways to View Available Components",
        content: [
          "The AEM Console — its Components page",
          "A cq:dialog referencing /libs/wcm/core/components/dialog/components.dialog",
          "A CRXDE Lite XPath query: //element(*, cq:Component)",
        ],
        type: "list",
      },
      {
        title: "WKND Tutorial",
        content: "Adobe's reference project for learning to use and extend the Core Components, emphasizing best practices and techniques.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — Editable Templates — Why They Matter
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Editable Templates",
    subtitle: "Why They're the Recommended Approach",
    content: [
      "Editable templates let template authors create and manage advanced policy configurations for page templates, without needing a developer for every change.",
      "They define editable regions within the template — content authors can add, remove, or modify components inside those regions, while everything outside stays locked to the branding and structure the template defines.",
    ],
    expandableSections: [
      {
        title: "Increased Author Productivity",
        content: "Authors create and update page templates without involving developers, saving time and money.",
        type: "text",
      },
      {
        title: "Improved Consistency",
        content: "All pages share the same configured policies and settings, keeping a consistent look and feel.",
        type: "text",
      },
      {
        title: "Reduced Development Costs",
        content: "Templates create a wide variety of pages without writing custom code for each one.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — Roles: Admin, Developer, Template Author
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Roles",
    subtitle: "Admin, Developer, and Template Author",
    content: [
      "Building a template is a three-role collaboration, and the exam likes to test who does what.",
      "An administrator must configure the template folder in the Configuration Browser and apply proper permissions before a template author can create anything in it.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Roles and their responsibilities",
        elements: [
          { id: "admin", label: "Admin", tooltip: "Creates the template folder and sets permissions — requires admin rights" },
          { id: "developer", label: "Developer", tooltip: "Handles technical internals — template files and settings" },
          { id: "author", label: "Template Author", tooltip: "Configures component usage and high-level template details" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — Creating a Template Folder
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Creating a Template Folder",
    subtitle: "Structure, Groups, and Precedence",
    content: [
      "Template folders live under /conf and hold your project's templates, separate from the built-in global folder.",
      "Best practice: don't use the global folder for your own templates — create a dedicated folder instead. The default group assigned for template authoring is template-authors.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Required folder structure under /conf",
        code: `/conf
  <your-folder-name> [sling:Folder]
    settings [sling:Folder]
      wcm [cq:Page]
        templates [cq:Page]
        policies [cq:Page]`,
      },
    ],
    expandableSections: [
      {
        title: "Order of Precedence",
        content: [
          "The current folder",
          "Parent(s) of the current folder",
          "/conf/global",
          "/apps",
          "/libs",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — Template Types
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Template Types",
    subtitle: "The Blueprint Behind a Template",
    content: [
      "A template type is the blueprint for a template — it defines the resource type of the page component and the policy of the root node, which controls which components the template editor allows.",
    ],
    expandableSections: [
      {
        title: "Out-of-the-Box Types",
        content: "/libs/settings/wcm/template-types",
        type: "text",
      },
      {
        title: "Site-Specific Types",
        content: "/apps/settings/wcm/template-types",
        type: "text",
      },
      {
        title: "Custom Types (Recommended)",
        content: "/conf/<your-folder>/settings/wcm/template-types, or /conf/global/settings/wcm/template-types",
        type: "text",
      },
      {
        title: "Creating a Template Type",
        content: "Build a regular page template first, copy it from the templates node to the template-types node using CRXDE Lite, delete the original, then strip out all cq:template and cq:templateType properties from every jcr:content node in the copy.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — Managing the Template Lifecycle
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "The Template Lifecycle",
    subtitle: "Enable, Allow, Publish",
    content: [
      "A template goes through a clear lifecycle before it's usable: create, configure, enable, allow, and publish.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Template lifecycle",
        elements: [
          { id: "enable", label: "Enable", tooltip: "Makes the template selectable in the Create Page wizard" },
          { id: "allow", label: "Allow", tooltip: "Specifies which content branches can use it — Page Properties > Advanced > Template Settings" },
          { id: "publish", label: "Publish", tooltip: "Pushes the fully configured template (and optionally its policies) to the publish environment" },
        ],
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Allowed template path pattern",
        code: `/conf/<your-folder>/settings/wcm/templates/.*`,
      },
    ],
    expandableSections: [
      {
        title: "Template Properties",
        content: "An Image (thumbnail), a Title, and an optional Description — all shown in the Templates Console and Create Page wizard.",
        type: "text",
      },
      {
        title: "⚠️ Modifying an Enabled Template",
        content: "A modified enabled template shows a warning, since existing pages already reference it.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8 — Editing a Template — Structure Mode
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Editing a Template — Structure Mode",
    subtitle: "The Fixed Skeleton",
    content: [
      "The Template Editor has three modes, switched from a toolbar selector: Structure, Initial Content, and Layout.",
      "Structure mode is where you add components to the template's fixed skeleton. Components placed here cannot be moved or removed by page authors — unless you include a paragraph system.",
    ],
    expandableSections: [
      {
        title: "Adding Components",
        content: [
          "From the Components browser",
          "Via Insert Component on an existing component's toolbar",
          "By dragging an asset straight from the Assets browser",
        ],
        type: "list",
      },
      {
        title: "Unlocking Components",
        content: "Unlocking a component in Structure mode lets you define initial content for it — once unlocked, its content is hidden from Structure mode and only shown in Initial Content mode.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9 — Editing a Template — Initial Content and Layout
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Initial Content and Layout",
    subtitle: "The Starting Point Page Authors Get",
    content: [
      "Initial Content mode defines what appears the moment a page is created from the template — a starting point that page authors can then edit. Only unlocked components are selectable here.",
      "Layout mode is where you define the template's responsive behavior across device breakpoints, the same way layout works during page authoring.",
    ],
    expandableSections: [
      {
        title: "Important Detail for the Exam",
        content: "Updating a template's initial content after pages already exist does not retroactively change those pages — only pages created afterward pick up the new initial content.",
        type: "text",
      },
      {
        title: "Unlocked Containers",
        content: "If a container was unlocked in Structure mode, you can add brand-new components to it in Initial Content mode, and those additions can be moved or deleted on the resulting pages.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10 — Policies and Properties
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Policies and Properties",
    subtitle: "Controlling What a Container Allows",
    content: [
      "Every configurable component — especially layout containers — exposes a Policy and a Properties panel.",
      "Policy defines the design rules: for a layout container, this is mandatory, since it's what determines which components are even allowed inside it.",
    ],
    expandableSections: [
      {
        title: "Allowed Components",
        content: "Which components can be placed here, organized into collapsible groups with search.",
        type: "text",
      },
      {
        title: "Default Components",
        content: "Maps dragged asset types, by MIME type, to the component that should be created automatically.",
        type: "text",
      },
      {
        title: "Responsive Settings",
        content: "The number of grid columns for the container.",
        type: "text",
      },
      {
        title: "Lock and Unlock",
        content: "Controls whether a component's content can be changed in Initial Content mode. Unlocking shows an open-padlock icon; the parent of an unlocked component can no longer be moved, cut, or deleted.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11 — Experience Fragments
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Experience Fragments",
    subtitle: "Reusable Experiences, Not Just Components",
    content: [
      "An experience fragment is a grouped set of components that together form a reusable experience — a title, image, description, and call-to-action combined into a teaser, for example.",
      "They live in the Experience Fragments Library, organized by category. You reference one from a page through the Component Inspector, and AEM creates a new instance that inherits the fragment's properties.",
    ],
    expandableSections: [
      {
        title: "Why They Matter",
        content: [
          "Reusability across owned channels and third-party touchpoints",
          "Variation creation, so marketers can adapt one experience for different audiences",
          "Live Copy synchronization — edits to a master fragment propagate to its variations",
          "Native social media integration, for posting fragments directly as social content",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 12 — Client Libraries — Fundamentals
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Client Libraries — Fundamentals",
    subtitle: "AEM's Built-In CSS/JS Delivery Mechanism",
    content: [
      "Clientlibs are AEM's built-in mechanism for delivering CSS and JavaScript. They centralize front-end code, aggregate it into single files for performance, and make it reusable across pages and components.",
      "A client library folder is a repository node of type cq:ClientLibraryFolder, stored under /apps.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "js.txt / css.txt syntax",
        code: `#base = [root]

[file1]
[file2]
...`,
      },
    ],
    expandableSections: [
      {
        title: "Key Properties",
        content: [
          "categories — identifies which category or categories the library belongs to",
          "allowProxy — set to true to make the library accessible via /etc.clientlibs",
        ],
        type: "list",
      },
      {
        title: "For AEMaaCS Projects",
        content: "All front-end source lives in the ui.frontend module of the AEM Project Archetype — the archetype's build process compiles it into the cq:ClientLibraryFolder automatically.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 13 — Client Libraries — Loading, Debugging, and Advanced Features
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Loading, Debugging & Advanced Features",
    subtitle: "HTL Is the Only Current Method in AEMaaCS",
    content: [
      "In AEM as a Cloud Service, client libraries are loaded exclusively through HTL, using the helper template at libs/granite/sightly/templates/clientlib.html.",
      "Older AEM documentation also shows a JSP taglib for this (ui:includeClientLib) — that's a legacy pattern from on-premise AEM. Current Cloud Service documentation doesn't reference the JSP approach at all, so treat it as historical context, not something to reach for on a cloud project.",
    ],
    codeExamples: [
      {
        language: "htl",
        title: "Loading a client library in HTL",
        code: `<sly data-sly-use.clientLib="\${'/libs/granite/sightly/templates/clientlib.html'}"/>
<sly data-sly-call="\${clientLib.all @ categories='apps.aem-learning'}"/>`,
      },
    ],
    expandableSections: [
      {
        title: "dependencies",
        content: "A String[] property listing other categories your library needs, ensuring they load first.",
        type: "text",
      },
      {
        title: "embed",
        content: "A String[] property that inlines another library's compiled code into yours — useful for exposing an /apps-restricted library through an /etc-based public folder, or for reducing the number of requests on a page.",
        type: "text",
      },
      {
        title: "Debugging",
        content: "Append ?debugClientLibs=true to a URL to see @import statements revealing exactly what's embedded, instead of the merged output.",
        type: "text",
      },
      {
        title: "Preprocessors",
        content: "AEM ships with YUI Compressor as the default minifier for CSS and JS, with Google Closure Compiler available as a pluggable alternative, configurable per-library or system-wide.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 14 — Closing
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "The Three Pillars",
    subtitle: "Templates, Components, and Client Libraries",
    content: [
      "Templates, components, and client libraries are the three pillars of how content actually gets authored and rendered in AEM — get these right and everything else, from experience fragments to page creation, follows the same patterns.",
    ],
    expandableSections: [
      {
        title: "Key Concepts to Remember for the Exam",
        content: [
          "The three roles — Admin creates the folder, Developer builds the template internals, Template Author configures usage",
          "The template lifecycle — enable, allow, publish — and that allow controls where a template can be used, not whether it exists",
          "Structure mode content is fixed unless unlocked or placed in a paragraph system; Initial Content mode is where that unlocked content lives",
          "Experience fragments are reusable, support variations, and sync through Live Copy",
          "Client libraries load through HTL only in AEMaaCS — the old JSP taglib pattern is legacy, not current practice",
          "dependencies pulls in other libraries; embed inlines another library's code into yours",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 1,
  },
]

// ============================================================================
// HELPERS
// ============================================================================

export function getTotalTemplatesSlides(): number {
  return templatesSlides.length
}

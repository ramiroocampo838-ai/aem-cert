/**
 * AEM Environment Setup Presentation - Slide Content
 * 14 slides (~33 min) covering local dev environment, QuickStart Jar,
 * Maven modules, Dispatcher, Repo Init, and Troubleshooting.
 *
 * Source: public/speeches/env-setup.txt
 * Theme: violet/indigo — from-violet-900 via-indigo-900 to-purple-900
 */

// ============================================================================
// INTERFACES (re-exported from cloud-manager-slides pattern)
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

export interface EnvSetupSlide {
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

const THEME = "from-violet-900 via-indigo-900 to-purple-900"

// ============================================================================
// SLIDE CONTENT — 14 SLIDES
// ============================================================================

export const envSetupSlides: EnvSetupSlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — Introduction
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "AEM Environment Setup",
    subtitle: "Building Your Local Development Foundation",
    content: [
      "Now that we understand what AEM is, how Cloud Manager works, and the code quality standards, it's time to set up a local development environment.",
      "The goal here is to be able to develop, build, and test AEM code on your own machine before sending anything to the cloud.",
      "This is one of the most practical lessons in the certification.",
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — The Three Components
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "The Three Components",
    subtitle: "A Miniature Cloud on Your Laptop",
    content: [
      "A local AEM environment has three logical parts that mirror what runs in the cloud.",
      "Think of it as a miniature version of what runs in the cloud, all on your laptop. The goal is to validate everything locally before it goes through Cloud Manager.",
    ],
    expandableSections: [
      {
        title: "AEM Project",
        content: "Your custom code, configuration, and content. This is the Maven multi-module project you develop locally and push through Cloud Manager pipelines.",
        type: "text",
      },
      {
        title: "Local AEM Runtime",
        content: "A local version of the Author and Publish services, provided by the AEMaaCS SDK as a QuickStart Jar. Author runs on port 4502, Publish on port 4503.",
        type: "text",
      },
      {
        title: "Local Dispatcher Runtime",
        content: "A local version of Apache HTTP Server with the Dispatcher module, run inside a Docker container. It connects to your local Publish service and exposes it on port 8080.",
        type: "text",
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Local vs Cloud environment mapping",
        elements: [
          { id: "proj", label: "AEM Project (Maven)", tooltip: "Custom code, config, and content — same in both environments" },
          { id: "author", label: "Author :4502", tooltip: "Content authors create and manage content here" },
          { id: "publish", label: "Publish :4503", tooltip: "Delivers content to end users" },
          { id: "dispatcher", label: "Dispatcher :8080", tooltip: "Caching layer in front of Publish" },
          { id: "cm", label: "Cloud Manager", tooltip: "Cloud-only CI/CD orchestration" },
          { id: "pipeline", label: "Adobe Pipeline", tooltip: "Cloud-only content distribution microservice" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — Development Tools
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Development Tools",
    subtitle: "Four Tools You Must Have Installed",
    content: [
      "To work with AEM locally, you need four core tools. After installing each one, always verify with a version command.",
    ],
    expandableSections: [
      {
        title: "Java JDK 21",
        content: "AEM is a Java application. Java 21 is the recommended version for AEMaaCS. Verify with: java -version",
        type: "text",
      },
      {
        title: "Node.js",
        content: "Required for front-end tooling (ui.frontend module) and the Adobe I/O CLI. Verify with: node --version",
        type: "text",
      },
      {
        title: "Apache Maven",
        content: "The build tool for all AEM projects. Maven reads the pom.xml files and compiles, packages, and deploys AEM modules. Verify with: mvn -v",
        type: "text",
      },
      {
        title: "Git",
        content: "Source control. Cloud Manager reads your code directly from a Git repository. All changes flow through Git before any deployment.",
        type: "text",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Verify all tool installations",
        code: `# Verify Java — must be 21+
java -version

# Verify Maven
mvn -v

# Verify Node
node --version`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — Adobe I/O CLI
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Adobe I/O CLI",
    subtitle: "The aio Command-Line Interface",
    content: [
      "The Adobe I/O CLI, known as aio, is a command-line tool that lets you interact with Adobe services.",
      "You install it as a global npm package and then add plugins for the specific services you need.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Install Adobe I/O CLI globally",
        code: `npm install -g @adobe/aio-cli

# Verify installation
aio --version`,
      },
    ],
    expandableSections: [
      {
        title: "Available Plugins",
        content: [
          "Cloud Manager plugin — manage environments, pipelines, and deployments",
          "AEM Rapid Development Environment (RDE) plugin — fast iteration for local testing",
          "Asset Compute plugin — develop and test custom asset processing workers",
        ],
        type: "list",
      },
      {
        title: "⚠️ Important: OAuth Authentication",
        content: "The old JWT authentication was removed in January 2025. The only supported method now is OAuth Server-to-Server, configured through the Adobe Developer Console. Any project still using JWT must migrate immediately.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — File System Organization
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "File System Organization",
    subtitle: "Adobe's Recommended Folder Structure",
    content: [
      "Adobe recommends a specific folder structure for local development. This keeps everything organized and makes it easy to manage multiple SDK versions.",
      "On Windows, the tilde (~) maps to %HOMEPATH% — typically C:\\Users\\<your-username>.",
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Recommended local development folder structure",
        asciiContent: `~/
├── aem-sdk/
│   ├── author/         → Local Author service (QuickStart Jar + crx-quickstart)
│   ├── publish/        → Local Publish service (QuickStart Jar + crx-quickstart)
│   └── dispatcher/     → Local Dispatcher Tools (Docker-based)
│
└── code/
    └── <project-name>/ → Your AEM Maven project
        ├── all/
        ├── core/
        ├── ui.apps/
        ├── ui.content/
        ├── ui.config/
        └── pom.xml`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — The QuickStart Jar
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "The QuickStart Jar",
    subtitle: "Your Local AEM Instance",
    content: [
      "The AEMaaCS SDK includes a QuickStart Jar — a self-contained JAR file that runs a full AEM instance locally.",
      "You download it from Adobe Software Distribution. It can run either an Author or Publish instance depending on its filename.",
      "Author runs on port 4502. Publish runs on port 4503.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Start the Author instance",
        code: `# Navigate to your author folder
cd ~/aem-sdk/author

# Start Author on port 4502
java -jar aem-author-p4502.jar`,
      },
    ],
    expandableSections: [
      {
        title: "Rule 1: Never Double-Click the JAR",
        content: "Double-clicking the JAR file will launch it with default settings that bypass the naming convention. Always start from the command line so the tier and port are correctly determined from the filename.",
        type: "text",
      },
      {
        title: "Rule 2: Always Start from the Command Line",
        content: "Using 'java -jar' ensures the JVM arguments are applied correctly, the correct port is bound, and the tier (author/publish) is locked from the filename. This is the only supported startup method.",
        type: "text",
      },
    ],
    tooltips: [
      {
        text: "port 4502",
        content: "Default Author port. Change it in the JAR filename: aem-author-p<port>.jar",
      },
      {
        text: "port 4503",
        content: "Default Publish port. Change it in the JAR filename: aem-publish-p<port>.jar",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — QuickStart Jar Naming Convention
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "QuickStart Jar Naming Convention",
    subtitle: "The Filename Controls How AEM Starts",
    content: [
      "The filename of the JAR controls how AEM starts up. This is a critical concept for the exam.",
      "The format is: aem-<tier>_<environment>-p<port>.jar — where environment is optional for dev mode.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Naming convention examples",
        code: `# Author in Dev mode on port 4502 (most common)
aem-author-p4502.jar

# Publish in Dev mode on port 4503
aem-publish-p4503.jar

# Author in Production mode on port 4502
aem-author_prod-p4502.jar`,
      },
    ],
    expandableSections: [
      {
        title: "Tier Lock — Author vs Publish",
        content: "The tier (author or publish) is locked on first startup. The crx-quickstart folder is created and bound to that tier. If you need to change the tier, you must delete the crx-quickstart folder entirely and start fresh.",
        type: "text",
      },
      {
        title: "Environment Mode — Dev vs Prod",
        content: "The environment mode affects which OSGi configurations are loaded by run mode. Dev mode loads run mode 'dev' configs, Production mode loads 'prod' configs. This is useful for testing environment-specific settings locally.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8 — Simulating Content Distribution
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Simulating Content Distribution",
    subtitle: "Replication Agents for Local Testing",
    content: [
      "In production, content moves from Author to Publish through the Adobe Pipeline — a cloud-only microservice.",
      "Locally, you simulate this using legacy Replication Agents. You enable the Default Agent from the Author service and point it to your local Publish.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Replication Agent configuration URL",
        code: `# Open in Author — enable the Default Agent
http://localhost:4502/etc/replication/agents.author.html

# Configure the transport URI to point to local Publish
Transport URI: http://localhost:4503/bin/receive?sling:authRequestLogin=1`,
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Production vs Local content distribution",
        elements: [
          { id: "author", label: "Author", tooltip: "Content authoring service" },
          { id: "pipeline", label: "Adobe Pipeline (cloud)", tooltip: "Cloud-only microservice — not available locally" },
          { id: "replication", label: "Replication Agent (local)", tooltip: "Legacy mechanism used to simulate cloud distribution locally" },
          { id: "publish", label: "Publish", tooltip: "Content delivery service" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9 — Local Dispatcher
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Local Dispatcher",
    subtitle: "Docker-Based Apache + Dispatcher Module",
    content: [
      "The Dispatcher Tools are Docker-based. They run an Apache HTTP Server with the Dispatcher module inside a container, connected to your local Publish service.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Start Dispatcher with hot reload",
        code: `# Start the Dispatcher connecting to local Publish
# Exposes Dispatcher on port 8080
./bin/docker_run_hot_reload.sh ./src localhost:4503 8080`,
      },
      {
        language: "bash",
        title: "Validate Dispatcher configuration",
        code: `# Check Apache and Dispatcher config for errors
./bin/validate ./src`,
      },
    ],
    expandableSections: [
      {
        title: "Understanding the docker_run_hot_reload.sh Arguments",
        content: [
          "./src — path to your Dispatcher configuration folder (vhost files, farm files, etc.)",
          "localhost:4503 — the Publish service the Dispatcher will proxy requests to",
          "8080 — the port on which the Dispatcher will be accessible in your browser",
        ],
        type: "list",
      },
      {
        title: "Hot Reload vs Standard Run",
        content: "The hot-reload variant is preferred for development because it automatically reloads Apache and Dispatcher configuration when files change. The standard docker_run.sh requires a container restart for every config change.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10 — Maven Project Structure
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Maven Project Structure",
    subtitle: "Immutable vs Mutable Repository Areas",
    content: [
      "This is where things get important for the exam. AEM enforces a clear separation between code and content.",
      "The repository has two types of areas: Immutable areas cannot be changed at runtime. Mutable areas can be changed at runtime.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Immutable vs Mutable repository areas in AEM",
        elements: [
          { id: "apps", label: "/apps", tooltip: "Your custom components, scripts, and clientlibs — immutable" },
          { id: "libs", label: "/libs", tooltip: "AEM platform code — never modify this directly" },
          { id: "content", label: "/content", tooltip: "Page content and assets — mutable" },
          { id: "conf", label: "/conf", tooltip: "Editable templates and context-aware configurations — mutable" },
          { id: "var", label: "/var", tooltip: "Workflows, reports, audit log — mutable" },
          { id: "etc", label: "/etc", tooltip: "Replication agents, cloud configurations — mutable (legacy)" },
        ],
      },
    ],
    tooltips: [
      {
        text: "/apps",
        content: "Immutable — your custom components, scripts, clientlibs. Deployed via ui.apps package.",
      },
      {
        text: "/libs",
        content: "Immutable — AEM platform code. Never modify directly. Overlay in /apps instead.",
      },
      {
        text: "/content",
        content: "Mutable — page content and assets. Deployed via ui.content package.",
      },
      {
        text: "/conf",
        content: "Mutable — editable templates and context-aware configurations. Deployed via ui.content.",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11 — Maven Modules and Package Types
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Maven Modules and Package Types",
    subtitle: "The Standard AEM Project Structure",
    content: [
      "A standard AEM project has five key modules, each with a specific purpose and package type.",
      "The all package is the only artifact deployed by Cloud Manager. All other packages must set cloudManagerTarget to none.",
    ],
    expandableSections: [
      {
        title: "core — Java OSGi Bundle",
        content: "Contains all Java code: OSGi services, Sling models, servlets, and schedulers. Package type: none (it's a bundle, not a content package). Embedded into all.",
        type: "text",
      },
      {
        title: "ui.apps — Code Package",
        content: "Deploys to /apps. Contains components, HTL scripts, clientlibs, and OSGi configuration factories. Package type: application (immutable area — cannot change at runtime).",
        type: "text",
      },
      {
        title: "ui.content — Content Package",
        content: "Deploys to /content and /conf. Contains sample content, page structures, and editable template configurations. Package type: content (mutable area).",
        type: "text",
      },
      {
        title: "ui.config — OSGi Configurations",
        content: "Contains OSGi configuration files (.cfg.json) and Repo Init scripts. Scoped by run mode (e.g., config.author, config.publish). Package type: application.",
        type: "text",
      },
      {
        title: "all — Container Package (⭐ Cloud Manager Target)",
        content: "The single deployment artifact for Cloud Manager. Embeds all other modules (core, ui.apps, ui.content, ui.config). Package type: container. All other packages must set cloudManagerTarget=none so Cloud Manager ignores them.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 12 — Repo Init and the AEM Archetype
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Repo Init & AEM Archetype",
    subtitle: "Defining JCR Structures and Bootstrapping Projects",
    content: [
      "Repo Init is a mechanism that defines JCR structures as part of the application. These scripts run early in the deployment lifecycle — before any application code.",
      "Repo Init scripts live in ui.config and are scoped by run mode.",
    ],
    expandableSections: [
      {
        title: "What You Can Do with Repo Init",
        content: [
          "Create folder structures under /content or /conf",
          "Create service users (system users for OSGi services)",
          "Create groups and assign memberships",
          "Define ACL permissions for users and groups",
        ],
        type: "list",
      },
      {
        title: "AEM Project Archetype — Version 56",
        content: "To start a new project, use the AEM Project Archetype. The current version is 56. It generates the full project structure with best practices already in place: all, core, ui.apps, ui.content, ui.config, ui.frontend, tests, and dispatcher configuration.",
        type: "text",
      },
      {
        title: "Why Repo Init Matters for the Exam",
        content: "Repo Init runs before application code, making it the correct place to create service users and ACLs. Using a content package to create service users is a common mistake — Repo Init is the approved method in AEMaaCS.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 13 — Troubleshooting
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Troubleshooting",
    subtitle: "A Sequential Debugging Process",
    content: [
      "When something is not working, follow this sequence. Each tool reveals a different layer of the system.",
      "The two most common errors: wrong Java version and trying to double-click the QuickStart Jar.",
    ],
    expandableSections: [
      {
        title: "1. Package Manager — Was it Installed?",
        content: [
          { text: "Check if your package was installed successfully.", url: "" },
          { text: "URL: http://localhost:4502/crx/packmgr", url: "http://localhost:4502/crx/packmgr" },
        ],
        type: "list",
      },
      {
        title: "2. CRXDE Lite — Is the Content Correct?",
        content: [
          { text: "Inspect the JCR repository directly. Verify nodes, properties, and file content.", url: "" },
          { text: "URL: http://localhost:4502/crx/de", url: "http://localhost:4502/crx/de" },
        ],
        type: "list",
      },
      {
        title: "3. Bundle Console — Is the OSGi Bundle Active?",
        content: [
          { text: "Check if your Java bundle (core) is in Active state. Installed or Resolved means something is wrong.", url: "" },
          { text: "URL: http://localhost:4502/system/console/bundles", url: "http://localhost:4502/system/console/bundles" },
        ],
        type: "list",
      },
      {
        title: "4. error.log — AEM Logs Everything",
        content: "AEM writes all errors and warnings to crx-quickstart/logs/error.log. This is the most detailed source of truth. Look for WARN and ERROR level messages related to your bundle or package.",
        type: "text",
      },
      {
        title: "5. Clientlib Debug Tools — Front-End Issues",
        content: [
          { text: "For CSS and JavaScript issues, use the clientlib dump to see which libraries are loaded.", url: "" },
          { text: "URL: http://localhost:4502/libs/granite/ui/content/dumplibs.html", url: "http://localhost:4502/libs/granite/ui/content/dumplibs.html" },
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 14 — Closing
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "You're Ready to Build",
    subtitle: "The Foundation Is Set",
    content: [
      "Setting up a local AEM environment is not just a setup task — it is the foundation for everything that follows.",
    ],
    expandableSections: [
      {
        title: "What You Now Have",
        content: [
          "The tools to build AEM projects (Java 21, Maven, Node.js, Git, aio CLI)",
          "A local runtime to test your code (QuickStart Jar for Author and Publish)",
          "An understanding of how Maven packages are structured (core, ui.apps, ui.content, ui.config, all)",
          "A troubleshooting process when things go wrong",
        ],
        type: "list",
      },
      {
        title: "Key Concepts to Remember for the Exam",
        content: [
          "QuickStart Jar naming convention: aem-<tier>_<env>-p<port>.jar — the tier is locked on first startup",
          "Mutable vs Immutable areas: /apps and /libs are immutable; /content, /conf, /var are mutable",
          "The role of each Maven module and its package type (application, content, container)",
          "The all package is the ONLY artifact deployed by Cloud Manager — all others set cloudManagerTarget=none",
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

export function getTotalEnvSetupSlides(): number {
  return envSetupSlides.length
}

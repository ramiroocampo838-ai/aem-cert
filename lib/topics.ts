export type TopicTag = "Core" | "Cloud" | "Advanced"

export interface Topic {
  id: string
  title: string
  description: string
  icon: string
  tag: TopicTag
  details: string[]
}

export const topics: Topic[] = [
  {
    id: "aem-core-architecture",
    title: "AEM Core Architecture",
    description:
      "Foundation concepts including JCR/Oak repository, Sling framework, OSGi bundles, and REST/MVC patterns.",
    icon: "Layers",
    tag: "Core",
    details: [
      "JCR (Java Content Repository) and Apache Oak fundamentals",
      "Content node types, properties, and hierarchies",
      "Apache Sling resource resolution and servlet mapping",
      "OSGi bundle lifecycle and component services",
      "REST principles and resourceful URL patterns",
      "MVC pattern implementation in AEM",
      "Service users and access control",
      "AEM run modes and configurations",
    ],
  },
  {
    id: "component-development",
    title: "Component Development",
    description: "Building components with HTL, Sling Models, Core Components, and custom proxying strategies.",
    icon: "Code",
    tag: "Core",
    details: [
      "HTL (HTML Template Language) syntax and expressions",
      "Block statements: data-sly-use, data-sly-list, data-sly-test",
      "Sling Models with annotations and adaptables",
      "Core WCM Components library usage",
      "Component proxying and inheritance patterns",
      "Client libraries (clientlibs) for CSS/JS",
      "Dialog and design dialog configurations",
      "Component policies and allowed components",
    ],
  },
  {
    id: "editable-templates",
    title: "Editable Templates & Policies",
    description: "Dynamic templates, responsive grid layouts, initial content, and template policies.",
    icon: "FileText",
    tag: "Core",
    details: [
      "Template types vs editable templates",
      "Template structure and initial content",
      "Responsive grid and layout containers",
      "Template policies for component styling",
      "Allowed components configuration",
      "Template editor usage and best practices",
      "Locked vs unlocked components",
      "Style system and design configurations",
    ],
  },
  {
    id: "content-fragments",
    title: "Content & Experience Fragments",
    description: "Structured content management, headless delivery, and reusable experience fragments.",
    icon: "Puzzle",
    tag: "Core",
    details: [
      "Content Fragment models and schemas",
      "Content Fragment variations and metadata",
      "Experience Fragments vs Content Fragments",
      "Building blocks and XF templates",
      "Headless content delivery patterns",
      "Fragment references and associations",
      "Content Fragment APIs and endpoints",
      "Localization and translation workflows",
    ],
  },
  {
    id: "aem-cloud-service",
    title: "AEM as a Cloud Service Essentials",
    description: "Cloud Manager, CI/CD pipelines, auto-scaling, and key differences from AEM 6.5.",
    icon: "Cloud",
    tag: "Cloud",
    details: [
      "Cloud Manager programs and environments",
      "CI/CD pipeline configuration and stages",
      "Code quality gates and SonarQube rules",
      "Auto-scaling and performance optimization",
      "Differences between AEM 6.5 and AEMaaCS",
      "Rapid Development Environments (RDE)",
      "Cloud SDK and local development setup",
      "Environment-specific configurations",
      "Content migration strategies",
      "Maintenance windows and updates",
    ],
  },
  {
    id: "dispatcher-caching",
    title: "Dispatcher, Caching & Performance",
    description: "Farm configurations, CDN integration, cache invalidation, and performance tuning.",
    icon: "Zap",
    tag: "Advanced",
    details: [
      "Dispatcher architecture and request flow",
      "Farm configuration files and rules",
      "Cache rules and invalidation strategies",
      "CDN integration patterns",
      "Stat files and auto-invalidation",
      "Client headers and caching headers",
      "Load balancing and failover",
      "Performance monitoring and optimization",
    ],
  },
  {
    id: "replication-msm",
    title: "Replication, MSM & Workflows",
    description: "Content replication, Multi-Site Manager, live copies, and workflow customization.",
    icon: "GitBranch",
    tag: "Core",
    details: [
      "Replication agents and configurations",
      "Publish and reverse replication",
      "Multi-Site Manager (MSM) concepts",
      "Live copy creation and synchronization",
      "Rollout configurations and triggers",
      "Workflow models and process steps",
      "Custom workflow participants",
      "Launchers and workflow automation",
    ],
  },
  {
    id: "headless-aem",
    title: "Headless AEM",
    description: "GraphQL APIs, Content Fragment delivery, SPA integration, and Universal Editor.",
    icon: "Globe",
    tag: "Cloud",
    details: [
      "GraphQL API endpoints and queries",
      "Persisted queries for performance",
      "Content Fragment JSON export",
      "SPA Editor and remote SPA setup",
      "Universal Editor integration",
      "OpenAPI-based Content Fragment APIs",
      "Headless SDK and client libraries",
      "CORS configuration for APIs",
    ],
  },
  {
    id: "edge-delivery",
    title: "Edge Delivery Services",
    description: "Git-based authoring, fast publishing, document-based workflows, and hybrid approaches.",
    icon: "Zap",
    tag: "Cloud",
    details: [
      "Edge Delivery architecture overview",
      "Document-based authoring (Google Docs/SharePoint)",
      "Git-based content management",
      "Sidekick browser extension",
      "Block development and customization",
      "Hybrid AEM + Edge Delivery patterns",
      "Performance benefits and use cases",
      "Content synchronization strategies",
    ],
  },
  {
    id: "security-best-practices",
    title: "Security, Best Practices & Migration",
    description: "Security hardening, coding standards, upgrade paths, and cloud migration strategies.",
    icon: "Shield",
    tag: "Advanced",
    details: [
      "User and group management",
      "ACLs and permission models",
      "Closed User Groups (CUG)",
      "CSRF protection and security filters",
      "Coding best practices and patterns",
      "Repository maintenance tasks",
      "Upgrade and migration planning",
      "Content Transfer Tool usage",
      "Cloud readiness assessment",
      "Index migration and optimization",
    ],
  },
]

// Helper function to get topic by ID
export function getTopicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id)
}

// Helper function to filter topics by tag
export function getTopicsByTag(tag: TopicTag): Topic[] {
  return topics.filter((topic) => topic.tag === tag)
}

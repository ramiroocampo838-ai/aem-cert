/**
 * Cloud Manager & AEMaaCS Presentation - Slide Content
 * 14 slides (~32 min) covering AEM as a Cloud Service, Cloud Manager,
 * CI/CD pipelines, monitoring, API, and code quality.
 *
 * Sources:
 *  - Introduction to Adobe Experience Manager (AEM).txt
 *  - Overview of Cloud Manager.txt
 *  - Improved_Overview_of_Cloud_Manager.txt
 */

// ============================================================================
// INTERFACES (independent from slides-content.ts — Opción A)
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

export interface CloudManagerSlide {
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

// ============================================================================
// SLIDE CONTENT — 14 SLIDES
// ============================================================================

export const cloudManagerSlides: CloudManagerSlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SECTION 1 — AEM AS A CLOUD SERVICE (Slides 1–5)
  // Source: Introduction to Adobe Experience Manager (AEM).txt
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 1,
    title: "Cloud Manager & AEMaaCS",
    subtitle: "A Practical Guide for AEM Certification",
    content: [
      "Welcome to the Cloud Manager & AEMaaCS module",
      "This module covers two essential certification topics:",
      "☁️ AEM as a Cloud Service — architecture, benefits, and migration",
      "🔧 Cloud Manager — CI/CD pipelines, roles, monitoring, and APIs",
      "Covers exam objectives: Section 1.3, 1.4 · Section 2.3 · Section 4.1 & 4.4"
    ],
    expandableSections: [
      {
        title: "What You Will Learn in This Module",
        content: [
          "What AEM as a Cloud Service (AEMaaCS) is and how it differs from AEM 6.5",
          "Benefits of AEMaaCS for developers, authors, admins, and marketing teams",
          "The migration journey: phases and tools (Cloud Acceleration Manager)",
          "Cloud Manager user roles and how to set them up in Admin Console",
          "CI/CD pipelines: production, non-production, and their variants",
          "Infrastructure and service monitoring layers",
          "Cloud Manager REST API and CLI for automation",
          "Git repository management, code quality rules, and environment variables"
        ],
        type: "list"
      },
      {
        title: "Exam Objectives Covered",
        content: [
          "Section 1.3 — Explain how to create and manage OSGi configurations",
          "Section 1.4 — Determine the correct steps to manage custom OAK indices",
          "Section 2.3 — Determine the correct steps to develop workflows",
          "Section 4.1 — Determine the steps required to debug AEM environment issues",
          "Section 4.4 — Determine steps for planning and migrating to AEM as a Cloud Service"
        ],
        type: "list"
      }
    ],
    backgroundColor: "from-emerald-600 via-teal-600 to-cyan-700",
    estimatedTime: 1
  },

  {
    id: 2,
    title: "What is AEM as a Cloud Service?",
    subtitle: "Cloud-Native Agility for Enterprise Content Management",
    content: [
      "AEMaaCS is the latest offering of the AEM product line:",
      "• Cloud-native architecture — no infrastructure management",
      "• Continuous updates — automatic, always on the latest version",
      "• Built-in CDN for global content delivery",
      "• Auto-scaling based on traffic demands",
      "Designed to accelerate time-to-value and extend existing AEM investments"
    ],
    expandableSections: [
      {
        title: "🔼 Scalability",
        content: [
          "Handles large volumes of digital assets and content without manual intervention",
          "Scales up or down automatically based on changing business needs",
          "Delivers consistent digital experiences across all channels and touchpoints",
          "No capacity planning required — Adobe manages infrastructure"
        ],
        type: "list"
      },
      {
        title: "⚙️ Flexibility",
        content: [
          "Customizable and extensible to meet specific business needs",
          "Supports integrations with CRM, ERP, and eCommerce platforms",
          "Enables developers to add automation to application development practices",
          "Open APIs and headless delivery options for any frontend technology"
        ],
        type: "list"
      },
      {
        title: "⚡ Efficiency",
        content: [
          "Streamlines content creation, management, and delivery workflows",
          "Reduces time and resources needed to manage digital experiences",
          "Built-in Content Delivery Network (CDN) for global performance",
          "Network-layer best practices applied automatically by Adobe"
        ],
        type: "list"
      },
      {
        title: "🎯 Personalization, Collaboration & Security",
        content: [
          "Personalization: Targeted content delivery based on user behavior and preferences",
          "Personalization: Dynamic architecture with auto-scaling removes infrastructure overhead",
          "Collaboration: Multi-site management from a single platform",
          "Collaboration: Teams work together on content creation across channels",
          "Security: Advanced access controls, authentication, and encryption",
          "Security: Automated tests scan for common vulnerabilities continuously"
        ],
        type: "list"
      },
      {
        title: "📊 Analytics Integration",
        content: [
          "Deep integration with Adobe Experience Cloud suite",
          "Insights into user behavior and engagement across digital channels",
          "Integration with Adobe Analytics and web analytics products",
          "Enables better customer experiences through data-driven decisions"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "CDN",
        content: "Content Delivery Network — a globally distributed network of servers that delivers content to users from the nearest location, reducing latency"
      },
      {
        text: "auto-scaling",
        content: "Automatic adjustment of computing resources (up or down) based on real-time traffic demand, without manual intervention"
      },
      {
        text: "AEMaaCS",
        content: "AEM as a Cloud Service — the cloud-native version of Adobe Experience Manager, managed entirely by Adobe"
      }
    ],
    backgroundColor: "from-teal-600 via-cyan-600 to-emerald-700",
    estimatedTime: 3
  },

  {
    id: 3,
    title: "Benefits by Role",
    subtitle: "Who Gains What from AEMaaCS?",
    content: [
      "AEMaaCS delivers specific advantages to every team member:",
      "Each role benefits differently from the cloud-native model",
      "Migration to AEMaaCS is not just infrastructure — it changes how teams work"
    ],
    expandableSections: [
      {
        title: "👨‍💻 Developers — Easier Configuration & Extension",
        content: [
          "Focus efforts on configuring and extending AEM using new cloud-based patterns",
          "Streamlined approach minimizes complexities vs on-premise setups",
          "No server management — deploy code, not infrastructure",
          "Rapid Development Environments (RDE) for instant testing",
          "Cloud-native OSGi configs using environment variables and secrets"
        ],
        type: "list"
      },
      {
        title: "✍️ Content Authors — Continuous Innovation",
        content: [
          "Full access to the latest AEM innovations delivered continuously",
          "No waiting for manual upgrades — features appear automatically",
          "Cutting-edge content creation and management functionalities",
          "Universal Editor for in-context editing across channels",
          "AI-powered content recommendations and workflows"
        ],
        type: "list"
      },
      {
        title: "🛠️ System Administrators — Simplified Maintenance",
        content: [
          "Reduce manual tasks in configuration and infrastructure maintenance",
          "Automated processes optimize efficiency and system operations",
          "Adobe handles patching, updates, and security fixes",
          "Self-service environment management via Cloud Manager",
          "Built-in monitoring and alerting — no third-party setup required"
        ],
        type: "list"
      },
      {
        title: "📣 Marketing Teams — Rapid Time-to-Value",
        content: [
          "Achieve faster time-to-value with streamlined cloud development",
          "Seamless integration with other Adobe marketing tools",
          "Quickly implement and launch campaigns without IT dependency",
          "Built-in personalization and A/B testing at scale",
          "Quicker results and improved marketing outcomes"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "RDE",
        content: "Rapid Development Environment — a fast, personal cloud environment for quick code iteration and testing without full pipeline runs"
      }
    ],
    backgroundColor: "from-cyan-600 via-teal-600 to-emerald-600",
    estimatedTime: 2
  },

  {
    id: 4,
    title: "Migration Journey to AEMaaCS",
    subtitle: "Phase-by-Phase Transition Strategy",
    content: [
      "The migration journey follows a structured, phased approach:",
      "🔍 Readiness Phase — Assess and plan",
      "🛠️ Implementation Phase — Prepare code and content",
      "🚀 Go-Live Phase — Execute the migration",
      "📈 Post Go-Live Phase — Monitor and continuously improve"
    ],
    expandableSections: [
      {
        title: "Phase 1: Readiness",
        content: [
          "Assess the readiness of your current AEM deployment for migration",
          "Review the Assessment tool in Cloud Acceleration Manager (CAM)",
          "Familiarize yourself with changes and updates introduced by AEMaaCS",
          "Identify custom code, integrations, and mutable content to refactor",
          "Define scope, timeline, and resource requirements for migration"
        ],
        type: "list"
      },
      {
        title: "Phase 2: Implementation",
        content: [
          "Prepare your code to be cloud-ready (immutable content, no system users)",
          "Prepare content for migration using the Content Transfer Tool (CTT)",
          "Explore Adobe-provided tooling: Repository Modernizer, Dispatcher Converter",
          "Refactor custom code to meet Cloud Service constraints",
          "Test in local AEM SDK before deploying to cloud environments"
        ],
        type: "list"
      },
      {
        title: "Phase 3: Go-Live",
        content: [
          "Execute the final migration once all preparations are complete",
          "Move your deployment to AEMaaCS using the Content Transfer Tool",
          "Validate all content, customizations, and integrations post-migration",
          "Conduct performance and security testing in staging",
          "Activate production environment through Cloud Manager pipeline"
        ],
        type: "list"
      },
      {
        title: "Phase 4: Post Go-Live",
        content: [
          "Monitor the system for any issues or challenges after migration",
          "Continuously improve performance and optimize the cloud setup",
          "Leverage automatic Adobe updates to stay on the latest features",
          "Maximize benefits: scalability, reduced infra costs, security patches",
          "Document lessons learned for future migrations"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "ascii",
        description: "AEMaaCS Migration Journey — Phases Overview",
        asciiContent: `┌─────────────────────────────────────────────────────────────────────┐
│          MIGRATION JOURNEY TO AEM AS A CLOUD SERVICE                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐     ┌─────────────────────┐     ┌─────────────┐  │
│  │  READINESS  │ ──► │  IMPLEMENTATION      │ ──► │  GO-LIVE   │  │
│  │             │     │                     │     │             │  │
│  │ • Assessment│     │ • Content Refactor  │     │ • Execute   │  │
│  │ • Planning  │     │ • Code Refactor     │     │   Migration │  │
│  │ • Setup     │     │ • Tooling & Testing │     │ • Validate  │  │
│  └─────────────┘     └─────────────────────┘     └─────────────┘  │
│                                                          │         │
│                                                          ▼         │
│                              ┌─────────────────────────────────┐  │
│                              │        POST GO-LIVE             │  │
│                              │ • Monitor & Optimize            │  │
│                              │ • Continuous Improvement        │  │
│                              │ • Leverage Auto-Updates         │  │
│                              └─────────────────────────────────┘  │
│                                                                     │
│  🛠  Guided by: Cloud Acceleration Manager (CAM)                   │
│      One-stop experience for every phase of the journey            │
└─────────────────────────────────────────────────────────────────────┘`
      }
    ],
    tooltips: [
      {
        text: "Cloud Acceleration Manager",
        content: "CAM: A cloud-based application that guides IT teams throughout the AEMaaCS transition — from planning to go-live — with Adobe-recommended best practices and tools"
      },
      {
        text: "Content Transfer Tool",
        content: "Adobe-provided tool (CTT) that extracts content from the source AEM instance and ingests it into AEM as a Cloud Service"
      }
    ],
    backgroundColor: "from-emerald-700 via-teal-700 to-cyan-600",
    estimatedTime: 3
  },

  {
    id: 5,
    title: "Cloud Acceleration Manager (CAM)",
    subtitle: "Your One-Stop Migration Companion",
    content: [
      "Cloud Acceleration Manager is a cloud-based application designed to:",
      "• Guide IT teams throughout the entire AEMaaCS transition journey",
      "• Provide a single platform from planning to go-live",
      "• Deliver Adobe-recommended best practices, tips, and documentation",
      "• Point teams to the right tools at each migration phase"
    ],
    expandableSections: [
      {
        title: "Onboarding Journey Steps",
        content: [
          "1. Login to Admin Console — System admin sets up user access",
          "2. Assign team members to Cloud Manager product profiles in Admin Console",
          "3. Setup cloud resources in Cloud Manager (programs, environments)",
          "4. Assign team members to AEMaaCS product profiles in Admin Console",
          "5a. Access Cloud Manager Git repositories and development instances",
          "5b. Access AEM Author instance for content work"
        ],
        type: "list"
      },
      {
        title: "Lab 1-1: Creating a Project in CAM",
        content: [
          "1. Login to Adobe Experience Cloud (experience.adobe.com)",
          "2. Click on the Experience Manager card",
          "3. Click 'Launch' from the Cloud Acceleration Manager card",
          "4. Click 'Create project' from the CAM landing page",
          "5. Enter a Name and Description for your project, then click Create",
          "6. The project is created and displayed on the CAM landing page",
          "7. Click the project card to enter and view the project landing page"
        ],
        type: "list"
      },
      {
        title: "Admin Console — System Administrator Access",
        content: [
          "Access Admin Console at: https://adminconsole.adobe.com",
          "Look for the welcome email from Adobe with your organization access",
          "Login with your Adobe ID to see the Overview page",
          "Switch organizations via the top-right organization selector",
          "Verify admin role: Users → Administrators → search your email",
          "ADMIN ROLE column should show 'System' to confirm system admin access"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "Admin Console",
        content: "Adobe Admin Console (adminconsole.adobe.com) — centralized platform for administering Adobe product licenses, users, and permissions across an organization"
      },
      {
        text: "System Administrator",
        content: "The first user who sets up AEMaaCS for an organization — responsible for provisioning cloud resources and assigning users to roles during onboarding"
      }
    ],
    backgroundColor: "from-teal-600 via-emerald-600 to-cyan-700",
    estimatedTime: 2
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SECTION 2 — CLOUD MANAGER (Slides 6–14)
  // Source: Overview of Cloud Manager.txt + Improved_Overview_of_Cloud_Manager.txt
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 6,
    title: "Cloud Manager — Introduction",
    subtitle: "The Command Center of AEM as a Cloud Service",
    content: [
      "Cloud Manager is the primary management tool for AEMaaCS:",
      "• Manages environments, code quality, and CI/CD pipelines",
      "• Enforces best practices through automated pipelines and quality gates",
      "• Provides governance, security scanning, and operational visibility",
      "• Enables teams to safely and efficiently deploy AEM applications"
    ],
    expandableSections: [
      {
        title: "What Cloud Manager Manages",
        content: [
          "Programs — Top-level organizational unit containing environments and pipelines",
          "Environments — Dev, Stage, and Production AEM instances",
          "Pipelines — Automated CI/CD workflows for code deployment",
          "Repositories — Git source code repositories",
          "Users & Permissions — Role-based access via Admin Console integration"
        ],
        type: "list"
      },
      {
        title: "Core Capabilities",
        content: [
          "CI/CD Automation: Build, test, and deploy code automatically",
          "Code Quality Gates: SonarQube scans and OakPAL checks before every deployment",
          "Performance Testing: Automated load and reliability tests in staging",
          "Security Scanning: Vulnerability detection in the deployment pipeline",
          "Environment Monitoring: Real-time observability of all AEM environments",
          "Self-Service Operations: Developers can manage environments without Adobe support"
        ],
        type: "list"
      },
      {
        title: "How Permissions Work",
        content: [
          "Cloud Manager uses role-based access control (RBAC)",
          "Roles are assigned through Adobe Admin Console product profiles",
          "4 primary roles: Business Owner, Program Manager, Deployment Manager, Developer",
          "Each role governs which features and actions are available in Cloud Manager",
          "For example: only Deployment Manager can run pipelines and access Git repos"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "KPI",
        content: "Key Performance Indicators — metrics (like response time, error rate, page views) that measure the health and performance of an AEM environment"
      },
      {
        text: "CI/CD",
        content: "Continuous Integration / Continuous Deployment — automated practice of building, testing, and deploying code changes frequently and reliably"
      }
    ],
    backgroundColor: "from-emerald-600 via-teal-600 to-cyan-600",
    estimatedTime: 2
  },

  {
    id: 7,
    title: "User Roles & Responsibilities",
    subtitle: "Role-Based Access Control in Cloud Manager",
    content: [
      "Cloud Manager defines 4 primary user roles:",
      "Each role groups together specific permissions for different responsibilities",
      "Roles govern which features and actions are available to a user",
      "Setting KPIs, running pipelines, and accessing Git require specific roles"
    ],
    expandableSections: [
      {
        title: "💼 Business Owner",
        content: [
          "Defines Key Performance Indicators (KPIs) for programs",
          "Approves production deployments before they go live",
          "Overrides important 3-tier failures when necessary",
          "Has the highest authority in deployment decisions",
          "Typically: VP of Engineering, Director of Digital, CTO"
        ],
        type: "list"
      },
      {
        title: "📋 Program Manager",
        content: [
          "Performs team setup and manages user access",
          "Reviews program status and monitors KPI dashboards",
          "Views environment health and deployment metrics",
          "Can approve important 3-tier failures when necessary",
          "Typically: Project Manager, Delivery Manager, Scrum Master"
        ],
        type: "list"
      },
      {
        title: "🚀 Deployment Manager",
        content: [
          "Configures, edits, and runs CI/CD pipelines",
          "Executes staging and production deployments",
          "Manages Git repository access and settings",
          "Approves important 3-tier failures when necessary",
          "Typically: DevOps Engineer, Release Manager, Senior Developer"
        ],
        type: "list"
      },
      {
        title: "👨‍💻 Developer",
        content: [
          "Develops and tests custom application code",
          "Accesses Git repositories for code commits and branches",
          "Views deployment status and pipeline execution logs",
          "Reviews code quality reports from SonarQube",
          "Typically: AEM Developer, Frontend Developer, Full-Stack Engineer"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Complete Cloud Manager Roles Reference",
        content: `ROLE                   DESCRIPTION
─────────────────────────────────────────────────────────────────────
Business Owner         Defines KPIs, approves production deployments,
                       overrides critical 3-tier failures.

Program Manager        Team setup, status reviews, KPI monitoring,
                       can approve 3-tier failures.

Deployment Manager     Runs deployments, edits CI/CD pipelines,
                       manages Git repos, approves 3-tier failures.

Developer              Develops/tests code, views deployment status,
                       accesses Git for commits.

Content Author         Does not interact with Cloud Manager directly.
                       May use the Cloud Manager program switcher to
                       access AEM author environments.

Customer Success       Supports AMS customers, executes deployments
Engineer (CSE)         that require CSE oversight.

─────────────────────────────────────────────────────────────────────
Note: One user can hold multiple roles simultaneously.`,
        type: "text"
      }
    ],
    tooltips: [
      {
        text: "3-tier failures",
        content: "Critical pipeline failures in Cloud Manager that affect code quality, security, or performance thresholds — must be reviewed and approved or overridden before deployment continues"
      },
      {
        text: "CSE",
        content: "Customer Success Engineer — Adobe-side role that supports AMS (Adobe Managed Services) customers and can execute deployments requiring oversight"
      }
    ],
    backgroundColor: "from-teal-700 via-emerald-700 to-cyan-600",
    estimatedTime: 3
  },

  {
    id: 8,
    title: "Admin Console — Profile Setup",
    subtitle: "Assigning Cloud Manager Roles to Users",
    content: [
      "Cloud Manager roles are managed entirely through Adobe Admin Console",
      "Admins create product profiles and assign users or user groups to them",
      "Each of the 4 roles requires a distinct product profile in Admin Console",
      "Profiles must be created under the AEM Managed Services product context"
    ],
    expandableSections: [
      {
        title: "Creating a New Product Profile (Steps 1–6)",
        content: [
          "1. Log in to Admin Console at https://adminconsole.adobe.com",
          "2. Click the Overview tab → find and click your product in 'Products and Services'",
          "3. On the Products tab, click the environment for which you want to add profiles",
          "4. On the Product Profiles tab, click 'New Profile'",
          "5. Provide: Profile Name, Display Name, Description, and User Notifications settings",
          "6. Click 'Done' to save the new profile"
        ],
        type: "list"
      },
      {
        title: "Assigning Profiles to Users (Steps 1–5)",
        content: [
          "1. Log in to Admin Console at https://adminconsole.adobe.com",
          "2. Choose the Users tab from the top navigation",
          "3. Search for the user by email, username, or name",
          "4. Click the user name to open their details",
          "5. Under 'Products', click the plus (+) button → select the product profile to assign",
          "Note: If user already has roles, the '+' becomes a pencil (edit) icon"
        ],
        type: "list"
      },
      {
        title: "Assigning Profiles to User Groups",
        content: [
          "1. In the Users tab, select 'User Groups' from the left navigation panel",
          "2. Click on the desired user group to open its details",
          "3. Select the 'Assigned Product Profiles' tab",
          "4. Click 'Assign Product Profile' to add a profile to the group",
          "Benefits: Assign roles to an entire team at once instead of user by user"
        ],
        type: "list"
      },
      {
        title: "Recommended Profile Names (Table 3.2)",
        content: [
          "Business Owner → Display: LCM_BUSINESS_OWNER_ROLE_PROFILE → Name: Cloud Manager - Business Owner Role",
          "Deployment Manager → Display: CM_DEPLOYMENT_MANAGER_ROLE_PROFILE → Name: Cloud Manager - Deployment Manager Role",
          "Developer → Display: CM_DEVELOPER_ROLE_PROFILE → Name: Cloud Manager - Developer Role",
          "Program Manager → Display: CM_PROGRAM_MANAGER_ROLE_PROFILE → Name: Cloud Manager - Program Manager Role"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Cloud Manager Roles — Recommended Profile Name Reference",
        code: `# Cloud Manager Product Profile Names (Admin Console)
# Use these when creating profiles under AEM Managed Services product

# Business Owner Role
DISPLAY_NAME="LCM_BUSINESS_OWNER_ROLE_PROFILE"
PROFILE_NAME="Cloud Manager - Business Owner Role"

# Deployment Manager Role
DISPLAY_NAME="CM_DEPLOYMENT_MANAGER_ROLE_PROFILE"
PROFILE_NAME="Cloud Manager - Deployment Manager Role"

# Developer Role
DISPLAY_NAME="CM_DEVELOPER_ROLE_PROFILE"
PROFILE_NAME="Cloud Manager - Developer Role"

# Program Manager Role
DISPLAY_NAME="CM_PROGRAM_MANAGER_ROLE_PROFILE"
PROFILE_NAME="Cloud Manager - Program Manager Role"

# ──────────────────────────────────────────────────────────────
# Using Adobe I/O CLI to verify Cloud Manager user access
# ──────────────────────────────────────────────────────────────

# Install Adobe I/O CLI
npm install -g @adobe/aio-cli

# Install Cloud Manager plugin
aio plugins:install @adobe/aio-cli-plugin-cloudmanager

# List current program users (requires Deployment Manager or higher)
aio cloudmanager:list-programs`
      }
    ],
    tooltips: [
      {
        text: "Product Profile",
        content: "A named configuration in Adobe Admin Console that bundles specific permissions — users assigned to a profile inherit all its associated Cloud Manager role permissions"
      },
      {
        text: "AEM Managed Services",
        content: "The product context in Adobe Admin Console under which Cloud Manager role profiles must be created for proper permission assignment"
      }
    ],
    backgroundColor: "from-cyan-700 via-teal-600 to-emerald-600",
    estimatedTime: 2
  },

  {
    id: 9,
    title: "CI/CD Pipelines — Overview",
    subtitle: "Automating Quality, Testing, and Deployment",
    content: [
      "A CI/CD pipeline in Cloud Manager builds code and deploys it to an environment",
      "Pipelines enforce Adobe coding best practices through automated quality gates",
      "Two primary pipeline types: Production and Non-Production",
      "To configure a pipeline you must define: trigger, deployment parameters, performance tests"
    ],
    expandableSections: [
      {
        title: "Production Pipelines",
        content: [
          "Purpose: Deploy source code to production via staging first",
          "Steps: Build → Package → Test → Validate → Deploy to all staging environments",
          "Requirement: Can only be added once production AND staging environments exist",
          "Includes: Automated performance testing, security scans, and CSE oversight option",
          "Result: Code goes live in production only after passing all quality gates"
        ],
        type: "list"
      },
      {
        title: "Non-Production Pipelines",
        content: [
          "Purpose: Run code quality scans OR deploy to development environments",
          "Types: Code Quality Pipeline or Deployment Pipeline",
          "Use Cases: Feature branch validation, dev environment updates, PR checks",
          "No approval gate: Deployments happen automatically after quality checks",
          "Multiple allowed: You can have many non-production pipelines per environment"
        ],
        type: "list"
      },
      {
        title: "Pipeline Triggers",
        content: [
          "Manual: Deployment Manager manually starts the pipeline from Cloud Manager UI",
          "On Git Changes: Pipeline starts automatically when code is pushed to the branch",
          "Scheduled: Pipeline runs on a recurring schedule (e.g., nightly, weekly)"
        ],
        type: "list"
      },
      {
        title: "Pipeline Configuration Requirements",
        content: [
          "Define the trigger: manual, git-based, or scheduled",
          "Define production deployment parameters: approvals, load balancer options",
          "Configure performance test parameters: page sets, load weights",
          "Specify source code: repository, branch, and code path",
          "Set Important Metric Failures Behavior: Ask every time / Fail Immediately / Continue"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "SonarQube",
        content: "An open-source platform for continuous inspection of code quality — used by Cloud Manager to detect bugs, security vulnerabilities, and code smells in Java code"
      },
      {
        text: "quality gates",
        content: "Predefined thresholds in Cloud Manager that code must pass before proceeding to the next pipeline stage — includes code coverage, reliability, and security ratings"
      }
    ],
    backgroundColor: "from-emerald-700 via-teal-700 to-cyan-700",
    estimatedTime: 2
  },

  {
    id: 10,
    title: "Pipeline Steps — The Complete Flow",
    subtitle: "From Code Commit to Production Deploy (10 Steps)",
    content: [
      "A production pipeline in Cloud Manager follows 10 orchestrated steps:",
      "Starting from a release trigger all the way to production deployment",
      "Each step must succeed before proceeding to the next"
    ],
    expandableSections: [
      {
        title: "Steps 1–3: Release & Build",
        content: [
          "Step 1 — Start a Release: Deployment Manager triggers manually, via git commit, or schedule",
          "Step 2 — Create Release Tag: Cloud Manager creates a git tag with an auto-generated version (e.g. 2018.531.245527.0000001222)",
          "Step 3 — Build as Release: Cloud Manager builds the application with the newly assigned version number"
        ],
        type: "list"
      },
      {
        title: "Steps 4–7: Quality Checks & Staging",
        content: [
          "Step 4 — Evaluate Code Quality: SonarQube scans source code and provides a quality summary",
          "Step 5 — Store Versioned Artifacts: Release artifacts stored for later use in deployment steps",
          "Step 6 — Deploy to AMS AEM Staging: Release artifact automatically deployed to the staging environment",
          "Step 7 — Trigger Automated Tests: Cloud Manager runs performance and security tests on the staged artifact"
        ],
        type: "list"
      },
      {
        title: "Steps 8–10: Production Deployment",
        content: [
          "Step 8 — Production Deployment Trigger: After automated tests pass, Cloud Manager initiates production deployment",
          "Step 9 — Get Artifacts to Deploy: Cloud Manager retrieves the stored release artifacts from step 5",
          "Step 10 — Deploy Artifacts to Production: Release artifacts are deployed to the production environment ✅"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "ascii",
        description: "CI/CD Pipeline — 10-Step Process",
        asciiContent: `┌───────────────────────────────────────────────────────────────────┐
│                CI/CD PIPELINE — 10-STEP FLOW                      │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  [1] Start Release      → Deployment Manager / Git / Schedule     │
│         │                                                         │
│         ▼                                                         │
│  [2] Create Git Tag     → Auto-version: 2018.531.245527.000       │
│         │                                                         │
│         ▼                                                         │
│  [3] Build Application  → Compiled with version number            │
│         │                                                         │
│         ▼                                                         │
│  [4] Evaluate Code      → SonarQube scan & quality summary        │
│      Quality            (MUST PASS to continue)                   │
│         │                                                         │
│         ▼                                                         │
│  [5] Store Artifacts    → Versioned artifacts saved to storage    │
│         │                                                         │
│         ▼                                                         │
│  [6] Deploy to Staging  → Auto-deploy to AMS AEM Staging          │
│         │                                                         │
│         ▼                                                         │
│  [7] Automated Tests    → Performance & Security tests run        │
│         │                                                         │
│         ▼                                                         │
│  [8] Prod Trigger       → Start production deployment flow        │
│         │                                                         │
│         ▼                                                         │
│  [9] Retrieve Artifacts → Pull stored artifacts from step [5]     │
│         │                                                         │
│         ▼                                                         │
│ [10] Deploy to PROD     → Artifacts deployed to Production ✅     │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘`
      }
    ],
    tooltips: [
      {
        text: "release tag",
        content: "A Git tag created automatically by Cloud Manager to mark a specific commit as a release, using an auto-generated version number format: YYYY.DDD.HHMMSS.XXXXXXXXXX"
      },
      {
        text: "artifact",
        content: "A versioned, deployable package produced by the build process — in AEM this is typically a .zip content package or Maven build output ready for deployment"
      }
    ],
    backgroundColor: "from-teal-700 via-cyan-700 to-emerald-700",
    estimatedTime: 3
  },

  {
    id: 11,
    title: "Pipeline Variants Compared",
    subtitle: "Full-Stack, Front-End, and Web Tier Config",
    content: [
      "Beyond Production vs Non-Production, pipelines differ by code type:",
      "🏗️ Full-Stack — deploys everything at once (back-end + front-end + Dispatcher)",
      "🎨 Front-End — deploys client-side code independently (faster!)",
      "🌐 Web Tier Config — deploys only HTTPD/Dispatcher configurations"
    ],
    expandableSections: [
      {
        title: "🏗️ Full-Stack Pipelines",
        content: [
          "Deploys: Back-end (Java/OSGi), Front-end (JS/CSS/fonts), and Dispatcher configs together",
          "Back-End Code: Immutable content — Java bundles, OSGi configs, repoinit, mutable content",
          "Front-End Code: Client libraries — JavaScript, CSS, fonts packaged as AEM clientlibs",
          "Web Tier Config: HTTPD/Dispatcher configurations (if no Web Tier pipeline exists)",
          "Restriction: Only ONE full-stack pipeline per environment at any time",
          "Restriction: Requires Deployment Manager role to configure or run",
          "Use when: Front-end + back-end must be deployed simultaneously"
        ],
        type: "list"
      },
      {
        title: "🎨 Front-End Pipelines",
        content: [
          "Deploys: Front-end code builds — client-side UI applications independently",
          "Output: Deployed to the AEM distribution layer as a theme (new theme version)",
          "Speed: Much faster than full-stack — no Java compilation",
          "Flexibility: Supports multiple, concurrent front-end pipelines per environment",
          "Benefit: Enables front-end developers to work independently from back-end releases",
          "Use when: Iterating on UI/design without touching Java code"
        ],
        type: "list"
      },
      {
        title: "🌐 Web Tier Config Pipelines",
        content: [
          "Deploys: HTTPD/Dispatcher configurations only — no application code",
          "Speed: Deploys in minutes — fastest pipeline variant",
          "Use Case: Update caching rules, security filters, or URL rewrites without a full deployment",
          "Impact on Full-Stack: If a Web Tier Config pipeline exists, the Full-Stack pipeline IGNORES Dispatcher config",
          "Supports multiple pipelines for different environments"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Pipeline Types Reference Table (Table 3.4)",
        content: `PIPELINE TYPE     | DEPLOYMENT/QA | SOURCE CODE   | PURPOSE                           | NOTES
──────────────────────────────────────────────────────────────────────────────────────────────
Prod/Non-Prod     | Deployment    | Full-Stack    | Deploys back-end + front-end +    | Use when front-end and
                  |               |               | HTTPD/Dispatcher configs together | server code go together
──────────────────────────────────────────────────────────────────────────────────────────────
Prod/Non-Prod     | Deployment    | Front-End     | Deploys client-side UI apps       | Multiple concurrent
                  |               |               | independently from server code    | pipelines supported
                  |               |               |                                   | Much faster deployments
──────────────────────────────────────────────────────────────────────────────────────────────
Prod/Non-Prod     | Deployment    | Web Tier      | Deploys HTTPD/Dispatcher          | Deploys in minutes
                  |               | Config        | configurations only               |
──────────────────────────────────────────────────────────────────────────────────────────────
Non-Prod only     | Code Quality  | Full-Stack    | Runs quality scans on full-stack  | Supports multiple
                  |               |               | code without any deployment       | pipelines
──────────────────────────────────────────────────────────────────────────────────────────────
Non-Prod only     | Code Quality  | Front-End     | Runs quality scans on front-end   | Supports multiple
                  |               |               | code without any deployment       | pipelines
──────────────────────────────────────────────────────────────────────────────────────────────
Non-Prod only     | Code Quality  | Web Tier      | Runs quality scans on Dispatcher  | Supports multiple
                  |               | Config        | configurations — no deployment    | pipelines`,
        type: "text"
      }
    ],
    tooltips: [
      {
        text: "Dispatcher",
        content: "An Apache web server module that acts as a caching and load-balancing layer in front of AEM publish instances — critical for performance and security"
      },
      {
        text: "clientlibs",
        content: "Client Libraries — AEM's mechanism for packaging and serving JavaScript and CSS assets, with support for minification, concatenation, and dependency management"
      }
    ],
    backgroundColor: "from-emerald-600 via-cyan-700 to-teal-700",
    estimatedTime: 2
  },

  {
    id: 12,
    title: "Infrastructure & Service Monitoring",
    subtitle: "Three Layers of AEMaaCS Observability",
    content: [
      "AEMaaCS provides 24/7 monitoring across three distinct layers:",
      "🌐 External Availability — end-user and CDN-level monitoring",
      "🔧 Internal Module Monitoring — architectural subsystem health",
      "📊 Customer Observability — application performance via New Relic",
      "Hundreds of cloud-native monitors run continuously, 365 days a year"
    ],
    expandableSections: [
      {
        title: "🌐 External Availability — Service Edge & Custom",
        content: [
          "Service Edge Monitoring: Available ONLY for production environments",
          "Service Edge: Metrics are used to calculate the customer's SLA",
          "Service Edge: 5 distinct monitoring locations close to the chosen region",
          "Service Edge: Takes both AEM environment runtime AND AEMaaCS CDN into account",
          "Site unavailability triggers alerts and engages Adobe's on-call support teams",
          "Custom Monitoring: Customers can add up to 5 distinct web property URLs",
          "Custom: URLs must be valid and return HTTP 200 response codes",
          "Custom: Supports customers who bring their own CDN in front of Adobe's CDN"
        ],
        type: "list"
      },
      {
        title: "🔧 Internal Module Monitoring — Subsystem Health",
        content: [
          "CPU iowait percentage does not exceed defined thresholds",
          "Instance redeployments do not exceed a certain frequency",
          "Disk usage stays below defined thresholds",
          "Author repository size stays within specified bounds",
          "Backup operations complete successfully",
          "Database health and performance are continuously checked",
          "AEM Cloud services behave as expected (no blocked replication queues)",
          "Additional checks for Forms-provisioned environments",
          "Goal: Detect and repair issues automatically before availability is impacted"
        ],
        type: "list"
      },
      {
        title: "📊 Customer Observability — New Relic APM",
        content: [
          "Customers have access to the New Relic Application Performance Monitoring suite",
          "Provides real-time performance data collected and charted for analysis",
          "JVM performance metrics: heap usage, garbage collection, thread counts",
          "Transaction time for Java-based requests",
          "Background external calls: outbound HTTP requests from AEM",
          "Database call performance and query timing",
          "Use for: troubleshooting bottlenecks, identifying slow queries, checking error rates"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "SLA",
        content: "Service Level Agreement — a commitment from Adobe specifying the guaranteed uptime percentage (e.g., 99.9%) for production AEMaaCS environments, measured via Service Edge Monitoring"
      },
      {
        text: "New Relic",
        content: "A cloud-based observability platform providing Application Performance Monitoring (APM), infrastructure monitoring, and real-time analytics integrated with AEMaaCS"
      },
      {
        text: "APM",
        content: "Application Performance Monitoring — monitoring of software applications to detect and diagnose performance issues, measuring response times, error rates, and resource utilization"
      }
    ],
    backgroundColor: "from-teal-600 via-emerald-700 to-cyan-600",
    estimatedTime: 2
  },

  {
    id: 13,
    title: "Cloud Manager API & CLI",
    subtitle: "Automating AEMaaCS Operations Programmatically",
    content: [
      "Cloud Manager provides a REST API and CLI for scripting and automation:",
      "• REST API: Full programmatic access to all Cloud Manager features",
      "• CLI: aio-cli-plugin-cloudmanager for terminal-based operations",
      "• Use cases: automated deployments, health polling, environment provisioning"
    ],
    expandableSections: [
      {
        title: "REST API Capabilities",
        content: [
          "Base URL: https://cloudmanager.adobe.io",
          "Example: GET https://cloudmanager.adobe.io/api/programs",
          "Create and manage environments programmatically",
          "Trigger pipeline executions remotely",
          "Monitor environment health status",
          "Manage users and permissions",
          "API is documented on the Adobe Developer website (developer.adobe.com)",
          "Authentication: Adobe I/O Console — requires API key and token",
          "Swagger spec available at GitHub: AdobeDocs/cloudmanager-api-docs"
        ],
        type: "list"
      },
      {
        title: "Adobe I/O CLI — aio-cli-plugin-cloudmanager",
        content: [
          "Install: npm install -g @adobe/aio-cli",
          "Plugin: aio plugins:install @adobe/aio-cli-plugin-cloudmanager",
          "Auth methods: Browser-based login OR service account (JWT/OAuth)",
          "List programs, pipelines, and environments from terminal",
          "Start/stop pipeline executions via script",
          "Download execution logs for analysis",
          "Perfect for: CI/CD integration, scripted maintenance tasks"
        ],
        type: "list"
      },
      {
        title: "Common Automation Use Cases",
        content: [
          "Auto-deploy on code merge: Trigger pipeline via API when PR is merged to main",
          "Health monitoring script: Poll API for environment status and alert on unhealthy state",
          "Environment lifecycle management: Spin up/down dev environments on demand",
          "Deployment reporting: Collect deployment history and generate audit reports",
          "Multi-program management: Automate operations across many Cloud Manager programs"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Cloud Manager API & CLI — Usage Examples",
        code: `# ── Cloud Manager REST API Examples ────────────────────────────────

# List all programs for an organization
curl -X GET https://cloudmanager.adobe.io/api/programs \\
  -H "x-api-key: $API_KEY" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-gw-ims-org-id: $ORG_ID" \\
  -H "Content-Type: application/json"

# Get environments for a specific program (replace PROGRAM_ID)
curl -X GET https://cloudmanager.adobe.io/api/program/PROGRAM_ID/environments \\
  -H "x-api-key: $API_KEY" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-gw-ims-org-id: $ORG_ID"

# Start a pipeline execution (replace PROGRAM_ID and PIPELINE_ID)
curl -X PUT https://cloudmanager.adobe.io/api/program/PROGRAM_ID/pipeline/PIPELINE_ID/execution \\
  -H "x-api-key: $API_KEY" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-gw-ims-org-id: $ORG_ID"


# ── Adobe I/O CLI Examples ───────────────────────────────────────────

# Install CLI and Cloud Manager plugin
npm install -g @adobe/aio-cli
aio plugins:install @adobe/aio-cli-plugin-cloudmanager

# Authenticate
aio auth:login

# List programs
aio cloudmanager:list-programs

# List pipelines for a program
aio cloudmanager:list-pipelines PROGRAM_ID

# Start a specific pipeline
aio cloudmanager:start-pipeline PROGRAM_ID PIPELINE_ID

# List all environments
aio cloudmanager:list-environments PROGRAM_ID

# Download pipeline execution logs
aio cloudmanager:download-logs PROGRAM_ID PIPELINE_ID EXECUTION_ID`
      }
    ],
    tooltips: [
      {
        text: "REST API",
        content: "Representational State Transfer API — a standard HTTP-based interface for interacting with Cloud Manager programmatically using GET, POST, PUT, DELETE operations"
      },
      {
        text: "Adobe I/O",
        content: "Adobe's developer platform (developer.adobe.com) providing APIs, SDKs, CLI tools, and event infrastructure for building integrations with Adobe products"
      },
      {
        text: "Swagger",
        content: "An open-source framework for documenting REST APIs — Adobe provides a Swagger/OpenAPI spec for the Cloud Manager API that can be used to generate client code"
      }
    ],
    backgroundColor: "from-cyan-600 via-teal-700 to-emerald-700",
    estimatedTime: 3
  },

  {
    id: 14,
    title: "Git, Code Quality & Environment Variables",
    subtitle: "Governance, Best Practices & Cloud-Native Configuration",
    content: [
      "Cloud Manager enforces quality and enables cloud-native configuration:",
      "📦 Git Repositories — built-in source control management",
      "🔍 Code Quality Rules — SonarQube and OakPAL automated scanning",
      "🔐 Environment Variables — secure, flexible runtime configuration",
      "These capabilities reduce production risk and improve maintainability"
    ],
    expandableSections: [
      {
        title: "📦 Git Repository Management",
        content: [
          "Cloud Manager provides built-in Git repositories for source control",
          "Operations: Create, view, and delete repositories from the UI",
          "Attach repositories to one or more pipelines",
          "Support for Git submodules within repositories",
          "Best Practice: Never embed credentials in repository code",
          "Best Practice: Use shallow submodules for performance",
          "Best Practice: Keep repository ownership and permissions clearly documented"
        ],
        type: "list"
      },
      {
        title: "🔍 Java & AEM-Specific Quality Rules (SonarQube)",
        content: [
          "Java Code Best Practices: Proper exception handling and resource cleanup",
          "Java Code Best Practices: Secure HTTP calls (avoid insecure protocols)",
          "AEM Rules: Avoid registering servlets by path (use resource type instead)",
          "AEM Rules: Avoid deprecated AEM APIs in custom code",
          "AEM Rules: Always close ResourceResolvers in finally blocks",
          "AEM Rules: Use Sling Models instead of JSP scriptlets"
        ],
        type: "list"
      },
      {
        title: "🌳 Oak Index Rules (OakPAL)",
        content: [
          "Use Lucene index definitions — Solr indexes not supported in AEMaaCS",
          "Async indexing only — synchronous indexing is prohibited",
          "Proper Tika configuration for full-text indexing of binary assets",
          "OakPAL scans custom index definitions for Cloud Service compatibility",
          "Violating index rules blocks deployment through the pipeline quality gate"
        ],
        type: "list"
      },
      {
        title: "🔐 Environment Variables & Secrets",
        content: [
          "Allow runtime configuration without changing or redeploying code",
          "Types: Environment-specific plain values OR secure secrets (encrypted at rest)",
          "Managed via: Cloud Manager UI, REST API, or aio CLI",
          "Benefits: Improved security, easier config management, faster changes",
          "Usage in OSGi configs: $[env:VARIABLE_NAME;default=fallback]",
          "Usage for secrets: $[secret:SECRET_NAME]",
          "Variables are environment-specific — dev, stage, and prod can have different values"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Cloud-Native OSGi Configuration with Environment Variables",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Cloud-native OSGi configuration using environment variables and secrets.
  Store in: /apps/mysite/config/ (or config.author / config.publish)
  Cloud Manager injects values at runtime per environment (dev/stage/prod).
-->
<jcr:root
  xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
  xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="sling:OsgiConfig"

  <!-- Plain environment variable with fallback default -->
  smtp.host="$[env:SMTP_HOST;default=smtp.gmail.com]"
  smtp.port="$[env:SMTP_PORT;default=587]"

  <!-- Secure secret — value never exposed in logs or UI -->
  smtp.user="$[secret:SMTP_USER]"
  smtp.password="$[secret:SMTP_PASSWORD]"

  <!-- API endpoint — different per environment -->
  api.endpoint="$[env:API_ENDPOINT;default=https://api.dev.mysite.com]"
  api.timeout="$[env:API_TIMEOUT;default=5000]"

  <!-- Feature flags via environment variables -->
  feature.enabled="$[env:FEATURE_NEW_UI;default=false]"
/>`
      }
    ],
    tooltips: [
      {
        text: "OakPAL",
        content: "Oak Plan API Library — a framework used by Cloud Manager to run package scans against AEM content packages, enforcing Oak-specific rules like index definitions and node type constraints"
      },
      {
        text: "SonarQube",
        content: "Static code analysis platform that Cloud Manager uses to evaluate Java code quality — checks for bugs, security vulnerabilities, and code smells before every deployment"
      },
      {
        text: "$[env:]",
        content: "AEM Cloud Service OSGi config syntax for referencing environment variables — $[env:VAR_NAME] for plain values, $[secret:VAR_NAME] for encrypted secrets"
      }
    ],
    backgroundColor: "from-teal-700 via-emerald-600 to-green-700",
    estimatedTime: 2
  }

]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getTotalCloudManagerSlides(): number {
  return cloudManagerSlides.length
}

export function getCloudManagerSlideEstimatedTotalTime(): number {
  return cloudManagerSlides.reduce((total, slide) => total + slide.estimatedTime, 0)
}

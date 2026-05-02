import type { Concept } from "../types"

export const pipelineVariantsConcepts: Concept[] = [
  {
    id: "cm-068",
    title: "A pipeline that builds and deploys only front-end assets (CSS, JS, images) independently from the back-end AEM code",
    reference: "What is a 'Front End Pipeline' in Cloud Manager?",
    explanation:
      "Front End Pipelines in Cloud Manager allow front-end teams to deploy CSS, JavaScript, and other front-end assets independently from the back-end AEM Java code. They run an npm/webpack build of the ui.frontend module and deploy the compiled artifacts to AEM, enabling front-end developers to iterate faster without waiting for full Maven builds or back-end deployments.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-069",
    title: "A pipeline that builds and deploys all AEM layers: OSGi bundles, content packages, Dispatcher config, and front-end assets together",
    reference: "What is the 'Full Stack Pipeline' in Cloud Manager?",
    explanation:
      "A Full Stack Pipeline deploys the entire AEM project — all Maven modules including OSGi bundles (ui.apps), JCR content (ui.content), OSGi configurations (ui.config), front-end resources (ui.frontend), and Dispatcher configuration. It is the standard deployment pipeline for teams that manage all layers together.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-070",
    title: "Full Stack deploys all AEM layers (Java + content + Dispatcher); Front End deploys only compiled CSS/JS front-end assets",
    reference: "What is the difference between a Full Stack Pipeline and a Front End Pipeline in Cloud Manager?",
    explanation:
      "The key distinction: a Full Stack Pipeline runs a complete Maven build deploying Java OSGi bundles, JCR content packages, OSGi configurations, and all other layers. A Front End Pipeline runs only an npm build (webpack/Vite) and deploys compiled CSS/JS/image assets independently. Front End Pipelines enable front-end developers to deploy faster without waiting for back-end Java builds.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-071",
    title: "When deploying only OSGi configurations, CDN rules, or log forwarding settings without changing Java code or content",
    reference: "When would you use a Config Pipeline instead of a Full Stack Pipeline?",
    explanation:
      "Config Pipelines are the right choice when the only change is in configuration files — OSGi run-mode properties, CDN traffic filter rules, log forwarding configs, or other files in the /config directory. Since they skip Maven compilation and content package deployment, they run much faster than Full Stack Pipelines. For any Java or content changes, a Full Stack Pipeline is required.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-072",
    title: "A pipeline that only runs SonarQube code quality analysis without deploying any code to any environment",
    reference: "What is a 'Code Quality Pipeline' (standalone) in Cloud Manager?",
    explanation:
      "A standalone Code Quality Pipeline in Cloud Manager runs Maven build + SonarQube analysis without deploying any code to an environment. This is useful for validating code quality on feature branches or PRs before merging, giving developers early quality feedback without consuming deployment pipeline resources or touching any AEM environment.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-073",
    title: "A Cloud Manager feature allowing external Git repositories (GitHub, GitLab, Bitbucket) to be linked to Cloud Manager pipelines",
    reference: "What is 'Connected Repositories' in Cloud Manager?",
    explanation:
      "Connected Repositories (also called External Repository support) allows Cloud Manager to link external Git repositories hosted on GitHub (cloud or enterprise), GitLab, or Bitbucket as pipeline sources. This enables teams to continue using their existing versioning and PR workflows while still leveraging Cloud Manager for CI/CD.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-074",
    title: "A validation step where Cloud Manager installs a GitHub App or webhook to verify it can access and receive events from the external repository",
    reference: "What is a 'Private Repository' validation check in Cloud Manager Connected Repositories?",
    explanation:
      "When connecting an external repository to Cloud Manager, a validation check is performed to confirm Cloud Manager can access the repository. For GitHub, this involves installing the Cloud Manager GitHub App on the repository; for other providers, a validation secret or webhook token is used. This proves ownership and grants Cloud Manager the permissions needed to clone code and receive push/PR events.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-075",
    title: "Automatic triggering of a Code Quality pipeline when a PR is opened against the configured branch, providing quality feedback before merge",
    reference: "What is 'Pull Request Validation' in Cloud Manager?",
    explanation:
      "Pull Request Validation is a Cloud Manager feature (available with Connected Repositories) that automatically triggers a Code Quality scan when a PR is opened against the configured branch. Results are reported directly back to the PR in GitHub, GitLab, or Bitbucket. This gives developers code quality feedback before merging, helping catch issues earlier in the development cycle.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-076",
    title: "A Cloud Manager pipeline for deploying code and configurations for Adobe Edge Delivery Services websites",
    reference: "What is an 'Edge Delivery Services Pipeline' in Cloud Manager?",
    explanation:
      "Edge Delivery Services (EDS) Pipelines in Cloud Manager support CI/CD for projects built on Adobe Edge Delivery Services — Adobe's high-performance, CDN-first content delivery platform. EDS projects use a GitHub-based workflow with document authoring (Google Docs/SharePoint) and can be connected to Cloud Manager for quality checks and deployment management.",
    category: "Pipeline Variants",
  },
  {
    id: "cm-077",
    title: "One Production Pipeline per program — Cloud Manager programs support exactly one Production pipeline",
    reference: "How many Production Pipelines can a Cloud Manager program have?",
    explanation:
      "Each Cloud Manager program supports exactly one Production Pipeline. This reflects the architecture where there is a single Production environment per program. A program can have multiple Non-Production pipelines (targeting Dev environments), multiple Web Tier Config pipelines, multiple Front End pipelines, and multiple Code Quality pipelines — but only one Production Pipeline.",
    category: "Pipeline Variants",
  },
]

import type { Concept } from "../types"

export const aemacsOverviewConcepts: Concept[] = [
  {
    id: "cm-001",
    title: "AEM as a Cloud Service — Adobe's fully managed, cloud-native CMS offering",
    reference: "What does AEMaaCS stand for?",
    explanation:
      "AEMaaCS stands for AEM as a Cloud Service — the latest offering of the Adobe Experience Manager product line. It is a fully managed, cloud-native CMS where Adobe handles all infrastructure, continuous updates, and scaling.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-002",
    title: "No manual upgrades — Adobe continuously and automatically deploys updates",
    reference: "What is the main benefit of AEMaaCS being 'always on the latest version'?",
    explanation:
      "Because Adobe manages continuous delivery for AEMaaCS, customers are always on the latest version — eliminating the costly and risky upgrade projects that AEM 6.x on-premise customers face every few years. Teams shift focus from maintenance to building experiences.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-003",
    title: "A built-in CDN (Content Delivery Network) managed by Adobe handles global content delivery performance",
    reference: "What handles global content delivery performance in AEMaaCS?",
    explanation:
      "AEMaaCS includes a built-in CDN (Content Delivery Network) managed by Adobe. This CDN serves content from globally distributed edge nodes closest to end users, reducing latency and improving performance without any customer-side infrastructure configuration.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-004",
    title: "Automatic auto-scaling — AEMaaCS scales resources up or down based on real-time traffic",
    reference: "How does AEMaaCS handle fluctuating traffic demands?",
    explanation:
      "AEMaaCS auto-scales its compute resources automatically based on real-time traffic demand. This eliminates the need for capacity planning and manual scaling — a major advantage over AEM 6.x on-premise where over-provisioning or under-provisioning was a constant challenge.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-005",
    title: "/apps and /libs are read-only at runtime — changes only come via CI/CD pipeline deployments",
    reference: "What does 'immutable repository' mean in AEMaaCS architecture?",
    explanation:
      "In AEMaaCS, the application code layer (/apps, /libs) is immutable — it is built into container images and cannot be modified at runtime. All code changes must go through the Cloud Manager CI/CD pipeline, which produces a new immutable container image and deploys it.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-006",
    title: "/content and /conf — the author-created, mutable repository content",
    reference: "What is the mutable content store in AEMaaCS?",
    explanation:
      "In AEMaaCS architecture, /content (pages, assets) and /conf (editable templates, policies, cloud configs) are the mutable content stores. This content survives deployments because it is stored in a persistent Azure Blob Storage / MongoDB-backed repository, separate from the immutable code layer.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-007",
    title: "Scalable cloud services that process uploaded DAM assets, replacing traditional AEM workflow processing",
    reference: "What is Asset Microservices in AEMaaCS?",
    explanation:
      "Asset Microservices in AEMaaCS use Adobe I/O Runtime to process uploaded digital assets in a massively scalable, parallel fashion. They replace the traditional AEM workflow-based processing pipeline, generating renditions (thumbnails, crops), extracting metadata, and running smart tagging automatically.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-008",
    title: "Distributing content from Author to Publish instances — replacing traditional replication agents",
    reference: "What is 'Sling Content Distribution' (SCD) used for in AEMaaCS?",
    explanation:
      "Sling Content Distribution (SCD) in AEMaaCS replaces the traditional byte-for-byte replication from Author to Publish. It is a queue-driven, push-based distribution service — more scalable and cloud-native, handling distribution to multiple publish instances automatically.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-009",
    title: "A special AEMaaCS environment for rapid code iteration without running full pipeline deployments",
    reference: "What is a Rapid Development Environment (RDE) in AEMaaCS?",
    explanation:
      "A Rapid Development Environment (RDE) is a developer-focused environment type in AEMaaCS that allows near-instant code deployment (OSGi bundles, content packages) without running a full Cloud Manager pipeline. This dramatically speeds up the feedback loop during development.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-010",
    title: "AEMaaCS runs as containers managed by Adobe; AEM 6.5 runs as a fixed Java process on a VM/server",
    reference: "How is an AEMaaCS instance fundamentally different from AEM 6.5 in terms of infrastructure?",
    explanation:
      "AEMaaCS runs as Docker containers orchestrated by Adobe on cloud infrastructure (auto-scaling, managed), while AEM 6.5 runs as a traditional Java process on a customer-managed server or AMS-managed virtual machine with fixed capacity.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-011",
    title: "Automated security scanning — vulnerability tests run continuously as part of the pipeline",
    reference: "What security capability is automatically included in AEMaaCS?",
    explanation:
      "AEMaaCS includes automated security scanning as part of the Cloud Manager CI/CD pipeline. Every deployment is scanned for common vulnerabilities and security issues, and deployments can be blocked if critical security issues are detected.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-012",
    title: "Developers focus on building features instead of managing infrastructure",
    reference: "What is the benefit of AEMaaCS's 'cloud-native architecture' for developers?",
    explanation:
      "AEMaaCS's cloud-native architecture abstracts all infrastructure management. Developers focus on building features, components, and integrations instead of spending time on server maintenance, capacity planning, operating system updates, and AEM upgrade projects.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-013",
    title: "Deep integration with Adobe Experience Cloud including Adobe Analytics",
    reference: "What analytics integrations are built into AEMaaCS?",
    explanation:
      "AEMaaCS has deep, native integration with the Adobe Experience Cloud suite, including Adobe Analytics for user behavior tracking, Adobe Target for personalization, and Adobe Campaign for marketing automation — all manageable from Cloud Manager.",
    category: "AEMaaCS Overview",
  },
  {
    id: "cm-014",
    title: "Guiding and tracking the migration journey from AEM 6.x to AEM as a Cloud Service",
    reference: "What is the Cloud Acceleration Manager (CAM) used for?",
    explanation:
      "Cloud Acceleration Manager (CAM) is Adobe's tool that helps teams plan, track, and manage every step of the migration from AEM 6.x to AEMaaCS — from readiness assessment and code analysis to go-live validation — helping organizations reach production faster.",
    category: "AEMaaCS Overview",
  },
]

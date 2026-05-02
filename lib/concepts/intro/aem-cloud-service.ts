import type { Concept } from "../types"

export const aemCloudServiceConcepts: Concept[] = [
  {
    id: "intro-095",
    category: "AEM Cloud Service",
    title: "AEMaaCS is fully managed by Adobe with auto-scaling; AEM 6.5 is self-hosted with fixed capacity",
    reference: "What is the main architectural difference between AEM as a Cloud Service and AEM 6.5?",
    explanation:
      "The fundamental difference is infrastructure model: AEM 6.5 is installed and managed by the customer (on-premise or on AMS), requiring manual upgrades and capacity planning. AEMaaCS is fully managed by Adobe — auto-scaling, automatic continuous updates, and Adobe handles all infrastructure operations.",
  },
  {
    id: "intro-096",
    category: "AEM Cloud Service",
    title: "Content in /apps and /libs that cannot be modified at runtime — read-only on running instances",
    reference: "What does 'immutable content' mean in AEM as a Cloud Service?",
    explanation:
      "In AEM as a Cloud Service, content in /apps (application code — components, templates, OSGi configs) is immutable at runtime. You cannot directly modify it on running instances. All changes must go through the Cloud Manager CI/CD pipeline, which is deployed through a new container image.",
  },
  {
    id: "intro-097",
    category: "AEM Cloud Service",
    title: "A fast, personal cloud environment for quick code iteration and testing without full pipeline runs",
    reference: "What is a Rapid Development Environment (RDE) in AEM as a Cloud Service?",
    explanation:
      "A Rapid Development Environment (RDE) in AEMaaCS is a special environment type designed for fast developer feedback. Unlike dev/stage/prod environments that require a full Cloud Manager pipeline run, RDEs accept direct code deployment in seconds, enabling rapid iteration during development.",
  },
  {
    id: "intro-098",
    category: "AEM Cloud Service",
    title: "Sling Content Distribution (SCD) — a push-based, queue-driven content distribution mechanism",
    reference: "What replaces traditional replication in AEM as a Cloud Service?",
    explanation:
      "AEM as a Cloud Service uses Sling Content Distribution (SCD) instead of the traditional byte-for-byte replication from Author to Publish. SCD is queue-driven and push-based, distributing content through a distribution service — more scalable and cloud-native than classic replication agents.",
  },
  {
    id: "intro-099",
    category: "AEM Cloud Service",
    title: "$[env:VARIABLE_NAME;default=fallback]",
    reference: "What is the syntax for referencing an environment variable in an AEMaaCS OSGi config?",
    explanation:
      "In AEM as a Cloud Service OSGi configurations (.cfg.json files), environment variables are referenced using $[env:VARIABLE_NAME;default=fallbackValue]. Secrets use $[secret:SECRET_NAME]. These are substituted by the AEMaaCS runtime when the configuration is applied.",
  },
  {
    id: "intro-100",
    category: "AEM Cloud Service",
    title: "Cloud-native, scalable services for processing DAM assets (generating renditions, metadata, etc.)",
    reference: "What is Asset Microservices in AEM as a Cloud Service?",
    explanation:
      "Asset Microservices in AEMaaCS are cloud-native (Adobe I/O Runtime-based) services for processing uploaded digital assets. They replace the traditional AEM workflow-based processing — generating renditions, extracting metadata, applying image transforms — with scalable, parallelized cloud processing that handles large volumes much faster.",
  },
]

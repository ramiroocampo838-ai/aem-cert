import type { Concept } from "../types"

export const monitoringConcepts: Concept[] = [
  {
    id: "cm-078",
    title: "System metrics monitoring (CPU, memory, disk), HTTP request metrics, and environment health status dashboards",
    reference: "What monitoring capabilities does Cloud Manager provide for AEMaaCS environments?",
    explanation:
      "Cloud Manager provides built-in monitoring dashboards for AEMaaCS environments that show: system resource metrics (CPU, heap memory, disk utilization), HTTP request metrics (request rate, error rate, response time), and environment health status. These help identify resource pressure and performance issues. More detailed APM observability typically uses additional tools like New Relic or Datadog.",
    category: "Monitoring",
  },
  {
    id: "cm-079",
    title: "A web-based interface for inspecting AEM runtime details: OSGi bundles, Sling servlets, request logs, and query debugging per environment",
    reference: "What is the 'AEM Developer Console' in Cloud Manager?",
    explanation:
      "The AEM Developer Console (accessible from Cloud Manager for each environment) is a web-based tool for runtime introspection of AEM. Developers can inspect OSGi bundle state, Sling component resolution, active servlet bindings, request/response details, query debugging (explain queries), and replication queue status. It is available to users with the Cloud Manager Developer role and is invaluable for debugging AEM behavior in real environments.",
    category: "Monitoring",
  },
  {
    id: "cm-080",
    title: "A Cloud Manager feature that streams AEM environment logs (access, error, CDN) to an external log management service (Splunk, Datadog, etc.)",
    reference: "What is 'Log Forwarding' in AEM as a Cloud Service?",
    explanation:
      "Log Forwarding is an AEMaaCS feature that lets customers stream their AEM environment logs (AEM application logs, access logs, CDN logs, Dispatcher logs) in near-real-time to external log management platforms. Supported destinations include Splunk, Datadog, Azure Blob Storage, Amazon S3, and Elasticsearch/OpenSearch. Configuration is deployed via a Config Pipeline using a YAML file in the /config directory.",
    category: "Monitoring",
  },
  {
    id: "cm-081",
    title: "Via the Cloud Manager UI (download logs per environment/service/date), via cloud manager CLI, or via log forwarding to external tools",
    reference: "How can developers access log files for AEMaaCS environments?",
    explanation:
      "In AEMaaCS, developers (with Cloud Manager Developer role) can access logs in multiple ways: (1) Cloud Manager UI — download log files per environment, service (Author/Publish/Dispatcher/CDN), and date; (2) Cloud Manager CLI or API — programmatic access; (3) AEM Developer Console — view recent request logs interactively; (4) Log Forwarding — continuous streaming to external platforms like Splunk or Datadog for real-time observability.",
    category: "Monitoring",
  },
  {
    id: "cm-082",
    title: "Configurable notifications that alert users when environment metrics (error rate, response time) breach defined thresholds",
    reference: "What are 'Custom Alerts' in Cloud Manager?",
    explanation:
      "Custom Alerts in Cloud Manager allow users to configure notifications for when environment performance metrics breach defined KPI thresholds — such as page error rate exceeding a percentage or response time exceeding a target. Alerts can be sent via email, and are typically set up by Business Owners who define the KPI targets for the program. This helps teams proactively respond to production degradation.",
    category: "Monitoring",
  },
  {
    id: "cm-083",
    title: "An automated page quality check that runs Lighthouse tests (performance, SEO, accessibility, best practices) against published pages",
    reference: "What is 'Content Audit' in Cloud Manager?",
    explanation:
      "Content Audit in Cloud Manager adds a Lighthouse-based quality testing step to pipelines. It runs Google Lighthouse against configured URLs on the deployed Stage environment, evaluating page quality across: Performance (Core Web Vitals), SEO, Accessibility (WCAG), and Best Practices. Score results are shown in the pipeline execution and compared against configurable thresholds; failures below thresholds can be set as Important or Critical gates.",
    category: "Monitoring",
  },
  {
    id: "cm-084",
    title: "A pipeline report showing Lighthouse scores (performance, SEO, accessibility, best practices) compared across pipeline runs to track trends",
    reference: "What is 'Experience Audit' (previously Content Audit) in Cloud Manager reporting?",
    explanation:
      "Experience Audit (formerly Content Audit) in Cloud Manager provides a trend report of Lighthouse scores over pipeline runs. It shows how Performance, SEO, Accessibility, and Best Practices scores change across deployments for configured pages. This helps teams detect quality regressions introduced by code changes and track continuous improvement in page quality over time.",
    category: "Monitoring",
  },
  {
    id: "cm-085",
    title: "A built-in APM integration where Adobe provides New Relic One access for monitoring AEM application performance in detail",
    reference: "What is the 'New Relic' integration available in AEM as a Cloud Service?",
    explanation:
      "AEM as a Cloud Service includes a managed New Relic One integration that Adobe provisions automatically. It provides detailed APM monitoring of AEM Author and Publish services: JVM heap/GC metrics, transaction response times, Sling request traces, error tracking, and custom dashboards. Customers can access their New Relic sub-account through Cloud Manager's environment monitoring section without needing a separate New Relic subscription.",
    category: "Monitoring",
  },
]

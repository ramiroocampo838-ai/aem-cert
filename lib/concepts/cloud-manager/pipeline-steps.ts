import type { Concept } from "../types"

export const pipelineStepsConcepts: Concept[] = [
  {
    id: "cm-057",
    title: "Build → Code Quality → Deploy to Stage → Testing → Go Live Approval → Deploy to Production",
    reference: "What is the order of steps in a standard Cloud Manager Production Pipeline?",
    explanation:
      "A standard Cloud Manager Production Pipeline follows: (1) Build — Maven compile, unit tests, packaging; (2) Code Quality — SonarQube analysis; (3) Deploy to Stage — deploy artifact to Stage; (4) Testing — product functional, custom functional, UI, and/or performance tests on Stage; (5) Go Live Approval — manual gate; (6) Deploy to Production — Blue/Green deployment.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-058",
    title: "Product Functional Tests, Custom Functional Tests, Custom UI Tests, and Performance Tests",
    reference: "What testing types can be configured in Cloud Manager pipeline test steps?",
    explanation:
      "Cloud Manager supports four categories of post-deployment testing: (1) Product Functional Tests — Adobe-provided tests for core AEM features; (2) Custom Functional Tests — customer-written HTTP tests in Docker; (3) Custom UI Tests — browser automation (Selenium, Cypress, Playwright) in Docker; (4) Performance Tests — load simulation against Stage.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-059",
    title: "Page response times, error rates, CPU usage, bandwidth, and page views per minute under simulated load on Stage",
    reference: "What does Cloud Manager's Performance Testing step measure?",
    explanation:
      "Cloud Manager's Performance Testing step simulates real user traffic against the Stage environment. It measures: average and 95th-percentile page response time, peak page views per minute, error rate (%), CPU utilization spike, and bandwidth consumption. Results are compared against KPI thresholds set by the Business Owner, and failures can block the pipeline.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-060",
    title: "Customer-written HTTP/REST tests packaged in a Docker image that run against the deployed AEM environment after deployment",
    reference: "What is a 'Custom Functional Test' in a Cloud Manager pipeline?",
    explanation:
      "Custom Functional Tests are post-deployment test suites written by the customer's team. They are packaged as Docker images and executed by Cloud Manager against the deployed Stage environment. They typically use HTTP testing libraries (e.g., REST Assured, Apache HttpClient) to call AEM APIs and page endpoints, validating application-specific behavior beyond what Adobe's product tests cover.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-061",
    title: "Any browser-automated test framework runnable in a Docker container, commonly Selenium WebDriver or Cypress",
    reference: "What testing frameworks do Cloud Manager Custom UI Tests support?",
    explanation:
      "Cloud Manager Custom UI Tests are framework-agnostic — they are packaged as Docker images and can use any browser automation framework inside the container: Selenium WebDriver, Cypress, Playwright, WebdriverIO, or others. Cloud Manager provides the Selenium Grid for browser execution. The customer's Docker image runs its tests against the deployed Stage AEM environment.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-062",
    title: "A mandatory test step where Adobe runs its own functional test suite against the deployed AEM environment to verify core functionality",
    reference: "What is the 'Product Functional Test' step in Cloud Manager?",
    explanation:
      "Product Functional Tests are a suite of automated tests developed and maintained by Adobe. They run automatically on the deployed Stage environment, verifying that core AEM product features (page authoring, asset management, workflows) function correctly after the customer's code is deployed. These tests protect against regressions in fundamental AEM capabilities.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-063",
    title: "The pipeline stops at the failed step; the previously deployed version remains active; the team must fix and re-run",
    reference: "What happens if a Pipeline step fails mid-execution in Cloud Manager?",
    explanation:
      "When a pipeline step fails, the pipeline execution is stopped immediately at that step. Environments are left in their last known-good state (the previous successful deployment remains active). Cloud Manager notifies the team via the UI and configured channels. The team must investigate the failure, push a fix, and trigger a new pipeline run.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-064",
    title: "Allows scheduling the Production deployment for a specific future date/time rather than running immediately after Stage testing",
    reference: "What is the 'Schedule' option for a Production Pipeline deployment in Cloud Manager?",
    explanation:
      "After Stage testing is complete, instead of immediately approving Production deployment, an authorized user (Business Owner or Deployment Manager) can schedule it for a specific future date and time. This enables teams to plan go-lives during low-traffic maintenance windows without needing to be online at that exact moment — Cloud Manager automatically triggers the Production deployment at the scheduled time.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-065",
    title: "A specialized pipeline for deploying OSGi configurations and environment-specific settings without a full code build",
    reference: "What is a 'Config Pipeline' in Cloud Manager?",
    explanation:
      "Config Pipelines (Configuration Pipelines) deploy only configuration files from the repository's /config directory: OSGi run-mode configurations, CDN traffic filtering rules, log forwarding configurations, and other environment-specific settings. They skip the full Maven build and don't deploy bundles or content — making them fast and ideal for operational configuration updates.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-066",
    title: "A Deployment Manager or Business Owner can click 'Override' to acknowledge the failure and continue the pipeline past the Important gate",
    reference: "How does Cloud Manager handle an 'Important' quality gate override?",
    explanation:
      "When a pipeline pauses at an 'Important' quality gate failure, the Cloud Manager UI presents override options for users with the Deployment Manager or Business Owner role. They can 'Override and Continue' (accepting the risk) or 'Reject and Stop' (fixing the issue first). The override decision is logged in pipeline execution history for auditing.",
    category: "Pipeline Steps",
  },
  {
    id: "cm-067",
    title: "Step-by-step execution time, test results (pass/fail counts), SonarQube quality gate result, performance scores, and deployment status",
    reference: "What metrics are shown in the Cloud Manager pipeline execution detail view?",
    explanation:
      "The Cloud Manager pipeline execution detail view provides granular visibility into each pipeline run: duration per step, Maven build outcome and unit test count, SonarQube quality gate scores (Reliability, Security, Maintainability, coverage %), functional test pass/fail counts, performance test KPI results (response time, error rate), and per-environment deployment confirmation. Log files for each step can be downloaded for deeper debugging.",
    category: "Pipeline Steps",
  },
]

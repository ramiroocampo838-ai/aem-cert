import type { Concept } from "../types"

export const cicdPipelinesConcepts: Concept[] = [
  {
    id: "cm-025",
    title: "A pipeline that deploys code from Git through stage to the production environment with quality gates",
    reference: "What is a 'Production pipeline' in Cloud Manager?",
    explanation:
      "A Production pipeline in Cloud Manager deploys code all the way to production. It follows the sequence: build code → run code quality checks → deploy to Stage → manual approval step → deploy to Production. This ensures code is validated on stage before reaching production.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-026",
    title: "Unit test coverage, code quality via SonarQube, and security vulnerability scanning",
    reference: "What code quality checks does Cloud Manager run in a pipeline?",
    explanation:
      "Cloud Manager's CI/CD quality gates include: SonarQube static code analysis, unit test execution with code coverage thresholds, custom AEM code quality rules (package structure, content classification), and security vulnerability scanning. Builds fail if critical thresholds are not met.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-027",
    title: "A pipeline that deploys to dev or stage environments without going to production",
    reference: "What is a 'Non-Production pipeline' in Cloud Manager?",
    explanation:
      "Non-production pipelines in Cloud Manager deploy to development or staging environments without the full production approval process. They are faster and allow teams to validate features quickly before promoting code through the production pipeline.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-028",
    title: "Manual trigger, Git commit push, or scheduled execution",
    reference: "What triggers can start a Cloud Manager pipeline?",
    explanation:
      "Cloud Manager pipelines support three trigger mechanisms: Manual (someone clicks Run in the UI or via API), On Git Push (automatic CI trigger when code is pushed to the configured branch), and Scheduled (run at a specific time, e.g., nightly).",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-029",
    title: "They enforce minimum code quality standards — failing gates stop the deployment from proceeding",
    reference: "What is the role of 'code quality gates' in Cloud Manager pipelines?",
    explanation:
      "Code quality gates in Cloud Manager are automated checkpoints that enforce minimum standards — such as minimum unit test coverage percentages, maximum SonarQube issues, and zero critical security vulnerabilities. If a gate fails, the pipeline stops and no deployment occurs.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-030",
    title: "The built code artifacts are deployed to the Stage environment for pre-production testing",
    reference: "What happens at the 'Stage Deploy' step in a Production pipeline?",
    explanation:
      "In a Cloud Manager production pipeline, the Stage Deploy step installs the built code package on the Staging AEM environment (author and publish). This allows teams to perform final integration testing, UAT, and validation before approving the deployment to production.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-031",
    title: "A manual approval gate after Stage deployment before code is deployed to Production",
    reference: "What is the 'Go-Live Approval' step in a Cloud Manager production pipeline?",
    explanation:
      "Go-Live Approval is the manual gate in a Cloud Manager production pipeline that pauses execution after the Stage Deploy step. A user with the appropriate role (typically Deployment Manager or Business Owner) must review stage testing results and explicitly approve before the pipeline proceeds to deploy to production.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-032",
    title: "Deploying configuration changes (Dispatcher, CDN rules, log forwarding) without a full code pipeline",
    reference: "What is the purpose of a 'Config pipeline' in Cloud Manager?",
    explanation:
      "Config pipelines in Cloud Manager are designed for deploying configuration-only changes (Dispatcher configurations, CDN WAF rules, log forwarding config) without running a full code build/test/deploy cycle. This makes configuration updates faster and reduces risk.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-033",
    title: "A static code analysis tool that checks for code quality issues, bugs, and security vulnerabilities",
    reference: "What is SonarQube's role in Cloud Manager pipelines?",
    explanation:
      "SonarQube is a static code analysis tool integrated into Cloud Manager's quality gates. It analyzes Java source code for bugs, code smells, security hotspots, and test coverage. Cloud Manager enforces custom AEM quality rules on top of standard SonarQube rules — builds fail if thresholds for critical issues are exceeded.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-034",
    title: "Environment variables set in Cloud Manager that override OSGi config values at runtime",
    reference: "What is 'variable override' for pipelines in Cloud Manager?",
    explanation:
      "Cloud Manager supports environment-specific variables (plain text and secrets) that are injected into AEMaaCS OSGi configurations. In .cfg.json files, values reference these variables using the $[env:VARIABLE_NAME] syntax, allowing environment-specific configuration without hardcoding sensitive values.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-045",
    title: "A two-stage pipeline deploying code through Stage testing and then to the Production environment",
    reference: "What is a Production Pipeline in Cloud Manager?",
    explanation:
      "A Production Pipeline in Cloud Manager is the primary deployment pipeline that includes: build, code quality analysis, deployment to Stage, testing on Stage, a Go Live approval gate, and finally deployment to Production. It requires Deployment Manager or Business Owner privileges to trigger and is the primary mechanism for releasing code changes into production.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-046",
    title: "Maven builds the AEM project, running unit tests and producing deployable content packages and OSGi bundles",
    reference: "What happens during the Build step of a Cloud Manager pipeline?",
    explanation:
      "During the Build step, Cloud Manager checks out the configured Git branch and runs a Maven build (mvn clean package). This compiles Java source, runs unit tests, measures code coverage, and produces the deployable artifact — typically a ZIP containing OSGi bundles and content packages. The build artifact is then used by subsequent pipeline steps.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-047",
    title: "A step that runs SonarQube analysis and evaluates against predefined quality gate thresholds",
    reference: "What is the Code Quality step in a Cloud Manager pipeline?",
    explanation:
      "The Code Quality step runs SonarQube static analysis on the build artifact. It evaluates Reliability Rating (bugs), Security Rating (vulnerabilities), Maintainability Rating (code smells), code coverage, and duplication. Results are compared against configured thresholds — failures can be 'Critical' (hard stop) or 'Important' (overridable by Deployment Manager/Business Owner).",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-048",
    title: "Reliability (bugs), Security (vulnerabilities), and Maintainability (code smells/technical debt)",
    reference: "What are the three SonarQube metric categories evaluated in Cloud Manager's Code Quality step?",
    explanation:
      "Cloud Manager's Code Quality step evaluates three core SonarQube rating dimensions: Reliability Rating (bugs/crashes), Security Rating (vulnerabilities and hotspots), and Maintainability Rating (code smells and technical debt ratio). Each is rated A through E, and Cloud Manager configures thresholds that trigger Critical or Important failures.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-049",
    title: "Critical failures block the pipeline immediately and cannot be overridden; Important failures can be manually bypassed by a Deployment Manager or Business Owner",
    reference: "What is the difference between 'Critical' and 'Important' quality gate failures in Cloud Manager?",
    explanation:
      "Cloud Manager quality gates have two failure levels: Critical failures immediately stop the pipeline and cannot be overridden — the code must be fixed. Important failures pause the pipeline where a user with Deployment Manager or Business Owner role can choose to override and continue (accepting the risk) or reject. This gives teams flexibility without compromising on hard requirements.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-050",
    title: "A manual trigger by a Deployment Manager or Business Owner, or automatic trigger if CI mode is configured",
    reference: "What triggers a Cloud Manager Production Pipeline execution?",
    explanation:
      "Production Pipelines can be triggered manually, by a Deployment Manager or Business Owner clicking 'Run' in the Cloud Manager UI (or via API); or automatically, when configured in 'Continuous Deployment' mode where pushes to the configured Git branch auto-trigger the pipeline. The Business Owner or Deployment Manager must handle the Go Live Approval gate.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-051",
    title: "A manual approval gate after Stage testing where a Business Owner or Deployment Manager must approve before Production deployment",
    reference: "What is the 'Go Live Approval' step in a Production Pipeline?",
    explanation:
      "The Go Live Approval pauses the Production pipeline after Stage testing is complete. A Business Owner or Deployment Manager must explicitly approve the deployment to proceed to Production. They can also schedule the deployment for a future time window. If not approved within the configured expiry period, the pipeline expires and must be re-run.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-052",
    title: "A zero-downtime strategy where new code goes to an idle environment (Green) while current (Blue) stays live, then traffic switches",
    reference: "What is Blue/Green deployment in AEM as a Cloud Service?",
    explanation:
      "Blue/Green deployment is AEMaaCS's built-in zero-downtime deployment mechanism. The current live environment is 'Blue' and the new deployment goes to 'Green' (the standby). Once the new version is validated via health checks, traffic is automatically switched from Blue to Green. The old Blue environment remains briefly available for rollback.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-053",
    title: "Clears the Dispatcher cache after deployment so updated content and code changes are served without stale cached responses",
    reference: "What is the purpose of 'Dispatcher Flush' after a pipeline deployment?",
    explanation:
      "After deployment, the Dispatcher (which caches AEM Publish responses) must have its cache cleared to ensure visitors receive newly deployed content rather than stale cached responses. AEMaaCS handles this by sending flush/invalidation requests to the Dispatcher automatically as part of the deployment pipeline, targeting pages associated with changed content paths.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-054",
    title: "In an Adobe-hosted Git repository or an external Git repository linked via a Cloud Manager connection",
    reference: "Where does Cloud Manager store the AEM project source code?",
    explanation:
      "Cloud Manager provides a built-in Adobe-hosted Git repository for each program. Additionally, Cloud Manager supports connecting external repositories — GitHub (Cloud and Enterprise), GitLab, and Bitbucket — so teams can continue using their existing VCS workflows. Pipelines can be configured to pull from any connected repository and branch.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-055",
    title: "A pipeline targeting Dev environments that runs build, code quality, and deployment steps without going to Stage or Production",
    reference: "What is a Non-Production Pipeline in Cloud Manager?",
    explanation:
      "Non-Production Pipelines in Cloud Manager target Dev environments (and optionally Stage). They run the same steps as a Production pipeline (build, code quality, deployment) but don't include the Production deployment or Go Live Approval gate. This enables faster feedback loops — developers can validate changes in a real AEM environment without going through the full Production pipeline flow.",
    category: "CI/CD Pipelines",
  },
  {
    id: "cm-056",
    title: "A specialized pipeline for deploying only Dispatcher/CDN configuration changes without triggering a full code build",
    reference: "What is a 'Web Tier Config Pipeline' in Cloud Manager?",
    explanation:
      "Web Tier Config Pipelines are a Cloud Manager pipeline type that deploy only Dispatcher/httpd configuration changes (filter rules, rewrite rules, virtual host configs) without triggering a full Maven build or OSGi bundle deployment. This allows teams to quickly iterate on Dispatcher configuration independently from the main codebase deployment cycle.",
    category: "CI/CD Pipelines",
  },
]

import type { Concept } from "../types"

export const codeQualityConcepts: Concept[] = [
  {
    id: "cm-093",
    title: "AEM-specific rules checking for incorrect API usage (deprecated APIs, Sling/JCR antipatterns, session handling issues)",
    reference: "What AEM-specific code quality rules does Cloud Manager add to standard SonarQube?",
    explanation:
      "Cloud Manager includes a curated set of AEM-specific SonarQube rules on top of the standard rule set. These cover AEM API best practices: ResourceResolver/Session not closed (resource leaks), use of admin sessions (security risk), synchronous workflow execution, deprecated AEM API usage, null-unsafe Sling Model injections, thread-unsafe singleton patterns, and other AEM-specific antipatterns that standard SonarQube rules would not detect.",
    category: "Code Quality",
  },
  {
    id: "cm-094",
    title: "50% line coverage is the default Important threshold; falling below 50% is an Important (overridable) failure",
    reference: "What code coverage threshold does Cloud Manager enforce by default?",
    explanation:
      "Cloud Manager uses JaCoCo for code coverage measurement. The default Important failure threshold for line coverage is 50% — if the deployed code has less than 50% line coverage, the pipeline pauses at the Code Quality step with an Important failure. Since it is an Important failure, it can be overridden by a Deployment Manager or Business Owner. Custom thresholds can be configured per pipeline.",
    category: "Code Quality",
  },
  {
    id: "cm-095",
    title: "By adding a sonar-project.properties file to the repository root with SonarQube exclusion patterns or rule configurations",
    reference: "How are custom SonarQube rules or exclusions configured in a Cloud Manager pipeline?",
    explanation:
      "SonarQube configurations for Cloud Manager pipelines are controlled via the standard sonar-project.properties file placed in the repository root. This file can define file exclusions (sonar.exclusions), coverage exclusions (sonar.coverage.exclusions), and other standard SonarQube properties. Cloud Manager automatically uses this file when running the Code Quality step, allowing teams to customize scanning behavior without Adobe intervention.",
    category: "Code Quality",
  },
  {
    id: "cm-096",
    title: "A tool that validates Dispatcher configuration files for syntax errors and AEMaaCS compatibility before deployment",
    reference: "What is the 'Dispatcher Optimization Tool' (DOT) / 'Dispatcher Validator' in AEMaaCS?",
    explanation:
      "The Dispatcher Validator (part of the AEM as a Cloud Service SDK) is a local developer tool that validates Dispatcher configuration files (dispatcher.any, httpd virtual host configs, and include files) against AEMaaCS compatibility rules. Developers run it locally to catch syntax errors and unsupported directives before committing — avoiding pipeline failures from configuration issues.",
    category: "Code Quality",
  },
  {
    id: "cm-097",
    title: "A Maven plugin that runs during the build phase to detect AEM incompatibilities: deprecated API usage, missing OSGi dependencies, package filter issues",
    reference: "What is the 'AEM Analyzer Maven Plugin' and its role in Cloud Manager?",
    explanation:
      "The AEM Analyzer Maven Plugin runs during the Maven build in Cloud Manager's Build step. It analyzes the built artifact for AEMaaCS compatibility issues: deprecated Java API usage, missing OSGi package imports, mutable/immutable content structure violations, Oak index configuration problems, and other AEMaaCS deployment-time incompatibilities. Failures block the build, preventing deployment of incompatible code.",
    category: "Code Quality",
  },
  {
    id: "cm-098",
    title: "A SonarQube metric measuring the percentage of duplicated code blocks, which is evaluated as part of the Maintainability Rating",
    reference: "What is 'code duplication' as a quality metric in Cloud Manager's Code Quality step?",
    explanation:
      "Code duplication is a SonarQube metric that detects copy-pasted code blocks. SonarQube identifies lines of duplicated code and calculates a duplication percentage. High duplication indicates technical debt: bugs fixed in one copy may not be fixed in duplicates. In Cloud Manager, high code duplication contributes to a lower Maintainability rating, which can trigger Important quality gate failures.",
    category: "Code Quality",
  },
  {
    id: "cm-099",
    title: "A rating (A-E) measuring code reliability based on detected bugs — bugs likely to produce incorrect code behavior at runtime",
    reference: "What is a 'Reliability Rating' in SonarQube as evaluated by Cloud Manager?",
    explanation:
      "SonarQube's Reliability Rating is based on detected bugs — code issues that represent behavior that is clearly wrong or likely to cause incorrect behavior at runtime (e.g., null pointer dereferences, unreachable catch blocks, wrong boolean operators). Ratings are: A = no bugs, B = at least one minor bug, C = at least one major bug, D = at least one critical bug, E = at least one blocker bug. Cloud Manager uses this rating in its quality gates.",
    category: "Code Quality",
  },
  {
    id: "cm-100",
    title: "A rating (A-E) based on detected security vulnerabilities and security hotspots that could be exploited by attackers",
    reference: "What is a 'Security Rating' in SonarQube as evaluated by Cloud Manager?",
    explanation:
      "SonarQube's Security Rating is based on detected security vulnerabilities — code patterns that could be directly exploited by attackers (e.g., SQL injection, command injection, hardcoded credentials, XSS-prone patterns, insecure cryptography usage). It also includes Security Hotspots — code that requires human review to determine if it is a real risk. Cloud Manager's quality gates use this rating, with Critical and Important thresholds to block deployments with serious security issues.",
    category: "Code Quality",
  },
]

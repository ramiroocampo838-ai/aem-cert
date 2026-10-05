import type { ConceptCategory } from "../types"
import { sonarqubeRulesConcepts } from "./sonarqube-rules"
import { aemBestPracticesConcepts } from "./aem-best-practices"
import { htlSightlyConcepts } from "./htl-sightly"
import { osgiFelixConcepts } from "./osgi-felix"
import { dispatcherConcepts } from "./dispatcher"
import { oakpalContentRulesConcepts } from "./oakpal-content-rules"
import { performanceOptimizationConcepts } from "./performance-optimization"
import { securityConcepts } from "./security"

// Category files are populated in Phase 4 (one category per step).
// Placeholders keep the UI shell functional during Phase 1.
export const codeQualityCategories: ConceptCategory[] = [
  {
    name: "SonarQube Rules",
    concepts: sonarqubeRulesConcepts,
    videoDescriptions: [
      "Reviews SonarQube rules for closing resources safely, protecting credentials, avoiding null dereferences, and keeping methods manageable in AEM Java code.",
      "Covers exception handling and logging, avoiding magic strings, safe ResourceResolver usage, and annotating Sling Models correctly.",
      "Explains class-size and magic-number rules, thread safety in shared OSGi services, synchronized collections, and critical rule severity.",
    ],
  },
  {
    name: "AEM Best Practices",
    concepts: aemBestPracticesConcepts,
    videoDescriptions: [
      "Shows AEM patterns for closing ResourceResolvers, using service users, avoiding repeated repository lookups, keeping business logic in Sling Models, and writing thread-safe services.",
      "Covers configurable paths, safe resource adaptation, thread-safe servlets, Context-Aware Configuration, service-user mappings, and AEM's TagManager API.",
    ],
  },
  {
    name: "HTL / Sightly",
    concepts: htlSightlyConcepts,
    videoDescriptions: [
      "Explains HTL output contexts and XSS protection, safe rich-text rendering, separating logic with data-sly-use, conditional rendering, unwrapped output, and safe JavaScript values.",
      "Compares HTL template calls, includes, and resource rendering, then covers URI escaping, list metadata, client libraries, and safe number and style tokens.",
    ],
  },
  {
    name: "OSGi / Felix",
    concepts: osgiFelixConcepts,
    videoDescriptions: [
      "Covers explicit package imports and Maven dependency scope, optional OSGi service references, dependency injection, configuration lifecycle methods, and bundle naming.",
      "Explains OSGi deactivation cleanup, package version ranges, dynamic references, bundle classloaders, configuration annotations, and scheduled jobs.",
    ],
  },
  {
    name: "Dispatcher",
    concepts: dispatcherConcepts,
    videoDescriptions: [
      "Reviews Dispatcher security controls for request paths and methods, cache invalidation, blocking public access to Author, limiting invalidation clients, denying JCR JSON, and preventing clickjacking.",
      "Covers Publisher farm configuration, cache-busting risks, blocking sensitive endpoints, avoiding personalized-content leaks, stale cache delivery, and .infinity.json exposure.",
    ],
  },
  {
    name: "OakPAL Content Rules",
    concepts: oakpalContentRulesConcepts,
    videoDescriptions: [
      "Shows OakPAL package checks for filtered writes under /apps, package replacement behavior, immutable content, overlays, required primary types, and mutable properties.",
      "Covers rules against packaging ACLs or /var data, package category conflicts, direct /libs changes, overlapping filters, and Blocker versus Error severity.",
    ],
  },
  {
    name: "Performance Optimization",
    concepts: performanceOptimizationConcepts,
    videoDescriptions: [
      "Explains AEM query diagnostics, the cost of repository traversal, batching JCR writes, avoiding repeated ValueMap creation, and choosing property indexes for exact matches.",
      "Covers lazy child iteration, long-lived Dispatcher caching, batched asset processing, path-restricted Lucene indexes, and reusing ResourceResolvers to benefit from caching.",
    ],
  },
  {
    name: "Security",
    concepts: securityConcepts,
    videoDescriptions: [
      "Reviews AEM security risks and protections, including query injection, default passwords, Dispatcher bypass, CSRF validation, servlet registration, TLS, repository users, and resource-level access controls.",
    ],
  },
]

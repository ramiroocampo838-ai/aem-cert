import type { ConceptCategory } from "../types"
import { introductionConcepts } from "./introduction"
import { dispatcherAnyFarmsAndIncludesConcepts } from "./dispatcher-any-farms-and-includes"
import { virtualHostsConcepts } from "./virtual-hosts"
import { rendersAndClientHeadersConcepts } from "./renders-and-client-headers"
import { filtersConcepts } from "./filters"
import { filterSafetyAndVanityUrlsConcepts } from "./filter-safety-and-vanity-urls"
import { cacheBasicsConcepts } from "./cache-basics"
import { cacheInvalidationConcepts } from "./cache-invalidation"
import { urlParametersHeadersTtlAndAuthenticationConcepts } from "./url-parameters-headers-ttl-and-authentication"
import { invalidatingFromAuthorOrPublishConcepts } from "./invalidating-from-author-or-publish"
import { dispatcherInCloudServiceConcepts } from "./dispatcher-in-cloud-service"
import { customizableAndImmutableFilesConcepts } from "./customizable-and-immutable-files"
import { cdnAndCacheHeadersConcepts } from "./cdn-and-cache-headers"
import { clientlibsBlobContentAndExamTipsConcepts } from "./clientlibs-blob-content-and-exam-tips"

export const dispatcherCategories: ConceptCategory[] = [
  {
    name: "Introduction",
    concepts: introductionConcepts,
    videoDescriptions: [
      "Introduces Dispatcher as a caching and security layer in the AEM request path, and previews the configuration, troubleshooting, and cache-invalidation topics covered.",
    ],
  },
  {
    name: "dispatcher.any, Farms and Includes",
    concepts: dispatcherAnyFarmsAndIncludesConcepts,
    videoDescriptions: [
      "Explains dispatcher.any syntax, top-level properties and farm structure, when to use one or multiple farms, and how includes, wildcards, and variables organize configuration.",
    ],
  },
  {
    name: "Virtual Hosts",
    concepts: virtualHostsConcepts,
    videoDescriptions: [
      "Shows how Dispatcher matches hostnames and URIs to virtual hosts and farms, including evaluation order, first-match behavior, and the default fallback host.",
    ],
  },
  {
    name: "Renders and Client Headers",
    concepts: rendersAndClientHeadersConcepts,
    videoDescriptions: [
      "Covers Publisher render endpoints, load distribution, connection and response timeouts, secure HTTPS connections, and the client headers Dispatcher must forward.",
    ],
  },
  {
    name: "Filters",
    concepts: filtersConcepts,
    videoDescriptions: [
      "Explains Dispatcher request filters, deny-by-default allowlisting, filter rule syntax, and why matching individual request elements is safer than deprecated glob rules.",
    ],
  },
  {
    name: "Filter Safety and Vanity URLs",
    concepts: filterSafetyAndVanityUrlsConcepts,
    videoDescriptions: [
      "Reviews unsafe filter patterns and exposed admin paths, cache-flush access controls, and how vanity URL resolution works alongside Dispatcher filters.",
    ],
  },
  {
    name: "Cache Basics",
    concepts: cacheBasicsConcepts,
    videoDescriptions: [
      "Introduces Dispatcher cache roots and rules, allow and deny patterns, and the request and response conditions that prevent caching, including query strings and authenticated content.",
    ],
  },
  {
    name: "Cache Invalidation",
    concepts: cacheInvalidationConcepts,
    videoDescriptions: [
      "Explains .stat-based cache invalidation, statfileslevel, automatic and manual flushes, ResourceOnly behavior, and restricting which clients can clear the cache.",
    ],
  },
  {
    name: "URL Parameters, Headers, TTL and Authentication",
    concepts: urlParametersHeadersTtlAndAuthenticationConcepts,
    videoDescriptions: [
      "Covers cache handling for URL parameters and response headers, ETag configuration, expiry and TTL files, and the security implications of caching authenticated requests.",
    ],
  },
  {
    name: "Invalidating from Author or Publish",
    concepts: invalidatingFromAuthorOrPublishConcepts,
    videoDescriptions: [
      "Compares Author-side and Publish-side Dispatcher flush agents, including transport settings, farm selection, dedicated credentials, reachability, and stale-content timing.",
    ],
  },
  {
    name: "Dispatcher in Cloud Service",
    concepts: dispatcherInCloudServiceConcepts,
    videoDescriptions: [
      "Introduces the Cloud Service Dispatcher project layout and local Docker tooling, then covers flexible mode, Apache and Dispatcher configuration folders, symlink activation, and required local virtual hosts.",
    ],
  },
  {
    name: "Customizable and Immutable Files",
    concepts: customizableAndImmutableFilesConcepts,
    videoDescriptions: [
      "Distinguishes customizable Dispatcher files from immutable framework files, explains supported farm defaults and include locations, and highlights unsafe virtual-host defaults.",
    ],
  },
  {
    name: "CDN and Cache Headers",
    concepts: cdnAndCacheHeadersConcepts,
    videoDescriptions: [
      "Explains how origin Cache-Control, Surrogate-Control, and Expires headers govern CDN and browser caching, including query-string cache keys and ways to disable or tune defaults.",
    ],
  },
  {
    name: "Clientlibs, Blob Content and Exam Tips",
    concepts: clientlibsBlobContentAndExamTipsConcepts,
    videoDescriptions: [
      "Covers long-lived client-library caching, Cloud Service blob caching rules and authentication headers, blob redirect limits, and stale-while-revalidate strategies.",
    ],
  },
]

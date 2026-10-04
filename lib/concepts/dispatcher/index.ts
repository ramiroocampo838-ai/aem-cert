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
  { name: "Introduction", concepts: introductionConcepts },
  { name: "dispatcher.any, Farms and Includes", concepts: dispatcherAnyFarmsAndIncludesConcepts },
  { name: "Virtual Hosts", concepts: virtualHostsConcepts },
  { name: "Renders and Client Headers", concepts: rendersAndClientHeadersConcepts },
  { name: "Filters", concepts: filtersConcepts },
  { name: "Filter Safety and Vanity URLs", concepts: filterSafetyAndVanityUrlsConcepts },
  { name: "Cache Basics", concepts: cacheBasicsConcepts },
  { name: "Cache Invalidation", concepts: cacheInvalidationConcepts },
  { name: "URL Parameters, Headers, TTL and Authentication", concepts: urlParametersHeadersTtlAndAuthenticationConcepts },
  { name: "Invalidating from Author or Publish", concepts: invalidatingFromAuthorOrPublishConcepts },
  { name: "Dispatcher in Cloud Service", concepts: dispatcherInCloudServiceConcepts },
  { name: "Customizable and Immutable Files", concepts: customizableAndImmutableFilesConcepts },
  { name: "CDN and Cache Headers", concepts: cdnAndCacheHeadersConcepts },
  { name: "Clientlibs, Blob Content and Exam Tips", concepts: clientlibsBlobContentAndExamTipsConcepts },
]

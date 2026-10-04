import type { Concept } from "../types"

export const clientlibsBlobContentAndExamTipsConcepts: Concept[] = [
  {
    id: "disp-094",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Clientlibs can be cached indefinitely because a change produces a new file with a unique path",
    reference: "Why can browsers cache AEM client libraries for a very long time?",
    explanation:
      "The speech says client libraries are generated so browsers can cache JavaScript and CSS indefinitely because any change produces a new file with a unique path.",
  },
  {
    id: "disp-095",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Programs created after mid-May 2022 with program IDs above 65000 cache blob content by default while respecting authentication",
    reference: "Which Cloud Service programs cache blob content by default while still respecting authentication?",
    explanation:
      "The source says that for blob content, programs created after mid-May 2022, with program IDs above 65000, cache by default while respecting authentication.",
  },
  {
    id: "disp-096",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Public blob traffic gets public, max-age 600, immutable, while authenticated blob traffic gets private",
    reference: "If no cache header is set on cacheable blob content in newer programs, what headers are applied by default?",
    explanation:
      "The speech says that when no cache header is set, public blob content gets public, max-age 600, immutable, and authenticated traffic gets private.",
  },
  {
    id: "disp-097",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Older programs do not cache blob content by default",
    reference: "How do older Cloud Service programs behave for blob caching by default?",
    explanation:
      "The source explicitly says older programs do not cache blob content by default.",
  },
  {
    id: "disp-098",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "AEM_BLOB_ENABLE_CACHING_HEADERS can change the blob caching-header behavior",
    reference: "Which environment variable can change the default caching-header behavior for blob content?",
    explanation:
      "The speech says the environment variable AEM_BLOB_ENABLE_CACHING_HEADERS can change the default blob caching-header behavior.",
  },
  {
    id: "disp-099",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Blobs larger than 16 KB are served as 302 redirects, and only a limited set of headers can be customized on them",
    reference: "What special behavior applies to blob responses larger than 16 KB?",
    explanation:
      "The source says blobs larger than 16 KB are served as 302 redirects, and only a limited list of headers can be customized on them, such as Content-Disposition and Cache-Control.",
  },
  {
    id: "disp-100",
    category: "Clientlibs, Blob Content and Exam Tips",
    title: "Use stale-while-revalidate and stale-if-error to refresh in the background and avoid cache misses",
    reference: "Which response directives are recommended to refresh cached content in the background and avoid cache misses?",
    explanation:
      "The speech's optimization tips say to use stale-while-revalidate and stale-if-error to refresh in the background and avoid cache misses.",
  },
]

import type { Concept } from "../types"

export const cacheInvalidationConcepts: Concept[] = [
  {
    id: "disp-051",
    category: "Cache Invalidation",
    title: "Dispatcher invalidates cached files by touching a .stat file",
    reference: "How does Dispatcher mark cached content as invalid after activation?",
    explanation:
      "The speech says Dispatcher invalidates files by touching a .stat file and then compares that file's modification date with the cached document's modification date.",
  },
  {
    id: "disp-052",
    category: "Cache Invalidation",
    title: "/statfileslevel limits .stat touching to the docroot-to-resource path depth",
    reference: "What does /statfileslevel control in Dispatcher cache invalidation?",
    explanation:
      "The speech explains that /statfileslevel controls how many folder levels get a .stat file and that only .stat files from docroot down to the file's level, or the configured depth, are touched.",
  },
  {
    id: "disp-053",
    category: "Cache Invalidation",
    title: "When /statfileslevel is set, Dispatcher ignores /statfile and uses .stat",
    reference: "A team configured a custom /statfile name, but Dispatcher still uses .stat files. Why?",
    explanation:
      "The source says that if /statfileslevel is set, the /statfile property is ignored and .stat is used.",
  },
  {
    id: "disp-054",
    category: "Cache Invalidation",
    title: "Auto-invalidated files stay on disk and are revalidated on the next request",
    reference: "What happens to auto-invalidated files defined by /invalidate?",
    explanation:
      "The speech says auto-invalidated files are not deleted right away; their validity is checked at the next request.",
  },
  {
    id: "disp-055",
    category: "Cache Invalidation",
    title: "A common /invalidate setup denies everything and allows *.html",
    reference: "Which pattern is typically used in /invalidate for linked page content?",
    explanation:
      "The speech says /invalidate is typically used for HTML pages because pages link to each other, and the usual configuration denies everything and allows *.html.",
  },
  {
    id: "disp-056",
    category: "Cache Invalidation",
    title: "A manual flush is an HTTP POST to /dispatcher/invalidate.cache with CQ-Action and CQ-Handle",
    reference: "What is required for a manual Dispatcher flush request?",
    explanation:
      "The speech defines a manual flush as an HTTP POST to /dispatcher/invalidate.cache with headers including CQ-Action and CQ-Handle.",
  },
  {
    id: "disp-057",
    category: "Cache Invalidation",
    title: "CQ-Action-Scope: ResourceOnly flushes only the targeted resource",
    reference: "Which header value should be used when only the targeted resource should be flushed without invalidating other cache areas?",
    explanation:
      "The speech states that the header CQ-Action-Scope with value ResourceOnly flushes a resource without invalidating other parts of the cache.",
  },
  {
    id: "disp-058",
    category: "Cache Invalidation",
    title: "Without /allowedClients, any client can clear the cache",
    reference: "Why is defining /allowedClients recommended in the cache section?",
    explanation:
      "The speech recommends defining /allowedClients because, if it is not defined, any client can clear the cache and repeated flushes can severely hurt performance.",
  },
]

import type { Concept } from "../types"

export const cacheBasicsConcepts: Concept[] = [
  {
    id: "disp-044",
    category: "Cache Basics",
    title: "The /cache section controls how Dispatcher caches documents",
    reference: "What does the /cache section control in Dispatcher?",
    explanation:
      "Section 7 says the /cache section controls how Dispatcher caches documents.",
  },
  {
    id: "disp-045",
    category: "Cache Basics",
    title: "The /docroot must match the web server document root, and with multiple farms each farm needs a different document root",
    reference: "What requirement does the speech place on /docroot, and what changes when multiple farms are used?",
    explanation:
      "Section 7 says /docroot is the directory where cached files are stored, it must be the same path as the web server document root, and with multiple farms each farm needs a different document root.",
  },
  {
    id: "disp-046",
    category: "Cache Basics",
    title: "The /rules property controls which documents are cached by path, where allow means cache and deny means render every time",
    reference: "What does the /rules property control, and what do its rule types mean?",
    explanation:
      "Section 7 says /rules controls which documents are cached by path. Each rule has a glob pattern and a type: allow means cache, while deny means render every time.",
  },
  {
    id: "disp-047",
    category: "Cache Basics",
    title: "Use a rule with glob asterisk and type allow, then add deny exceptions for the dynamic sections",
    reference: "According to the speech, how do you configure Dispatcher to cache everything except dynamic sections?",
    explanation:
      "Section 7 says that to cache everything, use glob asterisk with type allow, then add deny exceptions for dynamic sections.",
  },
  {
    id: "disp-048",
    category: "Cache Basics",
    title: "A request URI that contains a question mark is not cached regardless of the cache rules",
    reference: "Which request characteristic alone is enough to stop caching regardless of the configured cache rules?",
    explanation:
      "Section 7 says Dispatcher never caches a document when the request URI contains a question mark, regardless of the cache rules.",
  },
  {
    id: "disp-049",
    category: "Cache Basics",
    title: "Dispatcher also will not cache when the file extension is missing, when the authentication header is set, or when AEM responds with no-cache, no-store, or must-revalidate headers",
    reference: "Besides a question mark in the URI, which other built-in conditions prevent Dispatcher from caching a document?",
    explanation:
      "Section 7 says Dispatcher also does not cache when the file extension is missing, when the authentication header is set, or when AEM responds with no-cache, no-store, or must-revalidate headers.",
  },
  {
    id: "disp-050",
    category: "Cache Basics",
    title: "Only GET and HEAD requests are cacheable, and closed user groups should not be cached because user rights are not checked for cached pages",
    reference: "Which HTTP methods are cacheable, and why should closed user groups not be cached?",
    explanation:
      "Section 7 says only GET and HEAD requests are cacheable, and closed user groups should not be cached because user rights are not checked for cached pages.",
  },
]

import type { Concept } from "../types"

export const cdnAndCacheHeadersConcepts: Concept[] = [
  {
    id: "disp-087",
    category: "CDN and Cache Headers",
    title: "The Cloud Service CDN is controlled by Cache-Control, Surrogate-Control, or Expires from the origin response",
    reference: "Which origin response headers control caching in the AEM as a Cloud Service CDN?",
    explanation:
      "The speech says caching of HTTP responses in the Cloud Service CDN is controlled by the origin response headers Cache-Control, Surrogate-Control, or Expires.",
  },
  {
    id: "disp-088",
    category: "CDN and Cache Headers",
    title: "The CDN cache key includes the full request URL, so different query parameters create different cache entries",
    reference: "How do query parameters affect the CDN cache key in AEM as a Cloud Service?",
    explanation:
      "The source says the CDN cache key includes the full request URL, including query parameters, so each different query parameter produces a different cache entry.",
  },
  {
    id: "disp-089",
    category: "CDN and Cache Headers",
    title: "Responses with Cache-Control private, no-cache, or no-store, or with a Set-Cookie header, are not cached by the CDN",
    reference: "Which responses will the Cloud Service CDN refuse to cache?",
    explanation:
      "The speech states that responses containing private, no-cache, or no-store in Cache-Control, or a Set-Cookie header, are not cached by the CDN.",
  },
  {
    id: "disp-090",
    category: "CDN and Cache Headers",
    title: "By default, browsers cache text and HTML for five minutes, and the CDN respects that",
    reference: "What is the default caching behavior for text and HTML responses in Cloud Service Dispatcher setups?",
    explanation:
      "The source says that for text and HTML, Dispatcher sets default headers so the browser caches for five minutes, and the CDN respects this.",
  },
  {
    id: "disp-091",
    category: "CDN and Cache Headers",
    title: "Define DISABLE_DEFAULT_CACHING in global.vars to disable it, or use EXPIRATION_TIME in global.vars to override it",
    reference: "How can the default text and HTML caching behavior be disabled or overridden globally in Cloud Service?",
    explanation:
      "The speech says you can disable the default by defining DISABLE_DEFAULT_CACHING in global.vars and override it for all HTML and text with the EXPIRATION_TIME variable in global.vars.",
  },
  {
    id: "disp-092",
    category: "CDN and Cache Headers",
    title: "Use Surrogate-Control to control the Adobe-managed CDN independently of the browser",
    reference: "Which header should be used when you want to control Adobe-managed CDN caching independently of browser caching?",
    explanation:
      "The source says Surrogate-Control applies to the Adobe managed CDN and lets you control the CDN cache independently of the browser.",
  },
  {
    id: "disp-093",
    category: "CDN and Cache Headers",
    title: "Set Cache-Control to private to keep the response out of the CDN",
    reference: "How should a response be marked when it must stay out of the CDN cache?",
    explanation:
      "The speech says that to keep content out of the CDN, set Cache-Control to private. It also notes that private HTML can still be cached at Dispatcher with permission-sensitive caching.",
  },
]

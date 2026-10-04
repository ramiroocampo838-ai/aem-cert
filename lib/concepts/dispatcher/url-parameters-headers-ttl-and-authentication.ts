import type { Concept } from "../types"

export const urlParametersHeadersTtlAndAuthenticationConcepts: Concept[] = [
  {
    id: "disp-059",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "Ignore all parameters first, then deny only the ones that must bypass the cache",
    reference: "What is the recommended /ignoreUrlParams strategy when most query parameters should not prevent caching?",
    explanation:
      "The speech recommends an allowlist approach: ignore everything with an allow rule on *, then deny only parameters that must bypass the cache, such as nocache.",
  },
  {
    id: "disp-060",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "If any parameter is not ignored, the page is not cached",
    reference: "A request URL has three query parameters, and one of them is not ignored by /ignoreUrlParams. What happens?",
    explanation:
      "The source says that if all parameters are ignored, the page is cached, but if any parameter is not ignored, the page is not cached.",
  },
  {
    id: "disp-061",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "/headers tells Dispatcher which response headers to store with the cached file and add back later",
    reference: "What is the purpose of the /headers property in the Dispatcher cache configuration?",
    explanation:
      "The speech says /headers lists the response headers Dispatcher stores next to the cached file and adds on later responses.",
  },
  {
    id: "disp-062",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "Add ETag to /headers and set the Apache directive FileETag none",
    reference: "What must be done if a project wants Dispatcher to store ETag values for cached responses?",
    explanation:
      "The speech explicitly says that to store ETag, you must add it to /headers and set the Apache directive FileETag none.",
  },
  {
    id: "disp-063",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "Dispatcher reads Cache-Control max-age or Expires and creates an auxiliary file whose mtime equals the expiry",
    reference: "How does Dispatcher implement time-based invalidation when /enableTTL is set to 1?",
    explanation:
      "The speech says /enableTTL reads Cache-Control max-age or Expires from the backend response and creates an empty auxiliary file whose modification time equals the expiry.",
  },
  {
    id: "disp-064",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "/allowAuthorized controls whether requests carrying authentication information may be cached",
    reference: "What does /allowAuthorized control?",
    explanation:
      "The speech says /allowAuthorized controls whether requests with authentication information are cached, including the Authorization header and cookies named authorization or login-token.",
  },
  {
    id: "disp-065",
    category: "URL Parameters, Headers, TTL and Authentication",
    title: "Session management requires /allowAuthorized to stay at 0",
    reference: "Why must /allowAuthorized remain 0 when Dispatcher session management is used?",
    explanation:
      "The source explicitly states that session management requires /allowAuthorized to be 0.",
  },
]

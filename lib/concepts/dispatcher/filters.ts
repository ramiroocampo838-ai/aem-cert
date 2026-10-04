import type { Concept } from "../types"

export const filtersConcepts: Concept[] = [
  {
    id: "disp-030",
    category: "Filters",
    title: "The /filter section specifies which HTTP requests Dispatcher accepts",
    reference: "What does the /filter section specify in Dispatcher?",
    explanation:
      "Section 5 says the /filter section specifies which HTTP requests Dispatcher accepts.",
  },
  {
    id: "disp-031",
    category: "Filters",
    title: "Requests that are not accepted are sent back to the web server with a 404 status",
    reference: "What happens to requests that are not accepted by the /filter section?",
    explanation:
      "Section 5 says requests that are not accepted are sent back to the web server with a 404 status.",
  },
  {
    id: "disp-032",
    category: "Filters",
    title: "If there is no /filter section, all requests are accepted",
    reference: "If there is no /filter section at all, how does Dispatcher behave?",
    explanation:
      "Section 5 says that if there is no /filter section, all requests are accepted.",
  },
  {
    id: "disp-033",
    category: "Filters",
    title: "Use an allowlist strategy: first deny everything, then allow only what is needed",
    reference: "What allowlist strategy does the speech recommend for /filter rules?",
    explanation:
      "Section 5 recommends an allowlist strategy: first deny everything, then allow only what is needed.",
  },
  {
    id: "disp-034",
    category: "Filters",
    title: "The first deny-all rule is type deny with url asterisk",
    reference: "What is the classic first deny-all rule described in the speech?",
    explanation:
      "Section 5 explicitly gives the first deny-all rule as type deny and url asterisk.",
  },
  {
    id: "disp-035",
    category: "Filters",
    title: "The preferred request-line elements are /method, /url, /query, /protocol, /path, /selectors, /extension, and /suffix",
    reference: "Which request-line elements are preferred for filtering instead of matching the whole line?",
    explanation:
      "Section 5 says filtering on elements of the request line is preferred, naming /method, /url, /query, /protocol, and from Dispatcher 4.2.0 also /path, /selectors, /extension, and /suffix.",
  },
  {
    id: "disp-036",
    category: "Filters",
    title: "The older /glob should be avoided because it matches the entire request line, is deprecated, and can lead to security issues",
    reference: "Why should you avoid the older /glob property in filters?",
    explanation:
      "Section 5 says the older /glob property matches the entire request line, is deprecated, and can lead to security issues.",
  },
]

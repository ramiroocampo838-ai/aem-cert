import type { Concept } from "../types"

export const filterSafetyAndVanityUrlsConcepts: Concept[] = [
  {
    id: "disp-037",
    category: "Filter Safety and Vanity URLs",
    title: "The validator fails glob-based allow rules because of CVE-2016-0957",
    reference: "Why does the Dispatcher validator fail a filter rule that uses a glob to allow requests in AEM as a Cloud Service?",
    explanation:
      "Section 6 says the Dispatcher validator fails a filter rule that uses a glob to allow requests because of CVE-2016-0957.",
  },
  {
    id: "disp-038",
    category: "Filter Safety and Vanity URLs",
    title: "It could also allow any resource followed by a query string such as ?a=.css",
    reference: "What makes an allow rule like GET *.css* dangerous according to the speech?",
    explanation:
      "Section 6 explains that allowing GET *.css* would also allow any resource followed by a query string such as ?a=.css.",
  },
  {
    id: "disp-039",
    category: "Filter Safety and Vanity URLs",
    title: "The validator also fails if an admin feature such as /crx/de or /system/console is exposed",
    reference: "What other validation failure does the speech call out besides unsafe glob allow rules?",
    explanation:
      "Section 6 says the validator also fails if an admin feature is exposed, such as /crx/de or /system/console.",
  },
  {
    id: "disp-040",
    category: "Filter Safety and Vanity URLs",
    title: "You must restrict who can flush the cache",
    reference: "Which security checklist item explains why an unauthorized request to /dispatcher/invalidate.cache should return 403?",
    explanation:
      "Section 6 says the security checklist includes restricting who can flush the cache, and that an unauthorized request to /dispatcher/invalidate.cache should return 403.",
  },
  {
    id: "disp-041",
    category: "Filter Safety and Vanity URLs",
    title: "If a page request is denied by a filter, Dispatcher consults its list of vanity URLs",
    reference: "If a page request is denied by a filter, what does Dispatcher do next for vanity URL handling?",
    explanation:
      "Section 6 says that if a page request is denied by a filter, Dispatcher consults its list of vanity URLs.",
  },
  {
    id: "disp-042",
    category: "Filter Safety and Vanity URLs",
    title: "The /vanity_urls section uses /url, /file, and /delay, and /url must be /libs/granite/dispatcher/content/vanityUrls.html",
    reference: "Which /vanity_urls settings does the speech name, and what must /url be set to?",
    explanation:
      "Section 6 says the /vanity_urls section has /url, /file, and /delay, and that /url must be /libs/granite/dispatcher/content/vanityUrls.html.",
  },
  {
    id: "disp-043",
    category: "Filter Safety and Vanity URLs",
    title: "A filter must still deny the vanity URL",
    reference: "Even when vanity URL support is configured, what must still be true of the filter rule for the vanity URL?",
    explanation:
      "Section 6 explicitly says that a filter must still deny the vanity URL.",
  },
]

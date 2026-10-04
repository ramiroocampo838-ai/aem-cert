import type { Concept } from "../types"

export const apacheDispatcherAndCdnLogsConcepts: Concept[] = [
  {
    id: "oak-051",
    category: "Apache, Dispatcher and CDN Logs",
    title: "The Publish-only logs are the Apache HTTPD access log, the Apache HTTPD error log, and the Dispatcher log",
    reference: "Which three extra logs exist only for the Publish tier in AEM as a Cloud Service?",
    explanation:
      "Section 8 says the Publish tier has three more logs before AEM application logging: the Apache HTTPD access log, the Apache HTTPD error log, and the Dispatcher log.",
  },
  {
    id: "oak-052",
    category: "Apache, Dispatcher and CDN Logs",
    title: "Set REWRITE_LOG_LEVEL in conf.d/variables/global.var",
    reference: "How is the mod_rewrite error log level configured in Cloud Service Dispatcher?",
    explanation:
      "The source states that the Apache error log level for mod_rewrite is set with REWRITE_LOG_LEVEL in conf.d/variables/global.var.",
  },
  {
    id: "oak-053",
    category: "Apache, Dispatcher and CDN Logs",
    title: "debug",
    reference: "What is the maximum mod_rewrite log level supported in the cloud?",
    explanation:
      "Section 8 says REWRITE_LOG_LEVEL values run from error through trace8, but the maximum supported in the cloud is debug.",
  },
  {
    id: "oak-054",
    category: "Apache, Dispatcher and CDN Logs",
    title: "DISP_LOG_LEVEL",
    reference: "Which variable sets the Dispatcher log level in Cloud Service?",
    explanation:
      "The speech explicitly says the Dispatcher log level is set with DISP_LOG_LEVEL in the same global.var file.",
  },
  {
    id: "oak-055",
    category: "Apache, Dispatcher and CDN Logs",
    title: "They show the farm and an action such as miss or none",
    reference: "What helpful details do Dispatcher log lines show for a request?",
    explanation:
      "Section 8 says Dispatcher log lines show the farm and an action such as miss or none, which helps explain why a request reached AEM.",
  },
  {
    id: "oak-056",
    category: "Apache, Dispatcher and CDN Logs",
    title: "HIT, MISS, or PASS",
    reference: "What values can appear in the CDN log cache field?",
    explanation:
      "The CDN log is described as JSON with fields such as timestamp, ttfb, status, url, and cache, where cache is HIT, MISS, or PASS.",
  },
  {
    id: "oak-057",
    category: "Apache, Dispatcher and CDN Logs",
    title: "They can be downloaded through Cloud Manager or tailed with the Adobe I/O CLI",
    reference: "How are cloud logs made available to engineers?",
    explanation:
      "Section 8 says logs are available either by downloading them through Cloud Manager or by tailing them with the Adobe I/O command line interface.",
  },
]

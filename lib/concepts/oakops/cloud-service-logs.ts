import type { Concept } from "../types"

export const cloudServiceLogsConcepts: Concept[] = [
  {
    id: "oak-043",
    category: "Cloud Service Logs",
    title: "They are configuration files stored in Git and deployed by Cloud Manager",
    reference: "How are log settings and levels managed in AEM as a Cloud Service?",
    explanation:
      "Section 7 says Cloud Service log settings and levels are configuration files stored in Git and deployed by Cloud Manager.",
  },
  {
    id: "oak-044",
    category: "Cloud Service Logs",
    title: "AEM application logging, Apache HTTPD web server and Dispatcher logging, and CDN logging",
    reference: "What three logging sets does the speech say Cloud Service breaks into?",
    explanation:
      "Section 7 says Cloud Service logging breaks into AEM application logging, Apache HTTPD plus Dispatcher logging, and CDN logging.",
  },
  {
    id: "oak-045",
    category: "Cloud Service Logs",
    title: "The AEM Java log, the HTTP request log, and the HTTP access log; requests served from the Dispatcher cache or an upstream CDN do not appear in them",
    reference: "Which three AEM application logs are named, and what requests do not appear in them?",
    explanation:
      "Section 7 names the AEM Java, HTTP request, and HTTP access logs and says Dispatcher-cache or upstream-CDN-served requests do not appear in them.",
  },
  {
    id: "oak-046",
    category: "Cloud Service Logs",
    title: "Through OSGi configuration in run mode folders: config for development, config.stage, and config.prod, using the Sling LogManager factory configuration",
    reference: "How are Java log levels configured per environment type in Cloud Service?",
    explanation:
      "Section 7 says Java log levels are configured through OSGi configuration in config, config.stage, and config.prod using the Sling LogManager factory configuration.",
  },
  {
    id: "oak-047",
    category: "Cloud Service Logs",
    title: "Use org.apache.sling.commons.log.names for the Java packages and org.apache.sling.commons.log.level for the level; recommended levels are debug on development, warn on stage, and error on production",
    reference: "Which Sling LogManager factory properties does the speech say to use for package names and level, and what levels are recommended by environment?",
    explanation:
      "Section 7 names org.apache.sling.commons.log.names and org.apache.sling.commons.log.level and recommends debug for development, warn for stage, and error for production.",
  },
  {
    id: "oak-048",
    category: "Cloud Service Logs",
    title: "Do not change its default INFO level, its format, or the default file destination logs/error.log",
    reference: "What must you not change on the default Apache Sling Logging Configuration in Cloud Service?",
    explanation:
      "Section 7 says not to change the default INFO level, not to change the format, and not to change the logs/error.log destination.",
  },
  {
    id: "oak-049",
    category: "Cloud Service Logs",
    title: "The request log pairs requests and responses by the numeric ID in brackets, while the access log shows requests in time order with status code and size and helps follow a specific user",
    reference: "How does the HTTP request log differ from the HTTP access log in the speech?",
    explanation:
      "Section 7 says the request log pairs requests and responses by the numeric bracket ID, while the access log shows requests in time order with status and size and helps follow a user.",
  },
  {
    id: "oak-050",
    category: "Cloud Service Logs",
    title: "The CDN log is JSON, cannot be customized or set to different modes, shows fields such as timestamp, ttfb, status, url, and cache with HIT, MISS, or PASS, and is useful for cache-hit optimization and seeing matched traffic filter and WAF flags",
    reference: "What does the speech say about CDN logs in Cloud Service?",
    explanation:
      "Section 7 says the CDN log is JSON, not customizable, shows fields like timestamp, ttfb, status, url, and cache HIT/MISS/PASS, and records matched traffic filter rules and WAF flags.",
  },
]

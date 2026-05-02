import type { Concept } from "../types"

export const dispatcherConcepts: Concept[] = [
  {
    id: "cq-071",
    title: "Validate URL path characters (no ../ traversal sequences) and enforce HTTP method allowlisting (only GET/POST for content)",
    reference: "DISP-001 (Severity: Critical) states that the Dispatcher must always validate incoming HTTP requests before forwarding them to AEM Publishers. Which two validations are most critical?",
    explanation:
      "DISP-001 (Critical): The Dispatcher is AEM's first security boundary. Two critical validations: (1) Path traversal prevention — reject requests where the URL contains /../, /./, or percent-encoded equivalents that could reach files outside the webroot. (2) Method allowlisting — only permit GET and POST for public traffic; any other verb (DELETE, PUT, TRACE, CONNECT) should return 405 Method Not Allowed unless specifically required.",
    category: "Dispatcher",
  },
  {
    id: "cq-072",
    title: "The /invalidate request uses stat file touch-based invalidation that is atomic and handles cluster sync — direct file deletion is not cluster-aware",
    reference: "DISP-002 requires configuring Dispatcher cache invalidation to use only the /invalidate request from AEM Publisher, not direct cache file deletion. Why?",
    explanation:
      "DISP-002: Dispatcher uses a stat file (.stat) based invalidation model. When AEM Publisher sends a flush request to /dispatcher/invalidate.cache, the Dispatcher touches the .stat file in the invalidation path hierarchy. On the next request for any cached file under that path, the Dispatcher compares the file's modification time against the .stat file — if .stat is newer, the cache entry is stale. Direct file deletion bypasses this mechanism and doesn't propagate to other Dispatcher instances.",
    category: "Dispatcher",
  },
  {
    id: "cq-073",
    title: "Author exposes CRXDE Lite, Felix Web Console, and unrestricted JCR traversal — routing it through Dispatcher for public access is a severe security breach",
    reference: "DISP-003 (Severity: Critical) requires that the AEM Author instance never be accessible through the Dispatcher to end users. Why?",
    explanation:
      "DISP-003 (Critical): AEM Author (typically port 4502) contains privileged tools that must never be publicly accessible: CRXDE Lite (full JCR read/write), Package Manager (arbitrary code deployment), Felix Web Console (OSGi bundle management), QueryBuilder/SQL2 endpoints (arbitrary repository traversal), and all administrative Sling servlets. Author should only be reachable from trusted network ranges (VPN, office IP). Publisher instances (4503) serve public traffic through the Dispatcher.",
    category: "Dispatcher",
  },
  {
    id: "cq-074",
    title: "/allowedClients in /cache — restricts which IPs can send cache invalidation requests to the Dispatcher",
    reference: "Which Dispatcher configuration controls which client IP addresses or hostnames are allowed to send invalidation flush requests to /dispatcher/invalidate.cache?",
    explanation:
      "Dispatcher Security: /allowedClients in the /cache block restricts which IP addresses can send cache flush/invalidation requests to /dispatcher/invalidate.cache. Only AEM Publisher IPs should be whitelisted. Without this, any server that can reach the Dispatcher can flush the entire cache — a significant availability attack vector (DoS by repeated cache invalidation).",
    category: "Dispatcher",
  },
  {
    id: "cq-075",
    title: "Deny all requests matching /*.json or /*.infinity.json — these expose the entire JCR tree as JSON",
    reference: "DISP-004 requires that the Dispatcher's /filter rules block access to AEM's sling.get.json traversal endpoint. What path pattern should be denied?",
    explanation:
      "DISP-004 (Critical): AEM's Sling GET servlet exposes any JCR node as JSON by appending .json (or .infinity.json for the full subtree). The URL '/content/mysite.infinity.json' returns the entire content tree as JSON, exposing user data, configuration, and potentially credentials. The Dispatcher must block these patterns: deny URLs matching '/*.infinity.json', '/*.4.2.1.json', '/*.tidy.json', and '/*.json' unless specifically required for API endpoints.",
    category: "Dispatcher",
  },
  {
    id: "cq-076",
    title: "X-Frame-Options header — set to SAMEORIGIN or DENY to prevent clickjacking attacks",
    reference: "What does DISP-005 require regarding Dispatcher security headers, and specifically which header prevents browsers from loading the cached page in an iframe on an untrusted origin?",
    explanation:
      "DISP-005 (Major): Security response headers must be injected by the Dispatcher to be included in all cached responses. X-Frame-Options prevents clickjacking — the attack where a malicious page embeds a target site in an invisible iframe and tricks users into clicking on its elements. SAMEORIGIN allows framing by pages on the same origin; DENY blocks all framing. Modern alternative: Content-Security-Policy: frame-ancestors 'self' which allows more granular control.",
    category: "Dispatcher",
  },
  {
    id: "cq-077",
    title: "Defines the AEM Publisher backends — their hostname, port, and connection timeouts that the Dispatcher proxies requests to",
    reference: "In Dispatcher configuration, what is the purpose of the /renders section in dispatcher.any?",
    explanation:
      "Dispatcher Configuration: /renders defines the backend AEM render farm — the Publisher (or Preview) instances that the Dispatcher forwards requests to when content is not in the cache or is stale. Each render entry specifies: /hostname (AEM server IP or hostname), /port (typically 4503 for Publisher), /timeout (connection timeout in milliseconds), /receiveTimeout (response timeout). Multiple /renders entries allow load balancing across Publisher cluster nodes.",
    category: "Dispatcher",
  },
  {
    id: "cq-078",
    title: "An attacker can flood the cache disk with unique query strings (cache busting attack), exhausting the Dispatcher's storage",
    reference: "DISP-006 (Severity: Major) requires that query string parameters be explicitly allowlisted for caching. Why is caching all query string variations dangerous?",
    explanation:
      "DISP-006 (Major): By default, Dispatcher includes the query string in the cache key. If query string caching is unrestricted, an attacker sends requests with unique random parameters (?cb=1234567890, ?cb=9876543210, etc.) causing the Dispatcher to create a new cache file for each — a 'cache busting' DoS attack that fills the disk and forces all requests to hit the AEM Publisher. Fix: configure /ignoreUrlParams to explicitly whitelist known query parameters; all others are stripped for caching purposes.",
    category: "Dispatcher",
  },
  {
    id: "cq-079",
    title: "A /filter deny rule blocking /bin/querybuilder.json and all /bin/* endpoints not explicitly required",
    reference: "What Dispatcher configuration rule prevents AEM's query builder endpoint (/bin/querybuilder.json) and QueryDebug endpoint from being publicly accessible?",
    explanation:
      "Dispatcher Security – /bin/ endpoints: AEM's /bin/ path serves many powerful servlets that must never be publicly accessible. The QueryBuilder endpoint (/bin/querybuilder.json) executes arbitrary JCR-SQL2 queries — a public user could query 'path=/content&type=nt:unstructured' to retrieve all structured content nodes including drafts and unpublished pages. Block /bin/querybuilder.json in /filter, and deny all /bin/* paths with explicit allows only for the specific endpoints needed.",
    category: "Dispatcher",
  },
  {
    id: "cq-080",
    title: "The Dispatcher cannot differentiate between users — it would serve User A's personalized authenticated response to User B",
    reference: "Why should authentication-based pages (pages behind AEM's login) not be cached by the Dispatcher?",
    explanation:
      "Dispatcher Caching and Authentication: The Dispatcher caches responses by URL (ignoring cookies and auth headers by default). If an authenticated user visits /content/mysite/dashboard and the Dispatcher caches the personalized response, the next visitor receives that cached personalized content — even if unauthenticated. Fix: configure /auth_checker to validate authentication before serving cached content, or configure /cache /rules to exclude all authenticated paths from caching.",
    category: "Dispatcher",
  },
  {
    id: "cq-081",
    title: "Allows the Dispatcher to serve stale cached content for a defined number of seconds while fetching fresh content from the Publisher — reduces latency on invalidation",
    reference: "What does the Dispatcher's 'grace period' (graceOnStaleContent) configuration do?",
    explanation:
      "Dispatcher Grace Period: When a page is invalidated (stat file updated), the next request would normally hit the AEM Publisher directly. If many users request the page simultaneously, this causes a 'thundering herd' — all requests bypass the cache and hammer the Publisher at once. graceOnStaleContent allows the Dispatcher to continue serving the old (stale) cache entry for a defined number of seconds, refreshing it asynchronously. Only one request goes to the Publisher; all others are served from stale cache.",
    category: "Dispatcher",
  },
  {
    id: "cq-082",
    title: ".infinity.json — returns the complete JCR subtree including all child nodes and properties as a JSON document",
    reference: "DISP-004 and OWASP requirements mandate blocking access to AEM's default servlet selectors. Which selector pattern expresses the most dangerous information disclosure risk?",
    explanation:
      "Dispatcher URL Filtering: The .infinity.json selector is one of the most dangerous AEM default features to leave publicly accessible. A request to '/content/mysite.infinity.json' returns the complete JCR tree under /content/mysite — every page, every property (including metadata, tags, and component data), every unpublished draft page, and any content stored by components. Block it in Dispatcher /filter with: /deny { /url '/*.infinity.json' }.",
    category: "Dispatcher",
  },
]

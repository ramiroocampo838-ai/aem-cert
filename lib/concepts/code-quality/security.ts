import type { Concept } from "../types"

export const securityConcepts: Concept[] = [
  {
    id: "cq-093",
    title: "An attacker can inject JCR-SQL2 syntax into user-supplied values to access content beyond the intended scope",
    reference:
      "SEC-001 (Severity: Critical) requires AEM developers to use parameterized JCR-SQL2 queries to prevent query injection attacks. What is the risk of building queries via string concatenation?",
    explanation:
      "SEC-001 (Critical): JCR-SQL2 supports user-defined WHERE clauses. If you build a query like 'SELECT * FROM [nt:base] WHERE [title] = \"' + userInput + '\"', an attacker can inject: 'x\" OR [jcr:primaryType] = \"rep:User' — revealing all user nodes from /home/users. Use parameterized queries via QueryManager.createQuery(sql, Query.JCR_SQL2) with values set as query variables, which prevents injection by treating user input as literal values, not query syntax.",
    category: "Security",
  },
  {
    id: "cq-094",
    title: "Cloud Manager Health Checks include a Default Password check that blocks promotion if the admin password is still default",
    reference:
      "SEC-002 (Severity: Blocker) states that the AEM admin password must never be the default ('admin'). What Cloud Manager mechanism enforces this?",
    explanation:
      "SEC-002 (Blocker): The default AEM admin password ('admin') is a well-known credential that automated scanners check within seconds of finding an AEM instance. AEM as a Cloud Service provisions environments with randomized admin passwords. For on-premise and AMS deployments, the Cloud Manager Security Health Check (accessible from the Operations Dashboard) verifies that the admin password is not the default, blocking release train promotion until it passes.",
    category: "Security",
  },
  {
    id: "cq-095",
    title: "It bypasses the Dispatcher's URL filtering layer entirely — attackers can reach all AEM servlets including CRXDE, Package Manager, and admin endpoints",
    reference:
      "Which security vulnerability does enabling the 'Allow' filter rule for all paths (/) in the Dispatcher /filter section create?",
    explanation:
      "Dispatcher Security: The /filter section is the Dispatcher's URL allowlist. The correct approach is deny-by-default: deny everything first, then explicitly allow only required paths. A rule that allows all paths (/) exposes sensitive endpoints. Once traffic reaches AEM, the secondary authentication check (AEM login) is the only protection — but many AEM administrative URLs do not require authentication by default on Publisher instances.",
    category: "Security",
  },
  {
    id: "cq-096",
    title: "AEM's Granite CSRF Filter (com.adobe.granite.csrf) — injects a CSRF token in HTML forms and validates it on POST requests",
    reference:
      "SEC-003 (Severity: Critical) requires implementing CSRF protection for all AEM POST requests that modify content. Which AEM mechanism provides this protection?",
    explanation:
      "SEC-003 (Critical): Cross-Site Request Forgery (CSRF) forces logged-in AEM users to unknowingly submit state-changing requests from malicious websites. AEM's Granite CSRF protection provides: (1) A token endpoint at /libs/granite/csrf/token.json, (2) The Granite CSRFRequestFilter OSGi component that validates the token on all POST/DELETE/PUT requests, (3) Integration with Touch UI forms that auto-injects the :cq_csrf_token parameter. Custom API endpoints must manually include the token in the request header.",
    category: "Security",
  },
  {
    id: "cq-097",
    title: "A servlet registered without resource type constraints can be reached by manipulating sling:resourceType on any writable JCR node — privilege escalation",
    reference:
      "SEC-004 (Severity: Critical) requires that all Sling Servlets use explicit resource type or path binding rather than registering to catch all resource types. Why?",
    explanation:
      "SEC-004 (Critical): Sling Servlets can be registered by resource type, path, or extension. Without explicit resource type binding, a servlet registered to handle all requests matching a broad selector can be triggered on any content node by appending the selector. With explicit binding (e.g., resourceTypes='myproject/components/product'), the servlet only fires on resources whose sling:resourceType is set to that exact value.",
    category: "Security",
  },
  {
    id: "cq-098",
    title: "TLS provides server authentication via the certificate chain — clients verify they are talking to the legitimate AEM server and not a man-in-the-middle",
    reference:
      "SEC-005 (Severity: Blocker) mandates that all AEM environments use TLS/HTTPS. Beyond encryption, what additional security benefit does TLS provide?",
    explanation:
      "SEC-005 (Blocker): HTTPS/TLS provides three security properties: (1) Confidentiality — encrypted traffic cannot be read by network observers, protecting session tokens and authored content. (2) Integrity — the MAC detects any tampering with packets in transit. (3) Authentication — the server's TLS certificate (validated against the CA chain) proves the server's identity, preventing man-in-the-middle attacks where an attacker intercepts traffic between the browser and AEM.",
    category: "Security",
  },
  {
    id: "cq-099",
    title: "/home/users in CRXDE — all AEM repository users (system, service, author, and anonymous) are stored under this path",
    reference:
      "SEC-006 (Severity: Critical) requires regular security audit of AEM's active user accounts. Which AEM path provides a list of all active user accounts that should be reviewed?",
    explanation:
      "SEC-006 (Critical): AEM stores all users (authors, administrators, system users, service users) as JCR nodes under /home/users. A security audit should review: (1) Default accounts (admin, anonymous) — verify passwords are changed and anonymous has minimal permissions. (2) Service users under /home/users/system — verify each has minimal required permissions. (3) Author accounts — verify inactive accounts are disabled and no accounts have unnecessary admin rights.",
    category: "Security",
  },
  {
    id: "cq-100",
    title: "Sling resource-level access control adds requirement checks at the Sling layer on top of JCR ACLs — it allows restricting access by Sling resource type, not just JCR path",
    reference:
      "What is AEM's Sling Resource Access Security (SRAS/Granite Resource Access Control) and how does it complement JCR ACLs for securing AEM endpoints?",
    explanation:
      "SEC-006 and Defense-in-Depth: AEM's security is layered. JCR ACLs (rep:policy nodes) control access at the repository node level — who can read or modify specific JCR paths. Sling Resource Access Security (SRAS) adds access control at the Sling resource layer — it can restrict which resource types a given user or group can access, regardless of the JCR path. Together they provide defense-in-depth: an attacker must bypass both layers.",
    category: "Security",
  },
]

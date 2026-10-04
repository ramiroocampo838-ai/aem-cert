/**
 * AEM Dispatcher & Caching - Slide Content
 * 14 slides covering Dispatcher, caching, validation, and CDN behavior,
 * aligned to public/speeches/dispatcher.txt.
 *
 * Source: public/speeches/dispatcher.txt
 * Theme: fuchsia/purple/slate — from-fuchsia-900 via-purple-900 to-slate-900
 */

export interface CodeExample {
  language: "java" | "javascript" | "typescript" | "xml" | "html" | "htl" | "bash"
  code: string
  title?: string
  highlightLines?: number[]
}

export interface ExpandableContent {
  title: string
  content: string | string[] | { text: string; url?: string }[]
  type?: "list" | "text" | "table"
}

export interface DiagramData {
  type: "architecture" | "flow" | "tree" | "comparison" | "ascii"
  description: string
  elements?: { id: string; label: string; tooltip?: string }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface DispatcherSlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: { text: string; content: string }[]
  backgroundColor?: string
  estimatedTime: number
}

const THEME = "from-fuchsia-900 via-purple-900 to-slate-900"

export const dispatcherSlides: DispatcherSlide[] = [
  {
    id: 1,
    title: "AEM Dispatcher and Caching",
    subtitle: "Apache Web Server Layer, Security, and Cache Delivery",
    content: [
      "This lesson follows components, Maven structure, workflows, and fragments by focusing on delivery: the Apache web server layer with the Dispatcher module and the caching around it.",
      "The speech maps Dispatcher mainly to the Configurations part of the exam at about 15 percent, while also supporting Build and Deployment and Analyzing and Debugging. Expect scenario questions about why a page was not cached, which file contains a rule, how invalidation works, or what makes validation fail.",
      "In AEM as a Cloud Service, traffic flows through the CDN to Apache, which supports modules including Dispatcher. Dispatcher is primarily a cache that limits processing on publish nodes, and it is also a security layer because its filters control which requests can reach AEM.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "High-level request path in AEM as a Cloud Service",
        elements: [
          { id: "cdn", label: "CDN", tooltip: "First caching layer in front of Apache" },
          { id: "apache", label: "Apache + Dispatcher", tooltip: "Security filtering and cache layer" },
          { id: "publish", label: "AEM Publish", tooltip: "Renders uncached or invalidated content" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Exam Scenarios Called Out by the Speech",
        content: [
          "Why was this page not cached?",
          "Which file holds this rule?",
          "How is the cache invalidated?",
          "What fails Dispatcher validation?",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },
  {
    id: 2,
    title: "dispatcher.any, Farms, and Includes",
    subtitle: "How the Core Dispatcher Configuration is Structured",
    content: [
      "Dispatcher configuration is stored by default in a text file named dispatcher.any. Property names are prefixed with a forward slash, and multi-valued properties wrap child items in braces.",
      "The top-level properties are /name, which uniquely identifies the Dispatcher instance, and /farms. A farm defines the Dispatcher behavior for a site or group of URLs. Use one farm when pages are handled the same way, and several farms when sites or URL areas need different behavior.",
      "A farm can contain properties such as /clientheaders, /virtualhosts, /sessionmanagement, /renders, /filter, /vanity_urls, /cache, /statistics, /health_check, /retryDelay, /numberOfRetries, /unavailablePenalty, and /failover. The $include statement splits large configurations into smaller files, wildcards such as farm_*.any are supported, environment variables can be referenced as ${variable_name}, and when more than one farm exists they are evaluated bottom-up.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "dispatcher.any farm skeleton",
        code: `/name "dispatcher"
/farms {
  /site {
    /clientheaders {
      $include "conf.dispatcher.d/clientheaders/clientheaders.any"
    }
    /virtualhosts {
      $include "conf.dispatcher.d/virtualhosts/virtualhosts.any"
    }
    /renders {
      $include "conf.dispatcher.d/renders/default_renders.any"
    }
    /filter {
      $include "conf.dispatcher.d/filters/filters.any"
    }
    /cache {
      /docroot "\${DOCROOT}"
      /rules {
        $include "conf.dispatcher.d/cache/rules.any"
      }
      /allowedClients {
        $include "conf.dispatcher.d/cache/default_invalidate.any"
      }
    }
  }
}`,
        highlightLines: [1, 2, 4, 7, 10, 13, 17, 20],
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Configuration organization around farms",
        asciiContent: `dispatcher.any
|-- /name
\`-- /farms
    |-- /clientheaders
    |-- /virtualhosts
    |-- /renders
    |-- /filter
    \`-- /cache`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 3,
    title: "Virtual Hosts",
    subtitle: "Matching Host, Scheme, and URI to the Correct Farm",
    content: [
      "The /virtualhosts property lists every hostname and URI combination the farm accepts. The asterisk wildcard is allowed, and a single asterisk can handle all requests.",
      "Dispatcher chooses the best-matching virtual host by starting at the lowest farm and moving upward. Inside a farm, it starts at the top value and works down. The first virtual host matching host, scheme, and URI wins. If none match both scheme and URI, the first host-only match is used. If no host matches, the topmost virtual host of the topmost farm is used.",
      "Because of that fallback behavior, the speech says to put the default virtual host at the top of the virtualhosts property in the topmost farm. In Cloud Service, at least one virtual host must match ServerAlias values *.local, localhost, and 127.0.0.1 for invalidation, and *.adobeaemcloud.net plus *.adobeaemcloud.com for internal Adobe processes.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "/virtualhosts example",
        code: `/virtualhosts {
  "*"
  "example.com"
  "https://example.com/content/*"
  "https://www.example.com/*"
}`,
        highlightLines: [2, 3, 4, 5],
      },
      {
        language: "bash",
        title: "vhost ServerAlias example for Cloud Service",
        code: `<VirtualHost *:80>
  ServerName "publish"
  ServerAlias "*.local" "localhost" "127.0.0.1"
  ServerAlias "*.adobeaemcloud.net" "*.adobeaemcloud.com"
</VirtualHost>`,
        highlightLines: [2, 3, 4],
      },
    ],
    expandableSections: [
      {
        title: "Matching Order to Memorize",
        content: [
          "Lowest farm to highest farm",
          "Top virtual host value to bottom value inside the farm",
          "Best match prefers host + scheme + URI",
          "Fallback is host-only, then topmost virtual host of the topmost farm",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 4,
    title: "Renders and Client Headers",
    subtitle: "Where Requests Go and Which Headers Reach AEM",
    content: [
      "The /renders property tells Dispatcher where to send a request to render a document. Each render has a /hostname and a /port, and a render is typically an AEM publish instance. When there are several renders, Dispatcher distributes requests among them.",
      "Important render options are /timeout for the connection timeout in milliseconds, where 0 means wait indefinitely, /receiveTimeout for how long a response may take with a default of 600000 milliseconds, and /secure set to 1 to make Dispatcher use HTTPS to reach AEM. If header parsing hits the receive timeout, Dispatcher returns HTTP 504.",
      "The /clientheaders property defines which HTTP headers Dispatcher forwards from the client to the render. If you customize this property, you must specify the full exhaustive list, including the default headers. The speech specifically notes that a Dispatcher handling page activation requests needs the PATH header.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "/renders example",
        code: `/renders {
  /publish-1 {
    /hostname "<publish-host-1>"
    /port "4503"
    /timeout "0"
    /receiveTimeout "600000"
    /secure "1"
  }
  /publish-2 {
    /hostname "<publish-host-2>"
    /port "4503"
  }
}`,
        highlightLines: [2, 3, 4, 5, 6, 7, 9, 10],
      },
      {
        language: "bash",
        title: "/clientheaders example",
        code: `/clientheaders {
  "Cache-Control"
  "Content-Type"
  "Host"
  "PATH"
  "User-Agent"
}`,
        highlightLines: [2, 5],
      },
    ],
    expandableSections: [
      {
        title: "Timeout Notes",
        content: [
          { text: "/timeout -> connection timeout in milliseconds; 0 means wait indefinitely" },
          { text: "/receiveTimeout -> response timeout; default is 600000 milliseconds" },
          { text: "Timeout while parsing response headers -> Dispatcher returns 504" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 5,
    title: "Filters",
    subtitle: "Allowlist Security with Request-Line Elements",
    content: [
      "The /filter section defines which HTTP requests Dispatcher accepts. Rejected requests are sent back to the web server with HTTP 404. If no /filter section exists, all requests are accepted.",
      "Filter rules allow or deny. Each rule has a /type and a pattern against part of the request line. The speech recommends an allowlist strategy: deny everything first, then allow only what is needed. The first deny-all rule is type deny with url asterisk.",
      "The request-line elements are /method, /url, /query, and /protocol, and starting with Dispatcher 4.2.0 also /path, /selectors, /extension, and /suffix. Filtering specific elements is preferred over filtering the whole request line. Simple patterns use double quotes, regular-expression patterns use single quotes from Dispatcher 4.2.0 onward, filter changes require a cache purge, trace logging helps explain unexpected behavior, and requests for the statfile are always rejected.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Deny-all plus allow rules",
        code: `/filter {
  /0001 { /type "deny"  /url "*" }
  /0002 { /type "allow" /method "GET"  /url "/content/*" /extension "html" }
  /0003 { /type "allow" /method "HEAD" /url "/content/*" /extension "html" }
  /0004 { /type "allow" /method "GET"  /path "/content/*" /selectors '([^.]+\\.)*' /extension "css|js" }
  /0005 { /type "allow" /method "GET"  /url "/content/dam/*" /extension "pdf|zip" }
  /0006 { /type "deny"  /url "/dispatcher/invalidate.cache" }
}`,
        highlightLines: [2, 3, 4, 5, 6, 7],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Filtering style recommended by the speech",
        elements: [
          { id: "allowlist", label: "Preferred: deny all, then allow needed requests", tooltip: "Element-based filtering" },
          { id: "glob", label: "Avoid: whole-line glob filtering", tooltip: "Deprecated and less safe" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 6,
    title: "Filter Safety and Vanity URLs",
    subtitle: "Validation Failures, CVE Risk, and Extra Vanity URL Setup",
    content: [
      "In AEM as a Cloud Service, the Dispatcher validator checks farm files and fails if a filter rule uses a glob to allow requests because of CVE-2016-0957. The speech's example is that allowing GET *.css* could also allow any resource followed by a query string whose value ends in .css.",
      "Validation also fails if an admin feature is exposed, such as /crx/de or /system/console. The security checklist is to deny sensitive paths, prevent anonymous write access, and restrict who can flush the cache. A request to /dispatcher/invalidate.cache from an unauthorized client should return 403.",
      "Vanity URLs need extra setup. If a page request is denied by a filter, Dispatcher consults its vanity URL list. The /vanity_urls section uses /url set to /libs/granite/dispatcher/content/vanityUrls.html, /file for the local storage file, and /delay for the poll interval in seconds. A filter must still deny the vanity URL, and with Dispatcher 4.3.6 the /loadOnStartup property controls startup loading and defaults to 1.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Forbidden glob allow example",
        code: `/filter {
  /0001 {
    /type "allow"
    /glob "GET *.css*"
  }
}`,
        highlightLines: [3, 4],
      },
      {
        language: "bash",
        title: "/vanity_urls example",
        code: `/vanity_urls {
  /url "/libs/granite/dispatcher/content/vanityUrls.html"
  /file "<local-vanity-url-file>"
  /delay "300"
  /loadOnStartup "1"
}`,
        highlightLines: [2, 3, 4, 5],
      },
    ],
    expandableSections: [
      {
        title: "Security Checklist from the Speech",
        content: [
          "Deny access to sensitive paths",
          "Ensure anonymous write access is not possible",
          "Restrict who can flush the cache",
          "Unauthorized cache-flush request should return 403",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 7,
    title: "Cache Basics",
    subtitle: "docroot, Rules, and What Dispatcher Never Caches",
    content: [
      "The /cache section controls how Dispatcher caches documents. Its subproperties include /docroot, /statfile, /serveStaleOnError, /allowAuthorized, /rules, /statfileslevel, /invalidate, /invalidateHandler, /allowedClients, /ignoreUrlParams, /headers, /mode, /gracePeriod, and /enableTTL.",
      "The /docroot is where cached files are stored, and it must match the web server document root. When multiple farms are used, each farm needs a different document root. The /rules property decides which paths are cached: allow means cache, deny means render each time. The speech says to allow everything and then deny dynamic exceptions when that fits the site.",
      "Dispatcher never caches a document when the request URI contains a question mark, the file extension is missing, authentication headers are present unless configured otherwise, or AEM responds with no-cache, no-store, or must-revalidate. Only GET and HEAD are cacheable, and closed user groups must not be cached because user rights are not checked for cached pages.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "/cache and /rules example",
        code: `/cache {
  /docroot "\${DOCROOT}"
  /statfile "\${DOCROOT}/.stat"
  /rules {
    /0000 { /glob "*" /type "allow" }
    /0001 { /glob "/content/forms/*" /type "deny" }
  }
}`,
        highlightLines: [2, 3, 5, 6],
      },
    ],
    expandableSections: [
      {
        title: "Never Cached Regardless of Rules",
        content: [
          { text: "Request URI contains a question mark" },
          { text: "File extension is missing" },
          { text: "Authentication header is set, unless configured otherwise" },
          { text: "Backend response contains no-cache, no-store, or must-revalidate" },
          { text: "Request method is not GET or HEAD" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 8,
    title: "Cache Invalidation",
    subtitle: ".stat Files, Auto-Invalidation, Manual Flush, and Stale Serving",
    content: [
      "Dispatcher invalidates by touching a .stat file and comparing its modification time with the cached document. If the .stat file is newer, Dispatcher fetches the document again. The /statfileslevel property controls how many directory levels get a .stat file, and if /statfileslevel is set, /statfile is ignored and the name .stat is used.",
      "The /invalidate property defines which documents are automatically invalidated. These files are not deleted immediately; they are checked again on the next request. The normal pattern is to deny everything and then allow *.html, with other file types such as PDF or ZIP added when needed.",
      "Manual flush uses an HTTP POST to /dispatcher/invalidate.cache with headers such as CQ-Action and CQ-Handle. /allowedClients should restrict which IPs can flush, /invalidateHandler runs a script for each invalidation request, /gracePeriod throttles .stat touching and is recommended at 2 seconds, and /serveStaleOnError set to 1 serves stale content with status 111 when AEM returns 502, 503, or 504 or times out.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "/invalidate and /allowedClients example",
        code: `/cache {
  /statfileslevel "2"
  /invalidate {
    /0000 { /glob "*"      /type "deny" }
    /0001 { /glob "*.html" /type "allow" }
    /0002 { /glob "*.pdf"  /type "allow" }
  }
  /allowedClients {
    /0000 { /glob "127.0.0.1" /type "allow" }
    /0001 { /glob "*"         /type "deny" }
  }
  /gracePeriod "2"
  /serveStaleOnError "1"
}`,
        highlightLines: [2, 4, 5, 6, 8, 9, 11, 12],
      },
      {
        language: "bash",
        title: "Manual flush request",
        code: `curl -X POST https://<dispatcher-host>/dispatcher/invalidate.cache ^
  -H "CQ-Action: Activate" ^
  -H "CQ-Handle: /content/site/en/*" ^
  -H "CQ-Action-Scope: ResourceOnly"`,
        highlightLines: [1, 2, 3, 4],
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Path-based .stat touching",
        asciiContent: `docroot (level 0)
|-- .stat
\`-- content
    |-- .stat
    \`-- site
        |-- .stat
        \`-- en
            \`-- page.html`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 9,
    title: "URL Parameters, Headers, TTL, and Authentication",
    subtitle: "Fine-Grained Cache Decisions Beyond Path Rules",
    content: [
      "The /ignoreUrlParams section decides whether a request with query parameters can still be cached. If every parameter is ignored, the page is cached. If any parameter is not ignored, the page is not cached. The speech recommends an allowlist approach: ignore everything first, then deny only parameters that must bypass the cache such as nocache.",
      "The /headers property lists response headers Dispatcher stores next to the cached file and adds to later responses. The default list includes Cache-Control, Content-Disposition, Content-Type, Expires, Last-Modified, and X-Content-Type-Options. To store ETag, add it to /headers and set the Apache directive FileETag none.",
      "With /enableTTL set to 1, Dispatcher reads Cache-Control max-age or Expires from the backend and uses an auxiliary file for time-based invalidation. From Dispatcher 4.3.5, TTL and invalidation rules both apply. The /allowAuthorized default of 0 means authenticated requests are not cached, session management requires that value to remain 0, and /mode controls new cache file permissions with default 0755.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "/ignoreUrlParams allowlist example",
        code: `/ignoreUrlParams {
  /0000 { /glob "*"        /type "allow" }
  /0001 { /glob "nocache"  /type "deny" }
  /0002 { /glob "preview"  /type "deny" }
}`,
        highlightLines: [2, 3, 4],
      },
      {
        language: "bash",
        title: "/headers and /enableTTL example",
        code: `/cache {
  /headers {
    "Cache-Control"
    "Content-Disposition"
    "Content-Type"
    "ETag"
    "Expires"
    "Last-Modified"
    "X-Content-Type-Options"
  }
  /enableTTL "1"
  /allowAuthorized "0"
  /mode "0755"
}`,
        highlightLines: [3, 6, 7, 8, 10, 11, 12],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 10,
    title: "Invalidating from Author or Publish",
    subtitle: "Replication Agent Timing and Topology Tradeoffs",
    content: [
      "On AEM 6.5 style setups, a replication agent invalidates Dispatcher. The standard Dispatcher Flush agent is installed by default, and when configured on author it sends an invalidation request to /dispatcher/invalidate.cache on the Dispatcher host when a page is activated. The URI property is used only with path-based virtual hosts so the request can target a specific farm.",
      "The speech recommends a dedicated replication user instead of admin. It also points out two drawbacks of invalidating from author: Dispatcher must be reachable from author, which a firewall may prevent, and publication plus invalidation happen at the same time, which can let an old page be re-cached if the user request lands between invalidation and the new publish.",
      "Invalidating from publish moves cache management to publish so the invalidation request is sent when the publish instance receives the published page. The decision should be made by an experienced administrator, and every affected publish instance needs the agent configuration.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Invalidate-from-author versus invalidate-from-publish",
        elements: [
          { id: "author", label: "From author", tooltip: "Earlier invalidation but timing and firewall concerns" },
          { id: "publish", label: "From publish", tooltip: "Invalidates after publish receives the content" },
        ],
      },
      {
        type: "flow",
        description: "Author-side invalidation race called out in the speech",
        elements: [
          { id: "activate", label: "Author activates page", tooltip: "Replication and invalidation start together" },
          { id: "flush", label: "Dispatcher cache invalidated", tooltip: "Old cache entry removed" },
          { id: "request", label: "User requests page", tooltip: "May land before new publish is available" },
          { id: "old", label: "Old page re-cached", tooltip: "Main race condition highlighted by the speech" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Transport URI Reminder",
        content: "The replication Transport URI points to /dispatcher/invalidate.cache on the Dispatcher host, and the URI property matters only when path-based virtual hosts are used to target a farm.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 11,
    title: "Dispatcher in AEM as a Cloud Service",
    subtitle: "SDK Tools, Flexible Mode, and Project File Structure",
    content: [
      "Dispatcher Tools are part of the AEM as a Cloud Service SDK. They provide a vanilla file structure for a Maven project, tooling that validates supported directives and syntax, and a Docker image that runs Dispatcher locally.",
      "The speech describes two modes. Flexible mode is recommended and is the default for archetype 28 and higher. It is enabled by the opt-in/USE_SOURCES_DIRECTLY file and removes limits on file structure and rewrite rule count. Legacy mode required a single rewrite.rules file.",
      "The project has two main Dispatcher folders: conf.d for Apache configuration and conf.dispatcher.d for Dispatcher configuration. A virtual host or farm is created in the available folder and enabled by a relative symbolic link in the enabled folder. Do not copy default.vhost directly into enabled_vhosts, and in flexible mode use relative paths.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Flexible-mode folder tree",
        code: `dispatcher
|-- conf.d
|   |-- available_vhosts
|   |-- enabled_vhosts
|   |-- rewrites
|   \`-- variables
\`-- conf.dispatcher.d
    |-- available_farms
    |-- enabled_farms
    |-- cache
    |-- clientheaders
    |-- filters
    |-- renders
    |-- virtualhosts
    \`-- dispatcher.any`,
        highlightLines: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    ],
    diagrams: [
      {
        type: "tree",
        description: "Cloud Service Dispatcher folder split",
        elements: [
          { id: "confd", label: "conf.d -> Apache config", tooltip: "vhosts, rewrites, variables" },
          { id: "dispatcherd", label: "conf.dispatcher.d -> Dispatcher config", tooltip: "farms, cache, filters, renders, virtualhosts" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 12,
    title: "Customizable and Immutable Files",
    subtitle: "What Deploys to Cloud and What Validation Enforces",
    content: [
      "Customizable files are transferred to the Cloud environment during deployment. The speech lists .vhost files, rewrite.rules, custom.vars, global.vars, .farm files, cache/rules.any, clientheaders/clientheaders.any, filters/filters.any, and virtualhosts/virtualhosts.any. In global.vars you can change Dispatcher and rewrite log levels.",
      "Immutable files are part of the base framework and local edits to them have no effect in Cloud because they are not transferred. The latest version is used during deployment. The list includes default.vhost, dispatcher_vhost.conf, default_rewrite.rules, default.farm, default_invalidate.any, default_rules.any, default_clientheaders.any, dispatcher.any, default_filters.any, default_renders.any, and default_virtualhosts.any.",
      "Every farm must include default_renders.any in /renders and default_invalidate.any in /allowedClients under /cache. Custom includes are allowed only in /clientheaders, /filters, /rules under /cache, and /virtualhosts, with exact filenames such as clientheaders.any, filters.any, rules.any, or the default_ variant. Including anything else fails validation, and default_virtualhosts.any must not be included in a customization because it matches every request. Local validation runs in three phases: Dispatcher validator, httpd -t, and immutable-file checks. Cloud Manager also runs httpd -t during deployment.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "validate.sh command",
        code: `bin/validate.sh src`,
        highlightLines: [1],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Customizable vs immutable Dispatcher files",
        elements: [
          { id: "custom", label: "Customizable", tooltip: ".vhost, .farm, rules.any, filters.any, clientheaders.any, virtualhosts.any, vars files" },
          { id: "immutable", label: "Immutable", tooltip: "default_* files, dispatcher.any, framework-owned files" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Three Validation Phases",
        content: [
          "Phase 1 -> Dispatcher validator checks allowlisted directives",
          "Phase 2 -> httpd -t checks Apache syntax",
          "Phase 3 -> immutable files are checked for local modification",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 13,
    title: "CDN and Cache Headers in Cloud Service",
    subtitle: "Cache-Control, Surrogate-Control, and Header Defaults",
    content: [
      "In AEM as a Cloud Service, CDN caching is controlled by origin response headers such as Cache-Control, Surrogate-Control, and Expires. The speech says these are typically set in Dispatcher vhost configuration with mod_headers or in custom Java code on publish.",
      "The CDN cache key includes the full request URL, including query parameters, so each query string can create a separate cache entry. Responses with private, no-cache, or no-store in Cache-Control, or with a Set-Cookie header, are not cached by the CDN.",
      "For text and HTML, Dispatcher sets default headers so browsers cache for five minutes and the CDN respects that. DISABLE_DEFAULT_CACHING in global.vars turns the default off, and EXPIRATION_TIME overrides it for all HTML and text. For more precise behavior, use LocationMatch with Header directives. Surrogate-Control targets the Adobe-managed CDN specifically. Cloud Service removes a cache header if it detects it was applied to content Dispatcher cannot cache unless the always option is used, and a file under conf.dispatcher.d/cache must keep the default allow glob asterisk rule.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "LocationMatch Cache-Control and Surrogate-Control",
        code: `<LocationMatch "^/content/.*\\.html$">
  Header always set Cache-Control "max-age=300, stale-while-revalidate=30, stale-if-error=86400"
  Header always set Surrogate-Control "max-age=600"
</LocationMatch>`,
        highlightLines: [2, 3],
      },
      {
        language: "bash",
        title: "global.vars cache variables",
        code: `Define DISABLE_DEFAULT_CACHING
Define EXPIRATION_TIME "300"`,
        highlightLines: [1, 2],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 14,
    title: "Clientlibs, Blob Content, and Exam Tips",
    subtitle: "Special Caching Cases and Final Rules to Memorize",
    content: [
      "Client libraries are generated so browsers can cache JavaScript and CSS indefinitely because any change produces a new file with a unique path. Cache-Control is set to immutable, or to 30 days for older browsers that do not respect immutable.",
      "For blob content, programs created after mid-May 2022 with program IDs above 65000 cache by default while respecting authentication. If no cache header is set, public content gets public, max-age 600, immutable, while authenticated traffic gets private. Older programs do not cache blob content by default. The environment variable AEM_BLOB_ENABLE_CACHING_HEADERS can change this. Blobs larger than 16 KB are served as 302 redirects, and only a limited header set such as Content-Disposition and Cache-Control can be customized.",
      "The final exam checklist from the speech is direct: filters deny by default and allow only what is needed, glob allow rules are forbidden, a URL with a question mark is not cached unless the parameters are ignored, .stat and statfileslevel control invalidation depth, auto-invalidation applies to HTML, only customizable files are deployed in Cloud Service, immutable default_ files cannot be changed, every farm must include default_renders.any and default_invalidate.any, and validate should run before pushing. Optimization tips include avoiding User-Agent in Vary and using stale-while-revalidate and stale-if-error.",
    ],
    expandableSections: [
      {
        title: "Final Memorization List",
        content: [
          "Filters deny by default and allow what is needed",
          "Glob allow rules are forbidden",
          "Question-mark URLs are not cached unless parameters are ignored",
          ".stat file invalidation depth is controlled by statfileslevel",
          "Auto-invalidation usually targets HTML",
          "Only customizable files deploy in Cloud Service",
          "default_renders.any and default_invalidate.any are required includes",
          "Run validation before pushing",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
]

export function getTotalDispatcherSlides(): number {
  return dispatcherSlides.length
}

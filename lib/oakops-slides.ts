/**
 * AEM Oak Indexes, Logs, Replication & Topologies - Slide Content
 * 14 slides covering Oak indexes, logging, replication, and topology choices,
 * aligned to public/speeches/oak-ops.txt.
 *
 * Source: public/speeches/oak-ops.txt
 * Theme: lime/green/slate — from-lime-900 via-green-900 to-slate-900
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

export interface OakOpsSlide {
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

const THEME = "from-lime-900 via-green-900 to-slate-900"

export const oakOpsSlides: OakOpsSlide[] = [
  {
    id: 1,
    title: "Oak Indexes, Logs, Replication, and Topologies",
    subtitle: "The Operational Topics Grouped in the Final Lesson",
    content: [
      "This final lesson combines four operational areas: how Oak finds content with indexes, how AEM writes logs, how content moves from Author to Publish through replication, and how AEM instances are arranged in a topology.",
      "The speech maps the material mainly to Analyzing and Debugging at about 18 percent of the exam and Environment Maintenance at about 13 percent, while also supporting Build and Deployment because index definitions and log configurations are deployed as code.",
      "Expect scenario questions such as why a query is slow, what a custom index must be named, which log should be checked, why a publish queue is blocked, or which persistence option fits a topology. The lesson also calls out when Experience Manager 6.5 and Cloud Service documentation differ.",
    ],
    expandableSections: [
      {
        title: "Scenario Questions Emphasized by the Speech",
        content: [
          "Why is this query slow?",
          "What name must a custom index have?",
          "Which log shows this request?",
          "Why was the publish queue blocked?",
          "Which persistence fits this topology?",
        ],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Operational themes in the lesson",
        elements: [
          { id: "indexes", label: "Oak indexes", tooltip: "How queries avoid traversal" },
          { id: "logs", label: "Logging", tooltip: "Where to inspect application and delivery behavior" },
          { id: "replication", label: "Replication", tooltip: "How content moves and caches are invalidated" },
          { id: "topology", label: "Topologies", tooltip: "How persistence and scaling are arranged" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },
  {
    id: 2,
    title: "Oak Query Engine and Indexers",
    subtitle: "Traversal Warnings, Native SQL-2, and Cost Selection",
    content: [
      "Oak does not index content by default, unlike Jackrabbit 2, so custom indexes must be created when necessary. If a query has no supporting index, Oak can still execute it by traversing many nodes, but it is likely slow.",
      "When Oak runs a query without an index, it writes a WARN log message stating that it traversed a number of nodes and suggesting either creating an index or changing the query. The query engine supports XPath, SQL-2, deprecated SQL, and JQOM, and parses input into an abstract syntax tree that is then transformed into SQL-2 as Oak's native language.",
      "Available indexers include Property, Lucene, Solr, and the Traversal Index. When several indexers can answer a query, each estimates a cost, Oak chooses the lowest-cost option, retrieves its results, then filters them to enforce read access and full query matching.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "How Oak chooses and executes an index strategy",
        elements: [
          { id: "query", label: "Query input", tooltip: "XPath, SQL-2, deprecated SQL, or JQOM" },
          { id: "sql2", label: "Converted to SQL-2", tooltip: "Native language after parsing" },
          { id: "cost", label: "Cost estimation", tooltip: "Candidate indexers estimate cost" },
          { id: "pick", label: "Lowest-cost indexer", tooltip: "Selected for execution" },
          { id: "filter", label: "Access + match filtering", tooltip: "Final result is checked for ACLs and completeness" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Indexer Roles",
        content: [
          { text: "Property Index -> property constraints stored as repository definitions" },
          { text: "Lucene and Solr -> full-text capable indexers" },
          { text: "Traversal Index -> no real index, walks nodes when nothing else applies" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 3,
    title: "Property and Lucene Indexes",
    subtitle: "oak:index Definitions, Async Behavior, and Reindexing",
    content: [
      "Index definitions live under oak:index and use the node type oak:QueryIndexDefinition. The Property Index is meant for non-full-text property constraints, with type set to property and propertyNames listing the indexed fields; unique adds a uniqueness constraint, declaringNodeTypes narrows the node type, and reindex true triggers a full reindex.",
      "The Ordered index is deprecated and should be replaced by a Lucene Property Index. Lucene full-text indexes use type lucene with async set to async, so updates happen on a background thread and recent changes may be invisible briefly. If no full-text index exists, full-text conditions do not work as expected.",
      "Since Oak 1.0.8 Lucene can also support non-full-text property constraints by setting fulltextEnabled to false and includePropertyNames to the relevant fields. Analyzers, available since Oak 1.2.0, run both at index time and query time, and large reindex operations may require text pre-extraction and oak-run for the initial build.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Property index definition",
        code: `<cq:lastModifiedBy
    jcr:primaryType="oak:QueryIndexDefinition"
    type="property"
    propertyNames="[jcr:lastModifiedBy]"
    declaringNodeTypes="[cq:PageContent]"
    unique="{Boolean}false"
    reindex="{Boolean}true"/>`,
        highlightLines: [2, 3, 4, 5, 7],
      },
      {
        language: "xml",
        title: "Lucene full-text and property-style definition",
        code: `<acmeSearch-1-custom-1
    jcr:primaryType="oak:QueryIndexDefinition"
    type="lucene"
    async="[async]"
    fulltextEnabled="{Boolean}false"
    includePropertyNames="[jcr:title,cq:tags]"
    includePropertyTypes="[String]"
    reindex="{Boolean}true">
  <analyzers jcr:primaryType="nt:unstructured">
    <default jcr:primaryType="nt:unstructured"/>
  </analyzers>
</acmeSearch-1-custom-1>`,
        highlightLines: [2, 3, 4, 5, 6, 9, 10],
      },
    ],
    expandableSections: [
      {
        title: "What the Speech Says to Remember",
        content: [
          "Property indexes suit property constraints that are not full-text.",
          "Lucene full-text and Lucene property indexes are async, so results can lag behind repository changes.",
          "Ordered indexes are deprecated.",
          "Large repository reindexing can require text pre-extraction and oak-run.",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 4,
    title: "Index Definitions in Cloud Service",
    subtitle: "Deploying lucene Indexes Through Cloud Manager",
    content: [
      "In AEM as a Cloud Service, index configuration is specified before deployment and delivered through Cloud Manager pipelines rather than changed live on an instance. Users do not rely on the Index Manager of a single instance in the cloud; that applies to local development and on-premise style deployments.",
      "Rolling deployments mean two index sets exist for a period, one for the old version and one for the new version, and the Cloud Manager build page shows whether indexing has completed. For customization, only lucene indexes are supported, async can be async, async and nrt, or fulltext-async, custom analyzers are not supported, useInSimilarity is not supported, and customers do not configure Elasticsearch indexes directly.",
      "The main cloud use cases are adding a new custom index, updating an existing one by adding a new version, and removing an obsolete index. Project setup must use filevault-package-maven-plugin 1.3.2 or later, add oak:index to immutableRootNodeNames, enable allowIndexDefinitions and noIntermediateSaves in ui.apps and ui.apps.structure, and add a filter for /oak:index in ui.apps.structure.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "FileVault setup for cloud index deployment",
        code: `<plugin>
  <groupId>org.apache.jackrabbit</groupId>
  <artifactId>filevault-package-maven-plugin</artifactId>
  <version>1.3.2</version>
  <configuration>
    <immutableRootNodeNames>apps,libs,oak:index</immutableRootNodeNames>
    <allowIndexDefinitions>true</allowIndexDefinitions>
    <noIntermediateSaves>true</noIntermediateSaves>
  </configuration>
</plugin>`,
        highlightLines: [3, 4, 6, 7, 8],
      },
      {
        language: "xml",
        title: "Filter entry for /oak:index",
        code: `<workspaceFilter version="1.0">
  <filter root="/oak:index"/>
</workspaceFilter>`,
        highlightLines: [2],
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Cloud deployment behavior for index changes",
        elements: [
          { id: "git", label: "Index definition in Git", tooltip: "Configured before deployment" },
          { id: "pipeline", label: "Cloud Manager pipeline", tooltip: "Deploys content and index definitions" },
          { id: "old", label: "Old index set", tooltip: "Still serves the current version during rollout" },
          { id: "new", label: "New index set", tooltip: "Built for the new version before traffic switch" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 5,
    title: "Index Names and Simplified Index Management",
    subtitle: "Custom Naming Rules, _oak_index, and diff.index",
    content: [
      "The speech splits indexes into three categories: out-of-the-box indexes such as cqPageLucene-2 or damAssetLucene-8, customizations of out-of-the-box indexes such as damAssetLucene-8-custom-1, and fully custom indexes that also end with -custom- and a version number but add a prefix such as acme.product-1-custom-2 to avoid naming conflicts.",
      "To customize an out-of-the-box index, copy the latest definition from a Cloud Service environment, rename it with the custom suffix, and add the changes. If the cloud index type is elasticsearch, change type to lucene and async to async and nrt. New full-text indexes on dam:Asset are strongly discouraged; the guidance is to customize damAssetLucene instead.",
      "Index folders live under jcr_root in a project folder named _oak_index because a colon is not valid in filenames. Simplified Index Management introduces diff.index, where diff.json customizes out-of-the-box indexes and defines custom ones, letting the platform merge changes automatically with the latest out-of-the-box definition when possible. It does not support indexes covering /apps or /libs such as cqPageLucene and ntBaseLucene, so those stay on legacy configuration and ntBaseLucene should be replaced by a fully custom prefixed index.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Naming patterns called out by the speech",
        code: `cqPageLucene-2
damAssetLucene-8-custom-1
acme.product-1-custom-2`,
        highlightLines: [1, 2, 3],
      },
      {
        language: "javascript",
        title: "diff.index diff.json example",
        code: `{
  "damAssetLucene-8": {
    "includedPaths": ["/content/dam/acme"],
    "tags": ["visual-search"]
  },
  "acme.product-1-custom-2": {
    "type": "lucene",
    "async": ["async", "nrt"],
    "fulltextEnabled": false,
    "includePropertyNames": ["sku", "category"]
  }
}`,
        highlightLines: [2, 3, 4, 6, 7, 8, 9],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Legacy index folders versus simplified diff.index management",
        elements: [
          { id: "legacy", label: "Legacy _oak_index folders", tooltip: "Needed for indexes such as cqPageLucene or ntBaseLucene" },
          { id: "diff", label: "diff.index + diff.json", tooltip: "Merged with the latest out-of-the-box index automatically" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Folder and Filter Reminder",
        content: [
          "_oak_index is used in the project because oak:index cannot be used as a filename.",
          "diff.index contains a placeholder .content.xml plus diff.json.",
          "The vault filter must include /oak:index/diff.index.",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 6,
    title: "Logging Basics and OSGi Configuration",
    subtitle: "Root Logger, Writers, and Service-Specific Routing",
    content: [
      "AEM logging is based on Sling logging and OSGi configurations. The speech groups the configuration into global parameters for the central logging service, request data logging, and settings for individual services.",
      "The Apache Sling Logging Configuration controls the root logger, including level, central log file location, number of versions to keep, rotation by size or time interval, and message format. For individual services, a logger produces messages, a Logging Logger formats them, and a Logging Writer writes them to the physical file.",
      "The Log File property links a Logger to a Writer and the values must match. If they do not match, AEM creates an implicit writer with default configuration and daily rotation. This is useful when routing one service into its own file during development, and on 6.5 the main files are error.log, request.log, and access.log.",
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "OSGi logging configuration shape",
        code: `{
  "org.apache.sling.commons.log.level": "INFO",
  "org.apache.sling.commons.log.file": "logs/error.log",
  "org.apache.sling.commons.log.file.size": "10MB",
  "org.apache.sling.commons.log.pattern": "{0,date,dd.MM.yyyy HH:mm:ss.SSS} *{4}* [{2}] {3} {5}",
  "org.apache.sling.commons.log.names": [
    "com.acme.aem.core"
  ]
}`,
        highlightLines: [2, 3, 5, 6],
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "How a service-specific log reaches a file",
        elements: [
          { id: "service", label: "OSGi service", tooltip: "Writes the log message" },
          { id: "logger", label: "Logging Logger", tooltip: "Formats the message" },
          { id: "writer", label: "Logging Writer", tooltip: "Writes to a physical file" },
          { id: "file", label: "Log file", tooltip: "Linked by matching Log File values" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 7,
    title: "Cloud Service Logs",
    subtitle: "Git-Backed Configuration and Fixed Core Log Settings",
    content: [
      "In AEM as a Cloud Service, log settings live in configuration files stored in Git and deployed through Cloud Manager. The speech separates logging into AEM application logging, Apache HTTPD plus Dispatcher logging, and CDN logging.",
      "AEM application logging contains the AEM Java log, HTTP request log, and HTTP access log. Requests served from Dispatcher cache or an upstream CDN do not appear there. Java log levels are configured per environment type through run mode folders such as config, config.stage, and config.prod using Sling LogManager factory configuration entries for package names and levels.",
      "The speech says not to change the default Apache Sling Logging Configuration level from INFO, not to change its format, and not to change the logs/error.log destination. Request and access logs are not configurable in cloud, and the request log pairs request and response by numeric ID while the access log is useful for following one user's activity in time order.",
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "Environment-specific package logger configuration",
        code: `{
  "org.apache.sling.commons.log.names": [
    "com.acme.aem.core",
    "com.acme.aem.search"
  ],
  "org.apache.sling.commons.log.level": "DEBUG"
}`,
        highlightLines: [2, 3, 5],
      },
    ],
    expandableSections: [
      {
        title: "Recommended Levels by Environment",
        content: [
          { text: "Development -> debug" },
          { text: "Stage -> warn" },
          { text: "Production -> error" },
        ],
        type: "table",
      },
      {
        title: "Cloud Restrictions Repeated by the Speech",
        content: [
          "Do not change the default INFO level of the main Sling Logging Configuration.",
          "Do not change the log format.",
          "Do not change logs/error.log as the output file.",
          "Use temporary DEBUG only for targeted packages and restore INFO afterward.",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 8,
    title: "Apache, Dispatcher, and CDN Logs",
    subtitle: "Publish-Tier Delivery Visibility Before AEM Handles the Request",
    content: [
      "Three more logs exist only for Publish: the Apache HTTPD access log, the Apache HTTPD error log, and the Dispatcher log. They show requests before the request reaches the AEM application, so anything served from cache can appear there without appearing in AEM logs.",
      "The Apache access log is not configurable. The Apache error log uses REWRITE_LOG_LEVEL in conf.d/variables/global.var, where values run from error to trace8, the default is warn, and debug is the maximum in Cloud Service. The Dispatcher log uses DISP_LOG_LEVEL in the same file with values error, warn, info, debug, and trace1; default is warn and debug is the cloud maximum.",
      "Dispatcher lines show the farm and an action such as miss or none. CDN logs are JSON, not customizable, and show fields such as timestamp, ttfb, status, url, and cache values HIT, MISS, or PASS, along with traffic filter and WAF matches. Logs are downloaded through Cloud Manager or tailed with the Adobe I/O CLI.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "global.var environment log levels",
        code: `<IfDefine ENVIRONMENT_STAGE>
  Define DISP_LOG_LEVEL info
  Define REWRITE_LOG_LEVEL warn
</IfDefine>

<IfDefine ENVIRONMENT_PROD>
  Define DISP_LOG_LEVEL warn
  Define REWRITE_LOG_LEVEL warn
</IfDefine>`,
        highlightLines: [2, 3, 7, 8],
      },
      {
        language: "javascript",
        title: "CDN log shape example",
        code: `{
  "timestamp": "2026-10-03T13:00:00Z",
  "ttfb": 42,
  "status": 200,
  "url": "/content/acme/en.html",
  "cache": "HIT"
}`,
        highlightLines: [2, 3, 4, 5, 6],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Where to inspect requests at each delivery layer",
        elements: [
          { id: "apache", label: "Apache logs", tooltip: "Before AEM application logging" },
          { id: "dispatcher", label: "Dispatcher log", tooltip: "Explains farm selection and cache actions like miss or none" },
          { id: "cdn", label: "CDN log", tooltip: "Shows HIT, MISS, PASS and matched filter or WAF rules" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 9,
    title: "Replication Fundamentals",
    subtitle: "Author to Publish, Cache Flush, and Reverse Replication",
    content: [
      "Replication agents publish content from Author to Publish, flush content from Dispatcher cache, and can return user input from Publish to Author. For Author to Publish, a manual action or automatic trigger starts the request, the default replication agent packages the content, places it into the replication queue, and the page status indicator is updated.",
      "The content is taken from the queue, transported to Publish, usually over HTTP, and received by a servlet on Publish whose default path is bin/receive. User data such as users, groups, and profiles is not replicated between Author and Publish.",
      "Reverse replication moves data from Publish to Author by storing it in a Publish outbox and having Author-side listeners poll the outboxes, which keeps Author in control of traffic. It has effectively been disabled by default since AEM 6.1, and AEM Communities uses a common store for user-generated content instead of replication.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Default author-to-publish replication path",
        elements: [
          { id: "trigger", label: "Manual or automatic trigger", tooltip: "Starts publish action" },
          { id: "agent", label: "Default replication agent", tooltip: "Packages content" },
          { id: "queue", label: "Replication queue", tooltip: "Holds items until processed" },
          { id: "publish", label: "Publish transport", tooltip: "Usually HTTP to the target environment" },
          { id: "receive", label: "bin/receive", tooltip: "Default receive servlet on Publish" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Not Replicated and No Longer Preferred",
        content: [
          "Users, groups, and profiles are not replicated between Author and Publish.",
          "Reverse replication is effectively disabled by default since AEM 6.1.",
          "AEM Communities uses a common store for user-generated content instead of replication.",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 10,
    title: "Replication Agents and Queues in 6.5",
    subtitle: "Default Agents, Queue States, and Transport Settings",
    content: [
      "A standard AEM 6.5 installation includes the Default Agent for Author to Publish, Dispatcher Flush for cache invalidation, Reverse Replication, and the Static Agent that writes a static representation to the file system.",
      "Queue state matters operationally: Active means items are being processed, Idle means the queue is empty, and Blocked means items are queued but cannot be processed, for example because the receiving instance is down. Agent settings include Enabled, Serialization Type, Retry Delay, Agent User Id, Log Level, and Use for reverse replication.",
      "The default Retry Delay is 60000 milliseconds. The Agent User Id must have read access to replicated paths on Author and create plus write access on Publish, otherwise the queue can block. The Transport tab holds the URI, credentials, and SSL options, and the default agent points to bin/receive while Dispatcher Flush targets dispatcher/invalidate.cache.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Queue states described in the speech",
        elements: [
          { id: "active", label: "Active", tooltip: "Items are currently processing" },
          { id: "idle", label: "Idle", tooltip: "Queue is empty" },
          { id: "blocked", label: "Blocked", tooltip: "Items exist but cannot be processed" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "Agent Facts to Memorize",
        content: [
          { text: "Retry Delay default -> 60000 milliseconds" },
          { text: "Dispatcher Flush serialization type marks a cache-flush agent" },
          { text: "Default Agent URI -> bin/receive" },
          { text: "Dispatcher Flush URI -> dispatcher/invalidate.cache" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 11,
    title: "Replication in Cloud Service",
    subtitle: "Sling Content Distribution, publish vs preview, and API Limits",
    content: [
      "In AEM as a Cloud Service, content moves through Sling Content Distribution to a pipeline service outside the AEM runtime. There are two predefined agents: publish, which is enabled by default and used by the UI, workflows, and Replication API, and preview, which targets the preview tier and is not enabled by default.",
      "Content can be published through Quick Publish, Manage Publication, On Time and Off Time scheduling when Auto Replicate is enabled, workflows, and the Replication API. For bulk publication, the speech recommends a workflow with the Tree Activation step rather than custom bulk code, and notes that the Publish Content Tree workflow is deprecated.",
      "Replication API limits matter: fewer than 100 paths at a time is the recommendation, 500 is the hard limit before ReplicationException, setUseAtomicCalls false can lift the limit by bucketing, and the content per call must stay under 10 MB excluding binaries. Queue status is split into Persisted and Fully published, and content invalidation should prefer Sling Content Invalidation from Author.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Replication API for publish and preview",
        code: `@Reference
private Replicator replicator;

public void publish(Session session, String[] paths) throws ReplicationException {
    replicator.replicate(session, ReplicationActionType.ACTIVATE, paths);
}

public void preview(Session session, String path) throws ReplicationException {
    ReplicationOptions options = new ReplicationOptions();
    options.setFilter(agent -> "preview".equals(agent.getId()));
    replicator.replicate(session, ReplicationActionType.ACTIVATE, path, options);
}`,
        highlightLines: [2, 5, 9, 10, 11],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Cloud agent behavior and queue meanings",
        elements: [
          { id: "publish", label: "publish agent", tooltip: "Enabled by default and updates overall ReplicationStatus" },
          { id: "preview", label: "preview agent", tooltip: "Not enabled by default and targets preview tier" },
          { id: "persisted", label: "Persisted queue", tooltip: "Change is durably stored on publish" },
          { id: "fully", label: "Fully published queue", tooltip: "Live on publish pods and Dispatcher cache is cleared" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 12,
    title: "Persistence and Topologies in 6.5",
    subtitle: "TarMK Defaults, Cold Standby, Farms, and MongoMK",
    content: [
      "Starting in AEM 6.2, microkernels act as persistence managers. TarMK is designed for performance and MongoMK for scalability, and Adobe recommends TarMK as the default for both Author and Publish except for specific high-scale cases.",
      "A single TarMK instance is the default for Author: simple and fast, but not scalable beyond one server and without failover. TarMK Cold Standby replicates the repository from a primary to a standby that runs with only the HTTP receiver active; it also serves as backup, but failover is not automatic and both instances require licenses.",
      "Publish commonly uses a TarMK farm made of independent Oak instances kept in sync by author replication. MongoMK supports active-active Author clustering on top of a MongoDB replica set, scaling Author horizontally and providing high availability, but with potentially lower performance than TarMK. Reasons to choose MongoMK include thousands of named users daily, hundreds of concurrent users, heavy ingestion or editing, and tens of thousands of searches a day. The minimal MongoDB layout is a replica set with one primary and two secondaries under 15 milliseconds latency plus an Author cluster with two active nodes, and the data store should live on shared file storage or Amazon S3 rather than in MongoDB.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "6.5 persistence and topology choices",
        elements: [
          { id: "single", label: "Single TarMK", tooltip: "Default Author: simple, fast, no failover" },
          { id: "standby", label: "TarMK Cold Standby", tooltip: "Backup plus manual failover" },
          { id: "farm", label: "TarMK Farm", tooltip: "Default Publish: independent synced instances" },
          { id: "mongo", label: "MongoMK cluster", tooltip: "Active-active Author with MongoDB replica set" },
        ],
      },
      {
        type: "ascii",
        description: "Minimal MongoMK layout from the speech",
        asciiContent: `MongoDB Replica Set
|-- Primary
|-- Secondary
\`-- Secondary

Author Cluster
|-- Author node 1
\`-- Author node 2

Latency between MongoDB nodes: under 15 ms`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 13,
    title: "Cloud Service Architecture and Operations",
    subtitle: "Service-Based Delivery, Rolling Deployments, and Layered Logs",
    content: [
      "AEM as a Cloud Service shifts from instance-centric thinking to a service-based model with n-x AEM containers driven by Cloud Manager CI/CD pipelines. Customers do not choose TarMK or MongoMK and do not manage Author clusters or Publish farms directly because the publish tier scales automatically.",
      "Code, OSGi configuration, Dispatcher configuration, log configuration, and index definitions are all deployed through Cloud Manager. Production changes that bypass the pipeline violate the CI/CD policy. Rolling deployments again imply old and new versions briefly coexist, so the new version's indexes are built and repositories reindexed before traffic switches.",
      "Traffic flows from the CDN to Apache plus Dispatcher on Publish and then to AEM, and each layer has its own log. Checking only AEM logs can miss a request handled earlier in the chain. The speech also notes that SREs monitor the system continuously and customers can define alerts and review runtime metrics such as search performance.",
    ],
    diagrams: [
      {
        type: "architecture",
        description: "Cloud Service traffic and deployment model",
        elements: [
          { id: "pipeline", label: "Cloud Manager CI/CD", tooltip: "Deploys code, config, logs, and indexes" },
          { id: "cdn", label: "CDN", tooltip: "First request layer" },
          { id: "apache", label: "Apache + Dispatcher", tooltip: "Publish-side delivery and cache layer" },
          { id: "aem", label: "AEM containers", tooltip: "Service-based runtime behind the delivery layers" },
          { id: "sre", label: "SRE monitoring", tooltip: "24x7 health monitoring and runtime metrics" },
        ],
      },
    ],
    expandableSections: [
      {
        title: "What Must Go Through the Pipeline",
        content: [
          "Code",
          "OSGi configurations",
          "Dispatcher configuration",
          "Log configuration",
          "Index definitions",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 14,
    title: "Troubleshooting and Exam Tips",
    subtitle: "Operational Checks, Key Numbers, and Cloud Do-Nots",
    content: [
      "For a slow query, look for the WARN message about traversed nodes and then create a suitable Lucene index. In Cloud Service, deploy it through the pipeline with the proper custom naming rather than editing the repository manually.",
      "If a custom index is not used, the speech says to verify the naming pattern, prefix, lucene type, async value, includedPaths and tags, allowIndexDefinitions, noIntermediateSaves, and the vault filter. In the cloud, use the AEM Java log for application code, request log to pair requests and responses, access log to follow a user, Dispatcher log for miss or none actions, Apache error log for rewrite rules, and CDN log for HIT, MISS, or PASS.",
      "Do not change the default INFO level, format, or logs/error.log destination in the cloud. A blocked publish queue usually means the receiving instance is disabled or unreachable, or the agent user lacks permissions. Key numbers to remember include Retry Delay 60000 milliseconds, fewer than 100 paths per replication call with a limit of 500, 10 MB per call, under 15 milliseconds MongoDB latency, plugin version 1.3.2, and defaults such as single TarMK for Author, TarMK farm for Publish, publish agent enabled by default in cloud, and warn as the default Dispatcher and rewrite log level.",
    ],
    expandableSections: [
      {
        title: "Cloud Lookup Guide",
        content: [
          { text: "AEM Java log -> application code behavior" },
          { text: "Request log -> pair request and response IDs" },
          { text: "Access log -> follow one user over time" },
          { text: "Dispatcher log -> miss or none actions" },
          { text: "Apache error log -> rewrite rule debugging" },
          { text: "CDN log -> HIT, MISS, PASS and filter/WAF flags" },
        ],
        type: "table",
      },
      {
        title: "Numbers and Defaults to Memorize",
        content: [
          "Retry Delay -> 60000 milliseconds",
          "Replication API -> fewer than 100 paths recommended, 500 hard limit",
          "Replication payload size -> 10 MB per call excluding binaries",
          "MongoDB replica set latency -> under 15 milliseconds",
          "filevault-package-maven-plugin -> 1.3.2 or later",
          "Defaults -> single TarMK Author, TarMK farm Publish, publish agent enabled by default, Dispatcher and rewrite logs default to warn",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
]

export function getTotalOakOpsSlides(): number {
  return oakOpsSlides.length
}

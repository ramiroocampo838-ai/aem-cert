import type { Concept } from "../types"

export const performanceOptimizationConcepts: Concept[] = [
  {
    id: "cq-083",
    title: "The AEM Query Performance Analyzer (/libs/granite/operations/content/diagnosistools/queryPerformance.html) and QueryDebug logs",
    reference:
      "PERF-001 (Severity: Critical) flags JCR queries executed on every page render without caching. What tool should you use to analyze query performance in AEM?",
    explanation:
      "PERF-001 (Critical): JCR queries on every page render are a top AEM performance problem. The AEM Query Performance tool shows the slowest queries. The Oak QueryExplain feature shows the execution plan — revealing whether the query uses an index or performs a full node scan. Queries without proper Oak indexes cause full-repository traversals, which scale linearly with repository size and cause request timeouts under load.",
    category: "Performance Optimization",
  },
  {
    id: "cq-084",
    title: "Oak performs a full repository traversal — it scans every JCR node to find matches, which scales O(n) with repository size",
    reference:
      "PERF-002 requires providing explicit Oak index definitions for all application JCR queries. What happens when a query runs without a matching Oak index?",
    explanation:
      "PERF-002 (Critical): Oak (AEM's JCR implementation) uses indexes for efficient queries. Without a matching index (Lucene, property index, or ordered index), Oak performs a full repository traversal — effectively a table scan. For a repository with 10 million nodes, this can take minutes. AEM logs a WARNING: 'Traversal query' in the error.log. Index definitions (oak:QueryIndexDefinition) must be created under /oak:index and deployed via content packages.",
    category: "Performance Optimization",
  },
  {
    id: "cq-085",
    title: "Batch multiple changes together and call session.save() once after the loop, or every N items (e.g., every 500 nodes) to control memory usage",
    reference:
      "PERF-003 (Severity: Major) warns against calling session.save() inside a loop when processing bulk content operations. What is the recommended approach?",
    explanation:
      "PERF-003 (Major): session.save() in JCR flushes all pending changes to the repository and creates a transaction boundary. Calling it inside a loop (one save per node) creates one transaction per node — this is extremely slow because each save involves disk I/O, Lucene index update, and event dispatch. The fix: accumulate changes across multiple iterations and save periodically (every 500–1000 nodes), then do a final save after the loop ends.",
    category: "Performance Optimization",
  },
  {
    id: "cq-086",
    title: "@ValueMapValue is resolved once by Sling Models at injection time; resourceResolver.getValueMap() creates a new ValueMap wrapper on every call",
    reference:
      "PERF-004 specifies that AEM Sling Models should use @ValueMapValue injection for simple properties instead of adapting Resource to ValueMap every time. Why?",
    explanation:
      "PERF-004 (Warning): Sling Models with @ValueMapValue are injected once when the model is first adapted from the resource — the framework resolves all annotated fields in one pass. Manually calling resource.adaptTo(ValueMap.class) multiple times in different methods creates multiple wrapper objects. The main benefit of @ValueMapValue is cleaner code and testability, and avoiding redundant object creation is a good practice.",
    category: "Performance Optimization",
  },
  {
    id: "cq-087",
    title: "For exact match queries on a specific property (e.g., @sling:resourceType = 'myproject/components/text') — property indexes are faster and smaller than Lucene for equality lookups",
    reference:
      "PERF-005 (Severity: Major) requires using Oak property indexes for equality queries instead of Lucene full-text indexes. When is a property index more efficient than a Lucene full-text index?",
    explanation:
      "PERF-005 (Major): Oak supports multiple index types. Property indexes (type='property') are B-tree structures for exact-value and range queries — small, fast to build, and efficient for queries like 'WHERE [jcr:primaryType] = \"cq:Page\"'. Lucene indexes (type='lucene') are full-text search engines with overhead from relevance scoring. For equality conditions on known properties, always use a property index. Lucene is justified only for full-text search.",
    category: "Performance Optimization",
  },
  {
    id: "cq-088",
    title: "Use resource.listChildren() or Page.listChildren() which return lazy iterators — items are loaded from JCR only as the iterator advances",
    reference:
      "What is AEM's Lazy Loading pattern for large lists, and which PERF-006 (Severity: Minor) compliant API supports it for content tree traversal?",
    explanation:
      "PERF-006 (Minor): resource.listChildren() returns a lazy Iterator<Resource> backed by the JCR NodeIterator. Items are fetched from the repository only as the iterator calls next() — never loading more than the current item. Converting the result to new ArrayList<>(resource.listChildren()) forces eager evaluation of all children into memory. For a page with 10,000 child resources, this creates a 10,000-element ArrayList. Iterate lazily to keep memory usage constant.",
    category: "Performance Optimization",
  },
  {
    id: "cq-089",
    title: "Long TTL responses are served directly from the Dispatcher's disk cache — AEM Publisher never receives the request, eliminating all rendering, JCR reads, and network overhead",
    reference:
      "How does configuring the Dispatcher to cache HTML responses with long TTL values improve AEM performance, and what is the mechanism?",
    explanation:
      "PERF Dispatcher Caching: When the Dispatcher caches an HTML response, subsequent requests for that URL are served directly from the Apache httpd/IIS file system cache. The AEM rendering pipeline — Sling resolver, component scripts, JCR session, HTL evaluation, ResourceResolver — is bypassed entirely. A cache hit typically takes <5ms (disk read) vs. 50–500ms for an uncached AEM request. For high-traffic sites this means serving 10,000 req/s vs. 100 req/s from the same hardware.",
    category: "Performance Optimization",
  },
  {
    id: "cq-090",
    title: "Process in batches of 500–1000 assets; call session.save() after each batch, and call session.refresh(false) periodically to release stale session state",
    reference:
      "PERF-003 combined with JCR best practices: when bulk-importing 100,000 DAM assets into AEM, what is the recommended approach to avoid memory and performance issues?",
    explanation:
      "PERF-003 and Bulk Import: The JCR session accumulates all pending changes in memory until session.save() is called. For a 100,000 asset import, calling save() only at the end would accumulate all 100,000 asset nodes (potentially GBs of pending change data) in memory. Pattern: process in batches of 500–1000, call session.save() after each batch (commits and clears the pending map), then optionally session.refresh(false) to release stale session state. This keeps memory usage constant regardless of total import size.",
    category: "Performance Optimization",
  },
  {
    id: "cq-091",
    title: "Restricts the Lucene index to only index nodes under the specified paths, reducing index size and build time",
    reference:
      "What is the purpose of declaring 'includedPaths' in an Oak Lucene index definition?",
    explanation:
      "Oak Lucene Index Optimization: By default, a Lucene index scans and indexes every node in the JCR repository. For AEM repositories with millions of nodes (/apps, /libs, /content, /home, /var combined), this creates enormous indexes that take hours to rebuild. The 'includedPaths' property (e.g., ['/content/mysite']) scopes the index to only the relevant content subtrees your queries target. A site-specific search index needs only /content/mysite — not the entire /libs or /home tree.",
    category: "Performance Optimization",
  },
  {
    id: "cq-092",
    title: "The Sling Resource Resolver caches resource type lookups internally; developers should avoid creating new ResourceResolver instances per-request to benefit from this cache",
    reference:
      "AEM's Sling Request Processing pipeline executes multiple filters and resolvers. Which PERF-006 technique avoids re-resolving the sling:resourceType on every request for the same component?",
    explanation:
      "PERF-006 and Sling Resource Resolution: Sling's script resolver maintains a per-request cache of resolved scripts. Within one HTTP request, the same component included multiple times resolves the script only once. Sling also maintains a longer-lived cache of compiled scripts across requests. Key performance practice: avoid creating unnecessary new ResourceResolver instances per-request (each has its own overhead) and rely on Sling's built-in resolution caching rather than manual workarounds.",
    category: "Performance Optimization",
  },
]

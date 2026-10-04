import type { Concept } from "../types"

export const invalidatingFromAuthorOrPublishConcepts: Concept[] = [
  {
    id: "disp-066",
    category: "Invalidating from Author or Publish",
    title: "On Author, the standard Dispatcher Flush agent sends an invalidation request when a page is activated",
    reference: "What does the standard Dispatcher Flush agent do when it is configured on Author?",
    explanation:
      "The speech says the standard Dispatcher Flush agent is installed by default and, when configured on Author, sends an invalidation request to Dispatcher when a page is activated.",
  },
  {
    id: "disp-067",
    category: "Invalidating from Author or Publish",
    title: "The Transport URI should point to /dispatcher/invalidate.cache on the Dispatcher host",
    reference: "Where should the Transport URI of a standard Dispatcher Flush agent point?",
    explanation:
      "The speech says the flush agent's Transport URI points to /dispatcher/invalidate.cache on the Dispatcher host.",
  },
  {
    id: "disp-068",
    category: "Invalidating from Author or Publish",
    title: "The URI property is used only with path-based virtual hosts to target a specific farm",
    reference: "When is the flush agent's URI property used to target a specific farm?",
    explanation:
      "The speech states that the URI property is used only with path-based virtual hosts, to target a specific farm.",
  },
  {
    id: "disp-069",
    category: "Invalidating from Author or Publish",
    title: "If credentials are used, create a dedicated replication user instead of using admin",
    reference: "What is the recommended credential practice for Dispatcher Flush agents?",
    explanation:
      "The source says the agent does not need a user name and password, but if they are set they are sent with basic authentication, and it recommends creating a dedicated user instead of using admin.",
  },
  {
    id: "disp-070",
    category: "Invalidating from Author or Publish",
    title: "Author-side invalidation can fail because Dispatcher must be reachable from the Author instance",
    reference: "Why can invalidating Dispatcher directly from Author be difficult in some network topologies?",
    explanation:
      "The speech lists reachability as one of the two issues with invalidating from Author: Dispatcher must be reachable from the Author instance, which a firewall may block.",
  },
  {
    id: "disp-071",
    category: "Invalidating from Author or Publish",
    title: "Dispatcher can cache the old page again if a user requests it after invalidation but before the new publication arrives",
    reference: "What race condition can occur when invalidation and publication happen at the same time?",
    explanation:
      "The speech explains that publication and invalidation happen at the same time, so a user can request the page after it is removed from cache but before the new page is published, leading Dispatcher to cache the old page again.",
  },
  {
    id: "disp-072",
    category: "Invalidating from Author or Publish",
    title: "With publish-side invalidation, each Publish instance sends the invalidation request when it receives the published page",
    reference: "What changes when cache invalidation is moved from Author to Publish?",
    explanation:
      "The speech says invalidating from the publish instance moves cache management to Publish: the publish instance sends the invalidation request when it receives a published page. It also notes the agent must be configured on every affected Publish instance.",
  },
]

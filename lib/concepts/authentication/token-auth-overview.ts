import type { Concept } from "../types"

export const tokenAuthOverviewConcepts: Concept[] = [
  {
    id: "auth-066",
    category: "Token Authentication Overview",
    title: "External applications, services, or systems calling AEM's HTTP endpoints without a browser login",
    reference: "Who or what is token-based authentication in AEM designed for?",
    explanation:
      "Token-based authentication enables headless consumers — external applications, services, or systems — to interact with AEM's HTTP endpoints like GraphQL, Content Services, and the Assets HTTP API, without going through a browser-based login flow.",
  },
  {
    id: "auth-067",
    category: "Token Authentication Overview",
    title: "GraphQL, AEM Content Services, and the Assets HTTP API",
    reference: "Which HTTP endpoints commonly use token-based authentication in AEM?",
    explanation:
      "Token-based authentication is commonly used with GraphQL, AEM Content Services, and the Assets HTTP API — endpoints designed for programmatic, headless consumption of AEM content and functionality.",
  },
  {
    id: "auth-068",
    category: "Token Authentication Overview",
    title: "Authorization: Bearer ACCESS_TOKEN",
    reference: "What HTTP header format is used to pass an access token to AEM?",
    explanation:
      "Every token-authenticated request to AEM carries an Authorization header in the format 'Authorization: Bearer ACCESS_TOKEN', following the standard OAuth Bearer token scheme.",
  },
  {
    id: "auth-069",
    category: "Token Authentication Overview",
    title: "Local Development Access Tokens and Service Credentials (via OAuth Server-to-Server)",
    reference: "What are the two ways to obtain an access token for programmatic AEM access?",
    explanation:
      "There are two paths to an access token: a Local Development Access Token for quick local testing, and Service Credentials exchanged through OAuth Server-to-Server for production integrations.",
  },
  {
    id: "auth-070",
    category: "Token Authentication Overview",
    title: "Local development is quick and tied to your own identity; production uses a dedicated Technical Account instead",
    reference: "What's the key difference in purpose between the two token acquisition paths?",
    explanation:
      "Local Development Access Tokens are meant for quick, individual testing and authenticate as the developer who generated them. Service Credentials, by contrast, are built for production: they're tied to a dedicated Technical Account rather than a personal identity.",
  },
  {
    id: "auth-071",
    category: "Token Authentication Overview",
    title: "It enhances security and enables seamless integration between AEM and external systems in a headless environment",
    reference: "What is the overall benefit of token-based authentication for AEM integrations?",
    explanation:
      "Token-based authentication enhances security by avoiding shared or embedded passwords, and it enables seamless, programmatic integration between AEM and external systems — which is essential for headless and API-driven architectures.",
  },
]

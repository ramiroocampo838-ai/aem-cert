import type { Concept } from "../types"

export const localDispatcherConcepts: Concept[] = [
  {
    id: "env-061",
    category: "Local Dispatcher",
    title: "Docker",
    reference: "What technology do the local Dispatcher Tools use to run the Dispatcher?",
    explanation:
      "The local Dispatcher Tools are Docker-based. They run an Apache HTTP Server with the AEM Dispatcher module inside a Docker container, providing the same caching and filtering behavior as the cloud Dispatcher.",
  },
  {
    id: "env-062",
    category: "Local Dispatcher",
    title: "./bin/docker_run_hot_reload.sh",
    reference: "What script do you use to start the local Dispatcher with hot-reload enabled?",
    explanation:
      "The local Dispatcher is started with `./bin/docker_run_hot_reload.sh ./src localhost:4503 8080`. The hot-reload variant is preferred because it automatically reloads Dispatcher configuration when files change.",
  },
  {
    id: "env-063",
    category: "Local Dispatcher",
    title: "./bin/docker_run_hot_reload.sh ./src localhost:4503 8080",
    reference: "What is the full command to start the local Dispatcher with hot-reload?",
    explanation:
      "The full command is `./bin/docker_run_hot_reload.sh ./src localhost:4503 8080`. This connects the Dispatcher to the local Publish instance at `localhost:4503` and exposes the Dispatcher on port 8080.",
  },
  {
    id: "env-064",
    category: "Local Dispatcher",
    title: "Port 8080",
    reference: "On which port does the local Dispatcher expose the site when using the standard startup command?",
    explanation:
      "The startup command `./bin/docker_run_hot_reload.sh ./src localhost:4503 8080` exposes the local Dispatcher on port 8080. This is where you access the site as it would appear through the Dispatcher (cached, filtered requests).",
  },
  {
    id: "env-065",
    category: "Local Dispatcher",
    title: "localhost:4503",
    reference: "Which local Publish port does the Dispatcher connect to in the standard startup command?",
    explanation:
      "In the command `./bin/docker_run_hot_reload.sh ./src localhost:4503 8080`, `localhost:4503` is the address of the local Publish instance. The Dispatcher proxies requests from port 8080 to Publish at 4503.",
  },
  {
    id: "env-066",
    category: "Local Dispatcher",
    title: "It reloads Dispatcher configuration automatically when files change",
    reference: "What is the advantage of using docker_run_hot_reload.sh over docker_run.sh?",
    explanation:
      "The `docker_run_hot_reload.sh` script monitors the Dispatcher configuration directory and reloads the configuration automatically when files change. This avoids needing to restart the Docker container during development.",
  },
  {
    id: "env-067",
    category: "Local Dispatcher",
    title: "./bin/validate ./src",
    reference: "What tool do you use to validate local Dispatcher configuration before deploying?",
    explanation:
      "The command `./bin/validate ./src` checks your Apache and Dispatcher configuration for errors before deploying. It helps catch configuration mistakes locally, before they reach Cloud Manager.",
  },
  {
    id: "env-068",
    category: "Local Dispatcher",
    title: "A Docker container running Apache HTTP Server with the Dispatcher module",
    reference: "What does the local Dispatcher run inside?",
    explanation:
      "The local Dispatcher runs inside a Docker container. The container runs Apache HTTP Server with the AEM Dispatcher module installed — the same combination used in cloud environments.",
  },
]

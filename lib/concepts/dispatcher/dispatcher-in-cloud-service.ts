import type { Concept } from "../types"

export const dispatcherInCloudServiceConcepts: Concept[] = [
  {
    id: "disp-073",
    category: "Dispatcher in Cloud Service",
    title: "They provide a vanilla project file structure, validation tooling, and a Docker image for local Dispatcher",
    reference: "What do the Dispatcher Tools in the AEM as a Cloud Service SDK provide?",
    explanation:
      "The speech says the Dispatcher Tools are part of the Cloud Service SDK and provide a vanilla file structure, tooling to validate supported directives and syntax, and a Docker image that runs Dispatcher locally.",
  },
  {
    id: "disp-074",
    category: "Dispatcher in Cloud Service",
    title: "Flexible mode is recommended and is activated by the file opt-in/USE_SOURCES_DIRECTLY",
    reference: "Which Dispatcher mode is recommended in AEM as a Cloud Service, and how is it activated?",
    explanation:
      "The source says flexible mode is recommended, is the default for archetype 28 and higher, and is activated by the file opt-in/USE_SOURCES_DIRECTLY.",
  },
  {
    id: "disp-075",
    category: "Dispatcher in Cloud Service",
    title: "Legacy mode required a single rewrite.rules file",
    reference: "What limitation applied in legacy mode that flexible mode removes?",
    explanation:
      "The speech states that legacy mode required a single rewrite.rules file, while flexible mode removes that limit.",
  },
  {
    id: "disp-076",
    category: "Dispatcher in Cloud Service",
    title: "conf.d holds Apache configuration, while conf.dispatcher.d holds Dispatcher configuration",
    reference: "What is the main difference between conf.d and conf.dispatcher.d in a Cloud Service Dispatcher project?",
    explanation:
      "The speech says the project Dispatcher folder has two main subfolders: conf.d for Apache configuration and conf.dispatcher.d for Dispatcher configuration.",
  },
  {
    id: "disp-077",
    category: "Dispatcher in Cloud Service",
    title: "Create it in the available folder and enable it with a relative symbolic link in the enabled folder",
    reference: "How should a virtual host or farm be enabled in Cloud Service Dispatcher configuration?",
    explanation:
      "The source says a virtual host or farm is created in the available folder and enabled by a relative symbolic link in the enabled folder, and specifically warns not to copy default.vhost directly into enabled_vhosts.",
  },
  {
    id: "disp-078",
    category: "Dispatcher in Cloud Service",
    title: "At least one virtual host must match *.local, localhost, and 127.0.0.1",
    reference: "Which aliases must at least one virtual host match so Dispatcher invalidation works in Cloud Service local setups?",
    explanation:
      "The speech says at least one virtual host must match the ServerAlias values *.local, localhost, and 127.0.0.1 because they are needed for Dispatcher invalidation.",
  },
  {
    id: "disp-079",
    category: "Dispatcher in Cloud Service",
    title: "Those aliases are required for internal Adobe processes",
    reference: "Why are the aliases *.adobeaemcloud.net and *.adobeaemcloud.com also required in Cloud Service?",
    explanation:
      "The source says the aliases *.adobeaemcloud.net and *.adobeaemcloud.com are also required, for internal Adobe processes.",
  },
]

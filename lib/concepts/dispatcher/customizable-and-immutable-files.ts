import type { Concept } from "../types"

export const customizableAndImmutableFilesConcepts: Concept[] = [
  {
    id: "disp-080",
    category: "Customizable and Immutable Files",
    title: "Customizable files are deployed to Cloud, while immutable files are part of the base framework and local edits to them are ignored",
    reference: "What is the key difference between customizable and immutable Dispatcher files in Cloud Service?",
    explanation:
      "The speech says customizable files are transferred to the Cloud environment on deployment, while immutable files are part of the base framework and modifying them locally has no effect.",
  },
  {
    id: "disp-081",
    category: "Customizable and Immutable Files",
    title: "global.vars is where you can change the Dispatcher and rewrite log level",
    reference: "Which file can be used to change the Dispatcher and rewrite log level in Cloud Service?",
    explanation:
      "The source says that in global.vars you can change the Dispatcher and rewrite log level.",
  },
  {
    id: "disp-082",
    category: "Customizable and Immutable Files",
    title: "They have no effect because the latest immutable framework version is used on deployment",
    reference: "What happens to local modifications of immutable Dispatcher files when deploying to AEM as a Cloud Service?",
    explanation:
      "The speech states that immutable files are part of the base framework, modifying them locally has no effect, and the latest version is always used on deployment.",
  },
  {
    id: "disp-083",
    category: "Customizable and Immutable Files",
    title: "Every farm must include default_renders.any in /renders",
    reference: "Which file must every farm include in its /renders section?",
    explanation:
      "The speech explicitly says every farm must include default_renders.any in its /renders section.",
  },
  {
    id: "disp-084",
    category: "Customizable and Immutable Files",
    title: "Every farm must include default_invalidate.any in /cache /allowedClients",
    reference: "Which file must every farm include in the /allowedClients section of /cache?",
    explanation:
      "The source says every farm must include default_invalidate.any in the /allowedClients section of /cache.",
  },
  {
    id: "disp-085",
    category: "Customizable and Immutable Files",
    title: "Custom includes are allowed only in /clientheaders, /filters, /cache /rules, and /virtualhosts, using the names clientheaders.any, filters.any, rules.any, or virtualhosts.any",
    reference: "Where are your own include files allowed in Cloud Service Dispatcher configuration, and what naming rule applies?",
    explanation:
      "The speech says customer files may be included only in /clientheaders, /filters, /rules in /cache, and /virtualhosts, and they must be named clientheaders.any, filters.any, rules.any, and virtualhosts.any, or the default_ version.",
  },
  {
    id: "disp-086",
    category: "Customizable and Immutable Files",
    title: "Do not include default_virtualhosts.any because it matches every incoming request",
    reference: "Why should default_virtualhosts.any not be included in a custom Cloud Service configuration?",
    explanation:
      "The source says not to include default_virtualhosts.any in a customization because it matches every incoming request.",
  },
]

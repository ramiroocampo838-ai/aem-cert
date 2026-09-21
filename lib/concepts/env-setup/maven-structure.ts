import type { Concept } from "../types"

export const mavenStructureConcepts: Concept[] = [
  {
    id: "env-069",
    category: "Maven Project Structure",
    title: "Immutable and Mutable",
    reference: "What are the two types of repository areas in AEM's Maven project structure?",
    explanation:
      "AEM enforces a clear separation between two repository areas: Immutable (cannot be changed at runtime — `/apps`, `/libs`) and Mutable (can be changed at runtime — `/content`, `/conf`, `/var`, `/etc`). This separation is critical for AEMaaCS.",
  },
  {
    id: "env-070",
    category: "Maven Project Structure",
    title: "/apps",
    reference: "Which of the following repository paths is considered Immutable in AEM?",
    explanation:
      "`/apps` is an immutable repository path. It stores custom components, HTL scripts, clientlibs, and OSGi bundle overlays. It cannot be changed at runtime — all changes must go through the deployment pipeline.",
  },
  {
    id: "env-071",
    category: "Maven Project Structure",
    title: "/content",
    reference: "Which of the following repository paths is considered Mutable in AEM?",
    explanation:
      "`/content` is a mutable repository path. It holds site content (pages, assets) that can be created, edited, and published at runtime by authors. Other mutable paths include `/conf`, `/var`, and `/etc`.",
  },
  {
    id: "env-072",
    category: "Maven Project Structure",
    title: "AEM platform code — the out-of-the-box components and libraries provided by Adobe",
    reference: "What does /libs contain in the AEM repository?",
    explanation:
      "`/libs` contains AEM's own platform code — the out-of-the-box components, templates, and libraries provided by Adobe. This path is immutable and should never be modified directly. Custom overlays go in `/apps`.",
  },
  {
    id: "env-073",
    category: "Maven Project Structure",
    title: "Because /libs is AEM's platform code — modifications are overwritten on AEM upgrades",
    reference: "Why should you never modify content directly under /libs?",
    explanation:
      "You should never modify `/libs` because it contains Adobe's platform code. On AEM upgrades, `/libs` is overwritten, so any direct modifications would be lost. The correct approach is to create overlays in `/apps` — AEM's Sling resource merger picks up `/apps` first.",
  },
  {
    id: "env-074",
    category: "Maven Project Structure",
    title: "ui.apps",
    reference: "Which Maven module deploys code to the /apps path?",
    explanation:
      "`ui.apps` is the Maven module that packages and deploys content to the `/apps` path. It contains HTL components, scripts, clientlibs, and OSGi component configurations. It is a code package of type `application`.",
  },
  {
    id: "env-075",
    category: "Maven Project Structure",
    title: "ui.content",
    reference: "Which Maven module deploys content to /content and /conf?",
    explanation:
      "`ui.content` is the Maven module that deploys mutable content to `/content` and `/conf`. It contains page templates, initial content, editable template policies, and Content Fragment models. It is a content package of type `content`.",
  },
  {
    id: "env-076",
    category: "Maven Project Structure",
    title: "Configuration content — editable templates, CF models, and similar configurations",
    reference: "What type of content goes in the /conf repository path?",
    explanation:
      "`/conf` is a mutable repository path used for configuration content — editable templates, Content Fragment models, global configurations, and similar settings that can be modified at runtime by administrators.",
  },
  {
    id: "env-077",
    category: "Maven Project Structure",
    title: "/apps",
    reference: "What repository path is used for custom components, HTL scripts, and clientlibs?",
    explanation:
      "Custom components, HTL scripts, clientlibs, and other code assets are stored under `/apps`. This is the immutable area for developer-created code. `/libs` is reserved for Adobe's out-of-the-box platform code.",
  },
  {
    id: "env-078",
    category: "Maven Project Structure",
    title: "Code lives in immutable paths (/apps); content lives in mutable paths (/content, /conf)",
    reference: "What is the key principle behind AEM's Immutable vs Mutable repository separation?",
    explanation:
      "The core principle is separating code (immutable, deployed via pipeline) from content (mutable, changeable at runtime). Immutable paths like `/apps` hold developer code that changes only through deployments. Mutable paths like `/content` hold content that authors can create and edit at runtime.",
  },
]

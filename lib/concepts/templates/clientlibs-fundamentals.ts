import type { Concept } from "../types"

export const clientlibsFundamentalsConcepts: Concept[] = [
  {
    id: "tmpl-079",
    category: "Client Libraries — Fundamentals",
    title: "The built-in solution in AEM for delivering CSS and JavaScript",
    reference: "What are clientlibs in AEM?",
    explanation:
      "Clientlibs are the built-in solution in AEM for delivering CSS and JavaScript, streamlining the organization, management, and delivery of front-end code within an AEM project.",
  },
  {
    id: "tmpl-080",
    category: "Client Libraries — Fundamentals",
    title: "Centralized management, improved performance via aggregation, reusability, scalability, security, auditing, and versioning",
    reference: "What are the advantages of using clientlibs?",
    explanation:
      "Clientlibs offer centralized management (single repository location), improved performance (aggregated into single files, reducing requests), reusability across pages/components, scalability, security via access controls, auditing, and versioning.",
  },
  {
    id: "tmpl-081",
    category: "Client Libraries — Fundamentals",
    title: "A repository node of type cq:ClientLibraryFolder, typically stored under /apps",
    reference: "What is a client-side library folder, structurally?",
    explanation:
      "A client-side library folder is a repository node of type cq:ClientLibraryFolder. It is a collection of JavaScript, CSS, and other resources reusable across multiple pages or components, typically stored under /apps.",
  },
  {
    id: "tmpl-082",
    category: "Client Libraries — Fundamentals",
    title: "categories (identifies which category or categories the library belongs to) and allowProxy (allows proxy servlet access)",
    reference: "What are the two important properties of a client-side library folder?",
    explanation:
      "The important properties of a client-side library folder are categories, a multi-valued property identifying the categories the JS/CSS files fall into, and allowProxy, which allows access to the library via the proxy servlet.",
  },
  {
    id: "tmpl-083",
    category: "Client Libraries — Fundamentals",
    title: "Source JS/CSS files, static resources like icons/fonts, and a js.txt and/or css.txt file listing which files to merge",
    reference: "What does a client-side library folder typically contain?",
    explanation:
      "A client-side library folder contains the JS and/or CSS source files, static resources that support styles (icons, web fonts, etc.), and one js.txt and/or one css.txt file identifying the source files to merge into the generated output.",
  },
  {
    id: "tmpl-084",
    category: "Client Libraries — Fundamentals",
    title: "#base = [root], specifying the path to the root of the client library folder, followed by the file names to merge",
    reference: "What is the syntax used in js.txt and css.txt files to identify source files?",
    explanation:
      "The js.txt and css.txt syntax uses a #base directive specifying the path to the root of the client library folder, followed by [file] directives naming the source files to merge into the generated JS and CSS output.",
  },
  {
    id: "tmpl-085",
    category: "Client Libraries — Fundamentals",
    title: "The node name plus a .js or .css extension, e.g. a node named cq.jquery generates cq.jquery.js or cq.jquery.css",
    reference: "How is the name of the generated merged JS/CSS file determined?",
    explanation:
      "When a client library folder is used, AEM merges the source files into a single JS and CSS file, named after the library node with a .js or .css extension — for example, a node named cq.jquery generates cq.jquery.js or cq.jquery.css.",
  },
  {
    id: "tmpl-086",
    category: "Client Libraries — Fundamentals",
    title: "The ui.frontend module of the AEM Project Archetype",
    reference: "Where should JavaScript, CSS, and other front-end assets be stored for AEMaaCS front-end development?",
    explanation:
      "For AEMaaCS, it's recommended to store all JavaScript, CSS, and other front-end assets in the ui.frontend module of the AEM Project Archetype, which provides flexibility to use modern web tools.",
  },
  {
    id: "tmpl-087",
    category: "Client Libraries — Fundamentals",
    title: "It compiles front-end resources into single CSS/JS files and automatically embeds them into a cq:clientLibraryFolder",
    reference: "What does the AEM Project Archetype's build script do with the ui.frontend module's assets?",
    explanation:
      "The AEM Project Archetype can compile front-end resources from ui.frontend into single CSS and JS files, which are then automatically embedded into a cq:clientLibraryFolder in the AEM repository, optimizing delivery.",
  },
  {
    id: "tmpl-088",
    category: "Client Libraries — Fundamentals",
    title: "It's used to isolate code from content/configuration; a proxy servlet then exposes it via /etc.clientlibs when allowProxy is true",
    reference: "Why must client libraries be located under /apps, and how are they made accessible?",
    explanation:
      "Client libraries must be located under /apps to better isolate code from content and configuration. ACLs are still enforced on the folder, but a proxy servlet allows the content to be read via /etc.clientlibs/ when the allowProxy property is set to true.",
  },
]

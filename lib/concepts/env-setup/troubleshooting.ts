import type { Concept } from "../types"

export const troubleshootingConcepts: Concept[] = [
  {
    id: "env-097",
    category: "Troubleshooting",
    title: "Check Package Manager to verify the package was actually installed",
    reference: "What is the first troubleshooting step when something is not working in a local AEM environment?",
    explanation:
      "The first troubleshooting step is to check Package Manager (`http://localhost:4502/crx/packmgr`) to confirm the package was actually installed. Many issues arise from packages that failed to install silently.",
  },
  {
    id: "env-098",
    category: "Troubleshooting",
    title: "http://localhost:4502/crx/packmgr",
    reference: "What is the URL of the AEM Package Manager on a local Author instance?",
    explanation:
      "The Package Manager is accessed at `http://localhost:4502/crx/packmgr` on a local Author instance. It shows all installed packages and their status, letting you verify that a deployment succeeded.",
  },
  {
    id: "env-099",
    category: "Troubleshooting",
    title: "CRXDE Lite",
    reference: "What AEM tool do you use to verify that a node exists in the JCR and has the correct content?",
    explanation:
      "CRXDE Lite (accessed at `http://localhost:4502/crx/de`) is the browser-based JCR explorer. It lets you browse the full repository node tree, check node properties, and verify that deployed content landed in the correct paths.",
  },
  {
    id: "env-100",
    category: "Troubleshooting",
    title: "http://localhost:4502/crx/de",
    reference: "What is the URL of CRXDE Lite on a local Author instance?",
    explanation:
      "CRXDE Lite is accessed at `http://localhost:4502/crx/de` on a local Author instance. It provides a browser-based interface for exploring and editing the JCR repository.",
  },
  {
    id: "env-101",
    category: "Troubleshooting",
    title: "The Bundle Console at /system/console/bundles",
    reference: "What AEM console do you use to check whether an OSGi bundle is in Active state?",
    explanation:
      "The OSGi Bundle Console at `http://localhost:4502/system/console/bundles` shows all installed OSGi bundles and their states. An `Active` state means the bundle is running correctly. `Installed` or `Resolved` states usually indicate a missing dependency.",
  },
  {
    id: "env-102",
    category: "Troubleshooting",
    title: "crx-quickstart/logs/error.log",
    reference: "Where is the AEM error.log file located?",
    explanation:
      "The `error.log` file is located at `crx-quickstart/logs/error.log` — inside the `crx-quickstart` folder created by the QuickStart Jar. AEM logs all errors, warnings, and info messages here. It is the primary log for troubleshooting.",
  },
  {
    id: "env-103",
    category: "Troubleshooting",
    title: "/libs/granite/ui/content/dumplibs.html",
    reference: "Which AEM URL provides clientlib debug tools for front-end troubleshooting?",
    explanation:
      "The clientlib debug page is at `/libs/granite/ui/content/dumplibs.html`. It shows all registered client libraries, their categories, dependencies, and included files — useful for debugging missing CSS, JavaScript, or incorrect clientlib loading order.",
  },
  {
    id: "env-104",
    category: "Troubleshooting",
    title: "Wrong Java version and trying to double-click the QuickStart Jar",
    reference: "What are the two most common errors when setting up a local AEM environment?",
    explanation:
      "The two most common errors are: (1) using the wrong Java version — AEM requires JDK 21, and (2) double-clicking the QuickStart Jar instead of starting it with `java -jar` from the command line. Both cause the AEM instance to fail to start correctly.",
  },
]

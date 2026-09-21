import type { Concept } from "../types"

export const quickstartJarConcepts: Concept[] = [
  {
    id: "env-033",
    category: "QuickStart Jar",
    title: "A self-contained JAR file that runs a full AEM instance locally",
    reference: "What is the AEMaaCS SDK QuickStart Jar?",
    explanation:
      "The QuickStart Jar is a self-contained JAR file included in the AEMaaCS SDK. It runs a full AEM instance (Author or Publish) locally, providing the same JCR-based runtime as the cloud environment.",
  },
  {
    id: "env-034",
    category: "QuickStart Jar",
    title: "Adobe Software Distribution",
    reference: "Where do you download the AEMaaCS SDK QuickStart Jar from?",
    explanation:
      "The AEMaaCS SDK, including the QuickStart Jar, is downloaded from Adobe Software Distribution (softwaredistribution.adobe.com). You need an Adobe ID and appropriate licenses to access it.",
  },
  {
    id: "env-035",
    category: "QuickStart Jar",
    title: "From the command line using: java -jar aem-author-p4502.jar",
    reference: "What is the correct way to start the QuickStart Jar?",
    explanation:
      "The QuickStart Jar must always be started from the command line using `java -jar aem-author-p4502.jar`. Never double-click the JAR file — this can cause it to start incorrectly or corrupt the crx-quickstart folder.",
  },
  {
    id: "env-036",
    category: "QuickStart Jar",
    title: "It must be started from the command line to ensure it starts correctly",
    reference: "Why should you never double-click the QuickStart Jar file?",
    explanation:
      "The QuickStart Jar must be started via `java -jar` from the command line. Double-clicking may start it without proper parameters, potentially starting on a wrong port or in the wrong mode, and can corrupt the `crx-quickstart` folder.",
  },
  {
    id: "env-037",
    category: "QuickStart Jar",
    title: "Port 4502",
    reference: "On which port does the local AEM Author instance run by default?",
    explanation:
      "The local AEM Author instance runs on port 4502 by default, while the local Publish instance runs on port 4503. These ports are encoded in the QuickStart Jar filename.",
  },
  {
    id: "env-038",
    category: "QuickStart Jar",
    title: "Port 4503",
    reference: "On which port does the local AEM Publish instance run by default?",
    explanation:
      "The local AEM Publish instance runs on port 4503 by default. Author runs on 4502. These ports are specified in the QuickStart Jar filename and control where AEM listens for requests.",
  },
  {
    id: "env-039",
    category: "QuickStart Jar",
    title: "The runtime folder containing AEM's repository, logs, and configuration",
    reference: "What is the crx-quickstart folder created by the QuickStart Jar?",
    explanation:
      "On first startup, the QuickStart Jar creates a `crx-quickstart` folder in the same directory as the JAR. It contains the Oak JCR repository, logs, OSGi bundle cache, and all AEM runtime data.",
  },
  {
    id: "env-040",
    category: "QuickStart Jar",
    title: "Delete the crx-quickstart folder and start fresh",
    reference: "What must you do if you need to change the tier (Author vs Publish) of a running QuickStart Jar instance?",
    explanation:
      "The tier (author or publish) is locked on the first startup of the QuickStart Jar. To change it, you must delete the `crx-quickstart` folder and restart — AEM will re-read the tier from the JAR filename.",
  },
  {
    id: "env-041",
    category: "QuickStart Jar",
    title: "Yes, using two separate copies of the JAR in different directories with different filenames",
    reference: "Can the same QuickStart Jar run both Author and Publish instances simultaneously?",
    explanation:
      "The same QuickStart Jar can run both Author and Publish simultaneously by placing two copies in separate directories (`~/aem-sdk/author/` and `~/aem-sdk/publish/`) with filenames that encode the correct tier and port.",
  },
  {
    id: "env-042",
    category: "QuickStart Jar",
    title: "The AEM as a Cloud Service Software Development Kit, which includes the QuickStart Jar and Dispatcher Tools",
    reference: "What is the AEMaaCS SDK?",
    explanation:
      "The AEMaaCS SDK (AEM as a Cloud Service Software Development Kit) is a package provided by Adobe that includes the QuickStart Jar (for local AEM runtime) and the Dispatcher Tools (for local Dispatcher). It is downloaded from Adobe Software Distribution.",
  },
]

import type { Concept } from "../types"

export const developmentToolsConcepts: Concept[] = [
  {
    id: "env-009",
    category: "Development Tools",
    title: "Java JDK 21",
    reference: "Which Java version is recommended for local AEM development?",
    explanation:
      "Java JDK 21 is the recommended version for AEM development. AEM is a Java application, so the correct JDK must be installed before starting local development.",
  },
  {
    id: "env-010",
    category: "Development Tools",
    title: "java -version",
    reference: "What command verifies that Java is correctly installed on your system?",
    explanation:
      "After installing Java JDK, you verify the installation with the command `java -version`. This prints the installed JDK version to confirm it is correctly set up.",
  },
  {
    id: "env-011",
    category: "Development Tools",
    title: "Apache Maven",
    reference: "What is the build tool used for all AEM projects?",
    explanation:
      "Apache Maven is the build tool for all AEM projects. It compiles Java code, runs tests, and packages the code into OSGi bundles and content packages for deployment.",
  },
  {
    id: "env-012",
    category: "Development Tools",
    title: "mvn -v",
    reference: "What command verifies that Apache Maven is correctly installed?",
    explanation:
      "You verify Maven is installed correctly with `mvn -v`, which prints the Maven version, Java version, and OS information. This confirms the Maven installation is working.",
  },
  {
    id: "env-013",
    category: "Development Tools",
    title: "For front-end tooling and the Adobe I/O CLI",
    reference: "Why is Node.js required in the AEM local development environment?",
    explanation:
      "Node.js is required for front-end tooling (like webpack, Sass compilation) and for the Adobe I/O CLI (`aio`), which is installed as a global npm package. It is not used to run AEM itself.",
  },
  {
    id: "env-014",
    category: "Development Tools",
    title: "node --version",
    reference: "What command verifies that Node.js is correctly installed?",
    explanation:
      "After installing Node.js, you verify it with `node --version`, which prints the installed Node.js version number. This confirms Node.js is available in your PATH.",
  },
  {
    id: "env-015",
    category: "Development Tools",
    title: "Git — for source control",
    reference: "Which of the following is one of the four core tools required for local AEM development?",
    explanation:
      "The four core tools required for local AEM development are: Java JDK 21, Node.js, Apache Maven, and Git. Git is used for source control of the AEM project.",
  },
  {
    id: "env-016",
    category: "Development Tools",
    title: "Verify the installation with a version command",
    reference: "What is the recommended practice after installing each development tool for AEM?",
    explanation:
      "After installing each tool (Java, Maven, Node.js, Git), you should always verify with a version command: `java -version`, `mvn -v`, `node --version`, and `git --version`. This confirms the tool is installed and on the PATH.",
  },
]

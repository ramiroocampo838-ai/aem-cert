/**
 * AEM Maven Project Structure & Archetype - Slide Content
 * 14 slides covering AEM Maven project structure and archetype configuration,
 * AD0-E123/AD0-E128 objectives 3.1 (Maven project structure) and 3.2 (configure projects from archetypes).
 *
 * Source: public/speeches/maven.txt
 * Theme: indigo/blue/slate — from-indigo-900 via-blue-900 to-slate-900
 */

export interface CodeExample {
  language: "java" | "javascript" | "typescript" | "xml" | "html" | "htl" | "bash"
  code: string
  title?: string
  highlightLines?: number[]
}

export interface ExpandableContent {
  title: string
  content: string | string[] | { text: string; url?: string }[]
  type?: "list" | "text" | "table"
}

export interface DiagramData {
  type: "architecture" | "flow" | "tree" | "comparison" | "ascii"
  description: string
  elements?: { id: string; label: string; tooltip?: string }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface MavenSlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: { text: string; content: string }[]
  backgroundColor?: string
  estimatedTime: number
}

const THEME = "from-indigo-900 via-blue-900 to-slate-900"

export const mavenSlides: MavenSlide[] = [
  {
    id: 1,
    title: "AEM Maven Project Structure & Archetype",
    subtitle: "Build and Deployment Foundations",
    content: [
      "This lesson moves from component implementation into packaging and deployment. The focus is the Maven project structure, the content package types, the container package, and the AEM Project Archetype that generates the baseline project.",
      "It maps directly to exam objectives 3.1 on Maven project structure and 3.2 on configuring projects from archetypes. The speech emphasizes that Build and Deployment is a meaningful part of the exam, so these patterns are expected knowledge rather than background detail.",
      "Expect scenario questions about which module owns a file, which package type is correct, why deployment failed, or which archetype property creates a given result. The rest of the deck turns those scenarios into repeatable rules.",
    ],
    expandableSections: [
      { title: "Topics to Memorize", content: ["Modules", "Package types", "Embeds and filters", "Dependencies", "Archetype options", "Build profiles"], type: "list" },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },
  {
    id: 2,
    title: "Mutable vs. Immutable Repository Areas",
    subtitle: "Why Code and Content Must Be Split",
    content: [
      "AEM as a Cloud Service requires a strict separation of code and content. The areas /apps and /libs are immutable, so after startup they cannot be created, updated, or deleted at runtime. Any attempt to do so fails.",
      "Everything else named in the speech is mutable at runtime: /content, /conf, /var, /etc, /system, /tmp, /home, and /oak:index. As always, /libs belongs to product code and must never be modified by the project.",
      "Oak indexes are the special case to remember. Although /oak:index is mutable at runtime, Cloud Manager waits for new indexes to deploy and reindex before switching traffic, so index definitions are delivered as code in ui.apps rather than in ui.content.",
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Immutable and mutable areas",
        elements: [
          { id: "immutable", label: "Immutable: /apps, /libs", tooltip: "Cannot be changed at runtime" },
          { id: "mutable", label: "Mutable: /content, /conf, /var, /etc, /system, /tmp, /home, /oak:index", tooltip: "Can change at runtime" },
          { id: "index", label: "Oak indexes deploy as code", tooltip: "Special-case rule from the speech" },
        ],
      },
      {
        type: "ascii",
        description: "Repository split",
        asciiContent: `/apps      -> immutable project code
/libs      -> immutable product code
/content   -> mutable authored content
/conf      -> mutable configuration content
/oak:index -> mutable area, but definitions deploy as code`,
      },
    ],
    expandableSections: [
      {
        title: "Quick Table",
        content: [
          { text: "Immutable -> /apps, /libs" },
          { text: "Mutable -> /content, /conf, /var, /etc, /system, /tmp, /home, /oak:index" },
          { text: "Rule -> one package must not mix /apps with mutable roots" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },
  {
    id: 3,
    title: "The Modules of an AEM Project",
    subtitle: "core, ui.apps, ui.config, ui.content, and all",
    content: [
      "An AEM project follows a multi-module Maven structure. The key modules are core for the Java OSGi bundle, ui.apps for the /apps code package, ui.config for OSGi configurations and Repo Init, ui.content for mutable content and configuration, and all for the container package.",
      "Supporting modules may include ui.frontend for the webpack build, it.tests for Java integration tests, ui.tests for Selenium UI tests, dispatcher.cloud for Cloud Service Dispatcher configuration, and dispatcher.ams for AMS or on-premise projects.",
      "The parent pom.xml at the root drives the structure, manages shared versions, and lists the modules. That parent-child organization is part of the standard exam picture.",
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Module layout",
        asciiContent: `pom.xml
|-- core
|-- ui.apps
|-- ui.config
|-- ui.content
|-- all
|-- ui.frontend
|-- it.tests
|-- ui.tests
|-- dispatcher.cloud`,
      },
    ],
    expandableSections: [
      {
        title: "What Lives Where",
        content: [
          "core -> services, listeners, schedulers, Sling Models, servlets, request filters",
          "ui.apps -> components, clientlibs, template code, Oak index definitions",
          "ui.config -> run-mode OSGi configs and Repo Init",
          "ui.content -> /content, /conf, /content/dam, CA Config, governed tags",
          "all -> single deployable container artifact",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 4,
    title: "Package Types",
    subtitle: "application, content, and container",
    content: [
      "Every package declares a package type with the filevault-package-maven-plugin. The type clarifies the package purpose and influences how the deployment is treated.",
      "Code packages that target immutable areas use packageType application. Mutable content packages use packageType content. Container packages use packageType container, and all is the canonical example of a container.",
      "Another setting mentioned in the speech is accessControlHandling, usually set to merge so existing ACLs are preserved. For the exam, keep both the type mapping and the container restrictions in mind.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "filevault-package-maven-plugin on a non-all package",
        code: `<plugin>
  <groupId>org.apache.jackrabbit</groupId>
  <artifactId>filevault-package-maven-plugin</artifactId>
  <extensions>true</extensions>
  <configuration>
    <packageType>application</packageType>
    <accessControlHandling>merge</accessControlHandling>
    <properties>
      <cloudManagerTarget>none</cloudManagerTarget>
    </properties>
  </configuration>
</plugin>`,
        highlightLines: [6, 7, 9],
      },
    ],
    expandableSections: [
      {
        title: "Package Type Comparison",
        content: [
          { text: "application -> immutable code package such as ui.apps" },
          { text: "content -> mutable package such as ui.content" },
          { text: "container -> wrapper package such as all" },
        ],
        type: "table",
      },
      {
        title: "Container Rules",
        content: ["May contain OSGi bundles, configurations, and sub packages", "Must not contain regular nodes", "May not use install hooks in AEM as a Cloud Service"],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 5,
    title: "Marking Packages for Cloud Manager Deployment",
    subtitle: "Deploy all Once, Skip the Embedded Packages",
    content: [
      "Cloud Manager harvests every package produced by the build unless configured otherwise. That is a problem if ui.apps, ui.config, or ui.content are deployed individually after already being embedded in all.",
      "To prevent double installation, every package-producing project except all adds cloudManagerTarget set to none in the filevault-package-maven-plugin configuration. The speech presents this as a rule, not a preference.",
      "The exam takeaway is simple: all is the only package Cloud Manager deploys. The application deployment must be a single AEM package that contains the code, configuration, and baseline content it needs.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Cloud Manager exclusion on an embedded package",
        code: `<configuration>
  <packageType>content</packageType>
  <properties>
    <cloudManagerTarget>none</cloudManagerTarget>
  </properties>
</configuration>`,
        highlightLines: [2, 4],
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Harvest behavior",
        elements: [
          { id: "build", label: "Build produces packages", tooltip: "ui.apps, ui.config, ui.content, all" },
          { id: "skip", label: "cloudManagerTarget=none", tooltip: "Subordinate packages are ignored" },
          { id: "deploy", label: "Deploy all only", tooltip: "Single deployment artifact" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },
  {
    id: 6,
    title: "The Container Package and Embeds",
    subtitle: "How all Packages the Application",
    content: [
      "The all module is a container package. It contains only deployable artifacts as embeds: the core bundle JAR plus the ui.apps, ui.config, and ui.content packages. It must not carry its own regular repository content.",
      "Embedded artifacts are configured with embeddeds in the FileVault package Maven plugin, not with the older subPackages configuration. The target path convention is /apps/<app-name>-packages/(application|content|container)/install, with install.author and install.publish supported for author-only or publish-only use cases.",
      "Because the embedded packages are placed under /apps/<app-name>-packages, the container filter.xml must include those roots. The -packages suffix exists so embedded packages do not land inside the main application code tree and create destructive or cyclic behavior.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "all/pom.xml embeddeds",
        code: `<plugin>
  <groupId>org.apache.jackrabbit</groupId>
  <artifactId>filevault-package-maven-plugin</artifactId>
  <extensions>true</extensions>
  <configuration>
    <packageType>container</packageType>
    <embeddeds>
      <embedded>
        <groupId>com.mysite</groupId>
        <artifactId>core</artifactId>
        <type>jar</type>
        <target>/apps/mysite-packages/application/install</target>
      </embedded>
      <embedded>
        <groupId>com.mysite</groupId>
        <artifactId>ui.apps</artifactId>
        <type>zip</type>
        <target>/apps/mysite-packages/application/install</target>
      </embedded>
      <embedded>
        <groupId>com.mysite</groupId>
        <artifactId>ui.config</artifactId>
        <type>zip</type>
        <target>/apps/mysite-packages/application/install</target>
      </embedded>
      <embedded>
        <groupId>com.mysite</groupId>
        <artifactId>ui.content</artifactId>
        <type>zip</type>
        <target>/apps/mysite-packages/content/install</target>
      </embedded>
    </embeddeds>
  </configuration>
</plugin>`,
        highlightLines: [6, 11, 17, 23, 29],
      },
      {
        language: "xml",
        title: "Container filter.xml roots",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<workspaceFilter version="1.0">
  <filter root="/apps/mysite-packages/application"/>
  <filter root="/apps/mysite-packages/content"/>
</workspaceFilter>`,
        highlightLines: [3, 4],
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Embeds inside all",
        asciiContent: `all
|-- core.jar      -> /apps/mysite-packages/application/install
|-- ui.apps.zip   -> /apps/mysite-packages/application/install
|-- ui.config.zip -> /apps/mysite-packages/application/install
|-- ui.content.zip-> /apps/mysite-packages/content/install`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 7,
    title: "Package Dependencies & Repository Structure Package",
    subtitle: "Install Order and Structural Safety",
    content: [
      "Packages declare dependencies so installation order is correct. The general rule in the speech is that ui.content depends on ui.apps because mutable content relies on immutable code that defines the rendering and structures.",
      "The exception is important: if a code package contains only OSGi bundles, no AEM package should depend on it. A bundle-only artifact is not registered with Package Manager, so the dependency remains unsatisfied and installation fails.",
      "Code packages also need a repository structure package, configured through repositoryStructurePackage in the FileVault plugin. The archetype generates ui.apps.structure so one code package does not install over another package's structural folders.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "ui.content depends on ui.apps",
        code: `<plugin>
  <groupId>org.apache.jackrabbit</groupId>
  <artifactId>filevault-package-maven-plugin</artifactId>
  <extensions>true</extensions>
  <configuration>
    <packageType>content</packageType>
    <dependencies>
      <dependency>
        <groupId>com.mysite</groupId>
        <artifactId>ui.apps</artifactId>
      </dependency>
    </dependencies>
  </configuration>
</plugin>`,
        highlightLines: [6, 8, 9],
      },
      {
        language: "xml",
        title: "repositoryStructurePackage",
        code: `<configuration>
  <packageType>application</packageType>
  <repositoryStructurePackages>
    <repositoryStructurePackage>
      <groupId>com.mysite</groupId>
      <artifactId>ui.apps.structure</artifactId>
    </repositoryStructurePackage>
  </repositoryStructurePackages>
</configuration>`,
        highlightLines: [3, 4, 6],
      },
    ],
    expandableSections: [
      { title: "Dependency Pattern", content: ["all -> no dependency requirement called out here", "ui.apps -> no dependency in the simple case", "ui.content -> depends on ui.apps"], type: "list" },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 8,
    title: "Filters and Package Contents",
    subtitle: "Which Paths Each Package Owns",
    content: [
      "Each package defines ownership through META-INF/vault/filter.xml. ui.apps owns immutable paths such as /apps/<appId> and Oak index roots, while ui.content owns mutable paths such as /content/<appId>, /conf/<appId>, and /content/dam/<appId>.",
      "A filter can also define a mode. replace is the default and removes content under the root that is not in the package, merge adds content without removing, and update adds and overwrites without removing.",
      "The exam rule is strict: a package with /apps filters must not also have /content filters. Mixing immutable and mutable roots in one package violates the AEM as a Cloud Service packaging rules.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "ui.apps filter.xml",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<workspaceFilter version="1.0">
  <filter root="/apps/mysite"/>
  <filter root="/oak:index/cqPageLucene"/>
</workspaceFilter>`,
        highlightLines: [3, 4],
      },
      {
        language: "xml",
        title: "ui.content filter.xml",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<workspaceFilter version="1.0">
  <filter root="/content/mysite"/>
  <filter root="/conf/mysite"/>
  <filter root="/content/dam/mysite"/>
</workspaceFilter>`,
        highlightLines: [3, 4, 5],
      },
    ],
    expandableSections: [
      {
        title: "Filter Mode Comparison",
        content: [
          { text: "replace -> default; removes missing content under the filter root" },
          { text: "merge -> adds content and never removes" },
          { text: "update -> adds and overwrites but never removes" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 9,
    title: "ui.config, Run Modes, and Repo Init",
    subtitle: "OSGi Configuration and Baseline Setup",
    content: [
      "ui.config contains the OSGi configuration files and the Repo Init scripts. The speech treats this as code because the content configures OSGi bundles and establishes application-owned structures rather than normal authored content.",
      "The configurations live in /apps/<appId>/osgiconfig. A config folder holds common defaults, and run-mode folders follow names such as config.author, config.publish.prod, or config.dev. The key run modes are author and publish for service tier plus dev, stage, and prod for environment type.",
      "Repo Init is the recommended way to deploy mutable content that logically belongs to the application. Its scripts live in a RepositoryInitializer factory configuration, and the .config format is preferred because it supports multi-line values. The scripts must be inline in the scripts field.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "osgiconfig folder tree",
        code: `/apps/mysite/osgiconfig
  /config
  /config.author
  /config.publish
  /config.dev
  /config.publish.prod`,
      },
      {
        language: "bash",
        title: "Repo Init .config snippet",
        code: `org.apache.sling.jcr.repoinit.RepositoryInitializer~mysite.config
scripts=[
  "create path (sling:Folder) /content/mysite",
  "create service user mysite-reader",
  "set ACL on /content/mysite",
  "  allow jcr:read for mysite-reader",
  "end"
]`,
        highlightLines: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
    expandableSections: [
      { title: "Repo Init Uses", content: ["Baseline content structures", "Users and service users", "Groups", "ACLs"], type: "list" },
      { title: "Inline Script Rule", content: "Define Repo Init in the scripts field itself. The references configuration does not work here.", type: "text" },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 10,
    title: "The Parent POM",
    subtitle: "Managed Versions and Deploy Defaults",
    content: [
      "The root pom.xml is the parent POM. It lists the modules in the modules section, manages dependency versions in dependencyManagement, and defines global properties used across the build.",
      "Submodules must not repeat versions for managed dependencies. The speech makes this a best-practice rule because version alignment belongs in the parent rather than being duplicated throughout child POMs.",
      "The parent also provides default local deployment properties such as aem.host, aem.port, aem.publish.host, aem.publish.port, sling.user, and sling.password. They can be overridden from the command line so the POM files do not need to change for each target.",
    ],
    expandableSections: [
      { title: "Parent Responsibilities", content: ["List modules", "Manage dependency versions", "Define global build and deployment properties"], type: "list" },
      {
        title: "Dependency Notes from the Speech",
        content: [
          { text: "Cloud Service -> aem-sdk-api" },
          { text: "AEM 6.5 -> uber-jar" },
          { text: "Core Components are included out of the box on Cloud Service" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 11,
    title: "The Core Bundle",
    subtitle: "Java OSGi Bundle and Test Layers",
    content: [
      "The core module builds the OSGi bundle and contains the Java implementation: services, Sling Models, servlets, listeners, schedulers, and request filters. It is the code-heavy module in the project.",
      "The bnd-maven-plugin generates the bundle manifest, including Sling-Model-Packages for Sling Models. The speech highlights that this avoids manual manifest maintenance and pairs with annotation-driven development in the bundle code.",
      "Testing is split into three layers: unit tests in core, integration tests in it.tests that run on the AEM server, and UI tests in ui.tests with Selenium. The resulting bundle is embedded into the all package for deployment.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Core bundle lifecycle",
        elements: [
          { id: "source", label: "core source", tooltip: "Services, models, servlets" },
          { id: "manifest", label: "bnd-maven-plugin", tooltip: "Generates manifest headers" },
          { id: "bundle", label: "core bundle JAR", tooltip: "Artifact embedded by all" },
          { id: "install", label: "all installs bundle", tooltip: "Bundle arrives through the container package" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },
  {
    id: 12,
    title: "Generating a Project with the Archetype",
    subtitle: "Start New Projects from the Standard Template",
    content: [
      "The AEM Project Archetype is the Maven template for creating a minimal, best-practices-based AEM project. The generated project already includes editable templates, Core Components proxies, the Style System, a front-end build, example code, and Dispatcher configuration.",
      "The speech gives the standard maven-archetype-plugin command and notes that version 3.3.1 or later should be used. For the exam, the key point is that the archetype is the expected starting point for a new project.",
      "The older group ID com.adobe.granite.archetype is mentioned only for older archetype versions. The modern group/artifact combination is com.adobe.aem plus aem-project-archetype.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Archetype generate command",
        code: `mvn -B org.apache.maven.plugins:maven-archetype-plugin:3.3.1:generate \
  -D archetypeGroupId=com.adobe.aem \
  -D archetypeArtifactId=aem-project-archetype \
  -D archetypeVersion=<version> \
  -D appTitle="My Site" \
  -D appId="mysite" \
  -D groupId="com.mysite"`,
        highlightLines: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
    expandableSections: [
      { title: "Key Archetype Properties", content: ["appTitle -> site title and component groups", "appId -> technical name for folders and clientlibs", "groupId -> Maven groupId and Java package base", "artifactId -> defaults to appId", "package -> defaults to groupId", "version -> defaults to 1.0-SNAPSHOT"], type: "list" },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 13,
    title: "Archetype Options",
    subtitle: "Target Selection and Generated Features",
    content: [
      "aemVersion selects the target and defaults to cloud for AEM as a Cloud Service. A value such as 6.5.8 targets AMS or on-premise. When the target is cloud, sdkVersion can pin a specific SDK version and otherwise defaults to latest.",
      "includeDispatcherConfig defaults to y, frontendModule defaults to general with none as the other value named in the speech, and language, country, and singleCountry shape the generated content structure. singleCountry defaults to y and affects whether a language-master structure is created.",
      "includeExamples defaults to n and adds a Component Library example site. Other options mentioned include Commerce and Forms, and the generated project includes READMEs at both module and root level.",
    ],
    expandableSections: [
      {
        title: "Option Comparison Table",
        content: [
          { text: "aemVersion -> cloud by default; 6.5.x for AMS/on-premise" },
          { text: "sdkVersion -> used only for cloud; default latest" },
          { text: "includeDispatcherConfig -> default y" },
          { text: "frontendModule -> default general; other named value none" },
          { text: "singleCountry -> default y" },
          { text: "includeExamples -> default n" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 14,
    title: "Building, Deploying, and Best Practices",
    subtitle: "Profiles, Cloud Manager, and Exam Rules",
    content: [
      "mvn clean install builds all modules and produces the packages plus the bundle. The Maven profiles then deploy specific outputs to a running AEM instance, while Cloud Manager builds from Git and deploys only the all package.",
      "The speech explicitly names the common local profiles: autoInstallSinglePackage at the root installs all on author, autoInstallSinglePackagePublish installs it on publish, autoInstallPackage inside ui.apps or another package module installs that package alone, and autoInstallBundle in core installs only the OSGi bundle.",
      "The best-practice summary is the exam checklist: use the archetype, keep the standard module layout, never mix code and content, deploy Oak indexes as code, embed everything in all, set cloudManagerTarget to none everywhere except all, use embeddeds rather than subPackages, use the -packages suffix, manage versions in the parent, and keep environment-specific values out of code.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Common Maven commands",
        code: `mvn clean install
mvn -PautoInstallSinglePackage clean install
mvn -PautoInstallSinglePackagePublish clean install
mvn -PautoInstallPackage clean install
mvn -PautoInstallBundle clean install`,
        highlightLines: [2, 3, 4, 5],
      },
    ],
    expandableSections: [
      {
        title: "Best Practices to Memorize",
        content: [
          "Use the archetype to create new projects",
          "Keep core, ui.apps, ui.config, ui.content, and all",
          "Never mix code and content in one package",
          "Deploy Oak indexes as code in ui.apps",
          "Embed everything in all",
          "Set cloudManagerTarget to none on every package except all",
          "Use embeddeds and not subPackages",
          "Use the -packages folder suffix",
          "Manage dependency versions only in the parent POM",
          "Put environment-specific values in run-mode folders and Cloud Manager variables, never in code",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
]

export function getTotalMavenSlides(): number {
  return mavenSlides.length
}

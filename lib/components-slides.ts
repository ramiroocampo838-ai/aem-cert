/**
 * AEM Component Development - Slide Content
 * 14 slides covering AEM Component Development,
 * AD0-E123/AD0-E128 objectives 2.1 (proxy of core component) and 2.2 (HTL, models, services).
 *
 * Source: public/speeches/components.txt
 * Theme: rose/pink/red — from-rose-900 via-pink-900 to-red-900
 */

// ============================================================================
// INTERFACES (same shape as authentication-slides / env-setup-slides pattern)
// ============================================================================

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
  elements?: {
    id: string
    label: string
    tooltip?: string
  }[]
  asciiContent?: string
}

export interface ModalContent {
  title: string
  content: string
  type: "text" | "image" | "code" | "diagram"
  data?: CodeExample | DiagramData | string
}

export interface ComponentsSlide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  expandableSections?: ExpandableContent[]
  codeExamples?: CodeExample[]
  diagrams?: DiagramData[]
  modals?: ModalContent[]
  tooltips?: {
    text: string
    content: string
  }[]
  backgroundColor?: string
  estimatedTime: number // in minutes
}

const THEME = "from-rose-900 via-pink-900 to-red-900"

// ============================================================================
// SLIDE CONTENT — 14 SLIDES
// ============================================================================

export const componentsSlides: ComponentsSlide[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — Introduction
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "AEM Component Development",
    subtitle: "Proxy Components, HTL, Models, and Services",
    content: [
      "Templates define where components can go, but the component itself is what actually renders the experience. This section focuses on how components are structured, how they are extended, how HTL writes the markup, how Sling Models provide logic, and how services and servlets support the component.",
      "This maps directly to Section 2 of the exam: objective 2.1 on implementing a proxy of a Core Component, objective 2.2 on building component functionality with HTL, models, and services, and it also touches configuration topics through OSGi.",
      "The speech emphasizes that exam questions are scenario-based. You should expect questions about which file to change, which property to set, which annotation to use, and what behavior follows if the implementation choice is wrong.",
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — Anatomy of a Component
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Anatomy of a Component",
    subtitle: "Repository Node, Scripts, Dialogs, and Content Linkage",
    content: [
      "An AEM component is a cq:Component node stored under /apps, and project components usually live under /apps/<project>/components. In a Maven project they are packaged through ui.apps, which is where the repository structure for the component is delivered.",
      "A typical component folder contains a .content.xml file for the component node itself, an HTL script named after the component, a cq:dialog for authors, a cq:design_dialog for template policies, and sometimes a clientlibs folder. The .content.xml carries key metadata such as jcr:title, componentGroup, sling:resourceSuperType, and cq:isContainer.",
      "A critical exam point is that content does not live inside the component. The component is code under /apps, while authored data is stored under /content. The content resource points back to the renderer using sling:resourceType.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Basic component .content.xml",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:cq="http://www.day.com/jcr/cq/1.0"
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:Component"
    jcr:title="Title"
    componentGroup="WKND - Content"
    sling:resourceSuperType="core/wcm/components/title/v3/title"/>`,
        highlightLines: [5, 6, 7],
      },
    ],
    expandableSections: [
      {
        title: "Typical Files in a Component Folder",
        content: [
          ".content.xml for cq:Component properties",
          "<component-name>.html for HTL markup",
          "_cq_dialog for the authoring dialog",
          "_cq_design_dialog for policy-oriented design settings",
          "clientlibs when component-specific front-end assets are needed",
        ],
        type: "list",
      },
      {
        title: "Key Component Properties",
        content: [
          "jcr:title — label shown to authors",
          "componentGroup — grouping in the Components browser; groups starting with a dot are hidden",
          "sling:resourceSuperType — inheritance chain for scripts, dialogs, and clientlibs",
          "cq:isContainer — marks a component that can contain other components",
        ],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "How content references a component",
        elements: [
          { id: "code", label: "/apps/<project>/components/title", tooltip: "Component definition and scripts" },
          { id: "content", label: "/content/.../title", tooltip: "Authored content resource" },
          { id: "type", label: "sling:resourceType", tooltip: "Links the content resource to the component" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — Proxy Component Pattern
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "The Proxy Component Pattern",
    subtitle: "Site-Specific Resource Types Without Copying Core Code",
    content: [
      "Best practice is that content points to a site-specific component, not directly to a shared component or to Core Components. That keeps each site flexible, because changes for one site stay isolated to that site's own component path.",
      "To avoid duplication, the project component uses sling:resourceSuperType to inherit from a shared parent. When the project component mainly exists to point at that parent, it is a proxy component. The proxy may be nearly empty, or it can override selected files while inheriting the rest.",
      "For Core Components, the parent path lives under /apps/core/wcm/components, while the proxy lives under your project's /apps path. The speech is explicit: never modify Core Components directly, and do not copy the whole component when only a small customization is needed.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Proxy of a Core Title component",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:cq="http://www.day.com/jcr/cq/1.0"
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:Component"
    jcr:title="Title"
    componentGroup="WKND - Content"
    sling:resourceSuperType="core/wcm/components/title/v3/title"/>`,
        highlightLines: [7],
      },
    ],
    expandableSections: [
      {
        title: "Why Proxy Components Matter",
        content: [
          "Content references a project-owned resource type",
          "Shared functionality is inherited instead of duplicated",
          "One site can customize behavior without affecting another site",
          "Upgrades stay supportable because Core Component code is left untouched",
        ],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Content to proxy to versioned core component flow",
        asciiContent: `/content/site/en/page/jcr:content/root/title
  sling:resourceType = "wknd/components/title"
            |
            v
/apps/wknd/components/title
  sling:resourceSuperType = "core/wcm/components/title/v3/title"
            |
            v
/apps/core/wcm/components/title/v3/title`,
      },
    ],
    modals: [
      {
        title: "Exam Warning",
        content: "Never modify Core Components directly and never point content at the versioned Core Component path when a proxy is expected.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — Resource Type Resolution and Versioning
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Resource Type Resolution & Versioning",
    subtitle: "How Sling Walks the Inheritance Chain",
    content: [
      "Sling resolves rendering by starting at the resource's sling:resourceType. If a script is not found there, Sling walks up sling:resourceSuperType until it finds the needed HTL, dialog, or client library. That inheritance model is what makes proxy components work.",
      "Search paths matter as well: Sling checks /apps before /libs. Customizations belong in /apps, while /libs is immutable in AEM as a Cloud Service and must never be modified because platform updates overlay it.",
      "Core Components are versioned in their resource type path, such as core/wcm/components/image/v3/image. The version changes only for major, non-backward-compatible changes. The rule from the speech is strict: content must never point to a versioned component path. Content points to the proxy, and the proxy points to the versioned parent.",
    ],
    expandableSections: [
      {
        title: "Examples of Incompatible Changes for a New Major Version",
        content: [
          "Sling Models",
          "HTL scripts",
          "HTML markup and CSS selectors",
          "JSON representation",
          "Dialogs",
        ],
        type: "list",
      },
      {
        title: "Search Path Rule",
        content: "Sling searches /apps first and then /libs, which is why overlays and customizations belong in /apps and /libs remains untouched.",
        type: "text",
      },
    ],
    diagrams: [
      {
        type: "tree",
        description: "Resolution chain from content to inherited script",
        elements: [
          { id: "content", label: "Content resource", tooltip: "Carries sling:resourceType" },
          { id: "proxy", label: "Project proxy component", tooltip: "First place Sling checks for scripts" },
          { id: "core", label: "Versioned Core Component", tooltip: "Parent found through sling:resourceSuperType" },
          { id: "script", label: "Resolved HTL/dialog/clientlib", tooltip: "First match in the chain wins" },
        ],
      },
    ],
    tooltips: [
      {
        text: "Versioned component",
        content: "A Core Component path like core/wcm/components/title/v3/title. Content should not reference this path directly.",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — HTL Fundamentals
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "HTL Fundamentals",
    subtitle: "Secure Markup With Expressions, Options, and Contexts",
    content: [
      "HTL is AEM's server-side template language and replaces JSP. The speech stresses that HTL was designed to be simple and secure, including context-aware XSS protection by default.",
      "Expressions use the ${...} syntax, options follow an at sign, and common global objects include properties, pageProperties, inheritedPageProperties, currentPage, resource, request, and wcmmode. Strict comparison semantics apply, and the or operator is often used to provide fallbacks.",
      "Display contexts are a frequent exam area. Defaults are safe for text, attributes, and URIs, but script and style contexts require explicit context or nothing is rendered. Using unsafe disables escaping and is called out as a security risk.",
    ],
    codeExamples: [
      {
        language: "htl",
        title: "Expressions, defaults, and explicit context",
        code: `<h1>\${properties.pageTitle || properties.jcr:title || resource.name}</h1>
<div class="description">\${properties.text @ context='html'}</div>
<a href="\${properties.link}">\${properties.linkText}</a>
<script>
  const trackingId = "\${properties.trackingId @ context='scriptString'}";
</script>`,
        highlightLines: [1, 2, 5],
      },
    ],
    expandableSections: [
      {
        title: "Useful HTL Options",
        content: [
          "format for strings, dates, and numbers",
          "i18n for translations",
          "join for arrays",
          "URI manipulation options such as scheme, domain, path, selectors, extension, prependPath, and appendPath",
        ],
        type: "list",
      },
      {
        title: "HTL Comment Syntax",
        content: "HTL comments are written as <!--/* comment */--> and are removed from output, unlike normal HTML comments.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — HTL Block Statements
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "HTL Block Statements",
    subtitle: "use, test, list, repeat, resource, template, and sly",
    content: [
      "HTL behavior is driven by data-sly-* block statements attached to HTML elements. The key ones from the speech are data-sly-use, data-sly-test, data-sly-list, data-sly-repeat, data-sly-text, data-sly-attribute, data-sly-element, data-sly-set, data-sly-unwrap, data-sly-include, data-sly-resource, data-sly-template, and data-sly-call.",
      "A common exam distinction is list versus repeat: data-sly-list keeps the host element and iterates over its content, while data-sly-repeat duplicates the host element itself. Another common detail is that data-sly-test can store its result in a reusable variable.",
      "The speech also highlights evaluation priority. For example, list executes after test, so a test on the same element as a list runs once before the loop begins. The sly element is the modern wrapper when you want logic to execute without keeping a host element in the output.",
    ],
    codeExamples: [
      {
        language: "htl",
        title: "Common HTL block statements",
        code: `<sly data-sly-use.model="com.wknd.core.models.Byline" />
<div data-sly-test.hasTitle="\${model.name}">
  <h2>\${model.name}</h2>
  <ul data-sly-list.item="\${model.occupations}">
    <li>\${item}</li>
  </ul>
  <div data-sly-resource="\${'image' @ resourceType='wknd/components/image'}"></div>
</div>`,
        highlightLines: [1, 2, 4, 7],
      },
    ],
    expandableSections: [
      {
        title: "data-sly-list itemList Metadata",
        content: [
          "index",
          "count",
          "first",
          "middle",
          "last",
          "odd",
          "even",
        ],
        type: "list",
      },
      {
        title: "Priority Order to Remember",
        content: [
          "1 template",
          "2 set, test, and use",
          "3 call",
          "4 text",
          "5 element, include, and resource",
          "6 unwrap",
          "7 list and repeat",
          "8 attribute",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — Templates, Resource, and Use-API
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Templates, Include, Resource, and the Use-API",
    subtitle: "Reusable HTL and the Boundary Between Markup and Logic",
    content: [
      "data-sly-template and data-sly-call let you define and invoke reusable HTL fragments, including fragments loaded from another file. The speech notes that Core Components rely on this pattern heavily, and a proxy can override a template when needed.",
      "data-sly-include brings in the output of another script as markup, while data-sly-resource renders a resource through its own component, optionally forcing a resourceType or passing selectors and wcmmode. This is the normal way to render child resources such as a parsys or responsive grid.",
      "For logic access, HTL uses the Use-API. Although JavaScript Use-API exists, the recommended modern approach is Sling Models. The separation-of-concerns rule is explicit: markup stays in HTL, and anything beyond simple presentation logic belongs in the model.",
    ],
    codeExamples: [
      {
        language: "htl",
        title: "Reusable template and resource rendering",
        code: `<sly data-sly-use.templates="templates.html" />
<sly data-sly-call="\${templates.heading @ text=properties.jcr:title}" />

<div
  data-sly-resource="\${'root' @ resourceType='wcm/foundation/components/responsivegrid'}">
</div>`,
        highlightLines: [1, 2, 5],
      },
      {
        language: "htl",
        title: "Loading a Sling Model through data-sly-use",
        code: `<sly data-sly-use.model="com.wknd.core.models.Byline" />
<p>\${model.name}</p>`,
      },
    ],
    expandableSections: [
      {
        title: "What data-sly-resource Can Pass",
        content: [
          "resourceType to force a specific component",
          "selectors",
          "wcmmode",
          "prependPath",
          "appendPath",
        ],
        type: "list",
      },
    ],
    modals: [
      {
        title: "Separation of Concerns",
        content: "HTL deliberately limits arbitrary calculations. Complex logic should move into a Sling Model rather than being embedded in the template.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8 — Sling Models Fundamentals
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Sling Models Fundamentals",
    subtitle: "Annotation-Driven POJOs for Component Logic",
    content: [
      "Sling Models are annotation-driven Java POJOs that map from Sling objects such as resources and requests, and they can also receive OSGi services. The speech presents them as the recommended implementation model for component logic.",
      "A model is annotated with @Model and declares its adaptables, typically Resource or SlingHttpServletRequest. Adobe's guidance is to use Resource where possible so the model can be reused inside and outside a request context, but request is necessary when request-bound injectors are needed.",
      "Registration is handled through Sling-Model-Packages or Sling-Model-Classes in the bundle manifest, commonly generated by the Sling Models bnd plugin. Client code can adapt with adaptTo, which returns null on failure, or use ModelFactory for an exception with details.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Basic Sling Model with ValueMap injection",
        code: `package com.wknd.core.models;

import javax.annotation.PostConstruct;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class BylineModel {

    @ValueMapValue
    private String name;

    private String normalizedName;

    @PostConstruct
    protected void init() {
        normalizedName = name == null ? "" : name.trim();
    }

    public String getName() {
        return normalizedName;
    }
}`,
        highlightLines: [8, 14, 18],
      },
    ],
    expandableSections: [
      {
        title: "Adaptables to Remember",
        content: [
          "Resource",
          "SlingHttpServletRequest",
        ],
        type: "list",
      },
      {
        title: "Instantiation Behavior",
        content: "The default injection strategy is required, so failed mandatory injections prevent model creation and adaptTo returns null unless the model or field is marked optional.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9 — Sling Models Injectors and Annotations
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Sling Model Injectors & Annotations",
    subtitle: "Specific Injectors Beat Generic @Inject",
    content: [
      "The speech emphasizes that each injector has a specialized annotation and that using the specific annotation is preferred over generic @Inject. The specific annotations are faster, clearer, and make the chosen injector explicit.",
      "The core exam annotations here are @ValueMapValue, @ChildResource, @ScriptVariable, @SlingObject, @OSGiService, @RequestAttribute, @Self, and @Via. Optionality can be controlled either per injection or by model defaultInjectionStrategy, while @Default and @Named help with values and property names.",
      "@PostConstruct is the lifecycle hook that runs after injection completes and is where initialization logic belongs. Another subtle point from the speech is that interface-only models are created by dynamic proxies, and default interface methods are not executed by Sling Models.",
    ],
    expandableSections: [
      {
        title: "Most Important Injector Annotations",
        content: [
          "@ValueMapValue — property from the resource ValueMap",
          "@ChildResource — child resource or list of child resources",
          "@ScriptVariable — scripting binding such as currentPage or properties",
          "@SlingObject — ResourceResolver, Resource, request, or response",
          "@OSGiService — injected OSGi service",
          "@RequestAttribute — request attribute",
          "@Self — adaptable itself or an object adapted from it",
          "@Via — alternate source, including resource super type",
        ],
        type: "list",
      },
      {
        title: "Naming Rules",
        content: "If a property name is not specified explicitly, Sling Models derives it from the field or method name, so a field named title maps to the title property.",
        type: "text",
      },
    ],
    codeExamples: [
      {
        language: "java",
        title: "Model using multiple injector-specific annotations",
        code: `package com.wknd.core.models;

import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class)
public class SearchModel {

    @ValueMapValue
    private String queryRoot;

    @ChildResource
    private List<Resource> items;

    @RequestAttribute
    private String searchTerm;

    @SlingObject
    private ResourceResolver resourceResolver;

    @OSGiService
    private SearchService searchService;
}`,
        highlightLines: [13, 16, 19, 22, 25],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10 — Model Interfaces and Delegation
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Model Interfaces & the Delegation Pattern",
    subtitle: "Extend Core Component Models Without Extending Their Classes",
    content: [
      "Core Components keep their implementation classes private, so the speech is clear that you must never extend those implementation classes directly. Instead, you work against the public model interface and use delegation.",
      "Your model implements the same public interface and is registered for your proxy component's resourceType. To reach the parent implementation, the speech calls out the key annotation pair: @Self with @Via(type = ResourceSuperType.class).",
      "This produces the model interfaces pattern, sometimes described as double binding. HTL can keep adapting to the interface, while a project is free to replace the model implementation for its proxy component without changing the HTL or the Core Component implementation.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Delegating to the Core Component model",
        code: `package com.wknd.core.models.impl;

import com.adobe.cq.wcm.core.components.models.Title;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.via.ResourceSuperType;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.Via;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = Title.class,
    resourceType = "wknd/components/title"
)
public class CustomTitleModel implements Title {

    @Self
    @Via(type = ResourceSuperType.class)
    private Title title;

    @Override
    public String getText() {
        return title.getText() == null ? "" : title.getText().toUpperCase();
    }

    @Override
    public String getType() {
        return title.getType();
    }
}`,
        highlightLines: [9, 11, 16, 17, 21, 26],
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Unsafe inheritance versus supported delegation",
        elements: [
          { id: "extend", label: "Extending private Core impl", tooltip: "Unsupported because implementation classes are private and can change" },
          { id: "delegate", label: "Implement interface + delegate", tooltip: "Supported extension pattern for proxy components" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11 — Exporting Models as JSON
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Exporting Models as JSON",
    subtitle: "Sling Model Exporter, .model.json, and ComponentExporter",
    content: [
      "Sling Models can be exported as JSON by using the Sling Model Exporter. The speech ties this to requests such as /content/.../title.model.json, where the serialized model becomes available to consumers.",
      "Core Components also use ComponentExporter and ContainerExporter so they participate in page-level JSON for SPA and headless use cases. The exporter relies on Jackson, so annotations such as @JsonIgnore and @JsonProperty are relevant when shaping the output.",
      "A model used only for HTL does not need an exporter. The exporter should be added only when JSON consumption is an actual requirement, and exported models still need the correct resourceType binding when they represent the proxy component.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Model Exporter with ComponentExporter",
        code: `package com.wknd.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = { TitleExporter.class, ComponentExporter.class },
    resourceType = "wknd/components/title"
)
@Exporter(name = "jackson", extensions = "json")
public class TitleExporter implements ComponentExporter {

    @ValueMapValue
    @JsonProperty("text")
    private String title;

    public String getText() {
        return title;
    }

    @Override
    public String getExportedType() {
        return "wknd/components/title";
    }
}`,
        highlightLines: [9, 11, 14, 17, 24],
      },
    ],
    expandableSections: [
      {
        title: "JSON Export Concepts",
        content: [
          "@Exporter(name = \"jackson\", extensions = \"json\")",
          ".model.json selector and extension",
          "ComponentExporter and ContainerExporter for page JSON participation",
          "Jackson annotations such as @JsonIgnore and @JsonProperty",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 12 — Component Dialogs
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Component Dialogs",
    subtitle: "cq:dialog, cq:design_dialog, Granite UI, and Resource Merger",
    content: [
      "AEM components have two authoring dialog types: cq:dialog for page authors and cq:design_dialog for template authors defining policies. Both are built with Granite UI using Coral 3-based Touch UI components and are stored as nt:unstructured nodes.",
      "A dialog is a node tree with a root resource type such as fixedcolumns or tabs, followed by field nodes like textfield, pathfield, select, checkbox, and multifield. The name property determines where the authored value is stored, and a leading ./ means the value is saved relative to the component content resource.",
      "Dialog inheritance follows sling:resourceSuperType, and the Sling Resource Merger lets a proxy component merge with the parent's dialog. The speech is explicit that the safe pattern is to replicate the parent structure only down to the tab item level, hide whole inherited tabs when needed, and add new tabs rather than editing deeply inside a parent tab.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Hiding an inherited dialog tab with sling:hideResource",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog">
    <content
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/tabs">
        <items jcr:primaryType="nt:unstructured">
            <links
                jcr:primaryType="nt:unstructured"
                sling:hideResource="{Boolean}true"/>
        </items>
    </content>
</jcr:root>`,
        highlightLines: [12],
      },
      {
        language: "xml",
        title: "Simple Granite UI field",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
    fieldLabel="Title"
    name="./jcr:title"/>`,
      },
    ],
    expandableSections: [
      {
        title: "Common Granite UI Field Resource Types",
        content: [
          "granite/ui/components/coral/foundation/form/textfield",
          "granite/ui/components/coral/foundation/form/pathfield",
          "granite/ui/components/coral/foundation/form/select",
          "granite/ui/components/coral/foundation/form/checkbox",
          "granite/ui/components/coral/foundation/form/multifield",
        ],
        type: "list",
      },
      {
        title: "Dialog Customization Rules from the Speech",
        content: [
          "Replicate parent structure only to the tab item level",
          "Do not modify structures below an inherited tab item",
          "Hide an inherited tab with sling:hideResource",
          "Reorder with sling:orderBefore",
          "Add a new tab instead of patching deeply inside a Core dialog",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 13 — OSGi Services and Configurations
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "OSGi Services & Configurations",
    subtitle: "Reusable Logic, Metatype Config, and Cloud-Safe Secrets",
    content: [
      "AEM is built on OSGi, so services are the standard way to encapsulate reusable logic such as search or external integrations. Sling Models can consume that logic with @OSGiService, while service implementations use Declarative Services annotations such as @Component and @Reference.",
      "For configurable services, the speech walks through the metatype pattern: define an @ObjectClassDefinition, add @AttributeDefinition entries for the properties, annotate the service with @Designate, and receive the config in the @Activate method.",
      "Configuration belongs in code through .cfg.json files under ui.config using run-mode folders like config.author, config.publish, config.dev, config.stage, and config.prod. Environment-specific values use Cloud Manager environment variables or secrets, referenced with $[env:...] and $[secret:...], and must never be hard-coded in Git.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Configurable OSGi service with @Designate",
        code: `package com.wknd.core.services.impl;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "WKND Search Service Configuration")
@interface SearchConfig {

    @AttributeDefinition(name = "Base URL")
    String baseUrl();
}

@Component(service = SearchService.class)
@Designate(ocd = SearchConfig.class)
public class SearchServiceImpl implements SearchService {

    private String baseUrl;

    @Activate
    protected void activate(SearchConfig config) {
        this.baseUrl = config.baseUrl();
    }
}`,
        highlightLines: [8, 11, 15, 20],
      },
      {
        language: "javascript",
        title: "cfg.json with environment variable placeholders",
        code: `{
  "baseUrl": "$[env:WKND_SEARCH_BASE_URL]",
  "apiKey": "$[secret:WKND_SEARCH_API_KEY]"
}`,
      },
    ],
    expandableSections: [
      {
        title: "Common ui.config Run-Mode Folders",
        content: [
          "config",
          "config.author",
          "config.publish",
          "config.dev",
          "config.stage",
          "config.prod",
        ],
        type: "list",
      },
      {
        title: "Cloud Service Configuration Rule",
        content: "Because /apps is immutable in AEM as a Cloud Service, deployed configuration cannot be managed through the web console as a runtime customization strategy; it belongs in code.",
        type: "text",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 14 — Servlets, Style System, and Best Practices
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Servlets, Style System, and Best Practices",
    subtitle: "Finish With Resource-Type Binding and Configurable Components",
    content: [
      "Servlets expose custom endpoints and are implemented as OSGi components extending SlingSafeMethodsServlet for read-only GET use cases or SlingAllMethodsServlet for broader method support. The speech recommends binding them by resource type rather than by path.",
      "Resource-type-bound servlets inherit repository-based access control from the addressed content and are easier to secure than path-bound servlets. The Style System complements this by giving template authors policy-defined CSS classes that content authors can apply without creating separate components for every visual variation.",
      "The final exam summary from the speech is consistent: keep logic in Sling Models and markup in HTL, use proxy components instead of pointing content at versioned Core Components, never modify /libs, favor specific injector annotations, use model interfaces and delegation for Core extensions, keep dialogs structurally compatible, bind servlets to resource types, avoid hard-coded configuration, and prefer the Style System over near-duplicate components.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Resource-type-bound servlet",
        code: `package com.wknd.core.servlets;

import java.io.IOException;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;

@Component(service = Servlet.class)
@SlingServletResourceTypes(
    resourceTypes = "wknd/components/search",
    methods = HttpConstants.METHOD_GET,
    extensions = "json"
)
public class SearchServlet extends SlingSafeMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().write("{\\"status\\":\\"ok\\"}");
    }
}`,
        highlightLines: [12, 13, 18, 22],
      },
    ],
    expandableSections: [
      {
        title: "Best Practices Recap",
        content: [
          "Put logic in Sling Models and markup in HTL",
          "Use proxy components and never point content to versioned components",
          "Never modify /libs",
          "Prefer specific injector annotations instead of generic @Inject",
          "Use Resource as adaptable when possible",
          "Use model interfaces and delegation to extend Core Components",
          "Keep dialog customizations structurally compatible with the parent",
          "Bind servlets to resource types instead of paths",
          "Do not hard-code configuration or secrets",
          "Prefer the Style System and configurable components over copies of nearly identical components",
        ],
        type: "list",
      },
      {
        title: "Style System Purpose",
        content: "The Style System lets template authors define CSS classes in policy, and content authors apply those visual variants without code changes or additional component copies.",
        type: "text",
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Resource-type servlet request flow",
        elements: [
          { id: "content", label: "Content resource", tooltip: "Uses wknd/components/search" },
          { id: "type", label: "resourceTypes match", tooltip: "Servlet is selected by component resource type" },
          { id: "servlet", label: "SearchServlet", tooltip: "Handles GET json requests securely" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
]

// ============================================================================
// HELPERS
// ============================================================================

export function getTotalComponentsSlides(): number {
  return componentsSlides.length
}

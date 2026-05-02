import type { Concept } from "../types"

export const componentsConcepts: Concept[] = [
  {
    id: "intro-053",
    category: "Components",
    title: ".content.xml — the component definition file with jcr:primaryType, title, and group",
    reference: "What file defines the component's metadata and properties in AEM?",
    explanation:
      "Every AEM component must have a .content.xml file in its folder that defines the component node (jcr:primaryType='cq:Component'), along with metadata like jcr:title (display name in editor), componentGroup (for the component palette), and sling:resourceSuperType (for inheritance).",
  },
  {
    id: "intro-054",
    category: "Components",
    title: "HTML Template Language — AEM's server-side templating language",
    reference: "What does HTL stand for in AEM component development?",
    explanation:
      "HTL stands for HTML Template Language (formerly known as Sightly). It is Adobe's recommended server-side templating language for AEM component development — designed for security (XSS protection by default), separation of concerns, and ease of use for both developers and designers.",
  },
  {
    id: "intro-055",
    category: "Components",
    title: "A block statement that instantiates a Sling Model or Use-API class for use in the template",
    reference: "What is 'data-sly-use' in HTL?",
    explanation:
      "The data-sly-use block statement in HTL instantiates a Use-API class or Sling Model and binds it to a variable. Example: <div data-sly-use.model='com.example.MyModel'>${model.title}</div> instantiates MyModel and makes its getTitle() available via ${model.title}.",
  },
  {
    id: "intro-056",
    category: "Components",
    title: "Iterating over a collection and rendering an element for each item",
    reference: "What is the HTL block statement 'data-sly-list' used for?",
    explanation:
      "data-sly-list iterates over a collection in HTL. Example: <li data-sly-list.item='${model.tags}'>${item.name}</li> renders an <li> for each tag. The loop variable is defined by the attribute name (item in this case).",
  },
  {
    id: "intro-057",
    category: "Components",
    title: "Conditionally rendering an element — only outputs the element if the expression is truthy",
    reference: "What is 'data-sly-test' used for in HTL?",
    explanation:
      "data-sly-test is HTL's conditional statement. When the expression evaluates to truthy, the element and its contents are rendered; when falsy, nothing is output. Example: <div data-sly-test='${model.description}'>${model.description}</div>.",
  },
  {
    id: "intro-058",
    category: "Components",
    title: "Specifying the XSS escaping context for an expression — e.g. @ context='html' or 'text'",
    reference: "What is the '@ context' syntax in HTL used for?",
    explanation:
      "The @ context option in HTL explicitly sets the XSS escaping strategy for an output expression. Example: ${model.body @ context='html'} outputs safe HTML content. Options include: html, text, attribute, uri, number, unsafe (no escaping — use carefully).",
  },
  {
    id: "intro-059",
    category: "Components",
    title: "Enables component inheritance — the component inherits scripts and dialogs from the parent",
    reference: "What does 'sling:resourceSuperType' do for AEM components?",
    explanation:
      "sling:resourceSuperType enables component inheritance in AEM. A child component only needs to override the specific files (HTL, dialogs, Sling Models) it wants to change — everything else falls back to the parent component via Sling's script resolution.",
  },
  {
    id: "intro-060",
    category: "Components",
    title: "Adobe's library of pre-built, production-ready, best-practice AEM components",
    reference: "What are AEM Core Components?",
    explanation:
      "AEM Core Components are Adobe's official library of production-ready, best-practice components (hosted on GitHub: adobe/aem-core-wcm-components). They include Text, Image, Title, Teaser, Carousel, Container, Breadcrumb, Navigation, and many more — regularly updated and recommended for all new AEM projects.",
  },
  {
    id: "intro-061",
    category: "Components",
    title: "Creating a component in /apps that extends a Core Component without modifying /libs",
    reference: "What is 'component proxying' in AEM development?",
    explanation:
      "Component proxying means creating a lightweight component under /apps that sets its sling:resourceSuperType to a Core Component (e.g., core/wcm/components/text/v2/text). This gives you a custom component that inherits everything from Core but allows you to override specific dialogs, scripts, or policies without modifying /libs.",
  },
  {
    id: "intro-062",
    category: "Components",
    title: "AEM's mechanism for packaging and serving JavaScript and CSS assets to the browser",
    reference: "What are AEM client libraries (clientlibs)?",
    explanation:
      "AEM Client Libraries (clientlibs) are a mechanism for organizing, versioning, and serving client-side CSS and JavaScript to the browser. They support dependency management, automatic concatenation, minification, and browser caching. Defined by nodes of type cq:ClientLibraryFolder with categories property.",
  },
  {
    id: "intro-063",
    category: "Components",
    title: "The Touch UI dialog definition that authors use to configure the component's content",
    reference: "What is a component's '_cq_dialog.xml' file?",
    explanation:
      "_cq_dialog.xml defines the Touch UI author dialog for an AEM component. It specifies the Granite UI form fields (tabs, text fields, checkboxes, path pickers, etc.) that content authors see when clicking 'Edit' on a component in the Page Editor.",
  },
  {
    id: "intro-064",
    category: "Components",
    title: "Dialog: content-level config by authors per component instance. Design dialog: template-level policies set by template admins",
    reference: "What is the difference between a dialog and a design dialog in AEM?",
    explanation:
      "The dialog (_cq_dialog.xml) allows authors to set content properties per component instance on individual pages. The design dialog (_cq_design_dialog.xml) configures design-time policies (Style System options, allowed variations) that apply to all instances sharing the same template policy.",
  },
]

/**
 * AEM Introduction Presentation - Slide Content
 * Complete content structure for 18 slides (~35 min presentation)
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

export interface Slide {
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

// ============================================================================
// SLIDE CONTENT
// ============================================================================

export const slides: Slide[] = [
  // INTRO SECTION (Slides 1-3)
  {
    id: 1,
    title: "AEM Developer Certification Path",
    subtitle: "Your Journey to AD0-E134 Certification",
    content: [
      "Welcome to the Adobe Experience Manager Developer Introduction",
      "A comprehensive guide to mastering AEM fundamentals",
      "Prepare for the Sites Developer Expert Certification"
    ],
    expandableSections: [
      {
        title: "What You'll Learn Today",
        content: [
          "Core AEM architecture and concepts",
          "Component development fundamentals",
          "Content management strategies",
          "AEM as a Cloud Service essentials",
          "Your roadmap to certification success"
        ],
        type: "list"
      }
    ],
    backgroundColor: "from-blue-600 via-purple-600 to-indigo-700",
    estimatedTime: 1
  },

  {
    id: 2,
    title: "What is Adobe Experience Manager?",
    subtitle: "The Enterprise Content Management Powerhouse",
    content: [
      "AEM is a comprehensive Content Management Solution (CMS) that combines:",
      "• Digital Asset Management (DAM)",
      "• Web Content Management",
      "• Forms Management",
      "• Marketing Campaign Tools"
    ],
    expandableSections: [
      {
        title: "Real-World Use Cases",
        content: [
          "Banking: Secure customer portals and transaction systems",
          "Retail: E-commerce platforms with personalized experiences",
          "Media: High-traffic news and entertainment sites",
          "Healthcare: Patient portals and HIPAA-compliant content",
          "Government: Public service websites with accessibility compliance"
        ],
        type: "list"
      },
      {
        title: "Why Companies Choose AEM",
        content: [
          "Enterprise-grade scalability",
          "Omnichannel content delivery",
          "Advanced personalization capabilities",
          "Robust security and compliance",
          "Adobe Marketing Cloud integration"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "DAM",
        content: "Digital Asset Management - centralized storage and management of images, videos, and documents"
      },
      {
        text: "Omnichannel",
        content: "Delivering consistent content across web, mobile, IoT, and other digital touchpoints"
      }
    ],
    estimatedTime: 2
  },

  {
    id: 3,
    title: "Why Get Certified? (AD0-E134)",
    subtitle: "Sites Developer Expert Certification",
    content: [
      "The AD0-E134 certification validates your expertise in:",
      "• AEM architecture and development",
      "• Component and template creation",
      "• Cloud Service implementation",
      "• Performance optimization"
    ],
    expandableSections: [
      {
        title: "Exam Structure",
        content: [
          "Format: Multiple choice and multiple select",
          "Questions: 50 questions",
          "Duration: 100 minutes",
          "Passing Score: 64% (32/50)",
          "Cost: $225 USD",
          "Validity: 2 years"
        ],
        type: "list"
      },
      {
        title: "Career Benefits",
        content: [
          "Average Salary Increase: 15-25%",
          "Global Recognition: Adobe Certified Expert badge",
          "Job Opportunities: High demand in enterprise market",
          "Professional Network: Access to Adobe certified community",
          "Career Advancement: Technical leadership roles"
        ],
        type: "list"
      },
      {
        title: "Exam Domains Breakdown",
        content: [
          "Configuration (22%) - OSGi, run modes, project structure",
          "Development (44%) - Components, templates, services, workflows",
          "Build & Deployment (14%) - Maven, CI/CD, Cloud Manager",
          "Testing & Troubleshooting (12%) - Debugging, logs, testing",
          "Best Practices (8%) - Performance, security, maintenance"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "OSGi",
        content: "Open Services Gateway initiative - Java framework for modular applications"
      }
    ],
    estimatedTime: 2
  },

  // CORE FUNDAMENTALS (Slides 4-13)
  {
    id: 4,
    title: "AEM Architecture - The Foundation",
    subtitle: "Understanding the Three-Layer Stack",
    content: [
      "AEM is built on three fundamental layers:",
      "🗄️ JCR (Java Content Repository) - Content storage",
      "🔄 Apache Sling - Request processing and resource resolution",
      "📦 OSGi - Modular application framework"
    ],
    expandableSections: [
      {
        title: "Layer Details",
        content: [
          "JCR Layer: Apache Jackrabbit Oak implementation for hierarchical content storage",
          "Sling Layer: RESTful framework mapping URLs to content resources",
          "OSGi Layer: Felix container managing bundles and services with dynamic lifecycle"
        ],
        type: "list"
      },
      {
        title: "How They Work Together",
        content: [
          "1. HTTP request arrives at AEM",
          "2. Sling resolves URL to JCR resource path",
          "3. Sling finds appropriate OSGi servlet/script",
          "4. OSGi services process business logic",
          "5. Content retrieved from JCR repository",
          "6. Response rendered and returned"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "architecture",
        description: "AEM Three-Layer Architecture",
        elements: [
          { id: "osgi", label: "OSGi (Felix)", tooltip: "Application container and service registry" },
          { id: "sling", label: "Apache Sling", tooltip: "RESTful web framework" },
          { id: "jcr", label: "JCR (Oak)", tooltip: "Content repository" }
        ]
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "Simple Sling Servlet Example",
        code: `@Component(service = Servlet.class)
@SlingServletPaths(value = "/bin/myservlet")
public class MyServlet extends SlingSafeMethodsServlet {
    
    @Override
    protected void doGet(SlingHttpServletRequest request, 
                        SlingHttpServletResponse response) {
        response.setContentType("application/json");
        response.getWriter().write("{\\"message\\": \\"Hello from AEM!\\"}");
    }
}`
      }
    ],
    estimatedTime: 3
  },

  {
    id: 5,
    title: "JCR & Content Repository",
    subtitle: "The Hierarchical Content Store",
    content: [
      "JCR stores all content in a tree structure:",
      "• Nodes: Individual content items",
      "• Properties: Key-value pairs on nodes",
      "• Node Types: Define structure and validation",
      "• Paths: Navigate the content tree"
    ],
    expandableSections: [
      {
        title: "Common Node Types",
        content: [
          "nt:unstructured - Flexible node without constraints",
          "nt:folder - Folder container for organizing content",
          "cq:Page - AEM page node",
          "cq:PageContent - Page content (jcr:content)",
          "dam:Asset - Digital asset in DAM",
          "sling:Folder - Sling-specific folder type"
        ],
        type: "list"
      },
      {
        title: "JCR Repository Structure",
        content: [
          "/content - Website content and pages",
          "/apps - Application code (components, templates)",
          "/libs - AEM core libraries (read-only)",
          "/etc - Configurations and designs",
          "/var - Variable data (workflows, reports)",
          "/conf - Configuration for templates and policies",
          "/home - User and group definitions"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "tree",
        description: "JCR Content Tree Structure"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "JCR Query Example",
        code: `// SQL-2 Query
String query = "SELECT * FROM [cq:Page] " +
               "WHERE ISDESCENDANTNODE('/content/mysite') " +
               "AND [jcr:content/cq:template] = '/conf/mysite/settings/wcm/templates/page'";

QueryManager queryManager = session.getWorkspace().getQueryManager();
Query jcrQuery = queryManager.createQuery(query, Query.JCR_SQL2);
QueryResult result = jcrQuery.execute();

NodeIterator nodes = result.getNodes();
while (nodes.hasNext()) {
    Node pageNode = nodes.nextNode();
    // Process page
}`
      }
    ],
    tooltips: [
      {
        text: "jcr:content",
        content: "Special child node containing the actual content properties of a page or component"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 6,
    title: "Apache Sling - Resource Resolution",
    subtitle: "From URL to Content",
    content: [
      "Sling is the heart of AEM's request processing:",
      "• Maps URLs to JCR resources",
      "• Selects appropriate scripts or servlets",
      "• Handles RESTful operations (GET, POST, PUT, DELETE)",
      "• Provides resource adaptation"
    ],
    expandableSections: [
      {
        title: "Resource Resolution Process",
        content: [
          "1. URL decomposition: /content/mysite/en.selector.html",
          "2. Resource path: /content/mysite/en",
          "3. Resource type determination: mysite/components/page",
          "4. Script resolution: Look for rendering script",
          "5. Script execution: Render with HTL or JSP",
          "6. Response generation: Return HTML to browser"
        ],
        type: "list"
      },
      {
        title: "Sling Servlet Resolution",
        content: [
          "By Path: @SlingServletPaths(\"/bin/myservlet\")",
          "By Resource Type: @SlingServletResourceTypes(\"mysite/components/page\")",
          "By Methods: Support GET, POST, PUT, DELETE",
          "By Selectors: Handle .selector.json, .selector.html",
          "By Extensions: Process .html, .json, .xml"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "flow",
        description: "Sling URL to Resource Mapping Flow"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "Sling Model with Resource Type",
        code: `@Model(adaptables = {SlingHttpServletRequest.class, Resource.class},
       adapters = {PageModel.class},
       resourceType = "mysite/components/page")
public class PageModel {
    
    @ValueMapValue
    private String pageTitle;
    
    @ChildResource
    private Resource mainContent;
    
    @Self
    private SlingHttpServletRequest request;
    
    public String getTitle() {
        return pageTitle != null ? pageTitle : "Default Title";
    }
}`
      }
    ],
    tooltips: [
      {
        text: "Resource Type",
        content: "A property (sling:resourceType) that determines which component renders a piece of content"
      },
      {
        text: "Selector",
        content: "Optional URL segment between resource name and extension (e.g., .mobile.html)"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 7,
    title: "OSGi Bundles & Services",
    subtitle: "Modular Application Architecture",
    content: [
      "OSGi enables modularity in AEM:",
      "• Bundles: JAR files with metadata (Java packages)",
      "• Services: Shared functionality via interfaces",
      "• Components: Service implementations with lifecycle",
      "• Dynamic: Install, update, remove without restart"
    ],
    expandableSections: [
      {
        title: "OSGi Bundle Lifecycle",
        content: [
          "INSTALLED - Bundle JAR loaded into system",
          "RESOLVED - Dependencies satisfied, ready to start",
          "STARTING - activate() method executing",
          "ACTIVE - Bundle running and services registered",
          "STOPPING - deactivate() method executing",
          "UNINSTALLED - Bundle removed from system"
        ],
        type: "list"
      },
      {
        title: "Configuration Methods",
        content: [
          "OSGi Configurations: PID-based configuration in /apps/config",
          "Run Mode Configs: author, publish, dev, prod specific",
          "Environment Variables: Cloud-native configuration",
          "JCR Properties: Runtime configuration storage",
          "Felix Console: Web UI for OSGi management (dev only)"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "OSGi Service Example",
        code: `@Component(service = EmailService.class, immediate = true)
@Designate(ocd = EmailService.Config.class)
public class EmailServiceImpl implements EmailService {
    
    @ObjectClassDefinition(name = "Email Service Configuration")
    public @interface Config {
        @AttributeDefinition(name = "SMTP Host")
        String smtp_host() default "smtp.gmail.com";
        
        @AttributeDefinition(name = "SMTP Port")
        int smtp_port() default 587;
    }
    
    private String smtpHost;
    private int smtpPort;
    
    @Activate
    protected void activate(Config config) {
        this.smtpHost = config.smtp_host();
        this.smtpPort = config.smtp_port();
    }
    
    @Override
    public void sendEmail(String to, String subject, String body) {
        // Email sending logic
    }
}`
      }
    ],
    tooltips: [
      {
        text: "@Component",
        content: "Declares an OSGi Declarative Services component"
      },
      {
        text: "@Designate",
        content: "Links OSGi configuration to component"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 8,
    title: "Components - Building Blocks",
    subtitle: "The Core of AEM Development",
    content: [
      "Components are reusable UI elements:",
      "• Define structure and behavior",
      "• Contain HTL markup for rendering",
      "• Have dialogs for author configuration",
      "• Can be nested (container components)",
      "• Inherit from Core Components"
    ],
    expandableSections: [
      {
        title: "Component Anatomy",
        content: [
          ".content.xml - Component definition and properties",
          "componentname.html - HTL rendering template",
          "_cq_dialog.xml - Author dialog (Touch UI)",
          "_cq_design_dialog.xml - Design dialog for policies",
          "clientlibs/ - CSS and JavaScript assets",
          "README.md - Component documentation"
        ],
        type: "list"
      },
      {
        title: "HTL vs JSP",
        content: [
          "HTL (Recommended): HTML Template Language, secure by default, separation of concerns",
          "JSP (Legacy): JavaServer Pages, mixing Java with HTML, security concerns",
          "HTL Benefits: XSS protection, caching, better performance, designer-friendly",
          "Migration: Adobe recommends HTL for all new development"
        ],
        type: "list"
      },
      {
        title: "Core Components",
        content: [
          "Pre-built: Adobe's library of production-ready components",
          "Best Practices: Follow AEM development standards",
          "Customizable: Extend via proxying or Sling delegation",
          "Maintained: Regular updates from Adobe",
          "Examples: Text, Image, Title, Teaser, Carousel, Container"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "htl",
        title: "HTL Component Template Example",
        code: `<div data-sly-use.model="com.mysite.core.models.HeroModel" 
     class="hero-component">
    
    <h1 class="hero-title">\${model.title @ context='html'}</h1>
    
    <div data-sly-test="\${model.description}" 
         class="hero-description">
        \${model.description @ context='html'}
    </div>
    
    <sly data-sly-list.item="\${model.items}">
        <div class="hero-item">
            <h3>\${item.title}</h3>
            <p>\${item.text}</p>
        </div>
    </sly>
    
    <a data-sly-test="\${model.ctaUrl}" 
       href="\${model.ctaUrl}" 
       class="hero-cta">
        \${model.ctaText || 'Learn More'}
    </a>
    
</div>`
      }
    ],
    tooltips: [
      {
        text: "data-sly-use",
        content: "HTL block statement to instantiate a Sling Model or Use-API class"
      },
      {
        text: "@ context",
        content: "XSS protection context: html, text, attribute, uri, number"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 9,
    title: "Editable Templates",
    subtitle: "Dynamic Page Structures",
    content: [
      "Modern template system introduced in AEM 6.2+:",
      "• Define page structure dynamically",
      "• Set policies for components",
      "• Control locked vs editable areas",
      "• Enable responsive layouts"
    ],
    expandableSections: [
      {
        title: "Template vs Static Templates",
        content: [
          "Editable Templates: Dynamic, configurable in UI, stored in /conf",
          "Static Templates: Code-based, stored in /apps, legacy approach",
          "Benefits: No code deployment for structure changes, author flexibility",
          "Migration: Adobe recommends migrating to editable templates"
        ],
        type: "list"
      },
      {
        title: "Template Structure Components",
        content: [
          "Structure: Fixed components that appear on all pages",
          "Initial Content: Default components added to new pages",
          "Allowed Components: Which components can be added",
          "Layout Container: Responsive grid for component placement",
          "Policies: Styles and behavior configuration"
        ],
        type: "list"
      },
      {
        title: "Template Policies",
        content: [
          "Component Policies: Configure component behavior and styles",
          "Style System: Allow authors to apply predefined styles",
          "Responsive Grid: Define breakpoints and column layout",
          "Allowed Components: Whitelist components for each container",
          "Design Dialogs: Configure non-content settings"
        ],
        type: "list"
      }
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Editable Template Structure",
        asciiContent: `┌─────────────────────────────────────────────────────────────
│                 EDITABLE TEMPLATE (AEM)                                            
├─────────────────────────────────────────────────────────
│  STRUCTURE (Mode: Structure)   🔒 LOCKED for authors                               
│  - Header / Footer / Navigation                                                    
│  - Base layout (containers / grid)                                                                      
│  - Allowed Components + Policies                                                   
│  - Style System / Responsive settings                                              
│                                                                                    
│  Example:                                                                          
│   [Header 🔒]                                                                     
│   [Main Container 🔒  (defines where editing IS allowed)]                           
│   [Footer 🔒]                                                                     
├─────────────────────────────────────────────────────────────
│  INITIAL CONTENT (Mode: Initial Content)   ✅ EDITABLE                            
│  - "Starter" content pre-loaded in new pages                                      
│  - Ex: a Hero, welcome text, placeholders, etc.                                   
│                                                                                    
│  Example:                                                                          
│   (Inside Main Container)                                                          
│   [Hero ✅] [Text ✅] [Image ✅]                                                 
└───────────────────────────────────────────────────────────────

                 ↓ Create page from template

┌───────────────────────────────────────────────────────────────
│                     PAGE (AEM)                                                     
├───────────────────────────────────────────────────────────────
│  What the author SEES and EDITS in Page Editor                                     
│                                                                                    
│  [Header 🔒 inherited from Structure]                                              
│  [Main Container ✅ editable (according to policies)]                              
│     - Author adds/removes allowed components                                       
│     - Author changes allowed content and styles                                    
│  [Footer 🔒 inherited from Structure]                                              
└───────────────────────────────────────────────────────────────`
      }
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Template Policy Configuration",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
          xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:cq="http://www.day.com/jcr/cq/1.0"
    jcr:primaryType="cq:Page">
    <jcr:content
        jcr:primaryType="nt:unstructured"
        sling:resourceType="wcm/core/components/policies/policy"
        cq:styleDefaultElement="h2"
        cq:styleElements="[h1,h2,h3,h4,h5,h6]">
        <cq:styleGroups jcr:primaryType="nt:unstructured">
            <item0
                cq:styleGroupLabel="Alignment"
                jcr:primaryType="nt:unstructured">
                <styles jcr:primaryType="nt:unstructured">
                    <left
                        cq:styleId="left"
                        cq:styleLabel="Left"
                        jcr:primaryType="nt:unstructured"/>
                    <center
                        cq:styleId="center"
                        cq:styleLabel="Center"
                        jcr:primaryType="nt:unstructured"/>
                </styles>
            </item0>
        </cq:styleGroups>
    </jcr:content>
</jcr:root>`
      }
    ],
    estimatedTime: 2
  },

  {
    id: 10,
    title: "Content & Experience Fragments",
    subtitle: "Reusable Content Strategies",
    content: [
      "Two powerful content reuse patterns:",
      "📄 Content Fragments: Structured, headless content",
      "🧩 Experience Fragments: Reusable layout components"
    ],
    expandableSections: [
      {
        title: "Content Fragments Deep Dive",
        content: [
          "Purpose: Structured content independent of design",
          "Models: Define schema with fields and validation",
          "Variations: Different versions for channels (web, mobile, email)",
          "Delivery: RESTful APIs, GraphQL queries",
          "Use Cases: Product catalogs, articles, testimonials, metadata"
        ],
        type: "list"
      },
      {
        title: "Experience Fragments Deep Dive",
        content: [
          "Purpose: Reusable layout sections (headers, footers)",
          "Building Blocks: Assembled from multiple components",
          "Variations: Different versions for responsive design",
          "Sync: Update once, reflect everywhere",
          "Use Cases: Global navigation, promotional banners, footers"
        ],
        type: "list"
      },
      {
        title: "Content Fragments vs Experience Fragments",
        content: [
          "CF: Data-focused, no styling, headless delivery, structured",
          "XF: Layout-focused, styled, page fragments, visual",
          "CF Example: Product description, price, specifications",
          "XF Example: Site header with logo, navigation, search"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "GraphQL Query for Content Fragments",
        code: `// GraphQL Persisted Query
query {
  articleList {
    items {
      _path
      title
      author
      publishDate
      summary
      mainContent {
        html
        plaintext
      }
      featuredImage {
        ... on ImageRef {
          _path
          mimeType
          width
          height
        }
      }
    }
  }
}

// Fetch from AEM
const response = await fetch(
  'https://publish-p12345-e67890.adobeaemcloud.com/graphql/execute.json/mysite/articleQuery'
);
const data = await response.json();`
      }
    ],
    tooltips: [
      {
        text: "Headless",
        content: "Content delivery without presentation layer, consumed via APIs"
      },
      {
        text: "GraphQL",
        content: "Query language for APIs, allowing clients to request exactly the data needed"
      }
    ],
    estimatedTime: 2
  },

  {
    id: 11,
    title: "Sling Models Deep Dive",
    subtitle: "Backend Business Logic",
    content: [
      "Sling Models are the standard for backend logic:",
      "• POJO (Plain Old Java Object) approach",
      "• Annotation-driven configuration",
      "• Automatic injection of dependencies",
      "• Adaptable from Resource or Request"
    ],
    expandableSections: [
      {
        title: "Key Annotations",
        content: [
          "@Model - Declares Sling Model class",
          "@ValueMapValue - Inject property from resource",
          "@ChildResource - Inject child resource",
          "@Self - Inject current request or resource",
          "@OSGiService - Inject OSGi service",
          "@RequestAttribute - Inject request attribute",
          "@PostConstruct - Initialization method"
        ],
        type: "list"
      },
      {
        title: "Adaptable Types",
        content: [
          "Resource.class - Adapt from JCR resource (repository-focused)",
          "SlingHttpServletRequest.class - Adapt from request (request-aware)",
          "Best Practice: Use request when you need request parameters/attributes",
          "Performance: Resource adaptation is lighter weight"
        ],
        type: "list"
      },
      {
        title: "Best Practices",
        content: [
          "Keep models focused and single-purpose",
          "Use interfaces for public API",
          "Cache expensive operations with @PostConstruct",
          "Unit test with mocks (AEM Mocks, Mockito)",
          "Avoid business logic in HTL",
          "Document public methods with JavaDoc"
        ],
        type: "list"
      }
    ],
    codeExamples: [
      {
        language: "java",
        title: "Complete Sling Model Example",
        code: `package com.mysite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.*;
import javax.annotation.PostConstruct;
import java.util.List;

@Model(adaptables = Resource.class)
public class ArticleModel {
    
    @ValueMapValue
    @Default(values = "Untitled Article")
    private String title;
    
    @ValueMapValue
    private String author;
    
    @ChildResource
    private Resource tags;
    
    @OSGiService
    private QueryBuilder queryBuilder;
    
    @Self
    private Resource currentResource;
    
    private List<String> tagList;
    
    @PostConstruct
    protected void init() {
        // Process tags into list
        if (tags != null) {
            tagList = StreamSupport.stream(tags.getChildren().spliterator(), false)
                .map(Resource::getName)
                .collect(Collectors.toList());
        }
    }
    
    public String getTitle() {
        return title;
    }
    
    public String getAuthor() {
        return author != null ? author : "Anonymous";
    }
    
    public List<String> getTags() {
        return tagList != null ? tagList : Collections.emptyList();
    }
    
    public String getPath() {
        return currentResource.getPath();
    }
}`
      }
    ],
    tooltips: [
      {
        text: "@Default",
        content: "Provides default value if property is not present in repository"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 12,
    title: "AEM as a Cloud Service",
    subtitle: "The Modern Cloud-Native Platform",
    content: [
      "AEM Cloud Service differs significantly from AEM 6.5:",
      "☁️ Cloud-native architecture",
      "🚀 Continuous updates and auto-scaling",
      "🔧 Cloud Manager for CI/CD",
      "🌍 Global CDN included"
    ],
    expandableSections: [
      {
        title: "Key Differences from AEM 6.5",
        content: [
          "Infrastructure: Managed by Adobe vs self-hosted",
          "Updates: Automatic monthly updates vs manual upgrades",
          "Scaling: Auto-scaling based on traffic vs fixed capacity",
          "Environments: Multiple (dev, stage, prod) vs single server",
          "Dispatcher: Immutable and managed vs configurable",
          "Cost Model: Subscription-based vs perpetual license"
        ],
        type: "list"
      },
      {
        title: "Cloud Manager Pipeline",
        content: [
          "Code Quality: SonarQube analysis and quality gates",
          "Build: Maven-based build process",
          "Testing: Unit tests, integration tests, functional tests",
          "Security: Vulnerability scanning",
          "Deployment: Automated rollout to environments",
          "Rollback: Quick rollback on failure"
        ],
        type: "list"
      },
      {
        title: "Architecture Changes",
        content: [
          "Immutable Content: /apps and /libs read-only at runtime",
          "No System Users: Use service users with proper permissions",
          "Environment Variables: Cloud-native configuration",
          "Content Distribution: Sling Content Distribution (no reverse replication)",
          "Asset Microservices: Cloud-native asset processing",
          "RDE: Rapid Development Environments for quick testing"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "AEM Cloud Service Architecture Diagram 1",
        content: "Detailed view of AEM Cloud Service Architecture - Part 1",
        type: "image",
        data: "/AEM-Cloud-Service-Architecture-1.png"
      },
      {
        title: "AEM Cloud Service Architecture Diagram 2",
        content: "Detailed view of AEM Cloud Service Architecture - Part 2",
        type: "image",
        data: "/AEM-Cloud-Service-Architecture-2.png"
      }
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Cloud-Specific Configuration (OSGi)",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="sling:OsgiConfig"
    smtp.host="$[env:SMTP_HOST;default=smtp.gmail.com]"
    smtp.port="$[env:SMTP_PORT;default=587]"
    smtp.user="$[secret:smtp.user]"
    smtp.password="$[secret:smtp.password]"/>`
      }
    ],
    tooltips: [
      {
        text: "RDE",
        content: "Rapid Development Environment - fast, personal dev environment in the cloud"
      },
      {
        text: "$[env:]",
        content: "Environment variable syntax for cloud-native configuration"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 13,
    title: "Authoring vs Publishing",
    subtitle: "Two-Tier Content Architecture",
    content: [
      "AEM uses a separation between authoring and publishing:",
      "✍️ Author: Content creation and management",
      "🌐 Publish: Public-facing content delivery",
      "🔄 Replication: Content activation process"
    ],
    expandableSections: [
      {
        title: "Author Tier",
        content: [
          "Purpose: Content authoring and approval workflows",
          "Access: Internal users only (secured)",
          "Features: Full editing UI, preview, workflows",
          "Performance: Not optimized for high traffic",
          "Content: Draft, approved, scheduled content"
        ],
        type: "list"
      },
      {
        title: "Publish Tier",
        content: [
          "Purpose: Serve content to end users",
          "Access: Public internet (via Dispatcher)",
          "Features: Read-only, high performance, caching",
          "Scaling: Multiple instances for load distribution",
          "Content: Only activated/published content"
        ],
        type: "list"
      },
      {
        title: "Replication Process",
        content: [
          "Activation: Copy content from Author to Publish",
          "Deactivation: Remove content from Publish",
          "Dispatcher Flush: Clear cache after activation",
          "Tree Activation: Activate page and descendants",
          "Scheduled Activation: Activate at specific time",
          "Content Distribution: Modern Sling-based approach (Cloud)"
        ],
        type: "list"
      },
      {
        title: "Dispatcher Role",
        content: [
          "Caching: Static cache for published content",
          "Load Balancing: Distribute requests across publish instances",
          "Security: Block access to sensitive paths",
          "SSL Termination: Handle HTTPS connections",
          "URL Rewriting: Clean URLs and redirects"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Author-Publish Replication Flow",
        content: "Visual representation of the content replication process between Author and Publish tiers",
        type: "image",
        data: "/Author-Publish-Replication-Flow.png"
      }
    ],
    tooltips: [
      {
        text: "Dispatcher",
        content: "Apache web server module that caches AEM content and provides load balancing"
      }
    ],
    estimatedTime: 2
  },

  // CERTIFICATION PATH (Slides 14-17)
  {
    id: 14,
    title: "AD0-E134 Exam Breakdown",
    subtitle: "Understanding the Certification Domains",
    content: [
      "The exam tests five key domains:",
      "Each domain has specific topics and weightage"
    ],
    expandableSections: [
      {
        title: "Domain 1: Configuration (22%)",
        content: [
          "OSGi configuration and services",
          "Run modes and environment-specific configs",
          "Project structure (ui.apps, ui.content, core)",
          "Maven build configuration (POM files)",
          "Sling mappings and resource resolution",
          "Dispatcher farm configurations"
        ],
        type: "list"
      },
      {
        title: "Domain 2: Development (44%)",
        content: [
          "Component development with HTL and Sling Models",
          "Editable templates and policies",
          "Content Fragments and Experience Fragments",
          "Workflow customization and launchers",
          "Event handling and schedulers",
          "RESTful services and servlets",
          "Client libraries and asset management",
          "Multi-Site Manager (MSM) and Live Copies"
        ],
        type: "list"
      },
      {
        title: "Domain 3: Build and Deployment (14%)",
        content: [
          "Maven build lifecycle and plugins",
          "Content packages and package manager",
          "CI/CD pipelines in Cloud Manager",
          "Code quality gates and SonarQube",
          "Environment types (RDE, dev, stage, prod)",
          "Deployment strategies and rollback"
        ],
        type: "list"
      },
      {
        title: "Domain 4: Testing and Troubleshooting (12%)",
        content: [
          "Unit testing with JUnit and Mockito",
          "AEM Mocks for testing",
          "Log analysis (error.log, request.log, access.log)",
          "Debugging techniques and tools",
          "Performance profiling",
          "Common issues and resolutions"
        ],
        type: "list"
      },
      {
        title: "Domain 5: Best Practices (8%)",
        content: [
          "Security best practices (XSS, CSRF, injection)",
          "Performance optimization techniques",
          "Caching strategies (Dispatcher, browser, CDN)",
          "Code quality and maintainability",
          "Accessibility (WCAG) compliance",
          "Repository maintenance"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Study Tips by Domain",
        content: "Focus on Development (44%) first, then Configuration (22%). Practice with AEM SDK locally. Use Adobe's official exam guide.",
        type: "text"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 15,
    title: "Your Learning Roadmap",
    subtitle: "3-6 Month Study Plan",
    content: [
      "A structured path to certification:",
      "Month 1-2: Fundamentals",
      "Month 3-4: Advanced Topics",
      "Month 5-6: Practice and Review"
    ],
    expandableSections: [
      {
        title: "Month 1-2: Build Foundation",
        content: [
          "Week 1-2: AEM architecture (JCR, Sling, OSGi)",
          "Week 3-4: Component development (HTL, Sling Models)",
          "Week 5-6: Templates and Content Fragments",
          "Week 7-8: Project setup and Maven builds",
          "Hands-on: Build simple components and pages"
        ],
        type: "list"
      },
      {
        title: "Month 3-4: Advanced Development",
        content: [
          "Week 9-10: Workflows and event handling",
          "Week 11-12: Services and schedulers",
          "Week 13-14: MSM and language copies",
          "Week 15-16: Cloud Manager and deployment",
          "Hands-on: Create custom workflows and services"
        ],
        type: "list"
      },
      {
        title: "Month 5-6: Practice and Polish",
        content: [
          "Week 17-18: Practice exams and quizzes",
          "Week 19-20: Review weak areas",
          "Week 21-22: Performance and security",
          "Week 23-24: Final review and mock exams",
          "Schedule: Book exam for end of month 6"
        ],
        type: "list"
      },
      {
        title: "Recommended Resources",
        content: [
          "Adobe Experience League: Official documentation and tutorials",
          "AEM WKND Tutorial: Hands-on project guide",
          "Adobe Training: Instructor-led courses",
          "Community Forums: Experience League Community",
          "Practice Exams: Whizlabs, Udemy practice tests",
          "YouTube: Day CQ5, AEM Hub channels",
          "Books: 'Adobe Experience Manager Developer' by Deepak Raj"
        ],
        type: "list"
      }
    ],
    tooltips: [
      {
        text: "WKND Tutorial",
        content: "We.Retail WKND - Adobe's official hands-on tutorial project for learning AEM"
      }
    ],
    estimatedTime: 3
  },

  {
    id: 16,
    title: "This Platform - Your Study Hub",
    subtitle: "Navigate Your Certification Journey",
    content: [
      "This platform is designed to support your learning:",
      "📚 Comprehensive topic coverage",
      "❓ Practice quizzes (coming soon)",
      "📖 Curated resources",
      "📊 Progress tracking"
    ],
    expandableSections: [
      {
        title: "Topics Section",
        content: [
          "10 comprehensive topics covering all exam domains",
          "Expandable study notes with key concepts",
          "Organized by Core, Cloud, and Advanced categories",
          "Each topic includes detailed subtopics",
          "Links to official documentation"
        ],
        type: "list"
      },
      {
        title: "Quizzes (Coming Soon)",
        content: [
          "Practice questions for each topic",
          "Exam-style multiple choice and multiple select",
          "Detailed explanations for each answer",
          "Timed practice sessions",
          "Track your scores and improvement"
        ],
        type: "list"
      },
      {
        title: "Resources Section",
        content: [
          "Curated learning materials",
          "Official Adobe documentation links",
          "Community resources and forums",
          "Video tutorials and courses",
          "Sample projects and code repositories"
        ],
        type: "list"
      },
      {
        title: "How to Use This Hub",
        content: [
          "Start with Topics: Read through each topic systematically",
          "Take Notes: Use expandable sections for deeper understanding",
          "Practice: Complete quizzes after each topic",
          "Track Progress: Monitor your learning journey",
          "Review: Revisit topics where you score low",
          "Schedule: Dedicate 10-15 hours per week"
        ],
        type: "list"
      }
    ],
    estimatedTime: 2
  },

  {
    id: 17,
    title: "Practice Makes Perfect",
    subtitle: "Tips for Exam Success",
    content: [
      "Beyond studying, here's how to prepare effectively:",
      "🛠️ Hands-on practice",
      "📝 Mock exams",
      "👥 Community engagement",
      "⏱️ Time management"
    ],
    expandableSections: [
      {
        title: "Hands-On Practice Tips",
        content: [
          "Install AEM SDK locally for development",
          "Complete the WKND tutorial from start to finish",
          "Build a personal project (portfolio site, blog)",
          "Contribute to open-source AEM projects",
          "Experiment with Core Components customization",
          "Practice debugging with browser dev tools",
          "Set up local Cloud Manager pipeline"
        ],
        type: "list"
      },
      {
        title: "Mock Exam Strategy",
        content: [
          "Take at least 3 full-length practice exams",
          "Simulate exam conditions (100 min, no breaks)",
          "Review wrong answers thoroughly",
          "Identify patterns in your mistakes",
          "Focus study time on weak domains",
          "Retake practice exams until scoring 80%+"
        ],
        type: "list"
      },
      {
        title: "Study Best Practices",
        content: [
          "Study 1-2 hours daily, consistency over cramming",
          "Active learning: Build examples, don't just read",
          "Join AEM community forums and Slack channels",
          "Teach concepts to others to reinforce learning",
          "Create flashcards for key terms and annotations",
          "Take breaks: Pomodoro technique (25 min focus, 5 min break)"
        ],
        type: "list"
      },
      {
        title: "Exam Day Tips",
        content: [
          "Arrive/login 15 minutes early",
          "Read questions carefully, watch for 'NOT' and 'EXCEPT'",
          "Flag difficult questions, return later",
          "Eliminate obviously wrong answers first",
          "Manage time: ~2 minutes per question",
          "Trust your preparation, don't second-guess",
          "Stay calm, it's just a test!"
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Sample Question Example",
        content: "Which annotation is used to inject an OSGi service in a Sling Model? A) @Inject B) @OSGiService C) @Reference D) @Resource. Answer: B - @OSGiService is the Sling Models annotation for OSGi service injection.",
        type: "text"
      }
    ],
    estimatedTime: 3
  },

  // CLOSING (Slide 18)
  {
    id: 18,
    title: "Next Steps & Resources",
    subtitle: "Your Journey Starts Now",
    content: [
      "🎯 Set your exam date (3-6 months from now)",
      "📚 Explore all topics in this hub",
      "💻 Download AEM SDK and start building",
      "🤝 Join the AEM developer community",
      "📅 Create your study schedule",
      "✅ Track your progress weekly"
    ],
    expandableSections: [
      {
        title: "Essential Links",
        content: [
          { text: "Adobe Certification", url: "https://learning.adobe.com/certification.html" },
          { text: "Experience League", url: "https://experienceleague.adobe.com/" },
          { text: "AEM Documentation", url: "https://experienceleague.adobe.com/docs/experience-manager-cloud-service.html" },
          { text: "WKND Tutorial", url: "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview.html" },
          { text: "AEM Community", url: "https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/ct-p/adobe-experience-manager-community" },
          { text: "GitHub - Core Components", url: "https://github.com/adobe/aem-core-wcm-components" }
        ],
        type: "list"
      },
      {
        title: "Download and Install",
        content: [
          { text: "AEM as a Cloud Service SDK", url: "https://experience.adobe.com/#/downloads" },
          { text: "Java JDK 11 or 17", url: "https://adoptium.net/" },
          { text: "Maven 3.6+", url: "https://maven.apache.org/download.cgi" },
          { text: "IDE: IntelliJ IDEA or Eclipse with AEM plugins" },
          { text: "Git", url: "https://git-scm.com/downloads" }
        ],
        type: "list"
      }
    ],
    modals: [
      {
        title: "Thank You!",
        content: "Good luck on your certification journey! Remember: consistency, practice, and community support are your keys to success. You've got this! 🚀",
        type: "text"
      }
    ],
    backgroundColor: "from-green-600 via-teal-600 to-blue-700",
    estimatedTime: 2
  }
];

// Total estimated time: ~45 minutes (buffer for Q&A and interaction)

/**
 * Get slide by ID
 */
export function getSlideById(id: number): Slide | undefined {
  return slides.find(slide => slide.id === id);
}

/**
 * Get total number of slides
 */
export function getTotalSlides(): number {
  return slides.length;
}

/**
 * Get estimated total duration in minutes
 */
export function getTotalDuration(): number {
  return slides.reduce((total, slide) => total + slide.estimatedTime, 0);
}

/**
 * Get slides by time range (for sectioning)
 */
export function getSlidesBySection(section: "intro" | "fundamentals" | "certification" | "closing"): Slide[] {
  const sections = {
    intro: [1, 2, 3],
    fundamentals: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    certification: [14, 15, 16, 17],
    closing: [18]
  };
  
  const slideIds = sections[section];
  return slides.filter(slide => slideIds.includes(slide.id));
}

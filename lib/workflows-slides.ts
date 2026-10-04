/**
 * AEM Workflows, Content Fragments & Experience Fragments - Slide Content
 * 14 slides covering workflows, content fragments, and experience fragments,
 * aligned to the AEM Development domain described in public/speeches/workflows.txt.
 *
 * Source: public/speeches/workflows.txt
 * Theme: teal/cyan/slate — from-teal-900 via-cyan-900 to-slate-900
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

export interface WorkflowsSlide {
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

const THEME = "from-teal-900 via-cyan-900 to-slate-900"

export const workflowsSlides: WorkflowsSlide[] = [
  {
    id: 1,
    title: "Workflows, Content Fragments, and Experience Fragments",
    subtitle: "Three AEM Features Developers Extend Constantly",
    content: [
      "This lesson picks up after components and Maven project structure and focuses on three areas the speech groups together: workflows, Content Fragments, and Experience Fragments.",
      "The speech places this material inside the AEM Development part of the exam, the largest domain at about 37 percent. The practical emphasis is clear: workflows automate a payload through steps, Content Fragments provide structured channel-neutral content, and Experience Fragments provide reusable groups of components with layout.",
      "Expect scenario questions about the right workflow step type, where a custom step is implemented, when to use a Content Fragment versus an Experience Fragment, and how fragment content is delivered to pages or third parties.",
    ],
    expandableSections: [
      {
        title: "Core Ideas to Remember",
        content: [
          "Workflows -> automation around payloads and steps",
          "Content Fragments -> structured content with no layout",
          "Experience Fragments -> reusable layout plus components",
          "Exam questions are scenario based rather than definition only",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 2,
  },
  {
    id: 2,
    title: "Workflow Model Concepts",
    subtitle: "Models, Nodes, Transitions, Payloads, and Work Items",
    content: [
      "A WorkflowModel is the definition of a workflow. It is composed of WorkflowNodes connected by WorkflowTransitions, and a valid model always has a start node and an end node.",
      "The payload is the resource the workflow advances. The speech notes that it can reference a repository resource by path, UUID, or URL, or it can even be a serialized Java object.",
      "A WorkItem is the unit passed through an instance. It contains the WorkflowData the instance acts on and a reference to the current WorkflowNode. Instances can have more than one work item at the same time, each user has a workflow inbox, and an instance can be terminated, suspended, resumed, restarted, then archived when completed or terminated.",
    ],
    diagrams: [
      {
        type: "flow",
        description: "Basic workflow model structure",
        elements: [
          { id: "start", label: "Start node", tooltip: "Every model begins here" },
          { id: "step", label: "Workflow node", tooltip: "Represents a discrete step" },
          { id: "transition", label: "Transition", tooltip: "Connects consecutive steps" },
          { id: "payload", label: "Payload", tooltip: "Path, UUID, URL, or serialized Java object" },
          { id: "end", label: "End node", tooltip: "Every model ends here" },
        ],
      },
      {
        type: "ascii",
        description: "Instance and work item relationship",
        asciiContent: `Workflow Instance
|-- WorkflowData -> payload
|-- WorkItem(s) -> current step state
|-- Inbox assignment -> user or group
\`-- Lifecycle -> terminate | suspend | resume | restart`,
      },
    ],
    expandableSections: [
      {
        title: "Lifecycle Actions",
        content: ["terminate", "suspend", "resume", "restart", "archive after completion or termination"],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 3,
    title: "Runtime Models and Sync",
    subtitle: "Versioning Rules for Workflow Execution",
    content: [
      "Workflow models are versioned, and a workflow instance runs against the runtime model that existed when the instance started. Updating the editable model does not retroactively change running instances.",
      "A runtime model is generated only when Sync is triggered in the model editor. If a model is edited but not synced, neither running instances nor newly started instances reflect the change.",
      "The speech highlights one important exception: underlying ECMA scripts are held only once, so script changes are picked up even though runtime model changes do not apply to an already started instance. The console also distinguishes Default, Custom, and Legacy workflow types.",
    ],
    expandableSections: [
      {
        title: "Sync Rules",
        content: [
          "Edit without Sync -> runtime model does not change",
          "Sync -> new runtime model is generated",
          "Running instance -> keeps the runtime model it started with",
          "ECMA script changes -> are picked up because the script is held only once",
        ],
        type: "list",
      },
      {
        title: "Workflow Types in the Console",
        content: [
          { text: "Default -> out-of-the-box models" },
          { text: "Custom -> no special indicator" },
          { text: "Legacy -> models created in a prior AEM version" },
        ],
        type: "table",
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Editable model to runtime model behavior",
        elements: [
          { id: "edit", label: "Edit model", tooltip: "Changes stay in the editor until synced" },
          { id: "sync", label: "Sync", tooltip: "Generates a runtime model" },
          { id: "new", label: "New instances", tooltip: "Use the synced runtime model" },
          { id: "running", label: "Running instances", tooltip: "Keep the earlier runtime model" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 3,
  },
  {
    id: 4,
    title: "Workflow Step Types",
    subtitle: "Participant, Process, Container, Split, Join, and Dynamic Assignment",
    content: [
      "Each workflow step performs a discrete task. Participant steps create a work item for a user or group, while process steps execute automatically through either an ECMA script or a Java class.",
      "Container steps start another workflow model as a sub-workflow. OR Split and Join apply logic to decide which step executes next, while AND Split and Join allow multiple steps to run simultaneously.",
      "All steps share common properties such as Autoadvance and Timeout alerts, and the timeout behavior can be scripted. The Dynamic Participant step is the special user-assignment case where a service or script chooses the assignee at runtime instead of using a fixed user.",
    ],
    expandableSections: [
      {
        title: "Step Type Comparison",
        content: [
          { text: "Participant -> generates a work item for a user or group" },
          { text: "Process -> runs automatically by ECMA script or Java class" },
          { text: "Container -> starts another workflow model" },
          { text: "OR Split / Join -> branch with logic" },
          { text: "AND Split / Join -> run multiple paths simultaneously" },
          { text: "Dynamic Participant -> resolves the assignee at runtime" },
        ],
        type: "table",
      },
    ],
    diagrams: [
      {
        type: "comparison",
        description: "Workflow step categories",
        elements: [
          { id: "participant", label: "Participant", tooltip: "Needs a person to complete the work item" },
          { id: "process", label: "Process", tooltip: "Runs automatically" },
          { id: "container", label: "Container", tooltip: "Starts a sub-workflow" },
          { id: "or", label: "OR Split/Join", tooltip: "Conditional branching" },
          { id: "and", label: "AND Split/Join", tooltip: "Parallel paths" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 5,
    title: "Transient Workflows, Multi Resource Support, and Stages",
    subtitle: "Performance and Usability Features",
    content: [
      "Standard workflows persist runtime history while they execute, but a model can be marked Transient so that history is not persisted. The speech frames this as a performance tuning option for workflows that run often and do not need history, especially for large asset-loading scenarios.",
      "Transient is not absolute. Runtime information still has to be persisted when the payload type needs external processing, when the workflow enters an AND Split, and when it reaches a participant step; at that point the runtime becomes non-transient because a person is involved.",
      "Multi Resource Support means one workflow instance starts even when several resources are selected, with each attached as a package. Workflow Stages then provide meaningful progress labels for users when the technical step names alone would be too low-level.",
    ],
    expandableSections: [
      {
        title: "Transient Workflow Caveats",
        content: [
          "Do not use Goto Step in a transient workflow",
          "Goto creates a Sling job and defeats the transient goal",
          "Use an OR Split for choices instead",
        ],
        type: "list",
      },
      {
        title: "When Persistence Still Happens",
        content: [
          { text: "Payload type needs external processing" },
          { text: "Workflow enters an AND Split" },
          { text: "Workflow reaches a participant step" },
        ],
        type: "table",
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Multi Resource Support behavior",
        asciiContent: `Without multi resource support:
  3 selected resources -> 3 workflow instances

With multi resource support:
  3 selected resources -> 1 workflow instance
                           \`-- resources attached as a package`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 6,
    title: "Workflows in AEM as a Cloud Service",
    subtitle: "Configuration Lives Under /conf and Deploys as Code",
    content: [
      "In AEM as a Cloud Service, workflow models and launchers are configuration, and configuration lives under /conf. The speech specifically names /conf/global/settings/workflow/models for custom models and /conf/global/settings/workflow/launcher for launchers.",
      "Because /apps and /libs are immutable, custom workflow models must never be placed in /libs. Models and launchers are deployed as code through Cloud Manager packages, while the synced runtime model used by execution is generated under /var/workflow/models.",
      "A workflow launcher automatically starts a model when a matching repository event occurs. Its key conditions are the event type, the node type, the path, and the model to start.",
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Important Cloud Service workflow locations",
        code: `/conf/global/settings/workflow/models
/conf/global/settings/workflow/launcher
/var/workflow/models`,
        highlightLines: [1, 2, 3],
      },
    ],
    expandableSections: [
      {
        title: "Location Summary",
        content: [
          { text: "Custom models -> /conf/global/settings/workflow/models" },
          { text: "Launchers -> /conf/global/settings/workflow/launcher" },
          { text: "Runtime models after Sync -> /var/workflow/models" },
          { text: "Never put custom models in -> /libs" },
        ],
        type: "table",
      },
      {
        title: "Launcher Matching Fields",
        content: ["event type", "node type", "path", "model to start"],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Cloud Service workflow deployment flow",
        elements: [
          { id: "code", label: "/conf configuration", tooltip: "Models and launchers are stored as code" },
          { id: "pipeline", label: "Cloud Manager", tooltip: "Deploys the project packages" },
          { id: "sync", label: "Sync", tooltip: "Generates runtime model" },
          { id: "runtime", label: "/var/workflow/models", tooltip: "Execution uses the runtime model" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 7,
    title: "Custom Process Steps in Java and ECMA",
    subtitle: "WorkflowProcess, process.label, and Script Variables",
    content: [
      "A custom process step in Java is an OSGi service implementing WorkflowProcess. Its single execute method receives a WorkItem, a WorkflowSession, and a MetaDataMap, and it may throw WorkflowException.",
      "The component is registered with Declarative Services, and the process.label property gives the display name authors see in the Process Step dialog when they choose the implementation. Through WorkItem and WorkflowSession, the code can inspect payload data and adapt to a ResourceResolver or JCR Session for repository work.",
      "The speech also allows ECMA implementations. In script form, graniteWorkItem is the ECMA representation of the current WorkItem, and args exposes the step arguments.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Java WorkflowProcess implementation",
        code: `package com.mysite.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import org.osgi.service.component.annotations.Component;

@Component(
    service = WorkflowProcess.class,
    property = { "process.label=Capture Workflow Arguments" }
)
public class CaptureWorkflowArgumentsProcess implements WorkflowProcess {

    @Override
    public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args)
            throws WorkflowException {
        String payload = workItem.getWorkflowData().getPayload().toString();
        String configuredArgs = args.get("PROCESS_ARGS", "");
        workItem.getWorkflowData().getMetaDataMap().put("payloadPath", payload);
        workItem.getWorkflowData().getMetaDataMap().put("configuredArgs", configuredArgs);
    }
}`,
        highlightLines: [9, 10, 15, 18, 19, 20],
      },
      {
        language: "javascript",
        title: "ECMA script process step",
        code: `var workflowData = graniteWorkItem.getWorkflowData();
var payload = workflowData.getPayload().toString();
var stepArgs = args;

workflowData.getMetaDataMap().put("payloadPath", payload);
workflowData.getMetaDataMap().put("configuredArgs", stepArgs);`,
        highlightLines: [1, 3, 5],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 8,
    title: "MetaDataMaps and Persisting Data",
    subtitle: "Workflow, WorkflowData, WorkItem, and Step Arguments",
    content: [
      "Workflow metadata is how information persists during the workflow and between steps, and it is stored in MetaDataMap objects. The speech distinguishes three kinds: maps on Workflow, WorkflowData, and WorkItem.",
      "A WorkItem map only applies while that work item is running, whereas the Workflow and WorkflowData maps are shared across the workflow. The recommendation in the speech is to use the WorkflowData map for persistence that later steps need.",
      "Dialog values saved under the ./metaData node of a step component are added to the workflow MetaDataMap. PROCESS_ARGS is the special key whose value becomes args in ECMA scripts and the MetaDataMap method argument in Java. The script variable metaData refers only to step metadata, not workflow metadata.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Persisting and reading workflow metadata",
        code: `MetaDataMap workflowMetaData =
    workItem.getWorkflow().getWorkflowData().getMetaDataMap();

workflowMetaData.put("approvedBy", "author-user");
workflowMetaData.put("channel", "email");

String approvedBy = workflowMetaData.get("approvedBy", String.class);
String channel = workflowMetaData.get("channel", "default");`,
        highlightLines: [1, 4, 5, 7, 8],
      },
      {
        language: "javascript",
        title: "ECMA step metadata vs workflow metadata",
        code: `var stepMetaData = metaData;
var workflowMetaData = graniteWorkItem.getWorkflow().getWorkflowData().getMetaDataMap();

workflowMetaData.put("status", "reviewed");
var status = workflowMetaData.get("status");`,
        highlightLines: [1, 2, 4],
      },
    ],
    expandableSections: [
      {
        title: "MetaDataMap Scope",
        content: [
          { text: "Workflow -> shared during the workflow" },
          { text: "WorkflowData -> shared during the workflow and recommended for persisted values" },
          { text: "WorkItem -> only valid while that step is running" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 9,
    title: "Custom Workflow Step Components",
    subtitle: "Super Types, cq:editConfig, and Step Defaults",
    content: [
      "A workflow step component controls what model authors see and configure: the category and name in the sidekick, the appearance of the step in the model, the edit dialog, and the runtime service or script it uses.",
      "These step components are built like other AEM components and inherit from one of the base step resource types: cq/workflow/components/model/process, cq/workflow/components/model/participant, or cq/workflow/components/model/dynamic_participant. All of them share a common base that provides the title rendering plus the Common and Advanced dialog tabs.",
      "The speech is explicit that design-time defaults belong in cq:editConfig with cq:formParameters. That is where defaults such as title and description, fixed PROCESS or PARTICIPANT values, FORM_PATH, DIALOG_PATH, PROCESS_AUTO_ADVANCE, and DO_NOTIFY are set. As always, never edit /libs; recreate under /apps instead.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "cq:formParameters on a custom participant step",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:cq="http://www.day.com/jcr/cq/1.0"
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
    jcr:primaryType="cq:EditConfig">
    <cq:formParameters
        jcr:primaryType="nt:unstructured"
        jcr:title="Approve Content"
        jcr:description="Review and approve the payload"
        PARTICIPANT="content-authors"
        FORM_PATH="/apps/mysite/workflow/forms/approve"
        PROCESS_AUTO_ADVANCE="{Boolean}true"
        DO_NOTIFY="{Boolean}true"/>
</jcr:root>`,
        highlightLines: [7, 9, 10, 11, 12, 13, 14],
      },
      {
        language: "xml",
        title: "Fixed process implementation and custom dialog path",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:cq="http://www.day.com/jcr/cq/1.0"
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:EditConfig">
    <cq:formParameters
        jcr:primaryType="nt:unstructured"
        PROCESS="Capture Workflow Arguments"
        DIALOG_PATH="/apps/mysite/workflow/dialogs/process"
        PROCESS_AUTO_ADVANCE="{Boolean}true"/>
</jcr:root>`,
        highlightLines: [6, 8, 9, 10],
      },
    ],
    expandableSections: [
      {
        title: "Base Step Resource Types",
        content: [
          "cq/workflow/components/model/process",
          "cq/workflow/components/model/participant",
          "cq/workflow/components/model/dynamic_participant",
        ],
        type: "list",
      },
      {
        title: "Important cq:formParameters Properties",
        content: [
          { text: "PROCESS_AUTO_ADVANCE -> recommended true so the step continues after execution" },
          { text: "DO_NOTIFY -> controls email notifications for user participation steps" },
          { text: "FORM_PATH -> form shown when the user opens a work item" },
          { text: "DIALOG_PATH -> dialog shown when the user completes it" },
        ],
        type: "table",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
  {
    id: 10,
    title: "Interacting with Workflows Programmatically",
    subtitle: "WorkflowSession and the Workflow REST API",
    content: [
      "To start or manage workflows from code, you obtain a WorkflowSession. In Java or OSGi services, a ResourceResolver is adapted to WorkflowSession; in ECMA scripts, the sling variable exposes a ScriptHelper whose request and resource resolver can be adapted the same way.",
      "The Workflow REST API is another management surface, and the speech notes that the Workflow console itself uses it. GET requests with the .json extension return JSON, instances are listed by state, and the named states are RUNNING, SUSPENDED, ABORTED, and COMPLETED.",
      "Models are available under the models URL, and a specific model returns id, title, version, description, nodes, and transitions. Node types such as START, PARTICIPANT, PROCESS, and END appear in the model data, along with metadata like PARTICIPANT, PROCESS, and PROCESS_AUTO_ADVANCE.",
    ],
    codeExamples: [
      {
        language: "java",
        title: "Adapt a ResourceResolver to WorkflowSession",
        code: `WorkflowSession workflowSession = resourceResolver.adaptTo(WorkflowSession.class);
if (workflowSession != null) {
    // use workflowSession to start or manage workflows
}`,
        highlightLines: [1],
      },
      {
        language: "javascript",
        title: "Workflow model JSON sketch",
        code: `{
  "id": "/var/workflow/models/review",
  "title": "Review Workflow",
  "version": "1.0",
  "description": "Approves page content",
  "nodes": [
    { "id": "start", "type": "START" },
    { "id": "review", "type": "PARTICIPANT", "metaData": { "PARTICIPANT": "content-authors" } },
    { "id": "publish", "type": "PROCESS", "metaData": { "PROCESS": "Capture Workflow Arguments", "PROCESS_AUTO_ADVANCE": true } },
    { "id": "end", "type": "END" }
  ],
  "transitions": [
    { "from": "start", "to": "review" },
    { "from": "review", "to": "publish" },
    { "from": "publish", "to": "end" }
  ]
}`,
        highlightLines: [2, 6, 7, 8, 9, 12],
      },
    ],
    expandableSections: [
      {
        title: "Workflow Instance States",
        content: ["RUNNING", "SUSPENDED", "ABORTED", "COMPLETED"],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 11,
    title: "Content Fragments: Concepts",
    subtitle: "Structured Channel-Neutral Content Backed by Models",
    content: [
      "Content Fragments are structured, channel-neutral content managed as assets and independent of any page. The speech positions them for both page authoring and headless delivery.",
      "A fragment is created from a Content Fragment Model enabled through the Configuration Browser and created in the Content Fragment console. The model defines structure, including title, content elements, and tag definitions; it requires a title and at least one data element, and authors cannot alter that structure while authoring.",
      "Fragments are composed of elements, paragraphs, and metadata. Every fragment has a Main variation, labeled Master in the Assets editor, and additional variations are copies of Main for specific channels or purposes. Images can appear through Content Reference fields or inside a Multi line text field.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Content Fragment model sketch",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="nt:unstructured"
    jcr:title="Article"
    dataTypes="[text,multiline,boolean]"
    elementNames="[headline,body,published]"/>`,
        highlightLines: [5, 6, 7],
      },
      {
        language: "javascript",
        title: "Fragment content JSON example",
        code: `{
  "title": "Autumn Campaign",
  "elements": {
    "headline": "New seasonal collection",
    "body": "Long-form copy for web, app, and email.",
    "published": true
  },
  "variations": ["Main", "email", "social"]
}`,
        highlightLines: [2, 3, 7],
      },
    ],
    expandableSections: [
      {
        title: "Fragment Building Blocks",
        content: [
          "elements for structured data such as text, numbers, booleans, and date/time",
          "paragraphs for multi-line text blocks used during page authoring",
          "metadata for descriptive information",
          "variations for channel- or purpose-specific copies of Main",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 12,
    title: "Content Fragments: Delivery and Best Practices",
    subtitle: "Component Rendering, JSON Delivery, and Model Governance",
    content: [
      "For page authoring, a fragment is referenced with the Core Content Fragment Component, which handles layout and can deliver the fragment as HTML or JSON. Dragging a fragment onto a page associates the component automatically.",
      "For headless delivery, Content Services and the JSON Exporter deliver content to SPAs, native mobile apps, and other channels, while GraphQL is the query mechanism for headless delivery of Content Fragments. The Content Fragments console is optimized for headless use and is available only in AEM as a Cloud Service.",
      "The speech gives firm governance advice: keep structures simple, limit model count to a small set, avoid deep nesting of Content Fragment References, do not exceed ten rich text fields in a model, do not exceed ten variations per fragment, and prototype before production.",
    ],
    expandableSections: [
      {
        title: "Best Practices from the Speech",
        content: [
          "Create as many models as needed but no more",
          "A small set of models, in the low tens, is usually enough",
          "Keep Content Fragment Reference nesting to no more than ten levels",
          "Include only the data fields the model needs",
          "Do not use more than ten rich text fields in one model",
          "Do not exceed ten variations per fragment",
          "Prototype and test before production",
        ],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "flow",
        description: "Two delivery paths for Content Fragments",
        elements: [
          { id: "author", label: "Author creates fragment", tooltip: "Based on a Content Fragment Model" },
          { id: "page", label: "Content Fragment Component", tooltip: "Page authoring path with layout" },
          { id: "json", label: "JSON / GraphQL", tooltip: "Headless delivery path" },
          { id: "channels", label: "SPA, app, other channels", tooltip: "Consumer applications" },
        ],
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 13,
    title: "Experience Fragments: Concepts",
    subtitle: "Reusable Page-Based Groups of Components With Layout",
    content: [
      "An Experience Fragment is a group of one or more components, including both content and layout, that can be referenced within pages. It can contain any component, and it can also contain other Experience Fragments.",
      "The speech emphasizes that an Experience Fragment is part of an experience, meaning part of a page. It is based on an editable template that creates the fragment root page, and variations are then created from that root page and can share content and components.",
      "Common use cases are reuse without copy and paste, headless use where a third-party touchpoint consumes the experience, Multi Site Management, channel-specific variations, and omnichannel commerce. Experience Fragments require editable-template-based pages, are organized in folders, and write access requires the experience-fragments-editors group.",
    ],
    expandableSections: [
      {
        title: "Folder and Template Notes",
        content: [
          "Folder structure does not need to match site page structure",
          "Restrict templates with the folder's Allowed Templates property",
          "The Allowed Templates value can be a regular expression",
          "Instance-level configuration is not recommended because upgrades can overwrite it",
        ],
        type: "list",
      },
    ],
    diagrams: [
      {
        type: "ascii",
        description: "Experience Fragment structure",
        asciiContent: `Experience Fragment
|-- Root page from editable template
|-- Components + layout in a paragraph system
|-- Variation(s) based on the root page
\`-- Referenced inside pages or consumed by other channels`,
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 4,
  },
  {
    id: 14,
    title: "Experience Fragments: Development and Exam Tips",
    subtitle: "xfpage, .plain, Rewriter Rules, Target Export, and Key Distinctions",
    content: [
      "The master or variation of an Experience Fragment uses sling:resourceType cq/experience-fragments/components/xfpage, which falls back to the core page component through sling:resourceSuperType. Template recognition in the Create wizard depends on inheriting from xfpage with a name starting with experience-fragment or on Allowed Templates being configured in the console.",
      "The plain HTML rendition uses the .plain. selector, for example master.plain.html, so third-party applications can read the fragment by URL. The Sling Rewriter pipeline under the experience-fragments rewriter configuration builds that rendition and supports allowedCssClasses and allowedTags, and its configuration must be overlaid rather than edited in /libs.",
      "Export to Target sends a fragment to Adobe Target as an HTML or JSON offer and requires Target configuration, Link Externalizer settings, and published resources. The exam wrap-up is direct: Content Fragments are structured data without layout, Experience Fragments are layout plus components, an Experience Fragment can contain a Content Fragment, process steps run automatically, participant steps need a person, Sync generates the runtime model, and /libs must never be edited.",
    ],
    codeExamples: [
      {
        language: "xml",
        title: "Experience Fragment page resource type",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
    jcr:primaryType="cq:PageContent"
    sling:resourceType="cq/experience-fragments/components/xfpage"/>`,
        highlightLines: [6],
      },
      {
        language: "bash",
        title: "Plain rendition URL",
        code: `/content/experience-fragments/mysite/header/master.plain.html`,
        highlightLines: [1],
      },
      {
        language: "xml",
        title: "Rewriter configuration sketch with allowedTags",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root
    xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="nt:unstructured"
    allowedCssClasses="[xf-teaser,xf-banner]"
    allowedTags="[div,section,a,img]"/>`,
        highlightLines: [5, 6],
      },
    ],
    expandableSections: [
      {
        title: "Content Fragment vs Experience Fragment",
        content: [
          { text: "Content Fragment -> structured data, no layout, delivered as JSON or through a component" },
          { text: "Experience Fragment -> layout plus components, delivered as HTML" },
          { text: "Containment rule -> Experience Fragment can contain a Content Fragment, not the other way around" },
        ],
        type: "table",
      },
      {
        title: "Developer Checks",
        content: [
          "Allow fragment components through template content policies",
          "Overlay rewriter configuration instead of editing /libs",
          "Use .nocloudconfigs.html for the HTML offer built for Adobe Target",
          "Publish the fragment and its resources before external consumption",
        ],
        type: "list",
      },
    ],
    backgroundColor: THEME,
    estimatedTime: 5,
  },
]

export function getTotalWorkflowsSlides(): number {
  return workflowsSlides.length
}

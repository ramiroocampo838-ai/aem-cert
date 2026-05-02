import type { Concept } from "../types"

export const contentFragmentsConcepts: Concept[] = [
  {
    id: "intro-075",
    category: "Content Fragments",
    title: "Structured, channel-agnostic content stored independently of presentation and delivered via APIs",
    reference: "What is a Content Fragment in AEM?",
    explanation:
      "A Content Fragment is structured, channel-agnostic content stored in AEM's DAM. It is defined by a Content Fragment Model (schema with typed fields), has no inherent visual presentation, and is delivered to any consumer (web, mobile, IoT) via GraphQL or REST APIs.",
  },
  {
    id: "intro-076",
    category: "Content Fragments",
    title: "The schema definition that defines the fields and data types for a Content Fragment",
    reference: "What is a Content Fragment Model?",
    explanation:
      "A Content Fragment Model defines the schema for Content Fragments — it specifies which fields the fragment contains (single-line text, multi-line text, numbers, date/time, boolean, enumeration, content references, fragment references) and their validation rules.",
  },
  {
    id: "intro-077",
    category: "Content Fragments",
    title: "A reusable page section — a group of components forming a complete visual experience",
    reference: "What is an Experience Fragment (XF) in AEM?",
    explanation:
      "An Experience Fragment (XF) is a group of AEM components assembled into a complete visual section (like a promotional banner or site header). Unlike Content Fragments (data-focused), XFs retain their layout/styling and can be embedded in pages or exported to external platforms.",
  },
  {
    id: "intro-078",
    category: "Content Fragments",
    title: "CF: structured data without design; XF: styled layout section with components",
    reference: "What is the key difference between Content Fragments and Experience Fragments?",
    explanation:
      "Content Fragments are structured data objects — no layout, no CSS — delivered headlessly via GraphQL/REST. Experience Fragments are visual building blocks composed of styled AEM components — like a hero section or promotional banner — that retain their design when reused across pages or exported.",
  },
  {
    id: "intro-079",
    category: "Content Fragments",
    title: "Via the AEM GraphQL API or Content Fragment REST API",
    reference: "How are Content Fragments delivered in a headless AEM implementation?",
    explanation:
      "Content Fragments are delivered headlessly in two main ways: (1) GraphQL API — clients query AEM's GraphQL endpoint with typed queries or persisted queries; (2) Content Fragment REST API — the Assets HTTP API returns CF content as JSON. Both are available on the AEM Publish instance.",
  },
  {
    id: "intro-080",
    category: "Content Fragments",
    title: "An alternative version of a Content Fragment for a specific channel or use case",
    reference: "What is a 'variation' in the context of Content Fragments?",
    explanation:
      "A Content Fragment variation is a named alternate copy of the fragment's content. For example, an article CF might have a 'Master' variation (full article) and a 'Social Media' variation (shorter teaser). Variations are useful for channel-specific content without duplicating fragments.",
  },
  {
    id: "intro-081",
    category: "Content Fragments",
    title: "A field type that stores references to assets or other JCR paths",
    reference: "What is a 'Content Reference' field in a Content Fragment Model?",
    explanation:
      "A Content Reference field in a CF Model stores references to other content — typically DAM assets (images, videos, documents) identified by their JCR path. This allows fragments to embed or link to assets while keeping structured content (text fields) separate from binary assets (images).",
  },
  {
    id: "intro-082",
    category: "Content Fragments",
    title: "A field that stores a reference from one Content Fragment to another CF",
    reference: "What is a 'Fragment Reference' field in a Content Fragment Model?",
    explanation:
      "A Fragment Reference field in a CF Model allows a Content Fragment to reference another CF — creating relationships between content objects. For example, an Article CF might reference an Author CF (containing author details) through a fragment reference field.",
  },
  {
    id: "intro-083",
    category: "Content Fragments",
    title: "A GraphQL query saved on the AEM instance and executed by name via a GET request",
    reference: "In AEM GraphQL for Content Fragments, what is a 'persisted query'?",
    explanation:
      "A persisted query is a GraphQL query saved on the AEM server and retrieved by name via GET request (e.g., GET /graphql/execute.json/mysite/articleList). They are recommended over inline POST queries because they are CDN-cacheable, more secure (no arbitrary query injection), and faster.",
  },
  {
    id: "intro-084",
    category: "Content Fragments",
    title: "A reusable component group saved from an XF that can be inserted into other Experience Fragments",
    reference: "What is a 'Building Block' in the context of AEM Experience Fragments?",
    explanation:
      "Building Blocks are a special type within Experience Fragments — they are reusable sections extracted from an XF that can be embedded in other Experience Fragments. This creates a component-within-component reuse pattern, allowing consistent sections like CTAs or contact forms to be shared across multiple XFs.",
  },
]

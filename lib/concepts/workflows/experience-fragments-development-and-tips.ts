import type { Concept } from "../types"

export const experienceFragmentsDevelopmentAndTipsConcepts: Concept[] = [
  {
    id: "wf-094",
    category: "Experience Fragments Development and Tips",
    title: "Experience Fragment masters and variations use sling:resourceType cq/experience-fragments/components/xfpage",
    reference: "Which sling:resourceType is used by an Experience Fragment master or variation?",
    explanation:
      "The speech says a fragment master or variation uses the sling:resourceType cq/experience-fragments/components/xfpage, which falls back to the core page component through sling:resourceSuperType.",
  },
  {
    id: "wf-095",
    category: "Experience Fragments Development and Tips",
    title: "Use the .plain. selector to request the plain HTML rendition",
    reference: "Which selector requests the plain HTML rendition of an Experience Fragment for third-party consumption?",
    explanation:
      "The speech says the plain HTML rendition is requested with the .plain. selector, for example master.plain.html, so third-party applications can read the fragment by URL.",
  },
  {
    id: "wf-096",
    category: "Experience Fragments Development and Tips",
    title: "It adds protocol, host, and context path, and its links point to the publish instance",
    reference: "What does the plain HTML rendition rewrite in links and resource attributes?",
    explanation:
      "The speech says the plain HTML rendition adds protocol, host, and context path to src, href, and action attributes and attributes ending in -src or -href, and that links always reference the publish instance.",
  },
  {
    id: "wf-097",
    category: "Experience Fragments Development and Tips",
    title: "It is built by the Sling Rewriter pipeline, and you should overlay the configuration instead of editing /libs",
    reference: "How is the plain Experience Fragment rendition built, and what customization rule accompanies it?",
    explanation:
      "The speech says the plain rendition is built by the Sling Rewriter pipeline under the experience-fragments rewriter configuration and says to overlay the configuration rather than editing it in /libs.",
  },
  {
    id: "wf-098",
    category: "Experience Fragments Development and Tips",
    title: "Its resource type must inherit from cq/experience-fragments/components/xfpage and its name begin with experience-fragment, or Allowed Templates must be configured",
    reference: "How can an Experience Fragment template be recognized by the Create wizard?",
    explanation:
      "The speech says an Experience Fragment template must either inherit from cq/experience-fragments/components/xfpage and have a name beginning with experience-fragment, or Allowed Templates must be configured in the console.",
  },
  {
    id: "wf-099",
    category: "Experience Fragments Development and Tips",
    title: "Allow the components on the template with the content policy",
    reference: "What extra development step applies to components that will be used inside Experience Fragments?",
    explanation:
      "The speech says components used in fragments follow standard component practices, and the only extra step is allowing them on the template with the content policy.",
  },
  {
    id: "wf-100",
    category: "Experience Fragments Development and Tips",
    title: "Export to Target sends the Experience Fragment to Adobe Target as an offer in HTML or JSON",
    reference: "What does Export to Target do for an Experience Fragment?",
    explanation:
      "The speech says Export to Target sends a fragment to Adobe Target as an offer, in HTML or JSON format.",
  },
]

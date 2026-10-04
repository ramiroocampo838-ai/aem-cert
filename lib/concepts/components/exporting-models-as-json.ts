import type { Concept } from "../types"

export const exportingModelsAsJsonConcepts: Concept[] = [
  {
    id: "comp-073",
    category: "Exporting Models as JSON",
    title: "Add @Exporter(name = \"jackson\", extensions = \"json\")",
    reference: "How do you annotate a Sling Model so it can be exported as JSON?",
    explanation:
      "The speech says Sling Models can be exported as JSON with the Sling Model Exporter by annotating the model with @Exporter(name = \"jackson\", extensions = \"json\").",
  },
  {
    id: "comp-074",
    category: "Exporting Models as JSON",
    title: "Request the resource with the .model.json selector and extension",
    reference: "What request pattern returns the serialized Sling Model JSON for a resource?",
    explanation:
      "The speech says requesting the resource with the .model.json selector and extension returns the serialized model, such as /content/wknd/page/jcr:content/root/title.model.json.",
  },
  {
    id: "comp-075",
    category: "Exporting Models as JSON",
    title: "So components can be exported as part of the page JSON, which underpins SPA Editor and headless consumption",
    reference: "Why do Core Components implement ComponentExporter and ContainerExporter?",
    explanation:
      "The speech says Core Components implement ComponentExporter and ContainerExporter so components can be exported as part of the page JSON. It adds that this is the base of the SPA editor and headless consumption of component content.",
  },
  {
    id: "comp-076",
    category: "Exporting Models as JSON",
    title: "Jackson",
    reference: "Which library does the Sling Model Exporter use according to the speech?",
    explanation:
      "The speech explicitly says the exporter uses the Jackson library.",
  },
  {
    id: "comp-077",
    category: "Exporting Models as JSON",
    title: "Use @JsonIgnore to exclude properties and @JsonProperty to rename them",
    reference: "How do you exclude or rename properties in exported model JSON?",
    explanation:
      "The speech says the exporter uses Jackson and specifically calls out @JsonIgnore for excluding properties and @JsonProperty for renaming them.",
  },
  {
    id: "comp-078",
    category: "Exporting Models as JSON",
    title: "It needs the resourceType parameter and a ComponentExporter implementation",
    reference: "Given a scenario where a model is exported as part of the page model, what else does the speech say the model needs besides the exporter annotation?",
    explanation:
      "The speech says to remember that the model needs the resourceType parameter and the ComponentExporter implementation when it is exported with the page model.",
  },
  {
    id: "comp-079",
    category: "Exporting Models as JSON",
    title: "Only when the data is consumed as JSON",
    reference: "When should you add an exporter to a Sling Model?",
    explanation:
      "The speech clearly says a model that is only for HTL needs no exporter, and that you add the exporter only when the data is consumed as JSON.",
  },
]

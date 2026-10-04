import type { Concept } from "../types"

export const archetypeOptionsConcepts: Concept[] = [
  {
    id: "mvn-086",
    category: "Archetype Options",
    title: "The target AEM platform",
    reference: "What does aemVersion select?",
    explanation:
      "The speech says aemVersion selects the target.",
  },
  {
    id: "mvn-087",
    category: "Archetype Options",
    title: "cloud",
    reference: "What is the default value of aemVersion?",
    explanation:
      "The speech says the default for aemVersion is cloud for AEM as a Cloud Service.",
  },
  {
    id: "mvn-088",
    category: "Archetype Options",
    title: "Only when aemVersion is cloud",
    reference: "When is sdkVersion used, according to the speech?",
    explanation:
      "The speech says sdkVersion, only when aemVersion is cloud, picks a specific SDK version.",
  },
  {
    id: "mvn-089",
    category: "Archetype Options",
    title: "It defaults to y and adds Dispatcher configuration",
    reference: "What does includeDispatcherConfig do by default?",
    explanation:
      "The speech says includeDispatcherConfig, default y, adds the Dispatcher configuration for cloud or for AMS and on-premise depending on aemVersion.",
  },
  {
    id: "mvn-090",
    category: "Archetype Options",
    title: "general and none",
    reference: "Which values does the speech list for frontendModule in the standard options described there?",
    explanation:
      "The speech says frontendModule, default general, includes the front-end build module, and the other value is none. It separately notes SPA options add React or Angular front-end modules.",
  },
  {
    id: "mvn-091",
    category: "Archetype Options",
    title: "The content structure",
    reference: "What do language and country set?",
    explanation:
      "The speech says language and country set the content structure, for example en and us.",
  },
  {
    id: "mvn-092",
    category: "Archetype Options",
    title: "Set singleCountry to n",
    reference: "Given a scenario where you need a language-master content structure for multi-language and multi-region setups, how should singleCountry be set?",
    explanation:
      "The speech says singleCountry, default y, controls whether a language-master content structure is created, and that structure is used for multi-language and multi-region setups. Therefore, wanting that structure means not keeping the single-country default.",
  },
]

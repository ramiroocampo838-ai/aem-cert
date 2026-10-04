import type { Concept } from "../types"

export const filtersAndPackageContentsConcepts: Concept[] = [
  {
    id: "mvn-051",
    category: "Filters & Package Contents",
    title: "Which repository paths the package owns",
    reference: "What does a package define in META-INF/vault/filter.xml according to the speech?",
    explanation:
      "The speech says each package defines in META-INF/vault/filter.xml which repository paths it owns.",
  },
  {
    id: "mvn-052",
    category: "Filters & Package Contents",
    title: "replace",
    reference: "Given a scenario where content under a filter root exists in the repository but not in the package, which filter mode removes that extra content by default?",
    explanation:
      "The speech states that replace is the default mode and that it removes content in the filter root that is not in the package.",
  },
  {
    id: "mvn-053",
    category: "Filters & Package Contents",
    title: "update",
    reference: "Which filter mode adds content and overwrites existing content but never removes anything?",
    explanation:
      "The speech distinguishes the modes by saying update adds and overwrites but never removes.",
  },
  {
    id: "mvn-054",
    category: "Filters & Package Contents",
    title: "It must not also have /content filters",
    reference: "What rule applies to a package that has /apps filters?",
    explanation:
      "The speech explicitly says a package that has /apps filters must not also have /content filters.",
  },
  {
    id: "mvn-055",
    category: "Filters & Package Contents",
    title: "Because it violates the rules of AEM as a Cloud Service",
    reference: "Why is mixing mutable and immutable roots in one package a problem in AEM as a Cloud Service?",
    explanation:
      "The speech says mixing mutable and immutable roots in one package violates the rules of AEM as a Cloud Service.",
  },
  {
    id: "mvn-056",
    category: "Filters & Package Contents",
    title: "Under /conf/<appId> in ui.content",
    reference: "Given a scenario where you are packaging actual templates, where does the speech place them?",
    explanation:
      "The speech says ui.content contains the actual templates under /conf/<appId>, while ui.apps contains template type and policy code under /apps/settings.",
  },
  {
    id: "mvn-057",
    category: "Filters & Package Contents",
    title: "In ui.content, with a goal of migrating them away from /etc",
    reference: "Where do legacy /etc nodes belong, according to the speech?",
    explanation:
      "The speech says legacy /etc nodes belong in ui.content and ideally should be migrated to non-/etc locations.",
  },
]

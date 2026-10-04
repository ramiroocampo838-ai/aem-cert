import type { Concept } from "../types"

export const mutableVsImmutableAreasConcepts: Concept[] = [
  {
    id: "mvn-008",
    category: "Mutable vs Immutable Areas",
    title: "/apps and /libs",
    reference: "In AEM as a Cloud Service, which repository areas are immutable after startup?",
    explanation:
      "Section 2 says AEM as a Cloud Service requires strict separation of code and content, and specifically marks /apps and /libs as immutable.",
  },
  {
    id: "mvn-009",
    category: "Mutable vs Immutable Areas",
    title: "The attempt fails",
    reference: "What happens if code tries to create, update, or delete something in /apps at runtime after AEM starts?",
    explanation:
      "The speech states that after AEM starts, you cannot create, update, or delete anything in /apps or /libs at runtime, and any attempt fails.",
  },
  {
    id: "mvn-010",
    category: "Mutable vs Immutable Areas",
    title: "/conf",
    reference: "Which of these paths is listed as mutable in the speech?",
    explanation:
      "The mutable list includes /content, /conf, /var, /etc, /system, /tmp, /home, and /oak:index.",
  },
  {
    id: "mvn-011",
    category: "Mutable vs Immutable Areas",
    title: "Because the application must split code and content into discrete packages",
    reference: "Why can't a single content package deploy to both /apps and a mutable area in AEM as a Cloud Service?",
    explanation:
      "The speech says that due to the separation of immutable code and mutable content, a single package cannot deploy to both /apps and a mutable area, so the application must split them into discrete packages.",
  },
  {
    id: "mvn-012",
    category: "Mutable vs Immutable Areas",
    title: "/libs must never be modified because only AEM product code is deployed there",
    reference: "Which statement about /libs is correct?",
    explanation:
      "The lesson says that, as in earlier versions, /libs must never be modified and only AEM product code is deployed there.",
  },
  {
    id: "mvn-013",
    category: "Mutable vs Immutable Areas",
    title: "They are deployed as code in ui.apps",
    reference: "Given a scenario with Oak indexes in Cloud Service, how are index definitions treated for deployment?",
    explanation:
      "The speech calls Oak indexes a special case: although /oak:index is mutable at runtime, Cloud Manager waits for reindexing before switching code, so index definitions are deployed as code in ui.apps.",
  },
  {
    id: "mvn-014",
    category: "Mutable vs Immutable Areas",
    title: "Because Cloud Manager waits for the new index to be deployed and fully reindexed before switching to the new code image",
    reference: "Why are Oak index definitions not treated like ordinary mutable content?",
    explanation:
      "The reason given is that Cloud Manager waits until a new index is deployed and fully reindexed before switching to the new code image.",
  },
]

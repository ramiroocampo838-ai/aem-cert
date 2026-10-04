import type { Concept } from "../types"

export const introductionConcepts: Concept[] = [
  {
    id: "disp-001",
    category: "Introduction",
    title: "This lesson maps to Configurations, about 15 percent of the exam",
    reference: "This Dispatcher lesson maps mainly to which exam area, and about what percentage of the exam does it represent?",
    explanation:
      "The introduction says this lesson maps to the Configurations part of the exam, about 15 percent.",
  },
  {
    id: "disp-002",
    category: "Introduction",
    title: "The lesson also supports Build and Deployment and Analyzing and Debugging",
    reference: "Besides Configurations, which two exam-support areas does the lesson explicitly say this topic helps with?",
    explanation:
      "The introduction states that this lesson supports Build and Deployment and Analyzing and Debugging.",
  },
  {
    id: "disp-003",
    category: "Introduction",
    title: "Expect scenario questions such as why a page was not cached, which file holds a rule, and how cache invalidation works",
    reference: "What kind of exam questions does the speech tell you to expect for Dispatcher topics?",
    explanation:
      "The introduction explicitly says to expect scenario questions such as why a page was not cached, which file holds a rule, how the cache is invalidated, and what fails validation.",
  },
  {
    id: "disp-004",
    category: "Introduction",
    title: "Traffic passes through the CDN to an Apache web server layer that supports Dispatcher before reaching publish",
    reference: "In AEM as a Cloud Service, what path does traffic follow before it reaches the publish nodes?",
    explanation:
      "The introduction says that in AEM as a Cloud Service, traffic passes through the CDN to an Apache web server layer that supports Dispatcher.",
  },
  {
    id: "disp-005",
    category: "Introduction",
    title: "Dispatcher is used primarily as a cache to limit processing on the publish nodes",
    reference: "What is Dispatcher used for primarily in the architecture described by the speech?",
    explanation:
      "The speech says Dispatcher is used primarily as a cache to limit processing on the publish nodes.",
  },
  {
    id: "disp-006",
    category: "Introduction",
    title: "Dispatcher is also a security layer because filters control which requests reach AEM",
    reference: "Why does the speech also describe Dispatcher as a security layer?",
    explanation:
      "The introduction states that Dispatcher is also a security layer because filters control which requests reach AEM.",
  },
  {
    id: "disp-007",
    category: "Introduction",
    title: "That scenario also reinforces Analyzing and Debugging",
    reference: "A mock exam asks, \"Why was this page not cached?\" Which section of the certification blueprint is this lesson said to reinforce beyond Configurations?",
    explanation:
      "The introduction says this topic supports Analyzing and Debugging as well as Build and Deployment.",
  },
  {
    id: "disp-008",
    category: "Introduction",
    title: "The lesson shifts to the Apache web server layer with the Dispatcher module and its caching",
    reference: "What content-delivery layer does the lesson say it is about when it shifts from components, Maven, workflows, and fragments?",
    explanation:
      "The introduction says the lesson looks at how content is delivered: the Apache web server layer with Dispatcher and the caching around it.",
  },
]

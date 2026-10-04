import type { Concept } from "../types"

export const htlBlockStatementsConcepts: Concept[] = [
  {
    id: "comp-037",
    category: "HTL Block Statements",
    title: "data-sly attributes on HTML elements",
    reference: "What are HTL block statements?",
    explanation:
      "The block statements section begins by defining block statements as data-sly attributes on HTML elements.",
  },
  {
    id: "comp-038",
    category: "HTL Block Statements",
    title: "Initializing a helper object such as a Sling Model",
    reference: "What is data-sly-use for?",
    explanation:
      "The speech says data-sly-use initializes a helper object such as a Sling Model.",
  },
  {
    id: "comp-039",
    category: "HTL Block Statements",
    title: "data-sly-list keeps the host element and iterates over its content, while data-sly-repeat repeats the host element itself",
    reference: "What is the difference between data-sly-list and data-sly-repeat?",
    explanation:
      "The block statements section explicitly contrasts them: data-sly-list keeps the host element and iterates over its content, while data-sly-repeat repeats the host element itself.",
  },
  {
    id: "comp-040",
    category: "HTL Block Statements",
    title: "item and itemList",
    reference: "What identifiers does data-sly-list expose by default?",
    explanation:
      "The speech says data-sly-list exposes an item and itemList by default.",
  },
  {
    id: "comp-041",
    category: "HTL Block Statements",
    title: "index, count, first, middle, last, odd, and even",
    reference: "What information does itemList provide in a data-sly-list loop?",
    explanation:
      "The block statements section lists the itemList properties as index, count, first, middle, last, odd, and even.",
  },
  {
    id: "comp-042",
    category: "HTL Block Statements",
    title: "It can store its result in a variable that can be reused later and is not scoped to the element",
    reference: "What useful pattern does data-sly-test support besides conditional rendering?",
    explanation:
      "The speech gives the example data-sly-test.hasTitle=\"${properties.jcr:title}\" and explains that the result can be stored in a variable, reused later, and is not scoped to the element.",
  },
  {
    id: "comp-043",
    category: "HTL Block Statements",
    title: "It is evaluated once before the loop starts",
    reference: "Given a scenario where data-sly-test and data-sly-list are on the same element, when is the test evaluated?",
    explanation:
      "The speech explains that list runs after test in the priority order, so a data-sly-test on the same element as data-sly-list is evaluated once before the loop starts.",
  },
]

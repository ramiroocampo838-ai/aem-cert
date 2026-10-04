import type { Concept } from "../types"

export const indexNamesAndSimplifiedIndexManagementConcepts: Concept[] = [
  {
    id: "oak-029",
    category: "Index Names and Simplified Index Management",
    title: "An out-of-the-box index, a customization of an out-of-the-box index, and a fully custom index",
    reference: "What three categories of indexes does the speech define?",
    explanation:
      "Section 5 says an index falls into three categories: out-of-the-box, customization of an out-of-the-box index, and fully custom.",
  },
  {
    id: "oak-030",
    category: "Index Names and Simplified Index Management",
    title: "It appends -custom- and a number, as in damAssetLucene-8-custom-1",
    reference: "What naming pattern does the speech show for customizing an out-of-the-box index?",
    explanation:
      "Section 5 says a customization of an out-of-the-box index appends -custom- and a number, for example damAssetLucene-8-custom-1.",
  },
  {
    id: "oak-031",
    category: "Index Names and Simplified Index Management",
    title: "It should use a prefix and a dot before the name, and end with -custom- and a version number, such as acme.product-1-custom-2",
    reference: "How should a fully custom index be named according to the speech?",
    explanation:
      "Section 5 says a fully custom index should use a prefix and dot to avoid conflicts and end with -custom- plus a version number.",
  },
  {
    id: "oak-032",
    category: "Index Names and Simplified Index Management",
    title: "Copy its latest definition from a Cloud Service environment using the CRX DE Package Manager, rename it with the custom suffix, and add your changes",
    reference: "How do you customize an out-of-the-box index in Cloud Service according to the speech?",
    explanation:
      "Section 5 says to copy the latest definition from a Cloud Service environment using CRX DE Package Manager, rename it with the custom suffix, and add changes.",
  },
  {
    id: "oak-033",
    category: "Index Names and Simplified Index Management",
    title: "Change type to lucene and change async to async and nrt",
    reference: "If the cloud index you copied is of type elasticsearch, what two changes does the speech require?",
    explanation:
      "Section 5 says that if the cloud index is of type elasticsearch, change type to lucene and async to async and nrt.",
  },
  {
    id: "oak-034",
    category: "Index Names and Simplified Index Management",
    title: "It is strongly discouraged; instead customize damAssetLucene",
    reference: "What does the speech say about introducing new full-text indexes on dam:Asset?",
    explanation:
      "Section 5 says introducing new full-text indexes on dam:Asset is strongly discouraged and recommends customizing damAssetLucene instead.",
  },
  {
    id: "oak-035",
    category: "Index Names and Simplified Index Management",
    title: "It uses a diff.index so out-of-the-box customizations and custom indexes can be defined with a single diff.json file, stored under _oak_index/diff.index with a placeholder .content.xml and a diff.json file",
    reference: "What is Simplified Index Management, and where does its diff-based configuration live?",
    explanation:
      "Section 5 says Simplified Index Management uses diff.index and a single diff.json under _oak_index/diff.index together with a placeholder .content.xml.",
  },
]

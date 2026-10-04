import type { Concept } from "../types"

export const dispatcherAnyFarmsAndIncludesConcepts: Concept[] = [
  {
    id: "disp-009",
    category: "dispatcher.any, Farms and Includes",
    title: "The default Dispatcher configuration file is named dispatcher.any",
    reference: "What is the default text file name that stores the Dispatcher configuration?",
    explanation:
      "Section 2 says the Dispatcher configuration is stored by default in a text file named dispatcher.any.",
  },
  {
    id: "disp-010",
    category: "dispatcher.any, Farms and Includes",
    title: "Dispatcher property names are prefixed with a forward slash",
    reference: "How are Dispatcher property names written in dispatcher.any?",
    explanation:
      "Section 2 says property names are prefixed with a forward slash.",
  },
  {
    id: "disp-011",
    category: "dispatcher.any, Farms and Includes",
    title: "Multi-valued properties enclose their child items in braces",
    reference: "How are multi-valued properties represented in dispatcher.any?",
    explanation:
      "Section 2 explains that multi-valued properties enclose their child items in braces.",
  },
  {
    id: "disp-012",
    category: "dispatcher.any, Farms and Includes",
    title: "The top-level properties named are /name and /farms",
    reference: "Which two top-level properties does the speech name in dispatcher.any?",
    explanation:
      "Section 2 says the top-level properties are /name and /farms.",
  },
  {
    id: "disp-013",
    category: "dispatcher.any, Farms and Includes",
    title: "Use a single farm when all pages should be handled the same way",
    reference: "When should you use a single farm instead of several farms?",
    explanation:
      "Section 2 says to use a single farm when all pages should be handled the same way.",
  },
  {
    id: "disp-014",
    category: "dispatcher.any, Farms and Includes",
    title: "Use several farms when different sites or URL areas need different behavior",
    reference: "Why would you use several farms in a Dispatcher configuration?",
    explanation:
      "Section 2 says to use several farms when different sites or areas need different behavior.",
  },
  {
    id: "disp-015",
    category: "dispatcher.any, Farms and Includes",
    title: "Use $include to split files, wildcards such as farm_*.any to include ranges, and ${variable_name} for environment variables",
    reference: "How can a large Dispatcher configuration be split and made environment-aware?",
    explanation:
      "Section 2 explains that $include splits a large configuration, wildcards can include a range of files, and string values can use environment variables like ${variable_name}.",
  },
]

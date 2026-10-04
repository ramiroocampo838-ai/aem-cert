import type { Concept } from "../types"

export const uiConfigRunModesAndRepoInitConcepts: Concept[] = [
  {
    id: "mvn-058",
    category: "ui.config, Run Modes & Repo Init",
    title: "OSGi configurations",
    reference: "What does the ui.config package contain?",
    explanation:
      "The speech says the ui.config package contains the OSGi configurations.",
  },
  {
    id: "mvn-059",
    category: "ui.config, Run Modes & Repo Init",
    title: "Because the configurations belong to OSGi bundles and have no regular content nodes",
    reference: "Why is ui.config considered code in the speech?",
    explanation:
      "The speech explains that ui.config is considered code because the configurations belong to OSGi bundles and have no regular content nodes.",
  },
  {
    id: "mvn-060",
    category: "ui.config, Run Modes & Repo Init",
    title: "In /apps/<appId>/osgiconfig",
    reference: "Where are the configurations stored inside the repository?",
    explanation:
      "The speech states that the configurations are in /apps/<appId>/osgiconfig.",
  },
  {
    id: "mvn-061",
    category: "ui.config, Run Modes & Repo Init",
    title: "config",
    reference: "Given a scenario where you need defaults that apply everywhere, which folder does the speech use?",
    explanation:
      "The speech says a common folder named config holds defaults that apply everywhere.",
  },
  {
    id: "mvn-062",
    category: "ui.config, Run Modes & Repo Init",
    title: "config.publish.prod",
    reference: "Which folder name matches the run-mode naming pattern described in the speech?",
    explanation:
      "The speech gives examples such as config.author, config.publish.prod, and config.dev, and says the run-mode names are author and publish for the service plus dev, stage, and prod for the environment type.",
  },
  {
    id: "mvn-063",
    category: "ui.config, Run Modes & Repo Init",
    title: ".config because it supports multi-line values",
    reference: "Which format is best for Repo Init according to the speech, and why?",
    explanation:
      "The speech says configuration files use cfg.json, with one exception: Repo Init is best written with the .config format because it supports multi-line values.",
  },
  {
    id: "mvn-064",
    category: "ui.config, Run Modes & Repo Init",
    title: "Repo Init",
    reference: "Given a scenario where an application needs baseline content structures and service users before code runs, what is the recommended deployment mechanism?",
    explanation:
      "The speech says Repo Init is the recommended way to deploy mutable content that is logically part of the application, including baseline structures, users, service users, groups, and ACLs, and that it runs early in the deployment lifecycle.",
  },
]

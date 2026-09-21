import type { Concept } from "../types"

export const fileSystemConcepts: Concept[] = [
  {
    id: "env-025",
    category: "File System Organization",
    title: "~/aem-sdk/",
    reference: "What is the Adobe-recommended top-level directory for local AEM SDK files?",
    explanation:
      "Adobe recommends organizing local AEM SDK files under `~/aem-sdk/`, with subdirectories for author, publish, and dispatcher. This keeps SDK files separate from your project code.",
  },
  {
    id: "env-026",
    category: "File System Organization",
    title: "~/aem-sdk/author/",
    reference: "Where should the local Author service files be placed according to the recommended directory structure?",
    explanation:
      "The recommended structure places Author service files in `~/aem-sdk/author/`, Publish files in `~/aem-sdk/publish/`, and Dispatcher files in `~/aem-sdk/dispatcher/`.",
  },
  {
    id: "env-027",
    category: "File System Organization",
    title: "~/code/<project-name>/",
    reference: "Where should the AEM Maven project code be placed in the recommended file system structure?",
    explanation:
      "The AEM Maven project (your custom code) should be placed in `~/code/<project-name>/`, kept separate from the SDK runtime directories in `~/aem-sdk/`. This separation makes it easy to manage multiple SDK versions.",
  },
  {
    id: "env-028",
    category: "File System Organization",
    title: "It keeps everything organized and makes it easy to manage multiple SDK versions",
    reference: "What is the main benefit of following the recommended ~/aem-sdk/ directory structure?",
    explanation:
      "The recommended structure keeps everything organized and makes it easy to manage multiple SDK versions. When Adobe releases a new SDK, you can keep old and new versions side by side without conflicts.",
  },
  {
    id: "env-029",
    category: "File System Organization",
    title: "%HOMEPATH%",
    reference: "What does the tilde (~) represent in file paths on Windows systems?",
    explanation:
      "On Windows, the tilde (~) in file paths maps to `%HOMEPATH%`, which typically resolves to `C:\\Users\\<username>`. So `~/aem-sdk/` becomes `C:\\Users\\<username>\\aem-sdk\\`.",
  },
  {
    id: "env-030",
    category: "File System Organization",
    title: "~/aem-sdk/dispatcher/",
    reference: "Which subdirectory under ~/aem-sdk/ is designated for Local Dispatcher Tools?",
    explanation:
      "The three subdirectories under `~/aem-sdk/` are: `author/` for the local Author service, `publish/` for the local Publish service, and `dispatcher/` for the local Dispatcher Tools.",
  },
  {
    id: "env-031",
    category: "File System Organization",
    title: "Three subdirectories",
    reference: "How many subdirectories does the recommended ~/aem-sdk/ structure contain?",
    explanation:
      "The `~/aem-sdk/` directory contains three subdirectories: `author/` (local Author service), `publish/` (local Publish service), and `dispatcher/` (local Dispatcher Tools).",
  },
  {
    id: "env-032",
    category: "File System Organization",
    title: "To separate your custom code from the runtime SDK files",
    reference: "Why is the AEM Maven project kept in ~/code/ rather than inside ~/aem-sdk/?",
    explanation:
      "Keeping project code in `~/code/<project>/` and runtime SDK in `~/aem-sdk/` is a separation of concerns. When Adobe releases a new SDK version, you can update the SDK without touching your code, and vice versa.",
  },
]

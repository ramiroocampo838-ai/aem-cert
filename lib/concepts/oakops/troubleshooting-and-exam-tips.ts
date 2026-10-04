import type { Concept } from "../types"

export const troubleshootingAndExamTipsConcepts: Concept[] = [
  {
    id: "oak-093",
    category: "Troubleshooting and Exam Tips",
    title: "A WARN message saying Oak traversed nodes and suggesting an index or query change",
    reference: "What log clue should make you suspect a slow Oak query?",
    explanation:
      "Section 14 says that for a slow query, you should look for the WARN message about traversed nodes and then create a suitable Lucene index.",
  },
  {
    id: "oak-094",
    category: "Troubleshooting and Exam Tips",
    title: "Deploy a suitable Lucene index through the pipeline with the correct custom name instead of editing the repository by hand",
    reference: "How should a slow-query index fix be handled in AEM as a Cloud Service?",
    explanation:
      "The troubleshooting section says that in the cloud you deploy the suitable Lucene index through the pipeline with the correct custom name and do not edit the repository by hand.",
  },
  {
    id: "oak-095",
    category: "Troubleshooting and Exam Tips",
    title: "Check the custom naming pattern and prefix, confirm type lucene and async, verify includedPaths and tags, and verify allowIndexDefinitions, noIntermediateSaves, and the vault filter",
    reference: "If a custom index is not being used in the cloud, what broad checklist does the speech recommend?",
    explanation:
      "Section 14 lists a checklist for unused custom indexes that includes naming, type and async, includedPaths and tags, allowIndexDefinitions and noIntermediateSaves, and the vault filter.",
  },
  {
    id: "oak-096",
    category: "Troubleshooting and Exam Tips",
    title: "Use the AEM Java log for application code, the request log to pair requests and responses, the access log to follow a user, the Dispatcher log for miss or none, the Apache error log for rewrite rules, and the CDN log for HIT, MISS, and PASS",
    reference: "Where should you look in the cloud to troubleshoot specific request and cache behaviors?",
    explanation:
      "The troubleshooting section gives an explicit log map: Java log for app code, request log for paired requests and responses, access log to follow a user, Dispatcher for miss or none, Apache error for rewrites, and CDN for HIT/MISS/PASS.",
  },
  {
    id: "oak-097",
    category: "Troubleshooting and Exam Tips",
    title: "Do not change the default INFO level, the log format, or the logs/error.log destination; raise a package to DEBUG only temporarily",
    reference: "What cloud logging defaults should not be changed, and how should DEBUG be used?",
    explanation:
      "Section 14 repeats the cloud logging guidance: never change the default INFO level, the format, or the logs/error.log destination, and use DEBUG only temporarily for a package.",
  },
  {
    id: "oak-098",
    category: "Troubleshooting and Exam Tips",
    title: "The receiving instance may be disabled or unreachable, or the agent user may lack permissions; check the agent log and the Retry Delay",
    reference: "What are common reasons for a blocked publish queue, and what should you inspect?",
    explanation:
      "The troubleshooting section says a blocked publish queue means the receiving instance is disabled or unreachable, or the agent user lacks permissions, and it tells you to check the agent log and Retry Delay.",
  },
  {
    id: "oak-099",
    category: "Troubleshooting and Exam Tips",
    title: "Replicate fewer than 100 paths at a time, 500 is the hard limit, and content per call must not exceed 10 MB",
    reference: "What replication call limits does the speech ask you to remember for Cloud Service?",
    explanation:
      "Section 14 repeats the Cloud Service replication numbers: fewer than 100 paths at a time, a limit of 500, and 10 MB of content per call.",
  },
  {
    id: "oak-100",
    category: "Troubleshooting and Exam Tips",
    title: "Author is a single TarMK, Publish is a TarMK farm, TarMK is for performance, MongoMK is for scalability, only the publish agent is on by default in the cloud, and Dispatcher plus rewrite logs default to warn",
    reference: "Which defaults does the speech tell you to remember for topology, replication, and logging?",
    explanation:
      "The final exam-tips section tells you to remember those defaults: single TarMK for Author, TarMK farm for Publish, TarMK for performance, MongoMK for scalability, only publish enabled by default in the cloud, and warn as the default for Dispatcher and rewrite logs.",
  },
]

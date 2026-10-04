import type { Concept } from "../types"

export const loggingBasicsAndOsgiConfigurationConcepts: Concept[] = [
  {
    id: "oak-036",
    category: "Logging Basics and OSGi Configuration",
    title: "Logging in AEM is based on Sling logging and is configured with OSGi configurations",
    reference: "What is logging in AEM based on, and how is it configured?",
    explanation:
      "Section 6 says logging in AEM is based on Sling logging and configured with OSGi configurations.",
  },
  {
    id: "oak-037",
    category: "Logging Basics and OSGi Configuration",
    title: "Global parameters for the central logging service, request data logging, and settings for individual services",
    reference: "What three logging areas does the speech list?",
    explanation:
      "Section 6 names three logging areas: global parameters, request data logging, and settings for individual services.",
  },
  {
    id: "oak-038",
    category: "Logging Basics and OSGi Configuration",
    title: "It configures the log level, the location of the central log file, the number of versions to keep, rotation by size or time interval, and the message format",
    reference: "What does the Apache Sling Logging Configuration set on the root logger?",
    explanation:
      "Section 6 says the Apache Sling Logging Configuration sets the root logger's level, file location, retained versions, rotation, and message format.",
  },
  {
    id: "oak-039",
    category: "Logging Basics and OSGi Configuration",
    title: "An OSGi service writes a message, a Logging Logger formats it, and a Logging Writer writes it to the physical file",
    reference: "What three elements does AEM use for logging an individual service?",
    explanation:
      "Section 6 describes three elements for service logging: the OSGi service, the Logging Logger, and the Logging Writer.",
  },
  {
    id: "oak-040",
    category: "Logging Basics and OSGi Configuration",
    title: "The Log File parameter links them and the values must be identical; if there is no match, an implicit writer is created with default configuration and daily rotation",
    reference: "How are a Logger and a Writer linked, and what happens if there is no match?",
    explanation:
      "Section 6 says the Log File parameter links Logger and Writer, the values must match, and otherwise an implicit default writer with daily rotation is created.",
  },
  {
    id: "oak-041",
    category: "Logging Basics and OSGi Configuration",
    title: "It helps during development when you need a higher log level for a single service",
    reference: "Why might you route one service's messages into a separate log file?",
    explanation:
      "Section 6 says separate service log files help during development, for example when only one service needs a higher log level.",
  },
  {
    id: "oak-042",
    category: "Logging Basics and OSGi Configuration",
    title: "error.log, request.log, and access.log",
    reference: "On the AEM 6.5 side, which three main log files does the speech name?",
    explanation:
      "Section 6 says the main AEM 6.5 files are error.log, request.log, and access.log.",
  },
]

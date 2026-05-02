import type { Concept } from "../types"

export const certificationConcepts: Concept[] = [
  {
    id: "intro-009",
    category: "Certification",
    title: "50 questions",
    reference: "How many questions are typically on an AEM Sites Developer Expert certification exam?",
    explanation:
      "The AEM Sites Developer Expert certification exam consists of 50 questions (multiple choice and multiple select format), with a 100-minute duration and approximately 70% passing score.",
  },
  {
    id: "intro-010",
    category: "Certification",
    title: "100 minutes",
    reference: "How long is the AEM Sites Developer Expert certification exam?",
    explanation:
      "The AEM Sites Developer Expert exam is 100 minutes long, giving approximately 2 minutes per question across 50 total questions.",
  },
  {
    id: "intro-011",
    category: "Certification",
    title: "Development (44%)",
    reference: "Which exam domain carries the highest weight in the AEM Sites Developer Expert certification?",
    explanation:
      "The Development domain carries the highest weight at approximately 44% of the exam. It covers component development with HTL and Sling Models, editable templates, Content/Experience Fragments, workflows, services, MSM, and more.",
  },
  {
    id: "intro-012",
    category: "Certification",
    title: "22%",
    reference: "What percentage of the AEM certification exam covers Configuration topics?",
    explanation:
      "Configuration is Domain 1 and covers approximately 22% of the exam. Topics include OSGi configuration and services, run modes, project structure (ui.apps, ui.content, core), Maven build configuration, and Dispatcher farm configurations.",
  },
  {
    id: "intro-013",
    category: "Certification",
    title: "Maven builds, CI/CD pipelines, Cloud Manager, and deployment strategies",
    reference: "What does 'Domain 3: Build and Deployment' in the AEM certification cover?",
    explanation:
      "Domain 3 (Build and Deployment, ~14%) covers Maven build lifecycle and plugins, content packages, Package Manager, CI/CD pipelines in Cloud Manager, code quality gates, SonarQube, and deployment strategies including rollback.",
  },
  {
    id: "intro-014",
    category: "Certification",
    title: "1–2 hours daily, with consistency over cramming",
    reference: "What is the recommended daily study time for the AEM certification preparation?",
    explanation:
      "Best practice for AEM certification preparation is 1-2 hours of consistent daily study over 3-6 months. Consistency beats cramming — active learning (building examples, not just reading) is more effective than passive review.",
  },
  {
    id: "intro-015",
    category: "Certification",
    title: "25 minutes of focused study followed by a 5-minute break",
    reference: "What is the Pomodoro technique as it applies to AEM certification study?",
    explanation:
      "The Pomodoro technique is a time management method that uses 25-minute focused work intervals separated by 5-minute breaks. It's recommended for AEM study to maintain concentration and prevent burnout during long study sessions.",
  },
  {
    id: "intro-016",
    category: "Certification",
    title: "Adobe's official hands-on tutorial project for learning AEM, building a sample site",
    reference: "What is the WKND Tutorial in the context of AEM development?",
    explanation:
      "WKND is Adobe's official multi-part tutorial for learning AEM by building a complete Sites project from scratch. It covers the entire development workflow — project structure, components, templates, Sling Models, clientlibs, and deployment — and is the recommended starting point for new AEM developers.",
  },
]

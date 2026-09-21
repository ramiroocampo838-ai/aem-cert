export interface DocDiagram {
  id: string
  title: string
  png: string
  svg: string
}

export interface DocPackage {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  docx: string
  pdf: string
  diagrams: DocDiagram[]
}

const makeDiagram = (section: string, id: string, title: string): DocDiagram => ({
  id,
  title,
  png: `/docs/${section}/png/${id}_${title.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")}.png`,
  svg: `/docs/${section}/svg/${id}_${title.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")}.svg`,
})

export const docPackages: DocPackage[] = [
  {
    id: "intro",
    title: "AEM Introduction",
    subtitle: "Visual study companion — 13 diagrams",
    description: "Core AEM architecture, JCR, Sling, OSGi, components, templates, fragments and Cloud Service fundamentals.",
    icon: "GraduationCap",
    color: "violet",
    docx: "/docs/intro/intro.docx",
    pdf: "/docs/intro/intro.pdf",
    diagrams: [
      { id: "01", title: "Introduction",        png: "/docs/intro/png/01_introduction.png",        svg: "/docs/intro/svg/01_introduction.svg" },
      { id: "02", title: "What is AEM?",        png: "/docs/intro/png/02_what_is_aem.png",         svg: "/docs/intro/svg/02_what_is_aem.svg" },
      { id: "03", title: "Architecture",        png: "/docs/intro/png/03_architecture.png",         svg: "/docs/intro/svg/03_architecture.svg" },
      { id: "04", title: "JCR Tree",            png: "/docs/intro/png/04_jcr_tree.png",             svg: "/docs/intro/svg/04_jcr_tree.svg" },
      { id: "05", title: "Sling URL",           png: "/docs/intro/png/05_sling_url.png",            svg: "/docs/intro/svg/05_sling_url.svg" },
      { id: "06", title: "OSGi",                png: "/docs/intro/png/06_osgi.png",                 svg: "/docs/intro/svg/06_osgi.svg" },
      { id: "07", title: "Components",          png: "/docs/intro/png/07_components.png",           svg: "/docs/intro/svg/07_components.svg" },
      { id: "08", title: "Editable Templates",  png: "/docs/intro/png/08_editable_templates.png",   svg: "/docs/intro/svg/08_editable_templates.svg" },
      { id: "09", title: "Fragments",           png: "/docs/intro/png/09_fragments.png",            svg: "/docs/intro/svg/09_fragments.svg" },
      { id: "10", title: "Sling Models",        png: "/docs/intro/png/10_sling_models.png",         svg: "/docs/intro/svg/10_sling_models.svg" },
      { id: "11", title: "Cloud Service",       png: "/docs/intro/png/11_cloud_service.png",        svg: "/docs/intro/svg/11_cloud_service.svg" },
      { id: "12", title: "Author & Publish",    png: "/docs/intro/png/12_author_publish.png",       svg: "/docs/intro/svg/12_author_publish.svg" },
      { id: "13", title: "Closing Summary",     png: "/docs/intro/png/13_closing_summary.png",      svg: "/docs/intro/svg/13_closing_summary.svg" },
    ],
  },
  {
    id: "cloud-manager",
    title: "Cloud Manager",
    subtitle: "Visual study companion — 13 diagrams",
    description: "CI/CD pipelines, Cloud Manager operations, AEMaaCS overview, roles, code quality gates and monitoring.",
    icon: "Cloud",
    color: "emerald",
    docx: "/docs/cloud-manager/cloud-manager.docx",
    pdf: "/docs/cloud-manager/cloud-manager.pdf",
    diagrams: [
      { id: "01", title: "Introduction",            png: "/docs/cloud-manager/png/01_introduction.png",            svg: "/docs/cloud-manager/svg/01_introduction.svg" },
      { id: "02", title: "AEMaaCS Overview",        png: "/docs/cloud-manager/png/02_aemaacs_overview.png",        svg: "/docs/cloud-manager/svg/02_aemaacs_overview.svg" },
      { id: "03", title: "Admin Console",           png: "/docs/cloud-manager/png/03_admin_console.png",           svg: "/docs/cloud-manager/svg/03_admin_console.svg" },
      { id: "04", title: "Cloud Manager Overview",  png: "/docs/cloud-manager/png/04_cloud_manager_overview.png",  svg: "/docs/cloud-manager/svg/04_cloud_manager_overview.svg" },
      { id: "05", title: "Roles",                   png: "/docs/cloud-manager/png/05_roles.png",                   svg: "/docs/cloud-manager/svg/05_roles.svg" },
      { id: "06", title: "Pipeline Types",          png: "/docs/cloud-manager/png/06_pipeline_types.png",          svg: "/docs/cloud-manager/svg/06_pipeline_types.svg" },
      { id: "07", title: "Production Pipeline",     png: "/docs/cloud-manager/png/07_production_pipeline.png",     svg: "/docs/cloud-manager/svg/07_production_pipeline.svg" },
      { id: "08", title: "Triggers & Variables",    png: "/docs/cloud-manager/png/08_triggers_and_variables.png",  svg: "/docs/cloud-manager/svg/08_triggers_and_variables.svg" },
      { id: "09", title: "Code Quality",            png: "/docs/cloud-manager/png/09_code_quality.png",            svg: "/docs/cloud-manager/svg/09_code_quality.svg" },
      { id: "10", title: "Testing",                 png: "/docs/cloud-manager/png/10_testing.png",                 svg: "/docs/cloud-manager/svg/10_testing.svg" },
      { id: "11", title: "Blue / Green",            png: "/docs/cloud-manager/png/11_blue_green.png",              svg: "/docs/cloud-manager/svg/11_blue_green.svg" },
      { id: "12", title: "Monitoring",              png: "/docs/cloud-manager/png/12_monitoring.png",              svg: "/docs/cloud-manager/svg/12_monitoring.svg" },
      { id: "13", title: "API & CLI",               png: "/docs/cloud-manager/png/13_api_cli.png",                 svg: "/docs/cloud-manager/svg/13_api_cli.svg" },
    ],
  },
  {
    id: "code-quality",
    title: "Code Quality",
    subtitle: "Visual study companion — 13 diagrams",
    description: "SonarQube, AEM best practices, OakPAL, HTL/Sightly, OSGi, Dispatcher, performance, security and Cloud Manager severity gates.",
    icon: "ShieldCheck",
    color: "blue",
    docx: "/docs/code-quality/code-quality.docx",
    pdf: "/docs/code-quality/code-quality.pdf",
    diagrams: [
      { id: "01", title: "Introduction",              png: "/docs/code-quality/png/01_introduction.png",              svg: "/docs/code-quality/svg/01_introduction.svg" },
      { id: "02", title: "Why Quality Matters",       png: "/docs/code-quality/png/02_why_quality_matters.png",       svg: "/docs/code-quality/svg/02_why_quality_matters.svg" },
      { id: "03", title: "SonarQube Critical Bugs",   png: "/docs/code-quality/png/03_sonarqube_critical_bugs.png",   svg: "/docs/code-quality/svg/03_sonarqube_critical_bugs.svg" },
      { id: "04", title: "SonarQube Code Smells",     png: "/docs/code-quality/png/04_sonarqube_code_smells.png",     svg: "/docs/code-quality/svg/04_sonarqube_code_smells.svg" },
      { id: "05", title: "AEM Best Practices",        png: "/docs/code-quality/png/05_aem_best_practices.png",        svg: "/docs/code-quality/svg/05_aem_best_practices.svg" },
      { id: "06", title: "OakPAL Content Rules",      png: "/docs/code-quality/png/06_oakpal_content_rules.png",      svg: "/docs/code-quality/svg/06_oakpal_content_rules.svg" },
      { id: "07", title: "HTL / Sightly",             png: "/docs/code-quality/png/07_htl_sightly.png",              svg: "/docs/code-quality/svg/07_htl_sightly.svg" },
      { id: "08", title: "OSGi / Felix",              png: "/docs/code-quality/png/08_osgi_felix.png",               svg: "/docs/code-quality/svg/08_osgi_felix.svg" },
      { id: "09", title: "Dispatcher",                png: "/docs/code-quality/png/09_dispatcher.png",               svg: "/docs/code-quality/svg/09_dispatcher.svg" },
      { id: "10", title: "Performance",               png: "/docs/code-quality/png/10_performance.png",              svg: "/docs/code-quality/svg/10_performance.svg" },
      { id: "11", title: "Security",                  png: "/docs/code-quality/png/11_security.png",                 svg: "/docs/code-quality/svg/11_security.svg" },
      { id: "12", title: "Severity Cloud Manager",    png: "/docs/code-quality/png/12_severity_cloud_manager.png",   svg: "/docs/code-quality/svg/12_severity_cloud_manager.svg" },
      { id: "13", title: "Closing",                   png: "/docs/code-quality/png/13_closing.png",                  svg: "/docs/code-quality/svg/13_closing.svg" },
    ],
  },
  {
    id: "env-setup",
    title: "Environment Setup",
    subtitle: "Visual study companion — 14 diagrams",
    description: "Local AEM environment setup: development tools, Adobe I/O CLI, Quickstart JAR, Dispatcher, Maven structure, repo init archetype and troubleshooting.",
    icon: "Settings",
    color: "orange",
    docx: "/docs/env-setup/AEM-Environment-Setup-Study-Guide.docx",
    pdf: "/docs/env-setup/AEM-Environment-Setup-Study-Guide.pdf",
    diagrams: [
      { id: "01", title: "Introduction",         png: "/docs/env-setup/png/01_introduction.png",         svg: "/docs/env-setup/svg/01_introduction.svg" },
      { id: "02", title: "Three Components",     png: "/docs/env-setup/png/02_three_components.png",     svg: "/docs/env-setup/svg/02_three_components.svg" },
      { id: "03", title: "Development Tools",    png: "/docs/env-setup/png/03_development_tools.png",    svg: "/docs/env-setup/svg/03_development_tools.svg" },
      { id: "04", title: "Adobe IO CLI",         png: "/docs/env-setup/png/04_adobe_io_cli.png",         svg: "/docs/env-setup/svg/04_adobe_io_cli.svg" },
      { id: "05", title: "File System",          png: "/docs/env-setup/png/05_file_system.png",          svg: "/docs/env-setup/svg/05_file_system.svg" },
      { id: "06", title: "Quickstart JAR",       png: "/docs/env-setup/png/06_quickstart_jar.png",       svg: "/docs/env-setup/svg/06_quickstart_jar.svg" },
      { id: "07", title: "JAR Naming",           png: "/docs/env-setup/png/07_jar_naming.png",           svg: "/docs/env-setup/svg/07_jar_naming.svg" },
      { id: "08", title: "Content Distribution", png: "/docs/env-setup/png/08_content_distribution.png", svg: "/docs/env-setup/svg/08_content_distribution.svg" },
      { id: "09", title: "Local Dispatcher",     png: "/docs/env-setup/png/09_local_dispatcher.png",     svg: "/docs/env-setup/svg/09_local_dispatcher.svg" },
      { id: "10", title: "Maven Structure",      png: "/docs/env-setup/png/10_maven_structure.png",      svg: "/docs/env-setup/svg/10_maven_structure.svg" },
      { id: "11", title: "Maven Modules",        png: "/docs/env-setup/png/11_maven_modules.png",        svg: "/docs/env-setup/svg/11_maven_modules.svg" },
      { id: "12", title: "Repo Init Archetype",  png: "/docs/env-setup/png/12_repo_init_archetype.png",  svg: "/docs/env-setup/svg/12_repo_init_archetype.svg" },
      { id: "13", title: "Troubleshooting",      png: "/docs/env-setup/png/13_troubleshooting.png",      svg: "/docs/env-setup/svg/13_troubleshooting.svg" },
      { id: "14", title: "Closing",              png: "/docs/env-setup/png/14_closing.png",              svg: "/docs/env-setup/svg/14_closing.svg" },
    ],
  },
]

export function getDocPackageById(id: string): DocPackage | undefined {
  return docPackages.find((pkg) => pkg.id === id)
}

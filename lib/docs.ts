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
]

export function getDocPackageById(id: string): DocPackage | undefined {
  return docPackages.find((pkg) => pkg.id === id)
}

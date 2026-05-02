import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Cloud, ShieldCheck } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ConceptCategorySection } from "@/components/topics/concept-category"
import { introCategories } from "@/lib/concepts/intro"
import { cloudManagerCategories } from "@/lib/concepts/cloud-manager"
import { codeQualityCategories } from "@/lib/concepts/code-quality"
import type { ConceptCategory } from "@/lib/concepts/types"
import type { LucideIcon } from "lucide-react"

interface SectionMeta {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
  categories: ConceptCategory[]
}

const SECTIONS: Record<string, SectionMeta> = {
  intro: {
    title: "Intro",
    subtitle: "AEM Introduction",
    description: "Core AEM architecture, components, Sling, JCR, OSGi and cloud fundamentals.",
    icon: GraduationCap,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    categories: introCategories,
  },
  "cloud-manager": {
    title: "Cloud Manager",
    subtitle: "Cloud Manager & AEMaaCS",
    description: "CI/CD pipelines, Cloud Manager operations, environments and monitoring.",
    icon: Cloud,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    categories: cloudManagerCategories,
  },
  "code-quality": {
    title: "Code Quality",
    subtitle: "Code Quality Rules",
    description: "SonarQube, OakPAL, AEM best practices, HTL, OSGi and security standards.",
    icon: ShieldCheck,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
    categories: codeQualityCategories,
  },
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>
}) {
  const { section } = await params
  const data = SECTIONS[section]
  if (!data) notFound()

  const Icon = data.icon
  const totalConcepts = data.categories.reduce((sum, cat) => sum + cat.concepts.length, 0)

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <Link
          href="/topics"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Topics
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">{data.title}</h1>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full space-y-6">
        {/* Section header */}
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${data.iconBg}`}>
            <Icon className={`h-6 w-6 ${data.iconColor}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{data.subtitle}</h2>
            <p className="text-sm text-muted-foreground mt-1">{data.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-2">
          <Badge variant="secondary">{totalConcepts} concepts</Badge>
          <Badge variant="outline">{data.categories.length} categories</Badge>
        </div>

        {/* Category accordions */}
        <div className="space-y-3">
          {data.categories.map((category, i) => (
            <ConceptCategorySection
              key={category.name}
              category={category}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

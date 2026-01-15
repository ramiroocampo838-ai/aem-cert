import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, FileText, Code, Users, Award } from "lucide-react"

const resources = [
  {
    title: "Experience League AEM Docs",
    description: "Official Adobe documentation for AEM as a Cloud Service with tutorials, guides, and best practices.",
    url: "https://experienceleague.adobe.com/docs/experience-manager-cloud-service.html",
    icon: BookOpen,
    category: "Documentation",
  },
  {
    title: "AD0-E134 Exam Guide",
    description: "Official exam guide with detailed objectives, readiness questionnaire, and preparation resources.",
    url: "https://experienceleague.adobe.com/docs/certification/certification/technical-certifications/aem/aem-sites-developer-expert.html",
    icon: Award,
    category: "Certification",
  },
  {
    title: "WKND Tutorial",
    description:
      "Multi-part tutorial for building a sample AEM Sites project from scratch. Essential hands-on practice.",
    url: "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview.html",
    icon: Code,
    category: "Tutorial",
  },
  {
    title: "AEM Cloud SDK & Local Setup",
    description: "Download the AEM as a Cloud Service SDK and set up your local development environment.",
    url: "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/aem-as-a-cloud-service-sdk.html",
    icon: FileText,
    category: "Development",
  },
  {
    title: "AEM Community Forums",
    description: "Connect with other AEM developers, ask questions, and share knowledge in the Adobe community.",
    url: "https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/ct-p/adobe-experience-manager-community",
    icon: Users,
    category: "Community",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Resources</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Learning Resources</h1>
          <p className="mt-1 text-muted-foreground">
            Curated links to official documentation, tutorials, and community resources for AEM certification prep.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{resource.category}</span>
                </div>
                <CardTitle className="mt-3 text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Visit Resource
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

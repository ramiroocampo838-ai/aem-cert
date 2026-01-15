import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Target, BookOpen, Code } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">About</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight">About AEM Cert Prep Hub</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This application is designed to help developers prepare for the Adobe Experience Manager (AEM) certification
            exams, with a primary focus on the{" "}
            <span className="font-medium text-foreground">
              AD0-E134 Adobe Experience Manager Sites Developer Expert
            </span>{" "}
            certification.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="mt-3 text-lg">Exam Coverage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Covers both AEM 6.x (on-premise) and AEM as a Cloud Service topics as outlined in the official AD0-E134
              exam guide, updated for 2026.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="mt-3 text-lg">Study Topics</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              10 comprehensive topics covering core architecture, component development, cloud services, security, and
              more with detailed study notes.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="mt-3 text-lg">Developer Focused</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Built by developers, for developers. Topics are organized to match real-world AEM development workflows
              and exam objectives.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="mt-3 text-lg">Continuous Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Content is regularly updated to reflect the latest AEM features, exam changes, and community best
              practices.
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Disclaimer:</span> This application is not affiliated with,
              endorsed by, or connected to Adobe Inc. All trademarks, product names, and company names are the property
              of their respective owners. This resource is provided for educational purposes only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

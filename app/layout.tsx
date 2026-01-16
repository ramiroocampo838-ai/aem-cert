import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "AEM Cert Prep Hub | AD0-E134 Sites Developer Expert",
  description:
    "Prepare for Adobe Experience Manager Developer certifications with comprehensive study guides, topics, and resources for AEM as a Cloud Service.",
  generator: "rocampo",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)", sizes: "32x32", type: "image/png" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icon.svg", color: "#EB1000" },
    ],
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <main className="flex-1">{children}</main>
              <Footer />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

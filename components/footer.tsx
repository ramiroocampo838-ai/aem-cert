export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          AEM Cert Prep Hub • For AEM Developers • Updated Jan 2026 • Built with Next.js
        </p>
        <p className="text-center text-xs text-muted-foreground">
          Not affiliated with Adobe. For educational purposes only.
        </p>
      </div>
    </footer>
  )
}

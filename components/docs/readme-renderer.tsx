"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface ReadmeRendererProps {
  content: string
  className?: string
}

export function ReadmeRenderer({ content, className }: ReadmeRendererProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-8 mb-3 text-2xl font-bold tracking-tight first:mt-0">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-6 mb-2 text-xl font-semibold tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-4 mb-1.5 text-base font-semibold">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 space-y-1 pl-5 list-disc text-muted-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 space-y-1 pl-5 list-decimal text-muted-foreground">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm leading-relaxed">{children}</li>
          ),
          table: ({ children }) => (
            <div className="mb-4 w-full overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/50">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border-b border-border px-4 py-2.5 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border px-4 py-2.5 text-muted-foreground last:border-b-0">{children}</td>
          ),
          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-muted/30">{children}</tr>
          ),
          code: ({ children, className: codeClass }) => {
            const isBlock = codeClass?.includes("language-")
            if (isBlock) {
              return (
                <code className="block w-full overflow-x-auto rounded-md bg-muted px-4 py-3 font-mono text-xs leading-relaxed">
                  {children}
                </code>
              )
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{children}</code>
            )
          },
          pre: ({ children }) => (
            <pre className="mb-4 overflow-hidden rounded-lg border border-border bg-muted">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-4 border-primary/40 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-6 border-border" />,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

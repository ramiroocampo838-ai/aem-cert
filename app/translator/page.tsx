import { TextReaderTranslator } from "@/components/translator/text-reader-translator"

export default function Page() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Text Reader & Translator
          </h1>
          <p className="text-muted-foreground">
            Ingresa texto en inglés o español, tradúcelo y escúchalo en voz alta
          </p>
        </div>

        <TextReaderTranslator
          initialText="Hello! This is a sample text. You can read it aloud or translate it to Spanish."
          placeholder="Escribe o pega tu texto aquí..."
        />
      </div>
    </main>
  )
}

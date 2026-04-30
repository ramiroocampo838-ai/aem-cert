import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import type { ActiveTab, TranslationDirection } from "@/lib/translator/types"

interface TextTabsProps {
  text: string
  translatedText: string
  activeTab: ActiveTab
  translationDirection: TranslationDirection
  placeholder?: string
  onTabChange: (tab: ActiveTab) => void
  onTextChange: (text: string) => void
}

export function TextTabs({
  text,
  translatedText,
  activeTab,
  translationDirection,
  placeholder = "Ingresa o pega tu texto aquí...",
  onTabChange,
  onTextChange,
}: TextTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={(v) => onTabChange(v as ActiveTab)}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="original">
          {translationDirection === "en-es" ? "Inglés (Original)" : "Español (Original)"}
        </TabsTrigger>
        <TabsTrigger value="translated" disabled={!translatedText}>
          {translationDirection === "en-es" ? "Español (Traducido)" : "Inglés (Traducido)"}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="original" className="mt-4">
        <Textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-40 resize-none text-base leading-relaxed"
        />
      </TabsContent>

      <TabsContent value="translated" className="mt-4">
        <div className="min-h-40 p-3 rounded-md border border-border bg-muted/30 text-base leading-relaxed whitespace-pre-wrap">
          {translatedText || "La traducción aparecerá aquí..."}
        </div>
      </TabsContent>
    </Tabs>
  )
}
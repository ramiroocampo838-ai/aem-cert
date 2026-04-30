import { Languages } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { TranslationDirection } from "@/lib/translator/types"

interface TranslationDirectionSelectorProps {
  value: TranslationDirection
  onChange: (value: TranslationDirection) => void
}

export function TranslationDirectionSelector({
  value,
  onChange,
}: TranslationDirectionSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <Languages className="h-4 w-4 text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en-es">Inglés → Español</SelectItem>
          <SelectItem value="es-en">Español → Inglés</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
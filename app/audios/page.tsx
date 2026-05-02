import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AudioPlayer } from "@/components/audios/audio-player"

export default function AudiosPage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className="text-sm font-medium">Audios</h1>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full">
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Audio Library</h2>
          <p className="text-muted-foreground text-sm">
            Explore and play available audio files. New files are automatically detected.
          </p>
        </div>

        <AudioPlayer />
      </div>
    </div>
  )
}

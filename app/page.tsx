import { ImageGenerator } from "@/components/image-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">AI Image Generator</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your ideas into stunning images using FLUX.1 [schnell] - the next generation text-to-image model
          </p>
        </div>
        <ImageGenerator />
      </div>
    </main>
  )
}

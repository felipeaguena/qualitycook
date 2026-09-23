import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-60 mix-blend-luminosity"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://qualitycook.com.br/wp-content/uploads/2022/12/SnapSave.io-Quality-Cook-Video-1_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-in slide-in-from-bottom-5 duration-700 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-primary/20">
          25 Anos de Experiência em Refeições Coletivas
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 animate-in slide-in-from-bottom-5 duration-1000 drop-shadow-2xl">
          QUALITY COOK
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 duration-1000 delay-200">
          <Link href="/sobre-a-quality-cook" className={cn(buttonVariants({ size: "lg" }), "text-base h-12 px-8 shadow-lg shadow-primary/25 transition-transform hover:scale-105")}>
            Sobre a Quality Cook
          </Link>
          <Link href="/servicos" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-base h-12 px-8 bg-black/20 text-white border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all hover:scale-105 shadow-lg")}>
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}

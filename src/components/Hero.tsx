import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900 text-white">
      {/* Background Image or Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://qualitycook.com.br/wp-content/uploads/2022/12/SnapSave.io-Quality-Cook-Video-1_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-900/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm md:text-base animate-in slide-in-from-bottom-5 duration-700">
          25 Anos de Experiência em Refeições Coletivas
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 animate-in slide-in-from-bottom-5 duration-1000">
          QUALITY COOK
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 duration-1000 delay-200">
          <Link href="/sobre-a-quality-cook" className={cn(buttonVariants({ size: "lg" }), "text-base h-12 px-8")}>
            Sobre a Quality Cook
          </Link>
          <Link href="/servicos" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-base h-12 px-8 bg-transparent text-white border-white hover:bg-white hover:text-black")}>
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}

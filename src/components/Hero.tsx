import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video with Strong Contrast Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-50"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://qualitycook.com.br/wp-content/uploads/2022/12/SnapSave.io-Quality-Cook-Video-1_1.mp4" type="video/mp4" />
        </video>
        {/* Gradient to darken the bottom and top to make header and text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        {/* Subtle primary color tint overlay */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-5xl">
        <span className="text-white font-black tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-in slide-in-from-bottom-5 duration-700 bg-primary px-6 py-2 rounded-full shadow-[0_0_20px_rgba(107,0,62,0.5)] border border-primary/50">
          25 Anos de Experiência
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 animate-in slide-in-from-bottom-5 duration-1000 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          QUALITY COOK
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl font-medium drop-shadow-lg animate-in slide-in-from-bottom-5 duration-1000 delay-100">
          Excelência em refeições coletivas empresariais. Levamos o sabor da comida caseira para dentro da sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-5 duration-1000 delay-200 w-full sm:w-auto">
          <Link 
            href="/sobre-a-quality-cook" 
            className={cn(buttonVariants({ size: "lg" }), "text-lg h-14 px-10 shadow-[0_0_30px_rgba(107,0,62,0.4)] transition-all hover:scale-105 hover:bg-primary/90 w-full sm:w-auto")}
          >
            Nossa História
          </Link>
          <Link 
            href="/servicos" 
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg h-14 px-10 bg-white/10 text-white border-2 border-white/70 backdrop-blur-md hover:bg-white hover:text-black transition-all hover:scale-105 shadow-xl w-full sm:w-auto")}
          >
            Conheça Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}

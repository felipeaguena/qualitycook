import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                A Quality Cook
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Inaugurada em 1994, a Quality Cook é uma Empresa Familiar que está
              atualmente em sua terceira geração de empreendedores. Atuando
              exclusivamente no atendimento e fornecimento de refeições
              corporativas.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "25 Anos de Experiência em Refeições Coletivas",
                "Gestão Completa de Restaurantes Corporativos",
                "Cardápios Elaborados por Nutricionistas",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-foreground font-medium text-base"
                >
                  <CheckCircle className="text-primary w-5 h-5 mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/sobre-a-quality-cook"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
            >
              Conheça nossa história e estrutura
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group border-4 border-background">
            <div className="absolute inset-0 bg-primary/20 transition-opacity group-hover:opacity-0 z-10"></div>
            <Image
              src="https://qualitycook.com.br/wp-content/uploads/2020/12/010-1.jpg"
              alt="Quality Cook Restaurante Corporativo"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur p-6 rounded-2xl z-20 shadow-lg border border-border">
              <p className="font-bold text-xl text-primary mb-1">+1000 m²</p>
              <p className="text-sm font-medium text-muted-foreground">
                de estrutura própria e equipada para preparo com total segurança
                alimentar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

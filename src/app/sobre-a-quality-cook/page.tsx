import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ImageGallery } from "@/components/ImageGallery";
import {
  ShieldCheck,
  Leaf,
  Users,
  PiggyBank,
  ChefHat,
  Warehouse,
  UtensilsCrossed,
  Settings,
  CheckCircle2,
} from "lucide-react";

const galleryImages = [
  "https://qualitycook.com.br/wp-content/uploads/2020/12/010-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/009-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/008-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/QualityCook-720x480-thumb3-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-17.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/013-QualityCook-self01_1_-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-01-1.jpg",
];

const facilities = [
  {
    icon: Warehouse,
    title: "Estoque Amplo",
    desc: "Recebimento de mercadorias, armazenagem e distribuição rigorosa de todos os insumos.",
  },
  {
    icon: ChefHat,
    title: "Confeitaria Própria",
    desc: "Área exclusiva para o preparo diário das nossas deliciosas sobremesas caseiras.",
  },
  {
    icon: CheckCircle2,
    title: "Área de Check-list",
    desc: "Espaço pré-determinado para montagem, conferência e organização do seu cardápio.",
  },
  {
    icon: Settings,
    title: "Equipamentos Modernos",
    desc: "Coifas, chapas, caldeiras, fornos e câmaras de resfriamento de última geração.",
  },
  {
    icon: UtensilsCrossed,
    title: "Centro de Higienização",
    desc: "Área isolada para lavagem e esterilização de todas as louças e utensílios.",
  },
];

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section Específica para Sobre */}
      <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-19_-1.jpg"
            alt="Sede Quality Cook"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-zinc-900/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">
            História e Estrutura
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
            A Quality Cook
          </h1>
          <div className="w-24 h-2 bg-primary rounded-full mb-6 shadow-lg"></div>
          <p className="text-xl max-w-2xl text-gray-200">
            Mais de duas décadas entregando refeições corporativas com sabor de
            comida caseira, qualidade e segurança alimentar.
          </p>
        </div>
      </div>

      {/* Nossa Essência - Alternância de Imagem e Texto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-2">
              Sede Própria de 1000m²
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              O Sabor de uma Empresa Familiar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O grande diferencial da{" "}
              <strong className="text-foreground">QUALITY COOK</strong> está em
              nossa essência: oferecer um serviço altamente personalizado,
              atendendo de forma próxima às necessidades de cada cliente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalhamos em parceria apenas com os melhores fornecedores de
              insumos do mercado, investindo constantemente na qualificação da
              nossa Mão de Obra. O resultado? Uma alimentação equilibrada e
              nutritiva todos os dias.
            </p>
          </div>
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
            <Image
              src="https://qualitycook.com.br/wp-content/uploads/2020/12/09-QualityCook-equipe01_1_-1-1.jpg"
              alt="Equipe Quality Cook"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Nossa Estrutura Física - Grid com Ícones (Substituindo texto em bloco) */}
      <div className="bg-muted py-24 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nosso Espaço Conta Com
            </h2>
            <p className="text-lg text-muted-foreground">
              Infraestrutura completa projetada para garantir segurança e
              qualidade em altíssimo volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <fac.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{fac.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Galeria */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Estrutura em Imagens
          </h3>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-6"></div>
        </div>
        <ImageGallery images={galleryImages} />
      </div>

      {/* Diferenciais (Cards Vibrantes) */}
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que escolher a Quality Cook?
            </h3>
            <p className="text-lg text-muted-foreground mt-4">
              Nossos pilares de excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm hover:-translate-y-2 transition-transform">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4">Qualidade Inspecionada</h4>
              <p className="text-muted-foreground">
                Alimentos e cardápios elaborados e inspecionados diariamente por
                Nutricionistas especializados.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm hover:-translate-y-2 transition-transform">
              <Leaf className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4">Segurança Alimentar</h4>
              <p className="text-muted-foreground">
                Serviço de hortifrúti completo. Recebemos diariamente frutas e
                legumes dos melhores fornecedores.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm hover:-translate-y-2 transition-transform">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4">Time de Especialistas</h4>
              <p className="text-muted-foreground">
                Um verdadeiro esquadrão: Cozinheiros, Ajudantes, Estoquistas e
                Nutricionistas dedicados à sua empresa.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm hover:-translate-y-2 transition-transform">
              <PiggyBank className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4">Custo Benefício</h4>
              <p className="text-muted-foreground">
                A melhor solução para alimentação corporativa, superando
                restaurantes comuns e vale-refeições.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

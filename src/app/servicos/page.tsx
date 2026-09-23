import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Building2, Truck, Package, CheckCircle2 } from "lucide-react"

export default function Servicos() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-primary/10 py-16 md:py-24 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendimento personalizado de acordo com a necessidade de cada cliente, com adequação de cardápios, flexibilidade de horários e excelência na gestão alimentícia.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        
        {/* Refeições Transportadas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6 shadow-sm">
              <Truck className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Refeições Transportadas</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A solução ideal para Empresas que buscam praticidade. Nossas refeições são preparadas na Cozinha Central da Quality Cook e acondicionadas em caixas térmicas “hot-box” que mantêm a temperatura e a qualidade.
            </p>
            <div className="bg-muted p-6 rounded-xl mb-6 border-l-4 border-primary shadow-sm">
              <h4 className="font-bold text-lg mb-3 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-primary"/> Ideal para:</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Empresas sem Cozinha ou estrutura para preparo.</li>
                <li className="text-muted-foreground">Empresas com pouco espaço físico.</li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6"></div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/004-1.jpg"
                alt="Refeições Transportadas"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Refeições Locais */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl transform -rotate-3 scale-105 transition-transform group-hover:-rotate-6"></div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/005-1.jpg"
                alt="Refeições Locais e Administração de Cozinha"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center p-4 bg-blue-500/20 rounded-2xl mb-6 shadow-sm">
              <Building2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Refeições Locais (In Company)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Esta é a solução completa em alimentação. Assumimos a gestão total do seu restaurante corporativo, desde o projeto arquitetônico até a operação diária na planta do cliente.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Elaboração de cardápios por Nutricionistas",
                "Envio de Equipe Especializada Completa",
                "Instalação de Equipamentos (Fogão, Coifas)",
                "Fornecimento de Insumos Frescos"
              ].map((v, i) => (
                <li key={i} className="flex items-center bg-blue-500/5 p-3 rounded-lg">
                  <div className="mr-3 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quality Marmitex */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-orange-500/5 p-8 md:p-12 rounded-3xl border border-orange-500/20">
          <div>
            <div className="inline-flex items-center justify-center p-4 bg-orange-500/20 rounded-2xl mb-6 shadow-sm">
              <Package className="w-10 h-10 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Quality Marmitex</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Buscando qualidade e praticidade para a alimentação dos seus colaboradores em ambientes de obra ou onde não há qualquer estrutura? O Quality Marmitex é a solução.
            </p>
            <div className="bg-background/80 backdrop-blur p-6 rounded-xl shadow-sm">
              <p className="font-medium text-foreground mb-2">Entregas seguras com embalagens térmicas e logísticas rápidas.</p>
              <p className="text-sm text-muted-foreground">
                Refeição nutritiva e balanceada, completa com arroz, feijão, proteína, guarnição, salada e sobremesa.
              </p>
            </div>
          </div>
          <div className="relative group h-[300px] w-full max-w-[400px] mx-auto">
             <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-80"></div>
             <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-background transform transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/012-QualityCook-marmitex01-1.jpg"
                alt="Quality Marmitex"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}

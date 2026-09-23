import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Building2, Truck, Package, CheckCircle2 } from "lucide-react"

export default function Servicos() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso atendimento é personalizado, de acordo com a necessidade de cada cliente, com adequação de cardápios, flexibilidade de horários e métodos variados de trabalho que garantem satisfação.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Refeições Transportadas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Refeições Transportadas</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A solução para sua Empresa são as refeições transportadas. As refeições são preparadas na Cozinha da Quality Cook por uma equipe de profissionais e acondicionadas em caixas térmicas “hot-box” que mantêm a temperatura dos alimentos.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Ao chegarem ao seu destino, as refeições são disponibilizadas em um balcão térmico “banho-maria” e servidas na modalidade Self-Service.
            </p>
            <h4 className="font-bold text-xl mb-3">Ideal para:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Empresas sem Cozinha ou estrutura para preparo;</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Empresas com pouco espaço físico;</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-2xl">
            <h4 className="font-bold text-xl mb-4">Vantagens:</h4>
            <ul className="space-y-4">
              {[
                "Recebimento diário de uma alimentação completa composta por arroz, feijão, proteínas, guarnições, saladas, sobremesas e sucos;",
                "Disponibilização de Mão de obra especializada para servir e organizar o ambiente;",
                "Fornecimento de todos os equipamentos e utensílios necessários (balcão térmico, pratos, bandejas);",
                "Adaptável até mesmo em pequenos espaços de refeitórios;",
                "Entrega com pontualidade e serviços de desjejuns, jantares e ceias."
              ].map((v, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Refeições Locais */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-muted p-8 rounded-2xl order-2 lg:order-1">
            <h4 className="font-bold text-xl mb-4">Este serviço é composto por:</h4>
            <ul className="space-y-4">
              {[
                "Elaboração de cardápios por Nutricionistas, com envio semanal;",
                "Envio de Equipe especializada: Cozinheiros, Auxiliares, Nutricionistas;",
                "Elaboração de Projeto e Layout para a Cozinha e Refeitório;",
                "Instalação de 100% dos equipamentos (Fogão, Coifa, Freezer);",
                "Entrega de todos os insumos necessários;",
                "Limpeza e organização dos espaços."
              ].map((v, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Refeições Locais (Administração de Cozinha)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Esta é a solução completa em alimentação "in company". Assumimos a gestão completa do seu restaurante corporativo, desde o projeto até a operação diária.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Preparação de cafés da manhã, almoços, lanches, jantares e ceias diretamente na planta do cliente, garantindo frescor absoluto e comida com sabor de casa.
            </p>
          </div>
        </div>

        {/* Quality Marmitex */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Quality Marmitex</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Buscando qualidade e praticidade para a alimentação dos seus colaboradores em ambientes de obra ou onde não há qualquer estrutura? O Quality Marmitex é a solução.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Entregas de refeições como cafés da manhã, almoços e jantares;",
                "Pontualidade no horário de entrega dos marmitex;",
                "Embalagens resistentes (isopor ou alumínio);",
                "Refeição nutritiva e balanceada, completa com arroz, feijão, proteína, guarnição, salada e sobremesa."
              ].map((v, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span className="text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Transporte e Logística</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nossa frota é própria e equipada com veículos revestidos, monitorados via satélite 24 horas por dia, com o objetivo de garantir segurança, agilidade e pontualidade nas entregas de alimentos e insumos.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}

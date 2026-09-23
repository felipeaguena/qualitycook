import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { ImageGallery } from "@/components/ImageGallery"

const galleryImages = [
  "https://qualitycook.com.br/wp-content/uploads/2020/12/010-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/009-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/008-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/QualityCook-720x480-thumb3-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-17.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/013-QualityCook-self01_1_-1.jpg",
  "https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-01-1.jpg",
]

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">A Quality Cook</h1>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Conheça a nossa Empresa</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A QUALITY COOK possui sede própria e conta com uma área de mais de 1000 metros quadrados para realizar o preparo das refeições.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O grande diferencial da QUALITY COOK esta em sua essência em oferecer um serviço personalizado, atendendo as necessidades especificas de cada cliente. Trabalhando em parceria com os melhores Fornecedores de Insumos e qualificando sua Mão de Obra, a fim de garantir a satisfação máxima dos colaboradores.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O resultado deste trabalho é uma alimentação equilibrada, nutritiva e com sabor de comida caseira. Contratar os serviços de refeições coletivas é como ter restaurante particular dentro da sua Empresa.
            </p>

            <h3 className="text-2xl font-bold mt-10">Nosso espaço conta com:</h3>
            <ul className="space-y-3 mt-4">
              {[
                "Estoque para realizar recebimento de mercadorias, armazenagem e distribuição de todos os insumos;",
                "Confeitaria para preparo de sobremesas caseiras;",
                "Área de Check list, conferência na distribuição de alimentos, onde cada cliente terá seu espaço pré-determinado para preparo e organização de todos os itens que compõem seu cardápio;",
                "Equipamentos modernos e funcionais como coifas, chapas, freezers, caldeiras, fornos e câmaras de resfriamento;",
                "Área de lavagem, onde são efetuadas as higienizações de todas as louças e utensílios que foram utilizados na preparação dos alimentos;"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-foreground font-medium">
                  <div className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/09-QualityCook-equipe01_1_-1-1.jpg"
                alt="Equipe Quality Cook"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/FOTO-19_-1.jpg"
                alt="Sede Quality Cook"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-8 text-center">Nossa Estrutura em Imagens</h3>
          <ImageGallery images={galleryImages} />
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-8 text-center">Nossos Diferenciais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Qualidade", text: "Todos os alimentos e cardápios são elaborados e inspecionados diariamente por Nutricionistas especializados em refeições coletivas." },
              { title: "Saúde e Segurança Alimentar", text: "Nosso serviço de hortifrúti é completo, recebemos todos os dias frutas, legumes e verduras dos melhores fornecedores." },
              { title: "Mão de Obra Especializada", text: "Contamos com um verdadeiro 'time' para realizar o preparo os alimentos, como Cozinheiros, Ajudantes de Cozinha, Estoquistas e Nutricionistas." },
              { title: "Custo Benefício", text: "As refeições coletivas são a melhor solução para alimentação corporativa, com ótimo custo benefício no comparativo a restaurantes comuns." },
            ].map((diff, idx) => (
              <div key={idx} className="bg-muted/50 p-6 rounded-xl border border-border">
                <h4 className="text-xl font-bold mb-3 text-primary">{diff.title}</h4>
                <p className="text-muted-foreground">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

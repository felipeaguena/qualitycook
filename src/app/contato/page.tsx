import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://qualitycook.com.br/wp-content/uploads/2020/12/008-1.jpg"
            alt="Contato Quality Cook"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-zinc-900/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Atendimento</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">Fale Conosco</h1>
          <div className="w-24 h-2 bg-primary rounded-full mx-auto mb-6 shadow-lg"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Estamos prontos para entender a sua necessidade e oferecer a melhor solução em alimentação corporativa.
          </p>
        </div>
      </div>

      {/* Cards de Contato Flutuantes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Telefone & WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Fale diretamente com nossa equipe comercial.</p>
            <p className="font-semibold text-lg text-foreground">(11) 94027-0478</p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">E-mail</h3>
            <p className="text-muted-foreground mb-4">Envie seu projeto ou solicite um orçamento detalhado.</p>
            <p className="font-semibold text-lg text-foreground">contato@qualitycook.com.br</p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Localização</h3>
            <p className="text-muted-foreground mb-4">Venha conhecer nossa matriz e infraestrutura.</p>
            <p className="font-semibold text-lg text-foreground">São Paulo, SP</p>
          </div>
        </div>
      </div>

      {/* Formulário e Imagem */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center text-primary font-semibold mb-2">
                <MessageSquare className="w-5 h-5 mr-2" />
                Envie uma Mensagem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Como podemos ajudar?</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Preencha os dados abaixo e retornaremos o mais breve possível com um projeto personalizado para sua empresa.
              </p>
            </div>

            <form className="space-y-6 bg-muted/30 p-8 rounded-3xl border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Nome Completo</label>
                  <Input id="name" placeholder="Seu nome" className="h-12 bg-background border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium ml-1">Empresa</label>
                  <Input id="company" placeholder="Nome da sua empresa" className="h-12 bg-background border-border/50" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">E-mail Corporativo</label>
                  <Input id="email" type="email" placeholder="seu@email.com.br" className="h-12 bg-background border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium ml-1">Telefone / WhatsApp</label>
                  <Input id="phone" placeholder="(11) 99999-9999" className="h-12 bg-background border-border/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium ml-1">Serviço de Interesse</label>
                <select id="service" className="w-full h-12 rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Selecione um serviço...</option>
                  <option value="in_company">Refeições In Company (Administração de Cozinha)</option>
                  <option value="transportada">Refeições Transportadas</option>
                  <option value="marmitex">Quality Marmitex</option>
                  <option value="outro">Outro / Dúvida</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Mensagem</label>
                <Textarea id="message" placeholder="Conte-nos um pouco sobre a sua necessidade (ex: número aproximado de refeições/dia)..." className="min-h-[150px] bg-background border-border/50 resize-none" />
              </div>

              <Button type="submit" className="w-full text-base h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Solicitar Orçamento Gratuito
              </Button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <Image 
                src="https://qualitycook.com.br/wp-content/uploads/2020/12/Quality-Cook-vertical-2-1.jpg"
                alt="Refeição Quality Cook"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center text-primary mb-2">
                    <Clock className="w-6 h-6 mr-3" />
                    <h4 className="font-bold text-lg text-foreground">Horário de Atendimento</h4>
                  </div>
                  <p className="text-muted-foreground font-medium pl-9">Segunda a Sexta: 09:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
              <Accordion className="w-full">
                <AccordionItem value="item-1" className="border-border/50">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">Onde a Quality Cook entrega as refeições?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Atendemos diversas regiões na Grande São Paulo e arredores. Entre em contato detalhando seu CEP para que possamos verificar a logística mais eficiente e garantir que a comida chegue com a temperatura e qualidade ideais.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-border/50">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">Como funciona a gestão de cozinha In-Company?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Assumimos 100% da operação do restaurante na sua empresa. Desenhamos o layout, instalamos os equipamentos, fornecemos os insumos diários e alocamos nossa equipe (nutricionistas e cozinheiros) para preparar tudo fresco no local.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-border/50">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">Os cardápios podem ser customizados?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Sim! O nosso grande diferencial é o atendimento personalizado. Nossos nutricionistas desenham cardápios de acordo com o perfil dos seus colaboradores e as necessidades calóricas da sua operação.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}

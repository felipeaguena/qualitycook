import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-muted/50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay">
         <Image 
          src="https://qualitycook.com.br/wp-content/uploads/2020/12/013-QualityCook-self01_1_-1.jpg"
          alt="Background Texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Fale Conosco</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8">
              ENTRE EM CONTATO CONOSCO E SOLICITE UM ORÇAMENTO. Estamos prontos para atender a sua empresa com a melhor qualidade e serviços personalizados de alimentação.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start bg-background/50 p-4 rounded-xl border border-border/50 shadow-sm backdrop-blur">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Endereço</h4>
                  <p className="text-muted-foreground">São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-start bg-background/50 p-4 rounded-xl border border-border/50 shadow-sm backdrop-blur">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 94027-0478</p>
                </div>
              </div>

              <div className="flex items-start bg-background/50 p-4 rounded-xl border border-border/50 shadow-sm backdrop-blur">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">E-mail</h4>
                  <p className="text-muted-foreground">contato@qualitycook.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Envie uma mensagem</h3>
            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Empresa</label>
                  <Input id="company" placeholder="Sua empresa" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <Input id="email" type="email" placeholder="seu@email.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                <Input id="phone" placeholder="(11) 99999-9999" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar?" className="min-h-[120px] bg-background/50" />
              </div>
              <Button type="submit" className="w-full text-base h-12 shadow-md hover:shadow-lg transition-shadow">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Fale Conosco</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8">
              ENTRE EM CONTATO CONOSCO E SOLICITE UM ORÇAMENTO. Estamos prontos para atender a sua empresa com a melhor qualidade.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">Endereço</h4>
                  <p className="text-muted-foreground">São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 94027-0478</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">E-mail</h4>
                  <p className="text-muted-foreground">contato@qualitycook.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Empresa</label>
                  <Input id="company" placeholder="Sua empresa" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar?" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full text-base h-12">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

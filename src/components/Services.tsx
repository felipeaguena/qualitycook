import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Truck, Package } from "lucide-react"

const services = [
  {
    title: "Refeições Locais",
    description: "A QUALITY COOK possui como solução corporativa o preparo de refeições “in company”. Ideal para empresas com estrutura de cozinha.",
    icon: Building2,
  },
  {
    title: "Refeições Transportadas",
    description: "As refeições são preparadas na Cozinha da QUALITY COOK por uma equipe de profissionais e acondicionadas em caixas térmicas “hot-box”.",
    icon: Truck,
  },
  {
    title: "Quality Marmitex",
    description: "Entrega de Refeições Completas para Empresas que não possuem espaço físico ou desejam praticidade.",
    icon: Package,
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Serviços</h2>
          <p className="text-xl text-muted-foreground">O que podemos fazer por sua empresa</p>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg border-muted">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 text-primary">
                  <service.icon className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

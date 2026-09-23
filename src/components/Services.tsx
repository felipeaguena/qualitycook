import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Truck, Package, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Refeições Locais",
    description:
      "Preparo de refeições 'in company'. Assumimos a gestão completa do seu restaurante corporativo na planta.",
    icon: Building2,
    image: "https://qualitycook.com.br/wp-content/uploads/2020/12/005-1.jpg",
    color: "bg-orange-500/10 text-orange-600",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    title: "Refeições Transportadas",
    description:
      "Alimentação preparada na Cozinha Central e transportada em 'hot-boxes' que mantêm a temperatura e a qualidade.",
    icon: Truck,
    image: "https://qualitycook.com.br/wp-content/uploads/2020/12/004-1.jpg",
    color: "bg-orange-500/10 text-orange-600",
    hoverBorder: "hover:border-primary/50",
  },
  {
    title: "Quality Marmitex",
    description:
      "Solução ideal para obras ou onde não há estrutura. Refeição nutritiva e balanceada em embalagens térmicas.",
    icon: Package,
    image:
      "https://qualitycook.com.br/wp-content/uploads/2020/12/012-QualityCook-marmitex01-1.jpg",
    color: "bg-orange-500/10 text-orange-600",
    hoverBorder: "hover:border-orange-500/50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Soluções Corporativas
          </h2>
          <p className="text-xl text-muted-foreground">
            O que podemos fazer por sua empresa
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/servicos"
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Card
                className={`h-full flex flex-col overflow-hidden pt-0 !pt-0 transition-all duration-300 hover:shadow-xl border-border ${service.hoverBorder}`}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pt-6 relative">
                  <div
                    className="absolute -top-10 left-6 z-20 bg-white opacity-100 text-primary group-hover:bg-primary group-hover:text-white p-4 rounded-full shadow-lg transition-colors duration-300"
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base text-muted-foreground mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                    Ver detalhes
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

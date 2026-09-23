import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A Quality Cook</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Inaugurada em 1994, a Quality Cook é uma Empresa Familiar que está atualmente em sua terceira geração de empreendedores. Atuando exclusivamente no atendimento e fornecimento de refeições corporativas para indústrias, fábricas, metalúrgicas e outros seguimentos empresariais de pequeno, médio e grande porte.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso compromisso é com a qualidade e o bem-estar dos colaboradores da sua empresa, oferecendo uma alimentação saudável, saborosa e balanceada.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Atendimento personalizado",
                "Cardápios balanceados",
                "Ingredientes selecionados",
                "Profissionais qualificados"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-foreground font-medium">
                  <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://qualitycook.com.br/wp-content/uploads/2020/12/09-QualityCook-equipe01_1_-1-1.jpg"
              alt="Equipe Quality Cook"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

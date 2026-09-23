import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1 rounded-md">
                <Utensils className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl text-white">QUALITY COOK</span>
            </Link>
            <p className="text-sm text-zinc-400">
              25 anos de experiência em refeições coletivas. Soluções em alimentação para a sua empresa.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/sobre-a-quality-cook" className="hover:text-primary transition-colors">A Quality Cook</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Refeições Locais</li>
              <li>Refeições Transportadas</li>
              <li>Quality Marmitex</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contatos</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>(11) 94027-0478</li>
              <li>contato@qualitycook.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Quality Cook. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">
            Desenvolvido com Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, Utensils } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const routes = [
  { href: "/", label: "Início" },
  { href: "/sobre-a-quality-cook", label: "A Quality Cook" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Using text logo if image is hard to load or just standard UI */}
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <Utensils className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">QUALITY COOK</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <Link href="https://wa.me/5511940270478" target="_blank" className={buttonVariants()}>
            Orçamento
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {route.label}
                </Link>
              ))}
              <Link href="https://wa.me/5511940270478" target="_blank" className={cn(buttonVariants(), "w-full mt-4")}>
                Orçamento
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

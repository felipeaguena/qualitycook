import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

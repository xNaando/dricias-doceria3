import { MessageCircle } from 'lucide-react'
import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import { buildWhatsAppUrl } from './lib/site'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      <a
        href={buildWhatsAppUrl('Olá! Gostaria de fazer um pedido/orçamento.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 sm:px-5 py-3 text-white shadow-xl hover:bg-green-600 transition-colors"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold text-sm sm:text-base">WhatsApp</span>
      </a>
    </div>
  )
}

export default App

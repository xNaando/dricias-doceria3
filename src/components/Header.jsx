import { useState } from 'react'
import { Cake, Menu, X } from 'lucide-react'
import { buildWhatsAppUrl, site } from '../lib/site'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#products' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <Cake className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-serif font-bold text-gradient">{site.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de fazer um pedido/orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Pedir no WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={buildWhatsAppUrl('Olá! Gostaria de fazer um pedido/orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

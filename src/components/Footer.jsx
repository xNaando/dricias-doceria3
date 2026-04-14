import { Cake, Heart, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl, site } from '../lib/site'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cake className="w-8 h-8 text-primary-400" />
              <span className="text-xl sm:text-2xl font-serif font-bold">{site.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Confeitaria artesanal para transformar aniversários, eventos e presentes em memórias doces.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary-400 fill-primary-400" />
              <span>em MG</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Encomendas</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Bolos</li>
              <li className="text-gray-400">Doces</li>
              <li className="text-gray-400">Eventos</li>
              <li className="text-gray-400">Presentes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">{site.addressLine}</li>
              <li className="text-gray-400">{site.regionLine}</li>
              <li>
                <a href={`tel:+${site.whatsappNumber}`} className="text-gray-400 hover:text-white transition-colors">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>

            <a
              href={buildWhatsAppUrl('Olá! Quero fazer um pedido/orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex justify-center items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

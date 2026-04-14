import { Cake, CandyCane, Gift, Sparkles, UtensilsCrossed, Wine } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/site'

export default function Products() {
  const categories = [
    {
      icon: Cake,
      title: 'Bolos',
      description: 'Bolos para aniversário, comemorações e datas especiais (decorados ou caseiros).',
      items: ['Aniversários', 'Bolos temáticos', 'Bolos caseiros', 'Tamanhos sob medida']
    },
    {
      icon: CandyCane,
      title: 'Doces',
      description: 'Doces tradicionais e gourmet para matar a vontade e completar a mesa.',
      items: ['Brigadeiros', 'Beijinhos', 'Docinhos variados', 'Caixinhas para presente']
    },
    {
      icon: Wine,
      title: 'Sobremesas',
      description: 'Opções para compartilhar em família ou levar para eventos.',
      items: ['Tortas', 'Pudins', 'Doces porções', 'Encomendas personalizadas']
    },
    {
      icon: UtensilsCrossed,
      title: 'Eventos',
      description: 'Encomendas para festas, com opções de combos e organização por quantidade.',
      items: ['Aniversários', 'Chá de bebê', 'Confraternizações', 'Mesa de doces']
    },
    {
      icon: Gift,
      title: 'Presentes',
      description: 'Kits e lembranças para surpreender com um toque doce.',
      items: ['Kits para datas especiais', 'Lembrancinhas', 'Embalagens caprichadas', 'Mensagem personalizada']
    },
    {
      icon: Sparkles,
      title: 'Personalizados',
      description: 'Tema, cores, acabamento e detalhes combinados direto no WhatsApp.',
      items: ['Modelos sob pedido', 'Combos sob medida', 'Adaptações', 'Orçamento rápido']
    }
  ]

  return (
    <section id="products" className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Produtos e encomendas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            O que a Drícia&apos;s Doceria pode criar para você
          </h2>
          <p className="text-lg text-gray-600">
            Escolha uma categoria e peça um orçamento pelo WhatsApp. A personalização acontece nos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <category.icon className="w-8 h-8 text-primary-600" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{category.title}</h3>

              <p className="text-gray-600 mb-6">{category.description}</p>

              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(`Olá! Quero orçamento para: ${category.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3"
              >
                <span>Pedir orçamento</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={buildWhatsAppUrl('Olá! Quero um orçamento. Pode me ajudar?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Solicitar orçamento</span>
          </a>
        </div>
      </div>
    </section>
  )
}

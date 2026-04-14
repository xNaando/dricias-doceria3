import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/site'

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Bolos decorados',
      category: 'Festas',
      imageUrl: 'https://picsum.photos/id/1080/1200/1200',
    },
    {
      title: 'Doces para mesa',
      category: 'Eventos',
      imageUrl: 'https://picsum.photos/id/292/1200/1200',
    },
    {
      title: 'Caixinhas presente',
      category: 'Presentes',
      imageUrl: 'https://picsum.photos/id/431/1200/1200',
    },
    {
      title: 'Bolos caseiros',
      category: 'Dia a dia',
      imageUrl: 'https://picsum.photos/id/312/1200/1200',
    },
    {
      title: 'Sobremesas',
      category: 'Família',
      imageUrl: 'https://picsum.photos/id/425/1200/1200',
    },
    {
      title: 'Temas personalizados',
      category: 'Sob encomenda',
      imageUrl: 'https://picsum.photos/id/488/1200/1200',
    },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Inspirações para sua próxima encomenda
          </h2>
          <p className="text-lg text-gray-600">
            Um pouquinho do estilo e do cuidado em cada detalhe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'https://picsum.photos/seed/doceria-fallback/1200/1200'
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-primary-200">{item.category}</span>
                <h3 className="text-xl font-serif font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={buildWhatsAppUrl('Olá! Queria ver mais fotos e opções de encomenda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pedir catálogo no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

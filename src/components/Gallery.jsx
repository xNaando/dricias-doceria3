import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/site'

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Bolos decorados',
      category: 'Festas',
      imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Doces para mesa',
      category: 'Eventos',
      imageUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Caixinhas presente',
      category: 'Presentes',
      imageUrl: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Bolos caseiros',
      category: 'Dia a dia',
      imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Sobremesas',
      category: 'Família',
      imageUrl: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Temas personalizados',
      category: 'Sob encomenda',
      imageUrl: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Inspirações para sua próxima encomenda
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Um pouquinho do estilo e do cuidado em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
                  event.currentTarget.src = 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1200'
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white translate-y-0 sm:transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs sm:text-sm font-medium text-primary-200">{item.category}</span>
                <h3 className="text-base sm:text-xl font-serif font-bold mt-1 leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={buildWhatsAppUrl('Olá! Queria ver mais fotos e opções de encomenda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pedir catálogo no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ana Clara Souza',
      location: 'Santa Luzia • MG',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: '“Atendimento impecável e os docinhos estavam lindos. Deu vontade de pedir de novo no mesmo dia!”',
    },
    {
      name: 'Bruno Almeida',
      location: 'Santa Luzia • MG',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: '“Atendimento rápido no WhatsApp e entrega super bem embalada. Sabor de confeitaria de verdade.”',
    },
    {
      name: 'Camila Fernandes',
      location: 'Belo Horizonte • MG',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: '“Os docinhos fizeram sucesso na festa. Todo mundo elogiou a apresentação e o equilíbrio do doce.”',
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            O que as pessoas dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Carinho no atendimento, capricho no acabamento e sabor que conquista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={`${t.name}-${t.text}`}
              className="group bg-white/85 backdrop-blur rounded-2xl p-5 sm:p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatarUrl}
                  alt={`Foto de ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-200"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{t.name}</div>
                  <div className="text-sm text-gray-600 truncate">{t.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

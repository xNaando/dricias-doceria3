import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Cliente (Google)',
      text: '“Doceria incrível!”',
    },
    {
      name: 'Cliente',
      text: '“Atendimento rápido no WhatsApp e tudo chegou impecável. Muito capricho!”',
    },
    {
      name: 'Cliente',
      text: '“Os docinhos fizeram sucesso na festa. Sabor e apresentação perfeitos.”',
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
            <div key={t.text} className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t.text}</p>
              <div className="mt-6 font-semibold text-gray-900">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

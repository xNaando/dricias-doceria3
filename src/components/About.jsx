import { Award, Clock, Heart, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Feito com carinho',
      description: 'Receitas artesanais e cuidado em cada etapa, do preparo à finalização.'
    },
    {
      icon: Award,
      title: 'Ingredientes selecionados',
      description: 'Qualidade e sabor em primeiro lugar para entregar uma experiência marcante.'
    },
    {
      icon: Users,
      title: 'Personalização',
      description: 'Você escolhe tema, cores e preferências. A gente transforma em uma criação linda e gostosa.'
    },
    {
      icon: Clock,
      title: 'Compromisso com prazo',
      description: 'Organização e comunicação para que sua encomenda chegue do jeito combinado.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
                Sobre a doceria
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
                Confeitaria artesanal para momentos especiais
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              A Drícia&apos;s Doceria nasceu com um propósito simples: transformar ocasiões em memórias doces. Aqui,
              cada encomenda é feita sob medida, com atenção ao que você imagina e ao que seu evento precisa.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Seja para aniversários, comemorações ou presentes, a proposta é entregar sabor, acabamento caprichado e
              uma experiência leve do começo ao fim: você chama no WhatsApp, define os detalhes e recebe tudo com
              segurança.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent-100 to-primary-100">
                <img
                  src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80"
                  alt="Confeitaria artesanal"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

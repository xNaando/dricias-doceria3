import { ArrowRight, Heart, MapPin, Star } from 'lucide-react'
import { buildWhatsAppUrl, site } from '../lib/site'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-primary pt-16 sm:pt-20 overflow-hidden">
      <div className="absolute top-12 right-0 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-12 left-0 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent-200 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center sm:text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
              <div className="sm:hidden inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white px-3 py-1 text-sm text-gray-700 shadow-sm">
                <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
                <span className="font-semibold">5.0</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">Avaliações</span>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                </div>
                <span className="text-gray-600 font-medium">Avaliações 5 estrelas</span>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white px-3 py-1 text-sm text-gray-700 shadow-sm">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="font-medium">{site.regionLine}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight">
              Doces que
              <span className="text-gradient block">encantam</span> em cada detalhe
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Bolos, doces e confeitaria artesanal para aniversários, eventos e presentes. Atendimento rápido e
              personalizado pelo WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href={buildWhatsAppUrl('Olá! Gostaria de fazer um pedido/orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Fazer pedido</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#products" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Ver produtos</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 sm:pt-4">
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-white p-3 sm:p-4 shadow-sm">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-600">Artesanal</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">feito com carinho</div>
              </div>
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-white p-3 sm:p-4 shadow-sm">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-600">Sob encomenda</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">do jeitinho que você quer</div>
              </div>
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-white p-3 sm:p-4 shadow-sm">
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-600">Entrega</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">retirada/entrega</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100">
                <img
                  src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=1400&q=80"
                  alt="Bolo decorado"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="hidden sm:block absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Feito com amor</div>
                  <div className="text-sm text-gray-600">100% artesanal</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-600 fill-accent-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Atendimento</div>
                  <div className="text-sm text-gray-600">rápido no WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

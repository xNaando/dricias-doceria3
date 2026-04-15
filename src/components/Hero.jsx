import { ArrowRight, Heart, MapPin, Star } from 'lucide-react'
import { buildWhatsAppUrl, site } from '../lib/site'

export default function Hero() {
  const videoSrc = `${import.meta.env.BASE_URL}hero-background.mp4`

  return (
    <section
      id="home"
      className="relative h-[100svh] supports-[height:100dvh]:h-[100dvh] sm:min-h-screen flex items-center box-border pt-16 sm:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/65 pointer-events-none" />

      <div className="absolute top-12 right-0 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-12 left-0 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent-200 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center sm:text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
              <div className="sm:hidden mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white px-3 py-1 text-sm text-gray-700 shadow-sm">
                <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
                <span className="font-semibold">5.0</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">Avaliações</span>
              </div>

              <div className="hidden sm:flex items-center gap-3 rounded-full bg-white/70 backdrop-blur border border-white px-4 py-2 text-sm text-gray-700 shadow-sm">
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

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              Doces que
              <span className="text-gradient block">encantam</span> em cada detalhe
            </h1>

            <p className="text-base sm:text-xl text-white/85 leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
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
              <div>
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">Artesanal</div>
                <div className="text-xs sm:text-sm text-white/85 mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">feito com carinho</div>
              </div>
              <div>
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">Sob encomenda</div>
                <div className="text-xs sm:text-sm text-white/85 mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">do jeitinho que você quer</div>
              </div>
              <div>
                <div className="text-base sm:text-xl lg:text-3xl font-bold text-primary-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">Entrega</div>
                <div className="text-xs sm:text-sm text-white/85 mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">retirada/entrega</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-none sm:rounded-3xl overflow-hidden shadow-2xl">
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

import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { buildMapsEmbedUrl, buildMapsUrl, buildWhatsAppUrl, site } from '../lib/site'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Peça pelo WhatsApp
          </h2>
          <p className="text-lg text-gray-600">
            Encomendas e orçamentos com atendimento direto e rápido.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Informações
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      {site.addressLine}
                      <br />
                      {site.regionLine}
                    </p>
                    <a
                      href={buildMapsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone/WhatsApp</h4>
                    <p className="text-gray-600">
                      <a
                        href={`tel:+${site.whatsappNumber}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {site.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horários</h4>
                    <div className="mt-2 space-y-2 text-gray-700">
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>domingo</span>
                        <span>Fechado</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>segunda-feira</span>
                        <span>13:00-18:00</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>terça-feira</span>
                        <span>13:00-18:00</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>quarta-feira</span>
                        <span>13:00-18:00</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>quinta-feira</span>
                        <span>13:00-18:00</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>sexta-feira</span>
                        <span>13:00-18:00</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-x-6">
                        <span>sábado</span>
                        <span>12:00-15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Como encomendar
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-600">
                    Chame no WhatsApp e conte o que você quer (bolo, doces, kit, evento).
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-600">
                    Informe data, quantidade, tema e preferências. Receba o orçamento e as opções.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-600">
                    Confirme o pedido e combine retirada/entrega. Pronto: é só aproveitar.
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl('Olá! Quero fazer um pedido/orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 mt-8"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
            <div className="min-h-[420px] lg:flex-1">
              <iframe
                title="Mapa"
                src={buildMapsEmbedUrl()}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6">
              <a
                href={buildWhatsAppUrl('Olá! Gostaria de fazer um pedido/orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Peça pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ChevronDown } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/site'

export default function FAQ() {
  const items = [
    {
      q: 'Como faço um pedido?',
      a: 'Chame no WhatsApp, informe a data, quantidade, preferência e o tipo de produto (bolo, doces, kit). A confirmação e os detalhes ficam registrados na conversa para evitar erros.',
    },
    {
      q: 'Com quanta antecedência devo pedir?',
      a: 'Para datas concorridas, o ideal é pedir o quanto antes. Para encomendas menores, dá para avaliar a disponibilidade no dia. No WhatsApp você recebe a orientação certa.',
    },
    {
      q: 'Vocês entregam ou é retirada?',
      a: 'Entrega e retirada podem ser combinadas conforme o pedido e a região. Chame no WhatsApp e informe seu bairro para confirmar as opções.',
    },
    {
      q: 'Quais formas de pagamento?',
      a: 'As opções de pagamento são informadas no momento do pedido. Se preferir, pergunte no WhatsApp e a gente te passa tudo certinho.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">
            Dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Se a sua dúvida não estiver aqui, chama no WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-gray-900">
                <span>{item.q}</span>
                <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={buildWhatsAppUrl('Olá! Tenho uma dúvida sobre uma encomenda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}


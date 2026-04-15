export const site = {
  name: "Drícia's Doceria",
  whatsappNumber: "5531984374621",
  phoneDisplay: "(31) 98437-4621",
  addressLine: "R. Francisco Gerônimo da Silva, 303",
  regionLine: "Santa Luzia e região (MG)",
}

export function buildWhatsAppUrl(message) {
  const base = `https://wa.me/${site.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function buildMapsUrl() {
  const query = `${site.addressLine}, MG`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function buildMapsEmbedUrl() {
  const query = `${site.addressLine}, MG`
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

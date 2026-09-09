const WHATSAPP_NUMBER = '5491123391943'

export function BuyModal({ product, onClose }) {
  if (!product) return null

  const message = `Hola, quiero consultar por este producto:\n\n*${product.name}*\nCategoría: ${product.category}\nPrecio: ${product.price}`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <div className="buy-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="buy-modal" role="dialog" aria-modal="true" aria-labelledby="buy-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="buy-modal-close" type="button" aria-label="Cerrar" onClick={onClose}>×</button>
        <p className="eyebrow">Comprar por WhatsApp</p>
        <h2 id="buy-modal-title">{product.name}</h2>
        <p className="buy-modal-price">{product.price}</p>
        <p>Te vamos a redirigir a WhatsApp para confirmar disponibilidad, envío o retiro con Andre.</p>
        <a className="buy-modal-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Continuar por WhatsApp <span>→</span></a>
      </section>
    </div>
  )
}

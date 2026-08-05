const benefits = [
  { symbol: '✦', title: 'Elegido con intención', text: 'Productos seleccionados para acompañar tus momentos de calma.' },
  { symbol: '⌂', title: 'Para cada rincón', text: 'Detalles que transforman tu casa en un espacio más propio.' },
  { symbol: '♡', title: 'Atención cercana', text: 'Escribinos y te ayudamos a encontrar el objeto indicado.' },
]

export function Benefits({ items = benefits }) {
  return (
    <section className="benefits" aria-label="Beneficios de Naturalian">
      {items.map((item) => <article className="benefit" key={item.title}><span>{item.symbol}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
    </section>
  )
}

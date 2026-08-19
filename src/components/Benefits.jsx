const benefits = [
  { symbol: '✦', title: 'Elegido con intención', text: 'Productos seleccionados para acompañar tus momentos de calma.' },
  { symbol: '⌂', title: 'Calidad y dedicación', text: 'Elegimos cada pieza con cuidado, buscando que sume belleza, armonía y calidez a tus espacios.' },
  { symbol: '♡', title: 'Atención personalizada y cercana', text: 'Escribinos y te ayudamos a encontrar el objeto indicado para vos.' },
]

export function Benefits({ items = benefits }) {
  return (
    <section className="benefits" aria-labelledby="beneficios-title">
      <div className="benefits-content">
        <p className="eyebrow">Natural.IAN</p>
        <h2 className="benefits-title" id="beneficios-title">Beneficios</h2>
        <div className="benefits-grid">
          {items.map((item) => <article className="benefit" key={item.title}><span>{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>
  )
}

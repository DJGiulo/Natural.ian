const benefits = [
  { symbol: '✦', title: 'Elegido con intención', text: 'Productos seleccionados para acompañar tus momentos de calma.' },
  { symbol: '⌂', title: 'Calidad y dedicación', text: 'Elegimos cada pieza con cuidado, buscando que sume belleza, armonía y calidez a tus espacios.' },
  { symbol: '♡', title: 'Atención personalizada y cercana', text: 'Escribinos y te ayudamos a encontrar el objeto indicado para vos.' },
]

export function Benefits({ items = benefits }) {
  return <section className="benefits" aria-label="Beneficios de Naturalian">{items.map((item) => <article className="benefit" key={item.title}><span>{item.symbol}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</section>
}

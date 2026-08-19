export function Ritual({ image }) {
  return <section className="ritual" id="rituales"><div className="ritual-image" role="img" aria-label="Sahumerios y palo santo" style={{ backgroundImage: `url(${image})` }} /><div className="ritual-copy">
    <p className="eyebrow">Un minuto para vos</p>
    <h2>Encendé una intención.</h2>
    <p>Abrí una ventana, elegí un aroma y dejá que el humo recorra tu espacio. A veces un gesto mínimo alcanza para cambiar el ritmo del día.</p>
    <a className="text-link" href="#catalogo">Conocé nuestros sahumerios <span>→</span></a></div></section>
}

//Por ahora este no lo usamos, pero lo dejamos por si queremos usarlo en el futuro
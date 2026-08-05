export function Hero({ image, onCtaClick }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Objetos para habitar despacio</p>
        <h1>Pequeños rituales,<br /><em>grandes pausas.</em></h1>
        <p className="hero-text">Sahumerios, budas y objetos elegidos para transformar tus espacios cotidianos en un refugio.</p>
        <button className="button button-dark" type="button" onClick={onCtaClick}>Explorar la tienda <span>→</span></button>
      </div>
      <div className="hero-art" role="img" aria-label="Figuras de budas y Ganesha" style={{ backgroundImage: `url(${image})` }}>
        <p className="hero-note">Respirá<br />lo simple</p>
      </div>
    </section>
  )
}

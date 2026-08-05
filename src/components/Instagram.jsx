export function Instagram({ images, handle = '@andre.vaninasaladino', profileUrl = 'https://www.instagram.com/andre.vaninasaladino/' }) {
  return <section className="instagram" id="instagram"><div><p className="eyebrow">Comunidad Natural</p><h2>Seguinos en Instagram</h2><a href={profileUrl} target="_blank" rel="noreferrer" aria-label={`Abrir el Instagram de ${handle} en una pestaña nueva`}>{handle} <span>→</span></a></div><div className="instagram-grid">{images.map((item) => <img key={item.id} src={item.image} alt={item.name} />)}</div></section>
}

export function Instagram({ images, handle = '@naturalian' }) {
  return <section className="instagram" id="instagram"><div><p className="eyebrow">Comunidad Natural</p><h2>Seguinos en Instagram</h2><a href="#instagram">{handle} <span>→</span></a></div><div className="instagram-grid">{images.map((item) => <img key={item.id} src={item.image} alt={item.name} />)}</div></section>
}

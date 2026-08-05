export function About({ title = 'Creemos en los objetos que invitan a volver a vos.', description = 'Cada pieza fue pensada para acompañar momentos de calma, intención y conexión. No se trata de hacer más, sino de sentir mejor.' }) {
  return <section className="intro" id="nosotros"><p className="eyebrow">Naturalmente presente</p><h2>{title}</h2><p>{description}</p></section>
}

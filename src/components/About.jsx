export function About({ 
  title = 'Sobre nosotros', 
  description = 'En NaturalIAN creemos que el bienestar comienza en los pequeños detalles. Nuestra selección de productos busca acompañarte en momentos de relajación, meditación y conexión con la naturaleza. ' }) {
  return <section className="intro" id="nosotros">
    <p className="eyebrow">Naturalmente presente</p>
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
}

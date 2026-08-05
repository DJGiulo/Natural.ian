export function Contacto({ isSubscribed, onSubscribe }) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubscribe()
  }

  return (
    <section className="newsletter" aria-labelledby="contacto-title">
      <p className="eyebrow">Correspondencia espiritual</p>
      <h2 id="contacto-title">Recibí las novedades en tu correo.</h2>
      {isSubscribed ? (
        <p className="subscription-message">¡Gracias! Muy pronto vas a recibir novedades.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="email">Tu correo electrónico</label>
          <input id="email" type="email" placeholder="Tu correo electrónico" required />
          <button className="button button-light" type="submit">Suscribirme <span>→</span></button>
        </form>
      )}
    </section>
  )
}

import { useState } from 'react'
import { products } from './data/products'
import './App.css'

const categories = ['Todos', 'Sahumerios', 'Figuras', 'Aromas', 'Deco']

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [cart, setCart] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleProducts = activeCategory === 'Todos'
    ? products
    : products.filter((product) => product.category === activeCategory)
  const heroImage = products.find((product) => product.id === 7)?.image
  const ritualImage = products.find((product) => product.id === 13)?.image

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  const scrollToCatalog = () => {
    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Naturalian, ir al inicio">
          <span className="brand-mark">✦</span>
          <span>NATURALIAN</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Navegación principal">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <button type="button" onClick={scrollToCatalog}>Tienda</button>
          <a href="#rituales" onClick={() => setMenuOpen(false)}>Rituales</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
        </nav>

        <button className="cart-button" type="button" aria-label="Ver carrito">
          Bolsa <span>{cart.length}</span>
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Objetos para habitar despacio</p>
          <h1>Pequeños rituales,<br /><em>grandes pausas.</em></h1>
          <p className="hero-text">
            Sahumerios, budas y objetos elegidos para transformar tus espacios
            cotidianos en un refugio.
          </p>
          <button className="button button-dark" type="button" onClick={scrollToCatalog}>
            Explorar la tienda <span>→</span>
          </button>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Figuras de budas y Ganesha"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="sun" />
          <div className="arch" />
          <div className="buddha">☸</div>
          <span className="leaf leaf-one">❧</span>
          <span className="leaf leaf-two">❧</span>
          <p className="hero-note">Respirá<br />lo simple</p>
        </div>
      </section>

      <section className="intro" id="nosotros">
        <p className="eyebrow">Naturalmente presente</p>
        <h2>Creemos en los objetos que invitan a volver a vos.</h2>
        <p>
          Cada pieza fue pensada para acompañar momentos de calma, intención y conexión.
          No se trata de hacer más, sino de sentir mejor.
        </p>
      </section>

      <section className="catalog" id="catalogo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selección Natural</p>
            <h2>Para tu ritual diario</h2>
          </div>
          <div className="filters" aria-label="Filtrar productos">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image ${product.tone}`}>
                <img src={product.image} alt={product.name} />
                {product.tag && <span className="tag">{product.tag}</span>}
                <button type="button" onClick={() => addToCart(product)} aria-label={`Agregar ${product.name} a la bolsa`}>
                  +
                </button>
              </div>
              <div className="product-info">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ritual" id="rituales">
        <div
          className="ritual-image"
          role="img"
          aria-label="Sahumerios y palo santo"
          style={{ backgroundImage: `url(${ritualImage})` }}
        />
        <div className="ritual-copy">
          <p className="eyebrow">Un minuto para vos</p>
          <h2>Encendé una intención.</h2>
          <p>
            Abrí una ventana, elegí un aroma y dejá que el humo recorra tu espacio.
            A veces un gesto mínimo alcanza para cambiar el ritmo del día.
          </p>
          <a className="text-link" href="#catalogo">Conocé nuestros sahumerios <span>→</span></a>
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">Correspondencia lenta</p>
        <h2>Un poco de calma en tu correo.</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="email">Tu correo electrónico</label>
          <input id="email" type="email" placeholder="Tu correo electrónico" required />
          <button className="button button-light" type="submit">Suscribirme <span>→</span></button>
        </form>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span className="brand-mark">✦</span><span>NATURALIAN</span></a>
        <p>Hecho con intención · Buenos Aires</p>
        <div><a href="#inicio">Instagram</a><a href="#inicio">Contacto</a></div>
      </footer>
    </main>
  )
}

export default App

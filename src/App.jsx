import { useState } from 'react'
import { About } from './components/about/About'
import { Benefits } from './components/benefits/Benefits'
import { Categories } from './components/categories/Categories'
import { Hero } from './components/hero/Hero'
import { Instagram } from './components/instagram/Instagram'
import { Container } from './components/layout/Container'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Newsletter } from './components/newsletter/Newsletter'
import { ProductGrid } from './components/products/ProductGrid'
import { Ritual } from './components/ritual/Ritual'
import { categories } from './data/categories'
import { products } from './data/products'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [cart, setCart] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const visibleProducts = activeCategory === 'Todos'
    ? products
    : products.filter((product) => product.category === activeCategory)

  const heroImage = products.find((product) => product.id === 7)?.image
  const ritualImage = products.find((product) => product.id === 13)?.image
  const instagramImages = products.slice(0, 4)

  function closeMenu() {
    setMenuOpen(false)
  }

  function scrollToCatalog() {
    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  function subscribe() {
    setIsSubscribed(true)
  }

  return (
    <Container as="main">
      <Navbar
        cartCount={cart.length}
        isMenuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onNavigate={closeMenu}
        onShopClick={scrollToCatalog}
      />

      <Hero image={heroImage} onCtaClick={scrollToCatalog} />
      <Benefits />
      <About />

      <section className="catalog" id="catalogo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selección Natural</p>
            <h2>Para tu ritual diario</h2>
          </div>
          <Categories
            categories={categories}
            selectedCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
        <ProductGrid products={visibleProducts} onAddToCart={addToCart} />
      </section>

      <Ritual image={ritualImage} />
      <Instagram images={instagramImages} />
      <Newsletter isSubscribed={isSubscribed} onSubscribe={subscribe} />
      <Footer onNavigate={closeMenu} />
    </Container>
  )
}

export default App

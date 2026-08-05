import { useState } from 'react'
import { Container } from './components/layout/Container'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Home } from './pages/home'
import { Productos } from './pages/productos'
import { products } from './data/products'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [cart, setCart] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const heroImage = products.find((product) => product.id === 7)?.image
  const ritualImage = products.find((product) => product.id === 13)?.image
  const instagramImages = products.slice(0, 4)

  function closeMenu() {
    setMenuOpen(false)
  }

  function scrollToCatalog() {
    setCurrentPage('productos')
    closeMenu()
  }

  function goHome(sectionId = 'inicio') {
    setCurrentPage('home')
    closeMenu()
    window.setTimeout(() => document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' }), 0)
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
        onHomeClick={() => goHome()}
        onProductsClick={scrollToCatalog}
        onAboutClick={() => goHome('nosotros')}
      />

      {currentPage === 'home' ? (
        <Home
          heroImage={heroImage}
          ritualImage={ritualImage}
          instagramImages={instagramImages}
          isSubscribed={isSubscribed}
          onProductsClick={scrollToCatalog}
          onSubscribe={subscribe}
        />
      ) : (
        <Productos
          activeCategory={activeCategory}
          onAddToCart={addToCart}
          onSelectCategory={setActiveCategory}
        />
      )}
      <Footer onNavigate={closeMenu} />
    </Container>
  )
}

export default App

import { useState } from 'react'
import { Container } from './components/layout/Container'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Home } from './pages/home'
import { Productos } from './pages/productos'
import { products } from './data/products'
import { categoryId } from './utils/categoryId'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const heroImage = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85'
  const ritualImage = products.find((product) => product.id === 13)?.image
  const instagramImages = products.slice(0, 4)

  function closeMenu() {
    setMenuOpen(false)
  }

  function scrollToCatalog(category) {
    setCurrentPage('productos')
    closeMenu()
    const targetId = category ? categoryId(category) : 'catalogo'
    window.setTimeout(() => document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: 'smooth' }), 0)
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
          onCategoryClick={scrollToCatalog}
          onSubscribe={subscribe}
        />
      ) : (
        <Productos
          onAddToCart={addToCart}
        />
      )}
      <Footer onNavigate={closeMenu} />
    </Container>
  )
}

export default App

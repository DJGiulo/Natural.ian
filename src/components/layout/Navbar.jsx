export function Navbar({ cartCount, isMenuOpen, onMenuToggle, onNavigate, onShopClick }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Naturalian, ir al inicio" onClick={onNavigate}>
        <span className="brand-mark">✦</span><span>NATURALIAN</span>
      </a>
      <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={isMenuOpen} onClick={onMenuToggle}>☰</button>
      <nav className={isMenuOpen ? 'navigation open' : 'navigation'} aria-label="Navegación principal">
        <a href="#inicio" onClick={onNavigate}>Inicio</a>
        <button type="button" onClick={onShopClick}>Tienda</button>
        <a href="#rituales" onClick={onNavigate}>Rituales</a>
        <a href="#nosotros" onClick={onNavigate}>Nosotros</a>
      </nav>
      <button className="cart-button" type="button" aria-label={`Ver bolsa con ${cartCount} productos`}>
        Bolsa <span>{cartCount}</span>
      </button>
    </header>
  )
}

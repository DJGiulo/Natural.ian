export function Navbar({ isMenuOpen, onMenuToggle, onNavigate, onHomeClick, onProductsClick, onAboutClick }) {
  return (
    <header className="site-header sticky-top">
      <a className="brand" href="#inicio" aria-label="Naturalian, ir al inicio" onClick={onNavigate}>
        <span className="brand-mark">NATURAL.IAN.</span>
      </a>
      <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={isMenuOpen} onClick={onMenuToggle}>☰</button>
      <nav className={isMenuOpen ? 'navigation open' : 'navigation'} aria-label="Navegación principal">
        <button type="button" onClick={onHomeClick}>Inicio</button>
        <button type="button" onClick={onProductsClick}>Productos</button>
        <button type="button" onClick={onAboutClick}>Nosotros</button>
      </nav>
    </header>
  )
}

import logo from '../../assets/LogoNatural.IAN.png'

export function Navbar({ isMenuOpen, onMenuToggle, onNavigate, onHomeClick, onProductsClick, onAboutClick }) {
  return (
    <header className="site-header sticky-top">
      <a className="brand" href="#inicio" aria-label="Natural.ian, ir al inicio" onClick={onNavigate}>
        <img className="brand-logo" src={logo} alt="Natural.IAN" />
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

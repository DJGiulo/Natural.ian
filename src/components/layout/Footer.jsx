export function Footer({ onNavigate }) {
  return (
    <footer>
      <a className="brand" href="#inicio" onClick={onNavigate}><span className="brand-mark">✦</span><span>NATURALIAN</span></a>
      <p>Hecho con intención · Buenos Aires</p>
      <div><a href="#instagram">Instagram</a><a href="mailto:hola@naturalian.com">Contacto</a></div>
    </footer>
  )
}

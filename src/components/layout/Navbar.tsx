const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          Portafolio
        </a>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

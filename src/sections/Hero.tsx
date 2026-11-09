import { profile } from '../data/profile'
import Sun from '../components/ui/Sun'

// TODO: cambia este destino cuando tengas la página a la que redirigirá el sol
const SUN_HREF = '#about'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Sun href={SUN_HREF} label="Explorar" />
      <div className="container hero__content">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <a href="#projects" className="button">
          Ver proyectos
        </a>
      </div>
    </section>
  )
}

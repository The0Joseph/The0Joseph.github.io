import sunImg from '../../assets/images/sun-center.jpg'

interface SunProps {
  /** Destino al hacer clic en el sol */
  href: string
  label?: string
}

export default function Sun({ href, label = 'Explorar' }: SunProps) {
  return (
    <a href={href} className="sun" aria-label={label} title={label}>
      {/* Capas: de la más externa a la más interna */}
      <span className="sun__corona sun__corona--outer" aria-hidden="true" />
      <span className="sun__corona sun__corona--inner" aria-hidden="true" />
      <span className="sun__glow" aria-hidden="true" />
      <img src={sunImg} className="sun__surface" alt="" draggable={false} />
    </a>
  )
}

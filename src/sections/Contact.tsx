import Section from '../components/ui/Section'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Section id="contact" title="Contacto">
      <p>¿Tienes un proyecto en mente o quieres conversar? Escríbeme.</p>
      <a href={`mailto:${profile.email}`} className="button">
        {profile.email}
      </a>
      <ul className="socials">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

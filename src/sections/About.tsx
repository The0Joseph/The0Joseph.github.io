import Section from '../components/ui/Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="Sobre mí">
      <p>{profile.summary}</p>
    </Section>
  )
}

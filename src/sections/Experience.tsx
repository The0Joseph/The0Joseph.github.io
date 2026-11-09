import Section from '../components/ui/Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Experiencia">
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="timeline__item">
            <h3>
              {item.position} · {item.company}
            </h3>
            <span className="timeline__period">{item.period}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

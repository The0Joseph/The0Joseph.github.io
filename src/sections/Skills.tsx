import Section from '../components/ui/Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <div className="grid">
        {skills.map((group) => (
          <div key={group.category} className="card">
            <h3>{group.category}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

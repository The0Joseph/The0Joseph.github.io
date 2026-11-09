import Section from '../components/ui/Section'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Proyectos">
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

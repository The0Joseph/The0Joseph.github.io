import type { Project } from '../../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      {project.image && <img src={project.image} alt={project.title} className="card__image" />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="card__links">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Código
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  )
}

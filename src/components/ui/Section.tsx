import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

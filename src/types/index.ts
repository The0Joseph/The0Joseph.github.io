export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  role: string
  summary: string
  email: string
  location: string
  socials: SocialLink[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  repoUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
}

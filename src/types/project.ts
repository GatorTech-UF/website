export interface Contributor {
    name: string
    role: string
    github: string
    avatar: string
  }
  
  export interface Technology {
    name: string
    icon: string
  }
  
  export interface Project {
    id: string
    name: string
    description: string
    image: string
    github: string
    contributors: Contributor[]
    technologies: Technology[]
    status: "current" | "past"
    goals?: string[]
  }
  
  
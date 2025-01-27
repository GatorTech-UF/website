import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "1",
    name: "GatorChat",
    description:
      "An AI-powered chatbot that helps UF students find information about courses, campus services, and events.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/gatortech/gatorchat",
    contributors: [
      {
        name: "Alex Johnson",
        role: "Project Lead",
        github: "alexj",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Sarah Chen",
        role: "ML Engineer",
        github: "schen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    technologies: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "React", icon: "react" },
    ],
    status: "current",
    goals: [
      "Implement natural language processing for better understanding of student queries",
      "Integrate with UF's course catalog API",
      "Achieve 95% accuracy in response generation",
    ],
  },
  {
    id: "2",
    name: "Study Buddy",
    description: "A mobile app that helps students find study groups and collaborate on projects.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/gatortech/studybuddy",
    contributors: [
      {
        name: "Mike Smith",
        role: "Frontend Developer",
        github: "msmith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    technologies: [
      { name: "React Native", icon: "react" },
      { name: "Firebase", icon: "firebase" },
    ],
    status: "past",
  },
  {
    id: "3",
    name: "Gator Events",
    description: "A platform for discovering and managing campus events with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/gatortech/gatorevents",
    contributors: [
      {
        name: "Lisa Park",
        role: "Full Stack Developer",
        github: "lpark",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    technologies: [
      { name: "Next.js", icon: "nextjs" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    status: "past",
  },
]


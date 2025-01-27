export interface Workshop {
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
    instructor: string
    tags: string[]
  }
  
  export const workshops: Workshop[] = [
    {
      id: "1",
      title: "Introduction to React",
      description: "Learn the basics of React and build your first component.",
      date: "2025-02-15",
      time: "14:00 - 16:00",
      location: "Computer Science Building, Room 301",
      instructor: "Dr. Jane Smith",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: "2",
      title: "Machine Learning with Python",
      description: "Explore fundamental machine learning concepts using Python and scikit-learn.",
      date: "2025-02-22",
      time: "10:00 - 12:00",
      location: "Engineering Building, Room 105",
      instructor: "Prof. John Doe",
      tags: ["Machine Learning", "Python", "Data Science"],
    },
    {
      id: "3",
      title: "Git and GitHub Basics",
      description: "Master version control with Git and collaborate effectively using GitHub.",
      date: "2025-03-01",
      time: "15:00 - 17:00",
      location: "Online (Zoom)",
      instructor: "Sarah Johnson",
      tags: ["Git", "GitHub", "Version Control"],
    },
    {
      id: "4",
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps using Flutter and Dart.",
      date: "2025-03-08",
      time: "13:00 - 15:00",
      location: "Computer Science Building, Room 202",
      instructor: "Mike Anderson",
      tags: ["Flutter", "Dart", "Mobile Development"],
    },
    {
      id: "5",
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity concepts and best practices.",
      date: "2025-03-15",
      time: "11:00 - 13:00",
      location: "Engineering Building, Room 301",
      instructor: "Dr. Emily Chen",
      tags: ["Cybersecurity", "Network Security", "Information Security"],
    },
  ]
  
  
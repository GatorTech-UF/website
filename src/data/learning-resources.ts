export interface LearningResource {
    id: string
    title: string
    description: string
    url: string
    platform: string
    tags: string[]
  }
  
  export const learningResources: LearningResource[] = [
    {
      id: "1",
      title: "Machine Learning Specialization",
      description: "Learn fundamental AI concepts and develop practical machine learning skills.",
      url: "https://www.coursera.org/specializations/machine-learning-introduction",
      platform: "Coursera",
      tags: ["Machine Learning", "AI", "Data Science"],
    },
    {
      id: "2",
      title: "Data Science Career Track",
      description: "Master the skills to become a data scientist and build a portfolio of real-world projects.",
      url: "https://www.datacamp.com/tracks/data-scientist-with-python",
      platform: "DataCamp",
      tags: ["Data Science", "Python", "Statistics"],
    },
    {
      id: "3",
      title: "Intro to Deep Learning",
      description: "Learn the fundamentals of deep learning and neural networks.",
      url: "https://www.kaggle.com/learn/intro-to-deep-learning",
      platform: "Kaggle",
      tags: ["Deep Learning", "Neural Networks", "AI"],
    },
    {
      id: "4",
      title: "Web Development Bootcamp",
      description: "A comprehensive bootcamp covering HTML, CSS, JavaScript, Node, and more.",
      url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      platform: "Udemy",
      tags: ["Web Development", "JavaScript", "Full Stack"],
    },
    {
      id: "5",
      title: "CS50's Introduction to Computer Science",
      description:
        "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.",
      url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
      platform: "edX",
      tags: ["Computer Science", "Programming", "Algorithms"],
    },
  ]
  
  
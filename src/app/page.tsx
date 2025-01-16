import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
// import Image from "next/image"


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
    {/* Navigation */}
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <nav className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image
            src="/placeholder.svg?height=32&width=32"
            alt="GatorTech Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          /> */}
          <span className="text-xl font-bold text-white">GatorTech</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/events" className="text-sm text-gray-300 hover:text-white">
            Events
          </Link>
          <Link href="/projects" className="text-sm text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/team" className="text-sm text-gray-300 hover:text-white">
            Team
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/gatortech"
            className="p-2 text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </Link>
          <Link
            href="https://gatortech.slack.com"
            className="p-2 text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
          </Link>
          <Button className="bg-[#FA4616] text-white hover:bg-[#FA4616]/90">
            Join Us
          </Button>
        </div>
      </nav>
    </header>

    {/* Hero Section */}
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Building the future of tech at the University of Florida
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join a community of passionate students working on innovative projects and learning cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#FA4616] text-white hover:bg-[#FA4616]/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-gray-300 text-black">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* Background gradient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA4616]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0021A5]/30 rounded-full blur-3xl" />
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/10 py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* <Image
              src="/placeholder.svg?height=24&width=24"
              alt="GatorTech Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            /> */}
            <span className="text-white font-semibold">GatorTech</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}

const features = [
{
  title: "Hands-on Projects",
  description: "Work on real-world projects using the latest technologies and best practices in software development."
},
{
  title: "Weekly Workshops",
  description: "Learn from industry experts and fellow students through interactive workshops and coding sessions."
},
{
  title: "Networking Events",
  description: "Connect with tech companies, alumni, and fellow students at our regular networking events."
},
{
  title: "Hackathons",
  description: "Participate in hackathons and coding competitions to challenge yourself and win prizes."
},
{
  title: "Mentorship",
  description: "Get paired with experienced mentors who will guide you through your tech journey."
},
{
  title: "Career Support",
  description: "Get help with resume reviews, interview prep, and job/internship placements."
}
]

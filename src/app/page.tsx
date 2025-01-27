import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
// import Image from "next/image"


export default function Home() {
  return (
    <div className="min-h-screen bg-black">

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

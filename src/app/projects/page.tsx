"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pastProjects = projects.filter((p) => p.status === "past")
  const currentProject = projects.find((p) => p.status === "current")

  const nextProject = () => {
    if (currentIndex < pastProjects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>

        <Tabs defaultValue="current" className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="current" className="data-[state=active]:bg-[#FA4616]">
              Current Project
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-[#FA4616]">
              Past Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            {currentProject && (
              <Card className="bg-white/5 border-white/10 max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{currentProject.name}</CardTitle>
                  <CardDescription>{currentProject.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden max-w-2xl mx-auto">
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-white">Project Goals</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {currentProject.goals?.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-white">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-white">Contributors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentProject.contributors.map((contributor, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                          <Image
                            src={contributor.avatar || "/placeholder.svg"}
                            alt={contributor.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-medium text-white">{contributor.name}</p>
                            <p className="text-sm text-gray-400">{contributor.role}</p>
                          </div>
                          <Link
                            href={`https://github.com/${contributor.github}`}
                            className="ml-auto text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={currentProject.github}
                    className="inline-flex items-center space-x-2 text-[#FA4616] hover:text-[#FA4616]/90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span>View on GitHub</span>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past">
            <Card className="bg-white/5 border-white/10 max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden max-w-2xl mx-auto">
                    <Image
                      src={pastProjects[currentIndex].image || "/placeholder.svg"}
                      alt={pastProjects[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 text-white hover:bg-black/70"
                    onClick={previousProject}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 text-white hover:bg-black/70"
                    onClick={nextProject}
                    disabled={currentIndex === pastProjects.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {pastProjects.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#FA4616]" : "bg-white/30"}`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{pastProjects[currentIndex].name}</h3>
                    <p className="text-gray-400 mt-2">{pastProjects[currentIndex].description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {pastProjects[currentIndex].technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Contributors</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pastProjects[currentIndex].contributors.map((contributor, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                          <Image
                            src={contributor.avatar || "/placeholder.svg"}
                            alt={contributor.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-medium text-white">{contributor.name}</p>
                            <p className="text-sm text-gray-400">{contributor.role}</p>
                          </div>
                          <Link
                            href={`https://github.com/${contributor.github}`}
                            className="ml-auto text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={pastProjects[currentIndex].github}
                    className="inline-flex items-center space-x-2 text-[#FA4616] hover:text-[#FA4616]/90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span>View on GitHub</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


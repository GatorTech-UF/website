"use client"

import { useState } from "react"
import { Search, Calendar, Clock, MapPin, User } from "lucide-react"
import Link from "next/link"
import { workshops, type Workshop } from "@/data/workshops"
import { learningResources, type LearningResource } from "@/data/learning-resources"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function WorkshopHub() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWorkshops = workshops.filter(
    (workshop) =>
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Workshop Hub</h1>

        <Tabs defaultValue="workshops" className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="workshops" className="data-[state=active]:bg-[#FA4616]">
              Workshops
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-[#FA4616]">
              Learning Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workshops">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search workshops..."
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid gap-6 md:grid-cols-2">
              {learningResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-xl text-white">{workshop.title}</CardTitle>
        <CardDescription>{workshop.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-gray-400">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{workshop.date}</span>
          <Clock className="ml-4 mr-2 h-4 w-4" />
          <span>{workshop.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{workshop.location}</span>
        </div>
        {/* <div className="flex items-center text-sm text-gray-400">
          <User className="mr-2 h-4 w-4" />
          <span>{workshop.instructor}</span>
        </div> */}
        <div className="flex flex-wrap gap-2">
          {workshop.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {/* <Button className="w-full bg-[#FA4616] text-white hover:bg-[#FA4616]/90">Register</Button> */}
      </CardContent>
    </Card>
  )
}

function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-400">Platform: {resource.platform}</div>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild className="w-full bg-[#FA4616] text-white hover:bg-[#FA4616]/90">
          <Link href={resource.url} target="_blank" rel="noopener noreferrer">
            Go to Resource
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}


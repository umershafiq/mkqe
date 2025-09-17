import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Weight, Truck, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Power Plant Turbine Relocation",
      client: "Energy Corp Solutions",
      location: "Texas to California",
      weight: "450 tons",
      date: "March 2024",
      category: "Energy & Power",
      description:
        "Successfully transported and installed a massive steam turbine for a new power generation facility, requiring specialized multi-axle trailers and precision crane work.",
      image: "/project-power-plant-turbine-heavy-transport.jpg",
      challenges: [
        "Oversized load requiring route modifications",
        "Precision placement within 2mm tolerance",
        "Coordination with utility companies for power line clearance",
      ],
      results: [
        "Completed 2 days ahead of schedule",
        "Zero safety incidents",
        "Client cost savings of $50,000 through efficient routing",
      ],
    },
    {
      id: 2,
      title: "Manufacturing Line Equipment Move",
      client: "Industrial Manufacturing Inc.",
      location: "Michigan to Ohio",
      weight: "320 tons",
      date: "January 2024",
      category: "Manufacturing",
      description:
        "Complete factory relocation involving 15 pieces of heavy manufacturing equipment, including CNC machines, presses, and assembly line components.",
      image: "/project-manufacturing-equipment-factory-relocation.jpg",
      challenges: [
        "Tight timeline during plant shutdown",
        "Multiple pieces requiring sequential transport",
        "Indoor crane work in confined spaces",
      ],
      results: [
        "Minimized production downtime to 72 hours",
        "All equipment operational within 1 week",
        "Successful coordination of 8 transport vehicles",
      ],
    },
    {
      id: 3,
      title: "Mining Equipment Transport",
      client: "Mountain Mining Operations",
      location: "Colorado Remote Site",
      weight: "280 tons",
      date: "November 2023",
      category: "Mining & Extraction",
      description:
        "Transported massive mining excavator to remote mountain location, navigating challenging terrain and weather conditions.",
      image: "/project-mining-excavator-mountain-transport.jpg",
      challenges: [
        "Remote location with limited road access",
        "Extreme weather conditions",
        "Environmental protection requirements",
      ],
      results: [
        "Successful delivery despite weather delays",
        "Zero environmental impact",
        "Equipment operational within 48 hours",
      ],
    },
  ]

  const allProjects = [
    {
      title: "Aerospace Component Transport",
      client: "AeroTech Industries",
      category: "Aerospace",
      weight: "180 tons",
      date: "February 2024",
      image: "/project-aerospace-component-precision-transport.jpg",
    },
    {
      title: "Hospital MRI Installation",
      client: "Regional Medical Center",
      category: "Healthcare",
      weight: "15 tons",
      date: "December 2023",
      image: "/project-hospital-mri-medical-equipment.jpg",
    },
    {
      title: "Wind Turbine Components",
      client: "Green Energy Solutions",
      category: "Renewable Energy",
      weight: "220 tons",
      date: "October 2023",
      image: "/project-wind-turbine-renewable-energy-transport.jpg",
    },
    {
      title: "Construction Crane Relocation",
      client: "Metro Construction",
      category: "Construction",
      weight: "350 tons",
      date: "September 2023",
      image: "/project-construction-crane-urban-transport.jpg",
    },
    {
      title: "Chemical Processing Equipment",
      client: "ChemTech Solutions",
      category: "Chemical Processing",
      weight: "290 tons",
      date: "August 2023",
      image: "/project-chemical-processing-industrial-equipment.jpg",
    },
    {
      title: "Data Center Infrastructure",
      client: "TechFlow Systems",
      category: "Technology",
      weight: "120 tons",
      date: "July 2023",
      image: "/project-data-center-server-equipment-transport.jpg",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "2M+", label: "Tons Transported" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "0", label: "Safety Incidents" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/heavy-transport-projects-portfolio-hero.jpg')`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                Our Projects
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Heavy Transport Projects Across Pakistan</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
                Explore our portfolio of completed projects across Pakistan — from heavy hauls and lowbeds to crane
                lifts and factory relocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Complex Challenges, Expert Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These showcase projects demonstrate our capability to handle the most demanding heavy transport
              requirements with precision and safety.
            </p>
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Weight className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.weight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Results Achieved</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Recent Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">More Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A selection of our recent projects across various industries, demonstrating our versatility and consistent
              delivery excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Weight className="h-4 w-4" />
                      {project.weight}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Add Your Project to Our Portfolio?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Join our growing list of satisfied clients. Let us handle your next heavy transport challenge with the same
            expertise and dedication shown in these success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Our Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

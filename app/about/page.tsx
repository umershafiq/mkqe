import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every operation prioritizes the safety of our team, your equipment, and the public.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our heavy transport services.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Dependable service delivery with transparent communication throughout every project.",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Optimized logistics and planning to minimize downtime and maximize productivity.",
    },
  ]

  const certifications = [
    "SECP Registered Business",
    "ISO 9001:2015 Quality Management",
    "HSE Compliance",
    "National Highway Authority (NHA) Oversize/Overweight Permits",
    "Professional Crane & Rigging Standards",
  ]

  const timeline = [
    {
      year: "2004",
      title: "Company Founded",
      description: "Started as a small family business with a single crane and transport truck.",
    },
    {
      year: "2008",
      title: "Fleet Expansion",
      description: "Expanded our fleet to include multi-axle trailers and specialized lifting equipment.",
    },
    {
      year: "2012",
      title: "Regional Growth",
      description: "Extended operations across multiple states with dedicated project management teams.",
    },
    {
      year: "2016",
      title: "Technology Integration",
      description: "Implemented GPS tracking, route optimization, and digital project management systems.",
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description: "Received multiple safety awards and became a preferred contractor for major industrial projects.",
    },
    {
      year: "2024",
      title: "Continued Innovation",
      description: "Leading the industry with sustainable practices and cutting-edge transport solutions.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/industrial-team-heavy-machinery-transport-workers.jpg')`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                About M. Kashan & Qasim (MKQE) Enterprises
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Pakistan-Based Logistics & Transport Experts</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Since 2004, we’ve supported Pakistan’s industry with safe and reliable heavy haulage, crane services,
                and project logistics — earning trust through consistency and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Built on Family Values, Powered by Innovation
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  MKQE began as a family-owned business with a clear mission: deliver dependable, safe, and professional
                  transport solutions. From a single truck and crane, we’ve grown into a full-service logistics partner
                  serving clients across Pakistan.
                </p>
                <p>
                  Our leadership recognized the need for specialized heavy haul services that prioritize safety and
                  efficiency. We uphold those values while embracing modern technology and best practices.
                </p>
                <p>
                  We’ve successfully completed 500+ complex moves — from massive industrial equipment to complete plant
                  relocations — becoming a trusted choice for challenging projects across Pakistan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/heavy-transport-company-founder-with-industrial-equipment.jpg"
                alt="Heavy Transport company leadership and equipment"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Principles That Drive Our Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our core values guide every decision we make and every service we provide, ensuring consistent excellence
              in heavy machinery transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">20 Years of Growth in Pakistan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From humble beginnings to industry leadership, here's how we've evolved to become a trusted name in heavy
              machinery transport.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 justify-center">
                          <Badge variant="secondary" className="text-sm font-bold">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Certifications & Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Industry-Leading Standards and Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our commitment to excellence is validated by comprehensive certifications and strict adherence to industry
              safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Work with Industry Leaders?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Experience the difference that two decades of expertise makes. Let us handle your next heavy transport
            challenge with the professionalism and safety you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

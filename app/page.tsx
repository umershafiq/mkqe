import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Cake as Crane, Shield, Clock, Award, ArrowRight, CheckCircle, Forklift } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    { icon: Truck, title: "Heavy Haulers", description: "Oversized and overweight loads across Pakistan", features: ["Escort & permits", "Route planning", "Multi-axle units"] },
    { icon: Truck, title: "Lowbed Trailers", description: "Low deck for tall/heavy machinery", features: ["Detachable gooseneck", "Load securing", "Height surveys"] },
    { icon: Truck, title: "40' DXL Trailers", description: "Double-axle 40-foot trailer services", features: ["High capacity", "Container locks", "Nationwide"] },
    { icon: Truck, title: "40' SXL Trailers", description: "Single-axle 40-foot long-haul", features: ["Cost-effective", "Experienced drivers", "Door-to-door"] },
    { icon: Truck, title: "20' Trucks", description: "Reliable 20-foot cargo moves", features: ["Flexible scheduling", "Urban capable", "Rapid dispatch"] },
    { icon: Truck, title: "Mazda Trucks", description: "Versatile medium-duty transport", features: ["Well-maintained fleet", "Skilled operators", "Cargo protection"] },
    { icon: Crane, title: "Hydraulic Cranes", description: "Lifting and positioning services", features: ["25–500 ton cranes", "Certified riggers", "Precision lifts"] },
    { icon: Forklift, title: "Fork Lifters", description: "On-site loading and unloading support", features: ["Multiple capacities", "Skilled operators", "Tight-space moves"] },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Safety Record" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/heavy-machinery-crane-lifting-industrial-equipment.jpg')`,
          }}
        >
          <div className="container mx-auto px-3 sm:px-4 py-14 sm:py-20">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium w-fit">
                Professional Heavy Machinery Transport
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                Moving Your Heavy Equipment with Precision & Safety
              </h1>
              <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-foreground/90 text-pretty">
                Pakistan-based logistics and transport consultants: heavy haulers, lowbed trailers, 40' DXL & SXL
                trailers, 20' trucks, Mazda trucks, hydraulic cranes, and fork lifters. Available 24/7 for emergency services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  View Our Projects in Pakistan
                </Button>
              </div>
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Expertise
            </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Heavy Haulage, Cranes, and Specialized Trailers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From route surveys and permits to cranes and haulage, we provide end-to-end logistics for oversized and overweight loads across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-200 border rounded-lg"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <ul className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-secondary" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="px-8">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Where Abnormal Loads Are Just Normal</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                With over two decades of experience in heavy machinery transport, we've built a reputation for handling
                the most challenging logistics projects with precision, safety, and reliability.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Industry Certified</h3>
                    <p className="text-muted-foreground">
                      Fully licensed and certified with all major industry safety standards and regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock availability for urgent transport needs and emergency situations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Insurance</h3>
                    <p className="text-muted-foreground">
                      Full coverage protection for your valuable equipment during transport and handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-heavy-machinery-transport-truck-with-.jpg"
                alt="Heavy machinery transport operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Move Your Heavy Equipment?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Get a free consultation and quote for your heavy machinery transport needs. Our experts are ready to plan
            your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call: 0333-3576806
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

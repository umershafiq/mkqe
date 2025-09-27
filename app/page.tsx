import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Cake as Crane, Shield, Clock, Award, ArrowRight, CheckCircle, Forklift } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    { icon: Truck, title: "40' Flat Bed Trailers", description: "Single & double axle configurations", features: ["Heavy-duty construction", "Professional loading", "Nationwide coverage"] },
    { icon: Truck, title: "Semi Low Bed Trailers", description: "Reduced deck height solutions", features: ["Detachable gooseneck", "Weight distribution", "Height clearance surveys"] },
    { icon: Truck, title: "Low Beds & Heavy Low Beds", description: "Specialized heavy machinery transport", features: ["Multi-axle units", "Route planning", "Escort vehicles"] },
    { icon: Truck, title: "45' / 48' Long Heavy Haulers", description: "Extended length for large equipment", features: ["High capacity", "GPS tracking", "Professional drivers"] },
    { icon: Truck, title: "Hydraulic / Multi Axle Trailers", description: "Advanced transport solutions", features: ["Hydraulic suspension", "Precision distribution", "Safety systems"] },
    { icon: Truck, title: "20' Flat Bed", description: "Versatile medium-duty transport", features: ["Flexible loading", "Urban capable", "Cost effective"] },
    { icon: Truck, title: "14' Flat Bed & High Wall Trucks", description: "Compact specialized transport", features: ["High wall options", "Urban maneuverability", "Versatile cargo"] },
    { icon: Truck, title: "Small Pickups", description: "Light cargo and quick deliveries", features: ["Quick turnaround", "Urban access", "Cost effective"] },
    { icon: Truck, title: "Mazda Light Trucks", description: "Medium-duty transport needs", features: ["Well-maintained fleet", "Skilled operators", "Reliable performance"] },
    { icon: Truck, title: "Primovers", description: "Single & double axle specialized transport", features: ["Custom configurations", "Professional operators", "Specialized solutions"] },
    { icon: Forklift, title: "Fork Lifters", description: "Loading and unloading support", features: ["Multiple capacities", "Skilled operators", "Tight-space moves"] },
    { icon: Crane, title: "Cranes Hydraulic / Mechanical", description: "Lifting and positioning services", features: ["Various capacities", "Certified riggers", "Precision operations"] },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Safety Record" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative gradient-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="relative section-padding flex items-center bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[700px]"
          style={{
            backgroundImage: `url('/heavy-machinery-crane-lifting-industrial-equipment.jpg')`,
          }}
        >
          <div className="container mx-auto container-padding">
            <div className="max-w-5xl">
              <Badge variant="secondary" className="mb-8 text-sm font-medium px-4 py-2 w-fit">
                Professional Heavy Machinery Transport
              </Badge>
              <h1 className="mb-8 text-balance leading-tight">
                Moving Your Heavy Equipment with Precision & Safety
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 text-pretty leading-relaxed max-w-4xl">
                Pakistan-based logistics and transport consultants: 40' Flat Bed Trailers, Semi Low Bed Trailers, Low Beds & Heavy Low Beds, 45'/48' Long Heavy Haulers, Hydraulic/Multi Axle Trailers, 20' Flat Bed, 14' Flat Bed & High Wall Trucks, Small Pickups, Mazda Light Trucks, Primovers, Fork Lifters, Cranes Hydraulic/Mechanical, Warehouses, Hand Carry Services, Air Freight Services, and Sale/Purchase of Generators & Compressors. Available 24/7 for emergency services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="btn-professional px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-professional px-10 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent shadow-lg hover:shadow-xl"
                >
                  View Our Projects in Pakistan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-muted">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Client Highlights */}
          <div className="mt-16 text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
              Trusted by Industry Leaders
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-balance">
              Serving Pakistan's Premier Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60">
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">PETRONAS</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">Schlumberger</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">Crescent Steel</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">Descon</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">ICI Pakistan</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">Baker Hughes</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">MCB Bank</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground">Standard Chartered</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              And many more industry leaders across Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
              Our Expertise
            </Badge>
            <h2 className="mb-8 text-balance">Heavy Haulage, Cranes, and Specialized Trailers</h2>
            <p className="text-xl text-professional max-w-4xl mx-auto text-pretty">
              From route surveys and permits to cranes and haulage, we provide end-to-end logistics for oversized and overweight loads across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-professional group"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-professional leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" className="btn-professional px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding gradient-muted">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
                Why Choose Us
              </Badge>
              <h2 className="mb-8 text-balance">Where Abnormal Loads Are Just Normal</h2>
              <p className="text-xl text-professional mb-10 text-pretty">
                With over 4 years of experience in heavy machinery transport, we've built a reputation for handling
                the most challenging logistics projects with precision, safety, and reliability.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-3 rounded-xl shadow-lg">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-emphasis">Industry Certified</h3>
                    <p className="text-professional">
                      Fully licensed and certified with all major industry safety standards and regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary p-3 rounded-xl shadow-lg">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-emphasis">24/7 Emergency Response</h3>
                    <p className="text-professional">
                      Round-the-clock availability for urgent transport needs and emergency situations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary p-3 rounded-xl shadow-lg">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-emphasis">Comprehensive Insurance</h3>
                    <p className="text-professional">
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
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container mx-auto container-padding text-center">
          <h2 className="mb-8 text-balance">Ready to Move Your Heavy Equipment?</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Get a free consultation and quote for your heavy machinery transport needs. Our experts are ready to plan
            your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="btn-professional px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="btn-professional px-12 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent shadow-lg hover:shadow-xl"
            >
              Call: 0333-3576806
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

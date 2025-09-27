import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Cake as Crane, Shield, Clock, Users, ArrowRight, CheckCircle, Phone, Calculator, Forklift } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "40' Flat Bed Trailers",
      description: "Single axle and double axle 40-foot flat bed trailers for versatile cargo transport",
      features: [
        "Single axle and double axle configurations",
        "Heavy-duty construction",
        "Professional loading supervision",
        "Nationwide coverage in Pakistan",
      ],
    },
    {
      icon: Truck,
      title: "Semi Low Bed Trailers",
      description: "Semi low bed solutions for tall machinery requiring reduced deck height",
      features: [
        "Detachable gooseneck options",
        "Optimal weight distribution",
        "Load securing and lashing",
        "Route surveys for height clearances",
      ],
    },
    {
      icon: Truck,
      title: "Low Beds & Heavy Low Beds",
      description: "Specialized low bed trailers for heavy machinery and oversized equipment",
      features: [
        "Heavy-duty low bed configurations",
        "Multi-axle heavy haul units",
        "Route planning and permits",
        "Escort vehicles and traffic management",
      ],
    },
    {
      icon: Truck,
      title: "45' / 48' Long Heavy Haulers",
      description: "Extended length heavy haulers for large-scale industrial equipment",
      features: [
        "45' and 48' configurations",
        "High-capacity transport",
        "Real-time GPS tracking",
        "Professional drivers and equipment",
      ],
    },
    {
      icon: Truck,
      title: "Hydraulic / Multi Axle Trailers",
      description: "Advanced hydraulic and multi-axle trailers for complex transport needs",
      features: [
        "Hydraulic suspension systems",
        "Multi-axle configurations",
        "Precision load distribution",
        "Advanced safety systems",
      ],
    },
    {
      icon: Truck,
      title: "20' Flat Bed",
      description: "Versatile 20-foot flat bed trucks for medium-sized equipment and cargo",
      features: [
        "Flexible loading configurations",
        "Urban and highway capable",
        "Timely delivery schedules",
        "Cost-effective solutions",
      ],
    },
    {
      icon: Truck,
      title: "14' Flat Bed & High Wall Trucks",
      description: "Compact 14-foot flat bed and high wall trucks for specialized cargo",
      features: [
        "High wall configurations",
        "Compact maneuverability",
        "Versatile cargo options",
        "Efficient urban transport",
      ],
    },
    {
      icon: Truck,
      title: "Small Pickups",
      description: "Small pickup trucks for light cargo and quick deliveries",
      features: [
        "Light cargo transport",
        "Quick turnaround times",
        "Urban accessibility",
        "Cost-effective solutions",
      ],
    },
    {
      icon: Truck,
      title: "Mazda Light Trucks",
      description: "Versatile Mazda light trucks for medium-duty transport needs",
      features: [
        "Well-maintained fleet",
        "Skilled operators",
        "Cargo protection",
        "Reliable performance",
      ],
    },
    {
      icon: Truck,
      title: "Primovers",
      description: "Single axle and double axle primovers for specialized transport",
      features: [
        "Single and double axle options",
        "Specialized configurations",
        "Professional operators",
        "Custom transport solutions",
      ],
    },
    {
      icon: Forklift,
      title: "Fork Lifters",
      description: "On-site loading and unloading support with various capacity options",
      features: [
        "Multiple capacity options",
        "Skilled operators",
        "Tight-space maneuverability",
        "Professional service",
      ],
    },
    {
      icon: Crane,
      title: "Cranes Hydraulic / Mechanical",
      description: "Hydraulic and mechanical cranes for lifting and positioning services",
      features: [
        "Hydraulic and mechanical options",
        "Various capacity ranges",
        "Certified riggers",
        "Precision lifting operations",
      ],
    },
  ]

  const additionalServices = [
    {
      title: "Warehouses",
      description: "Secure storage facilities for your cargo and equipment",
    },
    {
      title: "Hand Carry Services",
      description: "Professional hand carry services for sensitive and valuable items",
    },
    {
      title: "Air Freight Services",
      description: "Air freight solutions for time-sensitive cargo delivery",
    },
    {
      title: "Sale / Purchase of Generators & Compressors",
      description: "Sale and purchase of low and heavy generators & compressors with safety certification",
    },
  ]

  const industries = [
    {
      name: "Manufacturing",
      description: "Factory relocations, production line installations, and equipment upgrades",
      icon: "🏭",
    },
    {
      name: "Construction",
      description: "Heavy equipment transport to job sites and project locations",
      icon: "🏗️",
    },
    {
      name: "Energy & Power",
      description: "Power plant equipment, transformers, and renewable energy components",
      icon: "⚡",
    },
    {
      name: "Mining & Extraction",
      description: "Mining equipment, processing machinery, and extraction tools",
      icon: "⛏️",
    },
    {
      name: "Aerospace",
      description: "Aircraft components, satellite equipment, and precision instruments",
      icon: "✈️",
    },
    {
      name: "Healthcare",
      description: "Medical equipment, MRI machines, and laboratory instruments",
      icon: "🏥",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your transport needs, equipment specifications, and project requirements.",
    },
    {
      step: "02",
      title: "Route Planning",
      description: "Our experts design the optimal route, securing all necessary permits and clearances.",
    },
    {
      step: "03",
      title: "Equipment Preparation",
      description: "We prepare specialized transport equipment and coordinate all logistics details.",
    },
    {
      step: "04",
      title: "Safe Transport",
      description: "Professional execution with real-time monitoring and communication throughout.",
    },
    {
      step: "05",
      title: "Delivery & Setup",
      description: "Precise placement at destination with optional installation and setup services.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="relative py-14 sm:py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/heavy-machinery-transport-services-hero.jpg')`,
          }}
        >
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm w-fit">
                Our Services
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance break-words hyphens-auto">Heavy Haulage, Cranes, and Specialized Trailers</h1>
              <p className="text-base sm:text-xl text-primary-foreground/90 text-pretty mb-6 sm:mb-8 break-words hyphens-auto leading-relaxed">
                Pakistan-based logistics and transport consultants providing 40' Flat Bed Trailers, Semi Low Bed Trailers, Low Beds & Heavy Low Beds, 45'/48' Long Heavy Haulers, Hydraulic/Multi Axle Trailers, 20' Flat Bed, 14' Flat Bed & High Wall Trucks, Small Pickups, Mazda Light Trucks, Primovers, Fork Lifters, Cranes Hydraulic/Mechanical, Warehouses, Hand Carry Services, Air Freight Services, and Sale/Purchase of Generators & Compressors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="px-6 sm:px-8">
                    Get Quote
                    <Calculator className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel:0333-3576806">
                  <Button
                    size="sm"
                    variant="outline"
                    className="px-6 sm:px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (compact) */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Core Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Specialized Transport Solutions in Pakistan</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">Route surveys, permits, escort cars, cranes, and heavy haulage for oversized and overweight cargo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <CardDescription className="text-sm mb-3 leading-relaxed">{service.description}</CardDescription>
                  <ul className="space-y-1.5 mb-3">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="text-sm font-medium text-primary inline-flex items-center gap-1">
                    Get quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Additional Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Comprehensive Logistics Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Beyond transportation, we offer a complete range of logistics and support services to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Trusted Across Multiple Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our expertise spans diverse industries, each with unique transport challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">How We Deliver Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our proven 5-step process ensures every transport project is executed with precision, safety, and
              efficiency from start to finish.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative z-10 bg-background">
                    <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Heavy Transport Advantage</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Unmatched Safety Record</h3>
                    <p className="text-muted-foreground">
                      Zero accidents in over 500 completed projects with comprehensive insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Certified professionals with years of combined experience in heavy transport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground">
                      98% on-time delivery rate with transparent communication throughout every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/heavy-transport-team-safety-equipment-industrial.jpg"
                alt="Heavy transport team with safety equipment"
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
            Get a custom quote for your heavy transport project. Our experts are ready to design the perfect solution
            for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8">
                Get Free Quote
                <Calculator className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Past Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

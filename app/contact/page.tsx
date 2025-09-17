import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Calculator, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0333-3576806", "0305-2313225"],
      description: "24/7 Emergency Transport Hotline",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mkqenterprises@gmail.com"],
      description: "Get quotes and project information",
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Office #2, Plot #644, Gate #03 (New)",
        "Truck Stand Hawksbay Road, Karachi",
      ],
      description: "Main office and equipment yard",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon–Sun: 24/7"],
      description: "Emergency services available 24/7",
    },
  ]

  const serviceAreas = [
    "Texas",
    "Oklahoma",
    "Louisiana",
    "Arkansas",
    "New Mexico",
    "Colorado",
    "Kansas",
    "Missouri",
    "Mississippi",
    "Alabama",
    "Tennessee",
    "Arizona",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/heavy-transport-contact-hero-industrial.jpg')`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Your Heavy Transport Quote Today</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
                Ready to move your heavy equipment? Our experts are standing by to provide custom solutions for your
                transport needs. Get started with a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0333-3576806">
                  <Button size="lg" variant="secondary" className="px-8">
                    Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://wa.me/92333576806" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="px-8">
                    WhatsApp
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#contact-form">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    Get Quote
                    <Calculator className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Multiple Ways to Reach Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Whether you need an emergency transport or want to plan a complex project, our team is ready to assist you
              with expert guidance and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium text-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section id="contact-form" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="outline" className="mb-4">
                Request Quote
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Tell Us About Your Project</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below with your project details, and we'll get back to you within 2 hours with a
                detailed quote and transport plan.
              </p>

              <ContactForm />
            </div>

            {/* Service Areas and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Areas in Pakistan
                  </CardTitle>
                  <CardDescription>We provide heavy transport services across Pakistan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Karachi",
                      "Lahore",
                      "Islamabad",
                      "Faisalabad",
                      "Multan",
                      "Quetta",
                      "Peshawar",
                      "Hyderabad",
                      "Sukkur",
                      "Gwadar",
                    ].map((area, index) => (
                      <Badge key={index} variant="secondary" className="justify-center">
                        {area}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Need service outside these areas? Contact us for special arrangements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    What to Include in Your Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Equipment dimensions and weight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Pickup and delivery locations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Preferred timeline and any deadlines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Special handling requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Site access conditions and restrictions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Emergency Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Need immediate heavy transport services? Our emergency response team is available 24/7 for urgent
                    equipment moves and breakdown recovery.
                  </p>
                  <a href="tel:0333-3576806">
                    <Button variant="secondary" className="w-full">
                      Call Emergency Line
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://wa.me/923052313225" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full mt-2">
                      WhatsApp (Alt)
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Common Questions About Heavy Transport</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do you calculate transport costs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Costs are based on equipment weight, dimensions, distance, route complexity, and any special handling
                  requirements. We provide detailed quotes within 2 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What permits do you handle?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We obtain all necessary oversize/overweight permits, route clearances, and coordinate with authorities
                  for safe passage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide insurance coverage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we carry comprehensive cargo insurance and liability coverage. Additional coverage options are
                  available for high-value equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How far in advance should I book?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For standard moves, 1-2 weeks notice is ideal. Complex projects may require 4-6 weeks for planning.
                  Emergency services available with shorter notice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

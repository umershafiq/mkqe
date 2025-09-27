import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Clock, ArrowRight, FileText, Target, Phone } from "lucide-react"
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
      year: "2020",
      title: "Company Founded",
      description: "Established as a professional logistics and transport consultancy with a single crane and transport truck in October 2020.",
    },
    {
      year: "2021",
      title: "Fleet Expansion",
      description: "Expanded our fleet to include multi-axle trailers and specialized lifting equipment.",
    },
    {
      year: "2022",
      title: "Regional Growth",
      description: "Extended operations across Pakistan with dedicated project management teams.",
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Implemented GPS tracking, route optimization, and digital project management systems.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received multiple safety awards and became a preferred contractor for major industrial projects.",
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
                Since October 2020, we've supported Pakistan's industry with safe and reliable heavy haulage, crane services,
                and project logistics — earning trust through consistency and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
              Company Introduction
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              M. Kashan & Qasim Enterprises - Your Trusted Logistics Partner
              </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We feel pleasure to introduce our Heavy Haulage Transportation / Logistics Company; 
                  <strong className="text-foreground">"M. Kashan & Qasim Enterprises"</strong> (Logistics & Transport Consultant), 
                  located at Suite No. 2, Plot #644, New Truck Stand Hawksbay Road, Karachi-74000, Pakistan. 
                  We are a reasonably sound Transportation / Logistics Business entrepreneur by means of our:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Financial Sound Background</h4>
                        <p className="text-sm">Strong financial foundation ensuring reliable service delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Complete Safety Fleet</h4>
                        <p className="text-sm">Big fleet of good vehicles, machines & equipment with complete safety</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Rich Experience</h4>
                        <p className="text-sm">Enriched in experience of all day-to-day transport & logistics needs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Oil Well Equipment Expertise</h4>
                        <p className="text-sm">Best experience in handling oil well equipment/rig moves without time lost</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">HSE Excellence</h4>
                        <p className="text-sm">Continuous effort for improvement of Health, Safety & Environment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p>
                  <strong className="text-foreground">M. Kashan & Qasim Enterprises</strong> (Logistics & Transport Consultant) 
                  is well known in Pakistan Industry, Oil & Gas Drilling and Exploration Circles and Services Companies.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="font-semibold text-foreground mb-3">Legacy of Excellence</h3>
                  <p className="mb-3">
                    The Ex-Senior Executive & Transport Consultant of the Company, 
                    <strong>Mr. Muhammad ASIF Khan (LATE)</strong>, Ex-Member of Chartered Institute of Logistics & Transport, 
                    was a highly professional and most experienced person in handling of rig moves and projects throughout Pakistan.
                  </p>
                  <p>
                    He supervised and organized over <strong>500 rig moves</strong> and various projects throughout his 
                    matchless career of <strong>33 years</strong> in the logistics & transport industry.
                  </p>
                </div>
                
                <p>
                  <strong className="text-foreground">Mr. Kamran Iqbal</strong> (Chief Executive & Proprietor) of this company 
                  has vast experience and is a trusted name in handling all day-to-day needs of Oil & Gas Wells Drilling & 
                  Exploration Companies and their Services Companies. Whether it is a small job or big moves, his professional 
                  expertise is tested in this field throughout Pakistan. His <strong>4+ years experience</strong> has set 
                  some standards which are being followed in this field of logistics & transport.
                </p>
                
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Our Specialization</h3>
                  <p className="mb-4">
                    We (MKQE) would like to inform you that we are one of the most experienced transporters for the 
                    transportation of Oil Well Equipment (Rig Moves), Pipes, Casings, Chemicals and Oil & Gas and 
                    Power Project Cargo Handling, etc.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Additional Services</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Heavy & Over-Dimensional Packages</li>
                        <li>• 20', 40' & 45' FCL Containers</li>
                        <li>• LCL Cargo Transportation</li>
                        <li>• PTA / Oil Well Chemical / Cement Bags</li>
                        <li>• Steel Coils & Steel Billets</li>
                        <li>• Cement / Power Plants Machinery</li>
                        <li>• General Cargo By Road throughout Pakistan</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Equipment Rental Services</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Cranes (Telescopic & Conventional) - 05-100 Ton</li>
                        <li>• Fork Lifters - 02-10 Ton Capacities</li>
                        <li>• Dozers & Loaders</li>
                        <li>• Daily and Monthly Rental Basis</li>
                        <li>• Small Pickup to Big Trailer Services</li>
                        <li>• Available throughout Pakistan</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-sm">
                      <strong>MKQE's Commitment:</strong> We are pleased to offer our Professional Services to meet 
                      requirements from Small Pickup to Big Trailer in any part of Pakistan. MKQE's continuous efforts 
                      to improve the quality of work tailored with your needs would be the Key to our Success.
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Operation Procedure
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Management Structure</h4>
                            <p className="text-sm text-muted-foreground">
                              Chief Operations, Manager Operations, Operations Supervisors & Logistics Supervisors 
                              coordinate with Materials, Logistics & Contracts Department.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <Phone className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">24/7 Availability</h4>
                            <p className="text-sm text-muted-foreground">
                              Round the clock contact through Office, Residence & Mobile Phone Numbers. 
                              Local call to any Operation Manager for professional services across Pakistan.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">International Safety Standards</h4>
                            <p className="text-sm text-muted-foreground">
                              Highly Professional Services with International Safety Standards throughout Pakistan.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Professional Supervision</h4>
                            <p className="text-sm text-muted-foreground">
                              Up-to-date equipment with committed staff moved instantly from nearest available point. 
                              All operations under direct supervision of Chief Operations / Chief Executive.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">4+ Years of Growth in Pakistan</h2>
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

          {/* Company Registration Numbers */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Company Registration Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">NTN Number</p>
                  <p className="font-mono text-lg">4756976-4</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">SRB Sale Tax</p>
                  <p className="font-mono text-lg">S-4756976-4</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">BRA Sale Tax</p>
                  <p className="font-mono text-lg">B-4756976-4</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">PRA Sale Tax</p>
                  <p className="font-mono text-lg">P-4756976-4</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding gradient-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
              Trusted by Industry Leaders
            </Badge>
            <h2 className="mb-8 text-balance">
              Our Esteemed Clients
            </h2>
            <p className="text-xl text-professional max-w-4xl mx-auto text-pretty">
              MKQE has earned the trust of leading companies across Pakistan's oil & gas, engineering, and manufacturing sectors through consistent delivery of professional transport solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Oil & Gas Sector */}
            <div className="card-professional p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-emphasis">Oil & Gas Sector</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Sedco Forex International / Schlumberger Oil Field Services / Dowell</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. PETRONAS Carigali (Pakistan) Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>BHP Petroleum (Pakistan) Pty Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. China Petroleum Pipeline Bureau (CPPB), Islamabad</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. KCA-Deutag, Islamabad</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. CCDC-CNPC, Islamabad</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Baker Hughes EHO Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. ScomiOiltools Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. FPM Petro Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Baker Hughes Inteq</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Servis Long March</span>
                </li>
              </ul>
            </div>

            {/* Engineering & Manufacturing */}
            <div className="card-professional p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-emphasis">Engineering & Manufacturing</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Crescent Steel & Allied Products Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Clough Engineering Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. ICI Pakistan Ltd</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Descon Engineering & PressonDescon International Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Huffaz Seamless Pipe Industries Ltd</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Etimaad Engineering Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. KSB Pumps (Pvt) Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Servis Log March</span>
                </li>
              </ul>
            </div>

            {/* Banking & Financial */}
            <div className="card-professional p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-emphasis">Banking & Financial</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Muslim Commercial Bank Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Standard Chartered Bank Limited</span>
                </li>
              </ul>
            </div>

            {/* Industrial & Glass */}
            <div className="card-professional p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-emphasis">Industrial & Glass</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>M/s. Ghani Glass Limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>China Petroleum Engineering & Construction Company</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-emphasis mb-2">Services Provided</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Rig Moves & Transportation</li>
                  <li>• Chemical Transportation</li>
                  <li>• Pipe Transportation</li>
                  <li>• Project Transportation</li>
                  <li>• Container & Bulk Transportation</li>
                  <li>• Logistics & Crane Services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg max-w-4xl mx-auto">
              <h3 className="font-semibold text-emphasis mb-3">Trusted Partnership</h3>
              <p className="text-professional">
                Our long-standing relationships with these industry leaders demonstrate our commitment to excellence, 
                reliability, and professional service delivery across Pakistan's most demanding transport projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
              Our Leadership Team
            </Badge>
            <h2 className="mb-8 text-balance">
              Meet the Experts Behind MKQE
            </h2>
            <p className="text-xl text-professional max-w-4xl mx-auto text-pretty">
              Our experienced leadership team brings years of combined expertise in heavy machinery transport and logistics management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mr. Kamran Iqbal</h3>
                <p className="text-lg text-primary font-semibold mb-4">Chief Executive & Proprietor</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>+92 305 2313225</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>0333-3576806</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>mkqenterprises@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operations Manager */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mr. M Amjad</h3>
                <p className="text-lg text-primary font-semibold mb-4">Manager Operations</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>+92 305 3458182</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>0333 8758560</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>operations0125@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Work with Industry Leaders?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Experience the difference that 4+ years of expertise makes. Let us handle your next heavy transport
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

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center font-bold">MKQE</div>
              </div>
              <h3 className="text-lg font-bold">M. Kashan & Qasim (MKQE) Enterprises</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional heavy machinery transport services with over 20 years of experience. We handle your most
              challenging logistics needs with safety and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition-colors">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Heavy Haulers</li>
              <li>Lowbed Trailers</li>
              <li>40' DXL Trailers</li>
              <li>40' SXL Trailers</li>
              <li>20' Trucks</li>
              <li>Mazda Trucks</li>
              <li>Hydraulic Cranes</li>
              <li>Fork Lifters</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>0333-3576806</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>0305-2313225</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>mkqenterprises@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Office #2, Plot #644, Gate #03 (New), Truck Stand Hawksbay Rd, Karachi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>24/7 Emergency Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 M. Kashan & Qasim (MKQE) Enterprises. All rights reserved. | Professional Heavy Machinery Transport Services
          </p>
        </div>
      </div>
    </footer>
  )
}

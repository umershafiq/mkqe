"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      {/* Top contact bar */}
      <div className="bg-primary/90 py-1.5 px-3">
        <div className="container mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0333-3576806</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0305-2313225</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>mkqenterprises@gmail.com</span>
            </div>
            <a
              href="https://wa.me/92333576806"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-secondary whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>
          <div className="hidden md:block whitespace-nowrap">
            <span>24/7 Emergency Transport Services</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="bg-secondary text-secondary-foreground p-2 rounded-lg flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg sm:text-xl">MKQE</div>
            </div>
            <div className="truncate">
              <h1 className="text-lg sm:text-xl font-bold truncate">M. Kashan & Qasim (MKQE) Enterprises</h1>
              <p className="text-xs sm:text-sm opacity-90 truncate">Professional Machinery Moving</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-secondary transition-colors font-medium">
                {item.label}
              </Link>
            ))}
            <Button variant="secondary" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-secondary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="secondary" size="sm" className="w-fit">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

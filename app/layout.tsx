import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "M. Kashan & Qasim (MKQE) Enterprises – Logistics & Transport Consultant",
  description:
    "Pakistan-based logistics & transport consultant: 40' Flat Bed Trailers, Semi Low Bed Trailers, Low Beds & Heavy Low Beds, 45'/48' Long Heavy Haulers, Hydraulic/Multi Axle Trailers, 20' Flat Bed, 14' Flat Bed & High Wall Trucks, Small Pickups, Mazda Light Trucks, Primovers, Fork Lifters, Cranes Hydraulic/Mechanical, Warehouses, Hand Carry Services, Air Freight Services, and Sale/Purchase of Generators & Compressors.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

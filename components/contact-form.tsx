"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      serviceType: formData.get("serviceType"),
      cargoType: formData.get("cargoType"),
      equipmentWeight: formData.get("equipmentWeight"),
      equipmentLength: formData.get("equipmentLength"),
      equipmentWidth: formData.get("equipmentWidth"),
      equipmentHeight: formData.get("equipmentHeight"),
      pickupLocation: formData.get("pickupLocation"),
      deliveryLocation: formData.get("deliveryLocation"),
      permitsRequired: formData.get("permitsRequired"),
      escortRequired: formData.get("escortRequired"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within 2 hours with a detailed quote.",
        })
        // Reset form
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select name="serviceType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40-flat-bed-trailers">40' Flat Bed Trailers</SelectItem>
                  <SelectItem value="semi-low-bed-trailers">Semi Low Bed Trailers</SelectItem>
                  <SelectItem value="low-beds-heavy-low-beds">Low Beds & Heavy Low Beds</SelectItem>
                  <SelectItem value="45-48-long-heavy-haulers">45' / 48' Long Heavy Haulers</SelectItem>
                  <SelectItem value="hydraulic-multi-axle-trailers">Hydraulic / Multi Axle Trailers</SelectItem>
                  <SelectItem value="20-flat-bed">20' Flat Bed</SelectItem>
                  <SelectItem value="14-flat-bed-high-wall-trucks">14' Flat Bed & High Wall Trucks</SelectItem>
                  <SelectItem value="small-pickups">Small Pickups</SelectItem>
                  <SelectItem value="mazda-light-trucks">Mazda Light Trucks</SelectItem>
                  <SelectItem value="primovers">Primovers</SelectItem>
                  <SelectItem value="fork-lifters">Fork Lifters</SelectItem>
                  <SelectItem value="cranes-hydraulic-mechanical">Cranes Hydraulic / Mechanical</SelectItem>
                  <SelectItem value="warehouses">Warehouses</SelectItem>
                  <SelectItem value="hand-carry-services">Hand Carry Services</SelectItem>
                  <SelectItem value="air-freight-services">Air Freight Services</SelectItem>
                  <SelectItem value="generators-compressors">Sale / Purchase of Generators & Compressors</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="equipmentWeight">Equipment Weight (tons)</Label>
              <Input id="equipmentWeight" name="equipmentWeight" placeholder="e.g., 50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupLocation">Pickup Location *</Label>
              <Input id="pickupLocation" name="pickupLocation" placeholder="City, Province (Pakistan)" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryLocation">Delivery Location *</Label>
              <Input id="deliveryLocation" name="deliveryLocation" placeholder="City, Province (Pakistan)" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cargoType">Cargo Type</Label>
              <Input id="cargoType" name="cargoType" placeholder="e.g., Industrial machinery, Oil well equipment" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="equipmentWeight">Equipment Weight (tons)</Label>
              <Input id="equipmentWeight" name="equipmentWeight" placeholder="e.g., 50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="equipmentLength">Length (meters)</Label>
              <Input id="equipmentLength" name="equipmentLength" placeholder="e.g., 12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="equipmentWidth">Width (meters)</Label>
              <Input id="equipmentWidth" name="equipmentWidth" placeholder="e.g., 3.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="equipmentHeight">Height (meters)</Label>
              <Input id="equipmentHeight" name="equipmentHeight" placeholder="e.g., 4.2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="permitsRequired">Permits Required</Label>
              <Select name="permitsRequired">
                <SelectTrigger>
                  <SelectValue placeholder="Select permit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oversize">Oversize Permit</SelectItem>
                  <SelectItem value="overweight">Overweight Permit</SelectItem>
                  <SelectItem value="both">Both Oversize & Overweight</SelectItem>
                  <SelectItem value="none">No Special Permits</SelectItem>
                  <SelectItem value="unknown">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="escortRequired">Escort Required</Label>
              <Select name="escortRequired">
                <SelectTrigger>
                  <SelectValue placeholder="Select escort type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="police">Police Escort</SelectItem>
                  <SelectItem value="traffic">Traffic Escort</SelectItem>
                  <SelectItem value="pilot">Pilot Vehicle</SelectItem>
                  <SelectItem value="none">No Escort</SelectItem>
                  <SelectItem value="unknown">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Preferred Timeline</Label>
            <Select name="timeline">
              <SelectTrigger>
                <SelectValue placeholder="When do you need this service?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                <SelectItem value="1-week">Within 1 week</SelectItem>
                <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="flexible">Flexible timing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please describe your equipment, any special handling requirements, site access conditions, and other relevant details..."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              <>
                Send Quote Request
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by our team regarding your transport needs.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

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
      equipmentWeight: formData.get("equipmentWeight"),
      pickupLocation: formData.get("pickupLocation"),
      deliveryLocation: formData.get("deliveryLocation"),
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
                  <SelectItem value="heavy-haulers">Heavy Haulers</SelectItem>
                  <SelectItem value="lowbed-trailers">Lowbed Trailers</SelectItem>
                  <SelectItem value="40-dxl-trailers">40' DXL Trailers</SelectItem>
                  <SelectItem value="40-sxl-trailers">40' SXL Trailers</SelectItem>
                  <SelectItem value="20-trucks">20' Trucks</SelectItem>
                  <SelectItem value="mazda-trucks">Mazda Trucks</SelectItem>
                  <SelectItem value="hydraulic-cranes">Hydraulic Cranes</SelectItem>
                  <SelectItem value="fork-lifters">Fork Lifters</SelectItem>
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

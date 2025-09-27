import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Here you would typically:
    // 1. Validate the form data
    // 2. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 3. Store the inquiry in a database
    // 4. Send confirmation emails

    // For now, we'll simulate the email sending
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      serviceType: body.serviceType,
      cargoType: body.cargoType,
      equipmentWeight: body.equipmentWeight,
      equipmentLength: body.equipmentLength,
      equipmentWidth: body.equipmentWidth,
      equipmentHeight: body.equipmentHeight,
      pickupLocation: body.pickupLocation,
      deliveryLocation: body.deliveryLocation,
      permitsRequired: body.permitsRequired,
      escortRequired: body.escortRequired,
      timeline: body.timeline,
      message: body.message,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would send an email like this:
    /*
    const emailContent = `
      New Heavy Transport Quote Request
      
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      Company: ${body.company}
      Service Type: ${body.serviceType}
      Cargo Type: ${body.cargoType}
      Equipment Weight: ${body.equipmentWeight} tons
      Equipment Dimensions: ${body.equipmentLength}m x ${body.equipmentWidth}m x ${body.equipmentHeight}m
      Pickup Location: ${body.pickupLocation}
      Delivery Location: ${body.deliveryLocation}
      Permits Required: ${body.permitsRequired}
      Escort Required: ${body.escortRequired}
      Timeline: ${body.timeline}
      
      Project Details:
      ${body.message}
    `
    
    // Send email to your business email
    await sendEmail({
      to: 'your-email@heavytransport.com',
      subject: 'New Quote Request - Heavy Transport',
      text: emailContent
    })
    
    // Send confirmation email to customer
    await sendEmail({
      to: body.email,
      subject: 'Quote Request Received - Heavy Transport',
      text: `Thank you for your quote request. We'll get back to you within 2 hours.`
    })
    */

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send quote request" }, { status: 500 })
  }
}

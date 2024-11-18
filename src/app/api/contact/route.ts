import { NextResponse } from "next/server";
import { z } from "zod";

// Form validation schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = schema.parse(body);

    // Here you can implement your preferred email sending method
    // Examples: Nodemailer, SendGrid, Resend, etc.
    // For this example, I'll show using EmailJS
    
    // Replace with your EmailJS credentials
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_USER_ID',
        template_params: {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.format() }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
} 
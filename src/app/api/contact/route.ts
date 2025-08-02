import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: 'Validation failed: Name, email, and message are required.',
        },
        { status: 400 }
      );
    }

    // Basic email format validation
    // This is a simple regex and might not cover all valid/invalid email cases.
    // For production, consider a more robust validation library.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Validation failed: Invalid email format.' },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic here.
    // Example: using Nodemailer, SendGrid, Resend, etc.
    // For now, just log the data to the server console.
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided'); // Handle optional phone
    console.log('Message:', message);

    // Simulate email sending delay (optional)
    // await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    // It's good practice not to expose detailed error messages to the client in production
    return NextResponse.json(
      { message: 'Internal Server Error. Failed to process message.' },
      { status: 500 }
    );
  }
}

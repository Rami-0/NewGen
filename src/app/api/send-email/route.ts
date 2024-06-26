import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function GET(request: NextRequest) {
  console.log("Received a GET request");
  return NextResponse.redirect("http://localhost:3000/");
}

export async function POST(request: NextRequest) {
  if (request.method === 'POST') {
    const { name, phone, email, description } = await request.json();
    try {
      await transporter.sendMail({
        from: `"Nextgen" <${process.env.GMAIL_USER}>`, // Sender address
        to: process.env.RECIVER_GMAIL_USER, // Recipient address
        subject: 'New Form Submission', // Subject line
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDescription: ${description}`, // Plain text body
      });

      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error: any) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}

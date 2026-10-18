import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation to protect against spam or empty submissions
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    // Attempt 1: Nodemailer (Gmail SMTP)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: (process.env.EMAIL_PASS || '').replace(/\s+/g, ''),
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'rakibulislamashik78@gmail.com',
        replyTo: email,
        subject: `New Contact Request from ${name} via Portfolio`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
            <h2 style="color: #8A2BE2; margin-bottom: 20px;">New Message Received</h2>
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 20px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007ACC;">${email}</a></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2BE2;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #333;">${message}</p>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #888;">This message was sent from your portfolio contact form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (smtpError) {
      console.warn('Nodemailer SMTP failed, falling back to Resend API:', smtpError.message);

      // Attempt 2: Resend API Fallback
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailResponse = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['rakibulislamashik78@gmail.com'],
          subject: `📡 New Contact Signal from ${name}`,
          replyTo: email,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
              <h2 style="color: #8A2BE2; margin-bottom: 20px;">New Message Received</h2>
              <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 20px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007ACC;">${email}</a></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2BE2;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #333;">${message}</p>
              </div>
              <p style="margin-top: 30px; font-size: 12px; color: #888;">This message was sent via Resend fallback relay.</p>
            </div>
          `,
        });

        if (!emailResponse.error) {
          return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
        }
      }

      throw smtpError;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message: ' + (error.message || 'Check server configuration') }, 
      { status: 500 }
    );
  }
}

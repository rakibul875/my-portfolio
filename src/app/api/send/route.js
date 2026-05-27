import { NextResponse } from "next/server";
import { Resend } from "resend";

// Prevent server compile errors if API key is not yet set
const resendApiKey = process.env.RESEND_API_KEY || "dummy_key";
const resend = new Resend(resendApiKey);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Backend form validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "PAYLOAD_ERROR: Missing required fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "VALIDATION_ERROR: Invalid signal channel (email)." },
        { status: 400 }
      );
    }

    // 2. Transmit via Resend
    // Note: With a free Resend tier, you can send emails to your own registered account
    // (rakibulislamashik78@gmail.com) from onboarding@resend.dev.
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["rakibulislamashik78@gmail.com"],
      subject: `📡 New Signal Received from ${name}`,
      replyTo: email,
      html: `
        <div style="background-color: #0c0c0e; color: #eed9ff; font-family: 'Courier New', Courier, monospace; padding: 30px; border: 1px solid #8a2be2; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 0 20px rgba(138,43,226,0.2);">
          <h2 style="color: #dcb8ff; border-bottom: 2px solid #8a2be2; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0;">📡 INCOMING_TRANSMISSION</h2>
          <div style="margin: 20px 0; line-height: 1.5;">
            <p style="margin: 8px 0;"><strong>[SOURCE_IDENTITY]:</strong> <span style="color: #47d6ff;">${name}</span></p>
            <p style="margin: 8px 0;"><strong>[SIGNAL_CHANNEL]:</strong> <span style="color: #47d6ff;">${email}</span></p>
            <p style="margin: 8px 0;"><strong>[RECEIVED_TIMESTAMP]:</strong> <span style="color: #a5e7ff;">${new Date().toLocaleString()}</span></p>
          </div>
          <div style="background-color: #121214; border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; color: #e5e2e3; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">
            <strong style="color: #dcb8ff;">[PAYLOAD_DATA]:</strong><br/><br/>
            ${message}
          </div>
          <div style="margin-top: 30px; font-size: 11px; color: rgba(238,233,255,0.4); text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
            SYSTEM_PORTFOLIO // SECURE_TRANSMISSION_PROTOCOL // PORTAL_v1.0
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      return NextResponse.json(
        { error: emailResponse.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (error) {
    return NextResponse.json(
      { error: `TRANSMISSION_FAILED: ${error.message}` },
      { status: 500 }
    );
  }
}

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(2).max(150),
  message: z.string().min(10).max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // --- Environment checks ---
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_INBOX) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service not configured. RESEND_API_KEY and CONTACT_INBOX must be set.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // --- Send email via resend.dev built-in domain ---
    await resend.emails.send({
      from: "Portfolio <portfolio@resend.dev>",
      to: [process.env.CONTACT_INBOX],
      replyTo: email,
      subject: `Portfolio contact – ${subject}`,
      text: `New message from ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("contact error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
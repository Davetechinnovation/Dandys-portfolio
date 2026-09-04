import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "hello@dandaveudoka.com.ng";

// Naive in-memory rate limit: 5 submissions per IP per hour.
// Resets when the server restarts — fine for a portfolio contact form.
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(request.headers.get("x-forwarded-for") ?? "unknown")) {
    return NextResponse.json(
      { error: "Too many messages sent. Try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const types = Array.isArray(body.types)
    ? body.types.map(String).filter(Boolean)
    : [];
  const message = String(body.message ?? "").trim();
  // Honeypot — real users never fill this hidden field, bots do
  const website = String(body.website ?? "").trim();

  if (website) {
    // Silently accept so the bot thinks it worked
    return NextResponse.json({ ok: true });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass || pass === "PASTE_YOUR_ZOHO_APP_PASSWORD_HERE") {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email me directly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // Zoho requires the From address to match the authenticated account
      from: `"Portfolio Contact" <${user}>`,
      // Replies go straight to the client
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      to: CONTACT_EMAIL,
      subject: `Project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${types.join(", ") || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}

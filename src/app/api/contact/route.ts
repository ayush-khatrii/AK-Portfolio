import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// GET /api/contact — test your Telegram bot token and chat ID
export async function GET() {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json({
      status: "not_configured",
      message: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env.local",
    });
  }

  // Test bot token validity via getMe
  const meRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
  const meData = await meRes.json();

  if (!meData.ok) {
    return NextResponse.json({
      status: "bad_token",
      botCheck: meData,
      message: "Bot token is invalid. Regenerate from @BotFather.",
    });
  }

  // Test sending a message to the chat ID
  const testRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: "✅ Your Telegram bot is configured correctly!",
    }),
  });
  const testData = await testRes.json();

  return NextResponse.json({
    status: testData.ok ? "ok" : "bad_chat_id",
    bot: { id: meData.result.id, username: meData.result.username },
    chatCheck: testData,
    hint: testData.ok
      ? "Everything works!"
      : `Chat not found. Send /start to @${meData.result.username} on Telegram, then try again.`,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body as Record<string, unknown>;

    // Validate and normalize every required field before using it.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "All fields (name, email, WhatsApp number, message) are required." },
        { status: 400 }
      );
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const normalizedMessage = message.trim();
    const phoneDigits = normalizedPhone.replace(/\D/g, "");

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Enter a valid WhatsApp number with country code." },
        { status: 400 }
      );
    }

    // Check if Telegram env vars are configured
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram environment variables are not configured.");
      return NextResponse.json(
        { error: "Contact form is not configured yet." },
        { status: 500 }
      );
    }

    // Format the Telegram message
    const telegramMessage = [
      "\uD83D\uDCE9 <b>New Contact Form Submission</b>",
      "",
      `\uD83D\uDC64 <b>Name:</b> ${escapeHtml(normalizedName)}`,
      `\u2709\uFE0F <b>Email:</b> ${escapeHtml(normalizedEmail)}`,
      `\uD83D\uDCF1 <b>WhatsApp:</b> <a href="https://wa.me/${phoneDigits}">${escapeHtml(normalizedPhone)}</a>`,
      "",
      `\uD83D\uDCDD <b>Message:</b>`,
      escapeHtml(normalizedMessage),
    ].join("\n");

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { error: `Telegram error: ${data.description || "Failed to send message."}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

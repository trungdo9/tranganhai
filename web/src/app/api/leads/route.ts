import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TELEGRAM_API = "https://api.telegram.org";
const DISPATCH_TIMEOUT_MS = 8000;
const MAX_FIELD_LENGTH = 200;

/** Collapse whitespace, trim, and bound length so a single field cannot bloat the message. */
function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, MAX_FIELD_LENGTH);
}

function formatTimeICT(date: Date): string {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // 1. Bot check via honeypot (accept the escaped key too).
  if (clean(body.honeypot) || clean(body["honeypot-field"])) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  // 2. Validate + normalise.
  //    NOTE: the form posts `scale`; this route used to read `websiteCount` and never
  //    received it — so the qualifying "company size / number of websites" answer was
  //    silently dropped from every lead. Accept both names, `scale` first.
  const fullName = clean(body.fullName);
  const phone = clean(body.phone);
  const company = clean(body.company);
  const scale = clean(body.scale) || clean(body.websiteCount);
  const industry = clean(body.industry);

  if (!fullName || !phone || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const receivedAt = new Date();

  // 3. PII-safe operational log — company/scale/industry only, never name or phone.
  console.log("[LEAD RECEIVED]", {
    company,
    scale: scale || "(không rõ)",
    industry: industry || "(không rõ)",
    receivedAt: receivedAt.toISOString(),
  });

  // 4. Dispatch to Telegram.
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  const threadId = process.env.TELEGRAM_THREAD_ID?.trim();

  if (!token || !chatId) {
    console.error(
      "[LEAD DISPATCH] NOT CONFIGURED — the lead was NOT delivered anywhere. " +
        "Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (optionally TELEGRAM_THREAD_ID) " +
        "in the Vercel project environment, then redeploy.",
    );
    return NextResponse.json(
      {
        success: false,
        delivered: false,
        error: "Lead dispatch is not configured",
      },
      { status: 503 },
    );
  }

  const message = [
    "🔔 LEAD MỚI — tranganhai.com",
    "",
    `👤 Họ tên: ${fullName}`,
    `📞 Điện thoại: ${phone}`,
    `🏢 Công ty: ${company}`,
    `📊 Quy mô: ${scale || "(không rõ)"}`,
    `🏭 Ngành: ${industry || "(không rõ)"}`,
    `🕐 Thời điểm: ${formatTimeICT(receivedAt)} (ICT)`,
    "",
    "Nguồn: form trang chủ TRANG ANH AI",
  ].join("\n");

  try {
    const response = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        ...(threadId ? { message_thread_id: Number(threadId) } : {}),
        text: message,
        disable_web_page_preview: true,
      }),
      // Without a bound, a hanging Telegram call would stall the serverless invocation.
      signal: AbortSignal.timeout(DISPATCH_TIMEOUT_MS),
    });

    const payload = (await response.json().catch(() => null)) as
      | { ok?: boolean; description?: string }
      | null;

    if (!response.ok || !payload?.ok) {
      console.error("[LEAD DISPATCH] Telegram rejected the message", {
        status: response.status,
        description: payload?.description ?? "(no body)",
        chatId,
        threadId: threadId || null,
      });
      return NextResponse.json(
        { success: false, delivered: false, error: "Lead dispatch failed" },
        { status: 502 },
      );
    }

    console.log("[LEAD DISPATCH] delivered", {
      chatId,
      threadId: threadId || null,
    });
    return NextResponse.json({ success: true, delivered: true });
  } catch (error) {
    console.error("[LEAD DISPATCH] request failed", {
      message: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { success: false, delivered: false, error: "Lead dispatch failed" },
      { status: 502 },
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, company, industry, websiteCount, honeypot } = body;

    // 1. Bot check via honeypot
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // 2. Validate required inputs
    if (!fullName || !phone || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Log lead safely (PII redacted / minimal logging)
    const leadPayload = {
      timestamp: new Date().toISOString(),
      fullName,
      phone,
      company,
      industry: industry || "Chưa xác định",
      websiteCount: websiteCount || "1 Website",
      source: "Trang Anh Systems Landing Page (Web)",
    };

    console.log("[LEAD RECEIVED]", {
      company,
      industry,
      timestamp: leadPayload.timestamp,
    });

    // 4. In production: Dispatch to Telegram Webhook or CRM (MISA AMIS / Brevo)
    // if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    //   await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       chat_id: process.env.TELEGRAM_CHAT_ID,
    //       text: `🔔 LEAD MỚI TỪ WEB TRANG ANH SYSTEMS:\n- Họ tên: ${fullName}\n- SĐT: ${phone}\n- Công ty: ${company}\n- Ngành: ${industry}\n- Quy mô web: ${websiteCount}`
    //     })
    //   });
    // }

    return NextResponse.json({
      success: true,
      message: "Lead received successfully. Consultant will contact within 2 hours.",
    });
  } catch (error) {
    console.error("[API LEADS ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

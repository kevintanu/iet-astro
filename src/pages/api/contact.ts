export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Honeypot check — bots fill this hidden field
    if (body.website) {
      // Silently reject but return 200 so bots think it worked
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const { name, company, email, phone, service, industry, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Please fill in all required fields." }),
        { status: 400 }
      );
    }

    // Discord webhook
    const webhookUrl = import.meta.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ message: "Server configuration error." }),
        { status: 500 }
      );
    }

    const embed = {
      title: "📩 New Engineering Inquiry",
      color: 0x0369a1, // brand-500
      fields: [
        { name: "Name", value: name, inline: true },
        { name: "Company", value: company || "—", inline: true },
        { name: "Email", value: email, inline: true },
        { name: "Phone", value: phone || "—", inline: true },
        { name: "Service", value: service || "—", inline: true },
        { name: "Industry", value: industry || "—", inline: true },
        { name: "Message", value: message },
      ],
      timestamp: new Date().toISOString(),
    };

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "IET Website",
        embeds: [embed],
      }),
    });

    if (!discordRes.ok) {
      console.error("Discord webhook failed:", discordRes.status);
    }

    // Telegram notification
    const telegramToken = import.meta.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = import.meta.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      const text = [
        `📩 *New Engineering Inquiry*`,
        ``,
        `*Name:* ${name}`,
        `*Company:* ${company || "—"}`,
        `*Email:* ${email}`,
        `*Phone:* ${phone || "—"}`,
        `*Service:* ${service || "—"}`,
        `*Industry:* ${industry || "—"}`,
        ``,
        `*Message:*`,
        message,
      ].join("\n");

      const telegramRes = await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!telegramRes.ok) {
        console.error("Telegram notification failed:", telegramRes.status);
      }
    }

    if (!discordRes.ok && (!telegramToken || !telegramChatId)) {
      return new Response(
        JSON.stringify({ message: "Failed to send notification." }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ message: "An unexpected error occurred." }),
      { status: 500 }
    );
  }
};

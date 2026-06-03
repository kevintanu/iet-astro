export const prerender = false;

import type { APIRoute } from "astro";

// Landing-page lead handler using the Post/Redirect/Get (PRG) pattern:
// the form does a native HTML POST here, we notify Telegram, then issue a
// 303 redirect to the thank-you page. The GET that follows means a browser
// refresh won't re-submit the form (no duplicate leads / notifications).
export const POST: APIRoute = async ({ request, redirect }) => {
  const thankYouUrl = "/lp/thank-you";

  try {
    const form = await request.formData();
    const get = (k: string) => (form.get(k)?.toString() ?? "").trim();

    // Honeypot — bots fill this hidden field. Redirect as if successful.
    if (get("website")) {
      return redirect(thankYouUrl, 303);
    }

    const name = get("name");
    const company = get("company");
    const email = get("email");
    const phone = get("phone");
    const location = get("location");
    const service = get("service");
    const message = get("message");

    // Campaign attribution passed through hidden fields (populated client-side).
    const utmSource = get("utm_source");
    const utmMedium = get("utm_medium");
    const utmCampaign = get("utm_campaign");
    const utmTerm = get("utm_term");
    const gclid = get("gclid");

    // Required fields. On failure, bounce back to the form with an error flag.
    if (!name || !email || !company) {
      return redirect("/lp/offshore-piping-stress-analysis-australia?error=1#lead", 303);
    }

    // --- Discord notification --------------------------------------------
    const discordWebhook = import.meta.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      const embed = {
        title: "🛢️ New Piping/Stress Analysis Lead (AU LP)",
        color: 0xd97706, // accent-500
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Company", value: company, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Phone", value: phone || "—", inline: true },
          { name: "Location", value: location || "—", inline: true },
          { name: "Service", value: service || "—", inline: true },
          { name: "Project details", value: message || "—" },
          { name: "Source", value: `${utmSource || "direct"} / ${utmMedium || "—"}`, inline: true },
          { name: "Campaign", value: utmCampaign || "—", inline: true },
          { name: "Keyword", value: utmTerm || "—", inline: true },
          { name: "GCLID", value: gclid || "—" },
        ],
        timestamp: new Date().toISOString(),
      };

      const discordRes = await fetch(discordWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "IET Ads — Piping LP", embeds: [embed] }),
      });

      if (!discordRes.ok) {
        console.error("Discord webhook failed:", discordRes.status, await discordRes.text());
      }
    } else {
      console.error("DISCORD_WEBHOOK_URL not configured");
    }

    // --- Telegram notification -------------------------------------------
    const telegramToken = import.meta.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = import.meta.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      const lines = [
        `🛢️ *New Piping/Stress Analysis Lead* (AU LP)`,
        ``,
        `*Name:* ${name}`,
        `*Company:* ${company}`,
        `*Email:* ${email}`,
        `*Phone:* ${phone || "—"}`,
        `*Location:* ${location || "—"}`,
        `*Service:* ${service || "—"}`,
        ``,
        `*Project details:*`,
        message || "—",
        ``,
        `*Source:* ${utmSource || "direct"} / ${utmMedium || "—"}`,
        `*Campaign:* ${utmCampaign || "—"}`,
        `*Keyword:* ${utmTerm || "—"}`,
        `*GCLID:* ${gclid || "—"}`,
      ];

      // Telegram MarkdownV1: escape underscores in dynamic values would be ideal,
      // but we keep it simple and let the API render best-effort.
      const res = await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: lines.join("\n"),
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }),
        }
      );

      if (!res.ok) {
        console.error("Telegram notification failed:", res.status, await res.text());
      }
    } else {
      console.error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not configured");
    }

    // PRG: redirect to thank-you regardless of notification outcome so the
    // user always lands on a clean confirmation (the lead is logged above).
    return redirect(thankYouUrl, 303);
  } catch (error) {
    console.error("LP lead error:", error);
    return redirect(thankYouUrl, 303);
  }
};

// A GET here (e.g. someone hitting the URL directly) should not 404.
export const GET: APIRoute = ({ redirect }) =>
  redirect("/lp/offshore-piping-stress-analysis-australia", 302);

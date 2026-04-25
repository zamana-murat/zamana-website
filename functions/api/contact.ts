/**
 * POST /api/contact
 * Cloudflare Pages Function — forwards form to info@zamana.com.tr via Resend.
 *
 * Env vars (Pages → Settings → Environment variables):
 *   RESEND_API_KEY  (secret)
 *   CONTACT_TO      (default: info@zamana.com.tr)
 *   CONTACT_FROM    (default: Zamana <noreply@zamana.com.tr>)
 *
 * If RESEND_API_KEY is missing the function returns ok:true and logs only.
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  program?: string;
  message?: string;
  consent?: string;
  website?: string; // honeypot
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  if (data.website && data.website.trim() !== '') {
    return json({ ok: true });
  }

  const name = (data.name || '').trim().slice(0, 200);
  const email = (data.email || '').trim().slice(0, 200);
  const phone = (data.phone || '').trim().slice(0, 50);
  const company = (data.company || '').trim().slice(0, 200);
  const program = (data.program || '').trim().slice(0, 50);
  const message = (data.message || '').trim().slice(0, 4000);

  if (!name || !email || !message) {
    return json({ ok: false, error: 'missing_required' }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  const to = env.CONTACT_TO || 'info@zamana.com.tr';
  const from = env.CONTACT_FROM || 'Zamana <noreply@zamana.com.tr>';

  const subject = `Yeni iletişim formu — ${name}${program ? ` (${program})` : ''}`;
  const html = `
    <h2 style="font-family:sans-serif;color:#0f2855">Yeni iletişim formu mesajı</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#666">Ad Soyad</td><td style="padding:6px 12px"><strong>${escapeHtml(name)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">E-posta</td><td style="padding:6px 12px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding:6px 12px;color:#666">Telefon</td><td style="padding:6px 12px">${escapeHtml(phone)}</td></tr>` : ''}
      ${company ? `<tr><td style="padding:6px 12px;color:#666">Şirket</td><td style="padding:6px 12px">${escapeHtml(company)}</td></tr>` : ''}
      ${program ? `<tr><td style="padding:6px 12px;color:#666">Program</td><td style="padding:6px 12px">${escapeHtml(program)}</td></tr>` : ''}
    </table>
    <h3 style="font-family:sans-serif;color:#0f2855;margin-top:24px">Mesaj</h3>
    <div style="font-family:sans-serif;white-space:pre-wrap;padding:12px;background:#f7f5ef;border-left:3px solid #c9a84c;border-radius:4px">${escapeHtml(message)}</div>
    <p style="font-family:sans-serif;color:#999;font-size:12px;margin-top:24px">
      Bu mesaj zamana.com.tr iletişim formundan gönderildi.
    </p>
  `;
  const text = [
    `Yeni iletişim formu mesajı`,
    ``,
    `Ad Soyad: ${name}`,
    `E-posta: ${email}`,
    phone ? `Telefon: ${phone}` : '',
    company ? `Şirket: ${company}` : '',
    program ? `Program: ${program}` : '',
    ``,
    `Mesaj:`,
    message,
  ].filter(Boolean).join('\n');

  if (!env.RESEND_API_KEY) {
    console.log('[contact] RESEND_API_KEY missing — payload not sent:', { name, email, program });
    return json({ ok: true, note: 'logged_only' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });
    if (!r.ok) {
      const errText = await r.text();
      console.error('[contact] Resend error:', r.status, errText);
      return json({ ok: false, error: 'send_failed' }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('[contact] fetch threw:', err);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
};

export const onRequest: PagesFunction = async () =>
  new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });

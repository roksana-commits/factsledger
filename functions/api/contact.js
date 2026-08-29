/**
 * Cloudflare Pages Function — contact / corrections handler.
 *
 * Runs on Cloudflare's own network alongside the static site. No third-party
 * form service, no cost on the free plan.
 *
 * Delivery is configured in the Cloudflare dashboard; the function uses whatever
 * is available and tells the visitor honestly if nothing is:
 *
 *   1. KV namespace binding named SUBMISSIONS  → every message is stored.
 *   2. RESEND_API_KEY + CONTACT_TO + CONTACT_FROM → every message is emailed.
 *
 * Either alone is enough. Setting both gives you a copy in each place.
 * Setup instructions are in README.md.
 */

const MAX = { name: 120, email: 200, page: 400, message: 5000, subject: 40 };

const SUBJECTS = {
  correction: 'Correction',
  source: 'Source tip',
  subject: 'Profile subject',
  rights: 'Rights or legal',
  other: 'General enquiry',
};

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const looksLikeEmail = (value) => /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(value);

export async function onRequestPost({ request, env }) {
  let data;
  try {
    const type = request.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      data = await request.json();
    } else {
      data = Object.fromEntries(await request.formData());
    }
  } catch {
    return json(400, { message: 'Could not read that submission.' });
  }

  // Honeypot: real people never fill a field they cannot see.
  // Answer 200 so bots do not learn anything from the response.
  if (clean(data.website, 200)) {
    return json(200, { message: 'Thank you — your message has been received.' });
  }

  const submission = {
    subject: SUBJECTS[clean(data.subject, MAX.subject)] || SUBJECTS.other,
    name: clean(data.name, MAX.name) || 'Not given',
    email: clean(data.email, MAX.email),
    page: clean(data.page, MAX.page) || 'Not given',
    message: clean(data.message, MAX.message),
    receivedAt: new Date().toISOString(),
    country: request.headers.get('cf-ipcountry') || 'unknown',
  };

  if (!looksLikeEmail(submission.email)) {
    return json(400, { message: 'Please give a valid email address so we can reply.' });
  }
  if (submission.message.length < 20) {
    return json(400, { message: 'Please give us a little more detail — at least a couple of sentences.' });
  }

  const body =
    `Subject:  ${submission.subject}\n` +
    `Name:     ${submission.name}\n` +
    `Email:    ${submission.email}\n` +
    `Page:     ${submission.page}\n` +
    `Country:  ${submission.country}\n` +
    `Received: ${submission.receivedAt}\n\n` +
    submission.message;

  let stored = false;
  let emailed = false;

  if (env.SUBMISSIONS) {
    try {
      const key = `msg:${submission.receivedAt}:${crypto.randomUUID()}`;
      await env.SUBMISSIONS.put(key, JSON.stringify(submission));
      stored = true;
    } catch (error) {
      console.error('KV write failed', error);
    }
  }

  if (env.RESEND_API_KEY && env.CONTACT_TO && env.CONTACT_FROM) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.CONTACT_FROM,
          to: [env.CONTACT_TO],
          reply_to: submission.email,
          subject: `[FactsLedger] ${submission.subject} — ${submission.name}`,
          text: body,
        }),
      });
      emailed = response.ok;
      if (!response.ok) console.error('Email send failed', response.status, await response.text());
    } catch (error) {
      console.error('Email send threw', error);
    }
  }

  if (!stored && !emailed) {
    console.error('No delivery method configured or all failed. Submission:', body);
    return json(503, {
      message:
        'The form is not able to deliver messages right now. Please email us directly — the address is above this form.',
    });
  }

  return json(200, {
    message: 'Thank you — your message has been received. We aim to reply within five working days.',
  });
}

/** Anything other than POST gets a clear answer rather than a stack trace. */
export const onRequestGet = () => json(405, { message: 'Send this form with POST.' });

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import crypto from 'crypto';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

// TODO: Replace with your Paddle webhook secret for signature verification
const PADDLE_WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET || 'YOUR_PADDLE_WEBHOOK_SECRET';
const DOWNLOAD_BASE_URL = process.env.DOWNLOAD_BASE_URL || 'https://yourdomain.com/download'; // Set your domain

const LICENSE_PRODUCTS = ['crm-saas', 'chrome-extension']; // Products that need license keys
const SAAS_PRODUCTS = ['crm-saas']; // Products that need SaaS provisioning

const resend = new Resend(process.env.RESEND_API_KEY);

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

function generateDownloadToken(orderId: string, productSlug: string): string {
  // Simple HMAC-based token (add expiry if needed)
  const hmac = crypto.createHmac('sha256', PADDLE_WEBHOOK_SECRET);
  hmac.update(orderId + ':' + productSlug);
  return hmac.digest('hex');
}

function generateLicenseKey() {
  return uuidv4();
}

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const event = Object.fromEntries(body.entries());

  // TODO: Uncomment to enable signature verification
  // if (!verifyPaddleSignature(event, PADDLE_WEBHOOK_SECRET)) {
  //   return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  // }

  if (event.alert_name === 'payment_succeeded' || event.alert_name === 'subscription_payment_succeeded') {
    // Parse passthrough
    let passthrough = {};
    try {
      passthrough = JSON.parse(typeof event.passthrough === 'string' ? event.passthrough : '{}');
    } catch {}
    const { productSlug, userEmail } = passthrough as { productSlug: string, userEmail: string };
    const orderId = typeof event.order_id === 'string' ? event.order_id : (typeof event.subscription_id === 'string' ? event.subscription_id : 'unknown');
    const downloadToken = generateDownloadToken(orderId, productSlug);
    const downloadUrl = `${DOWNLOAD_BASE_URL}/${orderId}?token=${downloadToken}`;
    // const fileUrl = PRODUCT_FILES[productSlug] || 'https://yourdomain.com/files/default.zip';

    // License key generation
    let licenseKey = null;
    if (LICENSE_PRODUCTS.includes(productSlug)) {
      licenseKey = generateLicenseKey();
    }

    // SaaS provisioning placeholder
    let saasStatus = null;
    if (SAAS_PRODUCTS.includes(productSlug)) {
      // TODO: Provision SaaS user (create account, activate subscription, etc.)
      // Example: await createSaaSUser(userEmail, orderId);
      saasStatus = 'provisioned';
    }

    // Store order in database (if not already present)
    try {
      await pool.query(
        `INSERT INTO orders (order_id, product_slug, user_email, status, download_token, license_key, saas_status, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
         ON CONFLICT (order_id) DO NOTHING`,
        [orderId, productSlug, userEmail, 'paid', downloadToken, licenseKey, saasStatus]
      );
    } catch (err) {
      console.error('DB insert error:', err);
    }

    // Send email with download link and license key if applicable
    if (userEmail) {
      let html = `<p>Thank you for your purchase!</p><p><a href="${downloadUrl}">Click here to download your product</a></p>`;
      if (licenseKey) {
        html += `<p>Your license key: <b>${licenseKey}</b></p>`;
      }
      if (saasStatus === 'provisioned') {
        html += `<p>Your SaaS account has been provisioned. Please check your email for login details.</p>`;
      }
      await resend.emails.send({
        from: 'Your Business <noreply@yourdomain.com>',
        to: userEmail,
        subject: 'Your Product Download',
        html,
      });
    }
  }

  return NextResponse.json({ success: true });
} 
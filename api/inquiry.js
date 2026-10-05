// Vercel Serverless Function: /api/inquiry
// Securely processes and transmits manufacturing client inquiries to ismailbatti1234@gmail.com

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST inquiries are accepted.'
    });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const {
      fullName,
      companyName,
      emailAddress,
      phoneWhatsApp,
      country,
      targetCategory,
      estimatedQuantity,
      specifications = [],
      projectScope
    } = data || {};

    // Mandatory Field Validations
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, message: 'Full Name is required.' });
    }
    if (!companyName || !companyName.trim()) {
      return res.status(400).json({ success: false, message: 'Brand / Company Name is required.' });
    }
    if (!emailAddress || !emailAddress.trim()) {
      return res.status(400).json({ success: false, message: 'Business Email Address is required.' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (!phoneWhatsApp || !phoneWhatsApp.trim()) {
      return res.status(400).json({ success: false, message: 'WhatsApp / Phone Number is required.' });
    }
    if (!country || !country.trim()) {
      return res.status(400).json({ success: false, message: 'Destination Country is required.' });
    }
    if (!targetCategory || !targetCategory.trim()) {
      return res.status(400).json({ success: false, message: 'Product Category is required.' });
    }
    if (!estimatedQuantity || !estimatedQuantity.trim()) {
      return res.status(400).json({ success: false, message: 'Estimated Quantity is required.' });
    }

    // Sanitize values
    const safeName = String(fullName).trim();
    const safeCompany = String(companyName).trim();
    const safeEmail = String(emailAddress).trim();
    const safePhone = String(phoneWhatsApp).trim();
    const safeCountry = String(country).trim();
    const safeProduct = String(targetCategory).trim();
    const safeQuantity = String(estimatedQuantity).trim();
    const safeRequirements = projectScope ? String(projectScope).trim() : 'No custom requirements specified.';
    const specsFormatted = Array.isArray(specifications) && specifications.length > 0
      ? specifications.map(s => String(s).trim()).join(', ')
      : 'None selected';

    const recipientEmail = process.env.INQUIRY_RECIPIENT_EMAIL || 'ismailbatti1234@gmail.com';
    const emailSubject = `New Client Inquiry: ${safeName} (${safeCompany}) - Noor Layers MFG`;

    // Plain text email format
    const textBody = [
      `New Client Manufacturing Inquiry - Noor Layers MFG`,
      `==================================================`,
      `Client Name: ${safeName}`,
      `Company Name: ${safeCompany}`,
      `Client Email: ${safeEmail}`,
      `Phone / WhatsApp: ${safePhone}`,
      `Country: ${safeCountry}`,
      `Product Interested In: ${safeProduct}`,
      `Quantity: ${safeQuantity}`,
      `Selected Specs: ${specsFormatted}`,
      ``,
      `Client Requirements / Notes:`,
      `${safeRequirements}`,
      ``,
      `--------------------------------------------------`,
      `Direct WhatsApp Link: https://wa.me/${safePhone.replace(/[^0-9]/g, '')}`,
      `Submitted via Noor Layers MFG Portal (${new Date().toUTCString()})`
    ].join('\n');

    // Clean luxury HTML email template matching Noor Layers gold/industrial theme
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #101417; color: #e0e2e6; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background: #191c1f; border: 1px solid #323538; border-radius: 8px; overflow: hidden; }
          .header { background: #0b0f11; padding: 24px; border-bottom: 2px solid #e9c176; }
          .logo { color: #e9c176; font-size: 20px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
          .title { color: #ffffff; font-size: 16px; margin-top: 8px; font-weight: 500; }
          .content { padding: 24px; }
          .field-row { margin-bottom: 16px; border-bottom: 1px solid #26272b; padding-bottom: 12px; }
          .field-row:last-child { border-bottom: none; }
          .field-label { font-size: 12px; text-transform: uppercase; color: #dab36a; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #f5f5f5; line-height: 1.5; }
          .requirements-box { background: #101417; border-left: 3px solid #e9c176; padding: 14px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #e0e2e6; white-space: pre-wrap; }
          .footer { background: #0b0f11; padding: 16px 24px; font-size: 12px; color: #8e8e93; border-top: 1px solid #26272b; text-align: center; }
          .badge { display: inline-block; background: #e9c176; color: #261900; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 3px; text-transform: uppercase; margin-right: 6px; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Noor Layers.mfg</div>
            <div class="title">New Client Manufacturing Inquiry</div>
          </div>
          <div class="content">
            <div class="field-row">
              <div class="field-label">Client Name</div>
              <div class="field-value"><strong>${safeName}</strong></div>
            </div>
            <div class="field-row">
              <div class="field-label">Company Name</div>
              <div class="field-value">${safeCompany}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Client Email</div>
              <div class="field-value"><a href="mailto:${safeEmail}" style="color: #e9c176; text-decoration: none;">${safeEmail}</a></div>
            </div>
            <div class="field-row">
              <div class="field-label">Phone / WhatsApp</div>
              <div class="field-value"><a href="https://wa.me/${safePhone.replace(/[^0-9]/g, '')}" style="color: #e9c176; text-decoration: none;">${safePhone}</a></div>
            </div>
            <div class="field-row">
              <div class="field-label">Destination Country</div>
              <div class="field-value">${safeCountry}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Product Interested In</div>
              <div class="field-value"><span class="badge">${safeProduct}</span></div>
            </div>
            <div class="field-row">
              <div class="field-label">Estimated Quantity</div>
              <div class="field-value">${safeQuantity}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Production Specifications</div>
              <div class="field-value">${specsFormatted}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Client Requirements / Message</div>
              <div class="requirements-box">${safeRequirements}</div>
            </div>
          </div>
          <div class="footer">
            Noor Layers MFG Export Sourcing Desk • Transmitted on ${new Date().toUTCString()}
          </div>
        </div>
      </body>
      </html>
    `;

    let delivered = false;

    // Strategy 1: FormSubmit (Direct to Gmail, zero configuration required)
    try {
      const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://website-bulid.vercel.app',
          'Origin': 'https://website-bulid.vercel.app'
        },
        body: JSON.stringify({
          name: safeName,
          company: safeCompany,
          email: safeEmail,
          phone: safePhone,
          country: safeCountry,
          product: safeProduct,
          quantity: safeQuantity,
          specifications: specsFormatted,
          requirements: safeRequirements,
          _subject: emailSubject
        })
      });

      if (fsRes.ok) {
        delivered = true;
      }
    } catch (fsErr) {
      console.warn('FormSubmit delivery error:', fsErr);
    }

    // Strategy 2: Resend (Native HTTPS Fetch if key configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendFrom = process.env.RESEND_FROM || 'Noor Layers MFG <onboarding@resend.dev>';
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: resendFrom,
            to: [recipientEmail],
            reply_to: safeEmail,
            subject: emailSubject,
            text: textBody,
            html: htmlBody
          })
        });

        if (resendRes.ok) {
          delivered = true;
        } else {
          console.warn('Resend response not ok:', await resendRes.text());
        }
      } catch (rErr) {
        console.warn('Resend fetch error:', rErr);
      }
    }

    // Strategy 3: Webhook / Web3Forms if configured
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL || (process.env.WEB3FORMS_KEY ? 'https://api.web3forms.com/submit' : null);
    if (webhookUrl) {
      try {
        const webhookPayload = process.env.WEB3FORMS_KEY
          ? {
              access_key: process.env.WEB3FORMS_KEY,
              subject: emailSubject,
              from_name: `${safeName} via Noor Layers MFG`,
              replyto: safeEmail,
              name: safeName,
              email: safeEmail,
              phone: safePhone,
              message: textBody
            }
          : {
              to: recipientEmail,
              subject: emailSubject,
              text: textBody,
              html: htmlBody
            };

        const hookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(webhookPayload)
        });

        if (hookRes.ok) {
          delivered = true;
        }
      } catch (wErr) {
        console.warn('Webhook error:', wErr);
      }
    }

    // Always log inquiry to Vercel logs so leads are never lost
    console.log(`[INQUIRY_RECEIVED_FOR_${recipientEmail}]:\n${textBody}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry. We have received your request and our export desk will contact you soon.',
      delivered: delivered
    });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to process your inquiry at this moment. Please reach out directly via WhatsApp (+92 315 4533297).'
    });
  }
}

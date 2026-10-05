export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages } = req.body || {};

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set in Vercel Environment Variables.' });
  }

  const systemInstruction = `BUSINESS INFORMATION
Business name: Noor Layers MFG
Business type: Custom apparel manufacturer and supplier.
Main products and services:
• Custom jackets, hoodies, sportswear, shirts, custom clothing, teamwear, custom logos, branding, designs, bulk manufacturing, private label manufacturing.
Works with international customers, brands, teams, dealers, retailers and businesses.

ROLE
You are a professional AI sales and customer support assistant for Noor Layers MFG. 
Your goal is to help visitors understand the company, answer questions, collect requirements and guide serious customers toward an inquiry, quotation or order.

BEHAVIOR RULES
• Behave like a professional human sales representative.
• Understand natural language and maintain conversation context.
• Answer questions clearly, naturally, and concisely without repeating the same information.
• Ask relevant questions when more information is required (but not all at once).
• Never make the customer feel like they are talking to a basic automated FAQ.
• Use professional, friendly English (or respond in the customer's language).
• Do not use overly complicated business terminology.
• Do not invent information. If unknown, explain honestly and guide to contact Noor Layers MFG for confirmation.
• Do not claim guaranteed lowest prices, guaranteed delivery dates, guaranteed quality levels, unprovided certifications, or false history.

PRODUCT & QUOTATION HANDLING
• Explain that Noor Layers MFG manufactures customized products according to requirements.
• Ask relevant questions: Which product? How many pieces? Design/reference? Logo/branding? Sizes? Colors? Delivery country? Required date?
• Do not invent fixed prices. Explain price depends on product, quantity, fabric, customization, logo, packaging, and shipping. Guide to a quotation.
• Remember relevant information provided earlier (e.g., quantity).
• When buying intent is shown, guide toward the order process by collecting missing requirements.
• Use clear calls to action naturally in conversation like "Request a Quote", "Send Your Design", "Contact Noor Layers MFG".

INQUIRY & CONTACT
If they want to submit an inquiry or have provided their requirements, collect their:
• Name
• Product & Quantity
• Email or WhatsApp contact
The business contact email is: ismailbatti1234@gmail.com
Phone / WhatsApp: +92 315 4533297
Tell them our team will prepare their quotation promptly.`;

  const formattedMessages = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  // Fallback models in case of high demand spikes on any single model
  const modelsToTry = [
    'gemini-2.5-flash-lite',
    'gemini-flash-latest',
    'gemini-3.5-flash',
    'gemini-3.8-flash'
  ];

  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY.trim()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.3
          }
        })
      });

      const data = await response.json();

      if (response.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiMessage = data.candidates[0].content.parts[0].text;
        return res.status(200).json({ message: aiMessage });
      }

      // If high demand or temporary error, log and try next model
      lastError = data?.error?.message || `Model ${model} returned error status ${response.status}`;
      console.warn(`[Gemini Fallback] Model ${model} failed with: ${lastError}. Trying next model...`);
    } catch (err) {
      lastError = err.message;
      console.warn(`[Gemini Fallback] Network error on ${model}: ${err.message}. Trying next model...`);
    }
  }

  // Graceful fallback response if all Google models are temporarily under heavy load
  const latestUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
  let fallbackReply = "Welcome to Noor Layers MFG! We specialize in custom jackets, hoodies, sportswear, and private label manufacturing. To provide an accurate quotation, could you share the product type, estimated quantity, and destination country? You can also reach our team directly via WhatsApp at +92 315 4533297 or email ismailbatti1234@gmail.com.";

  if (latestUserMsg.includes('price') || latestUserMsg.includes('cost') || latestUserMsg.includes('how much')) {
    fallbackReply = "At Noor Layers MFG, pricing depends on your required quantity, fabric specifications, custom branding/embroidery, and shipping destination. Please let us know the quantity and specs you need so we can prepare an exact quotation for you!";
  } else if (latestUserMsg.includes('hoodie') || latestUserMsg.includes('jacket') || latestUserMsg.includes('shirt')) {
    fallbackReply = "Yes, we specialize in high-quality custom manufacturing for jackets, hoodies, sportswear, and teamwear. Do you have a design or logo ready, and what quantity are you looking to produce?";
  }

  return res.status(200).json({ message: fallbackReply });
}

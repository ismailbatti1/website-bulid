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

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Valid messages array is required' });
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
• Understand natural language and maintain conversation context across follow-up questions.
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

  // Filter and sanitize message history
  let rawList = messages
    .filter(m => m && typeof m.content === 'string' && m.content.trim().length > 0)
    .map(m => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      text: m.content.trim()
    }));

  // Discard any initial greeting/model messages so turn 0 is ALWAYS 'user'
  while (rawList.length > 0 && rawList[0].role === 'model') {
    rawList.shift();
  }

  // Keep last 10 messages for memory & speed
  if (rawList.length > 10) {
    rawList = rawList.slice(-10);
    while (rawList.length > 0 && rawList[0].role === 'model') {
      rawList.shift();
    }
  }

  if (rawList.length === 0) {
    return res.status(200).json({ message: "Hello! Welcome to Noor Layers MFG. How can I assist you with custom apparel or manufacturing today?" });
  }

  // Build strictly alternating list (user -> model -> user -> model ...)
  const contents = [];
  for (const item of rawList) {
    if (contents.length === 0) {
      if (item.role === 'user') {
        contents.push({ role: 'user', parts: [{ text: item.text }] });
      }
    } else {
      const last = contents[contents.length - 1];
      if (last.role === item.role) {
        last.parts[0].text += `\n${item.text}`;
      } else {
        contents.push({ role: item.role, parts: [{ text: item.text }] });
      }
    }
  }

  if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
    const fallbackText = rawList[rawList.length - 1]?.text || "Hello";
    contents.push({ role: 'user', parts: [{ text: fallbackText }] });
  }

  // Active models supported for new API keys
  const modelsToTry = [
    'gemini-3.8-flash',
    'gemini-3.7-flash',
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-flash-latest'
  ];

  for (const model of modelsToTry) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY.trim()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600
          }
        })
      });

      const data = await response.json();

      if (response.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiMessage = data.candidates[0].content.parts[0].text;
        return res.status(200).json({ message: aiMessage });
      }

      console.warn(`[Gemini Failover] Model ${model} returned:`, data?.error?.message || response.status);
    } catch (err) {
      console.warn(`[Gemini Failover] Network error on ${model}:`, err.message);
    }
  }

  // Graceful sales response if cloud AI has an intermittent outage
  const latestQuestion = rawList[rawList.length - 1]?.text?.toLowerCase() || '';
  let fallbackReply = "We can definitely help you with that! Noor Layers MFG manufactures custom jackets, hoodies, sportswear, and private label garments. To guide you with pricing and production, how many pieces do you need and do you have a design or reference image ready?";

  if (latestQuestion.includes('price') || latestQuestion.includes('cost') || latestQuestion.includes('how much') || latestQuestion.includes('rate')) {
    fallbackReply = "Our pricing is customized based on your required quantity, fabric specifications, custom branding/embroidery, and shipping destination. Please let us know the quantity and specs you need so we can prepare an exact quotation for you!";
  } else if (latestQuestion.includes('ship') || latestQuestion.includes('deliver') || latestQuestion.includes('country') || latestQuestion.includes('uk') || latestQuestion.includes('usa')) {
    fallbackReply = "Yes, we ship worldwide to international brands and businesses across the USA, UK, Europe, and beyond. Please share your delivery country and product details so we can guide your order.";
  } else if (latestQuestion.includes('jacket') || latestQuestion.includes('leather')) {
    fallbackReply = "Yes, we manufacture premium custom leather jackets and varsity jackets with customized embroidery, lining, and brand logos. What style and quantity are you looking to produce?";
  } else if (latestQuestion.includes('hoodie') || latestQuestion.includes('sweatshirt')) {
    fallbackReply = "Yes, we produce custom heavy-weight hoodies, fleece jackets, and streetwear with private labeling. How many pieces do you need, and do you have a logo ready?";
  }

  return res.status(200).json({ message: fallbackReply });
}

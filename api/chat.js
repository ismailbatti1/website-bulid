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

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AQ.Ab8RN6JKnBqOxbFYzBUr3a25qcPs3ZD6XXAG6xOV4sp3g4vEUQ";

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

  try {
    const formattedMessages = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`, {
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

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(500).json({ error: data?.error?.message || 'AI processing failed' });
    }

    const aiMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out. How else can Noor Layers MFG assist you?";
    return res.status(200).json({ message: aiMessage });
  } catch (err) {
    console.error('Chat API Error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

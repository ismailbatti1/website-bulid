(function() {
  // Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    #noor-chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: 'Inter', sans-serif;
    }
    #noor-chatbot-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #e9c176;
      color: #261900;
      border: none;
      box-shadow: 0 4px 14px rgba(0,0,0,0.4);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    #noor-chatbot-button:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 18px rgba(233,193,118,0.4);
    }
    #noor-chatbot-button .material-symbols-outlined {
      font-size: 32px;
    }
    #noor-chatbot-window {
      display: none;
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 360px;
      height: 520px;
      max-height: 80vh;
      background-color: #101417;
      border: 1px solid #323538;
      border-radius: 14px;
      box-shadow: 0 12px 36px rgba(0,0,0,0.6);
      flex-direction: column;
      overflow: hidden;
    }
    @media (max-width: 480px) {
      #noor-chatbot-container {
        bottom: 16px;
        right: 16px;
      }
      #noor-chatbot-window {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
        border-radius: 0;
        border: none;
      }
    }
    #noor-chatbot-header {
      background-color: #0b0f11;
      padding: 16px 18px;
      border-bottom: 2px solid #e9c176;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #noor-chatbot-header h3 {
      margin: 0;
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: 0.5px;
    }
    #noor-chatbot-header .close-btn {
      background: none;
      border: none;
      color: #8e8e93;
      cursor: pointer;
      font-size: 22px;
      line-height: 1;
      padding: 0 4px;
    }
    #noor-chatbot-header .close-btn:hover {
      color: #ffffff;
    }
    #noor-chatbot-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
    }
    .chat-msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 13.5px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .chat-msg.assistant {
      background-color: #191c1f;
      color: #e0e2e6;
      align-self: flex-start;
      border-bottom-left-radius: 2px;
      border: 1px solid #323538;
    }
    .chat-msg.user {
      background-color: #e9c176;
      color: #261900;
      font-weight: 500;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    #noor-chatbot-input-area {
      padding: 12px 14px;
      background-color: #0b0f11;
      border-top: 1px solid #323538;
      display: flex;
      gap: 8px;
    }
    #noor-chatbot-input {
      flex: 1;
      background-color: #191c1f;
      border: 1px solid #44474b;
      color: #e0e2e6;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 13.5px;
      outline: none;
    }
    #noor-chatbot-input:focus {
      border-color: #e9c176;
    }
    #noor-chatbot-send {
      background-color: #e9c176;
      color: #261900;
      border: none;
      border-radius: 8px;
      padding: 0 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    #noor-chatbot-send:hover {
      background-color: #ffdea5;
    }
    #noor-chatbot-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .typing-indicator {
      display: flex;
      gap: 4px;
      padding: 10px 14px;
      background-color: #191c1f;
      border-radius: 10px;
      align-self: flex-start;
      width: fit-content;
      border-bottom-left-radius: 2px;
      border: 1px solid #323538;
    }
    .typing-dot {
      width: 6px;
      height: 6px;
      background-color: #e9c176;
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out both;
    }
    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes typing {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const container = document.createElement('div');
  container.id = 'noor-chatbot-container';
  container.innerHTML = `
    <div id="noor-chatbot-window">
      <div id="noor-chatbot-header">
        <h3><span class="material-symbols-outlined" style="font-size: 20px; color: #e9c176;">support_agent</span> Noor Layers Assistant</h3>
        <button class="close-btn" id="noor-chatbot-close">&times;</button>
      </div>
      <div id="noor-chatbot-messages"></div>
      <div id="noor-chatbot-input-area">
        <input type="text" id="noor-chatbot-input" placeholder="Ask about products, MOQ, prices..." autocomplete="off" />
        <button id="noor-chatbot-send">Send</button>
      </div>
    </div>
    <button id="noor-chatbot-button" aria-label="Open Chat">
      <span class="material-symbols-outlined">chat</span>
    </button>
  `;
  document.body.appendChild(container);

  // State
  const button = document.getElementById('noor-chatbot-button');
  const chatWindow = document.getElementById('noor-chatbot-window');
  const closeBtn = document.getElementById('noor-chatbot-close');
  const messagesContainer = document.getElementById('noor-chatbot-messages');
  const input = document.getElementById('noor-chatbot-input');
  const sendBtn = document.getElementById('noor-chatbot-send');

  let isOpen = false;
  let chatHistory = [];
  let isWaiting = false;

  const renderBubble = (role, text) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ' + role;
    let formattedText = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
    msgDiv.innerHTML = formattedText;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const toggleChat = () => {
    isOpen = !isOpen;
    chatWindow.style.display = isOpen ? 'flex' : 'none';
    if (isOpen && messagesContainer.children.length === 0) {
      renderBubble('assistant', "Hi! Welcome to Noor Layers MFG. I'm here to help with custom apparel, manufacturing, product questions and quotations. What would you like to know?");
    }
    if (isOpen) {
      setTimeout(() => input.focus(), 150);
    }
  };

  button.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  const showTyping = () => {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const hideTyping = () => {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  };

  const sendMessage = async () => {
    if (isWaiting) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    renderBubble('user', text);
    chatHistory.push({ role: 'user', content: text });

    isWaiting = true;
    sendBtn.disabled = true;
    input.disabled = true;
    showTyping();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      });

      const data = await response.json();
      hideTyping();
      isWaiting = false;
      sendBtn.disabled = false;
      input.disabled = false;
      input.focus();

      if (response.ok && data.message) {
        renderBubble('assistant', data.message);
        chatHistory.push({ role: 'assistant', content: data.message });
      } else {
        renderBubble('assistant', data.message || "Thank you for contacting Noor Layers MFG. Please feel free to reach out via WhatsApp at +92 315 4533297 or email ismailbatti1234@gmail.com.");
      }
    } catch (err) {
      hideTyping();
      isWaiting = false;
      sendBtn.disabled = false;
      input.disabled = false;
      renderBubble('assistant', "We specialize in custom manufacturing for hoodies, jackets, and sportswear. You can also connect directly with our export desk on WhatsApp (+92 315 4533297).");
    }
  };

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

})();

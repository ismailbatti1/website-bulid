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
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    #noor-chatbot-button:hover {
      transform: scale(1.05);
    }
    #noor-chatbot-button .material-symbols-outlined {
      font-size: 32px;
    }
    #noor-chatbot-window {
      display: none;
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      background-color: #101417;
      border: 1px solid #323538;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
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
        width: 100%;
        height: 100%;
        border-radius: 0;
        border: none;
      }
    }
    #noor-chatbot-header {
      background-color: #0b0f11;
      padding: 16px;
      border-bottom: 2px solid #e9c176;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #noor-chatbot-header h3 {
      margin: 0;
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #noor-chatbot-header .close-btn {
      background: none;
      border: none;
      color: #8e8e93;
      cursor: pointer;
      font-size: 20px;
    }
    #noor-chatbot-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .chat-msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 14px;
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
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    #noor-chatbot-input-area {
      padding: 12px 16px;
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
      border-radius: 6px;
      font-size: 14px;
      outline: none;
    }
    #noor-chatbot-input:focus {
      border-color: #e9c176;
    }
    #noor-chatbot-send {
      background-color: #e9c176;
      color: #261900;
      border: none;
      border-radius: 6px;
      padding: 0 16px;
      font-weight: 600;
      cursor: pointer;
    }
    #noor-chatbot-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .typing-indicator {
      display: flex;
      gap: 4px;
      padding: 12px 16px;
      background-color: #191c1f;
      border-radius: 8px;
      align-self: flex-start;
      width: fit-content;
      border-bottom-left-radius: 2px;
      border: 1px solid #323538;
    }
    .typing-dot {
      width: 6px;
      height: 6px;
      background-color: #8e8e93;
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
        <input type="text" id="noor-chatbot-input" placeholder="Type your message..." autocomplete="off" />
        <button id="noor-chatbot-send">Send</button>
      </div>
    </div>
    <button id="noor-chatbot-button">
      <span class="material-symbols-outlined">chat</span>
    </button>
  `;
  document.body.appendChild(container);

  // Logic
  const button = document.getElementById('noor-chatbot-button');
  const chatWindow = document.getElementById('noor-chatbot-window');
  const closeBtn = document.getElementById('noor-chatbot-close');
  const messagesContainer = document.getElementById('noor-chatbot-messages');
  const input = document.getElementById('noor-chatbot-input');
  const sendBtn = document.getElementById('noor-chatbot-send');

  let isOpen = false;
  let chatHistory = [];
  let isWaiting = false;

  const toggleChat = () => {
    isOpen = !isOpen;
    chatWindow.style.display = isOpen ? 'flex' : 'none';
    if (isOpen && chatHistory.length === 0) {
      addMessage('assistant', "Hi! Welcome to Noor Layers MFG. I'm here to help with custom apparel, manufacturing, product questions and quotations. What would you like to know?");
    }
    if (isOpen) {
      setTimeout(() => input.focus(), 100);
    }
  };

  button.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  const addMessage = (role, text) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ' + role;
    // Basic formatting for bold text from AI (e.g., **text**)
    let formattedText = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
    msgDiv.innerHTML = formattedText;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    chatHistory.push({ role, content: text });
  };

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
    addMessage('user', text);
    isWaiting = true;
    sendBtn.disabled = true;
    input.disabled = true;
    showTyping();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: chatHistory.slice(0, -1).concat([{ role: 'user', content: text }]) }) // Ensure latest text is sent
      });

      const data = await response.json();
      hideTyping();
      isWaiting = false;
      sendBtn.disabled = false;
      input.disabled = false;
      input.focus();

      if (response.ok && data.message) {
        addMessage('assistant', data.message);
      } else {
        addMessage('assistant', "I'm currently unable to connect to the server (" + (data.error || response.status) + "). Please try again later.");
      }
    } catch (err) {
      hideTyping();
      isWaiting = false;
      sendBtn.disabled = false;
      input.disabled = false;
      addMessage('assistant', "Connection error. Please try again or use our contact form.");
    }
  };

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

})();

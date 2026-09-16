const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

function getReply(message) {
  const text = String(message || "").toLowerCase().trim();

  if (
    ["hi", "hello", "hey", "start", "menu"].includes(text)
  ) {
    return `👋 Welcome to FEGA AI Solutions!

I'm your virtual assistant. 🤖

How can I help you today?

1️⃣ Our Services
2️⃣ Frequently Asked Questions
3️⃣ Get a Quote
4️⃣ Speak to a Human

Reply with a number below.`;
  }

  if (
    text === "1" ||
    text.includes("service") ||
    text.includes("services")
  ) {
    return `📋 OUR SERVICES

1️⃣ WhatsApp Chatbots
2️⃣ Customer Support Bots
3️⃣ Lead Generation Bots
4️⃣ Booking Assistants
5️⃣ FAQ Automation

Reply with the number of a service to learn more.

Or type "menu" to return to the main menu.`;
  }

  if (text === "1️⃣" || text === "whatsapp chatbot" || text.includes("whatsapp chatbot")) {
    return `📱 WHATSAPP CHATBOTS

We create automated WhatsApp assistants that can:

✅ Welcome customers
✅ Answer common questions
✅ Display products & services
✅ Collect customer information
✅ Generate leads
✅ Hand conversations to a human

Would you like a quote?

Reply 3️⃣`;
  }

  if (text === "2" || text.includes("faq") || text.includes("frequently")) {
    return `❓ FREQUENTLY ASKED QUESTIONS

💬 What can the chatbot do?
It can answer questions, collect leads, show services and hand customers to a human.

💬 Can it collect customer details?
Yes. It can collect names, phone numbers, emails and service requirements.

💬 Can it help customers book appointments?
Yes. Booking flows can be customized for each business.

💬 Can I connect it to WhatsApp?
Yes. A production version can be connected to WhatsApp Cloud API.

Type "menu" to return to the main menu.`;
  }

  if (
    text === "3" ||
    text.includes("quote") ||
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost")
  ) {
    return `💰 GET A QUOTE

Great! Let's collect a few details.

Please send:

👤 Your Name
📱 Phone Number
📧 Email Address
🛍️ Service You Need
📝 Brief Description

Example:

Name: John
Phone: 08012345678
Email: john@example.com
Service: WhatsApp Chatbot
Description: I need a chatbot for my restaurant.

A team member can review your request.`;
  }

  if (
    text === "4" ||
    text.includes("human") ||
    text.includes("agent") ||
    text.includes("person")
  ) {
    return `👤 HUMAN SUPPORT

I'll connect you with a member of our team.

Please provide:

1. Your name
2. Your phone number
3. Your question

A team member will follow up with you.

⏰ Support hours:
Monday – Friday
9:00 AM – 5:00 PM`;
  }

  if (text === "2️⃣") {
    return `🤖 CUSTOMER SUPPORT

I can answer questions about our chatbot services.

Try asking:

• What services do you offer?
• Can you build a WhatsApp chatbot?
• Can the bot collect leads?
• Can it handle bookings?
• How do I get a quote?

Or type "menu".`;
  }

  if (text === "3️⃣") {
    return getReply("3");
  }

  if (text === "4️⃣") {
    return getReply("4");
  }

  if (text.includes("booking") || text.includes("appointment")) {
    return `📅 BOOKING ASSISTANT

Our booking bots can help customers:

✅ Choose a service
✅ Select a date
✅ Select a preferred time
✅ Provide contact details
✅ Receive booking confirmation

This can be customized for salons, restaurants, clinics, consultants and other businesses.

Reply 3️⃣ for a quote.`;
  }

  if (text.includes("lead") || text.includes("customer information")) {
    return `📊 LEAD GENERATION

The chatbot can collect:

👤 Customer name
📱 Phone number
📧 Email
🛍️ Product/service interest
📝 Customer requirements

This helps businesses capture potential customers automatically.

Reply 3️⃣ for a quote.`;
  }

  if (text.includes("restaurant")) {
    return `🍽️ RESTAURANT CHATBOT

A restaurant chatbot can:

📋 Show the menu
📅 Take booking requests
📍 Provide location information
💬 Answer FAQs
👤 Collect customer details
👨‍💼 Connect customers with staff

Reply 3️⃣ to request a quote.`;
  }

  return `🤖 I'm not completely sure about that.

I can help with:

1️⃣ Our Services
2️⃣ FAQs
3️⃣ Get a Quote
4️⃣ Speak to a Human

Reply with 1, 2, 3 or 4.

Type "menu" anytime to start again.`;
}

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FEGA AI Solutions | WhatsApp Chatbot Demo</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #dfe9e3, #f5f7f6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone {
  width: 390px;
  max-width: 100%;
  height: 760px;
  max-height: 100vh;
  background: #efeae2;
  box-shadow: 0 12px 45px rgba(0,0,0,.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  height: 72px;
  background: #075e54;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 12px;
}

.avatar {
  width: 46px;
  height: 46px;
  background: white;
  color: #075e54;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 19px;
}

.header-info {
  flex: 1;
}

.header-info strong {
  display: block;
  font-size: 16px;
}

.header-info small {
  opacity: .85;
  font-size: 12px;
}

.header-icons {
  font-size: 20px;
  letter-spacing: 5px;
}

.chat {
  flex: 1;
  padding: 18px 13px;
  overflow-y: auto;
  background-color: #efeae2;
  background-image:
    radial-gradient(rgba(0,0,0,.035) 1px, transparent 1px);
  background-size: 16px 16px;
}

.date {
  text-align: center;
  margin-bottom: 15px;
}

.date span {
  background: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  color: #667781;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}

.message {
  max-width: 86%;
  padding: 9px 11px 7px;
  margin: 7px 0;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.45;
  white-space: pre-line;
  word-wrap: break-word;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}

.bot {
  background: white;
  margin-right: auto;
  border-top-left-radius: 2px;
}

.user {
  background: #d9fdd3;
  margin-left: auto;
  border-top-right-radius: 2px;
}

.time {
  display: block;
  text-align: right;
  font-size: 10px;
  color: #667781;
  margin-top: 4px;
}

.input-area {
  background: #f0f2f5;
  padding: 8px;
  display: flex;
  gap: 7px;
  align-items: center;
}

.input-area input {
  flex: 1;
  border: none;
  outline: none;
  border-radius: 22px;
  padding: 13px 16px;
  font-size: 14px;
  background: white;
}

.send {
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: #128c7e;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.send:hover {
  background: #075e54;
}

.quick {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 7px 8px;
  background: #f0f2f5;
}

.quick button {
  white-space: nowrap;
  border: 1px solid #128c7e;
  background: white;
  color: #075e54;
  border-radius: 18px;
  padding: 7px 11px;
  cursor: pointer;
  font-size: 11px;
}

.demo-label {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: #111;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 10px;
  opacity: .75;
}

@media (max-width: 500px) {
  body {
    background: #efeae2;
  }

  .phone {
    width: 100%;
    height: 100vh;
    box-shadow: none;
  }

  .demo-label {
    display: none;
  }
}
</style>
</head>

<body>

<div class="phone">

  <div class="header">
    <div class="avatar">FE</div>

    <div class="header-info">
      <strong>FEGA AI Solutions</strong>
      <small>online • chatbot demo</small>
    </div>

    <div class="header-icons">⋮</div>
  </div>

  <div class="chat" id="chat">

    <div class="date">
      <span>TODAY</span>
    </div>

    <div class="message bot">
      👋 Welcome to FEGA AI Solutions!

I'm your virtual assistant. 🤖

How can I help you today?

1️⃣ Our Services
2️⃣ Frequently Asked Questions
3️⃣ Get a Quote
4️⃣ Speak to a Human

Reply with a number below.
      <span class="time">now ✓✓</span>
    </div>

  </div>

  <div class="quick">
    <button onclick="quickMessage('1')">Services</button>
    <button onclick="quickMessage('2')">FAQs</button>
    <button onclick="quickMessage('3')">Get Quote</button>
    <button onclick="quickMessage('4')">Human</button>
  </div>

  <div class="input-area">
    <input
      id="message"
      type="text"
      placeholder="Type a message"
      autocomplete="off"
    />
    <button class="send" onclick="sendMessage()">➤</button>
  </div>

</div>

<div class="demo-label">FEGA AI SOLUTIONS • WHATSAPP CHATBOT DEMO</div>

<script>
function addMessage(text, type) {
  const chat = document.getElementById("chat");

  const div = document.createElement("div");
  div.className = "message " + type;

  const content = document.createElement("span");
  content.textContent = text;

  const time = document.createElement("span");
  time.className = "time";
  time.textContent = type === "user" ? "now ✓✓" : "now";

  div.appendChild(content);
  div.appendChild(time);

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("message");
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    setTimeout(() => {
      addMessage(data.reply, "bot");
    }, 350);

  } catch (error) {
    addMessage(
      "Sorry, something went wrong. Please try again.",
      "bot"
    );
  }
}

function quickMessage(message) {
  document.getElementById("message").value = message;
  sendMessage();
}

document
  .getElementById("message")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
</script>

</body>
</html>`);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    chatbot: "FEGA AI Solutions"
  });
});

app.post("/api/chat", (req, res) => {
  res.json({
    reply: getReply(req.body.message)
  });
});

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log(" FEGA AI SOLUTIONS");
  console.log(" WhatsApp Chatbot Demo");
  console.log("======================================");
  console.log("Running on port " + PORT);
  console.log("");
});

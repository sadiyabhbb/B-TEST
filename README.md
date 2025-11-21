# 🤖 Node.js Coding Telegram Bot ⚙️💻 Developed by MOHAMMAD~BADOL⏰💬

<p align="center">
  <strong>Bot Username:</strong> <a href="https://t.me/B4D9LBOT">@B4D9LBOT</a>  
  <br />
  <strong>Development Spot:</strong> Node.js Telegram Bot using <code>node-telegram-bot-api</code>  
  <br />
  <strong>Owner & Admin:</strong> MOHAMMAD~BADOL
</p>

<p align="center">
  <img src="https://i.imgur.com/87eq6SG.jpeg" alt="Bot Logo" width="800" />
</p>

---

## 📌 Bot পরিচিতি

`@B4D9LBOT` হলো একটি প্রফেশনাল Telegram Bot, যা ডিজাইন করা হয়েছে টেলিগ্রাম গ্রুপ ম্যানেজমেন্ট, ইউজার রেসপন্স, এবং উন্নত কমান্ড সিস্টেমের জন্য। এটি বিশেষভাবে **`node-telegram-bot-api`** ব্যবহার করে তৈরি করা হয়েছে।

---

## ⚙️ ফিচারসমূহ

- ✅ Auto-reply system & Custom Commands  
- ✅ ইউজার র‍্যাংকিং এবং চ্যাট ট্র্যাকিং  
- ✅ অ্যাডমিন কন্ট্রোল প্যানেল সাপোর্ট  
- ✅ গ্রুপ সিকিউরিটি ও ম্যানেজমেন্ট টুলস  
- ✅ 24/7 Uptime and Monitoring  

---

## 🎥 ফিচার GIF

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRxbDZ6ODAxZHQ4ZDN2djh6MmRxNzE4Zjh2anA1Zmt2dWluZDNraCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RbDKaczqWovIugyJtK/giphy.gif" width="600" alt="Bot Feature Demo" />
</p>

---

## 📱 QR কোড দিয়ে এক ক্লিকে খুলুন

<p align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://t.me/B4D9LBOT" alt="Scan to open @B4D9LBOT on Telegram" />
</p>

> 📲 মোবাইলে QR কোড স্ক্যান করলেই সরাসরি [@B4D9LBOT](https://t.me/B4D9LBOT) খুলে যাবে।

---

json### 📂 File Structure

BADOL-BOT/
├─ index.js
├─ config.js
├─ BADOL/
│  ├─ cmd/
│  │  ├─ start.js
│  │  ├─ help.js
│  │  └─ ban.js
│  ├─ event/
│  │  └─ onNewMember.js
│  └─ middlewares/
│     └─ banner.js
└─ config/
   └─ subscribers.json

## 💬 বটের কমান্ড তালিকা

| কমান্ড | কাজ |
|--------|-----|
| `/start` | বট চালু করা |
| `/help` | সমস্ত কমান্ডের সাহায্য মেনু |
| `/rules` | গ্রুপের নিয়ম দেখায় |
| `/info` | ইউজার বা গ্রুপ ইনফো |
| `/warn` | ইউজারকে ওয়ার্ন |
| `/ban` | ইউজারকে ব্যান |
| `/unban` | ব্যান তোলা |
| `/mute` | নিরব করা |
| `/unmute` | নিরব তোলা |
| `/adminlist` | অ্যাডমিন লিস্ট |

---

## 🧩 বট কাস্টমাইজ করতে চান?

আপনার নিজের Telegram গ্রুপ বা কমিউনিটির জন্য এমন বট কাস্টমাইজ করতে চান?

📌 ফিচার পরিবর্তন, নিজের নাম বা ব্র্যান্ড বসানো, অথবা এক্সট্রা অপশন যোগ করতে চাইলে যোগাযোগ করুন।  

👉 **যোগাযোগ:** [@B4D9L_007](https://t.me/B4D9L_007)

---

## 🔗 All-in-One Contact Links

- 📘 Facebook ID: [facebook.com/B4D9L](https://www.facebook.com/B4D9L)  
- 📄 Facebook Page: [facebook.com/ITZ.BADOL.VAI](https://www.facebook.com/ITZ.BADOL.VAI)  
- 👥 Facebook Group: [Technical BADOL VAI Group](https://facebook.com/groups/technical.badol.vai.muslim.cyber/)  
- ✈️ Telegram ID: [@B4D9L_007](https://t.me/B4D9L_007)  
- 💬 Telegram Group: [Mr.Editor Zone](https://t.me/mreditorzone)  
- 📢 Telegram Channel: [SB MODS APK](https://t.me/SB_MODS_APK)  
- 🤖 Telegram Bot: [@B4D9LBOT](https://t.me/B4D9LBOT)  

---

## 🚀 কিভাবে শুরু করবেন

1. Node.js ইনস্টল করুন: https://nodejs.org/  
2. নতুন ফোল্ডার তৈরি করে **package.json** তৈরি করুন:  
```bnpm
---

## 🔹 Example Command: `/start`

```javascript
// BADOL/cmd/start.js
module.exports = {
    config: {
        name: "start",
        description: "Welcome message for new users",
        usage: "/start",
        aliases: ["hello"]
    },
    onStart: async ({ bot, msg, args }) => {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, `👋 স্বাগতম ${msg.from.first_name}! আমি BADOL-BOT।`);
    },
    onChat: async ({ bot, msg }) => {
        if ((msg.text || "").toLowerCase().includes("hello")) {
            await bot.sendMessage(msg.chat.id, `হাই ${msg.from.first_name}! 😄`);
        }
    },
    onReply: async ({ bot, msg }) => {
        if (msg.reply_to_message && msg.reply_to_message.text.includes("BADOL-BOT")) {
            await bot.sendMessage(msg.chat.id, "আপনি /start এর reply দিয়েছেন! ✅");
        }
    }
};

git clone https://github.com/Badol-Bot-00761/BADOL.git

npm init -y

npm install node-telegram-bot-api

# ✨ BADOL-BOT ✨

![BADOL-BOT Banner](https://i.ibb.co/7yV5Y3K/badol-bot-banner.png)  
![BADOL-BOT](https://img.shields.io/badge/BADOL--BOT-v1.0.0-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=for-the-badge)
![Telegram](https://img.shields.io/badge/Telegram-Bot-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Chat](https://img.shields.io/badge/Telegram-Chat-blue)

![BADOL-BOT Demo](https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif)

BADOL-BOT হল একটি **highly advanced Telegram Bot**, যা `node-telegram-bot-api` ব্যবহার করে তৈরি।  
এটি স্বয়ংক্রিয় ফিচার, মডুলার কমান্ড সাপোর্ট এবং উন্নত মডারেশন টুলস সহ আসে।  

---

## 📌 Bot Dashboard

<details>
<summary>🤖 Bot Information</summary>

| Feature       | Details                          |
|---------------|---------------------------------|
| **Bot Name**  | BADOL-BOT                        |
| **Prefix**    | `/`                               |
| **Platform**  | node-telegram-bot-api            |
| **Coded By**  | Mohammad Badol                   |
| **Version**   | 1.0.0                            |

</details>

<details>
<summary>⚡ Features</summary>

- ✅ Modular Commands  
- ✅ Works with and without Prefix  
- ✅ Auto Suggestion  
- ✅ Events & onChat Handling  
- ✅ Verify System  
- ✅ Subscriber Management  
- ✅ GitHub Ban System  
- ✅ Admin Notifications  

</details>

<details>
<summary>🛠 Middlewares</summary>

| Middleware       | Description |
|-----------------|-------------|
| ⏰ **AutoTime**       | Automatically handles time-related events |
| 🗣 **All Mention**    | Notifies on all mentions |
| 🚫 **AntiLink**       | Prevents unwanted links |
| ❤️ **AutoReact**      | Automatically reacts to messages |
| ✅ **Verify Group**   | Ensures group verification |

</details>

<details>
<summary>📂 Commands & Usage</summary>

| Command | Icon | Description | Usage Example |
|---------|------|-------------|---------------|
| `/start` | 🚀 | <span title="Initialize the bot">Start the bot</span> | `/start` |
| `/help`  | ❓ | <span title="Shows help menu">Help menu</span> | `/help` |
| `/verify` | ✅ | <span title="Verify user in group">Verify user</span> | `/verify @username` |
| `/ban`  | ⛔ | <span title="Ban a user">Ban user</span> | `/ban @username` |
| `/subs` | 📋 | <span title="Manage subscribers">Subscriber management</span> | `/subs add @username` |

</details>

<details>
<summary>🎨 Screenshots / Demo</summary>

![BADOL-BOT Screenshot](https://media.giphy.com/media/26xBwdIuRJiAiIuL6/giphy.gif)  
![BADOL-BOT Demo](https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif)  
![New Feature Screenshot](https://i.ibb.co/k6GzV0F/badol-bot-feature.png)

</details>

---

## 📱 QR কোড দিয়ে এক ক্লিকে খুলুন

<p align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://t.me/B4D9LBOT" alt="Scan to open @B4D9LBOT on Telegram" />
</p>

> 📲 মোবাইলে QR কোড স্ক্যান করলেই সরাসরি [@B4D9LBOT](https://t.me/B4D9LBOT) খুলে যাবে।

---

## 🧩 বট কাস্টমাইজ করতে চান?

আপনার নিজের Telegram গ্রুপ বা কমিউনিটির জন্য এমন বট কাস্টমাইজ করতে চান?

📌 ফিচার পরিবর্তন, নিজের নাম বা ব্র্যান্ড বসানো, অথবা এক্সট্রা অপশন যোগ করতে চাইলে যোগাযোগ করুন।

👉 **যোগাযোগ:** [@B4D9L_007](https://t.me/B4D9L_007)

---

## 🔗 All-in-One Contact Links

সব তথ্য একসাথে এখানে পেয়ে যাবেন — আপনার প্রয়োজনে নিচের যেকোনো লিংকে ক্লিক করুন:

- 📘 Facebook ID: [facebook.com/B4D9L](https://www.facebook.com/B4D9L)
- 📄 Facebook Page: [facebook.com/ITZ.BADOL.VAI](https://www.facebook.com/ITZ.BADOL.VAI)
- 👥 Facebook Group: [Technical BADOL VAI Group](https://facebook.com/groups/technical.badol.vai.muslim.cyber/)
- ✈️ Telegram ID: [@B4D9L_007](https://t.me/B4D9L_007)
- 💬 Telegram Group: [Mr.Editor Zone](https://t.me/mreditorzone)
- 📢 Telegram Channel: [SB MODS APK](https://t.me/SB_MODS_APK)
- 🤖 Telegram Bot: [@B4D9LBOT](https://t.me/B4D9LBOT)

---

## ⚙️ Getting Started

<details>
<summary>Click to expand setup instructions</summary>

1. Clone the repository:  
   ```bash
   git clone https://github.com/Badol-Bot-00761/BADOL.git

### 📂 File Structure

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

// BADOL/event/onNewMember.js
module.exports = {
    config: {
        name: "onNewMember",
        description: "Triggered when a new member joins the group"
    },
    onChat: async ({ bot, msg }) => {
        const chatId = msg.chat.id;
        if (msg.new_chat_members && msg.new_chat_members.length > 0) {
            for (const user of msg.new_chat_members) {
                await bot.sendMessage(chatId, `🎉 স্বাগতম ${user.first_name}!`);
            }
        }
    }
};

Install dependencies:

npm install 

Add Bot Token:

BOT_TOKEN=your_telegram_bot_token 

Run the Bot:

node index.js

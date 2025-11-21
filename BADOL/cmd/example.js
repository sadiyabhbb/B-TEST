module.exports = {
    config: {
        name: "example",
        description: "Example command with onStart, onChat, onReply",
        usage: "example"
    },

    // ================= onStart =================
    onStart: async ({ bot, msg, args }) => {
        await bot.sendMessage(msg.chat.id, `✅ Command executed! Args: ${args.join(" ")}`);
    },

    // ================= onChat =================
    onChat: async ({ bot, msg }) => {
        // কোনো মেসেজে "hello" লিখলে রেসপন্স
        if (msg.text && msg.text.toLowerCase().includes("hello")) {
            await bot.sendMessage(msg.chat.id, `👋 Hello, ${msg.from.first_name}!`);
        }
    },

    // ================= onReply =================
    onReply: async ({ bot, msg, repliedMsg }) => {
        // ইউজার যদি বটের মেসেজের রিপ্লাই দেয়
        if (repliedMsg && repliedMsg.from.is_bot) {
            await bot.sendMessage(msg.chat.id, `✏️ Thanks for replying to my message, ${msg.from.first_name}!`);
        }
    }
};



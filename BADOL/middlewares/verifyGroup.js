module.exports = async (bot, msg) => {

    try {

        const chatId = msg.chat.id;

        if (msg.chat.type === "private") return;

        if (msg.from.is_bot) return;

        const text = msg.text || "";

        // Simple verification logic

        if (text.match(/hi|hello|assalamu/i)) {

            await bot.sendMessage(

                chatId,

                `👋 Welcome ${msg.from.first_name}! Please follow the group rules.`

            );

        }

    } catch (err) {

        console.error("VerifyGroup Error:", err.message);

    }

};
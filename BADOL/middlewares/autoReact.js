module.exports = async (bot, msg) => {

    try {

        const emojis = ["👍", "❤️", "🔥", "😁", "👌", "🤩"];

        const pick = emojis[Math.floor(Math.random() * emojis.length)];

        await bot._request("setMessageReaction", {

            qs: {

                chat_id: msg.chat.id,

                message_id: msg.message_id,

                reaction: JSON.stringify([{ type: "emoji", emoji: pick }])

            }

        });

    } catch (err) {

        // ignore reaction errors

        console.error("Reaction error:", err.message);

    }

};
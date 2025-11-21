// ==================== verifyGroup.js ====================
const { REQUIRED_CHATS } = require("./config");

function initVerifyGroup(bot, bannedUsers = []) {

    // Verify User Function
    async function verifyUser(msg, next) {
        try {
            const userId = msg.from.id;
            if (!userId) return;

            const requiredGroups = Array.isArray(REQUIRED_CHATS) ? REQUIRED_CHATS : [];
            const notJoined = [];

            // Always check in real-time
            for (const groupObj of requiredGroups) {
                let groupId = groupObj.id;
                if (!groupId) continue;

                const chatIdentifier = groupId.startsWith("@")
                    ? groupId
                    : groupId.replace("https://t.me/", "@");

                try {
                    const member = await bot.getChatMember(chatIdentifier, userId);

                    // If user left OR kicked, count as not joined
                    if (["left", "kicked"].includes(member.status)) {
                        notJoined.push(groupObj);
                    }
                } catch {
                    notJoined.push(groupObj);
                }
            }

            if (notJoined.length > 0) {
                return sendNotJoinedMessage(msg.chat.id, notJoined);
            }

            // User is verified
            await next();

        } catch (err) {
            console.error("⚠️ Group verification failed:", err);
            await bot.sendMessage(msg.chat.id, "⚠️ কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন।");
        }
    }

    // Function to send the "not joined groups" message
    async function sendNotJoinedMessage(chatId, notJoined) {
        const buttons = notJoined.map(g => {
            const url = g.id.startsWith("@")
                ? `https://t.me/${g.id.replace("@", "")}`
                : g.id;

            const buttonText = g.name || g.id;
            return [{ text: `🔗 Join ${buttonText}`, url }];
        });

        // Add "Check Again" button
        buttons.push([{ text: "✅ আবার চেক করুন", callback_data: "check_join" }]);

        await bot.sendMessage(
            chatId,
            `🔒 আপনি এখনও নিচের ${notJoined.length}টি গ্রুপে জয়েন করেননি:\nদয়া করে জয়েন করুন 👇`,
            { reply_markup: { inline_keyboard: buttons } }
        );
    }

    // Callback Query Handler
    bot.on("callback_query", async (query) => {
        try {
            if (query.data === "check_join") {
                const userId = query.from.id;

                const stillNotJoined = [];

                for (const groupObj of REQUIRED_CHATS) {
                    const chatIdentifier = groupObj.id.startsWith("@")
                        ? groupObj.id
                        : groupObj.id.replace("https://t.me/", "@");

                    try {
                        const member = await bot.getChatMember(chatIdentifier, userId);
                        if (["left", "kicked"].includes(member.status)) {
                            stillNotJoined.push(groupObj);
                        }
                    } catch {
                        stillNotJoined.push(groupObj);
                    }
                }

                await bot.answerCallbackQuery(query.id);

                if (stillNotJoined.length === 0) {
                    await bot.editMessageText(
                        "✅ ধন্যবাদ! আপনি এখন বট ব্যবহার করতে পারবেন।",
                        {
                            chat_id: query.message.chat.id,
                            message_id: query.message.message_id
                        }
                    );
                } else {
                    const buttons = stillNotJoined.map(g => {
                        const url = g.id.startsWith("@")
                            ? `https://t.me/${g.id.replace("@", "")}`
                            : g.id;

                        const buttonText = g.name || g.id;
                        return [{ text: `🔗 Join ${buttonText}`, url }];
                    });

                    buttons.push([{ text: "✅ আবার চেক করুন", callback_data: "check_join" }]);

                    await bot.editMessageText(
                        `❌ আপনি এখনও ${stillNotJoined.length}টি গ্রুপে জয়েন করেননি। দয়া করে জয়েন করুন 👇`,
                        {
                            chat_id: query.message.chat.id,
                            message_id: query.message.message_id,
                            reply_markup: { inline_keyboard: buttons }
                        }
                    );
                }
            }
        } catch (err) {
            console.error("⚠️ Callback Query failed:", err);
        }
    });

    return verifyUser;
}

module.exports = initVerifyGroup;

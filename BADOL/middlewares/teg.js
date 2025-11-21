// ==================== ALL Mention Middleware ====================

const fs = require("fs");

const path = require("path");

const config = require("../../config");

// --- Load member list dynamically ---

function getGroupMembers(chatId) {

    const membersDir = path.join(__dirname, "../../config", "members");

    const filePath = path.join(membersDir, `members_${chatId}.json`);

    if (fs.existsSync(filePath)) {

        try {

            const data = fs.readFileSync(filePath, "utf-8");

            return JSON.parse(data);

        } catch (err) {

            console.error("Failed to read group member data:", err);

            return {};

        }

    }

    return {};

}

module.exports = function allMentionMiddleware(bot) {

    bot.on("message", async (msg) => {

        try {

            if (!msg.text) return;

            const chatId = msg.chat.id;

            const rawText = msg.text.trim();

            // PREFIX চেক করা (/all বা !all বা আপনার prefix)

            const prefix = config.BOT_SETTINGS.PREFIX;

            if (!rawText.startsWith(prefix + "teg")) return;

            // প্রাইভেট চ্যাটে ব্লক

            if (msg.chat.type === "private") {

                return bot.sendMessage(chatId, "❌ এই কমান্ডটি শুধুমাত্র গ্রুপে ব্যবহার করা যাবে।", {

                    reply_to_message_id: msg.message_id

                });

            }

            // /all message text

            const args = rawText.split(" ").slice(1);

            const messageText =

                args.length > 0

                    ? args.join(" ")

                    : "ওয়েলকাম সবাইকে, যারা ফ্রি আছেন সবাই চলে আসেন!";

            // গ্রুপ সদস্য লোড

            const members = getGroupMembers(chatId);

            const usersToMention = Object.values(members);

            if (usersToMention.length === 0) {

                return bot.sendMessage(

                    chatId,

                    "⚠️ এই গ্রুপে মেসেজ করেছে এমন কোনো সদস্যের তালিকা নেই।",

                    { reply_to_message_id: msg.message_id }

                );

            }

            const botInfo = await bot.getMe();

            const mentionsPerMessage = 5;

            let mentionMessages = [];

            let block = [];

            for (const user of usersToMention) {

                if (user.id == botInfo.id) continue;

                const mention = `◎ [${user.name || "User"}](tg://user?id=${user.id})`;

                block.push(mention);

                // প্রতি ৫ জনে নতুন মেসেজ

                if (block.length >= mentionsPerMessage) {

                    mentionMessages.push(block.join("\n"));

                    block = [];

                }

            }

            // লাস্ট ব্লক

            if (block.length > 0) mentionMessages.push(block.join("\n"));

            // মূল মেসেজ পাঠানো

            await bot.sendMessage(

                chatId,

                `📣 ওয়েলকাম সবাইকে,\n${messageText}\n`,

                {

                    reply_to_message_id: msg.message_id,

                    parse_mode: "Markdown"

                }

            );

            // ব্লক মেসেজগুলো পাঠানো

            for (const mentionBlock of mentionMessages) {

                await bot.sendMessage(chatId, mentionBlock, {

                    parse_mode: "Markdown"

                });

                await new Promise((resolve) => setTimeout(resolve, 500));

            }

        } catch (error) {

            console.error("[ALL MIDDLEWARE ERROR]:", error);

        }

    });

};
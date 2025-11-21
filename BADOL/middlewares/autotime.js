const moment = require("moment-timezone");
const fs = require("fs");
const path = require("path");

module.exports = (bot) => {
    console.log("⏳ AutoTime Middleware Loaded...");

    const timeMessages = {
        "12:00:00 PM": "🔔 এখন সময় দুপুর 12:00 PM",
        "01:00:00 AM": "🔔 এখন সময় রাত 1:00 AM",
        "02:00:00 AM": "🔔 এখন সময় রাত 2:00 AM",
        "03:00:00 AM": "🔔 এখন সময় রাত 3:00 AM",
        "04:00:00 AM": "🔔 এখন সময় রাত 4:00 AM",
        "05:00:00 AM": "🔔 এখন সময় ভোর 5:00 AM",
        "06:00:00 AM": "🔔 এখন সময় সকাল 6:00 AM",
        "07:00:00 AM": "🔔 এখন সময় সকাল 7:00 AM",
        "08:00:00 AM": "🔔 এখন সময় সকাল 8:00 AM",
        "09:00:00 AM": "🔔 এখন সময় সকাল 9:00 AM",
        "10:00:00 AM": "🔔 এখন সময় সকাল 10:00 AM",
        "11:00:00 AM": "🔔 এখন সময় সকাল 11:00 AM",
        "01:00:00 PM": "🔔 এখন সময় দুপুর 1:00 PM",
        "02:00:00 PM": "🔔 এখন সময় দুপুর 2:00 PM",
        "03:00:00 PM": "🔔 এখন সময় দুপুর 3:00 PM",
        "04:00:00 PM": "🔔 এখন সময় বিকাল 4:00 PM",
        "05:00:00 PM": "🔔 এখন সময় বিকাল 5:00 PM",
        "06:00:00 PM": "🔔 এখন সময় সন্ধ্যা 6:00 PM",
        "07:00:00 PM": "🔔 এখন সময় রাত 7:00 PM",
        "08:00:00 PM": "🔔 এখন সময় রাত 8:00 PM",
        "09:00:00 PM": "🔔 এখন সময় রাত 9:00 PM",
        "10:00:00 PM": "🔔 এখন সময় রাত 10:00 PM",
        "11:00:00 PM": "🔔 এখন সময় রাত 11:00 PM"
    };

    const dataFile = path.join(__dirname, "autoTimeData.json");

    // Load saved state
    let state = { lastSent: {}, groups: [] };
    if (fs.existsSync(dataFile)) {
        try {
            state = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
        } catch {}
    }

    const saveState = () => fs.writeFileSync(dataFile, JSON.stringify(state, null, 2));

    // Track groups
    bot.on("message", msg => {
        if (msg.chat?.type !== "private" && !state.groups.includes(msg.chat.id)) {
            state.groups.push(msg.chat.id);
            saveState();
        }
    });

    const run = async () => {
        const now = moment().tz("Asia/Dhaka");
        const time = now.format("hh:mm:ss A");

        if (timeMessages[time]) {
            for (let chatId of state.groups) {
                // Check if already sent this time
                if (!state.lastSent[chatId]) state.lastSent[chatId] = {};
                if (!state.lastSent[chatId][time]) {
                    try {
                        await bot.sendMessage(chatId, timeMessages[time]);
                        state.lastSent[chatId][time] = true;
                        saveState();
                    } catch (err) {
                        console.log("AutoTime Error:", err.message);
                    }
                }
            }
        }

        setTimeout(run, 1000); // check every second
    };

    run();
};

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "cmds"],
        description: "Shows all available commands.",
        usage: "/help [command]"
    },

    onStart: async ({ bot, msg, args, commands }) => {
        const commandName = args[0]?.toLowerCase();

        const FRAME_HEADER = "╭━─━─━❮𝐁𝐀𝐃𝐎𝐋-𝐁𝐎𝐓❯━─━─━╮\n├‣ 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋\n╰━──━─━─━━──━─━─━─━❍\n\n";
        const FRAME_LINE = "├‣ ";
        const FRAME_FOOTER = "╰━──━─━─━━──━━─━━─━━─━❍";

        if (commandName) {
            const cmdModule = commands.get(commandName) ||
                Array.from(commands.values()).find(cmd => cmd.config.aliases?.includes(commandName));

            if (!cmdModule) {
                return bot.sendMessage(msg.chat.id, `❌ Command \`${commandName}\` not found!`, { parse_mode: "Markdown" });
            }

            const { name, description, aliases, usage } = cmdModule.config;
            const ownerName = cmdModule.config.owner || global.DEFAULT_OWNER;
            const aliasText = aliases?.length ? aliases.map(a => `/${a}`).join(", ") : "None";

            let detail = `${FRAME_HEADER}`;
            detail += "╭━─━─━❮✿ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐈𝐍𝐅𝐎 ✿❯━─━─━╮\n";
            detail += `${FRAME_LINE}📘 **Command:** /${name}\n`;
            detail += `${FRAME_LINE}📄 **Description:** ${description || "No description"}\n`;
            detail += `${FRAME_LINE}⚙️ **Usage:** \`${usage || `/${name}`}\`\n`;
            detail += `${FRAME_LINE}🔁 **Aliases:** ${aliasText}\n`;
            detail += `${FRAME_LINE}👑 **Owner:** ${ownerName}\n`;
            detail += FRAME_FOOTER;

            return bot.sendMessage(msg.chat.id, detail, { parse_mode: "Markdown" });
        }

        const commandList = Array.from(commands.values())
            .sort((a, b) => a.config.name.localeCompare(b.config.name))
            .map((cmd, i) => `🤖${i + 1} /${cmd.config.name}`)
            .join("\n");

        let replyText = FRAME_HEADER;
        replyText += "╭━─━─━❮✿ 𝐇𝐞𝐥𝐩 𝐂𝐦𝐝 𝐋𝐢𝐬𝐭 ✿❯━─━─━╮\n";
        replyText += FRAME_LINE + commandList.replace(/\n/g, `\n${FRAME_LINE}`) + "\n";
        replyText += `${FRAME_LINE}📊 **Total Commands:** ${commands.size}\n`;
        replyText += FRAME_FOOTER;
        replyText += "\n\n*Use* `/help <command>` *for details.*";

        return bot.sendMessage(msg.chat.id, replyText, { parse_mode: "Markdown", disable_web_page_preview: true });
    }
};


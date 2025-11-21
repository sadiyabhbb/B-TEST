module.exports = {
  config: {
    name: "welcome",
    description: "Sends a detailed welcome message when a new user joins",
  },

  onChat: async ({ bot, msg }) => {
    if (msg.new_chat_members && msg.new_chat_members.length > 0) {
      const chatId = msg.chat.id;
      const chatTitle = msg.chat.title || "this group";
      const addedBy = msg.from ? msg.from.first_name : "Someone";

      for (const newUser of msg.new_chat_members) {
        const name = newUser.first_name || "User";
        const username = newUser.username ? `@${newUser.username}` : "";

        const welcomeText = `
╭─❮🎉 Welcome! 🎉❯─╮
├‣ Name       : ${name} ${username}
├‣ Added By   : ${addedBy}
├‣ Group      : ${chatTitle}
├‣ Message    : Welcome to the group! 🎊
├‣ Tip        : Use ${process.env.PREFIX || "/"}help to see commands
╰───────────────❍
`;

        try {
          await bot.sendMessage(chatId, welcomeText);
        } catch (err) {
          console.error(`❌ Failed to send welcome message:`, err.message);
        }
      }
    }
  },

  onReply: null,
};

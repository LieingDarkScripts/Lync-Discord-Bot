// Programmed by Ben. S. Created on 4/12/2022; 3:58 PM

const Discord = require("discord.js");
const {LyncsToken} = process.env; // Heroku configuration variables

const Client = new Discord.Client({
    intents: ["GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_SCHEDULED_EVENTS",
    ]
});

Client.login(Ly)

Client.on("messageCreate", (Message) => {

    const {content, reply, bot} = Message;

    if (bot) {
       return;
    }

    Message.reply("i love men");

});

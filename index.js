// Programmed by Ben. S. Created on 4/12/2022; 3:58 PM


// Constants
const Discord = require("discord.js");
const {LyncsToken, ClientId, GuildId} = process.env; // Heroku configuration variables

const {REST} = require("@discordjs/rest")
const {SlashCommandBuilder} = require("@discordjs/builders")
const {Routes} = require("discord-api-types/v9")

const Client = new Discord.Client({
    intents: ["GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
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

const CommandBuilderRest = new REST({ version: '9'}).setToken(LyncsToken)

// Command creation

console.log("1")

const LynkCommands = [
    new SlashCommandBuilder()
    .setName("archive")
    .setDescription("Archive an attachment to be saved under a name.")
    .addStringOption(Option => {
        Option.setName("key")
        .setDescription("The name to archive the attachment under. *This can also be a path (seperated by )*")
        .setRequired(true)
        Option.addStringOption(Option2 => {
            Option2.setName("archive Type")
            Option2.setDescription("Whether to archive locally or globally")
            Option2.addChoice("local", "Locally")
            Option2.addChoice("global", "Globally")
        })
        
    })
].map(LynkCommand => LynkCommand.toJSON());

console.log(LynkCommands)


// Client Init

Client.login(LyncsToken)
CommandBuilderRest.put(Routes.applicationGuildCommands(ClientId, GuildId, {body: LynkCommands}))
    .then(() => console.log("registered"))
    .catch(console.error);


Client.on("messageCreate", (Message) => {

    const {content, reply, bot} = Message;

    if (Message.author.bot) {
       return;
    }

    Message.reply("i love men");

});



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

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());


const LynksCommands = [
    new SlashCommandBuilder()
    .setName('archvive')
    .setDescription('Archive an attachment with a key')
    .addUserOption(Option => {
        Option
            
            .setName("archive_key")
            .setDescription("the name which the attachment will be saved under. *can be a path(seperated by '/')*")
            .setRequired(true)

    })
].map(LynkCommand => LynkCommand.toJSON())
const rest = new REST({ version: '9' }).setToken(LyncsToken);

rest.put(Routes.applicationGuildCommands(ClientId, GuildId), { body: LynksCommands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


// Client Init

Client.login(LyncsToken)


Client.on("messageCreate", (Message) => {

    const {content, reply, bot} = Message;

    if (Message.author.bot) {
       return;
    }

    Message.reply("i love men");

});



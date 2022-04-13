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


 const LynkCommands = [
    new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info about a user or a server!')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addStringOption(Option => Option
                .setName("die")
                .setDescription("i said die")
                ))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server'))
 ];

 const LynksCommands = [
     new SlashCommandBuilder()
     .setName("archive")
     .setDescription("Archive an attachment")
     .addStringOption(Option => Option
        .setName("key")
        .setDescription("the name which the attachment will be saved under. *can be a path(seperated by '/')*")
        .setRequired(true)

        )
    .addStringOption(Option => Option
        .setName("archive type")
        .setDescription("describes which way to archive")
        .addChoice("local", "locally(exclusively you)")
        .addChoice("global", "globally(server)")
        )
 ]

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



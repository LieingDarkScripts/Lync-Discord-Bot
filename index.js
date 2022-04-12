// Programmed by Ben. S. Created on 4/12/2022; 3:58 PM

const Discord = require("discord.js");
const {MessageEmbed} = Discord;

const {LyncsToken} = process.env; // Heroku configuration variables

const Client = new Discord.Client();

Client.login(LyncsToken)

Client.on("messageCreate", (Message) => {

    const {content, reply, bot} = Message;

    if (bot) {
       return;
    }

    reply(content.length);

});

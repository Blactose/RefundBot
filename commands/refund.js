const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
module.exports = {
    commands: ['refund'],
    minArgs: 0,
    callback: (message, arguments, text) => {

        message.channel.send('`We do not do refunds here.`');

    }
}
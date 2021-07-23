const { catchErr } = require('../handlers/command_handler');
module.exports = {
    name: 'suggest',
    description: "sends a suggestion in a specific channel",
    cooldown: 60,
    permissions: [],
    execute(client, message, args, Discord) {
        try {
            const msg = message.content();
            const channel = message.guild.channels.cache.find(c => c.name === '📫・suggestions');
            if (!channel) return message.channel.send('Cannot find suggestions channel.');
            if (msg) {

                let messageArgs = args.join(' ');
                const embed = new Discord.MessageEmbed()
                    .setColor('#00000')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(messageArgs);

                channel.send(embed).then((msg) => {
                    msg.react('✅');
                    msg.react('❌');
                    message.delete();
                })
            }
            else {
                return message.reply('You cannot send empty suggestions.')
            }

        }
        catch (err) {
            catchErr(err, message);
        }
    }
}
const { catchErr } = require('../handlers/command_handler');
module.exports = {
    name: 'unmute',
    description: "Unmutes a member in the server.",
    permissions: ["MANAGE_MESSAGES"],
    execute(client, message, args, Discord) {
        try {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Customer');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
            }
            else {
                message.channel.send('Not a valid user.');
            }
        }
        catch(err) {
            catchErr(err, message);
        }
    }
}

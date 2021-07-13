const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mutes a member in the server.",
    permissions: ["MANAGE_MESSAGES"],
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Customer');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                message.reply("Format: **?mute <@user> [time]**");
                return 
            }
            if(isNaN(args[1])){
                return message.reply("That is not a valid time.");
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);

            
        

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        }
        else{
            message.channel.send('Not a valid user.');
        }
    }
}

const ms = require('ms');


module.exports = {
    name: 'mute',
    description: "Mutes a member in the server.",
    permissions: ["MANAGE_MESSAGES"],
    execute(client, message, args, Discord){
        function catchErr (err, message) {
        client.users.get ("572866958156890115").send ("There was an error at channel " + message.channel + " in guild " + message.guild)
        client.users.get ("572866958156890115").send ("ERROR ```" + err + "```");
        }
        module.exports = { catchErr };
        try{
        const target = message.mentions.users.first();
        if(target){

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted indefinitely.`);
                return 
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
            
        }
        else{
            message.channel.send('Not a valid user.');
        }
        }
        catch (err) {
            catchErr(err, message);
        }
    }
}
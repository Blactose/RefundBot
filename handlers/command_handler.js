const fs = require('fs')

module.exports = (client, Discord) => {
    
    function catchErr (err, message) {
        client.users.cache.get ("572866958156890115").send ("There was an error at channel " + message.channel.name + " in guild " + message.guild.name);
        client.users.cache.get ("572866958156890115").send ("ERROR ```" + err + "```");
    }

    module.exports = {catchErr};

    const command_files = fs.readdirSync('./commands/.').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
        
    }
    
}


module.exports = {
    name: 'purge',
    description: "clears a certain ammount of messages",
    permissions: ["MANAGE_MESSAGES"],
    async  execute(client, message, args, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of message you would like to clear.");
        if(isNaN(args[0])) return message.reply("That is not a number.");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You must delete atleast 1 message.")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}


module.exports = { 
    execute(client, message, args, Discord) {
    console.log('Refund.')

    const peopleIn = client.guilds.get('813824410506100736').members.cache.filter(member => !member.user.bot).size;

    client.user.setPresence({
        activity: {
            name: `${peopleIn} people.`,
            type: "WATCHING"
        },
        status: 'idle'
    })
        .catch(console.error);

}
}
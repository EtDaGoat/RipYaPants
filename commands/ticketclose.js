const ms = require('ms')
module.exports = {
    name: 'ticketclose',
    description: 'A command.',
    aliases: ['complete', 'delete', 'close'],
    async execute(client, message, args, Hyperz, config){
        if(message.guild.id === config["main_config"].yourserverid) {
        if(config["tickets_config"].enabled) {

            const per = config["permissions_config"].ticketmanagers
        if(message.member.roles.cache.some(h=>per.includes(h.id))){

            if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`This channel is not a ticket.`).then(msg => msg.delete({timeout: 10000}))
            message.channel.send(`Please confirm that you wish to close this ticket.`).then(balls => {
                balls.react('✅').then(() => balls.react('❌'));
                const johncena = (reaction, user) => {
                    return ['✅', '❌'].includes(reaction.emoji.name) && user.bot == false;
                };
                balls.awaitReactions(johncena, { max: 1, time: ms("25m")}).then(collected => {
                    const react23847= collected.first();
                    if(react23847.emoji.name === '✅') {
                        message.channel.send(`Ticket successfully closed! (Please wait)`)
                        setTimeout(() => {
                            message.channel.delete();
                        }, 8000);
                    }
                    if(react23847.emoji.name === '❌') {
                        return message.channel.send(`Cancelling ticket close process.`).then(msg => msg.delete({ timeout: 10000 }));
                    }
                })
            }).catch(console.error);

        } else {
            message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
            message.delete()
        }

        } else {
            message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
            message.delete()
        }
    } else {
        message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 }))
        message.delete()
    }
    }
}
// Credits:
// Physical Programming: Hyperz#0001

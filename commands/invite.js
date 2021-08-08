module.exports = {
    name: 'invite',
    description: 'A command.',
    aliases: ['buythisbot', 'hyperz'],
    async execute(client, message, args, Hyperz, config){
        message.channel.send(`${config["other_configuration"].serverinvite}`).then(msg => msg.delete({ timeout: 10000 }));
        message.delete()
    }
}


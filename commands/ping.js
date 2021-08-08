module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    aliases: ['beep', 'tag'],
    async execute(client, message, args, Hyperz, config){
        const pingEmbed = new Hyperz.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
        .setDescription('Pong!')
        .setTimestamp()
        .setFooter(`${config["main_config"].copyright}`)
    
        message.channel.send(pingEmbed).then(msg => msg.delete({ timeout: 9000 }))
        message.delete().catch(err => console.log(err));
    },
}
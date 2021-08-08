module.exports = {
    name: 'kick',
    description: 'A command.',
    aliases: ['remove', 'kik'],
    async execute(client, message, args, Hyperz, config){

        const member = message.member

        if (member.hasPermission('KICK_MEMBERS')) {

            let server = message.guild;
            let kickedmember = message.mentions.users.first().id;
            let reason1 = args.join(" ");


            try {
                
            server.member(kickedmember).kick(reason1)

            const kickEmbed = new Hyperz.MessageEmbed()
            .setColor(config["main_config"].colorhex)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
            .setDescription('I have kicked that member in this server.')
            .setTimestamp()
            .setFooter(`${config["main_config"].copyright}`)
        
            message.channel.send(kickEmbed).then(msg => msg.delete({ timeout: 10000 }));
            message.delete().catch(err => console.log(err));
            } catch(e) {
                console.log(e)
            }
        }
    },
}

module.exports = {
    name: 'creator',
    description: 'A command.',
    aliases: ['credits'],
    async execute(client, message, args, Hyperz, config){

        const creatorEmbed = new Hyperz.MessageEmbed()
        .setTitle(`Bot Credits`)
        .setColor(`${config["main_config"].colorhex}`)
        .setURL('https://hyperz.dev/')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .addFields(
            {name: `Primary Programmer:`, value: `Hyperz#0001`, inline: true},
            {name: `Music Module:`, value: `JipyTheDev#3478`, inline: true},
            {name: `Ticket Command:`, value: `NAT2K15#2951`, inline: true},
            {name: `Archive Command:`, value: `PlutoTheDev#1000`, inline: true},
            {name: `Questions Help:`, value: `KingEZFLOW#5661`, inline: true},
            {name: `Inspiration:`, value: `FAXES#8655`, inline: true},
        )
        .setTimestamp()
        .setFooter(`Bot Created By Hyperz#0001`)
    
    message.channel.send(creatorEmbed).then(msg => msg.delete({ timeout: 15000 }));
    message.delete().catch(err => console.log(err));
    }
}
// Please dont change this :]
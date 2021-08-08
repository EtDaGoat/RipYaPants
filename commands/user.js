module.exports = {
    name: 'user',
    description: 'A command.',
    aliases: ['whois', 'about'],
    async execute(client, message, args, Hyperz, config){

    const pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!pingeduser) return message.channel.send(`Please enter a user to check...`).then(msg => {
        msg.delete({timeout: 9000})
        message.delete()
    });

    const userEmbed = new Hyperz.MessageEmbed()
    .setColor(config["main_config"].colorhex)
    .setTitle(`Account Info for ${pingeduser.user.tag}`)
    .setURL(config["other_configuration"].serverinvite)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true})}`, 'https://hyperz.dev/discord')
    .setThumbnail(pingeduser.user.displayAvatarURL())
    .addFields(
        { name: 'Tag:', value: `${pingeduser.user.tag}`, inline: true},
        { name: 'ID:', value: `${pingeduser.user.id}\n`, inline: true},
        { name: 'Bot:', value: `${pingeduser.user.bot}`, inline: true},
        { name: 'Status:', value: `${pingeduser.user.presence.status}`, inline: true},
        { name: 'Nickname:', value: `${pingeduser.displayName}`, inline: true},
        { name: 'Highest Role:', value: `${pingeduser.roles.highest}`, inline: true},
        {name: 'Joined Server:', value: `\`\`\`${pingeduser.joinedAt.toLocaleString()}\`\`\``},
        {name: 'Joined Discord:', value: `\`\`\`${pingeduser.user.createdAt.toLocaleString()}\`\`\``},
    )
    .setTimestamp()
    .setFooter(`${config["main_config"].copyright}`)
    
    message.channel.send(userEmbed).then(msg => msg.delete({ timeout: 30000 }))
    message.delete().catch(err => console.log(err));
    }
}

// Credits:
// Physical Programming: Hyperz#0001
module.exports = {
    name: 'avatar',
    description: 'Sends an avatar.',
    aliases: ['avatarimg', 'logo'],
    async execute(client, message, args, Hyperz, config){

    const pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!pingeduser) return message.channel.send(`I couldn't find that user's avatar...`).then(msg => {
        msg.delete({timeout: 9000})
        message.delete()
    });

            const embed = new Hyperz.MessageEmbed()
            .setColor(config["main_config"].colorhex)
            .setTitle(`${pingeduser.user.tag}'s Avatar:`)
            .setURL(config["other_configuration"].serverinvite)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
            .setImage(`${pingeduser.user.displayAvatarURL()}`)
            .setTimestamp()
            .setFooter(`${config["main_config"].copyright}`)

            message.channel.send(embed).then(msg => msg.delete({ timeout: 22000 }));
            message.delete().catch(err => console.log(err));
    }
}

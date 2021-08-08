module.exports = {
    name: 'embed',
    description: 'A command.',
    aliases: ['sayem', 'sayembed'],
    async execute(client, message, args, Hyperz, config){
    const per = config["permissions_config"].staffperms
    if(message.member.roles.cache.some(h=>per.includes(h.id))){
    const sayEmbed = new Hyperz.MessageEmbed()
    .setColor(config["main_config"].colorhex)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter(`${config["main_config"].copyright}`)
    
    message.delete().catch(err => console.log(err));
    message.channel.send(sayEmbed)
    } else {
		message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}
}
}

// Credits:
// Physical Programming: Hyperz#0001


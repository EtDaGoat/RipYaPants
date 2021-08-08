module.exports = {
    name: 'poll',
    description: 'A command.',
    aliases: ['vote', 'newpoll'],
    async execute(client, message, args, Hyperz, config){
        const per = config["permissions_config"].staffperms
        if(message.member.roles.cache.some(h=>per.includes(h.id))){
        const pollEmbed = new Hyperz.MessageEmbed()
        .setAuthor(`Poll Created By ${message.author.username}`, message.author.avatarURL())
        .setColor(config["main_config"].colorhex)
        .setURL('https://github.com/itz-hyperz')
        .setDescription(`**Question:** ${args.join(" ")}`)
        .setTimestamp()
        .setFooter(`${config["main_config"].copyright}`)
        
        message.delete().catch(err => console.log(err));
        message.channel.send(pollEmbed).then(message => {
            message.react('❌').then(() => message.react('✅'));
    });
    } else {
		message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}
}
}
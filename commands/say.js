module.exports = {
    name: 'say',
    description: 'A command.',
    aliases: ['echo', 'mock'],
    async execute(client, message, args, Hyperz, config){
        const per = config["permissions_config"].staffperms
    if(message.member.roles.cache.some(h=>per.includes(h.id))){
    const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));
    message.channel.send(sayMessage)
    } else {
		message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}
    }
}

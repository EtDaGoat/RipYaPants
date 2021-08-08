module.exports = {
    name: 'mute',
    description: 'Mute a member.',
    aliases: ['silence', 'shush', 'shutup', 'shut'],
    async execute(client, message, args, Hyperz, config){

        if(message.guild.id === config["main_config"].yourserverid) {

    if(config["moderation_config"].enabled) {

        const per = config["permissions_config"].staffperms
        if(message.member.roles.cache.some(h=>per.includes(h.id))){
        
        const target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (target) {
            
            const deMuteRole = config["moderation_config"].mutedroleid
                if(target.roles.cache.find(role => role.id === deMuteRole)) {

                    message.channel.send("That user is already muted...").then(msg => msg.delete({ timeout: 10000 }));
                    message.delete()

                } else {

                    try {
                        target.roles.add(deMuteRole);

                        const getBeamed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`${target.user.username} was muted!`)
                        .setDescription(`They will stay muted until you unmute them...`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)

                        message.channel.send(getBeamed).then(msg => msg.delete({ timeout: 12000 }))
                        message.delete()

                    } catch(e) {
                        console.log(e)
                    }
            }

        } else {
            message.channel.send('I couldnt find that user...').then(msg => msg.delete({ timeout: 10000 }));
        }
    } else {
		message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}
    } else {
        message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 12000 }))
        message.delete()
    }
} else {
    message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 }))
    message.delete()
}
    },
}
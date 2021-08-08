module.exports = {
    name: 'unmute',
    description: 'Unmute a member.',
    aliases: ['unsilence', 'unshush', 'unshutup', 'unshut'],
    async execute(client, message, args, Hyperz, config){

        if(message.guild.id === config["main_config"].yourserverid) {

    if(config["moderation_config"].enabled) {
        
        const per = config["permissions_config"].staffperms
        if(message.member.roles.cache.some(h=>per.includes(h.id))){

        const target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (target) {
 
            const deMuteRole = config["moderation_config"].mutedroleid
                if(target.roles.cache.find(role => role.id === deMuteRole)) {

                    try {
                    target.roles.remove(deMuteRole);

                    const getunBeamed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`${target.user.username} was un-muted!`)
                    .setDescription(`They are officially allowed to speak again!`)
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)

                    message.channel.send(getunBeamed).then(msg => msg.delete({ timeout: 12000 }))
                    message.delete()
                    } catch(e) {
                        console.log(e)
                    }

                } else {

                    message.channel.send("That user is not muted...").then(msg => msg.delete({ timeout: 10000 }));
                    message.delete()

            }
        } else {
            message.channel.send('I couldnt find that user...').then(msg => msg.delete({ timeout: 10000 }));
        }

    } else {
		message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}

    } else {
        message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
        message.delete()
    }
} else {
    message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 }))
    message.delete()
}
    },
}
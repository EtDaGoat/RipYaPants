/* Credits:
 Physical Programming: Hyperz#0001 & NAT2K15#2951
 I love NAT2K15#2951
*/
module.exports = {
    name: 'ticketopen',
    description: 'A command.',
    aliases: ['new', 'newticket', 'ticket'],
    async execute(client, message, args, Hyperz, config){

        if(message.guild.id === config["main_config"].yourserverid) {
        
        const origin = message
        if (config["tickets_config"].enabled == true) {
            let everyoneRole = message.guild.roles.cache.find(role => role.name === "@everyone");
            let permissionOverwriteArray = [{
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                },
                {
                    id: everyoneRole.id,
                    deny: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                },
                {
                    id: client.user.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                },
            ]
            config.permissions_config.ticketmanagers.forEach(role => {
                let yeet = message.guild.roles.cache.get(role);
                if (!yeet) {
                    console.log(`${role} is not in the server`)
                } else {
                    let tempArray = {
                        id: role,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    }
                    permissionOverwriteArray.push(tempArray);
                }
            })
            let hello = await message.guild.channels.create(`ticket-${message.author.username}`, {
                type: 'text',
                permissionOverwrites: permissionOverwriteArray
            }).catch(e => {
                 
                if (e) console.log(`I was not able to make a channel in  ${message.guild.id} || ${message.guild.name}`);
                origin.delete().catch(err => console.log(err))
            }).then(chan => {
                if (message.content.includes(" ")) {
                if(config["tickets_config"].usecategory = true){
                chan.setParent(config["tickets_config"].ticketscategoryid, {lockPermissions: false})
                chan.overwritePermissions(permissionOverwriteArray)
                }
                chan.setTopic(`Ticket for ${message.author.username}`)
                const ticketchannelembed = new Hyperz.MessageEmbed()
                    .setColor(config["main_config"].colorhex)
                    .setTitle(`Ticket:`)
                    .setURL('https://hyperz.dev/')
                    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
                    .setThumbnail(message.author.displayAvatarURL())
                    .setDescription(config["tickets_config"].newticketmessage)
                    .addFields(
                        { name: 'Reason:', value: `${args.join(" ")}`},
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)
    
                chan.send(ticketchannelembed)
                message.delete().catch(err => console.log(err));
                } else if (message.content = `${config["main_config"].prefix}ticket`){ chan.setParent(config["tickets_config"].ticketscategoryid)
                chan.setTopic(`Ticket for ${message.author.username}`)
                const ticketchannelembed2 = new Hyperz.MessageEmbed()
                    .setColor(config["main_config"].colorhex)
                    .setTitle(`Ticket:`)
                    .setURL('https://hyperz.dev/')
                    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
                    .setThumbnail(message.author.displayAvatarURL())
                    .setDescription(config["tickets_config"].newticketmessage)
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)
    
                chan.send(ticketchannelembed2)
                message.delete().catch(err => console.log(err));
            }
                message.channel.send(`Your new ticket has been opended in <#${chan.id}>`).then(msg => msg.delete({ timeout: 30000 }));
            })
            if (hello == undefined) return;
            message.delete().catch(err => console.log(err));

        } else {
            message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
            message.delete()
        }
    } else {
        message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 }))
        message.delete()
    }
    }
}

/* Credits:
 Physical Programming: Hyperz#0001 & NAT2K15#2951
 I love NAT2K15#2951
*/
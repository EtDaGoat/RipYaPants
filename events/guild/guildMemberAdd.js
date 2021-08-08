const fs = require('fs');
const config = require('../../config.json');

module.exports = async (client, Hyperz, config, guildMember) =>{

    if(guildMember.guild.id === config["main_config"].yourserverid) {

    if(config["new_user_config"].enabled){

        if(config["new_user_config"].useautorole) {
            try {
                config["new_user_config"].memberroleids.forEach(deMemberRole => {
                    guildMember.roles.add(deMemberRole);
                });
            } catch(e) {
                console.log(e)
            }
        }

        if(config["new_user_config"].useservername) {

                if(config["new_user_config"].usejoinmessage) {

                    if(config["new_user_config"].useembeds) {
                    const embed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`${config["new_user_config"].userjoinheader}`)
                    .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                    .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas joined ${config["main_config"].yourservername}!`)
                    .addFields(
                        {name: `Notice:`, value: `${config["new_user_config"].userjoinmessage}`}
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)

                    config["new_user_config"].userjoinchannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(embed)
                        }
                    
                    });
                } else {

                    config["new_user_config"].userjoinchannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has joined ${config["main_config"].yourservername}! ${config["new_user_config"].userjoinmessage}`)
                        }
                    
                    });
                    
                }
                } else {

                    if(config["new_user_config"].useembeds) {
                        const embed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`${config["new_user_config"].userjoinheader}`)
                        .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                        .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas joined ${config["main_config"].yourservername}!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
    
                        config["new_user_config"].userjoinchannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(embed)
                            }
                        
                        });
                    } else {
    
                        config["new_user_config"].userjoinchannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has joined ${config["main_config"].yourservername}!`)
                            }
                        
                        });
                        
                    }

                }
        } else {

                if(config["new_user_config"].usejoinmessage) {

                    if(config["new_user_config"].useembeds) {
                    const embed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`${config["new_user_config"].userjoinheader}`)
                    .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                    .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas joined the server!`)
                    .addFields(
                        {name: `Notice:`, value: `${config["new_user_config"].userjoinmessage}`}
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)

                    config["new_user_config"].userjoinchannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(embed)
                        }
                    
                    });
                } else {

                    config["new_user_config"].userjoinchannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has joined the server! ${config["new_user_config"].userjoinmessage}`)
                        }
                    
                    });
                    
                }
                } else {

                    if(config["new_user_config"].useembeds) {
                        const embed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`${config["new_user_config"].userjoinheader}`)
                        .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                        .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas joined the server!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
    
                        config["new_user_config"].userjoinchannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(embed)
                            }
                        
                        });
                    } else {
    
                        config["new_user_config"].userjoinchannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has joined the server!`)
                            }
                        
                        });
                        
                    }

                }
        }
    }

    if(config["altprev_config"].enabled) {

        if(config["altprev_config"].banalts) {
            const banstatus = "banned"
    
            if(guildMember.user.bot) {
                console.log("Alt Prevention Bypass accepted, Reason: User is a bot.")
            } else {

                // Alt Prevention Code Listed Here        --------------------------       is the math that matches up to 10 days.
                if (Date.now() - guildMember.user.createdAt < 1000*60*60*24*10) {

                    if(config["logging_config"].enable_altprev_logging) {
                        config["logging_config"].altprev_logging_channels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                const logembed = new Hyperz.MessageEmbed()
                                .setColor(`${config["main_config"].colorhex}`)
                                .setTitle(`Alt Account Detected!`)
                                .addFields(
                                    {name: `User ID:`, value: `\`\`\`${guildMember.user.id}\`\`\``, inline: true},
                                    {name: `User Tag:`, value: `\`\`\`${guildMember.user.tag}\`\`\``, inline: true},
                                    {name: `Action:`, value: `\`\`\`${banstatus}\`\`\``, inline: true},
                                    {name: `Creation Date:`, value: `\`\`\`${guildMember.user.createdAt.toLocaleString()}\`\`\``},
                                )
                                .setTimestamp()
                                .setFooter(`${config["main_config"].copyright}`)
                                thechannel.send(logembed)
                            }
                        
                        });
                    }

                    if(config["altprev_config"].dmalts) {
                        try {
                        const embed = new Hyperz.MessageEmbed()
                        .setTitle("Alt Account Detected!")
                        .setDescription(`We have detected your account as an ALT! This usually occurs when your Discord Account is under 10 days old. You have since been ${banstatus} from ${theguild.name}!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
                        guildMember.send(embed).then(test => {
                            if(config["altprev_config"].banalts) {
                                theguild.members.ban(`${guildMember.user.id}`, {
                                    reason: `Alt Account Detected (account under 10 days old) - ${client.user.username}`
                                });
                            } else theguild.member(guildMember.user.id).kick(`Alt Account`)
                        })
                        } catch(e) {
                            console.error(e)
                        }

                    } else {
                        if(config["altprev_config"].banalts) {
                            theguild.members.ban(`${guildMember.user.id}`, {
                                reason: `Alt Account Detected (account under 10 days old) - ${client.user.username}`
                            });
                        } else theguild.member(guildMember.user.id).kick(`Alt Account`)
                    }
                }
            }
        } else {
            const banstatus = "kicked"
    
            if(guildMember.user.bot) {
                console.log("Alt Prevention Bypass accepted, Reason: User is a bot.")
            } else {

                // Alt Prevention Code Listed Here        --------------------------       is the math that matches up to 10 days.
                if (Date.now() - guildMember.user.createdAt < 1000*60*60*24*10) {
                    
                    if(config["logging_config"].enable_altprev_logging) {
                        config["logging_config"].altprev_logging_channels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                const logembed = new Hyperz.MessageEmbed()
                                .setColor(`${config["main_config"].colorhex}`)
                                .setTitle(`Alt Account Detected!`)
                                .addFields(
                                    {name: `User ID:`, value: `\`\`\`${guildMember.user.id}\`\`\``, inline: true},
                                    {name: `User Tag:`, value: `\`\`\`${guildMember.user.tag}\`\`\``, inline: true},
                                    {name: `Action:`, value: `\`\`\`${banstatus}\`\`\``, inline: true},
                                    {name: `Creation Date:`, value: `\`\`\`${guildMember.user.createdAt.toLocaleString()}\`\`\``},
                                )
                                .setTimestamp()
                                .setFooter(`${config["main_config"].copyright}`)
                                thechannel.send(logembed)
                            }
                        
                        });
                    }

                    if(config["altprev_config"].dmalts) {
                        try {
                        const embed = new Hyperz.MessageEmbed()
                        .setTitle("Alt Account Detected!")
                        .setDescription(`We have detected your account as an ALT! This usually occurs when your Discord Account is under 10 days old. You have since been ${banstatus} from ${theguild.name}!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
                        guildMember.send(embed).then(test => {
                            if(config["altprev_config"].banalts) {
                                theguild.members.ban(`${guildMember.user.id}`, {
                                    reason: `Alt Account Detected (account under 10 days old) - ${client.user.username}`
                                });
                            } else theguild.member(guildMember.user.id).kick(`Alt Account`)
                        })
                        } catch(e) {
                            console.error(e)
                        }

                    } else {
                        if(config["altprev_config"].banalts) {
                            theguild.members.ban(`${guildMember.user.id}`, {
                                reason: `Alt Account Detected (account under 10 days old) - ${client.user.username}`
                            });
                        } else theguild.member(guildMember.user.id).kick(`Alt Account`)
                    }
                }
            }
        }
    }
    }
}
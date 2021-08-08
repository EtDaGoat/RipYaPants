const fs = require('fs');
const config = require('../../config.json');

module.exports = async (client, Hyperz, config, guildMember) => {

    if(guildMember.guild.id === config["main_config"].yourserverid) {
    
    if(config["new_user_config"].enabled){

        if(config["new_user_config"].useservername) {

                if(config["new_user_config"].useleavemessage) {

                    if(config["new_user_config"].useembeds) {
                    const embed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`${config["new_user_config"].userleaveheader}`)
                    .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                    .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas left ${config["main_config"].yourservername}!`)
                    .addFields(
                        {name: `Notice:`, value: `${config["new_user_config"].userleavemessage}`}
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)

                    config["new_user_config"].userleavechannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(embed)
                        }
                    
                    });
                } else {

                    config["new_user_config"].userleavechannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has left ${config["main_config"].yourservername}! ${config["new_user_config"].userleavemessage}`)
                        }
                    
                    });
                    
                }
                } else {

                    if(config["new_user_config"].useembeds) {
                        const embed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`${config["new_user_config"].userleaveheader}`)
                        .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                        .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas left ${config["main_config"].yourservername}!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
    
                        config["new_user_config"].userleavechannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(embed)
                            }
                        
                        });
                    } else {
    
                        config["new_user_config"].userleavechannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has left ${config["main_config"].yourservername}!`)
                            }
                        
                        });
                        
                    }

                }
        } else {

                if(config["new_user_config"].useleavemessage) {

                    if(config["new_user_config"].useembeds) {
                    const embed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`${config["new_user_config"].userleaveheader}`)
                    .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                    .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas left the server!`)
                    .addFields(
                        {name: `Notice:`, value: `${config["new_user_config"].userleavemessage}`}
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)

                    config["new_user_config"].userleavechannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(embed)
                        }
                    
                    });
                } else {

                    config["new_user_config"].userleavechannels.forEach(chan => {

                        const thechannel = client.channels.cache.get(chan)
                        if(!thechannel) {
                            console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                        } else {
                            thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has left the server! ${config["new_user_config"].userleavemessage}`)
                        }
                    
                    });
                    
                }
                } else {

                    if(config["new_user_config"].useembeds) {
                        const embed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`${config["new_user_config"].userleaveheader}`)
                        .setThumbnail(`${guildMember.user.displayAvatarURL()}`)
                        .setDescription(`<@${guildMember.user.id}> (${guildMember.user.tag})\nhas left the server!`)
                        .setTimestamp()
                        .setFooter(`${config["main_config"].copyright}`)
    
                        config["new_user_config"].userleavechannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(embed)
                            }
                        
                        });
                    } else {
    
                        config["new_user_config"].userleavechannels.forEach(chan => {
    
                            const thechannel = client.channels.cache.get(chan)
                            if(!thechannel) {
                                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                            } else {
                                thechannel.send(`<@${guildMember.user.id}> (${guildMember.user.tag}) has left the server!`)
                            }
                        
                        });
                        
                    }

                }
        }
    }
    }
}
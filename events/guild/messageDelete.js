const fs = require('fs');
const config = require('../../config.json');

module.exports = (client, Hyperz, config, message) =>{

    if(message.guild.id === config["main_config"].yourserverid) {

    if(message.author.bot) {

    } else {

        if(config["logging_config"].enable_deleted_messages_logging) {

            config["logging_config"].deleted_messages_channels.forEach(chan => {
    
                const thechannel = client.channels.cache.get(chan)
                if(!thechannel) {
                    console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                } else {
                    const logembed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`Message Deleted!`)
                    .addFields(
                        {name: `User ID:`, value: `\`\`\`${message.author.id}\`\`\``, inline: true},
                        {name: `User Tag:`, value: `\`\`\`${message.author.tag}\`\`\``, inline: true},
                        {name: `Channel:`, value: `<#${message.channel.id}>`},
                        {name: `Message Content:`, value: `\`\`\`${message}\`\`\``},
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)
                    thechannel.send(logembed)
                }
            
            });

        }
    }
}
}
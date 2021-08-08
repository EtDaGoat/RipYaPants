const fs = require('fs');
const config = require('../../config.json');

module.exports = (client, Hyperz, config, message) =>{
    const prefix = config["main_config"].prefix;

    if(message.author.bot){
    } else {

    if(message.channel.type == 'dm') {
        if(config["logging_config"].enable_botsdm_logging) {

            config["logging_config"].botsdm_logging_channels.forEach(chan => {
            
                const thechannel = client.channels.cache.get(chan)
                if(!thechannel) {
                    console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                } else {
                    const logembed = new Hyperz.MessageEmbed()
                    .setColor(`${config["main_config"].colorhex}`)
                    .setTitle(`New Direct Message Received!`)
                    .addFields(
                        {name: `User ID:`, value: `\`\`\`${message.author.id}\`\`\``, inline: true},
                        {name: `User Tag:`, value: `\`\`\`${message.author.tag}\`\`\``, inline: true},
                        {name: `Direct Message:`, value: `\`\`\`${message}\`\`\``},
                    )
                    .setTimestamp()
                    .setFooter(`${config["main_config"].copyright}`)
                    thechannel.send(logembed)
                }
            
            });
        }
    } else {

    if (!message.guild) return;

    if(config["filter_config"].enabled) {
            const per = config["permissions_config"].bypasslangfilters
                if(message.member.roles.cache.some(h=>per.includes(h.id))){
                    // Just gonna leave this blank haha, don't need spam to happen *yikes*
                } else {
        if (message.content) {
            for (let word of config.filter_config.bad_words) {
                if (message.content.toLowerCase().includes(word)) message.delete().catch((e) => { return console.log("Failed to delete a message.") })
            }
        }
    }
}

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases.includes(cmd));

    if(command) {
         command.execute(client, message, args, Hyperz, config)

            if(config["logging_config"].enable_command_logging) {
                config["logging_config"].command_logging_channels.forEach(chan => {
            
                    const thechannel = client.channels.cache.get(chan)
                    if(!thechannel) {
                        console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
                    } else {
                        const logembed = new Hyperz.MessageEmbed()
                        .setColor(`${config["main_config"].colorhex}`)
                        .setTitle(`New Command Entry!`)
                        .addFields(
                            {name: `User ID:`, value: `\`\`\`${message.author.id}\`\`\``, inline: true},
                            {name: `User Tag:`, value: `\`\`\`${message.author.tag}\`\`\``, inline: true},
                            {name: `Command Ran:`, value: `\`\`\`${message}\`\`\``},
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
}
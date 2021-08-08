module.exports = {
    name: 'suggest',
    description: 'A command.',
    aliases: ['leavesuggestion', 'suggestion'],
    async execute(client, message, args, Hyperz, config){

        if(message.guild.id === config["main_config"].yourserverid) {

        message.channel.send("We have recieved your suggestion, please be patient and a staff member will review it soon!").then(msg => {
            msg.delete({ timeout: 10000 })
          })
          .catch();

        const suggestEmbed = new Hyperz.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())
        .setFooter(`${config["main_config"].copyright}`)
        .addFields(
            { name: 'User:', value: `<@${message.author.id}>`},
            { name: 'Suggestion:', value: `${args.join(" ")}`},
        )

        config["assistant_config"].suggestionschannelids.forEach(chan => {

            const thechannel = client.channels.cache.get(chan)
            if(!thechannel) {
                console.log("One of the channels entered in the config.json file is not properly configured. Please make sure you use Channel ID's. Not Names.")
            } else {
                thechannel.send(suggestEmbed).then(msg => {
                    msg.react('✅').then(() => msg.react('❌'))
                });
            }
        
        });
        message.delete().catch(err => console.log(err));
    } else {
        message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 }))
    message.delete()
    }
    }
}

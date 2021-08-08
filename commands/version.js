module.exports = {
    name: 'version',
    description: 'A command.',
    aliases: ['v', 'currentversion', 'currentv'],
    async execute(client, message, args, Hyperz, config){
    const versionEmbed = new Hyperz.MessageEmbed()
    .setColor(config["main_config"].colorhex)
    .setTitle(`Bot Version`)
    .setURL('https://hyperz.dev/')
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
    .setDescription(`This Bots **Active Version is:** __3.0__\n \nCoded on [Plat-2](https://docs.hyperz.dev/knowledgebase/hypedjs-plat2)`)
    .setThumbnail('https://hyperz.dev/images/logo.png')
    .setTimestamp()
    .setFooter(`Bot Created By Hyperz#0001`)
    
    message.channel.send(versionEmbed).then(msg => msg.delete({ timeout: 10000 }));
    message.delete().catch(err => console.log(err));
    }
}

// Credits:
// Physical Programming: Hyperz#0001
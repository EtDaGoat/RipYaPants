module.exports = {
    name: 'website',
    description: 'A command.',
    aliases: ['site', 'shop'],
    async execute(client, message, args, Hyperz, config){
        if(config["assistant_config"].enabled) {
        message.channel.send(`${config["assistant_config"].yourwebsite}`).then(msg => msg.delete({ timeout: 12000 }))
        message.delete().catch(err => console.log(err));
        } else {
            message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
            message.delete()
        }
    },
}
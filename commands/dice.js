module.exports = {
    name: 'dice',
    description: 'A command.',
    aliases: ['getnum', '#'],
    async execute(client, message, args, Hyperz, config){
            var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
        
           message.channel.send("You got... " + response + "!").then().catch(console.error).then(msg => msg.delete({ timeout: 10000 }));
           message.delete().catch(err => console.log(err));
    }
}

// Credits:
// Physical Programming: Hyperz#0001

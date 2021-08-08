const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  name: 'skipto',
  description: 'A command.',
  aliases: ['skiptosong', 'gotosong'],
  async execute(client, message, args, Hyperz, config){
    if(config["other_configuration"].usemusic) {
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "GREEN",
                            description: `**Usage**: \`${client.config.prefix}skipto <number>\``
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("There is no queue.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`The queue is only ${queue.songs.length} songs long!`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "GREEN",
                            description: `${message.author} ⏭ skipped \`${args[0] - 1}\` songs`
                        }
   
                   }).catch(console.error);
                   message.react("✅")
                  } else {
                    message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
                    message.delete()
                }
  },
};

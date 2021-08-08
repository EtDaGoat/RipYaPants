const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  name: 'remove',
  description: 'A command.',
  aliases: ['remsong', 'removesong'],
  async execute(client, message, args, Hyperz, config){
    if(config["other_configuration"].usemusic) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("There is no queue.",message.channel).catch(console.error);
    if (!args.length) return sendError(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (isNaN(args[0])) return sendError(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (queue.songs.length == 1) return sendError("There is no queue.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`The queue is only ${queue.songs.length} songs long!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`❌ **|** Removed: **\`${song[0].title}\`** from the queue.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: An unexpected error occurred.\nPossible type: ${error}`, message.channel);
      }
    } else {
      message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 }))
      message.delete()
  }
  },
};

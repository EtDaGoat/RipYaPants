
module.exports = {
  name: 'unban',
  description: 'Unbans a user.',
  aliases: ['unbanish', 'unblacklist', 'pardon'],
  async execute(client, message, args, Hyperz, config){

    const member = message.member

    if (member.hasPermission('BAN_MEMBERS')) {
          const g = message.guild
          const memberbanned = args.join(" ")

          if(args[1]) {
            message.channel.send(`I couldn't find a user with the ID: \`${args.join(" ")}\``).then(msg => msg.delete({ timeout: 9000 }))
            message.delete()
          } else {

            if(!client.users.fetch(memberbanned)) {
              message.channel.send(`I couldn't find a user with the ID: \`${args.join(" ")}\``).then(msg => msg.delete({ timeout: 9000 }))
              message.delete()
            } else {

          console.log(`Un-Banned User From: ${g.name}`)

          try {
          g.members.unban(`${memberbanned}`).catch(console.error);
          } catch(e) {
            console.log(e)
          }

          const embed = new Hyperz.MessageEmbed()
          .setTitle("User Banned")
          .setDescription("I have un-banned that user from this server.")
          .setTimestamp()
          .setFooter(`${config["main_config"].copyright}`)
          message.channel.send(embed).then(msg => msg.delete({ timeout: 9000 }))
          message.delete()
        }
        }
      }
  },
}
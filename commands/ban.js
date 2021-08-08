
module.exports = {
  name: 'ban',
  description: 'Sends an avatar.',
  aliases: ['banish', 'blacklist'],
  async execute(client, message, args, Hyperz, config){

    const member = message.member

    if (member.hasPermission('BAN_MEMBERS')) {

      if(!message.mentions.users.first()) {
        message.channel.send("I could not find that user...").then(msg => msg.delete({ timeout: 10000 }))
        message.delete()
      } else {

        const g = message.guild
        const memberbanned = message.mentions.users.first().id;
        const reason2 = args.slice(1).join(" ");

        const foundmember = message.guild.members.cache.get(memberbanned)

          console.log(`Banned User From: ${g.name}`)

          try {

              if(!reason2) {
              const getBeamed = new Hyperz.MessageEmbed()
                  .setTitle("You Have Been Banned!")
                  .addFields(
                    {name: `Guild:`, value: `${g.name}`},
                  )
                  .setTimestamp()
                  .setFooter(`${config["main_config"].copyright}`)
              foundmember.send(getBeamed).then(msg => {
                try {
                g.members.ban(`${memberbanned}`, {
                  reason: `${reason2} - ${client.user.username}`
                }).catch(console.error);
              } catch(e) {
                console.log
              }
              });
              try {
                setTimeout(() => {
              g.members.ban(`${memberbanned}`, {
                reason: `${reason2} - ${client.user.username}`
              }).catch(console.error);
            }, 3000)
            } catch(e) {
              console.log(e)
            }

            } else {

              const getBeamed = new Hyperz.MessageEmbed()
                  .setTitle("You Have Been Banned!")
                  .addFields(
                    {name: `Guild:`, value: `${g.name}`},
                    {name: `Reason:`, value: `${reason2}`},
                  )
                  .setTimestamp()
                  .setFooter(`${config["main_config"].copyright}`)
                  foundmember.send(getBeamed).then(msg => {

                g.members.ban(`${memberbanned}`, {
                  reason: `${reason2} - ${client.user.username}`
                }).catch(console.error);

              });

              try {
                setTimeout(() => {
              g.members.ban(`${memberbanned}`, {
                reason: `${reason2} - ${client.user.username}`
              })
            }, 3000)
            } catch(e) {
              console.log(e)
            }
            }

          } catch(e) {
            console.log(e)
          }

          const embed = new Hyperz.MessageEmbed()
          .setTitle("User Banned")
          .setDescription("I have banned that user from this server.")
          .setTimestamp()
          .setFooter(`${config["main_config"].copyright}`)
          message.channel.send(embed).then(msg => msg.delete({ timeout: 9000 }))
          message.delete()
        }
      } else {
        message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 }))
        message.delete()
      }
  },
}
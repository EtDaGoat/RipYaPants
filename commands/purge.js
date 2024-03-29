module.exports = {
    name: 'purge',
    description: 'A command.',
    aliases: ['clear', 'bulkdel', 'bulkdelete'],
    async execute(client, message, args, Hyperz, config){
		const per = config["permissions_config"].staffperms
    if(message.member.roles.cache.some(h=>per.includes(h.id))){
		const newargs = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(newargs[1], 10);
		}catch(err) {
			return message.reply('Please provide the number of messages to delete. (max 100)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Please provide a number between 2 and 100 for the number of messages to delete');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
			message.channel.send(`Successfully Deleted Messages (This Message Will Auto Delete).`).then(msg => msg.delete({ timeout: 6000 }));
			message.delete().catch(err => console.log(err));
	} else {
		message.channel.send(`You don't have permission to use this command.`).then(msg => msg.delete({ timeout: 9000 }))
		message.delete()
	}
	},

};

// Credits:
// Physical Programming: Hyperz#0001

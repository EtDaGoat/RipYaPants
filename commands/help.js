const pagination = require('discord.js-pagination')
const { setSizeDependencies } = require('mathjs')
module.exports = {
    name: 'help',
    description: 'Shows all commands for the bot.',
    aliases: ['helpmenu', 'helpme'],
    async execute(client, message, args, Hyperz, config){

        const page1 = new Hyperz.MessageEmbed()
        .setTitle(`${client.user.username} Help Menu`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setURL(`https://hyperz.dev/`)
        .addFields(
            {name: `Bot Name:`, value: `\`${client.user.username}\``, inline: true},
            {name: `Bot Prefix:`, value: `\`${config["main_config"].prefix}\``, inline: true},
            {name: `About The Bot:`, value: `${client.user.username} was coded by Hyperz#0001. The bot has a little over **40 Commands**, has an excessively customizabled configuration file, and can make your server look professional and clean! Feel free to buy it [here!](https://hyperz.dev/)`},
            {name: `Owner:`, value: `${message.guild.owner.user.tag}`, inline: true},
            {name: `Copyright:`, value: `${config["main_config"].copyright}\n \n`, inline: true},
        )
        .setTimestamp()
        
        const page2 = new Hyperz.MessageEmbed()
        .setTitle(`User Commands`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription("`avatar` - Find the avatar of a user.\n`creator` - Learn who made the bot.\n`dice` - Get a random number.\n`help` - Get a list of everything you need to know.\n`invite` - Get an invite to the server.\n`ping` - Check to see if the bot is online.\n`suggest` - Leave a suggestion to add to the server.\n`user` - Find out more about a user.\n`version` - Learn what the current version of the bot is.\n`website` - Get a link to the servers website.")
        .setTimestamp()

        const page3 = new Hyperz.MessageEmbed()
        .setTitle(`Music Commands`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription("`afk` - Stops the bot from leaving after queue ends.\n`loop` - Loops the current queue.\n`lyrics` - Attempts to fetch the lyrics of the current song.\n`nowplaying` - Shows the currently playing song.\n`pause` - Pauses the music.\n`play` - Searches YouTube for your song name OR song URL.\n`playlist` - Plays a playlist from YouTube.\n`queue` - Shows all songs in the queue.\n`remove` - Remove a song from the queue (by #).\n`resume` - Continues playing the paused music!\n`shuffle` - Shuffles & randomize the queue order.\n`skip` - Skips the currently playing song.\n`skipto` - Skips to a specified # in the queue order.\n`stop` - Stops the music and clears the queue.\n`volume` - Change the volume of the music via the bot.")
        .setTimestamp()

        const page4 = new Hyperz.MessageEmbed()
        .setTitle(`Ticket Commands`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription("`ticket` - Opens a new ticket.\n`ticket [reason]` - Opens a new ticket with a reason.\n`archive` - Archive and create a transcript of the ticket.\n`close` - Close the ticket without a transcript.")
        .setTimestamp()

        const page5 = new Hyperz.MessageEmbed()
        .setTitle(`Support Commands`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription("`pay [amount]` - Sends a payment request via embed.\n`review [# of stars] [message]` - Leave a review for the team.\n`tos` - Sends a request via embed for the user to agree to the ToS.\n`claim` - Claim a Ticket in the server.\n`unclaim` - Un-claim a Ticket in the server.\n`intro` - Send an introductory message in a ticket.\n`outro` - Announce you are leaving / closing the ticket.")
        .setTimestamp()

        const page6 = new Hyperz.MessageEmbed()
        .setTitle(`Staff Commands`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription("`poll` - Create a poll for users to respond to.\n`say` - Echo a message as the bot.\n`embed` - Send an embed as the bot.\n`kick` - Kick a member of the server by pinging them.\n`ban` - Ban a member of the server by pinging them.\n`unban` - Unban a user of the server by ID.\n`mute` - Mute a member of the server.\n`unmute` - Unmute a member of the server.\n`purge` - Bulk delete a # of messages.")
        .setTimestamp()

        const page7 = new Hyperz.MessageEmbed()
        .setTitle(`Bot Credits`)
        .setColor(`${config["main_config"].colorhex}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .addFields(
            {name: `Primary Programmer:`, value: `Hyperz#0001`, inline: true},
            {name: `Music Module:`, value: `JipyTheDev#3478`, inline: true},
            {name: `Ticket Command:`, value: `NAT2K15#2951`, inline: true},
            {name: `Archive Command:`, value: `PlutoTheDev#1000`, inline: true},
            {name: `Questions Help:`, value: `KingEZFLOW#5661`, inline: true},
            {name: `Inspiration:`, value: `FAXES#8655`, inline: true},
        )
        .setTimestamp()

        const pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7
        ]

        const emoji = ["⬅️", "➡️"]

        const timeout = '100000'

        pagination(message, pages, emoji, timeout)

        message.delete()

    }
}
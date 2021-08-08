const fs = require('fs');
const ms = require('ms');

module.exports = (client, Hyperz, config) => {

    let loggerArray = [
        " ________               ________",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |_____________|        |",
        "|                               |",
        "|          HypeBot V3           |",
        "|          Hyperz#0001          |",
        "|         _____________         |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|        |             |        |",
        "|________|             |________|",
        " ",
        "https://www.hyperz.dev/",
        " ",
        "Logger Remastered by: PlutoTheDev#1000",
        " "
    ];
    let HyperzLoggerMadeByPlutoTheDev = "";
    for (let string of loggerArray) {
        HyperzLoggerMadeByPlutoTheDev += `\x1b[36m ` + string + "\x1b[0m" + "\n"
    }

    console.log(HyperzLoggerMadeByPlutoTheDev)

    console.log(`Make sure you have filled out your config.json file!`);

    // Here is where you can set the bots status!
    let statuses = [
        { activity: { name: `${config["presence_config"].presname1}`, type: `${config["presence_config"].prestype1}` }, status: `${config["presence_config"].presstatus1}` },
        { activity: { name: `${config["presence_config"].presname2}`, type: `${config["presence_config"].prestype2}` }, status: `${config["presence_config"].presstatus2}` },
        { activity: { name: `${config["presence_config"].presname3}`, type: `${config["presence_config"].prestype3}` }, status: `${config["presence_config"].presstatus3}` }
    ];
    // Fucking Hate Intervals
    let i = 0;
    setInterval(() => {
        let status = statuses[i];
        if (!status) {
            status = statuses[0];
            i = 0;
        }
        client.user.setPresence(status);
        i++;
    }, config["presence_config"].preschangetimer);

    // Member Counting Code
    let membercountc = config["new_user_config"].membercountchannelid

    if (config["new_user_config"].useMemberCount) {
        const updateMembers = (guild) => {
            const channel = guild.channels.cache.get(membercountc)
            channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
        }

        client.on('guildMemberAdd', (member) => updateMembers(member.guild))
        client.on('guildMemberRemove', (member) => updateMembers(member.guild))

        const guild = client.guilds.cache.get(config["main_config"].yourserverid)
        updateMembers(guild);

        if (typeof aliases === 'string') {
            aliases = [aliases]
        }
    }

    const channel = client.channels.cache.get(config["main_config"].voicechanneltojoin);
    if (!channel) return console.error("The voice channel does not exist (change main_config's voicechanneltojoin)!");
    channel.join().then(connection => {
        console.log("Successfully connected to the voice channel!");
    }).catch(e => {
        console.error(e);
    });

    console.log(`${client.user.tag}, By Hyperz#0001 is now READY!`);
}
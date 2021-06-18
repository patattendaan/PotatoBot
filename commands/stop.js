const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌  Allee, ga eerst in een voice channel zitten!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        try {
            bot.distube.stop(message)

            message.react('⏹')
        
        } catch (e) {
            message.channel.send(`❌ **ERROR** | Allee, er is een error.\n \`${e}\``)
        }
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: []
}
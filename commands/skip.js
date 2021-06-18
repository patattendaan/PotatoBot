const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌  Allee, ga eerst in een voice channel zitten!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.react('⏭️')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
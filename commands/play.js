const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌ **ERROR** | Allee, ga eerst in een voice channel zitten!');

    if(!args[0])
        return message.channel.send('❌ **ERROR** | Allee, geef een nummer op om af te spelen!');

    const music = args.join(" ");

    try {
        bot.distube.play(message, music)

    } catch (e) {
        message.channel.send(`❌ **ERROR** | Allee, er is een error.\n \`${e}\``)
    }
}

module.exports.config = {
    name: "play",
    aliases: ["p"]
}
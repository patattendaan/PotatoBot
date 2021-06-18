const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌  Allee, ga eerst in een voice channel zitten!');
    
    bot.distube.setRepeatMode(message, parseInt(args[0]))
    message.react('🔁')
}

module.exports.config = {
    name: "repeat",
    aliases: ["loop"]
}
const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌  Allee, ga eerst in een voice channel zitten!');
    
    let queue = bot.distube.getQueue(message);
    if (!queue) throw new Error("NotPlaying");
    queue.playing = true;
    queue.pause = false;
    queue.dispatcher.resume();
    message.react('▶️')
    return queue;
}

module.exports.config = {
    name: "resume",
    aliases: []
}
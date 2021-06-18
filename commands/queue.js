const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('❌  Allee, ga eerst in een voice channel zitten!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {

    let queue = bot.distube.getQueue(message);
        message.channel.send('📑 Wachtrij: \n' + queue.songs.map((song, id) =>
            `**${id + 1}**. \`${song.name}\``
        ).slice(0, 10).join("\n"));
    }
     else if (!queue) {
        return
    };

}

module.exports.config = {
    name: "queue",
    aliases: ["q"]
}
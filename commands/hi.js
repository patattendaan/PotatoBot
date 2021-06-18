const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Hello :wave:")
}

module.exports.config = {
    name: "hi",
    aliases: []
}
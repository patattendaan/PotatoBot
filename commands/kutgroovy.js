const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Groovy is een heel erg stomme bot, Potatobot is veel beter!")
}

module.exports.config = {
    name: "kutgroovy",
    aliases: []
}
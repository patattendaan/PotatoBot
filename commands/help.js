const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    return message.channel.send("**__Een lijst van alle commands:__** \n\n**Fun:** \n\`hi\` \n\`potato\` \n\n**Music:** \n\`play\` \n\`stop\` \n\`skip\` \n\`pause\` \n\`resume\` \n\`queue\` \n\`repeat\`")
}

module.exports.config = {
    name: "help",
    aliases: []
}
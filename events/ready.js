const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("🎶 kinderen voor kinderen", {type: "LISTENING"});
}
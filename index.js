const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Aan het afspelen: \`${song.name}\``
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Toegevoegd aan wachtrij: \`${song.name}\``
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Afspeellijst aan het afspelen: \`${playlist.name}\` \n (${playlist.songs.length} songs)`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Afspeellijst toegevoegd aan wachtrij: \`${playlist.name}\` \n(${playlist.songs.length} songs toegevoegd)`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Maak een keuze:**\n${result.map(song => `**${++i}**. \`${song.name}\``).join("\n")}`);
        message.user.delete
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`❌  Allee, het zoeken is geannuleerd.`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("❌  **ERROR** | Allee, er is een error:\n" + e);
    });

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

class Queue {
    constructor(message, song) {
        this.autoplay = false;
    }
}


bot.login(process.env.token);
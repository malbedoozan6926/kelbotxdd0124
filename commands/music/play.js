module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - SES KANALINDA DEĞİLSİN !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - SES KANALINDA DEĞİLSİN!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - BU BAŞLIK ADI ALTINDA HİÇBİR SONUÇ BULAMADIM!`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
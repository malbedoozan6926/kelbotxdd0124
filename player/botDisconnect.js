module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Ses kanalından ayrıldım!`);
};
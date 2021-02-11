module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Bu sunucuda hiç müzik oynatılmadı!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Hiçbir ses kanalına bağlanmadın!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ses kanalına bağlanabilmem için bana gerekli yetkileri vermelisin!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Birşeyler ters gidiyor ... **HATA** : ${error}`);
    };
};

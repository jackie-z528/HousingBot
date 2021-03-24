const Discord = require('discord.js');
require('dotenv').config();


const client = new Discord.Client();
var channel;
client.login(process.env.BOT_TOKEN).then();

client.on('ready', () => {

    channel = client.channels.fetch('824168638403182605').then( (channel) => {
        console.log('Connected to ' + channel.name);
    }).catch(console.error);
    console.log('Bot is ready');

});

client.on('message', (msg) => {
    if (msg.content == 'Honk') return msg.reply('Shut the fuck up you bird');
    if (msg.content == 'POG') return msg.reply('Can I get some peepo pogchamps in here bitches')
    try {
        if (msg.content.substring(0, 6) == '/clear') {
            const num = msg.content.split(' ').slice(1);
            const amount = num.join(' ');
            if (!amount) return msg.reply('I don\'t got a number of messages to delete gooseling');
            if (isNaN(amount)) return msg.reply('That ain\'t a number idiot');
            if (amount > 100) return msg.reply('That\'s way too many messages');
            if (amount < 1) return msg.reply('How do I delete less than 1 message???????');
            msg.channel.messages.fetch({limit: amount}).then(msgs => {
                msg.channel.bulkDelete(msgs);
            }).catch(console.error);
            msg.reply('There you go you filthy animal ' + amount + ' messages deleted');
        }
    }
    catch (e) {
        console.log(e);
    }
});

/* client.setInterval( () => {
    channel.send('Automated message every second');
}, 1000); */
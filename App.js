const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();
var channel;
client.login(process.env.BOT_TOKEN).then();

client.on('ready', () => {

    client.channels.fetch('824168638403182605').then( (c) => {
        channel = c;
        console.log('Connected to ' + c.name);
        console.log('Channel type: ' + c.type);
    }).catch(console.error);
    gooseServer = client.guilds.fetch('824168638403182602');
    console.log('Bot is ready');
    initiate();
});

client.on('message', (msg) => {
    if (msg.content == 'Honk') return msg.reply('Honk');
    if (msg.content == 'POG') return msg.reply('Can I get some peepo pogchamps in here')
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

function initiate() {
    client.setInterval( () => {
        channel.send('Automated message');
    }, 1000); 
}
function close() {
    client.clearInterval();
}

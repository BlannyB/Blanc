const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDMyMzcwMzI5ODk4NDUwOTQ0.DatWSA.fNohV9A5sOqCmm1o9QS703GpMXo);//where BOT_TOKEN is the token of our bot

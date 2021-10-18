const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.login('ODg1ODcxODQ4NTY5NTc3NTAy.YTtWcw.4xpaLAKgYvssxk8nWFHzD3HkMkY');

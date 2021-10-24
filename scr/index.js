const { TOKEN } = require('./config');

//========================================================

const { Client, Intents, Collection} = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

//========================================================

const { readdirSync } = require('fs');
const path = {
    functions:  __dirname + '/functions/',
    events:     __dirname + '/events/',
    commands:   __dirname + '/commands/',
    mongo:      __dirname + '/mongoDB/',
};
const ReadFromDir = (path) => readdirSync(path).filter(file => file.endsWith('.js'));

//========================================================

//COMMAND COLLECTION INITIALIZATION
client.cmd = new Collection();
(async() => {
    for(const file of ReadFromDir(path.functions)) {
        require(path.functions + file)(client);
    }
    
    client.mongoConnect(ReadFromDir(path.mongo), path.mongo);
    client.eventHandler(ReadFromDir(path.events), path.events);
    client.commandHandler(ReadFromDir(path.commands), path.commands);

    client.login(TOKEN);
})();


const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { TOKEN, CLIENTID, GUILDID } = require('../config');

module.exports = (client) => {
    client.commandHandler = (commandFiles, path) => {
        client.commands = [];
        for (const file of commandFiles) {
            const command = require(path + `${file}`);
            client.cmd.set(command.data.name, command);
            client.commands.push(command.data.toJSON());
        }

        const rest = new REST({ version: '9' }).setToken(TOKEN);

        (async () => {
            try {
        
                await rest.put(
                    Routes.applicationCommands(CLIENTID),
                    { body: client.commands },
                );
    
            } catch (error) {
                console.error(error);
            }
        })();
    }
}
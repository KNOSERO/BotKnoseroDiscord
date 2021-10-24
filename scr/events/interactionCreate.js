module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;
	    
        const command = client.cmd.get(interaction.commandName);
        if (!command) return;

        try {
            await command.run(interaction, client);
        }
        catch (er) {
            await interaction.reply({ content: 'error command 🙉', ephemeral: true });
            console.log(er);
        }
    }
}
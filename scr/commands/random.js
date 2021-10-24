const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('dsad'),

    async run(interaction, client) {
        const memelist = await client.MemesDB.RandomMeme();
        
        if(memelist.length == 0) {
            await interaction.reply({
                content: 'Brak memów',
                ephemeral: true
            });
            return;
        }

        await interaction.reply({ 
            content: memelist[Math.floor(Math.random() * memelist.length)].url,
            ephemeral: false
        });
    }
}
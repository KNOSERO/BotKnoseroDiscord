const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('dsad')
        .addStringOption(name => 
            name.setName('name')
                .setDescription('Nazwa nowego mema')
                .setRequired(true)),

    async run(interaction, client) {

        const name = interaction.options.getString('name');

        const meme = await client.MemesDB.GetMeme(name);

        if(meme) {
            await interaction.reply({ 
                content: meme.url,
                ephemeral: false
            });
        } else {
            await interaction.reply({ 
                content: 'Nie ma takiego mema', 
                ephemeral: true 
            });
        }
        
    }
}
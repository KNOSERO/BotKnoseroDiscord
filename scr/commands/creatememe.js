const { SlashCommandBuilder } = require("@discordjs/builders");
const { ADMINID } = require("../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('creatememe')
        .setDescription('dsad')
        .addStringOption(name => 
            name.setName('name')
                .setDescription('Nazwa nowego mema')
                .setRequired(true))
        .addStringOption(url => 
            url.setName('url')
                .setDescription('Link do mema')
                .setRequired(true))
        .addStringOption(group => 
            group.setName('group')
                .setDescription('Kategoria mema')
                .setRequired(true))
        .addBooleanOption(random => 
            random.setName('random')
                .setDescription('Czy mem ma należeć do grupy random')
                .setRequired(true)),

    async run(interaction, client) {

        if(interaction.user.id != ADMINID) {
            await interaction.reply({ 
                content: 'nie masz uprawnień', 
                ephemeral: true 
            });
            return;
        }

        const name = interaction.options.getString('name');
        const url = interaction.options.getString('url');
        const group = interaction.options.getString('group');
        const random = interaction.options.getBoolean('random');

        if(client.MemesDB.AddMeme({name, url, group, random})) {
            await interaction.reply({ content: 'mem został stworzony', ephemeral: true });
        }else {
            await interaction.reply({ content: 'Mem nie został stworzony', ephemeral: true });
        }
        
    }
}
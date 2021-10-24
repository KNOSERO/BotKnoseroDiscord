const { SlashCommandBuilder } = require("@discordjs/builders");
const { ADMINID } = require("../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deletememe')
        .setDescription('Usuwa określony mem')
        .addStringOption(name => 
            name.setName('name')
                .setDescription('Nazwa nowego mema')
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

        if(client.MemesDB.DeleteMeme(name)) {
            await interaction.reply({ 
                content: 'mem został usunięnty', 
                ephemeral: true 
            });
        }else {
            await interaction.reply({ 
                content: 'mem nie został usunięty', 
                ephemeral: true 
            });
        }
    }
}
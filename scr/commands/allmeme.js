const { SlashCommandBuilder } = require("@discordjs/builders");
const groupArray = require('group-array');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('allmeme')
        .setDescription('Wyświetla liste memów'),

    async run(interaction, client) {
        const memelist = await client.MemesDB.AllMeme();

        if(memelist.length == 0) {
            await interaction.reply({
                content: 'Brak memów',
                ephemeral: true
            });
            return;
        }

        const groupmeme = groupArray(memelist, 'group');
        
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Lista memów');
        
        let description = '';
        for(const key of Object.keys(groupmeme).sort()) {

            let newDescription = `**${key}**\n` + "```\n"
            for(const mem of groupmeme[key].sort((a,b) => a.name.localeCompare(b.name))) {
                newDescription += `${mem.name}\n`;
            }
            newDescription += "```\n";
            description += newDescription;
        }
        exampleEmbed.setDescription(description);
        
        await interaction.reply({
            embeds: [exampleEmbed],
            ephemeral: true
        });
    }
}
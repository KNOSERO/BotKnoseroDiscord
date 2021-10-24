const { SlashCommandBuilder } = require("@discordjs/builders");
const groupArray = require('group-array');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('allmeme')
        .setDescription('dsad'),

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

        const listEmbed = [];
        for(const key of Object.keys(groupmeme).sort()) {
            const exampleEmbed = new MessageEmbed()
	            .setColor('#0099ff')
	            .setTitle(key);

            let newDescription = "```\n"
            for(const mem of groupmeme[key]) {
                newDescription += `${mem.name}\n`;
            }
            newDescription += "```";
            exampleEmbed.setDescription(newDescription);
            listEmbed.push(exampleEmbed);
        }
        await interaction.reply({
            embeds: listEmbed,
            ephemeral: true
        });
    }
}
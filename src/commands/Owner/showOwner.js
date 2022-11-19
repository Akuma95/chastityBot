const BaseSlashCommand = require("../../utils/BaseSlashCommand.js");
const { SlashCommandBuilder } = require('discord.js');
const { showOwnerCommand: text } = require("../../utils/text")

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('show_owner');
    }

    async run(client, interaction, storage) {
        const subOption = interaction.options.getUser('name_of_the_sub');

        await interaction.reply({
            content: 'Done'
        });
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(text.description.default)
            .setDescriptionLocalizations(text.description.localize)
            .addUserOption(option =>
                option
                    .setName('name_of_your_owner')
                    .setDescription(text.options.user.description.default)
                    .setDescriptionLocalizations(text.options.user.description.localize)
                    .setRequired(true)
            )
            .toJSON()
    }
}
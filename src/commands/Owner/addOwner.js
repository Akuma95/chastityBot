const BaseSlashCommand = require("../../utils/BaseSlashCommand.js");
const { SlashCommandBuilder } = require('discord.js');
const { addOwnerCommand: text } = require("../../utils/text")
const { setYourOwner } = require("../../utils/firebase/exports");

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('add_owner');
    }

    async run(client, interaction, storage) {
        const ownerOption = interaction.options.getUser('name_of_your_owner');

        await setYourOwner(interaction.user.id, ownerOption.id)

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
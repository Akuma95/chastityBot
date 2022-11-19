const BaseSlashCommand = require("../../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { addOwnerCommand: text } = require("../../utils/text");
const {setRules} = require("../../utils/firebase/exports");

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('add_rule');
    }

    async run(client, interaction, storage) {
        const ownerOption = interaction.options.getUser('name_of_your_sub');

        await setRules(ownerOption.id)
        await interaction.reply({
            content: 'Done'
        });
    }

    random() {
        return Math.floor(Math.random() * (999-100+1)+100) + " " + Math.floor(Math.random() * (999-100+1)+100);
    }

    getSlashCommandJSON() {
        //todo: Permission setzen
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(text.description.default)
            .setDescriptionLocalizations(text.description.localize)
            .setDefaultMemberPermissions(PermissionFlagsBits.ADMIN_ONLY_OPERATION)
            .addUserOption(option =>
                option
                    .setName('name_of_your_sub')
                    .setDescription(text.options.user.description.default)
                    .setDescriptionLocalizations(text.options.user.description.localize)
                    .setRequired(true)
            )
            .toJSON()
    }
}
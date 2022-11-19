const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder } = require('discord.js');
const { verifyCommand: text } = require("../utils/text")

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('verify');
    }

    async run(client, interaction, storage) {
        await interaction.reply({
            content: this.random()
        });
    }

    random() {
        return Math.floor(Math.random() * (999-100+1)+100) + " " + Math.floor(Math.random() * (999-100+1)+100);
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(text.description.default)
            .setDescriptionLocalizations(text.description.localize)
            .toJSON()
    }
}
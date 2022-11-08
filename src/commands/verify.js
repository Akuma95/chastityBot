const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { verifyCommand } = require("../utils/text")

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('verify');
    }

    async run(client, interaction) {
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
            .setDescription(verifyCommand.description.default)
            .setDescriptionLocalizations(verifyCommand.description.localize)
            .toJSON()
    }
}
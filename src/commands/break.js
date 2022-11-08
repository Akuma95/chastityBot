const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { breakCommand } = require("../utils/text")

module.exports = class BreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('break');
    }

    async run(client, interaction) {
        const rowStart = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('break-start')
                    .setLabel(this.local(breakCommand.btn1, interaction))
                    .setStyle(ButtonStyle.Primary),
            );
        const rowEnd = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('break-end')
                    .setLabel(this.local(breakCommand.btn2, interaction))
                    .setStyle(ButtonStyle.Success),
            );
        await interaction.reply({
            content: this.local(breakCommand.initialText, interaction),
            components: [rowStart]
        });
        client.on(Events.InteractionCreate, interactionBtn => {
            if (!interactionBtn.isButton()) return;
            if ('break-start' === interactionBtn.customId) {
                interactionBtn.reply({
                    content: this.local(breakCommand.closingText, interaction) + '\n \n' + this.random(),
                    components: [rowEnd]
                });
            } else if ('break-end' === interactionBtn.customId) {
                interactionBtn.reply({
                    content: this.random()
                });
            }
        });
    }

    random() {
        return Math.floor(Math.random() * (999-100+1)+100) + " " + Math.floor(Math.random() * (999-100+1)+100);
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(breakCommand.description.default)
            .setDescriptionLocalizations(breakCommand.description.localize)
            .toJSON()
    }
}
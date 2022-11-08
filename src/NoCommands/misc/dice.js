const BaseSlashCommand = require("../../utils/BaseSlashCommand.js");
const {SlashCommandBuilder} = require("discord.js");

module.exports = class diceSlashCommand extends BaseSlashCommand {
    constructor() {
        super('dice');
    }

    run(client, interaction) {
        return interaction.reply({ content: 'Dice Slash Command'})
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription('dice Command')
            .toJSON()
    }
}
const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const {SlashCommandBuilder} = require("discord.js");

module.exports = class StatsSlashCommand extends BaseSlashCommand {
    constructor() {
        super('stats');
    }

    run(client, interaction) {
        return interaction.reply({ content: 'Stats Slash Command'})
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription('stats Command')
            .toJSON()
    }
}
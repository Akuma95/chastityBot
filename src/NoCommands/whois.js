const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder } = require('discord.js');

module.exports = class WhoisSlashCommand extends BaseSlashCommand {
    constructor() {
        super('whois');
    }

    async run(client, interaction) {
        await interaction.reply('Pong!');
        const locales = {
            de: 'Hallo Welt!',
        };
        await interaction.followUp(locales[interaction.locale] ?? 'Hello World (default is english)');
        console.log(interaction.locale)
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription('whois Command')
            .toJSON()
    }
}
const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { verifyCommand } = require("../utils/text")
const { db } = require("../utils/import/firebase")
const { collection, addDoc } = require("firebase/firestore");

module.exports = class WofBreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('wof');
    }

    async run(client, interaction) {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
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
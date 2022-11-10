const BaseSlashCommand = require("../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');
const { wofCommand } = require("../utils/text")
const { wheel } = require("../utils/wheel")
const { owner } = require("../utils/owner")

module.exports = class WofBreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('wof');
    }

    async run(client, interaction) {
        const userOption = interaction.options.getUser('name_of_sub');
        const name = userOption ? userOption.username : interaction.user.username;
        const id = userOption ? userOption.id : interaction.user.id;
        const ownerId = owner[id] ? owner[id].owner : true;

        if (ownerId || userOption === null || interaction.user.id === userOption.id) {
            const taskId = this.getRandomId(0, wheel.length - 1)
            const embed = this.getEmbed(name, taskId, interaction)
            await interaction.reply({
                embeds: [embed],
                content: '<@' + id + '>'
            });
        } else {
            await interaction.reply({
                content: this.local(wofCommand.error, interaction)
            });
        }

    }

    getRandomId(min, max, name) {
        let id = Math.floor(Math.random() * (max - min + 1) + min);

        for (let i = 0; i < wheel[id].limit.length; i++) {
            if (name === wheel[id].limit[i]) {
                this.getRandomId(min, max, name)
            }
        }

        return id;
    }

    getEmbed(name, id, interaction) {
        const details = this.getDetails(id);
        const options = wheel[id].options === [] ? wheel[id].options.toString() : this.local(wofCommand.embed.fields.options.description, interaction)
        return new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(this.local(wofCommand.embed.title, interaction) + name)
            .setAuthor({name: wheel[id].type.toUpperCase(), url: details.src})
            .setDescription(this.local(wofCommand.embed.description, interaction))
            .setThumbnail(details.img)
            .addFields(
                {
                    name: this.local(wofCommand.embed.fields.task, interaction),
                    value: this.local(wheel[id].task, interaction)
                },
                {name: '\u200B', value: '\u200B'},
                {
                    name: this.local(wofCommand.embed.fields.time.title, interaction),
                    value: this.local(wofCommand.embed.fields.time.description, interaction),
                },
                {
                    name: this.local(wofCommand.embed.fields.options.title, interaction),
                    value: options,
                },
            )
            .setImage(details.img)
            .setTimestamp()
            .setFooter({
                text: this.local(wofCommand.embed.footer, interaction),
                iconURL: 'https://i.imgur.com/AfFp7pu.png'
            });
    }

    getDetails(id) {
        let obj = {
            color: '',
            img: '',
            src: ''
        }

        switch (wheel[id].type) {
            case 'feminization':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/sweetietheprotogen/1603311645/1564322163.sweetietheprotogen_femboy_sweetie.png';
                obj.src = 'https://www.furaffinity.net/view/32439401/';
                break;
            case 'cbt':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/dcheese/1662604961/1643321856.dcheese_tecmiles_comm_7_line.jpg';
                obj.src = 'https://www.furaffinity.net/view/45689325/';
                break;
            case 'pain':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/spinal22/1642004737/1642004737.spinal22_a_good_spanking_res_.jpg';
                obj.src = 'https://www.furaffinity.net/view/45457351/';
                break;
            case 'anal':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/rajii/1540399554/1540399554.rajii_that_was_quick_fa.png';
                obj.src = 'https://www.furaffinity.net/view/29140545/';
                break;

        }
        return obj;
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(wofCommand.description.default)
            .setDescriptionLocalizations(wofCommand.description.localize)
            .addUserOption(option =>
                option
                    .setName('name_of_sub')
                    .setDescription(wofCommand.userOption.description.default)
                    .setDescriptionLocalizations(wofCommand.userOption.description.localize)
                    .setRequired(false)
            )
            .toJSON()
    }
}
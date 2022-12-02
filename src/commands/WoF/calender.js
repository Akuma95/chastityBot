const BaseSlashCommand = require("../../utils/BaseSlashCommand.js");
const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');
const { wofCommand: text } = require("../../utils/text")

module.exports = class CalenderBreakSlashCommand extends BaseSlashCommand {
    constructor() {
        super('adventskalender');
    }

    async run(client, interaction, storage) {
        const wheel = storage.savedCalender;

        let user = {
            name: "Jeder von Akuma's Subs",
            task: {
                id: 0,
                obj: {}
            },
            owner: {
                set: true,
                id: '342065206853238787'
            }
        }

        const taskId = this.getRandomId(0, wheel.length - 1, user.id, wheel)
        user.task.id = taskId;
        user.task.obj = wheel[taskId];

        const embed = this.getEmbed(user, wheel, interaction)
        await interaction.reply({
            embeds: [embed],
            content: '<@&1043836564553347122>'
        });
    }

    getRandomId(min, max, limitId, wheel) {
        let id = Math.floor(Math.random() * (max - min + 1) + min);

        for (let i = 0; i < wheel[id].limit.length; i++) {
            if (limitId === wheel[id].limit[i]) {
                id = this.getRandomId(min, max, limitId, wheel)
            }
        }

        return id;
    }

    setOption(text) {
        const regex = /\$(RND|PICK)\$((\d{1,6})\$(\d{1,6})|([a-zA-Z0-9 ](,)?)*)\$/i

        const found = text.match(regex);
        if (!found) return text;
        const keyword = found[1];
        switch (keyword) {
            case 'RND':
                const min = found[3];
                const max = found[4];
                text = text.replace(regex, Math.floor(Math.random() * (max - min + 1) + min))
                return text;
            case 'PICK':
                const list = found[2].split(',');
                text = text.replace(regex, list[Math.floor(Math.random()*list.length)])
                return text;
        }

    }

    getEmbed(user, wheel, interaction) {
        const txtEmbed = text.embed;

        const details = this.getDetails(user.task.id, wheel);
        const options = user.task.obj.options.length === 0
            ? this.local(txtEmbed.fields.options.description, interaction)
            : user.task.obj.options.toString().replace(',', ',\n');
        const description = this.local(txtEmbed.description, interaction)
        const color = 0x0099FF


        const title = {
            default: 'Task to ',
                localize: {
                    de: 'Aufgabe zum '
                }
        }
        const month = {
            default: ' December',
                localize: {
                    de: ' Dezember'
                }
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');

        return new EmbedBuilder()
            .setColor(color)
            .setTitle(this.local(title, interaction) + dd + this.local(month, interaction))
            .setAuthor({name: user.task.obj.type.toUpperCase(), url: details.src})
            .setDescription(description)
            .setThumbnail(details.img)
            .addFields(
                {
                    name: this.local(txtEmbed.fields.task, interaction),
                    value: this.setOption(this.local(user.task.obj.task, interaction))
                },
                {name: '\u200B', value: '\u200B'},
                {
                    name: this.local(txtEmbed.fields.time.title, interaction),
                    value: this.local(txtEmbed.fields.time.description, interaction),
                },
                {
                    name: this.local(txtEmbed.fields.options.title, interaction),
                    value: options,
                    inline: true
                },
                {
                    name: this.local(txtEmbed.fields.taskId.title, interaction),
                    value: wheel[user.task.id].id.toString(),
                    inline: true
                },
            )
            .setImage(details.img)
            .setTimestamp()
            .setFooter({
                text: this.local(txtEmbed.footer, interaction),
                iconURL: 'https://i.imgur.com/AfFp7pu.png'
            });
    }

    getDetails(id, wheel) {
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
            case 'sissy':
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
            case 'petplay':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/lazyhowl/1647120834/1647120834.lazyhowl_lazyhowljorrpetplay.jpg';
                obj.src = 'https://www.furaffinity.net/view/46325621/';
                break;
            case 'time':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/nominu/1659892133/1659892023.nominu_koboldclocktf2022-08-07.jpg';
                obj.src = 'https://www.furaffinity.net/view/48450372/';
                break;
            case 'bondage':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/nitani/1550164312/1550164312.nitani_бондаж_и_лисикв.png';
                obj.src = 'https://www.furaffinity.net/view/30471594/';
                break;
            case 'nipple':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/cheotdo/1636097191/1636097191.cheotdo_nipple_attack_.jpg';
                obj.src = 'https://www.furaffinity.net/view/44484422/';
                break;
            case 'sauce':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/famir/1580063590/1580063590.famir_новыйхолст1ппп.jpg';
                obj.src = 'https://www.furaffinity.net/view/34770547/';
                break;
            case 'little':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/titusw/1611997302/1611997299.titusw_dew_it_.jpg';
                obj.src = 'https://www.furaffinity.net/view/40372842/';
                break;
            case 'abdl':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/titusw/1611997302/1611997299.titusw_dew_it_.jpg';
                obj.src = 'https://www.furaffinity.net/view/40372842/';
                break;
            case 'piss':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/ehnu/1601329798/1601329778.ehnu_pawstadog.png';
                obj.src = 'https://www.furaffinity.net/view/38431912/';
                break;
            case 'writing':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/herr-wozzeck/1526466585/1526466585.herr-wozzeck_1526419060.vallhund_sketch-herrwozzeck02.png';
                obj.src = 'https://www.furaffinity.net/view/27353121/';
                break;
            case 'remote':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/roodboy/1642933344/1642933344.roodboy_photo_2022-01-09_18-54-43_-_copy.jpg';
                obj.src = 'https://www.furaffinity.net/view/45619607/';
                break;
            case 'denial':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/trashjeanie/1625941753/1625941753.trashjeanie_screen_shot_2021-07-10_at_2_19_36_pm.png';
                obj.src = 'https://www.furaffinity.net/view/42721194/';
                break;
            case 'hookup':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/maxwell2111/1573854758/1573854758.maxwell2111_284688d8-83d3-46a4-adb4-3f669cb2f520.png';
                obj.src = 'https://www.furaffinity.net/view/33845955/';
                break;
            case 'pita':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/rotarr/1578749319/1578749319.rotarr_200110_pain.jpg';
                obj.src = 'https://www.furaffinity.net/view/34562266/';
                break;
            case 'bdsm':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/ragnarfaerhir/1666216493/1666216493.ragnarfaerhir_kuno_and_thyngar__bdsm___low-res_.jpg';
                obj.src = 'https://www.furaffinity.net/view/49466357/';
                break;
            case 'public':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/fallowfox/1558973453/1558973453.fallowfox_park_spanking.png';
                obj.src = 'https://www.furaffinity.net/view/31686639/';
                break;
            case 'clothes':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/kraidhiel/1525457538/1525457538.kraidhiel_tiger_clothes_coll.jpg';
                obj.src = 'https://www.furaffinity.net/view/27229047/';
                break;
            case 'faproulette':
                obj.color = '0x0099FF';
                obj.img = 'https://pbs.twimg.com/profile_banners/2391367422/1561685349/1500x500';
                obj.src = 'https://www.faproulette.co';
                break;
            case 'diet':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/gravewalker/1529103623/1529103623.gravewalker_ych_orichubby_done_sm.jpg';
                obj.src = 'https://www.furaffinity.net/view/27674781/';
                break;
            case 'self-care':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/syrupdesolation/1613877002/1613877002.syrupdesolation_img_1439.png';
                obj.src = 'https://www.furaffinity.net/view/40730036/';
                break;
            case 'selfcare':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/syrupdesolation/1613877002/1613877002.syrupdesolation_img_1439.png';
                obj.src = 'https://www.furaffinity.net/view/40730036/';
                break;
            case 'exercise':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/ebro/1613924883/1613924883.ebro_dee45lp-2186c9e3-3c52-403c-ace7-43c6749fb4db.jpg';
                obj.src = 'https://www.furaffinity.net/view/40736871/';
                break;
            case 'oral':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/ajbun/1584597102/1584597102.ajbun_ckiymtm.jpg';
                obj.src = 'https://www.furaffinity.net/view/35493910/';
                break;
            case 'maid':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/lockhartthedeer/1629075455/1629075445.lockhartthedeer_lockhart_2_.png';
                obj.src = 'https://www.furaffinity.net/view/43266943/';
                break;
            case 'eeeeevil':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/nitricgt/1552955990/1552955990.nitricgt_nitrocomm2.png';
                obj.src = 'https://www.furaffinity.net/view/30870974/';
                break;
            case 'compliment':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/emofoxgamesyt/1667472037/1667472037.emofoxgamesyt__22_snow.jpg';
                obj.src = 'https://www.furaffinity.net/view/49659702/';
                break;
            case 'sport':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/ebro/1613924883/1613924883.ebro_dee45lp-2186c9e3-3c52-403c-ace7-43c6749fb4db.jpg';
                obj.src = 'https://www.furaffinity.net/view/40736871/';
                break;
            case 'draw':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/zetaxen/1521424262/1521424262.zetaxen_silva-quick-draw.jpg';
                obj.src = 'https://www.furaffinity.net/view/26728038/';
                break;
            case 'isolation':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/stripedcrocodile/1584649835/1584649835.stripedcrocodile_joey_isolation_3-14-2020_watermark.png';
                obj.src = 'https://www.furaffinity.net/view/35503204/';
                break;
            case 'pose':
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/fraythefox/1555527226/1555527226.fraythefox_fonovaya_lisa.jpg';
                obj.src = 'https://www.furaffinity.net/view/31222893/';
                break;
            default:
                obj.color = '0x0099FF';
                obj.img = 'https://d.furaffinity.net/art/mech-ah/1531506010/1531506010.mech-ah_chastity.png';
                obj.src = 'https://www.furaffinity.net/view/27977082/';
                break;


        }
        return obj;
    }

    getSlashCommandJSON() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Spin the wheel for the advent calendar and get 1 of 24 tasks :3")
            .setDescriptionLocalizations({de: "Dreh am Rad für den Adventskalender und bekomme 1 von 24 Aufgaben :3"})
            .toJSON()
    }
}
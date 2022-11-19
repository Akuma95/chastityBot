require('dotenv').config();
const { Client, Routes, Collection } = require('discord.js');
const { registerCommands } = require('./utils/registry')
const {setYourOwner, setRules} = require("./utils/firebase/exports");
const { getAllData, storage } = require("./utils/firebase/imports");

const { CHASTITY_BOT_TOKEN, CLIENT_ID } = process.env;
const client = new Client({ intents: [], rest: { version: '10' } });

client.rest.setToken(CHASTITY_BOT_TOKEN)

client.on('ready', async () => {
    await getAllData();
    console.log(`${client.user.username} ist eingeloggt.`);
})

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        const { commandName } = interaction;
        const cmd = client.slashCommands.get(commandName)
        if (cmd) {
            cmd.run(client, interaction, storage);
        } else {
            const locales = {
                de: 'Dieser Command hat keine verfügbare Funktion.',
            };
            interaction.reply(locales[interaction.locale] ?? 'This command has no available function.');
        }
    }
})


async function main() {
    try {
        console.log('Started refreshing application (/) commands.');
        client.slashCommands = new Collection();
        await registerCommands(client, '../commands');

        const slashCommandsJson = client.slashCommands.map(
            (cmd) => cmd.getSlashCommandJSON()
        );

        await client.rest.put(Routes.applicationCommands(CLIENT_ID), {
            body: slashCommandsJson,
        });

        await client.login(CHASTITY_BOT_TOKEN);
    } catch (error) {
        console.log(error)
    }
}

main().then();
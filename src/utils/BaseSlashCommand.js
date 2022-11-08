const {breakCommand} = require("./text");
module.exports =  class BaseSlashCommand {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    local(text, interaction) {
        return text.localize[interaction.locale] ?? text.default
    }
}
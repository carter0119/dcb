const { Client, Collection, GatewayIntentBits } = require("discord.js");
const logger = require("./logger");
const moment = require("moment");
const fs = require("fs");

class GuardianClient extends Client {
  constructor(intents, token) {
    super({
      intents: intents,
    });
    this.commands = {
      message: new Collection(),
      aliases: new Collection(),
      slash: new Collection(),
    };
    this.cooldowns = new Collection();
    this.config = require("../config.js");
    this.embed = require("../core/embed.js");
    this.logger = new logger();
    this._token = token;
  }
  start() {
    this.login(this._token);
    this.loadCommands(this.config.paths.commands);
    this.loadEvents(this.config.paths.events);
  }
  loadCommands() {
    const folders = fs.readdirSync(this.config.paths.commands);
    for (let folder of folders) {
      const files = fs.readdirSync(`${this.config.paths.commands}/${folder}`);
      for (let file of files) {
        let command = require(
          `${this.config.paths.commands}/${folder}/${file}`,
        );
        command = new command(this);
        this.commands.message.set(command.command, command);
      }
    }
  }
  loadEvents() {
    const files = fs.readdirSync(this.config.paths.events);
    for (let file of files) {
      let event = require(`${this.config.paths.events}/${file}`);
      event = new event(this);
      if (event.once)
        this.once(event.event, (...args) => event.run(this, ...args));
      else this.on(event.event, (...args) => event.run(this, ...args));
      console.log(event)
    }
  }
}

module.exports = GuardianClient;

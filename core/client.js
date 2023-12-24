const {
  Client,
  Collection,
  GatewayIntentBits,
  REST,
  Routes,
} = require("discord.js");
const logger = require("./logger");
const moment = require("moment");
const fs = require("fs");

class GuardianClient extends Client {
  constructor(intents, token) {
    super({
      intents: intents,
    });
    this.slash = new Collection();
    this.slashData = [];
    this.cooldowns = new Collection();
    this.config = require("../config.js");
    this.logger = logger;
    this._token = token;
  }
  start() {
    this.login(this._token);
    this.loadCommands(this.config.paths.commands);
    this.registerCommands();
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
        this.slashData.push(command.data.toJSON());
        this.slash.set(command.data.name, command);
      }
    }
  }
  registerCommands() {
    const rest = new REST().setToken(this.config.token);
    (async () => {
      try {
        const data = await rest.put(
          Routes.applicationCommands("1186053829570084916"),
          {
            body: this.slashData,
          },
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }
  loadEvents() {
    const files = fs.readdirSync(this.config.paths.events);
    for (let file of files) {
      let event = require(`${this.config.paths.events}/${file}`);
      event = new event(this);
      if (event.once)
        this.once(event.event, (...args) => event.run(this, ...args));
      else this.on(event.event, (...args) => event.run(this, ...args));
    }
  }
}

module.exports = GuardianClient;

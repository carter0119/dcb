const { Client, Intents } = require('discord.js');

// Custom Client
class GuardianClient extends Client {
  constructor(intents, settings = {}) {
    super(intents);
    if(typeof settings !== object) console.error("Client's Settings Is Not Typeof (Object)!");
    if(!settings.token) console.error("Client's Settings (Obj) Is Missing a Valid Token!");
    if(!settings.commandsPath) console.error("Client's Settings (Obj) Is Missing a Valid Commands Path");
    if(!settings.eventsPath) console.error("Client's Settings (Obj) Is Missing a Valid Events Path");
    this.settings = settings;
  }
  init(token) {
    try {
      this.login(token);
      this.loadCommands(this.settings.commandsPath);
      this.loadEvents(this.settings.eventsPath);
    } catch(err) {
      console.error(err);
    }
  }
  loadCommands(dir) {
    console.log("Loading Commands...");
  }
  loadEvents(dir) {
    console.log("Loading Events...");
  }
}

module.exports = GuardianClient;

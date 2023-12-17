const { Client, Intents } = require('discord.js');

// Custom Client
class GuardianClient extends Client {
  constructor(intents, settings = {}) {
    if(typeof settings !== object) console.error("Client's Settings Is Not Typeof (Object)!");
    if(!settings.token) console.error("Client's Settings (Obj) Is Missing a Valid Token!");
    if(!settings.commandsPath) console.error("Client's Settings (Obj) Is Missing a Valid Commands Path");
    if(!settings.eventsPath) console.error("Client's Settings (Obj) Is Missing a Valid Events Path");
    super(intents);
  }
  init(token) {
    try {
      this.login(token);
    } catch(err) {
      console.error(err);
    }
  }

}

module.exports = GuardianClient;

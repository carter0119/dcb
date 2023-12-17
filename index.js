// Custom Client
const { GuardianClient } = require("./src/guardian/client.js");
const config = require("./config");
// Init Client
const client = new GuardianClient({ intents: config.intents});
// Login to Client
client.start(config.token);
// Load Commands
client.loadCommands(config.paths.commands);
// Load Events
client.loadEvents(config.paths.events);

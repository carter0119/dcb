// Custom Client
const { GuardianClient } = require("./src/guardian/client.js");

// Init Client
const client = new GuardianClient({ intents: Client.Intents});
// Login to Client
client.start(client.token);
// Load Commands
client.loadCommands(client.config.paths.commands);
// Load Events
client.loadEvents(client.config.paths.events);

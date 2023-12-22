// Custom Client
const GuardianClient = require("./core/client");
const config = require("./config");
// Build Client
const client = new GuardianClient(config.intents, config.token);
// Start Client
client.start();

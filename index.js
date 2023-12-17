const { GuardianClient } = require("./src/guardian/client.js")

const client = new GuardianClient({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
] });
client.init(process.env.Token);

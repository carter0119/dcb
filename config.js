const mainpath = __dirname;

module.exports = {
  token: process.env.token,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],
  paths: {
    commands: `${mainpath}/src/guardian/commands`,
    events: `${mainpath}/src/guardian/events`,
    database: `${mainpath}/src/database`,
    dashboard: `${mainpath}/src/dashboard`,
  }
}

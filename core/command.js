module.exports = class Command {
  constructor(client, options) {
    this.client = client;
    this.command = options.command;
    this.description = options.description;
    this.usage = options.usage || null;
    this.cooldown = options.cooldown || 3;
    this.permissions = options.permissions || null;
    // this.client = client;
    // this.data = meta.data;
    // this.contextDescription = meta.contextDescription || null;
    // this.usage = meta.usage || this.name;
    // this.category = meta.category || 'Info';
    // this.permissions = meta.permissions || ['Use Application Commands', 'Send Messages', 'Embed Links'];
  }

  async run() {
    client.logger.error(
      `[CommandLoader] Command ${this.command} is missing a run() method.`,
    );
  }
};

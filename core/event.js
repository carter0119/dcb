module.exports = class Event {
  constructor(client, options = {}) {
    this.client = client;
    this.event = options.event;
    this.once = options.once || false;
  }
  async run() {
    client.logger.error(
      `[EventLoader] Event ${this.event} is missing a run() method.`,
    );
  }
};

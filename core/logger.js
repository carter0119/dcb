const asciitable = require("ascii-table");
const colors = require("colors/safe");

class Logger {
  constructor(options) {
    this.options = options;
  }
  log(text) {
    console.log(colors.white(text));
  }
  info(text) {
    console.log(colors.blue("🗣  " + text));
  }
  success(text) {
    console.log(colors.green("✅ " + text))
  }
  error(text) {
    console.log(colors.red("❌ " + text));
  }
  warning(text) {
    console.log(colors.yellow("⚠️ " + text));
  }
  table(title, headings, rows) {
    const table = new asciitable(title);
    table.setHeading(...headings);
    for (const row of rows) {
      table.addRow(...row);
    }
    console.log(table.toString());
  }
}

module.exports = Logger;

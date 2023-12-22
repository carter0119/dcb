const asciitable = require("ascii-table");
const colors = require("colors/safe");

module.exports = {
  log: function(text) {
    console.log(colors.white(text));
  },
  info: function(text) {
    console.log(colors.blue("🗣  " + text));
  },
  success: function(text) {
    console.log(colors.green("✅ " + text));
  },
  error: function(text) {
    console.log(colors.red("❌ " + text));
  },
  warning: function(text) {
    console.log(colors.yellow("⚠️ " + text));
  }
}

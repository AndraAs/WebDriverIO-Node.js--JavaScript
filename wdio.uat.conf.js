//merge parent conf object and add changes to uat conf(base url,connection  timeout)
const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");
exports.config = merge(wdioConf.config, {
  baseUrl: "https://www.rahulshettyacademy.com/",
  waitforTimeout: 5000,
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    grep: "sanity",
  },
});

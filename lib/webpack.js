const fs = require("fs")

module.exports = class Webpack {
  constructor(options) {
    let { entry, output } = options
    this.entry = entry
    this.output = output
  }
  run() {
    this.parse(this.entry)
  }

  parse(entryFile) {
    const CONTENT = fs.readFileSync(entryFile, "utf-8")
    console.log("entryFile content is: ", CONTENT)
  }
}
const fs = require("fs")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse")

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
    // 分析入口文件的内容
    const CONTENT = fs.readFileSync(entryFile, "utf-8")
    console.log("entryFile content is-------: ", CONTENT)

    // 分析入口文件（使用 @babel/parser 分析文件内容，生成抽象语法树）
    // 抽象语法树 => 分析出依赖模块、表达式、函数
    const AST = parser.parse(CONTENT, {
      sourceType: "module"
    })
    console.log("抽象语法树-------: ", AST)

    // 分析抽象语法树
    traverse(AST, {
      ImportDeclaration() {

      }
    })
  }
}
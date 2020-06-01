# 实现简易的 webpack

## 实现步骤
- 基础配置：webpack 会读取配置
    - 找到⼊⼝模块
- ⼊⼝分析
    - 分析依赖模块(拿到模块的路径)
    - 分析内容（并对内容处理）
    - 编译内容
- 依赖模块（递归的⽅式）
    - 分析依赖模块
    - 分析内容（并对内容处理）
    - 编译内容
- ⽣成bundle.js（这个js可以直接在浏览器中执⾏）


## 目录结构

```
├─bundle.js ------------------------- 模拟运行的 webpack
├─package-lock.json
├─package.json
├─README.md
├─webpack.config.js ----------------- webpack 配置文件
├─src
|  ├─expo.js
|  └index.js ------------------------ 入口文件
├─lib
|  └webpack.js ---------------------- 模拟的简易 webpack
````

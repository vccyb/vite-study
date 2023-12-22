# 什么是构建工具呢？

企业级别的项目具备哪些功能

1. typescript： 如果用到 ts 文件，我们需要使用 tsc 将 typescript 文件编译成 js 文件
2. React/Vue：安装 react-complier / vue-complier, 将我们写的 jsx 文件或者.vue 文件转化为 render 函数
3. less/sass/postcss/component-style: 我们又需要安装 less-loader / sass-loader / postcss-loader / style-loader 等一系列编译工具
4. 语法降级: babel --> 将 es 的新语法转换成浏览器可以识别的语法
5. 体积优化：uglifyjs --> 压缩 js 文件 将我们带吗进行压缩变成体积更小，性能更高的文件

稍微改一点点东西，非常的麻烦
App.tsx 改了一点点
eg： App.tsx --> tsc --> App.jsx --> React-complier --> js 文件

一个工具，帮你把 tsc，react-complier，less, babel，uglifyjs 都搞定, 全部集成到一起

我们只要关心我们写的代码就好了

我们写的代码一变化， 就有人帮我们自动去 tsc, react-complier, less, babel, uglifyjs 全部挨个走一遍 ---> js

这个东西就叫 **构建工具**

构建工具还做了哪些事情(脏活、累活)

打包：将我们写浏览器不认识的代码，交给构建工具进行编译处理的过程就叫做打包，打包完，会给我们一个浏览器可认识的文件

1. 模块化开发的支持：支持从 node_modules 引入代码， + 多种模块化 (浏览器不行)
2. 处理代码的兼容性: 比如 babel 语法降级， less, ts 语法的转化 （**不是构建工具来做的，但是是构建工具将这些语法对应的处理工具集成来自动化处理**）
3. 提高项目的性能：压缩文件，代码分隔
4. 优化开发体验 HMR，开发服务器

我们只需要配置好一次就行
构建工具可以让我们可以不用每次都关系我们代码如何在浏览器如何运行

市面上主流的构建工具：
webpack
rollup
esbuild
gulp
vite

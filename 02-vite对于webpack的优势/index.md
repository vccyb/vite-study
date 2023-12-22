webpack 开发体验不好
项目越大，要处理的 js 代码越多

造成的结果，构建工具要很长的时间才能启动开发服务器（启动开发服务器 --》 把项目跑起来）

webpack 为啥不能改呢？
webapck 支持多种模块化

```js
// index.js
const lodash = require("lodash");
import Vue from "vue";
```

webpack 的编译原理，AST 抽象语法分析工具，分析出你写的 js 文件中的导入导出
构建工具运行在服务端

```js
webpack 的转化结果
const lodash = webpack_require('lodash')
const Vue = webpack_require('Vue')
```

```js
(function (modules) {
  function webpack_require() {}

  // 入口 index.js
  // 通过webpack的配置文件得来的 webpack.config.js ./src/index.js
  modules[entry](webpack_require);
})({
  "index.js": () => {
    const lodash = webpack_require("lodash");
    const Vue = webpack_require("Vue");
  },
});
```

因为 webpack 支持多种模块化，他一开始就必须要统一模块化代码，所以意味着，它需要把所有的依赖都读一遍，

webpack 为啥要支持多种模块化，你的项目不一定只跑在浏览器，webpack 做了兼容，让他可以跑到 node

vite 会不会直接把 webpack 干翻，vite 基于 es module
侧重点不一样：
webpack 兼容性
vite： 浏览器端的开发体验

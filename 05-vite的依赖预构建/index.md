# vite 的预构建

```js
import _ from "lodash"; // lodash 也可能import了其他的东西
```

在处理的过程中，如果说看到了有非绝对路径和相对路径的引用，会尝试开启路径补全

```js
import _ from "/node_modules/.vite/lodash";

import __vite__cjsImport1_lodash from "/node_modules/.vite/deps/lodash.js?v=24f4be66";
```

http://localhost:5173/node_modules/.vite/deps/lodash.js?v=24f4be66

yarn dev --> 开发环境，每次依赖预构建所需要构建的相对路径都说正确的

生产 --> rollup 去完成生产环境的大包，（兼容性，babel 等等）

commonjs 规范到处 module.exports
有的包它是以 common,js 的规范到处 axios

=> 解决这个问题， 依赖预构建

## 依赖预构建

1. 首先 vite 会找到相应的依赖，然后调用 esbuild（对 js 语法进行处理的一个库），将其他规范的代码转换成 esmodule 规范，然后放到当前目录下的 node_modules/.vite/deps/，同时对 esmodule 规范的各个模块进行统一集成

依赖预构建解决了什么问题，3 个

1. 不同的第三方包会有不同的到处格式，（vite 无法约束，这个是包的作者）
2. 对路径的处理可以直接使用.vite/deps，方便路径的重写
3. 网络多包的问题(esmodule 原生不支持 node_modules 的原因之一),有了依赖预构建之后，无论有多少个 export，import，vite 都会经可能将他们集成最后生产一个或者几个模块

假设 lodash 又依赖很多其他的模块，并且依赖的包也是 module.export 导出

比如 lodash-es
他的源码

```
export xxx
```

网络请求中的不是这种规范

vite 的重写

```ts
export { default as a } from "./a.js";
```

=> vite 重写成

```ts
function a() {}
```

## vite.config.js

有个配置想，可以排除某些依赖的依赖预构建

```js
export default defineConfig({
  optimizeDeps: {
    include: ["exxx"],
    exclude: ["lodash"],
  },
});
```

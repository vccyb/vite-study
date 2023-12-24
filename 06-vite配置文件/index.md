# vite 配置文件

1. 配置文件的语法提示

语法提示：
webstorm 还是 vscode

方式 1 defineConfig

```
import { defineConfig } from 'vite'
export default defineConfig({})
```

方式 2

```
/** @type import{"vite"}.UserConfig */
```

2. 环境变量

过去我们使用 webpack 的时候，我们要区分配置文件的一个环境

- webpack.dev.config
- webpack.prod.config
- webpack.base.config
- webpackmerge

- vite.dev.config.js
- vite.prod.config.js
- vite.base.config.js

```js
import { defineConfig } from "vite";

// 策略模式
const envResolver = {
  build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
  serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
};

export default defineConfig(({ commond }) => {
  return envResolver[commond]();
});
```

command 取决 vite 命令

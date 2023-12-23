# vite 启动项目初体验

开箱即用（out of box）
你不需要任何额外的配置就可以使用 vite 来帮你处理构建工作

在默认情况下，我们的 esmodule 去导入资源点的时候，要么是绝对路径，要么是相对路径

既然我们的最佳实践是 node_modules，为啥 es 官方在我们不使用绝对和相对路径，能不能让我们的资源路径直接指向 node_modules 呢？

依赖的问题

lodash 可能也依赖很多，注意 main.js counter.js http 网络加载到的。
浏览器端，太消耗性能

但是 common.js node_modules 在本地，

vite 就是代码处理的，生产环境我们不需要

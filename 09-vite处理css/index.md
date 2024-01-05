vite 天生就支持对 css 文件的处理

1. -> main.js -> 发现有 css 的引用
2. -> fs 模块读取 index.css
3. -> 创建 style 标签，将 css 内容写入 style 标签
4. 把 style 标签插入到 index.html 的头部
5. 将 css 文件中的内容替换为 js 的脚本，方便热更新

xxx.module.css => 这是一种规范，他会去补 hash 名字

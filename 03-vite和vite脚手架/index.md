vite 脚手架和 vite

```cmd
yarn create vite
```

1. 帮我们全局安装一个东西 create-vite (vite 的脚手架)
2. 直接运行脚手架 create-vite bin 目录下的一个执行配置

我们之前接触过 vue-cli  
create-vite 就是一套预设

很多同学可能存在误区:
认为官网中使用对应 yarn create 构建项目的过程也是 vite 在做的事情

create-vite 和 vite 的关系 --- create-vite 内置了 vite
vite 就是构建工具, create-vite 是脚手架
使用 vue-cli 会内置 webpack

先学习的就是 vite

我们学习 vite，暂时不会使用

```
yarn create vite my-vue-app --template vue
```

vue-cli 可以和 webpack 分的很清楚

vite --> vue 团队的
create-vite --> vite 团队

vue 团队希望弱化 vite 的存在感，希望大家就使用 create-vite，脚手架使用预设
但是我们学习的时候不能去弱化的

预设: 毛坯房 vs 精装房
vue-cli 给我么你提供的已经精装修的模板

create-vite 给我么你提供的也是精装修的模板
什么 vite vue post-css less babel，并且给你做好了最佳时间的配置

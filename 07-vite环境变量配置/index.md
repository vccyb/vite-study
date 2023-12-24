# vite 环境变量配置

环境变量：会根据当前的代码环境的值，参数变化的变量就是环境变量

代码环境：

1. 开发环境
2. 测试环境
3. 预发布环境
4. 灰度环境
5. 生产环境

yarn dev => 进开发环境
=> .env.development

在 vite 中的环境变量

1. vite 中环境变量的处理
   基于 dotenv 这个第三方库

dotenv 会自动读取根目录下的 .env， 并解析这个文件对应的环境变量，
并注入到 process 对象下去

补充知识：
为啥 vite.config.js 可以用 esmodule 的语法
，因为 vite 它读取这个文件的时候，会率先 node 去解析文件语法，如果是 es，它会替换到 commonjs

node 环境，所以这个文件就可以访问到 process 对象

vite 考虑到冲突问题 可以使用 loadEnv 来手动确认 env 文件

.env: 所有环境都需要用到的环境变量
.env.development: 开发环境需要用到的环境变量
.env.production: 生产环境需要用到的环境变量 vite 将我们生产环境默认取名为 production

mode 是啥，根据你是跑什么命令来的

```
yarn dev --mode development
```

默认

```
yarn dev  => vite => yarn dev --mode development
yarn build => vite => yarn build --mode production
```

当我们调用 loadEnv 的时候，它会根据 mode 去读取对应的 .env 文件
并放进一个对象里面
并将 mode 传进来的值，进行拼接 .env+mode
.env.development

然后根据我们提供的目录，去解析对应的配置文件，放到一个对象

```
const baseEnvConfig =  读取.env配置
const modeEnvConfig =  读取.env.mode配置
const lastEnvConfig =  {...baseEnvConfig, ...modeEnvConfig}
```

2. 客户端
   上面的是服务端的，
   客户端，vite 会注册到 import.meta.env 对象上
   但是，vite 做了一个处理，为了防止我们将不必要的变量送进 import.meta.env
   如果不是 VITE 开头，不会注入到 import.meta.env 对象上

当然这个开头也是可以改的 envPrefix

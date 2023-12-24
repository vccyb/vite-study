import { defineConfig } from "vite";

// 策略模式
const envResolver = {
  build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
  serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
};

export default defineConfig(({ commond }) => {
  return envResolver[commond]();
});

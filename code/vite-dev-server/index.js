const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  console.log("ctx", ctx.request, ctx.response);
  if (ctx.request.url === "/") {
    // 根路径
  }

  if (ctx.request.url === "api/getUserInfo") {
  }
});

app.listen(5173, () => {
  console.log("server is running at http://localhost:5173");
});

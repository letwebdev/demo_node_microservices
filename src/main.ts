import Koa, { Middleware } from "koa"
const app = new Koa()

async function helloWorld(...[ctx, next]: Parameters<Middleware>) {
  ctx.body = "Hello World"
  await next()
}
app.use(helloWorld)
app.listen(3000)

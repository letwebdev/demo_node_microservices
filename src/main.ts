import Koa, { Middleware } from "koa"
import serve from "koa-static"
const app = new Koa()

async function helloWorld(...[ctx, next]: Parameters<Middleware>) {
  ctx.body = "Hello World"
  await next()
}
app.use(helloWorld)
app.use(serve("./staticServer/"))
app.listen(3000)

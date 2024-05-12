import { log } from "console"
import Koa from "koa"
import serve from "koa-static"
const app = new Koa()

function helloWorld(ctx) {
  ctx.body = "Hello World"
}

async function responseTime(ctx, next) {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set("X-Response-Time", `${ms}ms`)
  log(ms)
  ctx.body += String(ms)
}

// app.use(helloWorld)
// app.use(responseTime)
app.use(serve("./staticServer/"))
app.listen(3000)

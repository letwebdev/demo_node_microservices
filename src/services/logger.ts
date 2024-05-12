import logger from "koa-logger"
import Koa from "koa"

const app = new Koa()
app.use(
  logger((str, args) => {
    // redirect koa logger to other output pipe
    // default is process.stdout(by console.log function)
  })
)
app.use(function (ctx, next) {
  if (ctx.path === "/404") return
  return next()
})

app.listen(3000)

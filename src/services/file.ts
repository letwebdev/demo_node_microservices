import Koa from "koa"
import serve from "koa-static"
import mount from "koa-mount"
const app = new Koa()

app.use(mount("/staticServer", serve("services/staticServer")))
app.listen(3000)

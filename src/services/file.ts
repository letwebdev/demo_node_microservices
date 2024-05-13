import Koa from "koa"
import serve from "koa-static"
const app = new Koa()

app.use(serve("services/staticServer"))
app.listen(3000)

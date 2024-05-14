import Koa from "koa"
import logger from "koa-logger"
import serve from "koa-static"
import mount from "koa-mount"

import { MongoClient } from "mongodb"

const app = new Koa()
app.use(logger())

app.use(mount("/staticServer", serve("services/staticServer")))

const urlOfMongoDB = "mongodb://localhost:27017"
const client = new MongoClient(urlOfMongoDB)
const dbName = "myProject"

async function main() {
  await client.connect()
  console.log("Connected successfully to server")
  const db = client.db(dbName)
  const collection = db.collection("documents")

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
  console.log("Inserted documents =>", insertResult)

  return "done."
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())

app.listen(3000)

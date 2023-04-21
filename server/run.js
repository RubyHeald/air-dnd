const app = require('./app')
const db = require('./db/config')

const port = 5000

async function run() {
  await db.sync()
  app.listen(port, () => void console.log(`Server listening on ${port}`))
}

run()

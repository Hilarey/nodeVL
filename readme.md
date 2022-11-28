fs.appendFile
fs.writeFile
fs.readFile
fs.mkdir

const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(\_\_dirname, 'temp')

const getContent = () => ` \r${process.argv[2] ?? ''}`

async function start() {
try {
if (fsSync.existsSync(base)) {
await fs.appendFile(path.join(base, 'logs.txt'), getContent())
const data = await fs.readFile(path.join(base, 'logs.txt'), {encoding: 'utf-8'})
console.log(data)
} else {
await fs.mkdir(base)
await fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
}
} catch (err) {
console.log('err', err)
}
}

start()

---

req.method
req.url
req.on

res.setHeader
res.writeHead
res.end

---

NODEMON
npm i nodemon -D (-D - это зависимость для разработки)
"scripts": {
"start": "node index.js",
"serve": "nodemon index.js"
},

---

EXPRESS
npm install express --save

const app = express();

---

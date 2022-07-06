const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', require('./src/routes/route-user'));
app.use('/web-info', require('./src/routes/route-web-info'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
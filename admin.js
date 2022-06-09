const PORT = 4001
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession= require('cookie-session')
const app = express()
const morgan = require('morgan')

app.use(morgan('common'))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/staging', require('./routes/staging'))

app.get('/', (req, res) => {
  res.send("go to <a href='staging/test.html' >test</a>")
})

app.listen(PORT, () =>console.log(`Listening on port ${PORT}`))

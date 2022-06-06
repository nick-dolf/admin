const PORT = 4001
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession= require('cookie-session')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  res.render('login', {views: req.session.views})
  console.log(req.query.page)
})

app.post('/login', (req, res) => {
  console.log(req.body.user)
})

app.listen(PORT, () =>console.log(`Listening on port ${PORT}`))

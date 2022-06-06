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
  if (req.session.user == 'staging') {
    res.send('valid cookie')
  } else {
    res.status(403).redirect('./login')
  }
})

app.get('/login', (req, res) => {
  res.render('login', {warning: ''})
})

app.post('/login', (req, res) => {
  if ( req.body.user.toLowerCase() == 'staging') {
    req.session.user = 'staging'
    res.redirect('./')
  } else {
    res.render('login', {warning: 'Please type staging into input box'})
  }
})

app.listen(PORT, () =>console.log(`Listening on port ${PORT}`))

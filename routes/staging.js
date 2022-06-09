const bodyParser = require('body-parser')
const cookieSession= require('cookie-session')
const express = require('express')
const router = express.Router()

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 10 * 60 * 1000
}))

router.get('/login', (req, res) => {
  res.render('login', {destination: req.session.original})
})

router.post('/login', (req, res) => {
  if ( req.body.user.toLowerCase() == 'staging') {
    req.session.user = 'staging'
    if (req.session.original) {
      res.redirect('.' + req.session.original)
    } else {
      res.redirect('/' )
    }

  } else {
    res.render('login', {warning: 'Please type staging into input box'})
  }
})

router.use((req, res, next) => {
  if (req.session.user == 'staging') {
    next()
  } else {
    req.session.original = req.url
    res.redirect('/staging/login')
  }
})

router.use(express.static('../staging'))

module.exports = router

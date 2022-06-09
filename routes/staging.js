const bodyParser = require('body-parser')
const cookieSession= require('cookie-session')
const express = require('express')
const router = express.Router()

router.use(express.static('../staging'))

module.exports = router
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }))
//
// app.get('/', (req, res) => {
//   if (req.session.user == 'staging') {
//     res.send('valid cookie')
//   } else {
//     res.status(401).end()
//   }
// })
//
// app.get('/login', (req, res) => {
//   res.render('login', {warning: ''})
// })
//
// app.post('/login', (req, res) => {
//   if ( req.body.user.toLowerCase() == 'staging') {
//     req.session.user = 'staging'
//     res.redirect('/')
//   } else {
//     res.render('login', {warning: 'Please type staging into input box'})
//   }
// })

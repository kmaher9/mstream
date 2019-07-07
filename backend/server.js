const express           = require('express')
const morgan            = require('morgan')
const bodyParser        = require('body-parser')
const busboy            = require('connect-busboy')
const app               = express()

// -----------------------------------------------

app.use(morgan('dev')) // production level logging
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// CORs, lifted from Mozilla website
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE")
  res.setHeader("Access-Control-Allow-Headers", "x-access-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
  next()
})

// ------------------------------------------------

app.use('/api', require('./routes'))

app.listen(3000, () => console.log('listening'))
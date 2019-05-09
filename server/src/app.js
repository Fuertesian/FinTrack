const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//express boilerplate
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// endpoints
app.get('/register', (req, res) => {
  res.send({
    message: 'registration complete' })
})
// post requests
app.post('/register', (req, res) => {
  res.send({
    message: `${req.body.email} was registered`
  })
})
const port = process.env.PORT || 8000
app.listen(port)

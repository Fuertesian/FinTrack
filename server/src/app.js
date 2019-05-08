console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// endpoints
app.post('/register, (requ, res) => {
  res.send({
    message: 'registration complete' })
})
const port = process.env.PORT || 8000
app.listen(port)

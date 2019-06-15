const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models') // import a sequelize object from the models file
// express boilerplate
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes.js')(app) // calls the function app from router.js
sequelize.sync() // sync the sequelize object with the app port
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  }) 

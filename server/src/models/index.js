const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
const sequelize = new Sequelize( // creates a new instance of a Sequelize object (Now models can be defined allowing SQL tables to be created from models in this directory)
  config.db.database, // give the database value of the db object in the config file
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname) // Synchronously (Sequentially/In order) reads all the elements in this directory (__dirname) and return an array of these elements (file)
  .filter((file) => // creates an array with all the elements passed (in this case files) that are not index.js
    file !== 'index.js')
  .forEach((file) => { // executes this f(x) for each element in array
    const model = sequelize.import(path.join(__dirname, file)) // import the files into sequelize to be used for model definition
    db[model.name] = model
  }) 

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
// object constructor http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
// readdirSync https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
// filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// sequelize import http://docs.sequelizejs.com/manual/models-definition.html

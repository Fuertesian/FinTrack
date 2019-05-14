const { User } = require('../models') // import the index file of the models directory (when file not specified it defaults to index.js)

module.exports = {
  async register (req, res) { // export an asychronous function that takes a request object and a response object
    try {
      const user = await User.create(req.body) // until the user function is resolved, do not execute until the promise is resolved. If the promise is rejected, the await expression throws a rejected value
      res.send(user.toJSON()) // send the response of the http request (In this case the data from the user object in json format)
    } catch (err) {
      res.status(400).send({ // set the status of the response of the http request to 400 and send this error
        error: 'An error has occured'
      })
    }
  }
}
// res object https://expressjs.com/en/api.html#res
// req object https://expressjs.com/en/api.html#req
// User.create(req.body) = grab the information (as a JSON object) from the body of the request object (the data submitted) using the create method (from sequelize) on the User object (db from index.js)
// async https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// await https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

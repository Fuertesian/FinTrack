const authenticationController = require('./controller/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
module.exports = (app) => { // export a function that takes a parameter app
  app.post(
    '/register',
    authenticationControllerPolicy.register,
    authenticationController.register) // send a post request to the register endpoint, and execute the register function in the authetenticationController and authenticationControllerPolicy files
}

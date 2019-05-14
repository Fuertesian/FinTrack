const Joi = require('@hapi/joi')
module.exports = {
  register (req, res, next) { // register method req is the data recieved in the request, res is what you send back, and next invokes the next method in the routes path.
    const schema = {
      email: Joi.string().email(), // email has to be in string and email format
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // only these characters are allowed and minimum length must be 8, maximum length is 32
      )
    }
    const { error } = Joi.validate(req.body, schema) // check the request body (data submitted), with the criteria we have set in the schema ** IF ERROR, changed { error, value } -> { error }
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules: <br> 
            1. Passwords can only be comprised of lower or uppercase and numbers <br>
            2. Passwords must be 8-32 characters long` })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration'
          })
      }
    } else {
      next() // if it passes the criteria set in the schema, go to the next method in the routes file
    }
  }
}
// checks if email and password pass constraints
// JOI Documentation https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
// FUTURE FEATURE https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/

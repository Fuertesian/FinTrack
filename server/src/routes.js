module.exports = (app) => {
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
}
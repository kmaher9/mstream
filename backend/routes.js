const router      = require('express').Router()
const controller  = require('./controller')

router.get('/', (request, response, next) => {
  return response.status(200).json({
    "message": "API working"
  })
})

router.get('/stream', controller.stream)

module.exports = router
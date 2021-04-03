const router = require('express').Router()
const UserController = require('../controllers/User.controller.js')

router.post('/register', UserController.registerUser)

module.exports = router
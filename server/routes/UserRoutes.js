const router = require('express').Router()
const UserController = require('../controllers/User.controller.js')
const { verifyAccessToken } = require('../helpers/jwt_helpers.js')

router.post('/register', UserController.registerUser)

router.post('/login', UserController.loginUser)

router.get('/me', verifyAccessToken, UserController.getUser)

module.exports = router
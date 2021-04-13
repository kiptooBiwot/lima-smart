const router = require('express').Router()
const UserController = require('../controllers/User.controller.js')
const { verifyAccessToken } = require('../helpers/jwt_helpers.js')

router.post('/register', UserController.registerUser)

router.post('/login', UserController.loginUser)

router.get('/me', verifyAccessToken, UserController.getUser)

router.post('/refresh-token', UserController.refreshToken)

router.delete('/logout', UserController.logout)

module.exports = router
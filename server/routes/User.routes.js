const router = require('express').Router()
const UserController = require('../controllers/User.controller.js')
const { verifyAccessToken } = require('../helpers/jwt_helpers.js')

router.get('/', UserController.getAllUsers)

router.post('/register', UserController.registerUser)

router.post('/login', UserController.loginUser)

router.get('/me', verifyAccessToken, UserController.getUser)

router.post('/refresh-token', UserController.refreshToken)

router.delete('/logout', UserController.logout)

router.route('/:id/profile')
    .get(UserController.getUserProfile)
    .post(UserController.createUserProfile)

router.route('/:id/farm')
    .get(UserController.getUserFarm)
    .post(UserController.createUserFarm)

module.exports = router
const router = require('express').Router()
const profileControllers = require('../controllers/Profile.controllers.js')

router.get('/profile', profileControllers.getProfile)

router.post('/profile', profileControllers.createProfile)

router.put('/profile/:id', profileControllers.updateProfile)

router.delete('/profile/:id', profileControllers.deleteProfile)

module.exports = router
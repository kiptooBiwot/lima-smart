const User =  require('../models/User.model.js')
const Profile = require('../models/Profile.model')
const Farm = require('../models/Farm.model')
const { registerSchema, loginSchema } = require('../helpers/Validation.Schema')
const createError = require('http-errors')
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../helpers/jwt_helpers.js");
const client = require('../helpers/redis.init')

module.exports.registerUser = async (req, res, next) => {
  try {
    // Validate inputs from the form
    const userInput = await registerSchema.validateAsync(req.body)

    // Check if user's email exit
    const dbUser = await User.findOne({ email: userInput.email })

    if (dbUser) throw createError.Conflict(`${userInput.email} is already taken. Try another email.`)

    // Save the user details
    const newUser = new User({
      ...userInput
    })

    const savedUser = await newUser.save()

    console.log(`User from DB: ${savedUser}`)
    
    if (savedUser) {
      // Generate access token
      const accessToken = await signAccessToken(savedUser)
      const refreshToken = await signRefreshToken(savedUser)
      // console.log(`Access Token: ${accessToken}`)
      // console.log(`Refresh Token: ${refreshToken}`)
      res.status(200).json({ message: "Account created", user: savedUser, tokens: [{access: accessToken, refresh: refreshToken}] });
    }
  } catch (err) {
    if (err.isJoi === true) err.status = 422 
    next(err)
  }
}

module.exports.loginUser = async (req, res, next) => {
  try {
    // Validate the inputs from the user
    const validatedInputs = await loginSchema.validateAsync(req.body)

    // Check if the user exists in the database
    const user = await User.findOne({ email: validatedInputs.email })
    if (!user) throw createError.NotFound(`Account not found. You may want to register.`)

    // Compare passwords
    const passwordMatch = await user.isValidPassword(validatedInputs.password)
    
    if (!passwordMatch) throw createError.Unauthorized('Invalid login credentials')

    // Generate Access and Refresh tokens
    const accessToken = await signAccessToken(user)
    const refreshToken = await signRefreshToken(user)

    res.header('x-access-token', accessToken).send({
      message: `Login successful!`,
      token: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`
    })

  } catch (err) {
    console.log(err)
    if (err.isJoi === true) return next(createError.BadRequest(`Invalid login credentials`))
    next(err)
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    console.log(req.user)
    // TODO: Use the login token to get the user profile back
    const user = await User.findOne({ email: req.user.email })
    if (!user) throw createError.NotFound('User not found')
    
    res.json({ user:user })
  } catch (err) {
    next(err)
  }
}

module.exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) throw createError.BadRequest()
    const userId = await verifyRefreshToken(refreshToken)
    // get user from db
    const user = await User.findOne({ _id: userId })

    const accessToken = await signAccessToken(user)
    const refreshedToken = await signRefreshToken(user)

    res.send({
      token: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshedToken}`
    })
  } catch (error) {
    next(error)
  }
}

module.exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    console.log(req.body)
    if (!refreshToken) throw createError.BadRequest()
    const userId = await verifyRefreshToken(refreshToken)

    console.log(`USER_ID: ${userId}`)
    // Delete the refresh token from Redis
    client.DEL(userId, (err, val) => {
      if (err) {
        console.log(err)
        throw createError.InternalServerError()
      }

      console.log(val)
      res.send({
        message: 'Logged out!',
      })
    })
  } catch (error) {
    next(error)
  }
}

module.exports.getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.params
    const userProfile = await User.findOne({ _id: id })
    await userProfile.populate('profile').execPopulate()
    res.send({ userProfile })
  } catch (error) {
    next(error)
  }
}

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate('profile').populate('farm')
    res.json(users)
  } catch (error) {
    next(error)
  }
}

module.exports.createUserProfile = async (req, res, next) => {
  try {
    const { id } = req.params

    // TODO: Validate user inputs before saving to DB

    // Create a new instance of Profile from req.body
    const userProfile = new Profile(req.body)
    // RELATIONSHIP -> add user id from params to user profile
    userProfile.user_id = id

    // save
    await userProfile.save()

    res.json({
      message: 'Your information is captured',
    })

  } catch (error) {
    next (error)
  }
}

module.exports.createUserFarm = async (req, res, next) => {
  try {
    const { id } = req.params

    const newFarm = new Farm(req.body)
    newFarm.owner = id

    console.log(newFarm)

    const userFarm = await newFarm.save()

    res.json({
      message: 'Success',
      farm: newFarm
    })
  } catch (error) {
    next(error)
  }
}

module.exports.getUserFarm = async (req, res, next) => {
  try {
    const { id } = req.params
    const userFarm = await User.findOne({ _id: id })
      .populate('profile')
      .populate('farm')

    res.json({
      message: 'Success',
      userFarm: userFarm
    })
  } catch (error) {
    next(error)
  }
}

const User = require("../models/User.model.js");
const { registerSchema, loginSchema } = require('../helpers/Validation.Schema')
const createError = require('http-errors')
const { signAccessToken, signRefreshToken } = require('../helpers/jwt_helpers.js')

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
    if (err.isJoi === true) return next(createError.BadRequest(`Invalid login credentials`))
    next(err)
  }
}

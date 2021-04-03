const User = require("../models/User.model.js");
const { registerSchema } = require('../helpers/Validation.Schema')
const createError = require('http-errors')

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

    const savedUser = newUser.save()
    
    if (savedUser) {
      res.status(200).send({ message: 'Account created', user: savedUser })
    }
  } catch (err) {
    next(err)
  }
}

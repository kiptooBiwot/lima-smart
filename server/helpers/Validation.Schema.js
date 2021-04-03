const Joi = require('joi')

const registerSchema = Joi.object({
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).trim(),
    role: Joi.string().trim()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).trim()
})

module.exports = {
    registerSchema,
    loginSchema
}
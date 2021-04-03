const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['Farmer', 'Agronomist', 'Admin'],
      default: 'Farmer'
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = mongoose.model('User', UserSchema)

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
    account_status: {
      type: String,
      required: true,
      enum: ['Enabled', 'Disabled'],
      default: 'Enabled'
    },
    user_profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile'
    },
    user_farms: [{
      type: Schema.Types.ObjectId,
      ref: 'Farm'
    }]
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

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model('User', UserSchema)

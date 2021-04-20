const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new Schema(
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
    }
    // profile: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Profile'
    // }
  },
  { timestamps: true }
);

UserSchema.virtual('profile', {
  ref: 'Profile',
  localField: '_id',
  foreignField: 'user_id',
  justOne: true
})
// Create association with the Farm model
UserSchema.virtual('farm', {
  ref: 'Farm',
  localField: '_id',
  foreignField: 'owner',
  justOne: false
})

UserSchema.set('toObject', { virtuals: true })
UserSchema.set('toJSON', { virtuals: true })

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
    console.log(this.password)
    console.log(password)
    return bcrypt.compareSync(password, this.password);
  } catch (error) {
    throw error;
  }
};

module.exports = model('User', UserSchema)

const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  middle_name: {
    type: String,
    trim: true,
  },
  sirname: {
    type: String,
    trim: true,
    required: true,
  },
  mobile_phone_no: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  education_level: {
    type: String,
    enum: ['Primary Level', 'Secondary Level', 'Certificate', 'Diploma', 'Bachelors Degree', 'Masters Level', 'Doctorate Level'],
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Profile', profileSchema)

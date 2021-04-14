const mongoose = require('mongoose')

const farmSchema = new mongoose.Schema({
  acrage: {
    type: Number,
    trim: true,
    required: true
  },
  intended_crop: {
    type: String,
    trim: true,
    required: true
  },
  county: {
    type: String,
    requried: true,
    trim: true
  },
  sub_county: {
    type: String,
    required: true,
    trim: true
  },
  ward: {
    type: String,
    required: true,
    trim: true
  },
  village: {
    type: String,
    trim: true
  },
  farm_owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
}, { timestamps: true })

module.exports = mongoose.model('Farm', farmSchema)
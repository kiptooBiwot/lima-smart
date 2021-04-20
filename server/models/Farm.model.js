const { Schema, model } = require('mongoose')


const farmSchema = new Schema({
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Farm', farmSchema)
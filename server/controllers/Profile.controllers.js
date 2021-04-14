const createError = require("http-errors");
const Profile = require("../models/Profile.model");

module.exports.getProfile = async (req, res, next) => {
  try {
    res.send("Profile!")
  } catch (error) {
    next(error)
  }
}

module.exports.createProfile = async (req, res, next) => {
  try {
    res.send("Profile saved")
  } catch (error) {
    next(error)
  }
};

module.exports.updateProfile = async (req, res, next) => {
  try {
    res.send('Updated')
  } catch (error) {
    next(error)
  }
}

module.exports.deleteProfile = async (req, res, next) => {
  try {
    res.send('Deleted!')
  } catch (error) {
    next(error)
  }
}

const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

const User = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  addressName: {
    type: String,
    require: true,
  },
  /*phoneNumber: {
    type: Number,
    require: true,
    validate(number) {
      validator.isMobilePhone(phoneNumber);
    },
  },*/
  email: {
    type: String,
    require: true,
    validate(emailAddress) {
      validator.isEmail(emailAddress);
    },
  },
  dob: {
    type: Date,
  },
});

module.exports = mongoose.model("user", User);

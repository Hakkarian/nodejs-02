const { Schema, model } = require('mongoose');

const { handleEmailDublicationError } = require('../middlewares/handleEmailDublicationError');

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const subList = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      validate: {
        validator: (v) => {
          return emailRegexp.test(v);
        },
        message: "Please enter a valid email, for example 'apple@gmail.com'",
      },
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    subscription: {
      type: String,
      enum: {
        values: subList,
        message: "Expected 'starter', 'pro' or 'business' subscription",
      },
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true
    },
    verify: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required']
    }
  },
  { versionKey: false }
);

userSchema.post('save', handleEmailDublicationError)

const User = model('user', userSchema)

module.exports = {
    User, emailRegexp
}
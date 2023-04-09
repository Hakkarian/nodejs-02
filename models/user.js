const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: emailRegexp,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
}, { versionKey: false })

userSchema.post('save', handleMongooseError)

const User = model('user', userSchema)

module.exports = {
    User, emailRegexp
}
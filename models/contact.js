const { Schema, model } = require('mongoose');
const ErrorHandler = require('../helpers');



const contactSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    unique: true
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, { versionKey: null });

contactSchema.post("save", ErrorHandler.handleDublicationError);

const Contact = model("contact", contactSchema)

module.exports = {
  Contact
};
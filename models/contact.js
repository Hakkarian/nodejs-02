const { Schema, model } = require("mongoose");
const handleContactDublicationError = require("../middlewares/handleContactDublicationError");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "missing required name field"],
    },
    email: {
      type: String,
      required: [true, "missing required email field"],
    },
    phone: {
      type: String,
      required: [true, "missing required phone field"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: null }
);

contactSchema.post("save", handleContactDublicationError);

const Contact = model("contact", contactSchema);

module.exports = Contact;

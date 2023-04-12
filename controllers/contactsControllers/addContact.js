const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

// in this router with POST-request (adding) we're defining a path and route handler, in which...
const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  // ...intanciating the result of asynchronic adding an object with passed value
  const result = await Contact.create({ ...req.body, owner });
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions, display the message (based on status) and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result, display the result in browser, with help of the json-format
  res.status(201).json(result);
};

module.exports = {
    addContact: ctrlWrapper(addContact)
}
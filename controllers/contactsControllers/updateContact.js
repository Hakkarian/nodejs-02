const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

// in this route handler with PUT-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const updateContact = async (req, res) => {
  const { contactId } = req.params;
  // we're declaring the result of the update method, which takes as parameters an id and an object with name, email and phone
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw ErrorHandler(400);
  }
  res.json(result);
};

module.exports = {
    updateContact: ctrlWrapper(updateContact)
}
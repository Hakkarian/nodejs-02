const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

// in this route handler with DELETE-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const removeContact = async (req, res) => {
  // destructuring said id from the request
  const { contactId } = req.params;

  // ...intanciating the result of asynchronic deleting contact by id function
  // important - if we choose deleteOne, we are passing an entire object, if findById - only an id argument
  const result = await Contact.findByIdAndRemove(contactId);
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions, display the message and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result display the status of response (204 - data has been succesfully deleted) with json successful message
  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
    removeContact: ctrlWrapper(removeContact)
}
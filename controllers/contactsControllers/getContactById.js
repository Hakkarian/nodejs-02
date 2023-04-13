const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

// in this route handler with GET-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const getContactById = async (req, res) => {
  // destructuring said id from the request
  const { contactId } = req.params;
  // ...intanciating the result of asynchronic getting contact by id function
  const result = await Contact.findById(contactId);
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result, display the result in browser, with help of the json-format
  res.status(200).json(result);
};

module.exports = {
    getContactById: ctrlWrapper(getContactById)
}
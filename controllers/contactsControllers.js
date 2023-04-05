// here we're defining an object with methods of getting, getting by id, adding, updating partially and fully, deleting the data
const { Contact } = require("../models/contact");
// an error handler for data validation

const { ctrlWrapper } = require("../helpers/controllerWrapper");
const ErrorHandler = require("../helpers");





// in this router with GET-request we're defining a path and route handler, in which...
const listContacts = async (req, res) => {
  // ...intanciating the result of asynchronic getting all contacts function
  const result = await Contact.find();
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions and move to the catch block.
    throw ErrorHandler(404);
  }
  // ...and displaying the result in browser, with help of the json-format
  res.status(200).json(result);
  // ...and catching with an error
};
// in this route handler with GET-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const getContactById = async (req, res) => {
  // destructuring said id from the request
  const { contactId } = req.params;
  // ...intanciating the result of asynchronic getting contact by id function
  const result = await Contact.findById(contactId);
  console.log(contactId);
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result, display the result in browser, with help of the json-format
  res.status(200).json(result);
};
// in this router with POST-request (adding) we're defining a path and route handler, in which...
const addContact = async (req, res) => {
  // if we don't have an error (data is correct), we're destructuring properties from req.body (notes) object
  const { name, email, phone } = req.body;
  // ...intanciating the result of asynchronic adding an object with passed value
  const result = await Contact.create({ name, email, phone });
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions, display the message (based on status) and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result, display the result in browser, with help of the json-format
  res.status(201).json(result);
};
// in this route handler with DELETE-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const removeContact = async (req, res) => {
  // destructuring said id from the request
  const { contactId } = req.params;

  // ...intanciating the result of asynchronic deleting contact by id function
  // important - if we choose deleteOne, we are passing an entire object, if findById - only an id argument
  const result = await Contact.findByIdAndRemove(contactId)
  console.log(result);
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions, display the message and move to the catch block.
    throw ErrorHandler(404);
  }
  // if we have the result display the status of response (204 - data has been succesfully deleted) with json successful message
  res.status(200).json({ message: "contact deleted" });
};
// in this route handler with PUT-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const updateContact = async (req, res) => {
  const { contactId } = req.params;
  // we're declaring the result of the update method, which takes as parameters an id and an object with name, email and phone
  const result = await Contact.findByIdAndUpdate(
    contactId,
    req.body, {new: true}
  );
  if (!result) {
    throw ErrorHandler(400);
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  // important, findByIdAndUpdate updates only new values in the object
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw ErrorHandler(404);
  }
  console.log(result)
  res.status(200).json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};

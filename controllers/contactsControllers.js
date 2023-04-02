// here we're defining an object with methods of getting, getting by id, adding, updating partially and fully, deleting the data
const contacts = require("../models/contacts");
// an error handler for data validation
const ErrorHandler = require("../helpers");

// in this router with GET-request we're defining a path and route handler, in which...
const listContacts = async (req, res, next) => {
  // we're covering the route handler with try/catch block...
  try {
    // ...intanciating the result of asynchronic getting all contacts function
    const result = await contacts.listContacts();
    // if we don't have the result...
    if (!result) {
      // ...skip further instructions and move to the catch block.
      throw ErrorHandler(404);
    }
    // ...and displaying the result in browser, with help of the json-format
    res.status(200).json(result);
    // ...and catching with an error
  } catch (error) {
    // my favorite part. Basically, calling the next function means to skip all further instructions inside the loop and going to the next route handler.
    // But here we have  next(error) with passed error argument, which means that we're calling to the next middleware function,
    // which includes an "error" and thus contains FOUR parameters(error, req, res, next).
    // In the project can be only one middleware for the sake of simplicity
    // exact path to the error handler - app.js, 21 row
    next(error);
  }
};
// in this route handler with GET-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const getContactById = async (req, res, next) => {
  try {
    // destructuring said id from the request
    const { contactId } = req.params;
    // ...intanciating the result of asynchronic getting contact by id function
    const result = await contacts.getContactById(contactId);
    // if we don't have the result...
    if (!result) {
      // ...skip further instructions and move to the catch block.
      throw ErrorHandler(404);
    }
    // if we have the result, display the result in browser, with help of the json-format
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
// in this router with POST-request (adding) we're defining a path and route handler, in which...
const addContact = async (req, res, next) => {
    try {
      // if we don't have an error (data is correct), we're destructuring properties from req.body (notes) object
      const { name, email, phone } = req.body;
      // ...intanciating the result of asynchronic adding an object with passed value
      const result = await contacts.addContact({ name, email, phone });
      // if we don't have the result...
      if (!result) {
        // ...skip further instructions, display the message (based on status) and move to the catch block.
        throw ErrorHandler(404);
      }
      // if we have the result, display the result in browser, with help of the json-format
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
};
  // in this route handler with DELETE-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const removeContact = async (req, res, next) => {
  try {
    // destructuring said id from the request
    const { contactId } = req.params;

    // ...intanciating the result of asynchronic deleting contact by id function
    const result = await contacts.removeContact(contactId);
    console.log(result)
    // if we don't have the result...
    if (!result) {
      // ...skip further instructions, display the message and move to the catch block.
      throw ErrorHandler(404);
    }
    // if we have the result display the status of response (204 - data has been succesfully deleted) with json successful message
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};
// in this route handler with PUT-request we're defining the path , which includes an id parameter (in the request). And function-handler, in which...
const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    // we're declaring the result of the update method, which takes as parameters an id and an object with name, email and phone
    const result = await contacts.updateContact(contactId, {
      name,
      email,
      phone,
    });
    if (!result) {
      throw ErrorHandler(400)
    }
    console.log("wrong")
    res.json(result);
  } catch (error) {
    res.status(400).json({message: "missing fields"})
  }
};

module.exports = {
  listContacts, getContactById, addContact, removeContact, updateContact
};



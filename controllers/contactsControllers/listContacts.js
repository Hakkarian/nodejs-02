const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

// in this router with GET-request we're defining a path and route handler, in which...
const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  if (favorite) {
    const favorites = await Contact.find({ owner, favorite }).populate(
      "owner",
      "email subscription"
    );
    res.status(200).json(favorites);
  }
  // ...intanciating the result of asynchronic getting all contacts function
  const result = await Contact.find({ owner }, "", { skip, limit }).populate(
    "owner",
    "email subscription"
  );
  // if we don't have the result...
  if (!result) {
    // ...skip further instructions and move to the catch block.
    throw ErrorHandler(404);
  }
  // ...and displaying the result in browser, with help of the json-format
  res.status(200).json(result);
  // ...and catching with an error
};

module.exports = {
    listContacts: ctrlWrapper(listContacts)
}
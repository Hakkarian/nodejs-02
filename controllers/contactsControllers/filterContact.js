const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

const filterContact = async (req, res) => {
  const { favorite } = req.query;

  const result = await Contact.find({ favorite });
  if (!result) {
    throw ErrorHandler(404);
  }

  res.status(200).json(result);
};

module.exports = {
    filterContact: ctrlWrapper(filterContact)
}
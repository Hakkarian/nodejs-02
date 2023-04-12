const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

const filterContact = async (req, res) => {
  const { favorite } = req.query;
  const { _id} = req.user
  console.log(req)

  const result = await Contact.find({ _id, favorite });
  console.log(result)
  if (!result) {
    throw ErrorHandler(404);
  }

  res.status(200).json(result);
};

module.exports = {
    filterContact: ctrlWrapper(filterContact)
}
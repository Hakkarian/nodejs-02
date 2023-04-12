const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  // important, findByIdAndUpdate updates only new values in the object
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw ErrorHandler(404);
  }

  res.status(200).json(result);
};

module.exports = {
    updateStatusContact: ctrlWrapper(updateStatusContact)
}
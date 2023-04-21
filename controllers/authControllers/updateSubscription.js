const { ctrlWrapper, ErrorHandler } = require("../../helpers");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { id } = req.params;

  const result = await User.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!result) {
    throw ErrorHandler(404);
  }
  res.status(201).json({ message: result });
};

module.exports = {
    updateSubscription: ctrlWrapper(updateSubscription)
}
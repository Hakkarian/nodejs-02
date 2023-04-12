const { ErrorHandler } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, { token: "" });
  if (!user) {
    throw ErrorHandler(401);
  }
  res.status(204).json({ message: "" });
};

module.exports = {
    logout
}
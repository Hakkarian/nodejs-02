const bcrypt = require('bcryptjs');
const { ErrorHandler, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");


const register = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    throw ErrorHandler(400, "Password is too short");
    }
    
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ ...req.body, password: hashPassword });

  const { email, subscription } = user;

  res.status(201).json({ user: { email, subscription } });
};

module.exports = {
    register: ctrlWrapper(register)
}

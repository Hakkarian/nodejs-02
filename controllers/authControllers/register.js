const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { ErrorHandler, ctrlWrapper, sendNodeMail } = require("../../helpers");
const { User } = require("../../models");
const { nanoid } = require('nanoid');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  
  if (password.length < 6) {
    throw ErrorHandler(400, "Password is too short");
    }
    
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const user = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });
  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click to verify email</a>`
  }
  const { subscription } = user;

  // await sendgridEmail(verifyEmail) also worked fine

  await sendNodeMail(verifyEmail)

  res.status(201).json({ user: { email, subscription } });
};

module.exports = {
    register: ctrlWrapper(register)
}

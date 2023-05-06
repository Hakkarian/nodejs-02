const { ctrlWrapper, ErrorHandler, sendgridEmail } = require("../../helpers");
const { User } = require("../../models");

const repeatVerifyEmail = async(req, res) => {
    const { email } = req.body
    const { BASE_URL } = process.env;
    const user = await User.findOne({ email })

    console.log(email)
    
    if (!user) {
        throw ErrorHandler(401, 'Email not found')
    }

    if (user.verify) {
        throw ErrorHandler(400, 'Verification has already been passed')
    }

    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target="_blank" href="${BASE_URL}/users/verify/${user.verificationToken}">Click to verify email</a>`,
    };

    await sendgridEmail(verifyEmail)

    res.json({message: 'Verify email success'})
}

module.exports = { repeatVerifyEmail: ctrlWrapper(repeatVerifyEmail) };
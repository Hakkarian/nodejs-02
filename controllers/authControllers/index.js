const { register } = require('./register');
const { verifyEmail } = require('./verifyEmail');
const { repeatVerifyEmail } = require('./repeatVerifyEmail');
const { login } = require('./login');
const { getCurrent } = require('./getCurrent');
const { updateSubscription } = require('./updateSubscription');
const { updateAvatar } = require('./updateAvatar');
const { logout } = require('./logout');


module.exports = {
    register, verifyEmail, repeatVerifyEmail, login, getCurrent, updateSubscription, updateAvatar, logout
}
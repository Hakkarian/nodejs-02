const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact } = require('./contactsControllers');
const {
    register, verifyEmail, repeatVerifyEmail, login, getCurrent, updateSubscription, updateAvatar, logout
} = require("./authControllers");
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
    updateAvatar,
    filterContact,
    register,
    verifyEmail,
    repeatVerifyEmail,
    login,
    getCurrent,
    logout,
    updateSubscription
};
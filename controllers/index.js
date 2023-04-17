const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact } = require('./contactsControllers');
const {
    register, login, getCurrent, updateSubscription, updateAvatar, logout
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
    login,
    getCurrent,
    logout,
    updateSubscription
};
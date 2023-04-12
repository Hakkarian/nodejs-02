const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact } = require('./contactsControllers');
const {
    signup, login, getCurrent, updateSubscription, logout
} = require("./authControllers");
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
    filterContact,
    signup,
    login,
    getCurrent,
    logout,
    updateSubscription
};